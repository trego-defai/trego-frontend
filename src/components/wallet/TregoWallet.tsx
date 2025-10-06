"use client";

import { useWalletStore } from "@/store/useWalletStore";
import { Button } from "@/components/ui/button";
import { Wallet, LogOut } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function TregoWallet() {
  const { account, setAccount } = useWalletStore();
  const [isDisconnecting, setIsDisconnecting] = useState(false);

  if (!account) {
    return null;
  }

  const shortAddress = `${account.address.slice(0, 6)}...${account.address.slice(-4)}`;

  const handleDisconnect = async () => {
    setIsDisconnecting(true);
    try {
      // Clear wallet account from store
      setAccount(null);
      toast.success("Wallet disconnected successfully");
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
      toast.error("Failed to disconnect wallet");
    } finally {
      setIsDisconnecting(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" className="flex items-center gap-2 text-sm">
        <Wallet className="h-4 w-4" />
        <span className="hidden sm:inline">{shortAddress}</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleDisconnect}
        disabled={isDisconnecting}
        className="text-muted-foreground hover:text-foreground"
      >
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  );
}
