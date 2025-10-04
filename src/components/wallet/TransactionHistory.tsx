"use client";

import { Card } from "@/components/ui/card";
import { ArrowDownLeft, ArrowUpRight, Clock } from "lucide-react";
import { toast } from "sonner";
import { Transaction } from "./types";

interface TransactionHistoryProps {
  transactions: Transaction[];
}

export function TransactionHistory({ transactions }: TransactionHistoryProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  return (
    <Card className="p-6 flex flex-col min-h-0 flex-1">
      <div className="flex items-center gap-2 mb-4 flex-shrink-0">
        <Clock className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
      </div>

      <div className="space-y-2 overflow-y-auto flex-1 pr-2">
        {transactions.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Clock className="w-12 h-12 mx-auto mb-2 opacity-20" />
            <p className="text-sm">No transactions yet</p>
          </div>
        ) : (
          transactions.map((tx) => (
            <div
              key={tx.hash}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tx.type === "received" ? "bg-green-500/10" : "bg-red-500/10"
                  }`}
                >
                  {tx.type === "received" ? (
                    <ArrowDownLeft className="w-5 h-5 text-green-500" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-red-500" />
                  )}
                </div>
                <div>
                  <div className="font-semibold capitalize">{tx.type}</div>
                  <div className="text-xs text-muted-foreground">{formatTimestamp(tx.timestamp)}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-semibold ${tx.type === "received" ? "text-green-500" : "text-red-500"}`}>
                  {tx.type === "received" ? "+" : "-"}
                  {tx.amount} {tx.token}
                </div>
                <button
                  onClick={() => copyToClipboard(tx.hash)}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {tx.hash}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}
