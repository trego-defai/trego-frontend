import { TOKENS } from "@/lib/constants/token";
import { SwapEstimateItem } from "@/types/swap";
import { ChevronDown, Loader2, Sparkles } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../../../../ui/button";
import { Card, CardContent, CardHeader } from "../../../../ui/card";
import { Badge } from "../../../../ui/badge";
import { MessageMarkdown } from "../../MessageMarkdown";
import { TokenDisplay } from "./TokenDisplay";
import { defiService } from "@/service/defiService";

const POLL_INTERVAL = 12000; // 12 seconds

export interface PreSwapProps {
  item: SwapEstimateItem;
  isLoading?: boolean;
  isBestOption?: boolean;
}

export const PreSwap = ({ item, isLoading, isBestOption = false }: PreSwapProps) => {
  const [swapData, setSwapData] = useState<SwapEstimateItem>(item);
  const [hasSwapped, setHasSwapped] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [isPolling, _setIsPolling] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);
  const [hasError, setHasError] = useState<string | null>(null);
  const [permanentFailure, setPermanentFailure] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState<string | null>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { fromToken, toToken, fromAmount, toAmount, fromAmountUsd, toAmountUsd } = swapData || {};

  const formattedValues = useMemo(
    () => ({
      sellFiat: fromAmountUsd ? `$${fromAmountUsd.toFixed(2)}` : "",
      buyFiat: toAmountUsd ? `$${toAmountUsd.toFixed(2)}` : "",
      exchangeRate:
        toAmount && fromAmount && Number(fromAmount) > 0
          ? `1 ${fromToken} = ${(Number(toAmount) / Number(fromAmount)).toFixed(6)} ${toToken}`
          : "",
    }),
    [fromAmount, toAmount, fromAmountUsd, toAmountUsd, fromToken, toToken],
  );

  const isSwapDisabled = useMemo(
    () =>
      isLoading ||
      isSwapping ||
      hasSwapped ||
      !fromToken ||
      !toToken ||
      !fromAmount ||
      (!toAmount && !isPolling) ||
      permanentFailure,
    [isLoading, isSwapping, hasSwapped, fromToken, toToken, fromAmount, toAmount, isPolling, permanentFailure],
  );

  const isRetryDisabled = useMemo(
    () => isRetrying || isPolling || hasSwapped || !fromToken || !toToken || !fromAmount,
    [isRetrying, isPolling, hasSwapped, fromToken, toToken, fromAmount],
  );

  // API handlers
  const fetchLatestSwapData = useCallback(async () => {
    // TODO: Implement API call to fetch latest swap data
    // Example: return await swapService.getEstimate({ fromToken, toToken, fromAmount });
    return undefined;
  }, []);

  const handleSwap = useCallback(async () => {
    if (isSwapDisabled) return;

    setIsSwapping(true);
    setHasError(null);

    try {
      await defiService.swapExecute({
        userAddress: "0x0000000000000000000000000000000000000000",
        fromToken: {
          tokenAddress: fromToken,
          faAddress: fromToken,
          name: fromToken,
          symbol: fromToken,
          decimals: 18,
        },
        toToken: {
          tokenAddress: toToken,
          faAddress: toToken,
          name: toToken,
          symbol: toToken,
          decimals: 18,
        },
        amountIn: fromAmount || "0",
        amountOut: toAmount || "0",
        path: swapData?.path || [],
        slippage: 0.5,
        recipient: "0x0000000000000000000000000000000000000000",
      });
      setHasSwapped(true);
      setMessageSuccess("Swap completed successfully");
    } catch (error) {
      setHasError(error instanceof Error ? error.message : "Swap failed");
      setPermanentFailure(true);
    } finally {
      setIsSwapping(false);
    }
  }, [isSwapDisabled]);

  const handleRetry = useCallback(async () => {
    if (isRetryDisabled) return;

    setIsRetrying(true);
    setHasError(null);
    setPermanentFailure(false);

    try {
      const newData = await fetchLatestSwapData();
      if (newData) {
        setSwapData(newData);
      } else {
        throw new Error("Failed to get swap data");
      }
    } catch (error) {
      setHasError(error instanceof Error ? error.message : "Failed to update swap data");
      setPermanentFailure(true);
    } finally {
      setIsRetrying(false);
    }
  }, [isRetryDisabled, fetchLatestSwapData]);

  useEffect(() => {
    if (hasSwapped || permanentFailure) return;

    let isMounted = true;

    const updatePrice = async () => {
      try {
        const newData = await fetchLatestSwapData();
        if (isMounted && newData) {
          setSwapData(newData);
        }
      } catch (error) {
        if (isMounted) {
          setHasError("Failed to update swap data");
          setPermanentFailure(true);
          console.error("Price update failed:", error);
        }
      }
    };

    updatePrice();
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
    const isProcessing = isLoading || isSwapping || isPolling;

    return (
      <Button
        aria-busy={isProcessing}
        className="w-full h-10 hover:bg-primary/50 text-primary font-medium rounded-lg transition-opacity"
        disabled={isSwapDisabled}
        onClick={handleSwap}
        variant="outline"
      >
        {isProcessing ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="animate-spin w-4 h-4" />
            <span>Processing...</span>
          </div>
        ) : (
          "Swap Tokens"
        )}
      </Button>
    );
  }, [isLoading, isSwapping, isPolling, isSwapDisabled, handleSwap]);

  const ErrorState = useCallback(
    () => (
      <div className="space-y-2">
        <div className="w-full p-2.5 rounded-lg bg-destructive/10 border border-destructive/20">
          <p className="text-sm text-destructive text-center">{hasError}</p>
        </div>
        <Button
          className="w-full h-10 bg-destructive hover:opacity-90 text-destructive-foreground font-medium rounded-lg transition-opacity"
          disabled={isRetryDisabled}
          onClick={handleRetry}
          variant="destructive"
        >
          {isRetrying || isPolling ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="animate-spin w-4 h-4" />
              <span>Retrying...</span>
            </div>
          ) : (
            "Try Again"
          )}
        </Button>
      </div>
    ),
    [hasError, isRetryDisabled, handleRetry, isRetrying, isPolling],
  );

  const SuccessState = useCallback(
    () => (
      <div className="w-full text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
        <div className="flex items-center justify-center gap-2 text-primary font-medium mb-2">
          <div className="w-2 h-2 bg-primary rounded-full" />
          Swap Completed
        </div>
        {messageSuccess && (
          <div className="text-sm text-foreground">
            <MessageMarkdown>
              {typeof messageSuccess === "string" ? messageSuccess : JSON.stringify(messageSuccess)}
            </MessageMarkdown>
          </div>
        )}
      </div>
    ),
    [messageSuccess],
  );

  return (
    <Card className="w-full bg-card border border-border shadow-sm relative overflow-hidden">
      {isBestOption && (
        <div className="absolute top-0 right-0 z-20">
          <Badge className="bg-gradient-to-br from-amber-500 to-orange-500 text-white border-0 rounded-none rounded-bl-lg px-3 py-1 shadow-lg">
            <Sparkles className="w-3 h-3 mr-1" />
            Best Option
          </Badge>
        </div>
      )}
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-card-foreground uppercase tracking-wide">
            {swapData?.provider ? `${swapData.provider.replace(/_/g, " ")} Swap`.toUpperCase() : "TOKEN SWAP"}
          </h3>
          {isPolling && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Loader2 className="animate-spin w-3 h-3" />
              <span>Updating...</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Token swap display */}
        <div className="relative space-y-2">
          <TokenDisplay
            tokenInfo={TOKENS?.[fromToken]}
            tokenAmount={fromAmount}
            usdValue={formattedValues.sellFiat}
            displayLabel="Sell"
          />
          <div className="flex justify-center">
            <div className="absolute z-10 bg-background border border-border rounded-full p-1.5">
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
          <TokenDisplay
            tokenInfo={TOKENS?.[toToken]}
            tokenAmount={toAmount}
            usdValue={formattedValues.buyFiat}
            displayLabel="Buy"
          />
        </div>

        {/* Exchange rate */}
        {!isPolling && formattedValues.exchangeRate && !hasSwapped && (
          <div className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
            <span>
              {formattedValues.exchangeRate.split("=")[0]} ={" "}
              <span className="font-medium">{formattedValues.exchangeRate.split("=")[1]}</span>
            </span>
          </div>
        )}

        {/* Action buttons and states */}
        <div className="space-y-2 pt-2">
          {!hasSwapped && !hasError && <SwapButton />}
          {!hasSwapped && hasError && <ErrorState />}
          {hasSwapped && <SuccessState />}
        </div>
      </CardContent>
    </Card>
  );
};
