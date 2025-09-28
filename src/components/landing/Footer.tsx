import { PATH } from "@/lib/constants";
import Link from "next/link";
import Logo from "../shared/Logo";

const NAVIGATION_LINKS = [
  { href: "#bots", label: "Bots" },
  { href: "#markets", label: "Markets" },
  { href: PATH.trade, label: "Trade" },
  { href: "#token", label: "Token" },
  { href: PATH.agent, label: "AI Assistant" },
  { href: "#contact", label: "Contact" },
] as const;

const SOCIAL_LINKS = [
  { href: "#", label: "Telegram", icon: "📱" },
  { href: "#", label: "Instagram", icon: "📷" },
  { href: "#", label: "Discord", icon: "💬" },
  { href: "#", label: "GitHub", icon: "💻" },
] as const;

export default function Footer() {
  return (
    <footer className="w-full bg-transparent border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-300 hover:text-[#1FFFA9] transition-colors duration-200 text-sm font-medium"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex items-center space-x-4">
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <Link
                key={label}
                href={href}
                className="text-gray-400 hover:text-[#1FFFA9] transition-colors duration-200 text-lg"
                aria-label={label}
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-6 pt-6 border-t border-gray-800/50">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {NAVIGATION_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-300 hover:text-[#1FFFA9] transition-colors duration-200 text-sm font-medium"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
