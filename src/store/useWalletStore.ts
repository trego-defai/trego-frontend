import { create } from "zustand";
import { persist } from "zustand/middleware";
import { WalletAccount } from "@/types/wallet";

interface WalletState {
  account: WalletAccount | null;
  isLoadingAccount: boolean;
  setAccount: (account: WalletAccount | null) => void;
  setIsLoadingAccount: (isLoading: boolean) => void;
}

export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
      account: null,
      isLoadingAccount: false,
      setAccount: (account: WalletAccount | null) => set({ account }),
      setIsLoadingAccount: (isLoading: boolean) => set({ isLoadingAccount: isLoading }),
    }),
    {
      name: "wallet-storage",
    },
  ),
);
