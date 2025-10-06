"use client";

import React, { useEffect, useRef } from "react";
import { createChart, ColorType, LineStyle, LineSeries } from "lightweight-charts";

interface MiniChartProps {
  data: number[];
  color: string;
  isPositive: boolean;
}

function MiniChart({ data, color, isPositive: _isPositive }: MiniChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [tooltipData, setTooltipData] = React.useState<{
    value: string;
    visible: boolean;
  }>({
    value: "",
    visible: false,
  });

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#6B7280",
      },
      width: chartContainerRef.current.clientWidth,
      height: 64,
      grid: {
        vertLines: { visible: false },
        horzLines: { visible: false },
      },
      rightPriceScale: {
        visible: false,
      },
      leftPriceScale: {
        visible: false,
      },
      timeScale: {
        visible: false,
      },
      crosshair: {
        vertLine: {
          visible: true,
          width: 1,
          color: color + "40",
          style: LineStyle.Solid,
        },
        horzLine: {
          visible: true,
          width: 1,
          color: color + "40",
          style: LineStyle.Solid,
        },
      },
      handleScroll: false,
      handleScale: false,
    });

    const lineSeries = chart.addSeries(LineSeries, {
      color: color,
      lineWidth: 2,
      lineStyle: LineStyle.Solid,
      lastValueVisible: false,
      priceLineVisible: false,
      pointMarkersVisible: true,
      lineType: 2, // 0 = simple line, 1 = step line, 2 = curved line
    });

    lineSeries.applyOptions({
      lineWidth: 2,
      color: color,
      lineType: 2, // Smooth curved line
    });

    const chartData = data.map((value, index) => ({
      time: index as any,
      value: value,
    }));

    lineSeries.setData(chartData);

    chart.timeScale().fitContent();

    // Show tooltip and highlight point on hover
    chart.subscribeCrosshairMove((param) => {
      if (!param.time || !param.seriesData || !param.seriesData.get(lineSeries)) {
        setTooltipData({ value: "", visible: false });
        return;
      }

      const dataPoint = param.seriesData.get(lineSeries) as any;
      if (dataPoint && dataPoint.value !== undefined) {
        setTooltipData({
          value: dataPoint.value.toFixed(2),
          visible: true,
        });
      }
    });

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [data, color]);

  return (
    <div className="relative h-16 w-full">
      <div ref={chartContainerRef} className="w-full h-full" />

      {/* Tooltip */}
      {tooltipData.visible && (
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap"
          style={{ color: color }}
        >
          {tooltipData.value}
        </div>
      )}
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
      case "Total Balance":
        return "bg-gradient-to-br from-blue-900/20 via-[#1a1b1e] to-cyan-900/30 border-blue-500/20 shadow-blue-500/10";
      case "Total Tokens":
        return "bg-gradient-to-br from-amber-900/20 via-[#1a1b1e] to-yellow-900/30 border-amber-500/20 shadow-amber-500/10";
      case "Checking Balance":
        return "bg-gradient-to-br from-red-900/20 via-[#1a1b1e] to-rose-900/30 border-red-500/20 shadow-red-500/10";
      default:
        return "bg-gradient-to-br from-[#1a1b1e] to-[#141517] border-gray-800/50 shadow-gray-500/10";
    }
  };

  return (
    <div className={`${getCardGradient(title)} border rounded-xl p-4 space-y-4 shadow-lg`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
        <div className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>{percentage}</div>
      </div>

      {/* Amount */}
      <div className="text-white text-2xl font-semibold">{amount}</div>

      {/* Mini Chart */}
      <MiniChart data={chartData} color={chartColor} isPositive={isPositive} />
    </div>
  );
}

export function BalanceCards() {
  const _tradingBalanceData = [42000, 13000, 72500, 43200, 43345.48];
  const totalBalanceData = [42000, 21800, 71100, 43000, 43345.48];
  const totalTokensData = [43000, 32800, 72900, 43100, 43345.48];
  const checkingBalanceData = [3500, 43200, 73000, 43100, 43345.48];

  return (
    <>
      {/* Trading Balance Card */}
      <div className="bg-gradient-to-br from-emerald-900/20 via-[#1a1b1e] to-green-900/30 border border-emerald-500/20 rounded-xl p-4 space-y-6 shadow-lg shadow-emerald-500/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-gray-400"
              >
                <rect x="1" y="3" width="22" height="18" rx="2" ry="2" />
                <line x1="1" y1="9" x2="23" y2="9" />
              </svg>
            </div>
            <h3 className="text-gray-400 text-sm font-medium">Trading Balance</h3>
          </div>
          <div className="text-green-500 text-sm">3.1%</div>
        </div>

        <div className="text-white text-2xl font-semibold">$43,345.48</div>

        {/* Deposit Button */}
        <button className="w-full bg-gradient-to-r from-brand to-[#0dd488] text-brand-foreground font-medium py-2 px-4 rounded-xl hover:from-brand/90 hover:to-[#0dd488]/90 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span>Deposit</span>
        </button>
      </div>

      {/* Other Balance Cards */}
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
    </>
  );
}
