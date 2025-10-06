import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trego Chat Agent - AI Assistant for DeFi Trading",
  description:
    "Chat with Trego AI agent for everything onchain. Request wallet details, execute swaps, manage bridges, and get intelligent trading assistance across multiple chains and dApps.",
  keywords: [
    "AI chat",
    "DeFi assistant",
    "trading bot",
    "blockchain chat",
    "crypto swap",
    "wallet management",
    "Aptos agent",
    "onchain assistant",
  ],
  openGraph: {
    title: "Trego Chat Agent - AI Assistant for DeFi Trading",
    description:
      "Chat with Trego AI agent for everything onchain. Request wallet details, execute swaps, manage bridges, and get intelligent trading assistance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trego Chat Agent - AI Assistant for DeFi Trading",
    description:
      "Chat with Trego AI agent for everything onchain. Request wallet details, execute swaps, and get intelligent trading assistance.",
  },
};

export default function AgentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
