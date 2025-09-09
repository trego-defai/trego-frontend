"use client";

import React, { useEffect, useRef } from "react";
import { createChart, ColorType, AreaSeries } from "lightweight-charts";

const Features = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

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

    const lineSeries = chart.addSeries(AreaSeries, {
      lineColor: "#10b981",
      lineWidth: 3,
      topColor: "rgba(16, 185, 129, 0.4)",
      bottomColor: "rgba(16, 185, 129, 0.05)",
    });

    const data = [
      { time: "2024-01-01", value: 42.51 },
      { time: "2024-01-02", value: 45.11 },
      { time: "2024-01-03", value: 47.02 },
      { time: "2024-01-04", value: 44.32 },
      { time: "2024-01-05", value: 48.17 },
      { time: "2024-01-06", value: 52.89 },
      { time: "2024-01-07", value: 55.46 },
      { time: "2024-01-08", value: 58.92 },
      { time: "2024-01-09", value: 62.68 },
      { time: "2024-01-10", value: 65.67 },
      { time: "2024-01-11", value: 68.45 },
      { time: "2024-01-12", value: 71.23 },
      { time: "2024-01-13", value: 69.87 },
      { time: "2024-01-14", value: 73.45 },
      { time: "2024-01-15", value: 76.12 },
    ];

    lineSeries.setData(data);

    chart.timeScale().fitContent();

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Live Chart Section */}
        <div className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
          {/* Header with title and description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Super Agent</h2>
            <p className="text-slate-400">
              This is a live chart of the price of the asset.
            </p>
          </div>
            <div
              ref={chartContainerRef}
              className="w-full rounded-xl overflow-hidden bg-slate-900/30 border border-slate-600/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
