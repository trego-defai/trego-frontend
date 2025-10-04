"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RefreshCw, Wallet } from "lucide-react";

interface NoWalletProps {
  onCreateWallet: () => void;
  isLoading: boolean;
}

export function NoWallet({ onCreateWallet, isLoading }: NoWalletProps) {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center justify-center min-h-[70vh]">
        <Card className="p-8 max-w-md w-full">
          <div className="flex flex-col items-center gap-6 text-center">
            <Wallet className="w-16 h-16 text-primary" />
            <div>
              <h2 className="text-2xl font-bold mb-2">No Wallet Found</h2>
              <p className="text-muted-foreground text-sm">Create a wallet to manage your APT tokens</p>
            </div>
            <Button onClick={onCreateWallet} disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Wallet"
              )}
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
