"use client";

import React from 'react';

interface MiniChartProps {
  data: number[];
  color: string;
  isPositive: boolean;
}

function MiniChart({ data, color, isPositive }: MiniChartProps) {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue;

  return (
    <div className="relative h-16 w-full">
      <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
        {/* Chart Line */}
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          points={data
            .map((value, index) => {
              const x = (index / (data.length - 1)) * 100;
              const y = range === 0 ? 20 : 40 - ((value - minValue) / range) * 40;
              return `${x},${y}`;
            })
            .join(' ')}
        />

        {/* Gradient Fill */}
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.05 }} />
          </linearGradient>
        </defs>

        <polygon
          fill={`url(#gradient-${color})`}
          points={[
            `0,40`,
            ...data.map((value, index) => {
              const x = (index / (data.length - 1)) * 100;
              const y = range === 0 ? 20 : 40 - ((value - minValue) / range) * 40;
              return `${x},${y}`;
            }),
            `100,40`
          ].join(' ')}
        />

        {/* Data Points */}
        {data.map((value, index) => {
          const x = (index / (data.length - 1)) * 100;
          const y = range === 0 ? 20 : 40 - ((value - minValue) / range) * 40;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="1.5"
              fill={color}
            />
          );
        })}
      </svg>

      {/* Trend indicator */}
      <div className="absolute top-2 right-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d={isPositive ? "M7 14l5-5 5 5" : "M7 10l5 5 5-5"}
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

interface BalanceCardProps {
  title: string;
  amount: string;
  percentage: string;
  isPositive: boolean;
  chartData: number[];
  chartColor: string;
}

function BalanceCard({ title, amount, percentage, isPositive, chartData, chartColor }: BalanceCardProps) {
  const getCardGradient = (title: string) => {
    switch (title) {
      case 'Total Balance':
        return 'bg-gradient-to-br from-blue-900/20 via-[#1a1b1e] to-cyan-900/30 border-blue-500/20 shadow-blue-500/10';
      case 'Total Tokens':
        return 'bg-gradient-to-br from-amber-900/20 via-[#1a1b1e] to-yellow-900/30 border-amber-500/20 shadow-amber-500/10';
      case 'Checking Balance':
        return 'bg-gradient-to-br from-red-900/20 via-[#1a1b1e] to-rose-900/30 border-red-500/20 shadow-red-500/10';
      default:
        return 'bg-gradient-to-br from-[#1a1b1e] to-[#141517] border-gray-800/50 shadow-gray-500/10';
    }
  };

  return (
    <div className={`${getCardGradient(title)} w-[12rem] h-[13rem] border rounded-xl p-4 space-y-4 shadow-lg`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
        <div className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {percentage}
        </div>
      </div>

      {/* Amount */}
      <div className="text-white text-2xl font-semibold">
        {amount}
      </div>

      {/* Mini Chart */}
      <MiniChart data={chartData} color={chartColor} isPositive={isPositive} />
    </div>
  );
}

export function BalanceCards() {
  const tradingBalanceData = [42000, 43000, 42500, 43200, 43345.48];
  const totalBalanceData = [42000, 42800, 43100, 43000, 43345.48];
  const totalTokensData = [43000, 42800, 42900, 43100, 43345.48];
  const checkingBalanceData = [43500, 43200, 43000, 43100, 43345.48];

  return (
    <>
      {/* Trading Balance Card */}
      <div className="bg-gradient-to-br from-emerald-900/20 via-[#1a1b1e] to-green-900/30 border border-emerald-500/20 rounded-xl p-4 space-y-6 shadow-lg shadow-emerald-500/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
                <rect x="1" y="3" width="22" height="18" rx="2" ry="2"/>
                <line x1="1" y1="9" x2="23" y2="9"/>
              </svg>
            </div>
            <h3 className="text-gray-400 text-sm font-medium">Trading Balance</h3>
          </div>
          <div className="text-green-500 text-sm">3.1%</div>
        </div>

        <div className="text-white text-2xl font-semibold">
          $43,345.48
        </div>

        {/* Deposit Button */}
        <button className="w-full bg-gradient-to-r from-brand to-[#0dd488] text-brand-foreground font-medium py-2 px-4 rounded-xl hover:from-brand/90 hover:to-[#0dd488]/90 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <span>Deposit</span>
        </button>

      </div>

      {/* Other Balance Cards */}
      <div className="flex flex-row justify-between">
        <BalanceCard
          title="Total Balance"
          amount="$43,345.48"
          percentage="2.6637.AD"
          isPositive={true}
          chartData={totalBalanceData}
          chartColor="#1FFFA9"
        />

        <BalanceCard
          title="Total Tokens"
          amount="$43,345.48"
          percentage="2.6637.AD"
          isPositive={false}
          chartData={totalTokensData}
          chartColor="#f59e0b"
        />

        <BalanceCard
          title="Checking Balance"
          amount="$43,345.48"
          percentage="2.6637.AD"
          isPositive={false}
          chartData={checkingBalanceData}
          chartColor="#ef4444"
        />
      </div>
    </>
  );
}