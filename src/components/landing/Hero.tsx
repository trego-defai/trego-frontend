import React from "react";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[40vh] py-20 px-4 ">
      <div className="text-center">
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
          Harness real-time social sentiment from X to make smarter trading decisions with AI
        </p>
        <Button variant="primary" size="lg">
          TRADE NOW
        </Button>
      </div>
    </section>
  );
}

export default Hero;
