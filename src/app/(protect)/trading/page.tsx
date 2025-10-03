"use client";

import { AlgosOneTradesTable } from "@/components/dashboard/AlgosOneTradesTable";
import { BalanceCards } from "@/components/dashboard/BalanceCards";
import { BalanceHistorySection } from "@/components/dashboard/BalanceHistorySection";

export default function TradingPage() {
  return (
    <main className="flex-1 flex items-center justify-center p-6">
      <div className="w-full max-w-full space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <BalanceCards />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <AlgosOneTradesTable />
          <BalanceHistorySection />
        </div>
      </div>
    </main>
  );
}
