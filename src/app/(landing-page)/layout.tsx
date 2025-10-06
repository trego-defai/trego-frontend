import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trego - AI-Powered DeFi Trading Assistant",
  description:
    "Experience the future of DeFi trading with Trego's AI-powered assistant. Get real-time market analysis, intelligent trading strategies, automated trading bots, and seamless social integration.",
  keywords: [
    "DeFi",
    "AI trading",
    "cryptocurrency",
    "trading assistant",
    "blockchain",
    "market analysis",
    "automated trading",
    "Aptos",
  ],
  openGraph: {
    title: "Trego - AI-Powered DeFi Trading Assistant",
    description:
      "Experience the future of DeFi trading with Trego's AI-powered assistant. Get real-time market analysis and intelligent trading strategies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trego - AI-Powered DeFi Trading Assistant",
    description:
      "Experience the future of DeFi trading with Trego's AI-powered assistant. Get real-time market analysis and intelligent trading strategies.",
  },
};

export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
