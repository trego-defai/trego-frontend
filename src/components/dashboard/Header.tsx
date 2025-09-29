"use client";

import React from 'react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-[#1a1b1e] to-[#141517] border-b border-gray-800/50 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Left side - Balance text */}
        <div className="flex items-center">
          {/* <h1 className="text-xl font-medium text-white">Trego Trading</h1> */}
        </div>

        {/* Right side - Search, Notification, User */}
        <div className="flex items-center space-x-4 gap-2">

          {/* Theme/Settings */}
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
          </button>

          {/* Notifications */}
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              1
            </span>
          </button>

          {/* Language Selector */}
          <div className="flex items-center space-x-1 bg-[#1a1b1e] rounded-lg px-3 py-2">
            <span className="text-white text-sm">EN</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="text-white text-sm font-medium">John smith</div>
              <div className="text-gray-400 text-xs">16 seconds</div>
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">J</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}