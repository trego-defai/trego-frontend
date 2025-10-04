"use client";

import { CandlestickSeries, ColorType, createChart, IChartApi } from "lightweight-charts";
import { useEffect, useRef, useState } from "react";

const TradingView = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    let isMounted = true;

    // Simulate loading delay for better UX
    const loadChart = async () => {
      // Minimum loading time for skeleton visibility
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (!isMounted || !chartContainerRef.current) return;

      // Clean up any existing chart
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }

      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: "transparent" },
          textColor: "#e2e8f0",
        },
        width: chartContainerRef.current.clientWidth,
        height: 400,
        grid: {
          vertLines: {
            color: "rgba(148, 163, 184, 0.1)",
          },
          horzLines: {
            color: "rgba(148, 163, 184, 0.1)",
          },
        },
        rightPriceScale: {
          borderColor: "rgba(148, 163, 184, 0.2)",
        },
        timeScale: {
          borderColor: "rgba(148, 163, 184, 0.2)",
        },
      });

      // Store chart reference for cleanup
      chartRef.current = chart;

      const candlestickSeries = chart.addSeries(CandlestickSeries, {
        upColor: "#10b981",
        downColor: "#ef4444",
        borderVisible: false,
        wickUpColor: "#10b981",
        wickDownColor: "#ef4444",
      });

      const data = [
        {
          open: 42.51,
          high: 45.2,
          low: 41.3,
          close: 45.11,
          time: "2024-01-01",
        },
        {
          open: 45.11,
          high: 48.5,
          low: 44.8,
          close: 47.02,
          time: "2024-01-02",
        },
        {
          open: 47.02,
          high: 49.2,
          low: 43.9,
          close: 44.32,
          time: "2024-01-03",
        },
        {
          open: 44.32,
          high: 49.8,
          low: 44.1,
          close: 48.17,
          time: "2024-01-04",
        },
        {
          open: 48.17,
          high: 54.2,
          low: 47.9,
          close: 52.89,
          time: "2024-01-05",
        },
        {
          open: 52.89,
          high: 56.8,
          low: 52.1,
          close: 55.46,
          time: "2024-01-06",
        },
        {
          open: 55.46,
          high: 60.2,
          low: 54.9,
          close: 58.92,
          time: "2024-01-07",
        },
        {
          open: 58.92,
          high: 64.5,
          low: 58.2,
          close: 62.68,
          time: "2024-01-08",
        },
        {
          open: 62.68,
          high: 67.8,
          low: 62.1,
          close: 65.67,
          time: "2024-01-09",
        },
        {
          open: 65.67,
          high: 70.2,
          low: 65.3,
          close: 68.45,
          time: "2024-01-10",
        },
        {
          open: 68.45,
          high: 73.5,
          low: 67.8,
          close: 71.23,
          time: "2024-01-11",
        },
        {
          open: 71.23,
          high: 72.9,
          low: 68.5,
          close: 69.87,
          time: "2024-01-12",
        },
        {
          open: 69.87,
          high: 75.2,
          low: 69.2,
          close: 73.45,
          time: "2024-01-13",
        },
        {
          open: 73.45,
          high: 78.6,
          low: 72.9,
          close: 76.12,
          time: "2024-01-14",
        },
        {
          open: 76.12,
          high: 79.5,
          low: 75.4,
          close: 78.23,
          time: "2024-01-15",
        },
      ];

      candlestickSeries.setData(data);
      chart.timeScale().fitContent();

      const handleResize = () => {
        if (chartRef.current && chartContainerRef.current) {
          chartRef.current.applyOptions({
            width: chartContainerRef.current.clientWidth,
          });
        }
      };

      window.addEventListener("resize", handleResize);

      setIsLoading(false);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };

    loadChart();

    // Cleanup function
    return () => {
      isMounted = false;
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-lg">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      )}
      <div
        ref={chartContainerRef}
        className={`w-full h-full transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
      />
    </div>
  );
};

export default TradingView;
