"use client";

import { Button } from "@/components/ui/button";
import { getShortAddress } from "@/lib/utils";
import { walletService } from "@/service/walletService";
import { useWalletStore } from "@/store/useWalletStore";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

function GenerateWalletButton() {
  const { address, setAddress } = useWalletStore();

  const { mutate: handleGenerateWallet, isPending } = useMutation({
    mutationFn: () => walletService.generateAppWallet(),
    onSuccess: (result) => {
      setAddress(result?.data?.appAddress || "");
      toast.success("Wallet created successfully");
    },
    onError: (error) => {
      console.error("Failed to create wallet", error);
      toast.error("Failed to create wallet");
    },
  });

  function handleClick() {
    if (!isPending && !address) handleGenerateWallet();
  }

  return (
    <Button
      variant="primary"
      size="icon"
      onClick={handleClick}
      disabled={isPending}
      className="min-w-[200px]"
    >
      {isPending ? "Creating..." : address ? getShortAddress(address) : "Generate Wallet"}
    </Button>
  );
}

export default GenerateWalletButton;
