"use client";

import React from "react";

export function ChartSkeleton() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-transparent">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
        {/* Horizontal lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute w-full h-px bg-gray-700"
            style={{ top: `${(i + 1) * 12.5}%` }}
          />
        ))}
        {/* Vertical lines */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute h-full w-px bg-gray-700"
            style={{ left: `${(i + 1) * 10}%` }}
          />
        ))}
      </div>

      {/* Chart skeleton content */}
      <div className="relative h-full flex items-end justify-between px-4 py-8">
        {/* Candlestick bars skeleton */}
        {[...Array(12)].map((_, i) => {
          const height = Math.random() * 60 + 20; // Random height between 20-80%
          const isGreen = Math.random() > 0.5;
          const delay = i * 0.1;
          
          return (
            <div
              key={i}
              className="flex flex-col items-center space-y-1"
              style={{ 
                animationDelay: `${delay}s`,
              }}
            >
              {/* Wick top */}
              <div 
                className={`w-0.5 bg-gradient-to-t ${
                  isGreen 
                    ? 'from-green-500/40 to-green-400/60' 
                    : 'from-red-500/40 to-red-400/60'
                } animate-pulse`}
                style={{ 
                  height: `${Math.random() * 20 + 10}px`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${1.5 + Math.random()}s`
                }}
              />
              
              {/* Candlestick body */}
              <div 
                className={`w-2 rounded-sm bg-gradient-to-b ${
                  isGreen 
                    ? 'from-green-400/60 to-green-500/80' 
                    : 'from-red-400/60 to-red-500/80'
                } animate-pulse shadow-lg`}
                style={{ 
                  height: `${height}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${1.8 + Math.random() * 0.5}s`
                }}
              />
              
              {/* Wick bottom */}
              <div 
                className={`w-0.5 bg-gradient-to-b ${
                  isGreen 
                    ? 'from-green-500/40 to-green-600/60' 
                    : 'from-red-500/40 to-red-600/60'
                } animate-pulse`}
                style={{ 
                  height: `${Math.random() * 15 + 5}px`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${1.3 + Math.random()}s`
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Price labels skeleton */}
      <div className="absolute right-2 top-4 space-y-8">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-3 w-12 bg-gray-600/40 rounded animate-pulse"
            style={{ 
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${1.5 + i * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Time labels skeleton */}
      <div className="absolute bottom-2 left-4 right-4 flex justify-between">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-3 w-8 bg-gray-600/40 rounded animate-pulse"
            style={{ 
              animationDelay: `${i * 0.15}s`,
              animationDuration: `${1.2 + i * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Loading indicator */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700/50">
          <div className="w-4 h-4 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
          <span className="text-sm text-gray-300 animate-pulse">Loading Chart...</span>
        </div>
      </div>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer opacity-30"></div>
    </div>
  );
}

export default ChartSkeleton;