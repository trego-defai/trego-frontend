import AppProviders from "@/providers";
import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trego - DeFi AI Assistant",
  description:
    "AI-powered DeFi trading assistant with real-time market analysis, intelligent trading strategies, and seamless social integration.",
  keywords: ["DeFi", "AI", "trading", "cryptocurrency", "assistant", "blockchain", "analysis"],
  authors: [{ name: "Trego" }],
  openGraph: {
    title: "Trego - DeFi AI Assistant",
    description:
      "AI-powered DeFi trading assistant with real-time market analysis, intelligent trading strategies, and seamless social integration.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trego - DeFi AI Assistant",
    description:
      "AI-powered DeFi trading assistant with real-time market analysis, intelligent trading strategies, and seamless social integration.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${manrope.variable} antialiased dark`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
