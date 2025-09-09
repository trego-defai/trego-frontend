import { NAVIGATION_LINKS } from "@/lib/constants";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={NAVIGATION_LINKS.home} className="flex items-center space-x-3 group">
      <div className="relative">
        {/* Gradient background with glow effect */}
        <div className="w-10 h-10 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Trading bot icon */}
          <svg 
            className="w-5 h-5 text-primary-foreground relative z-10" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M13 10V3L4 14h7v7l9-11h-7z" 
            />
          </svg>
          
          {/* Subtle pulse animation */}
          <div className="absolute inset-0 rounded-xl bg-primary/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* Glowing dot indicator */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full shadow-lg animate-pulse">
          <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75" />
        </div>
      </div>
      
      <div className="flex flex-col">
        <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          Trego
        </span>
        <span className="text-xs text-muted-foreground font-medium -mt-1 tracking-wide">
          AI Trading Bot
        </span>
      </div>
    </Link>
  );
}

export default Logo;
