import { create } from "zustand";
import { persist } from "zustand/middleware";
import { WalletAccount } from "@/types/wallet";

interface WalletState {
  account: WalletAccount | null;
  setAccount: (account: WalletAccount | null) => void;
}

export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
      account: null,
      setAccount: (account: WalletAccount | null) => set({ account }),
    }),
    {
      name: "wallet-storage",
    },
  ),
);
