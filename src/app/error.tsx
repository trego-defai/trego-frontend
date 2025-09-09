"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="text-center space-y-6 p-8 max-w-md">
        <div className="space-y-2">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-white">Something went wrong</h1>
          <h2 className="text-lg text-gray-300">An unexpected error occurred</h2>
        </div>
        
        <p className="text-gray-400">
          We're sorry for the inconvenience. The error has been logged and we'll look into it.
        </p>
        
        {error.digest && (
          <div className="text-xs text-gray-500 font-mono bg-gray-800 p-2 rounded">
            Error ID: {error.digest}
          </div>
        )}
        
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Try Again
          </button>
          
          <button
            onClick={() => window.location.href = "/"}
            className="w-full px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
          >
            Go Home
          </button>
        </div>
        
        <div className="text-sm text-gray-500">
          If the problem persists, please contact support.
        </div>
      </div>
    </div>
  );
}