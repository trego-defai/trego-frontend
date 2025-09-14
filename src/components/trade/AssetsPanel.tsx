"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowUpRightIcon, ArrowDownRightIcon } from "@/components/ui/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AssetsPanelProps {
  className?: string;
}

interface Position {
  symbol: string;
  size: number;
  value: number;
  pnl: number;
  pnlPercent: number;
}

function getSymbolIcon(symbol: string) {
  const icons: Record<string, string> = {
    BTC: "",
    ETH: "",
  };
  return icons[symbol] || "";
}

function formatCurrency(value: number) {
  return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatPnl(pnl: number) {
  return `${pnl >= 0 ? "+" : ""}$${formatCurrency(pnl)}`;
}

function formatPnlPercent(percent: number) {
  return `${percent >= 0 ? "+" : ""}${percent.toFixed(2)}%`;
}

function PositionRow({ position }: { position: Position }) {
  const isProfit = position.pnl >= 0;
  return (
    <div
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-3 px-3 bg-gray-800/60 rounded-xl gap-2 sm:gap-0 border border-gray-700/60 hover:shadow-lg transition-shadow"
      tabIndex={0}
      aria-label={`${position.symbol} position`}
    >
      <div className="flex items-center space-x-3">
        <div className="w-9 h-9 bg-blue-600/30 rounded-full flex items-center justify-center border border-blue-700/40">
          <Avatar>
            <AvatarImage src={getSymbolIcon(position.symbol)} />
            <AvatarFallback>{position.symbol}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="text-white text-sm font-semibold">{position.symbol}</span>
            <Badge
              variant="outline"
              className="border-blue-500/40 text-blue-400 bg-blue-900/20 px-1.5 py-0.5 text-[10px] font-medium"
            >
              {position.size} {position.symbol}
            </Badge>
          </div>
          <span className="text-gray-400 text-xs">Value: ${formatCurrency(position.value)}</span>
        </div>
      </div>
      <div className="flex flex-col items-end w-full sm:w-auto">
        <span
          className={`flex items-center gap-1 text-sm font-semibold ${
            isProfit ? "text-green-400" : "text-red-400"
          }`}
        >
          {isProfit ? (
            <ArrowUpRightIcon className="w-4 h-4" />
          ) : (
            <ArrowDownRightIcon className="w-4 h-4" />
          )}
          {formatPnl(position.pnl)}
        </span>
        <span className={`text-xs ${isProfit ? "text-green-300" : "text-red-300"} font-medium`}>
          {formatPnlPercent(position.pnlPercent)}
        </span>
      </div>
    </div>
  );
}

function getTotalPnl(positions: Position[]): number {
  return positions.reduce((acc, pos) => acc + pos.pnl, 0);
}

function getTotalPnlPercent(positions: Position[]): number {
  const totalValue = positions.reduce((acc, pos) => acc + pos.value, 0);
  if (totalValue === 0) return 0;
  return (getTotalPnl(positions) / totalValue) * 100;
}

function getPortfolioValue(positions: Position[]): number {
  return positions.reduce((acc, pos) => acc + pos.value, 0);
}

export function AssetsPanel({ className }: AssetsPanelProps) {
  // Mock data
  const positions: Position[] = [
    { symbol: "BTC", size: 0.25, value: 10812.5, pnl: 850.3, pnlPercent: 8.54 },
    { symbol: "ETH", size: 0.75, value: 1638.17, pnl: 384.26, pnlPercent: 30.66 },
  ];

  const portfolioValue = getPortfolioValue(positions);
  const totalPnl = getTotalPnl(positions);
  const totalPnlPercent = getTotalPnlPercent(positions);

  const isProfit = totalPnl >= 0;
  const isProfitPercent = totalPnlPercent >= 0;

  return (
    <section
      className={`bg-accent/10 border border-gray-800 rounded-2xl w-full min-w-0 shadow-lg ${className}`}
      aria-label="Portfolio Overview"
    >
      <header className="p-4 border-b border-gray-800 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
          Portfolio
          <Badge
            variant="secondary"
            className="ml-2 bg-blue-900/30 border-blue-700/40 text-blue-300 px-2 py-0.5 text-xs"
          >
            Live
          </Badge>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">
              Total Value
            </span>
            <span className="text-white font-bold text-base sm:text-lg">
              ${formatCurrency(portfolioValue)}
            </span>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">Total P&L</span>
            <span
              className={`font-bold text-base sm:text-lg ${
                isProfit ? "text-green-400" : "text-red-400"
              }`}
            >
              {isProfit ? "+" : ""}${formatCurrency(totalPnl)}
            </span>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">P&L %</span>
            <span
              className={`font-bold text-base sm:text-lg ${
                isProfitPercent ? "text-green-400" : "text-red-400"
              }`}
            >
              {isProfitPercent ? "+" : ""}
              {totalPnlPercent.toFixed(2)}%
            </span>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">P&L (USD)</span>
            <span
              className={`font-bold text-base sm:text-lg ${
                isProfit ? "text-green-400" : "text-red-400"
              }`}
            >
              {formatPnl(totalPnl)}
            </span>
          </div>
        </div>
      </header>

      <div className="p-4">
        <h4 className="text-sm font-semibold text-white mb-3 tracking-tight">Open Positions</h4>
        <div className="space-y-3">
          {positions.length > 0 ? (
            positions.map((position) => <PositionRow key={position.symbol} position={position} />)
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400 text-sm">No open positions</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
