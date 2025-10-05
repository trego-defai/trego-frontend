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

type TabType = "history" | "tokens" | "send-receive";

const TABS = [
  { id: "tokens" as const, label: "List Token" },
  { id: "history" as const, label: "History" },
  { id: "send-receive" as const, label: "Send & Receive" },
];

const REFETCH_INTERVAL = 20000;
const DEFAULT_DECIMALS = 8;

export default function WalletPage() {
  const { user } = useUser();
  const { account } = useWalletStore();
  const queryClient = useQueryClient();

  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>("tokens");

  const { data: walletDetailsData, isLoading: isLoadingWalletDetails } = useQuery({
    queryKey: ["balance", account?.address],
    queryFn: async () => {
      if (!account?.address) return null;
      const response = await walletService.getWalletDetails(account.address);
      return response.data;
    },
    enabled: !!account?.address,
    refetchInterval: REFETCH_INTERVAL,
  });

  const sendTokenMutation = useMutation({
    mutationFn: async (data: { id: string; recipient: string; amount: number }) => {
      const response = await walletService.sendToken(data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Transaction sent successfully!");
      resetSendForm();
      invalidateWalletQueries();
    },
    onError: (error) => {
      toast.error("Failed to send transaction");
      console.error("Error sending:", error);
    },
  });

  const resetSendForm = () => {
    setRecipient("");
    setAmount("");
  };

  const invalidateWalletQueries = () => {
    queryClient.invalidateQueries({ queryKey: ["wallet"] });
    queryClient.invalidateQueries({ queryKey: ["balance"] });
  };

  const handleSendToken = async () => {
    if (!validateSendTransaction()) return;

    sendTokenMutation.mutate({
      id: user!.id,
      recipient,
      amount: parseFloat(amount) * 10 ** selectedToken!.decimals,
    });
  };

  const validateSendTransaction = (): boolean => {
    if (!account || !recipient || !amount) {
      toast.error("Please fill in all fields");
      return false;
    }

    if (!user?.id) {
      toast.error("User not authenticated");
      return false;
    }

    if (!selectedToken) {
      toast.error("Please select a token");
      return false;
    }

    return true;
  };

  const refreshBalance = () => {
    invalidateWalletQueries();
    toast.success("Balance refreshed!");
  };

  const balance = walletDetailsData?.balance
    ? (parseFloat(walletDetailsData.balance) / 10 ** DEFAULT_DECIMALS).toString()
    : "0";

  const isLoading = sendTokenMutation.isPending || isLoadingWalletDetails;

  const tokens: Token[] = walletDetailsData?.tokens?.map((token: TokenBalance) => ({
    symbol: token.symbol || "Unknown",
    name: token.name || "Unknown Token",
    balance: (parseFloat(token.amount) / 10 ** token.decimals).toString(),
    decimals: token.decimals,
  })) || [
    {
      symbol: "APT",
      name: "Aptos Coin",
      balance: balance,
      decimals: DEFAULT_DECIMALS,
    },
  ];

  const transactions: Transaction[] =
    walletDetailsData?.history?.map((tx: WalletTransaction) => {
      const gasFee = ((parseFloat(tx.gasUsed) * parseFloat(tx.gasUnitPrice)) / 10 ** DEFAULT_DECIMALS).toFixed(8);
      return {
        hash: tx.hash,
        type: tx.success ? "received" : "sent",
        amount: "0",
        token: "APT",
        timestamp: new Date(tx.timestamp).getTime(),
        from: tx.sender,
        gasFee,
      };
    }) || [];

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

        <div className="flex gap-2 border-b">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-hidden">
          {activeTab === "tokens" && <TokensList tokens={tokens} isLoading={isLoadingWalletDetails} />}

          {activeTab === "history" && <TransactionHistory transactions={transactions} />}

          {activeTab === "send-receive" && (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
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
          )}
        </div>
      </div>
    </main>
  );
}
