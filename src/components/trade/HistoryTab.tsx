"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface HistoryTabProps {
  className?: string;
}

interface HistoryItem {
  id: string;
  pair: string;
  side: "buy" | "sell";
  size: number;
  price: number;
  total: number;
  fee: number;
  timestamp: Date;
}

export function HistoryTab({ className }: HistoryTabProps) {
  const [filters, setFilters] = useState({
    pair: "all",
    side: "all",
    dateFrom: "",
    dateTo: "",
  });

  // Mock data
  const history: HistoryItem[] = [
    {
      id: "1",
      pair: "BTC/USDT",
      side: "buy",
      size: 0.05,
      price: 43000,
      total: 2150,
      fee: 2.15,
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: "2",
      pair: "ETH/USDT",
      side: "sell",
      size: 1.2,
      price: 2180,
      total: 2616,
      fee: 2.62,
      timestamp: new Date(Date.now() - 7200000),
    },
    {
      id: "3",
      pair: "BTC/USDT",
      side: "sell",
      size: 0.02,
      price: 42800,
      total: 856,
      fee: 0.86,
      timestamp: new Date(Date.now() - 86400000),
    },
  ];

  const filteredHistory = history.filter((item) => {
    if (filters.pair !== "all" && item.pair !== filters.pair) return false;
    if (filters.side !== "all" && item.side !== filters.side) return false;
    // Add date filtering logic here if needed
    return true;
  });

  const clearFilters = () => {
    setFilters({
      pair: "all",
      side: "all",
      dateFrom: "",
      dateTo: "",
    });
  };

  return (
    <div className={className}>
      {/* Filters */}
      <div className="mb-4 p-3 bg-gray-800/30 border border-gray-700 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Pair</label>
            <select
              value={filters.pair}
              onChange={(e) => setFilters((prev) => ({ ...prev, pair: e.target.value }))}
              className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="all">All Pairs</option>
              <option value="BTC/USDT">BTC/USDT</option>
              <option value="ETH/USDT">ETH/USDT</option>
            </select>
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">Side</label>
            <select
              value={filters.side}
              onChange={(e) => setFilters((prev) => ({ ...prev, side: e.target.value }))}
              className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="all">All Sides</option>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-xs text-gray-400 mb-1">From Date</label>
            <input
              type="date"
              value={filters.dateFrom}
              onChange={(e) => setFilters((prev) => ({ ...prev, dateFrom: e.target.value }))}
              className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">To Date</label>
            <input
              type="date"
              value={filters.dateTo}
              onChange={(e) => setFilters((prev) => ({ ...prev, dateTo: e.target.value }))}
              className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <Button
          onClick={clearFilters}
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-white text-xs"
        >
          Clear Filters
        </Button>
      </div>

      {/* History List */}
      <div className="space-y-3">
        {filteredHistory.map((item) => (
          <div key={item.id} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2 sm:gap-0">
              <div className="flex items-center space-x-2 sm:space-x-3 flex-wrap">
                <span className="text-white font-medium text-sm">{item.pair}</span>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    item.side === "buy"
                      ? "bg-green-600/20 text-green-400"
                      : "bg-red-600/20 text-red-400"
                  }`}
                >
                  {item.side.toUpperCase()}
                </span>
              </div>

              <div className="text-left sm:text-right w-full sm:w-auto">
                <p className="text-white text-sm">${item.total.toLocaleString()}</p>
                <p className="text-gray-400 text-xs">{item.timestamp.toLocaleString()}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
              <div>
                <p className="text-gray-400 text-xs">Size</p>
                <p className="text-white">{item.size}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Price</p>
                <p className="text-white">${item.price.toLocaleString()}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-gray-400 text-xs">Fee</p>
                <p className="text-white">${item.fee.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}

        {filteredHistory.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400">No trading history</p>
          </div>
        )}
      </div>
    </div>
  );
}
