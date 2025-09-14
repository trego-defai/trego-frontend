"use client";

import AuthButton from "@/components/auth/AuthButton";
import { Button } from "@/components/ui/button";
import { MenuIcon, TelegramIcon, XIcon } from "@/components/ui/icons";
import { PATH } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Logo from "../shared/Logo";

const SOCIAL_LINKS = [
  {
    href: "https://x.com/trego_ai",
    icon: XIcon,
    label: "Follow on X",
  },
  {
    href: "https://t.me/trego_ai",
    icon: TelegramIcon,
    label: "Join Telegram",
  },
] as const;

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
        <Button
          key={href}
          asChild
          variant="ghost"
          size="icon"
          className="w-10 h-10 rounded-full"
          aria-label={label}
        >
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <Icon />
          </Link>
        </Button>
      ))}
    </div>
  );
}

function AppButton({
  variant = "primary",
  className = "",
}: {
  variant?: "primary" | "default";
  className?: string;
}) {
  return (
    <Link href={PATH.agent} target="_blank" rel="noopener noreferrer">
      <Button
        variant={variant}
        className={`px-4 py-2 flex items-center group gap-2 rounded-lg font-medium ${className}`}
      >
        Launch App
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-300" />
      </Button>
    </Link>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <Logo />

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-5">
          <SocialLinks className="flex space-x-3" />
          <span className="text-4xl text-secondary pr-6 leading-none ">|</span>
          <AppButton className="text-sm" />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="p-2"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-3 border-t border-gray-200">
            <AuthButton variant="default" className="w-full text-base" />
            <AppButton variant="default" className="w-full text-base" />
            <SocialLinks className="flex space-x-3 justify-center" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
