import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { PATH } from "@/lib/constants";

// Icons for the cards
const TradingIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const BotIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const AIIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const SecurityIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const PortfolioIcon = () => (
  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

// Helper to hide default icon area when using custom visuals in background
const NoneIcon = () => <span className="hidden" />;

export default function BentoSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs mb-4">
            <span>Premium Features for a Fair Price</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get More From Your Portfolio.
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the tools that make Trego the ultimate AI trading platform
          </p>
        </div>

        <BentoGrid className="max-w-5xl mx-auto">
          <BentoCard
            name="The QUAD Token"
            className="col-span-1 md:col-span-2"
            background={
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1FFFA9]/12 via-[#1FFFA9]/8 to-transparent" />
                {/* Coin illustration on right */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 h-56 w-56 rounded-full bg-[#1FFFA9]/10 blur-2xl" />
                <svg className="absolute right-8 top-1/2 -translate-y-1/2 h-56 w-56" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="70" fill="#0b1210" stroke="#1FFFA9" strokeOpacity="0.6" strokeWidth="2" />
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
            Icon={NoneIcon}
            description="The next-generation of high-utility platform tokens is here. QUAD gives traders premium access to trading bots and the best in discounted fees."
            href="#token"
            cta="Get Started"
          />

          <BentoCard
            name={<>
              All in one Crypto
            </>}
            className="col-span-1 md:col-span-1 md:row-span-2"
            background={
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1FFFA9]/10 via-transparent to-transparent" />
                {/* Tilted card bottom-left */}
                <div className="absolute left-6 bottom-6 h-56 w-72 rotate-[-12deg] rounded-2xl bg-black/60 ring-1 ring-[#1FFFA9]/15 shadow-[0_0_80px_-20px_#1FFFA9]" />
                <div className="absolute inset-0 rounded-xl ring-1 ring-[#1FFFA9]/20" />
              </div>
            }
            Icon={AnalyticsIcon}
            description="Stay on top of your portfolio with real-time performance tracking and enhanced portfolio analytics so you know the true cost of your portfolio."
            href="#analytics"
            cta="Get Started"
          />

          <BentoCard
            name={<>
              Smart Trading Wherever
            </>}
            className="col-span-1 md:col-span-1 md:row-span-2"
            background={
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1FFFA9]/10 via-transparent to-transparent" />
                {/* Allocation gauge bottom-right */}
                <div className="absolute right-6 bottom-6 h-56 w-72 rotate-[8deg] rounded-2xl bg-black/60 ring-1 ring-[#1FFFA9]/15 shadow-[0_0_80px_-20px_#1FFFA9]" />
                <div className="absolute inset-0 rounded-xl ring-1 ring-[#1FFFA9]/20" />
              </div>
            }
            Icon={AnalyticsIcon}
            description="Stay on top of your portfolio with real-time performance tracking and enhanced portfolio analytics so you know the true cost of your portfolio."
            href="#smart"
            cta="Get Started"
          />
        </BentoGrid>
      </div>
    </section>
  );
}
