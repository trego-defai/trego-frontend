import { Button } from "@/components/ui/button";
import { AutomationIcon, ChatBotIcon, MarketAnalysisIcon, SecureIcon } from "@/components/ui/icons";
import Link from "next/link";
import { JSX } from "react";
import { PATH } from "@/lib/constants";

interface FeatureItem {
  title: string;
  description: string;
  cta: string;
  icon: JSX.Element;
  link: string;
}

function FeatureCard({ item }: { item: FeatureItem }) {
  return (
    <div className="group relative flex flex-col p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex flex-col items-start gap-3 sm:gap-4 flex-1">
        <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary/10 text-emerald-400 ring-1 ring-primary/20">
          {item.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-1">{item.title}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        </div>
      </div>
      <div className="mt-6">
        <Link href={item.link} target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" className="px-0 text-emerald-300 hover:text-primary text-xs sm:text-sm">
            {item.cta}
            <svg
              className="ml-2 h-3 w-3 sm:h-4 sm:w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
}

function Features() {
  const items: FeatureItem[] = [
    {
      title: "AI Agent",
      description:
        "Leverage advanced AI algorithms to analyze market trends and execute trades automatically with intelligent decision-making.",
      cta: "Start ChatBot",
      icon: <ChatBotIcon />,
      link: PATH.agent,
    },
    {
      title: "Trading Automation",
      description:
        "Sophisticated trading automation that works 24/7 to maximize your profits across multiple cryptocurrency exchanges.",
      cta: "Start Trading",
      icon: <AutomationIcon />,
      link: PATH.trade,
    },
    {
      title: "Real-time Market Analysis",
      description:
        "Get instant market insights and analytics powered by AI to make informed trading decisions in volatile crypto markets.",
      cta: "View Markets",
      icon: <MarketAnalysisIcon />,
      link: PATH.docs,
    },
    {
      title: "Secure & Fast Trading",
      description:
        "Experience lightning-fast trade execution with bank-level security protocols protecting your digital assets.",
      cta: "Learn More",
      icon: <SecureIcon />,
      link: PATH.welcome,
    },
  ];

  return (
    <section className="relative mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 py-10 sm:py-16 md:py-20">
      <div className="mx-auto mb-6 sm:mb-10 flex w-max items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-emerald-300">
        <span>🚀</span>
        <span>Your Crypto</span>
      </div>

      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-3 sm:mb-4 px-4">
        Power Your Crypto
      </h2>
      <p className="mx-auto max-w-3xl text-center text-xs sm:text-sm md:text-base text-muted-foreground mb-6 sm:mb-8 md:mb-10 px-4">
        An all-in-one crypto trading platform with a range of pro tools designed for traders of every skill level.
      </p>

      <div className="relative rounded-2xl sm:rounded-3xl border border-primary/10 bg-gradient-to-b from-primary/5 to-transparent p-3 sm:p-4 md:p-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl sm:rounded-3xl opacity-60 [background:radial-gradient(1200px_500px_at_50%_-10%,rgba(16,185,129,0.18),transparent_60%)]" />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2 lg:gap-3
        sm:[&>*:not(:nth-child(2n+1))]:border-l sm:[&>*:not(:nth-child(2n+1))]:border-primary/15
        lg:[&>*:not(:nth-child(4n+1))]:border-l lg:[&>*:not(:nth-child(4n+1))]:border-primary/15"
        >
          {items.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      {/* <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center">
        <Button variant="default" size="lg" className="group text-xs sm:text-sm md:text-base px-6 sm:px-8 py-2 sm:py-3">
          Get Started
          <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
        </Button>
      </div> */}
    </section>
  );
}

export { Features as default };
