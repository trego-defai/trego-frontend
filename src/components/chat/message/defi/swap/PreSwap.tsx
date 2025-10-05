import { defiService } from "@/service/defiService";
import { useWalletStore } from "@/store/useWalletStore";
import { SwapEstimateItem } from "@/types/swap";
import { ChevronDown, Loader2, Sparkles } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Badge } from "../../../../ui/badge";
import { Button } from "../../../../ui/button";
import { Card, CardContent, CardHeader } from "../../../../ui/card";
import { MessageMarkdown } from "../../MessageMarkdown";
import { TokenDisplay } from "./TokenDisplay";

const POLL_INTERVAL = 20000; // 20 seconds

type SwapStatus = "idle" | "swapping" | "success" | "error" | "retrying" | "updating";

export interface PreSwapProps {
  item: SwapEstimateItem;
  isLoading?: boolean;
  isBestOption?: boolean;
}

export const PreSwap = ({ item, isLoading, isBestOption = false }: PreSwapProps) => {
  const { account } = useWalletStore();
  const [swapData, setSwapData] = useState<SwapEstimateItem | null>(item);
  const [status, setStatus] = useState<SwapStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [permanentFailure, setPermanentFailure] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { fromToken, toToken, fromAmount, toAmount, fromAmountUsd, toAmountUsd } = swapData || {};

  const formattedValues = useMemo(
    () => ({
      sellFiat: fromAmountUsd ? `$${fromAmountUsd.toFixed(2)}` : "",
      buyFiat: toAmountUsd ? `$${toAmountUsd.toFixed(2)}` : "",
      exchangeRate:
        toAmount && fromAmount && Number(fromAmount) > 0
          ? `1 ${fromToken?.symbol} = ${(Number(toAmount) / Number(fromAmount)).toFixed(6)} ${toToken?.symbol}`
          : "",
    }),
    [fromAmount, toAmount, fromAmountUsd, toAmountUsd, fromToken, toToken],
  );

  const isProcessing = status === "swapping" || status === "retrying" || status === "updating";
  const hasSwapped = status === "success";
  const hasError = status === "error";

  const isSwapDisabled =
    isLoading || isProcessing || hasSwapped || !fromToken || !toToken || !fromAmount || !toAmount || permanentFailure;

  const isRetryDisabled = isProcessing || hasSwapped || !fromToken || !toToken || !fromAmount;

  const fetchLatestSwapData = useCallback(async (): Promise<SwapEstimateItem | undefined> => {
    if (!fromToken || !toToken || !fromAmount) return undefined;

    const response = await defiService.swapEstimate({
      ...swapData,
    });
    return response.data;
  }, [fromToken, toToken, fromAmount]);

  const handleSwap = useCallback(async () => {
    if (isSwapDisabled || !account?.address) return;

    setStatus("swapping");
    setErrorMessage(null);
    setPermanentFailure(false);

    try {
      await defiService.swapExecute({
        ...swapData,
        userAddress: account.address,
      });
      setStatus("success");
      setSuccessMessage("Swap completed successfully");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Swap failed";
      setErrorMessage(message);
      setStatus("error");
    }
  }, [isSwapDisabled, account?.address, swapData]);

  const handleRetry = useCallback(async () => {
    if (isRetryDisabled) return;

    setStatus("retrying");
    setErrorMessage(null);
    setPermanentFailure(false);

    try {
      const newData = await fetchLatestSwapData();
      if (newData) {
        setSwapData(newData);
        setStatus("idle");
      } else {
        throw new Error("Failed to get swap data");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to update swap data";
      setErrorMessage(message);
      setStatus("error");
      setPermanentFailure(true);
    }
  }, [isRetryDisabled, fetchLatestSwapData]);

  // Polling for price updates
  useEffect(() => {
    if (hasSwapped || permanentFailure) return;

    let isMounted = true;

    const updatePrice = async () => {
      try {
        setStatus("updating");
        const newData = await fetchLatestSwapData();
        if (isMounted && newData) {
          setSwapData(newData);
          setStatus("idle");
        } else if (isMounted) {
          setStatus("idle");
        }
      } catch (error) {
        if (isMounted) {
          const message = "Failed to update swap data";
          setErrorMessage(message);
          setStatus("error");
          setPermanentFailure(true);
          console.error("Price update failed:", error);
        }
      }
    };

    intervalRef.current = setInterval(updatePrice, POLL_INTERVAL);

    return () => {
      isMounted = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [fetchLatestSwapData, hasSwapped, permanentFailure]);

  const SwapButton = useCallback(() => {
    const isButtonProcessing = isLoading || isProcessing;

    return (
      <Button
        aria-busy={isButtonProcessing}
        className="w-full h-10 sm:h-11 hover:bg-primary/50 text-primary font-medium rounded-lg transition-opacity text-sm sm:text-base"
        disabled={isSwapDisabled}
        onClick={handleSwap}
        variant="outline"
      >
        {isButtonProcessing ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="animate-spin w-4 h-4" />
            <span className="hidden sm:inline">Processing...</span>
            <span className="sm:hidden">Processing</span>
          </div>
        ) : (
          <>
            <span className="hidden sm:inline">Swap Tokens</span>
            <span className="sm:hidden">Swap</span>
          </>
        )}
      </Button>
    );
  }, [isLoading, isProcessing, isSwapDisabled, handleSwap]);

  const ErrorState = useCallback(
    () => (
      <div className="space-y-2">
        <div className="w-full p-2 sm:p-2.5 rounded-lg bg-destructive/10 border border-destructive/20">
          <p className="text-xs sm:text-sm text-destructive text-center break-words">{errorMessage}</p>
        </div>
        <Button
          className="w-full h-10 sm:h-11 bg-destructive hover:opacity-90 text-destructive-foreground font-medium rounded-lg transition-opacity text-sm sm:text-base"
          disabled={isRetryDisabled}
          onClick={handleRetry}
          variant="destructive"
        >
          {status === "retrying" ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="animate-spin w-4 h-4" />
              <span className="hidden sm:inline">Retrying...</span>
              <span className="sm:hidden">Retrying</span>
            </div>
          ) : (
            "Try Again"
          )}
        </Button>
      </div>
    ),
    [errorMessage, isRetryDisabled, handleRetry, status],
  );

  const SuccessState = useCallback(
    () => (
      <div className="w-full text-center p-2 sm:p-3 rounded-lg bg-primary/10 border border-primary/20">
        <div className="flex items-center justify-center gap-2 text-primary font-medium mb-1 sm:mb-2">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span className="text-sm sm:text-base">Swap Completed</span>
        </div>
        {successMessage && (
          <div className="text-xs sm:text-sm text-foreground break-words">
            <MessageMarkdown>
              {typeof successMessage === "string" ? successMessage : JSON.stringify(successMessage)}
            </MessageMarkdown>
          </div>
        )}
      </div>
    ),
    [successMessage],
  );

  return (
    <Card className="w-full bg-card border border-border shadow-sm relative overflow-hidden">
      {isBestOption && (
        <div className="absolute top-0 right-0 z-20">
          <Badge className="bg-gradient-to-br from-amber-500 to-orange-500 text-white border-0 rounded-none rounded-bl-lg px-2 py-1 sm:px-3 shadow-lg">
            <Sparkles className="w-3 h-3 mr-1" />
            <span className="hidden sm:inline">Best Option</span>
            <span className="sm:hidden">Best</span>
          </Badge>
        </div>
      )}
      <CardHeader className="pb-2 sm:pb-3">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-card-foreground uppercase tracking-wide text-sm sm:text-base">
            {swapData?.provider ? `${swapData.provider.replace(/_/g, " ")} Swap`.toUpperCase() : "TOKEN SWAP"}
          </h3>
          {status === "updating" && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Loader2 className="animate-spin w-3 h-3" />
              <span className="hidden sm:inline">Updating...</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-2 sm:space-y-3 px-3 sm:px-6">
        {/* Token swap display */}
        <div className="relative space-y-1 sm:space-y-2">
          <TokenDisplay
            tokenInfo={fromToken}
            tokenAmount={fromAmount}
            usdValue={formattedValues.sellFiat}
            displayLabel="Sell"
          />
          <div className="flex justify-center">
            <div className="absolute z-10 bg-background border border-border rounded-full p-1 sm:p-1.5">
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
            </div>
          </div>
          <TokenDisplay
            tokenInfo={toToken}
            tokenAmount={toAmount}
            usdValue={formattedValues.buyFiat}
            displayLabel="Buy"
          />
        </div>

        {/* Exchange rate */}
        {status !== "updating" && formattedValues.exchangeRate && !hasSwapped && (
          <div className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1 px-2">
            <span className="break-words">
              {formattedValues.exchangeRate.split("=")[0]} ={" "}
              <span className="font-medium">{formattedValues.exchangeRate.split("=")[1]}</span>
            </span>
          </div>
        )}

        {/* Action buttons and states */}
        <div className="space-y-2 pt-1 sm:pt-2">
          {!hasSwapped && !hasError && <SwapButton />}
          {!hasSwapped && hasError && <ErrorState />}
          {hasSwapped && <SuccessState />}
        </div>
      </CardContent>
    </Card>
  );
};
