import { Button } from "@/components/ui/button";
import { PATH } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative flex flex-col min-h-[100vh] overflow-hidden">
      {/* Text Content - Top */}
      <div className="flex-1 flex flex-col items-center justify-center text-center py-20 px-4 relative z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide mb-3 drop-shadow-lg">
          AI TRADING BOT POWERED WITH{` `}
          <span className="relative inline-block align-middle">
            <span
              className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(16,185,129,0.5)] animate-gradient-x font-black"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.1em",
                fontSize: "1.5em",
                lineHeight: 1,
              }}
            >
              X
            </span>
            <span
              aria-hidden
              className="absolute -inset-1 blur-lg opacity-60 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 rounded-full pointer-events-none"
            />
            <svg
              className="absolute -top-2 -right-4 w-5 h-5 text-emerald-400 animate-bounce"
              fill="none"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" />
              <circle cx="10" cy="10" r="3" fill="currentColor" />
            </svg>
          </span>
        </h1>
        <p className="text-sm md:text-base text-gray-300 mb-8 font-medium">
          Trade faster and secure with AI Trading Assistant
        </p>
        <Link href={PATH.trade} target="_blank" rel="noopener noreferrer">
          <Button variant="default" size="lg" className="group">
            <span className="group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-300">
              🚀
            </span>
            TRADE NOW
          </Button>
        </Link>
      </div>
        <div className="w-full h-64 md:h-80">
          <Image
            src="/chart.svg"
            alt="chart"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
    </section>
  );
}

export default Hero;
