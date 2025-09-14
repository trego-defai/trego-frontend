"use client";

import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

interface AuthButtonProps {
  variant?: "primary" | "default" | "ghost";
  className?: string;
}

export default function AuthButton({ variant = "primary", className = "" }: AuthButtonProps) {
  const { isLoaded, isSignedIn, user } = useUser();

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
          {user?.username || 
           user?.primaryEmailAddress?.emailAddress ||
           user?.firstName ||
           "User"}
        </span>
        <UserButton 
          appearance={{
            elements: {
              avatarBox: "w-8 h-8",
            },
          }}
        />
      </div>
    );
  }

  return (
    <SignInButton mode="modal">
      <Button
        variant={variant}
        className={`px-4 py-2 rounded-lg font-medium ${className}`}
      >
        Connect
      </Button>
    </SignInButton>
  );
}
