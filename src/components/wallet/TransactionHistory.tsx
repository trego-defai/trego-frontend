"use client";

import { Card } from "@/components/ui/card";
import { ArrowDownLeft, ArrowUpRight, Clock, ExternalLink } from "lucide-react";
import { Transaction } from "./types";

interface TransactionHistoryProps {
  transactions: Transaction[];
}

export function TransactionHistory({ transactions }: TransactionHistoryProps) {
  function openInAptosScan(hash: string) {
    window.open(`https://explorer.aptoslabs.com/txn/${hash}?network=mainnet`, "_blank");
  }

  return (
    <Card className="p-6 flex flex-col min-h-0 flex-1">
      <div className="flex items-center gap-2 mb-4 flex-shrink-0">
        <Clock className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
      </div>

      <div className="flex-1 overflow-x-auto">
        {transactions.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Clock className="w-12 h-12 mx-auto mb-2 opacity-20" />
            <p className="text-sm">No transactions yet</p>
          </div>
        ) : (
          <div className="w-full min-w-[600px] max-h-[calc(100vh-500px)] overflow-y-auto">
            <table className="w-full">
              <thead className="border-b sticky top-0 bg-background z-10">
                <tr className="text-sm text-muted-foreground">
                  <th className="text-left py-3 px-2 font-medium">Type</th>
                  <th className="text-left py-3 px-2 font-medium">Function Type</th>
                  <th className="text-right py-3 px-2 font-medium">Amount</th>
                  <th className="text-center py-3 px-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr
                    key={tx.hash}
                    className="border-b hover:bg-muted/30 transition-colors cursor-pointer"
                    onClick={() => openInAptosScan(tx.hash)}
                  >
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            tx.type === "received" ? "bg-green-500/10" : "bg-red-500/10"
                          }`}
                        >
                          {tx.type === "received" ? (
                            <ArrowDownLeft className="w-4 h-4 text-green-500" />
                          ) : (
                            <ArrowUpRight className="w-4 h-4 text-red-500" />
                          )}
                        </div>
                        <span className="capitalize text-sm font-medium">{tx.type}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-xs text-muted-foreground">Transfer</span>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <div className={`font-semibold ${tx.type === "received" ? "text-green-500" : "text-red-500"}`}>
                        {tx.type === "received" ? "+" : "-"}
                        {tx.amount} {tx.token}
                      </div>
                      {tx.gasFee && <div className="text-xs text-muted-foreground mt-1">Gas -{tx.gasFee} APT</div>}
                    </td>
                    <td className="py-3 px-2 text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openInAptosScan(tx.hash);
                        }}
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Card>
  );
}
