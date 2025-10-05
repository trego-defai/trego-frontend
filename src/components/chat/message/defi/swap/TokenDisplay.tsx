import Image from "next/image";
import { TokenMappingProp } from "@/types/token";

export interface TokenDisplayProps {
  tokenInfo?: TokenMappingProp;
  tokenAmount?: string;
  usdValue?: string;
  displayLabel?: string;
}

export function TokenDisplay({ tokenInfo, tokenAmount, usdValue, displayLabel }: TokenDisplayProps) {
  return (
    <div className="flex flex-col gap-2 p-3 bg-muted rounded-lg border border-border">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">{displayLabel || "\u00A0"}</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-foreground">{tokenAmount || "0"}</span>
          <span className="text-xs text-muted-foreground mt-0.5">{usdValue || "\u00A0"}</span>
        </div>
        <div className="flex items-center gap-2 px-2.5 py-1.5 bg-background rounded-lg border border-border min-h-[32px] min-w-[64px]">
          {tokenInfo?.logoUrl ? (
            <Image
              src={tokenInfo.logoUrl}
              alt={tokenInfo.symbol}
              className="w-5 h-5 rounded-full"
              width={20}
              height={20}
            />
          ) : (
            <div className="w-5 h-5 rounded-full bg-muted-foreground/10" />
          )}
          <span className="font-medium text-foreground">{tokenInfo?.symbol || "\u00A0"}</span>
        </div>
      </div>
    </div>
  );
}
