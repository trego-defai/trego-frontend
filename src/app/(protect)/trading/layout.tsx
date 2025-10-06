import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trego Trading Dashboard - Automated Trading Bot",
  description:
    "Monitor and manage your automated trading bot with Trego. Track balance history, view trade performance, and analyze social media signals for smart trading decisions on the Aptos chain.",
  keywords: [
    "trading bot",
    "automated trading",
    "DeFi dashboard",
    "trading analytics",
    "balance tracking",
    "Aptos trading",
    "social trading signals",
    "crypto bot",
  ],
  openGraph: {
    title: "Trego Trading Dashboard - Automated Trading Bot",
    description:
      "Monitor and manage your automated trading bot with Trego. Track balance history, view trade performance, and analyze social media signals.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trego Trading Dashboard - Automated Trading Bot",
    description: "Monitor your automated trading bot with Trego. Track performance and analyze social trading signals.",
  },
};

export default function TradingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
