"use client";

import { Button } from "@/components/ui/button";
import { PATH } from "@/lib/constants";
import { useWalletSync } from "@/hooks";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { ConnectIcon, Loading03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { GoogleIcon, XIcon } from "../ui/icons";

interface AuthButtonProps {
  variant?: "default" | "ghost" | "secondary" | "link" | "destructive" | "outline" | null | undefined;
  className?: string;
  showOAuthOptions?: boolean;
  title?: string;
}

export function AuthButton({
  variant = "default",
  className = "",
  showOAuthOptions = false,
  title = "",
}: AuthButtonProps) {
  const { isLoaded, isSignedIn, user } = useUser();
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const queryClient = useQueryClient();

  useWalletSync(user?.id);

  const getCurrentUrl = useCallback(() => {
    if (typeof window !== "undefined") return window.location.href;
    return PATH.landing;
  }, []);

  // Refetch data when account is disconnected
  useEffect(() => {
    if (!user) {
      // Invalidate all wallet-related queries when account is disconnected
      queryClient.invalidateQueries({ queryKey: ["wallet"] });
      queryClient.invalidateQueries({ queryKey: ["balance"] });
      // Clear any cached data
      queryClient.removeQueries({ queryKey: ["wallet"] });
      queryClient.removeQueries({ queryKey: ["balance"] });
    }
  }, [user, queryClient]);

  if (!isLoaded)
    return title ? (
      <Button
        variant={variant}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gradient-to-br from-brand via-brand to-brand/90 text-brand-foreground shadow-lg shadow-brand/50 cursor-not-allowed opacity-70 ${className} text-foreground`}
        disabled
        aria-label={title}
      >
        <HugeiconsIcon icon={Loading03Icon} className="animate-spin" />
        <span>{title}</span>
      </Button>
    ) : (
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted text-brand-foreground">
        <HugeiconsIcon icon={Loading03Icon} className="animate-spin" />
      </div>
    );

  if (isSignedIn) {
    if (title) {
      const displayName =
        user?.fullName || user?.firstName || user?.username || user?.primaryEmailAddress?.emailAddress || "Account";
      return (
        <div className={`flex items-center gap-3 ${className} text-brand-foreground`}>
          <UserButton
            afterSignOutUrl={pathname}
            appearance={{
              elements: {
                avatarBox: "w-8 h-8 ring-2 ring-brand/20 hover:ring-brand/40 transition-all",
              },
            }}
          />
          <span className="text-sm font-medium text-brand-foreground truncate max-w-[10rem]" title={displayName}>
            {displayName}
          </span>
        </div>
      );
    }
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

  if (showOAuthOptions)
    return (
      <div className="relative text-brand-foreground">
        <Button
          variant={variant}
          className={`px-4 py-2 rounded-lg font-medium cursor-pointer ${className} text-brand-foreground`}
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          {title ? (
            <span className="flex items-center gap-2">
              <HugeiconsIcon icon={ConnectIcon} />
              <span>{title}</span>
            </span>
          ) : (
            "Connect"
          )}
        </Button>
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-card ring-1 ring-border/50 text-brand-foreground">
            <div className="py-1">
              <SignInButton mode="modal" forceRedirectUrl={getCurrentUrl()} signUpForceRedirectUrl={getCurrentUrl()}>
                <button className="flex items-center w-full px-4 py-2 text-sm text-brand-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer">
                  <GoogleIcon className="mr-3" />
                  Continue with Google
                </button>
              </SignInButton>
              <SignInButton mode="modal" forceRedirectUrl={getCurrentUrl()} signUpForceRedirectUrl={getCurrentUrl()}>
                <button className="flex items-center w-full px-4 py-2 text-sm text-brand-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer">
                  <XIcon className="mr-3" />
                  Continue with X
                </button>
              </SignInButton>
            </div>
          </div>
        )}
      </div>
    );

  if (title)
    return (
      <SignInButton mode="modal" forceRedirectUrl={getCurrentUrl()} signUpForceRedirectUrl={getCurrentUrl()}>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gradient-to-br from-brand via-brand to-brand/90 text-brand-foreground shadow-lg shadow-brand/50 hover:shadow-brand/70 transition-all cursor-pointer ${className} text-brand-foreground`}
          aria-label={title}
        >
          <HugeiconsIcon icon={ConnectIcon} />
          <span>{title}</span>
        </button>
      </SignInButton>
    );

  return (
    <div
      className="relative text-brand-foreground"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SignInButton mode="modal" forceRedirectUrl={getCurrentUrl()} signUpForceRedirectUrl={getCurrentUrl()}>
        <button
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-brand via-brand to-brand/90 shadow-lg shadow-brand/50 hover:shadow-brand/70 transition-all cursor-pointer text-brand-foreground"
          aria-label="Connect"
        >
          <HugeiconsIcon icon={ConnectIcon} />
        </button>
      </SignInButton>
      {isHovered && (
        <div className="absolute left-12 top-1/2 -translate-y-1/2 z-50 pointer-events-none animate-in fade-in slide-in-from-left-2 duration-200">
          <div className="bg-gradient-to-br from-card via-card to-popover text-brand-foreground px-4 py-2.5 rounded-lg shadow-xl backdrop-blur-md border border-border/30 whitespace-nowrap text-sm font-medium">
            Connect
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthButton;
