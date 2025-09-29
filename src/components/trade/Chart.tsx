"use client";

import { Button } from "@/components/ui/button";
import TradingView from "./TradingView";
import React, { useState } from "react";

interface ChartProps {
  className?: string;
}

const TIMEFRAMES = [
  { label: "1m", value: "1m" },
  { label: "5m", value: "5m" },
  { label: "15m", value: "15m" },
  { label: "1h", value: "1h" },
  { label: "4h", value: "4h" },
  { label: "1d", value: "1d" },
];

function ChartToolbar() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("15m");

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-3 py-2 border-b border-gray-800 gap-2 sm:gap-3">
      <div className="flex items-center space-x-2 sm:space-x-3">
        <h3 className="text-sm sm:text-base font-semibold text-white">  </h3>
        <span className="text-green-400 text-xs">$43,250.00</span>
        <span className="text-green-400 text-xs">+2.34%</span>
      </div>
      <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto">
        {TIMEFRAMES.map(({ label, value }) => (
          <Button
            key={value}
            variant="ghost"
            size="sm"
            className={`text-xs px-2 py-0.5 sm:px-2 sm:py-1 ${
              selectedTimeframe === value
                ? "text-white bg-blue-600/20"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setSelectedTimeframe(value)}
            aria-pressed={selectedTimeframe === value}
            type="button"
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export function Chart({ className }: ChartProps) {
  // Generate unique key for each Chart instance to prevent conflicts
  const chartKey = React.useMemo(() => `chart-${Math.random().toString(36).substr(2, 9)}`, []);

  return (
    <div
      className={`bg-gray-900/50 max-h-[484px] h-full border border-gray-800 rounded-lg flex flex-col w-full min-w-0 ${className}`}
    >
      <ChartToolbar />
      <div className="flex-1 p-4">
        <TradingView key={chartKey} />
      </div>
    </div>
  );
}
