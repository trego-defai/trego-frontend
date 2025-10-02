"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { AuthButton } from '../auth';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  id: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

function SidebarItem({ icon, label, id, isActive, onClick }: SidebarItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        onClick={() => onClick(id)}
        className={`flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer transition-all duration-200 ${isActive
          ? 'bg-gradient-to-br from-brand via-brand to-brand/90 text-white shadow-lg shadow-brand/50'
          : 'hover:bg-slate-800/60 text-slate-400 hover:text-white hover:shadow-md'
          }`}
      >
        {icon}
      </div>

      {/* Tooltip/Modal */}
      {isHovered && (
        <div className="absolute left-12 top-1/2 -translate-y-1/2 z-50 pointer-events-none animate-in fade-in slide-in-from-left-2 duration-200">
          <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white px-4 py-2.5 rounded-lg shadow-xl backdrop-blur-md border border-slate-700/30 whitespace-nowrap text-sm font-medium">
            {label}
          </div>
        </div>
      )}
    </div>
  );
}

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="w-16 bg-gradient-to-b from-slate-900 via-slate-950 to-black border-r border-slate-800/40 flex flex-col items-center pt-4 pb-6 shadow-2xl">
      {/* Logo */}
      <div className="flex items-center justify-center w-12 h-12 mb-8">
        <Image
          src="/logo.svg"
          alt="Trego Logo"
          width={48}
          height={48}
          className="w-12 h-12 object-contain drop-shadow-lg scale-200"
        />
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col space-y-3 flex-1">
        {/* Dashboard */}
        <SidebarItem
          label="Dashboard"
          id="dashboard"
          isActive={activeTab === 'dashboard'}
          onClick={onTabChange}
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
            </svg>
          }
        />
        {/* Trading */}
        <SidebarItem
          label="Trading"
          id="trading"
          isActive={activeTab === 'trading'}
          onClick={onTabChange}
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
            </svg>
          }
        />

        {/* AI Assistant */}
        <SidebarItem
          label="AI Assistant"
          id="agent"
          isActive={activeTab === 'agent'}
          onClick={onTabChange}
          icon={
            <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.753 14a2.25 2.25 0 0 1-2.006 1.996L15.5 16h-7a2.25 2.25 0 0 1-2.25-2.25v-6.5A2.25 2.25 0 0 1 8.5 5h7a2.25 2.25 0 0 1 2.25 2.25V14zM8.5 6.5a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75h-7zm2.25 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm2.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM9 11.5h6v1H9v-1z"/>
              <path d="M12 2.5a.75.75 0 0 1 .75.75v1h-1.5v-1A.75.75 0 0 1 12 2.5zM5.25 12a.75.75 0 0 1-.75-.75v-1h1.5v1a.75.75 0 0 1-.75.75zM18.75 12a.75.75 0 0 1-.75-.75v-1h1.5v1a.75.75 0 0 1-.75.75z"/>
            </svg>
          }
        />

        {/* Wallet */}
        <SidebarItem
          label="Wallet"
          id="wallet"
          isActive={activeTab === 'wallet'}
          onClick={onTabChange}
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
          }
        />
      </div>

      {/* Account Info at Bottom */}
      <div className="mt-auto pt-4 border-t border-slate-800/40">
        <div className="flex items-center justify-center">
          <AuthButton variant="default"/>
        </div>
      </div>
    </div>
  );
}