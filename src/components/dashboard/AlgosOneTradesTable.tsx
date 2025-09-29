"use client";

import React from 'react';

interface TradeData {
  pair: string;
  type: 'Short' | 'Long';
  amount: string;
  isPositive: boolean;
}

const tradesData: TradeData[] = [
  { pair: 'PEPE/USD', type: 'Short', amount: '+35.38USD', isPositive: true },
  { pair: 'CRV/USD', type: 'Long', amount: '+47.62USD', isPositive: true },
  { pair: 'LINK/USD', type: 'Short', amount: '+23.17USD', isPositive: true },
  { pair: 'LDO/USD', type: 'Long', amount: '+12.45USD', isPositive: true },
  { pair: 'OP/USD', type: 'Short', amount: '+56.34USD', isPositive: true },
  { pair: 'UNI/USD', type: 'Short', amount: '+18.91USD', isPositive: true },
  { pair: 'ETH/USD', type: 'Short', amount: '+42.77USD', isPositive: true },
  { pair: 'LINK/USD', type: 'Long', amount: '+29.26USD', isPositive: true },
  { pair: 'MRK/USD', type: 'Long', amount: '+30.50USD', isPositive: true },
  { pair: 'APE/USD', type: 'Long', amount: '+10.07USD', isPositive: true },
  { pair: 'INU/USD', type: 'Long', amount: '+61.84USD', isPositive: true },
  { pair: 'CRV/USD', type: 'Long', amount: '+14.93USD', isPositive: true },
  { pair: 'MRK/USD', type: 'Short', amount: '+50.21USD', isPositive: true },
];

export function AlgosOneTradesTable() {
  return (
    <div className="bg-gradient-to-br from-purple-900/20 via-[#1a1b1e] to-indigo-900/30 border border-purple-500/20 rounded-xl p-6 shadow-lg shadow-purple-500/10">
      <h3 className="text-white text-lg font-semibold mb-6">Latest AlgosOne Trades</h3>

      <div className="overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-3 gap-4 pb-4 mb-4 border-b border-gray-800">
          <div className="text-gray-400 text-sm font-medium">Pair</div>
          <div className="text-gray-400 text-sm font-medium">Type</div>
          <div className="text-gray-400 text-sm font-medium text-right">Amount</div>
        </div>

        {/* Table Body */}
        <div className="space-y-3 max-h-[400px] overflow-y-auto scrollbar-hide">
          {tradesData.map((trade, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 py-2 hover:bg-gray-800/30 rounded-lg transition-colors"
            >
              {/* Pair */}
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm font-medium">{trade.pair}</span>
              </div>

              {/* Type */}
              <div className="flex items-center">
                <span
                  className={`text-sm px-2 py-1 rounded-full text-xs font-medium ${
                    trade.type === 'Long'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {trade.type}
                </span>
              </div>

              {/* Amount */}
              <div className="text-right">
                <span
                  className={`text-sm font-medium ${
                    trade.isPositive ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {trade.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}