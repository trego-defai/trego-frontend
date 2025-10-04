"use client";

import { useEffect, useRef } from "react";

interface ChartPoint {
  x: number;
  y: number;
}

function AnimatedChart() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Generate deterministic chart data points (no Math.random to avoid hydration mismatch)
    const generateChartData = (width: number, height: number, seed = 0): ChartPoint[] => {
      const points: ChartPoint[] = [];
      const numPoints = 50;

      for (let i = 0; i <= numPoints; i++) {
        const x = (i / numPoints) * width;
        // Create a trending upward chart with some volatility
        const baseY = height * 0.8 - (i / numPoints) * height * 0.4;
        const volatility = Math.sin(i * 0.3 + seed) * height * 0.1 + Math.sin(i * 0.7 + seed) * height * 0.05;
        const y = Math.max(height * 0.1, Math.min(height * 0.9, baseY + volatility));

        points.push({ x, y });
      }

      return points;
    };

    // Convert points to SVG path
    const pointsToPath = (points: ChartPoint[]): string => {
      if (points.length === 0) return "";

      let path = `M ${points[0].x} ${points[0].y}`;

      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];

        // Create smooth curves using quadratic bezier
        const cpx = (prev.x + curr.x) / 2;
        const _cpy = (prev.y + curr.y) / 2;

        path += ` Q ${cpx} ${prev.y} ${curr.x} ${curr.y}`;
      }

      return path;
    };

    let animationSeed = 0;

    const updateChart = () => {
      const rect = svg.getBoundingClientRect();
      const width = rect.width || 800;
      const height = rect.height || 400;

      const points = generateChartData(width, height, animationSeed);
      const pathData = pointsToPath(points);

      // Update the main line
      const mainLine = svg.querySelector("#main-line") as SVGPathElement;
      if (mainLine) {
        mainLine.setAttribute("d", pathData);
      }

      // Create gradient fill area
      const fillPath = pathData + ` L ${width} ${height} L 0 ${height} Z`;
      const fillArea = svg.querySelector("#fill-area") as SVGPathElement;
      if (fillArea) {
        fillArea.setAttribute("d", fillPath);
      }

      animationSeed += 0.1; // Increment seed for animation
    };

    // Initial chart generation
    updateChart();

    // Animate chart updates
    const interval = setInterval(() => {
      updateChart();
    }, 3000);

    // Handle resize
    const handleResize = () => {
      updateChart();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full">
      <svg ref={svgRef} className="w-full h-full opacity-20" viewBox="0 0 800 400" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="rgb(5, 150, 105)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(6, 78, 59)" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(52, 211, 153)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="rgb(16, 185, 129)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgb(5, 150, 105)" stopOpacity="0.6" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid lines */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(16, 185, 129)" strokeWidth="0.5" strokeOpacity="0.1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Fill area under the line */}
        <path id="fill-area" fill="url(#chartGradient)" className="transition-all duration-1000 ease-in-out" />

        {/* Main chart line */}
        <path
          id="main-line"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          filter="url(#glow)"
          className="transition-all duration-1000 ease-in-out"
        />

        {/* Additional decorative lines */}
        <path
          id="secondary-line"
          fill="none"
          stroke="rgb(16, 185, 129)"
          strokeWidth="1"
          strokeOpacity="0.3"
          strokeDasharray="5,5"
          className="transition-all duration-1000 ease-in-out"
        />
      </svg>

      {/* Floating data points */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-60" />
      <div
        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce opacity-40"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-teal-400 rounded-full animate-pulse opacity-50"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-1 h-1 bg-emerald-300 rounded-full animate-bounce opacity-60"
        style={{ animationDelay: "0.5s" }}
      />
    </div>
  );
}

export default AnimatedChart;
