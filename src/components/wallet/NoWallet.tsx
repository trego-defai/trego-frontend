"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { RefreshCw, Wallet } from "lucide-react";
import { walletService } from "@/service/walletService";
import { WalletAccount } from "@/types/wallet";
import { toast } from "sonner";
import { useWalletStore } from "@/store/useWalletStore";

export function NoWallet() {
  const { setAccount } = useWalletStore();
  const { mutate: generateWalletMutation, isPending: isLoading } = useMutation({
    mutationFn: async () => {
      const response = await walletService.generateAppWallet();
      return response.data;
    },
    onSuccess: (data) => {
      if (data && data.appAddress) {
        const walletAccount: WalletAccount = {
          address: data.appAddress,
        };
        setAccount(walletAccount);
        toast.success("Wallet created successfully!");
      }
    },
    onError: (error) => {
      toast.error("Failed to create wallet");
      console.error("Error generating wallet:", error);
    },
  });

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
            <Button onClick={() => generateWalletMutation()} disabled={isLoading} className="w-full">
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
