"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import Background from "@/components/landing/Background";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Background>
      <div className="h-screen text-white flex overflow-hidden">
        {/* Sidebar - Fixed, no scroll */}
        <Sidebar />

        {/* Main Content - Scrollable */}
        <div className="flex-1 flex flex-col overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
          {children}
        </div>
      </div>
    </Background>
  );
};

export default layout;
