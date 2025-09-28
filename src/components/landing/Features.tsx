import { Button } from "@/components/ui/button";
import { JSX } from "react";

interface FeatureItem {
  title: string;
  description: string;
  cta: string;
  icon: JSX.Element;
}

function FeatureCard({ item }: { item: FeatureItem }) {
  return (
    <div className="group relative p-8 md:p-10">
      <div className="relative flex flex-col items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-400/20">
          {item.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{item.title}</h3>
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </div>
      </div>
      <div className="relative mt-6">
        <Button variant="ghost" className="px-0 text-emerald-300 hover:text-emerald-200 text-sm">
          {item.cta}
          <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12h14" />
            <path d="M13 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  );
}

function Features() {
  const items: FeatureItem[] = [
    {
      title: "Automation Bot",
      description:
        "No matter the market conditions, create and run your own strategies with our AI Trading Assistant.",
      cta: "Get Started",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-300">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Multi-Exchange",
      description:
        "Trade on top exchanges from one interface with integrated TradingView charts.",
      cta: "Get Started",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-300">
          <rect x="3" y="3" width="7" height="7" rx="2" />
          <rect x="14" y="3" width="7" height="7" rx="2" />
          <rect x="3" y="14" width="7" height="7" rx="2" />
          <rect x="14" y="14" width="7" height="7" rx="2" />
        </svg>
      ),
    },
    {
      title: "Crypto Portfolio Tracking",
      description:
        "Manage your portfolio across wallets and exchanges with real-time insights.",
      cta: "Get Started",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-300">
          <path d="M3 3h18v6H3z" />
          <path d="M7 13h3v8H7zM14 10h3v11h-3z" />
        </svg>
      ),
    },
    {
      title: "Free Access for All",
      description:
        "Ahead of major updates, you are invited to use the platform at no cost.",
      cta: "Get Started",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-300">
          <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 md:px-6">
      <div className="mx-auto mb-10 flex w-max items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs text-emerald-300">
        <span>🚀</span>
        <span>Your Crypto</span>
      </div>

      <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
        Power Your Crypto
      </h2>
      <p className="mx-auto max-w-3xl text-center text-xs md:text-base text-gray-300 mb-10">
        An all-in-one crypto trading platform with a range of pro tools designed for traders of every skill level.
      </p>

      <div className="relative rounded-3xl border border-emerald-400/10 bg-gradient-to-b from-emerald-400/5 to-transparent p-4 md:p-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-60 [background:radial-gradient(1200px_500px_at_50%_-10%,rgba(16,185,129,0.18),transparent_60%)]" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2 lg:gap-3
        max-md:[&>*:not(:first-child)]:border-t max-md:[&>*:not(:first-child)]:border-emerald-400/10 md:[&>*]:border-t-0
        md:[&>*:not(:nth-child(2n+1))]:border-l md:[&>*:not(:nth-child(2n+1))]:border-emerald-400/15
        lg:[&>*:not(:nth-child(4n+1))]:border-l lg:[&>*:not(:nth-child(4n+1))]:border-emerald-400/15">
          {items.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="default" size="lg" className="group text-sm md:text-base">
          Get Started
          <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
        </Button>
      </div>
    </section>
  );
}

export { Features as default };


