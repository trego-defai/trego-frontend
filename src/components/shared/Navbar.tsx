"use client";

import { PATH } from "@/lib/constants";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthButton from "../auth/AuthButton";
import { TregoWallet } from "../wallet";

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
  const { user } = useUser();

  return (
    <header className="border-b border-[var(--color-border)] bg-[color:var(--color-navbar-bg)] backdrop-blur-sm container mx-auto">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Left: Logo and Title */}
          <div className="flex items-center space-x-4">
            <Link href={PATH.landing} className="text-xl font-bold text-[color:var(--color-navbar-text)]">
              Trego
            </Link>
          </div>
          <nav
            className="fixed left-1/2 top-0 z-40 h-16 flex items-center -translate-x-1/2"
            style={{ minWidth: "fit-content" }}
            aria-label="Main navigation"
          >
            <div className="relative flex items-center space-x-3" style={{ minWidth: "fit-content" }}>
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
                        ? "text-[color:var(--color-navbar-link-active)] bg-[color:var(--color-navbar-link-active-bg)] border border-[color:var(--color-navbar-link-active-border)] shadow-lg shadow-[color:var(--color-navbar-link-active-shadow)]"
                        : "text-[color:var(--color-navbar-link)] hover:text-[color:var(--color-navbar-link-hover)] hover:bg-[color:var(--color-navbar-link-hover-bg)] hover:scale-105"
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
            {user && <TregoWallet />}
            <AuthButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
