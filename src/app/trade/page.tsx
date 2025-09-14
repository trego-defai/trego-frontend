"use client";

import Navbar from "@/components/shared/Navbar";
import { AssetsPanel } from "@/components/trade/AssetsPanel";
import { Chart } from "@/components/trade/Chart";
import { ChatbotPanel } from "@/components/trade/ChatbotPanel";
import { HistoryTab } from "@/components/trade/HistoryTab";
import { OrdersTab } from "@/components/trade/OrdersTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TradePage() {
  return (
    <main className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      {/* Mobile & Tablet Layout - Stack vertically */}
      <div className="xl:hidden flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 flex-1 overflow-y-auto w-full">
        <Chart className="w-full flex-shrink-0 min-w-0 flex-1" />
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg flex-shrink-0">
          <Tabs defaultValue="orders" className="flex flex-col">
            <div className="p-3 sm:p-4 pb-0">
              <TabsList className="w-full">
                <TabsTrigger value="orders" className="flex-1 text-xs sm:text-sm">
                  Orders
                </TabsTrigger>
                <TabsTrigger value="history" className="flex-1 text-xs sm:text-sm">
                  History
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="p-3 sm:p-4">
              <TabsContent
                value="orders"
                className="max-h-[250px] sm:max-h-[300px] overflow-y-auto"
              >
                <OrdersTab />
              </TabsContent>
              <TabsContent
                value="history"
                className="max-h-[250px] sm:max-h-[300px] overflow-y-auto"
              >
                <HistoryTab />
              </TabsContent>
            </div>
          </Tabs>
        </div>
        <AssetsPanel className="w-full flex-shrink-0 min-w-0" />
        <ChatbotPanel className="w-full min-h-[350px] sm:min-h-[400px] flex-shrink-0 min-w-0" />
      </div>

      {/* Desktop Layout - 70/30 split using grid */}
      <div className="hidden xl:grid flex-1 w-full min-h-0 grid-cols-[minmax(0,70%)_minmax(300px,1fr)] gap-4 p-4">
        {/* Left Column - 70% */}
        <div className="flex flex-col gap-4 min-w-0 xl:min-w-[800px]">
          <Chart className="flex-shrink-0" />
          <div className="flex-1 flex gap-4 min-h-0">
            <AssetsPanel className="flex-1 min-w-0 min-h-[300px]" />
            <ChatbotPanel className="flex-1 min-w-0 min-h-[300px]" />
          </div>
        </div>
        {/* Right Column - 30% */}
        <div className="min-w-[300px] xl:min-w-[350px] flex flex-col">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg h-full flex flex-col">
            <Tabs defaultValue="orders" className="flex flex-col h-full">
              <div className="p-4 pb-0">
                <TabsList className="w-full">
                  <TabsTrigger value="orders" className="flex-1">
                    Orders
                  </TabsTrigger>
                  <TabsTrigger value="history" className="flex-1">
                    History
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="flex-1 px-4 min-h-0 overflow-hidden">
                <TabsContent value="orders" className="h-full overflow-y-auto">
                  <OrdersTab />
                </TabsContent>
                <TabsContent value="history" className="h-full overflow-y-auto">
                  <HistoryTab />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
