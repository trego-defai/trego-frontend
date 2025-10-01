"use client";

import { Button } from "@/components/ui/button";
import { getShortAddress } from "@/lib/utils";
import { walletService } from "@/service/walletService";
import { useQuery } from "@tanstack/react-query";
import GenerateWalletButton from "./GenerateWalletButton";

const TregoWallet = () => {
  const { data: wallet, isLoading } = useQuery({
    queryKey: ["wallet"],
    queryFn: () => walletService.getWallet(),
  });

  if (isLoading) {
    return (
      <Button variant="primary" size="icon" disabled className="min-w-[200px]">
        Loading...
      </Button>
    );
  }

  if (wallet?.appAddress) {
    return (
      <Button variant="primary" size="icon" className="min-w-[200px]">
        {getShortAddress(wallet.appAddress)}
      </Button>
    );
  }

  return <GenerateWalletButton />;
};

export default TregoWallet;
