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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-popover">
      <div className="text-center space-y-7 p-8 max-w-md w-full bg-card/80 rounded-2xl shadow-2xl border border-border/40">
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-destructive/10 mb-2">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-destructive">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M12 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="16" r="1" fill="currentColor" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Something went wrong</h1>
          <h2 className="text-base text-muted-foreground">An unexpected error occurred</h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Sorry for the inconvenience. The error has been logged and our team will look into it.
        </p>

        {error.digest && (
          <div className="text-xs text-muted-foreground font-mono bg-muted/60 p-2 rounded border border-border/40">
            Error ID: {error.digest}
          </div>
        )}

        <div className="space-y-2">
          <button
            onClick={reset}
            className="w-full px-6 py-3 bg-brand text-brand-foreground font-medium rounded-lg transition-colors hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-brand/40"
          >
            Try Again
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full px-6 py-3 bg-muted text-foreground font-medium rounded-lg transition-colors hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-border/40"
          >
            Go Home
          </button>
        </div>

        <div className="text-xs text-muted-foreground mt-2">
          If the problem persists, please{" "}
          <a href="mailto:support@trego.app" className="underline hover:text-brand">
            contact support
          </a>
          .
        </div>
      </div>
    </div>
  );
}
