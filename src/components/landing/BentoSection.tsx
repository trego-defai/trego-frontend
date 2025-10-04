import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { PATH } from "@/lib/constants";
import Image from "next/image";

// Icons for the cards
const TradingIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const _BotIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const AIIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const _SecurityIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);

const _AnalyticsIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const PortfolioIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
);

// Helper to hide default icon area when using custom visuals in background
const _NoneIcon = () => <span className="hidden" />;

export default function BentoSection() {
  return (
    <section className="py-10 sm:py-16 md:py-20 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs mb-3 sm:mb-4">
            <span>Secure & Smart Wallet Features</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            Your Crypto Wallet, Reimagined.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Experience the future of crypto wallets with advanced security, seamless trading, and intelligent portfolio
            management
          </p>
        </div>

        <BentoGrid className="max-w-5xl mx-auto">
          <BentoCard
            name="Multi-Chain Portfolio"
            className="col-span-1 md:col-span-2"
            background={
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1FFFA9]/12 via-[#1FFFA9]/8 to-transparent" />
                <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 h-32 w-32 sm:h-48 sm:w-48 md:h-56 md:w-56 rounded-full bg-[#1FFFA9]/10 blur-2xl" />
                <svg
                  className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 h-32 w-32 sm:h-48 sm:w-48 md:h-56 md:w-56"
                  viewBox="0 0 200 200"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="#0b1210"
                    stroke="#1FFFA9"
                    strokeOpacity="0.6"
                    strokeWidth="2"
                  />
                  <circle cx="120" cy="100" r="70" fill="none" stroke="#1FFFA9" strokeOpacity="0.4" strokeWidth="2" />
                  <circle cx="140" cy="100" r="70" fill="none" stroke="#1FFFA9" strokeOpacity="0.25" strokeWidth="2" />
                  <g transform="translate(70,70)" fill="#1FFFA9">
                    <rect x="0" y="20" width="18" height="28" rx="2" />
                    <rect x="22" y="12" width="18" height="36" rx="2" />
                    <rect x="44" y="20" width="18" height="28" rx="2" />
                  </g>
                </svg>
                <div className="absolute inset-0 rounded-xl ring-1 ring-[#1FFFA9]/20" />
              </div>
            }
            Icon={PortfolioIcon}
            description="Manage all your crypto assets across multiple blockchains in one unified interface. Track balances, view transaction history, and monitor portfolio performance in real-time."
            href={PATH.wallet}
            cta="View Portfolio"
          />

          <BentoCard
            name={<>AI Chatbot</>}
            className="col-span-1 md:col-span-1 md:row-span-2"
            background={
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1FFFA9]/10 via-transparent to-transparent" />
                <div className="absolute left-3 sm:left-6 bottom-3 sm:bottom-6 h-40 w-48 sm:h-48 sm:w-60 md:h-56 md:w-72 rotate-[-12deg] rounded-2xl bg-black/60 ring-1 ring-[#1FFFA9]/15 shadow-[0_0_80px_-20px_#1FFFA9] p-2 flex items-center justify-center">
                  <div className="relative w-[90%] h-[90%]">
                    <Image src="/aiAgentweb3.svg" alt="AI Agent Web3" fill className="object-contain scale-[3]" />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-[#1FFFA9]/20" />
              </div>
            }
            Icon={AIIcon}
            description="Intelligent AI assistant to help you manage assets, trade, and answer your blockchain, crypto, and DeFi questions—all in one secure, user-friendly interface."
            href={PATH.agent}
            cta="Learn More"
          />

          <BentoCard
            name={<>Trading Bots</>}
            className="col-span-1 md:col-span-1 md:row-span-2"
            background={
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1FFFA9]/10 via-transparent to-transparent" />
                <div className="absolute right-3 sm:right-6 bottom-3 sm:bottom-6 h-40 w-48 sm:h-48 sm:w-60 md:h-56 md:w-72 rotate-[8deg] rounded-2xl bg-black/60 ring-1 ring-[#1FFFA9]/15 shadow-[0_0_80px_-20px_#1FFFA9] p-2 flex items-center justify-center">
                  <div className="relative w-[90%] h-[90%]">
                    <Image src="/tradingweb3.svg" alt="Trading Web3" fill className="object-contain scale-200" />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-[#1FFFA9]/20" />
              </div>
            }
            Icon={TradingIcon}
            description="Automate your trading strategies with powerful bots. Execute trades 24/7, backtest algorithms, and optimize performance for any market condition."
            href={PATH.trade}
            cta="Start Trading"
          />
        </BentoGrid>
      </div>
    </section>
  );
}
