"use client";

import RequireAuth from "@/components/auth/RequireAuth";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";

export default function AgentPage() {
  const { isSignedIn, user } = useUser();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Welcome to Trego AI Agent</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Your AI-powered DeFi trading assistant is ready to help you navigate the world of
          decentralized finance. Get real-time market analysis, intelligent trading strategies, and
          seamless social integration.
        </p>

        {isSignedIn && (
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Connected Account</h3>
            <p className="text-gray-300 mb-2">
              <span className="font-medium">User:</span>{" "}
              {user?.username || user?.firstName || "User"}
            </p>
            {user?.primaryEmailAddress && (
              <p className="text-gray-300">
                <span className="font-medium">Email:</span> {user.primaryEmailAddress.emailAddress}
              </p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-3">Market Analysis</h4>
            <p className="text-gray-300 text-sm">
              Get real-time insights and analysis of DeFi markets, token performance, and trading
              opportunities.
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
          <RequireAuth message="Sign in to access the AI Agent">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium"
              disabled
            >
              AI Agent Coming Soon
            </Button>
          </RequireAuth>
        </div>
      </div>
    </main>
  );
}
