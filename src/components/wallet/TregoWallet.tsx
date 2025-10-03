"use client";

import { Button } from "@/components/ui/button";
import { getShortAddress } from "@/lib/utils";
import { walletService } from "@/service/walletService";
import { useWalletStore } from "@/store/useWalletStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import GenerateWalletButton from "./GenerateWalletButton";

const TregoWallet = () => {
  const { setAddress } = useWalletStore();

  const { data: wallet, isLoading } = useQuery({
    queryKey: ["wallet"],
    queryFn: () => walletService.getWallet(),
  });

  useEffect(() => {
    if (wallet?.data?.appAddress) {
      setAddress(wallet?.data?.appAddress || "");
    }
  }, [wallet?.data?.appAddress]);

  if (isLoading) {
    return (
      <Button variant="primary" size="icon" disabled className="min-w-[200px]">
        Loading...
      </Button>
    );
  }

  if (wallet?.data?.appAddress) {
    return (
      <Button variant="primary" size="icon" className="min-w-[200px]">
        {getShortAddress(wallet?.data?.appAddress)}
      </Button>
    );
  }

  return <GenerateWalletButton />;
};

export default TregoWallet;
