"use client";

import React from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  isActive?: boolean;
}

function SidebarItem({ icon, isActive = false }: SidebarItemProps) {
  return (
    <div
      className={`flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer transition-colors ${
        isActive
          ? 'bg-brand text-brand-foreground'
          : 'hover:bg-gray-800 text-gray-400 hover:text-white'
      }`}
    >
      {icon}
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="w-16 bg-gradient-to-b from-[#1a1b1e] to-[#141517] border-r border-gray-800/50 flex flex-col items-center py-4 space-y-4 shadow-lg">
      {/* Logo */}
      <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-black">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>

      {/* Balance indicator - shows "Balance" text from the image */}
      <div className="text-brand text-xs font-medium transform -rotate-90 mt-8">
        Balance
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col space-y-3 mt-8">
        {/* Dashboard - Active */}
        <SidebarItem
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
            </svg>
          }
          isActive={true}
        />

        {/* Home */}
        <SidebarItem
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          }
        />

        {/* Trading */}
        <SidebarItem
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            </svg>
          }
        />

        {/* Portfolio */}
        <SidebarItem
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          }
        />

        {/* Users/People */}
        <SidebarItem
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1l-2.11 2.81c-.45.6-.26 1.44.34 1.89l2.28 1.71V20h2zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 6.17 11 7.5s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4z"/>
            </svg>
          }
        />
      </div>
    </div>
  );
}