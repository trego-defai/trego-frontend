"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { BalanceCards } from "@/components/dashboard/BalanceCards";
import { AlgosOneTradesTable } from "@/components/dashboard/AlgosOneTradesTable";
import { BalanceHistorySection } from "@/components/dashboard/BalanceHistorySection";

export function TradePage() {
  return (
    <div className="min-h-screen bg-[#0a0b0d] text-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Balance Cards Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <BalanceCards />
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Latest AlgosOne Trades */}
            <AlgosOneTradesTable />

            {/* Balance History */}
            <BalanceHistorySection />
          </div>
        </main>
      </div>
    </div>
  );
}

export default TradePage;
