"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { GoogleIcon, XIcon } from "../ui/icons";

const ConnectIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const LoadingIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="animate-spin"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

interface AuthButtonProps {
  variant?: "default" | "ghost" | "secondary" | "link" | "destructive" | "outline" | null | undefined;
  className?: string;
  showOAuthOptions?: boolean;
}

export default function AuthButton({ variant = "default", className = "", showOAuthOptions = false }: AuthButtonProps) {
  const { isLoaded, isSignedIn } = useUser();
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();

  // Get current URL for redirect after sign in
  const getCurrentUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return "/";
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted text-muted-foreground">
        <LoadingIcon />
      </div>
    );
  }

  if (isSignedIn) {
    return (
      <UserButton
        afterSignOutUrl={pathname}
        appearance={{
          elements: {
            avatarBox: "w-8 h-8 ring-2 ring-brand/20 hover:ring-brand/40 transition-all",
          },
        }}
      />
    );
  }

  if (showOAuthOptions) {
    return (
      <div className="relative">
        <Button
          variant={variant}
          className={`px-4 py-2 rounded-lg font-medium ${className}`}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Connect
        </Button>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-card ring-1 ring-border/50">
            <div className="py-1">
              <SignInButton mode="modal" forceRedirectUrl={getCurrentUrl()} signUpForceRedirectUrl={getCurrentUrl()}>
                <button className="flex items-center w-full px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                  <GoogleIcon className="mr-3" />
                  Continue with Google
                </button>
              </SignInButton>

              <SignInButton mode="modal" forceRedirectUrl={getCurrentUrl()} signUpForceRedirectUrl={getCurrentUrl()}>
                <button className="flex items-center w-full px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                  <XIcon className="mr-3" />
                  Continue with X
                </button>
              </SignInButton>
            </div>
          </div>
        )}
      </div>
    );
  }

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <SignInButton mode="modal" forceRedirectUrl={getCurrentUrl()} signUpForceRedirectUrl={getCurrentUrl()}>
        <button
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-brand via-brand to-brand/90 text-brand-foreground shadow-lg shadow-brand/50 hover:shadow-brand/70 transition-all"
          aria-label="Connect"
        >
          <ConnectIcon />
        </button>
      </SignInButton>

      {isHovered && (
        <div className="absolute left-12 top-1/2 -translate-y-1/2 z-50 pointer-events-none animate-in fade-in slide-in-from-left-2 duration-200">
          <div className="bg-gradient-to-br from-card via-card to-popover text-foreground px-4 py-2.5 rounded-lg shadow-xl backdrop-blur-md border border-border/30 whitespace-nowrap text-sm font-medium">
            Connect
          </div>
        </div>
      )}
    </div>
  );
}
