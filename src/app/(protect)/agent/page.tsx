import { ChatbotPanel } from "@/components/trade/ChatbotPanel";

export function AgentPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center overflow-auto p-4">
      <section className="w-full max-w-2xl flex flex-col items-center px-2 py-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
          DeFai AI Trading Assistant
        </h1>
        <p className="text-gray-400 text-center mb-6 max-w-lg">
          Chat with your AI agent for DeFi trading insights, strategies, and market analysis. Ask
          anything about DeFi, trading, or your portfolio.
        </p>
        <div className="w-full">
          <ChatbotPanel className="w-full" />
        </div>
      </section>
    </main>
  );
}

export default AgentPage;
