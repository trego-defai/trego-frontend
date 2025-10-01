"use client";

import { AssetsPanel } from "@/components/trade/AssetsPanel";
import { Chart } from "@/components/trade/Chart";
import { HistoryTab } from "@/components/trade/HistoryTab";
import { OrdersTab } from "@/components/trade/OrdersTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useResponsive } from "@/hooks";
import { cn } from "@/lib/utils";
import ChatPanel from "@/components/chat";

interface TradingTabsProps {
  className?: string;
  isDesktop: boolean;
}

const tabConfig = [
  {
    value: "orders",
    label: "Orders",
    Content: OrdersTab,
  },
  {
    value: "history",
    label: "History",
    Content: HistoryTab,
  },
];

function TradingTabs({ className = "", isDesktop }: TradingTabsProps) {
  return (
    <div className={cn("bg-gray-900/50 border border-gray-800 rounded-lg", className)}>
      <Tabs defaultValue="orders" className="flex flex-col h-full">
        <div className={cn(isDesktop ? "p-4" : "p-3 sm:p-4", "pb-0")}>
          <TabsList className="w-full">
            {tabConfig.map(({ value, label }) => (
              <TabsTrigger
                key={value}
                value={value}
                className={cn("flex-1", !isDesktop && "text-xs sm:text-sm")}
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className={cn(isDesktop ? "flex-1 px-4 min-h-0 overflow-hidden" : "p-3 sm:p-4")}>
          {tabConfig.map(({ value, Content }) => (
            <TabsContent
              key={value}
              value={value}
              className={cn(
                isDesktop
                  ? "h-full overflow-y-auto"
                  : "max-h-[250px] sm:max-h-[300px] overflow-y-auto"
              )}
            >
              <Content />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}

export function TradePage() {
  const { isDesktop } = useResponsive();

  function renderMobileLayout() {
    return (
      <div className="flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 flex-1 overflow-y-auto w-full">
        <Chart className="w-full flex-shrink-0 min-w-0 flex-1" />
        <TradingTabs className="flex-shrink-0" isDesktop={false} />
        <AssetsPanel className="w-full flex-shrink-0 min-w-0" />
        <ChatPanel className="w-full min-h-[350px] sm:min-h-[400px] flex-shrink-0 min-w-0" />
      </div>
    );
  }

  function renderDesktopLayout() {
    return (
      <div className="grid flex-1 w-full min-h-0 grid-cols-[minmax(0,70%)_minmax(300px,1fr)] gap-4 p-4">
        <div className="flex flex-col gap-4 min-w-0 xl:min-w-[800px]">
          <Chart className="flex-shrink-0" />
          <div className="flex-1 flex gap-4 min-h-0">
            <AssetsPanel className="flex-1 min-w-0 min-h-[300px]" />
            <ChatPanel className="flex-1 min-w-0 min-h-[300px]" />
          </div>
        </div>
        <div className="min-w-[300px] xl:min-w-[350px] flex flex-col">
          <TradingTabs className="h-full flex-col" isDesktop />
        </div>
      </div>
    );
  }

  return <>{isDesktop ? renderDesktopLayout() : renderMobileLayout()}</>;
}

export default TradePage;
