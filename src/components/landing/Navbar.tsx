"use client";

import { Button } from "@/components/ui/button";
import { PATH } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../shared/Logo";
import AuthButton from "@/components/auth/AuthButton";

const NAVIGATION_LINKS = [
  { href: "#bots", label: "Bots" },
  { href: "#markets", label: "Markets" },
  { href: PATH.trade, label: "Trade" },
  { href: "#token", label: "Token" },
  { href: PATH.agent, label: "AI Assistant" },
] as const;

function NavigationLinks() {
  const pathname = usePathname();

  return (
    <div className="relative flex items-center gap-6 text-sm">
      {NAVIGATION_LINKS.map(({ href, label }) => {
        const isActive = href === pathname || (href.startsWith("#") && false);
        return (
          <div key={href} className="relative">
            {isActive && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-2 rounded-b-full bg-[#1FFFA9] shadow-[0_6px_12px_-6px_#1FFFA9]" />
            )}
            <Link
              href={href}
              className={`transition-colors duration-200 font-medium ${isActive ? "text-white" : "text-gray-300 hover:text-[#1FFFA9]"
                }`}
            >
              {label}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

function LeftIconButton() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-10 w-10 rounded-full bg-brand text-black hover:bg-brand/90"
      aria-label="Open menu"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="2" />
        <rect x="13" y="3" width="8" height="8" rx="2" />
        <rect x="3" y="13" width="8" height="8" rx="2" />
        <rect x="13" y="13" width="8" height="8" rx="2" />
      </svg>
    </Button>
  );
}

function RightArrowButton() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-10 w-10 rounded-full bg-brand text-black hover:bg-brand/90"
      aria-label="Go"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="0" />
        <path d="M5 12h14" />
        <path d="M13 5l7 7-7 7" />
      </svg>
    </Button>
  );
}

export function Navbar() {
  return (
    <nav className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Logo />
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-black/40 px-2 py-2 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] w-full max-w-3xl">
              <LeftIconButton />
              <div className="flex-1 overflow-x-auto">
                <div className="flex items-center justify-center">
                  <NavigationLinks />
                </div>
              </div>
              <RightArrowButton />
            </div>
          </div>
          <div className="min-w-[80px] flex items-center justify-end">
            <AuthButton variant="default" className="bg-brand text-black hover:bg-brand/90 rounded-full px-4 py-2" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
