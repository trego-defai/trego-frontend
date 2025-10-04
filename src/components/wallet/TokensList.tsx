"use client";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Coins } from "lucide-react";
import { Token } from "./types";

interface TokensListProps {
  tokens: Token[];
  isLoading: boolean;
}

export function TokensList({ tokens, isLoading }: TokensListProps) {
  return (
    <Card className="p-6 flex flex-col min-h-0">
      <div className="flex items-center gap-2 mb-4 flex-shrink-0">
        <Coins className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Tokens</h3>
      </div>

      <div className="space-y-2 overflow-y-auto flex-1 pr-2">
        {isLoading ? (
          <>
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </>
        ) : tokens.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Coins className="w-12 h-12 text-muted-foreground/50 mb-3" />
            <p className="text-muted-foreground text-sm">No tokens found</p>
          </div>
        ) : (
          tokens.map((token) => (
            <div key={token.symbol} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Coins className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">{token.name}</div>
                  <div className="text-xs text-muted-foreground">{token.symbol}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{token.balance}</div>
                <div className="text-xs text-muted-foreground">{token.symbol}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}
