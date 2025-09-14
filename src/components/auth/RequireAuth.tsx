"use client";

import { useUser, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

interface RequireAuthProps {
  children: React.ReactNode;
  message?: string;
}

export default function RequireAuth({ children, message = "Please sign in to use this feature" }: RequireAuthProps) {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="text-center p-6 bg-gray-900/50 border border-gray-800 rounded-lg">
        <p className="text-gray-300 mb-4">{message}</p>
        <SignInButton mode="modal">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Sign In to Continue
          </Button>
        </SignInButton>
      </div>
    );
  }

  return <>{children}</>;
}