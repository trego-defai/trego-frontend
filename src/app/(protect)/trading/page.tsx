"use client";

import { AlgosOneTradesTable } from "@/components/dashboard/AlgosOneTradesTable";
import { BalanceCards } from "@/components/dashboard/BalanceCards";
import { BalanceHistorySection } from "@/components/dashboard/BalanceHistorySection";

export default function TradingPage() {
  return (
    <main className="flex-1 flex items-center justify-center p-6 relative">
      <div className="w-full max-w-full space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <BalanceCards />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <AlgosOneTradesTable />
          <BalanceHistorySection />
        </div>
      </div>

      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-card rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">Coming Soon</h2>
          <p className="text-muted-foreground">This feature is under development</p>
        </div>
      </div>
    </main>
  );
}
