"use client";

import { Button } from "@/components/ui/button";
import { getShortAddress } from "@/lib/utils";
import type { GenerateWalletResponse } from "@/service/walletService";
import { walletService } from "@/service/walletService";
import { useWalletStore } from "@/store/useWalletStore";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

function GenerateWalletButton() {
  const [wallet, setWallet] = useState<GenerateWalletResponse | null>(null);
  const { setAddress } = useWalletStore();

  const { mutate: handleGenerateWallet, isPending } = useMutation({
    mutationFn: () => walletService.generateAppWallet(),
    onSuccess: (result) => {
      setAddress(result?.appAddress);
      toast.success("Wallet created successfully");
    },
    onError: (error) => {
      console.error("Failed to create wallet", error);
      toast.error("Failed to create wallet");
    },
  });

  function handleClick() {
    if (!isPending && !wallet) handleGenerateWallet();
  }

  return (
    <Button
      variant="primary"
      size="icon"
      onClick={handleClick}
      disabled={isPending}
      className="min-w-[200px]"
    >
      {isPending
        ? "Creating..."
        : wallet?.appAddress
        ? getShortAddress(wallet.appAddress)
        : "Generate Wallet"}
    </Button>
  );
}

export default GenerateWalletButton;
