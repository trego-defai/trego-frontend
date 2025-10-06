import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Trego - AI Agents for DeFi Trading",
  description:
    "Get started with Trego's AI agents for automated trading, portfolio analysis, and DeFi management. Access Trego Chat for onchain operations and trading bots powered by social signals across multiple chains.",
  keywords: [
    "AI agents",
    "DeFi automation",
    "trading agents",
    "portfolio management",
    "multi-chain DeFi",
    "onchain assistant",
    "crypto automation",
    "Trego agents",
  ],
  openGraph: {
    title: "Welcome to Trego - AI Agents for DeFi Trading",
    description:
      "Get started with Trego's AI agents for automated trading, portfolio analysis, and DeFi management across multiple chains.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to Trego - AI Agents for DeFi Trading",
    description: "Get started with Trego's AI agents for automated trading and DeFi management across multiple chains.",
  },
};

export default function WelcomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
