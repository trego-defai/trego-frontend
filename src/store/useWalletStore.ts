import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WalletState {
  address: string | null;
  setAddress: (address: string) => void;
}

export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
      address: null,
      setAddress: (address: string) => set({ address }),
    }),
    {
      name: "wallet-storage",
    }
  )
);
