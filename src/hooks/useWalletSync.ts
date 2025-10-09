import { useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useWalletStore } from "@/store/useWalletStore";
import { walletService } from "@/service/walletService";
import { WalletAccount } from "@/types/wallet";

/**
 * Custom hook to fetch and sync wallet data with the store
 * @param userId - User ID from authentication provider
 * @returns Wallet data, loading state, and error
 */
export default function useWalletSync(userId?: string) {
  const { setAccount, setIsLoadingAccount } = useWalletStore();

  const {
    data: walletData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["wallet", userId],
    queryFn: async () => {
      const response = await walletService.getWallet();
      return response.data;
    },
    enabled: !!userId,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
    retry: 2,
  });

  // Memoized sync function to prevent unnecessary re-renders
  const syncWalletData = useCallback(() => {
    // Handle user logout
    if (!userId) {
      setAccount(null);
      setIsLoadingAccount(false);
      return;
    }

    // Sync loading state
    setIsLoadingAccount(isLoading);

    // Sync wallet data
    if (walletData?.appAddress) {
      const walletAccount: WalletAccount = {
        address: walletData.appAddress,
      };
      setAccount(walletAccount);
    } else if (walletData === null || error) {
      setAccount(null);
    }
  }, [userId, isLoading, walletData, error, setAccount, setIsLoadingAccount]);

  // Single effect to sync all wallet state
  useEffect(() => {
    syncWalletData();
  }, [syncWalletData]);

  return { walletData, isLoading, error };
}
