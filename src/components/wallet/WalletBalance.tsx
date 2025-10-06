"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Copy, ExternalLink, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { WalletAccount } from "./types";

interface WalletBalanceProps {
  account: WalletAccount;
  balance: string;
  isLoadingBalance: boolean;
  onRefresh: () => void;
}

export function WalletBalance({ account, balance, isLoadingBalance, onRefresh }: WalletBalanceProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <Card className="p-6 flex-shrink-0">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Balance</h2>
        <Button variant="ghost" size="sm" onClick={onRefresh} disabled={isLoadingBalance}>
          <RefreshCw className={`w-4 h-4 ${isLoadingBalance ? "animate-spin" : ""}`} />
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          {isLoadingBalance ? (
            <>
              <Skeleton className="h-12 w-48 mb-2" />
              <Skeleton className="h-4 w-24" />
            </>
          ) : (
            <>
              <div className="text-4xl font-bold mb-1">{balance} APT</div>
              <div className="text-sm text-muted-foreground">Aptos Mainnet</div>
            </>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3 p-3 bg-muted/50 rounded-lg">
            <div className="flex-1 min-w-0">
              <div className="text-xs text-muted-foreground mb-1">Address</div>
              <div className="text-sm font-mono break-all">{account.address}</div>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm" onClick={() => copyToClipboard(account.address)}>
                <Copy className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={`https://explorer.aptoslabs.com/account/${account.address}?network=mainnet`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
