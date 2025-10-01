"use client";

import React from 'react';
import Image from 'next/image';
interface SidebarItemProps {
  icon: React.ReactNode;
  isActive?: boolean;
}

function SidebarItem({ icon, isActive = false }: SidebarItemProps) {
  return (
    <div
      className={`flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer transition-colors ${isActive
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
      <div className="flex items-center justify-center">
        <Image src="/logo.svg" alt="Trego Logo" width={100} height={100} />
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col space-y-3 mt-8">
        {/* Dashboard - Active */}
        <SidebarItem
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
            </svg>
          }
          isActive={true}
        />
        {/* Trading */}
        <SidebarItem
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
            </svg>
          }
        />

        {/* Chat Bot */}
        <SidebarItem
          icon={
            <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.753 14a2.25 2.25 0 0 1-2.006 1.996L15.5 16h-7a2.25 2.25 0 0 1-2.25-2.25v-6.5A2.25 2.25 0 0 1 8.5 5h7a2.25 2.25 0 0 1 2.25 2.25V14zM8.5 6.5a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75h-7zm2.25 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm2.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM9 11.5h6v1H9v-1z"/>
              <path d="M12 2.5a.75.75 0 0 1 .75.75v1h-1.5v-1A.75.75 0 0 1 12 2.5zM5.25 12a.75.75 0 0 1-.75-.75v-1h1.5v1a.75.75 0 0 1-.75.75zM18.75 12a.75.75 0 0 1-.75-.75v-1h1.5v1a.75.75 0 0 1-.75.75z"/>
            </svg>
          }
        />

        {/* Users/People */}
        <SidebarItem
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
          }
        />
      </div>
    </div>
  );
}