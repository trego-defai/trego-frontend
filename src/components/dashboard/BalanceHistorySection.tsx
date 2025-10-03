"use client";

import React, { useState } from 'react';

interface HistoryItem {
  time: string;
  currency: string;
  amount: string;
  rate: string;
  type: string;
  usdAmount: string;
}

const historyData: HistoryItem[] = [
  {
    time: '15 May 2020 5:00 pm',
    currency: 'USD',
    amount: '$219.78',
    rate: '$219.78',
    type: 'In',
    usdAmount: '$219.78'
  },
  {
    time: '15 May 2020 5:00 pm',
    currency: 'USD',
    amount: '$219.78',
    rate: '$219.78',
    type: 'In',
    usdAmount: '$219.78'
  },
  {
    time: '15 May 2020 5:00 pm',
    currency: 'USD',
    amount: '$219.78',
    rate: '$219.78',
    type: 'In',
    usdAmount: '$219.78'
  },
  {
    time: '15 May 2020 5:00 pm',
    currency: 'USD',
    amount: '$219.78',
    rate: '$219.78',
    type: 'In',
    usdAmount: '$219.78'
  },
  {
    time: '15 May 2020 5:00 pm',
    currency: 'USD',
    amount: '$219.78',
    rate: '$219.78',
    type: 'In',
    usdAmount: '$219.78'
  },
  {
    time: '15 May 2020 5:00 pm',
    currency: 'USD',
    amount: '$219.78',
    rate: '$219.78',
    type: 'In',
    usdAmount: '$219.78'
  },
  {
    time: '15 May 2020 5:00 pm',
    currency: 'USD',
    amount: '$219.78',
    rate: '$219.78',
    type: 'In',
    usdAmount: '$219.78'
  }
];

export function BalanceHistorySection() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'In', 'Out', 'Trading'];

  return (
    <div className="bg-gradient-to-br from-slate-900/20 via-[#1a1b1e] to-gray-900/30 border border-slate-500/20 rounded-xl p-6 shadow-lg shadow-slate-500/10">
      <h3 className="text-white text-lg font-semibold mb-6">Balance History</h3>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'bg-brand text-brand-foreground'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-6 gap-4 pb-4 mb-4 border-b border-gray-800">
          <div className="text-gray-400 text-sm font-medium">Time</div>
          <div className="text-gray-400 text-sm font-medium">Currency</div>
          <div className="text-gray-400 text-sm font-medium">Amount</div>
          <div className="text-gray-400 text-sm font-medium">Rate</div>
          <div className="text-gray-400 text-sm font-medium">Type</div>
          <div className="text-gray-400 text-sm font-medium text-right">USD Amount</div>
        </div>

        {/* Table Body */}
        <div className="space-y-3 max-h-[350px] overflow-y-auto scrollbar-hide">
          {historyData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-6 gap-4 py-2 hover:bg-gray-800/30 rounded-lg transition-colors"
            >
              {/* Time */}
              <div className="text-gray-300 text-sm">
                {item.time}
              </div>

              {/* Currency */}
              <div className="text-white text-sm font-medium">
                {item.currency}
              </div>

              {/* Amount */}
              <div className="text-white text-sm">
                {item.amount}
              </div>

              {/* Rate */}
              <div className="text-white text-sm">
                {item.rate}
              </div>

              {/* Type */}
              <div className="flex items-center">
                <span
                  className={`text-sm px-2 py-1 rounded-full text-xs font-medium ${
                    item.type === 'In'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {item.type}
                </span>
              </div>

              {/* USD Amount */}
              <div className="text-right">
                <span className="text-white text-sm font-medium">
                  {item.usdAmount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
        <span>In: 0 USD</span>
        <span>In: 0 USD</span>
        <span>In: 0 USD</span>
        <span>In: 0 USD</span>
      </div>
    </div>
  );
}