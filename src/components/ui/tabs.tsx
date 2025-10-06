"use client";

import { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";

interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

export function Tabs({ defaultValue, children, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export function TabsList({ children, className }: TabsListProps) {
  // Add a subtle background and rounded corners for the tab list
  return (
    <div className={cn("flex border-b mb-3 border-gray-800 bg-gray-900/60 rounded-t-lg overflow-x-auto", className)}>
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be used within Tabs");

  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;

  return (
    <button
      type="button"
      onClick={() => setActiveTab(value)}
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70",
        "border-b-2",
        isActive ? "text-white bg-gray-800/50 shadow-sm" : "text-gray-400 border-transparent hover:text-white",
        "duration-200",
        className,
      )}
      style={{
        zIndex: isActive ? 1 : 0,
      }}
    >
      {children}
      {isActive && (
        <span
          className="absolute left-1/2 -bottom-[2px] -translate-x-1/2 w-2/3 h-0.5 bg-accent/80 rounded-full"
          aria-hidden="true"
        />
      )}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function TabsContent({ value, children, className }: TabsContentProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsContent must be used within Tabs");

  const { activeTab } = context;

  if (activeTab !== value) return null;

  // Remove pt-4 so content aligns with tab bar, but allow custom className
  return <div className={cn("transition-opacity duration-200", className)}>{children}</div>;
}
