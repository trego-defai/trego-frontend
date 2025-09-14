"use client";

import { PATH } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthButton from "../auth/AuthButton";

const NAV_LINKS = [
  { href: PATH.trade, label: "Trade" },
  { href: PATH.agent, label: "AI Agent" },
];

function isActiveNav(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm container mx-auto">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Left: Logo and Title */}
          <div className="flex items-center space-x-4">
            <Link href={PATH.login} className="text-xl font-bold text-white">
              Trego
            </Link>
          </div>
          <nav
            className="fixed left-1/2 top-0 z-40 h-16 flex items-center -translate-x-1/2"
            style={{ minWidth: "fit-content" }}
            aria-label="Main navigation"
          >
            <div
              className="relative flex items-center space-x-3"
              style={{ minWidth: "fit-content" }}
            >
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = isActiveNav(href, pathname);
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    data-nav-link
                    className={`relative text-sm font-semibold transition-all duration-300 px-3 py-2 rounded-lg ${
                      isActive
                        ? "text-white bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 shadow-lg shadow-blue-500/20"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50 hover:scale-105"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </nav>
          {/* Right: Auth Button */}
          <div className="flex items-center space-x-4">
            <AuthButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
