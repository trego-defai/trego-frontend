"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { GoogleIcon, XIcon } from "../ui/icons";

interface AuthButtonProps {
  variant?: "default" | "ghost" | "secondary" | "link" | "destructive" | "outline" | null | undefined;
  className?: string;
  showOAuthOptions?: boolean;
}

export default function AuthButton({
  variant = "default",
  className = "",
  showOAuthOptions = false,
}: AuthButtonProps) {
  const { isLoaded, isSignedIn, user } = useUser();
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
      <Button
        variant={variant}
        className={`px-4 py-2 rounded-lg font-medium ${className}`}
        disabled
      >
        Loading...
      </Button>
    );
  }

  if (isSignedIn) {
    return (
      <div className="flex items-center space-x-3">
        <span className="text-sm text-gray-300">
          {/* {user?.username || user?.primaryEmailAddress?.emailAddress || user?.firstName || "User"} */}
        </span>
        <UserButton
          afterSignOutUrl={pathname}
          appearance={{
            elements: {
              avatarBox: "w-8 h-8",
            },
          }}
        />
      </div>
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
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <SignInButton
                mode="modal"
                forceRedirectUrl={getCurrentUrl()}
                signUpForceRedirectUrl={getCurrentUrl()}
              >
                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                  <GoogleIcon className="mr-3" />
                  Continue with Google
                </button>
              </SignInButton>

              <SignInButton
                mode="modal"
                forceRedirectUrl={getCurrentUrl()}
                signUpForceRedirectUrl={getCurrentUrl()}
              >
                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
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

  return (
    <SignInButton
      mode="modal"
      forceRedirectUrl={getCurrentUrl()}
      signUpForceRedirectUrl={getCurrentUrl()}
    >
      <Button variant={variant} className={`px-4 py-2 rounded-lg font-medium ${className}`}>
        Connect
      </Button>
    </SignInButton>
  );
}
