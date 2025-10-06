import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trego Wallet - Manage Your Crypto Assets",
  description:
    "Manage your cryptocurrency wallet with Trego. View token balances, send and receive crypto, track transaction history, and monitor your Aptos wallet all in one secure dashboard.",
  keywords: [
    "crypto wallet",
    "Aptos wallet",
    "token management",
    "send crypto",
    "receive crypto",
    "transaction history",
    "wallet dashboard",
    "DeFi wallet",
  ],
  openGraph: {
    title: "Trego Wallet - Manage Your Crypto Assets",
    description:
      "Manage your cryptocurrency wallet with Trego. View token balances, send and receive crypto, and track transaction history.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trego Wallet - Manage Your Crypto Assets",
    description:
      "Manage your crypto wallet with Trego. View balances, send and receive tokens, and track transactions.",
  },
};

export default function WalletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
