"use client";

import { AIAssistantIcon, DashboardIcon, TradingIcon, WalletIcon } from "@/components/ui/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AuthButton } from "../auth";

// Types
interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  id: string;
  href: string;
  isActive: boolean;
  onTabChange?: (tab: string) => void;
}

interface SidebarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

// Navigation configuration
const NAV_ITEMS: NavItem[] = [
  {
    id: "welcome",
    label: "Welcome",
    href: "/welcome",
    icon: <DashboardIcon />,
  },
  {
    id: "agent",
    label: "AI Assistant",
    href: "/agent",
    icon: <AIAssistantIcon />,
  },
  {
    id: "wallet",
    label: "Wallet",
    href: "/wallet",
    icon: <WalletIcon />,
  },
  {
    id: "trading",
    label: "Trading",
    href: "/trading",
    icon: <TradingIcon />,
  },
];

function SidebarItem({ icon, label, id, href, isActive, onTabChange }: SidebarItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonClasses = isActive
    ? "bg-gradient-to-br from-brand via-brand to-brand/90 text-brand-foreground shadow-lg shadow-brand/50"
    : "hover:bg-muted text-muted-foreground hover:text-foreground hover:shadow-md";

  function handleClick() {
    onTabChange?.(id);
  }

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link href={href} scroll={false} tabIndex={-1} aria-label={label} rel="noopener noreferrer">
        <button
          type="button"
          onClick={handleClick}
          className={`flex items-center justify-center cursor-pointer w-10 h-10 rounded-lg transition-all duration-200 ${buttonClasses}`}
          aria-label={label}
        >
          {icon}
        </button>
      </Link>
      {isHovered && (
        <div className="absolute left-12 top-1/2 -translate-y-1/2 z-50 pointer-events-none animate-in fade-in slide-in-from-left-2 duration-200">
          <div className="bg-gradient-to-br from-card via-card to-popover text-foreground px-4 py-2.5 rounded-lg shadow-xl backdrop-blur-md border border-border/30 whitespace-nowrap text-sm font-medium">
            {label}
          </div>
        </div>
      )}
    </div>
  );
}

export function Sidebar({ activeTab: _activeTab, onTabChange }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="w-16 bg-gradient-to-b from-card via-background to-background border-r border-border/40 flex flex-col items-center pt-4 pb-6 shadow-2xl">
      <div className="flex items-center justify-center w-12 h-12 mb-8">
        <Image
          src="/logo.svg"
          alt="Trego Logo"
          width={48}
          height={48}
          className="w-12 h-12 object-contain drop-shadow-lg scale-200"
        />
      </div>

      <nav className="flex flex-col space-y-3 flex-1" aria-label="Main navigation">
        {NAV_ITEMS.map((item) => (
          <SidebarItem
            key={item.id}
            label={item.label}
            id={item.id}
            href={item.href}
            isActive={pathname === item.href}
            onTabChange={onTabChange}
            icon={item.icon}
          />
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-border/40">
        <div className="hover:scale-105 transition-transform duration-200 drop-shadow-2xl">
          <AuthButton variant="default" />
        </div>
      </div>
    </div>
  );
}
