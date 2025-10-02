"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { BalanceCards } from "@/components/dashboard/BalanceCards";
import { AlgosOneTradesTable } from "@/components/dashboard/AlgosOneTradesTable";
import { BalanceHistorySection } from "@/components/dashboard/BalanceHistorySection";
import Background from "@/components/landing/Background";
import { DashboardContent } from "./dashboard";

export function TradePage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "trading":
        return (
          <>
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
          </>
        );
      case "dashboard":
        return (
          <div>
            <DashboardContent onTabChange={setActiveTab} />
          </div>
        );
      case "agent":
        return (
          <div className="flex items-center justify-center h-full">
            <h2 className="text-2xl text-slate-400">AI Assistant - Coming Soon</h2>
          </div>
        );
      case "wallet":
        return (
          <div className="flex items-center justify-center h-full">
            <h2 className="text-2xl text-slate-400">Wallet - Coming Soon</h2>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Background>
      <div className="h-screen text-white flex overflow-hidden">
        {/* Sidebar - Fixed, no scroll */}
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Main Content - Scrollable */}
        <div className="flex-1 flex flex-col overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
          {activeTab === "dashboard" ? (
            renderContent()
          ) : (
            <main className="flex-1 p-6 space-y-6">
              {renderContent()}
            </main>
          )}
        </div>
      </div>
    </Background>
  );
}

export default TradePage;
