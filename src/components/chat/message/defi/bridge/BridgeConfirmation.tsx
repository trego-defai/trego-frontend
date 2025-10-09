import { bridgeService } from "@/service/bridgeService";
import { useWalletStore } from "@/store/useWalletStore";
import { BridgeQuoteData } from "@/types/bridge";
import { ArrowRight, Loader2 } from "lucide-react";
import { useCallback, useState } from "react";
import { Button } from "../../../../ui/button";
import { Card, CardContent, CardHeader } from "../../../../ui/card";
import { MessageMarkdown } from "../../MessageMarkdown";
import { useUser } from "@clerk/nextjs";

type BridgeStatus = "idle" | "bridging" | "success" | "error";

export interface BridgeConfirmationProps {
  bridgeData: BridgeQuoteData;
  isLoading?: boolean;
}

export const BridgeConfirmation = ({ bridgeData, isLoading }: BridgeConfirmationProps) => {
  const { account } = useWalletStore();
  const [status, setStatus] = useState<BridgeStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { user } = useUser();

  const {
    amount,
    symbolSrcToken,
    symbolDstToken,
    srcChainKey,
    dstChainKey,
    dstAddress,
    quote,
    decimalsSrcToken,
    decimalsDstToken,
  } = bridgeData;

  const estimatedTime = quote?.duration?.estimated;
  const bridgeFee = quote?.fees?.[0];
  const srcAmount = quote?.srcAmount;
  const dstAmount = quote?.dstAmount;

  // Format amounts with proper decimals
  const formattedSrcAmount =
    srcAmount && decimalsSrcToken ? (Number(srcAmount) / Math.pow(10, decimalsSrcToken)).toFixed(6) : amount;
  const formattedDstAmount =
    dstAmount && decimalsDstToken ? (Number(dstAmount) / Math.pow(10, decimalsDstToken)).toFixed(6) : amount;

  const isProcessing = status === "bridging";
  const hasBridged = status === "success";
  const hasError = status === "error";

  const isBridgeDisabled =
    isLoading ||
    isProcessing ||
    hasBridged ||
    !symbolSrcToken ||
    !symbolDstToken ||
    !amount ||
    !account?.address ||
    !user?.id;

  const handleBridge = useCallback(async () => {
    if (isBridgeDisabled) return;

    setStatus("bridging");
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await bridgeService.executeBridge({
        quote,
        user_address: user?.id || "",
      });

      // Check if response has error
      if (response.data?.data?.error) {
        throw new Error(response.data.data.error);
      }

      // Check if response message indicates error
      if (response.data?.message && !response.data.message.toLowerCase().includes("success")) {
        // If message is an error message
        if (
          response.data.message.toLowerCase().includes("insufficient") ||
          response.data.message.toLowerCase().includes("error") ||
          response.data.message.toLowerCase().includes("failed")
        ) {
          throw new Error(response.data.message);
        }
      }

      setStatus("success");
      const txHash = response.data?.data?.transactionHash?.hash || response.data?.data?.hash;
      if (txHash) {
        setSuccessMessage(
          `Bridge completed successfully!\n\n[View transaction](https://explorer.aptoslabs.com/txn/${txHash}?network=mainnet)`,
        );
      } else {
        setSuccessMessage(response.data?.message || "Bridge transaction completed successfully");
      }
    } catch (error: any) {
      console.error("Bridge error:", error);

      let errorMsg = "Bridge failed. Please try again.";

      // Extract error message from different error formats
      if (error?.response?.data?.data?.error) {
        errorMsg = error.response.data.data.error;
      } else if (error?.response?.data?.message) {
        errorMsg = error.response.data.message;
      } else if (error?.message) {
        errorMsg = error.message;
      }

      setErrorMessage(errorMsg);
      setStatus("error");
    }
  }, [isBridgeDisabled, quote, user?.id]);

  const BridgeButton = useCallback(() => {
    return (
      <Button
        aria-busy={isProcessing}
        className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-opacity"
        disabled={isBridgeDisabled}
        onClick={handleBridge}
      >
        {isProcessing ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="animate-spin w-4 h-4" />
            <span>Processing Bridge...</span>
          </div>
        ) : (
          "Confirm Bridge"
        )}
      </Button>
    );
  }, [isProcessing, isBridgeDisabled, handleBridge]);

  const ErrorState = useCallback(
    () => (
      <div className="space-y-3">
        <div className="w-full p-3 rounded-lg bg-destructive/10 border border-destructive/20">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-destructive rounded-full mt-1.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-destructive font-medium mb-1">Bridge Failed</p>
              <p className="text-xs text-destructive/80 whitespace-pre-wrap break-words">{errorMessage}</p>
            </div>
          </div>
        </div>
        <Button
          className="w-full h-11 bg-muted hover:bg-muted/80 text-foreground font-medium rounded-lg transition-opacity"
          onClick={() => setStatus("idle")}
          variant="outline"
        >
          Try Again
        </Button>
      </div>
    ),
    [errorMessage],
  );

  const SuccessState = useCallback(
    () => (
      <div className="w-full p-3 rounded-lg bg-green-500/10 border border-green-500/20">
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">Bridge Completed!</p>
            {successMessage && (
              <div className="text-xs text-foreground/80 break-words prose prose-sm max-w-none">
                <MessageMarkdown>{successMessage}</MessageMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    [successMessage],
  );

  return (
    <Card className="w-full max-w-md bg-card border border-border shadow-sm">
      <CardHeader className="pb-3">
        <h3 className="font-medium text-card-foreground uppercase tracking-wide">Bridge Confirmation</h3>
      </CardHeader>

      <CardContent className="space-y-4 px-6">
        {/* Bridge Route */}
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 p-3 bg-muted/50 rounded-lg border border-border">
              <div className="text-xs text-muted-foreground mb-1">From</div>
              <div>
                <div className="font-medium">
                  {formattedSrcAmount} {symbolSrcToken}
                </div>
                <div className="text-xs text-muted-foreground uppercase">{srcChainKey}</div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </div>

            <div className="flex-1 p-3 bg-muted/50 rounded-lg border border-border">
              <div className="text-xs text-muted-foreground mb-1">To</div>
              <div>
                <div className="font-medium">
                  {formattedDstAmount} {symbolDstToken}
                </div>
                <div className="text-xs text-muted-foreground uppercase">{dstChainKey}</div>
              </div>
            </div>
          </div>

          {/* Destination Address */}
          <div className="p-3 bg-muted/30 rounded-lg border border-border">
            <div className="text-xs text-muted-foreground mb-1">Destination Address</div>
            <div className="text-sm font-mono break-all">{dstAddress}</div>
          </div>
        </div>

        {/* Bridge Details */}
        <div className="space-y-2 p-3 bg-muted/20 rounded-lg border border-border">
          {estimatedTime && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Estimated Time</span>
              <span className="font-medium">{estimatedTime} seconds</span>
            </div>
          )}
          {bridgeFee && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Bridge Fee</span>
              <span className="font-medium">{(Number(bridgeFee.amount) / 100000000).toFixed(8)} APT</span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">You will receive</span>
            <span className="font-medium">
              {formattedDstAmount} {symbolDstToken}
            </span>
          </div>
        </div>

        {/* Action buttons and states */}
        <div className="space-y-2 pt-2">
          {!hasBridged && !hasError && <BridgeButton />}
          {!hasBridged && hasError && <ErrorState />}
          {hasBridged && <SuccessState />}
        </div>
      </CardContent>
    </Card>
  );
};
