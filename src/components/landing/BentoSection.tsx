import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { PATH } from "@/lib/constants";
import Image from "next/image";
import { BentoTradingIcon, BentoAIIcon, BentoPortfolioIcon } from "@/components/ui/icons";

export default function BentoSection() {
  return (
    <section className="py-10 sm:py-16 md:py-20 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-emerald-300 text-xs mb-3 sm:mb-4">
            <span>Secure & Smart Wallet Features</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4">
            Your Crypto Wallet, Reimagined.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
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
            Icon={BentoPortfolioIcon}
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
            Icon={BentoAIIcon}
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
                    <Image src="/trading.svg" alt="Trading Web3" fill className="object-contain scale-200" />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-[#1FFFA9]/20" />
              </div>
            }
            Icon={BentoTradingIcon}
            description="Automate your trading strategies with powerful bots. Execute trades 24/7, backtest algorithms, and optimize performance for any market condition."
            href={PATH.trade}
            cta="Start Trading"
          />
        </BentoGrid>
      </div>
    </section>
  );
}
