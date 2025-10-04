"use client";

import React from "react";
import { AuthButton } from "../auth";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-950 to-black border-b border-slate-800/40 px-6 py-4 shadow-lg backdrop-blur-sm">
      <div className="flex items-center justify-between">
        {/* Left side - Balance text */}
        <div className="flex items-center">
          {/* <h1 className="text-xl font-medium text-white">Trego Trading</h1> */}
        </div>

        {/* Right side - Search, Notification, User */}
        <div className="flex items-center space-x-4 gap-2">
          {/* Theme/Settings */}
          <button className="p-2 hover:bg-slate-800/60 rounded-lg transition-all duration-200 hover:shadow-md">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>

          {/* Notifications */}
          <button className="p-2 hover:bg-slate-800/60 rounded-lg transition-all duration-200 relative hover:shadow-md">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 bg-gradient-to-br from-red-500 to-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg shadow-red-500/50 animate-pulse">
              1
            </span>
          </button>

          {/* Language Selector */}
          <div className="flex items-center space-x-1 bg-slate-800/50 hover:bg-slate-800/80 rounded-lg px-3 py-2 cursor-pointer transition-all duration-200 border border-slate-700/30">
            <span className="text-white text-sm font-medium">EN</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-slate-400"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3 hover:bg-slate-800/30 rounded-lg px-3 py-2 cursor-pointer transition-all duration-200">
            <AuthButton variant="default" />
          </div>
        </div>
      </div>
    </header>
  );
}
