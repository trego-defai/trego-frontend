"use client";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function WalletLoading() {
  return (
    <main className="flex-1 p-6 h-screen overflow-hidden">
      <div className="h-full max-w-6xl mx-auto flex flex-col gap-6">
        {/* WalletBalance Skeleton */}
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/40">
          <div className="space-y-2 mb-4">
            <Skeleton className="h-4 w-32 bg-muted/60" />
            <Skeleton className="h-8 w-48 bg-muted/60" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-24 bg-muted/60 rounded-lg" />
            <Skeleton className="h-10 w-24 bg-muted/60 rounded-lg" />
          </div>
        </Card>

        {/* Grid Layout Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 overflow-hidden">
          {/* Left Column (TokensList + TransactionHistory) */}
          <div className="lg:col-span-2 flex flex-col gap-6 overflow-hidden">
            {/* TokensList Skeleton */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/40">
              <Skeleton className="h-5 w-24 mb-4 bg-muted/60" />
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-4">
                      <Skeleton className="h-10 w-10 rounded-full bg-muted/60" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-32 bg-muted/60" />
                        <Skeleton className="h-3 w-20 bg-muted/60" />
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <Skeleton className="h-4 w-24 bg-muted/60" />
                      <Skeleton className="h-3 w-16 bg-muted/60" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* TransactionHistory Skeleton */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/40 flex-1 overflow-hidden">
              <Skeleton className="h-5 w-36 mb-4 bg-muted/60" />
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded-full bg-muted/60" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-24 bg-muted/60" />
                        <Skeleton className="h-3 w-16 bg-muted/60" />
                      </div>
                    </div>
                    <Skeleton className="h-5 w-20 bg-muted/60" />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column (SendToken + ReceiveToken) */}
          <div className="flex flex-col gap-6 overflow-y-auto">
            {/* SendToken Skeleton */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/40">
              <Skeleton className="h-5 w-28 mb-4 bg-muted/60" />
              <div className="space-y-4">
                <div>
                  <Skeleton className="h-4 w-16 mb-2 bg-muted/60" />
                  <Skeleton className="h-10 w-full bg-muted/60 rounded-lg" />
                </div>
                <div>
                  <Skeleton className="h-4 w-20 mb-2 bg-muted/60" />
                  <Skeleton className="h-10 w-full bg-muted/60 rounded-lg" />
                </div>
                <div>
                  <Skeleton className="h-4 w-20 mb-2 bg-muted/60" />
                  <Skeleton className="h-10 w-full bg-muted/60 rounded-lg" />
                </div>
                <Skeleton className="h-10 w-full bg-muted/60 rounded-lg" />
              </div>
            </Card>

            {/* ReceiveToken Skeleton */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/40">
              <Skeleton className="h-5 w-32 mb-4 bg-muted/60" />
              <Skeleton className="h-32 w-32 mx-auto bg-muted/60 rounded-lg" />
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
