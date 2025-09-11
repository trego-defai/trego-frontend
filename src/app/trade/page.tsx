"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { Button } from "@/components/ui/button";
import { usePrivy } from "@privy-io/react-auth";
import Link from "next/link";

export default function AgentPage() {
  const { user, logout } = usePrivy();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black">
        {/* Header */}
        <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <Link href="/" className="text-xl font-bold text-white">
                  Trego
                </Link>
                <span className="text-gray-400">|</span>
                <h1 className="text-lg font-semibold text-white">AI Agent</h1>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300">
                  {user?.email?.address || user?.wallet?.address}
                </span>
                <Button variant="ghost" className="text-sm" onClick={logout}>
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to Trego AI Agent</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Your AI-powered DeFi trading assistant is ready to help you navigate the world of
              decentralized finance. Get real-time market analysis, intelligent trading strategies,
              and seamless social integration.
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Connected Wallet</h3>
              <p className="text-gray-300 mb-2">
                <span className="font-medium">Address:</span> {user?.wallet?.address}
              </p>
              {user?.email?.address && (
                <p className="text-gray-300">
                  <span className="font-medium">Email:</span> {user.email.address}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Market Analysis</h4>
                <p className="text-gray-300 text-sm">
                  Get real-time insights and analysis of DeFi markets, token performance, and
                  trading opportunities.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Smart Trading</h4>
                <p className="text-gray-300 text-sm">
                  Execute intelligent trading strategies with AI-powered recommendations and risk
                  management.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Social Integration</h4>
                <p className="text-gray-300 text-sm">
                  Connect with the DeFi community, share insights, and collaborate on trading
                  strategies.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium"
                disabled
              >
                AI Agent Coming Soon
              </Button>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
