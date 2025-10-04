'use client';

import { useWalletStore } from '@/store/useWalletStore';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';

export default function TregoWallet() {
  const { account } = useWalletStore();

  if (!account) {
    return null;
  }

  const shortAddress = `${account.address.slice(0, 6)}...${account.address.slice(-4)}`;

  return (
    <Button variant="outline" size="sm" className="flex items-center gap-2 text-sm">
      <Wallet className="h-4 w-4" />
      <span className="hidden sm:inline">{shortAddress}</span>
    </Button>
  );
}
