"use client";

import { usePrivy } from "@privy-io/react-auth";
import { Button } from "@/components/ui/button";

interface AuthButtonProps {
  variant?: "primary" | "default" | "ghost";
  className?: string;
}

export default function AuthButton({ variant = "primary", className = "" }: AuthButtonProps) {
  const { ready, authenticated, user, login, logout } = usePrivy();

  if (!ready) {
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

  if (authenticated) {
    return (
      <div className="flex items-center space-x-3">
        <span className="text-sm text-gray-300">
          {user?.twitter?.username 
            ? `@${user.twitter.username}`
            : user?.email?.address ||
              (user?.wallet?.address && 
                user.wallet.address.slice(0, 6) + "..." + user.wallet.address.slice(-4))
          }
        </span>
        <Button
          variant={variant}
          className={`px-4 py-2 rounded-lg font-medium ${className}`}
          onClick={logout}
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <Button
      variant={variant}
      className={`px-4 py-2 rounded-lg font-medium ${className}`}
      onClick={login}
    >
      Connect
    </Button>
  );
}
