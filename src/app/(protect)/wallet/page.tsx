"use client";

import {
  NoWallet,
  ReceiveToken,
  SendToken,
  Token,
  TokensList,
  Transaction,
  TransactionHistory,
  WalletBalance,
  WalletLoading,
} from "@/components/wallet";
import AuthContent from "@/components/wallet/AuthContent";
import { walletService } from "@/service/walletService";
import { useWalletStore } from "@/store/useWalletStore";
import { TokenBalance, Transaction as WalletTransaction } from "@/types/wallet";
import { useUser } from "@clerk/nextjs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function WalletPage() {
  const { user } = useUser();
  const { account } = useWalletStore();
  const queryClient = useQueryClient();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);

  // Query to get balance (only if not already in wallet data)
  const { data: walletDetailsData, isLoading: isLoadingWalletDetails } = useQuery({
    queryKey: ["balance", account?.address],
    queryFn: async () => {
      if (!account?.address) return null;
      const response = await walletService.getWalletDetails(account.address);
      return response.data;
    },
    enabled: !!account?.address,
    refetchInterval: 20000, // Refetch every 20 seconds
  });

  // Mutation to send token
  const sendTokenMutation = useMutation({
    mutationFn: async (data: { id: string; recipient: string; amount: number }) => {
      const response = await walletService.sendToken(data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Transaction sent successfully!");
      setRecipient("");
      setAmount("");
      // Invalidate wallet data to refresh balance, tokens, and history
      queryClient.invalidateQueries({ queryKey: ["wallet"] });
      queryClient.invalidateQueries({ queryKey: ["balance"] });
    },
    onError: (error) => {
      toast.error("Failed to send transaction");
      console.error("Error sending:", error);
    },
  });

  const handleSendToken = async () => {
    if (!account || !recipient || !amount) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!user?.id) {
      toast.error("User not authenticated");
      return;
    }

    if (!selectedToken) {
      toast.error("Please select a token");
      return;
    }

    sendTokenMutation.mutate({
      id: user.id,
      recipient,
      amount: parseFloat(amount) * 10 ** selectedToken.decimals,
    });
  };

  const refreshBalance = () => {
    // Invalidate and refetch wallet data to get updated balance, tokens, and history
    queryClient.invalidateQueries({ queryKey: ["wallet"] });
    queryClient.invalidateQueries({ queryKey: ["balance"] });
    toast.success("Balance refreshed!");
  };

  // Use balance from wallet data if available, otherwise fallback to balance query
  const balance = walletDetailsData?.balance ? (parseFloat(walletDetailsData.balance) / 10 ** 8).toString() : "0";

  const isLoading = sendTokenMutation.isPending || isLoadingWalletDetails;

  // Convert API tokens to component tokens format
  const tokens: Token[] = walletDetailsData?.tokens?.map((token: TokenBalance) => ({
    symbol: token.symbol || "Unknown",
    name: token.name || "Unknown Token",
    balance: (parseFloat(token.amount) / 10 ** token.decimals).toString(),
    decimals: token.decimals,
  })) || [
    // Fallback to APT token if no tokens from API
    {
      symbol: "APT",
      name: "Aptos Coin",
      balance: balance,
      decimals: 8,
    },
  ];

  // Convert API transactions to component transactions format
  const transactions: Transaction[] =
    walletDetailsData?.history?.map((tx: WalletTransaction) => ({
      hash: tx.hash,
      type: tx.success ? "received" : "sent", // Map failed transactions as 'sent' for now
      amount: "0", // Amount not directly available in transaction data
      token: "APT", // Default to APT for now
      timestamp: new Date(tx.timestamp).getTime(),
      from: tx.sender,
    })) || [];

  // Set default selected token to first available token
  useEffect(() => {
    if (tokens.length > 0 && !selectedToken) {
      setSelectedToken(tokens[0]);
    }
  }, [tokens, selectedToken]);

  if (isLoadingWalletDetails) {
    return <WalletLoading />;
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <AuthContent />
      </div>
    );
  }

  if (!account) {
    return <NoWallet />;
  }

  return (
    <main className="flex-1 p-6 h-screen overflow-hidden">
      <div className="h-full max-w-6xl mx-auto flex flex-col gap-6">
        <WalletBalance
          account={account}
          balance={balance}
          isLoadingBalance={isLoadingWalletDetails}
          onRefresh={refreshBalance}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 overflow-hidden">
          <div className="lg:col-span-2 flex flex-col gap-6 overflow-hidden">
            <TokensList tokens={tokens} isLoading={isLoadingWalletDetails} />
            <TransactionHistory transactions={transactions} />
          </div>

          <div className="flex flex-col gap-6 overflow-y-auto">
            {tokens?.length > 0 && (
              <SendToken
                tokens={tokens}
                selectedToken={selectedToken}
                onSelectToken={setSelectedToken}
                recipient={recipient}
                amount={amount}
                onRecipientChange={setRecipient}
                onAmountChange={setAmount}
                onSend={handleSendToken}
                isLoading={isLoading}
              />
            )}
            <ReceiveToken address={account.address} />
          </div>
        </div>
      </div>
    </main>
  );
}
