import { DiscordIcon, NewTwitterIcon, TelegramIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import Logo from "../shared/Logo";

// const NAVIGATION_LINKS = [
//   { href: PATH.trade, label: "Trade" },
//   { href: PATH.agent, label: "AI Agent" },
//   { href: PATH.docs, label: "Documents" },
//   { href: "#contact", label: "Contact" },
// ] as const;

const SOCIAL_LINKS = [
  {
    href: "https://x.com/TregoDefai",
    label: "Twitter",
    icon: <HugeiconsIcon icon={NewTwitterIcon} />,
  },
  { href: "#", label: "Telegram", icon: <HugeiconsIcon icon={TelegramIcon} /> },
  { href: "#", label: "Discord", icon: <HugeiconsIcon icon={DiscordIcon} /> },
] as const;

export default function Footer() {
  return (
    <footer className="w-full bg-transparent border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          {/* Left: Logo */}
          <div className="flex items-center order-1 sm:order-1">
            <Logo />
          </div>

          {/* Center: Navigation Links - Desktop only */}
          {/* <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 order-2">
            {NAVIGATION_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-300 hover:text-[#1FFFA9] transition-colors duration-200 text-xs xl:text-sm font-medium whitespace-nowrap"
              >
                {label}
              </Link>
            ))}
          </div> */}

          {/* Right: Social Media Icons */}
          <div id="contact" className="flex items-center space-x-3 sm:space-x-4 order-3">
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1FFFA9] transition-colors duration-200 text-base sm:text-lg"
                aria-label={label}
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Navigation */}
        {/* <div className="lg:hidden mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-800/50">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {NAVIGATION_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-300 hover:text-[#1FFFA9] transition-colors duration-200 text-xs sm:text-sm font-medium"
              >
                {label}
              </Link>
            ))}
          </div>
        </div> */}
      </div>
    </footer>
  );
}
