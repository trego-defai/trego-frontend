import { Tweet } from "@/types/x.type";
import React from "react";
import Marquee from "../ui/marquee";
import TweetCard from "./TweetCard";

export const SAMPLE_TWEETS: Tweet[] = [
  {
    id: 1,
    username: "@defi_trader_pro",
    handle: "DeFi Trader Pro",
    content:
      "Just made 15% on my APT/USDC trade using @TregoAI! The AI predicted the perfect entry point. 🚀",
    timestamp: "2h",
    likes: 342,
    retweets: 89,
  },
  {
    id: 2,
    username: "@crypto_analyst",
    handle: "Crypto Analyst",
    content:
      "Trego AI assistant helped me identify a profitable arbitrage opportunity between DEXs. Automation at its finest! 💎",
    timestamp: "4h",
    likes: 156,
    retweets: 43,
  },
  {
    id: 3,
    username: "@yield_farmer_x",
    handle: "Yield Farmer X",
    content:
      "The P&L tracking in Trego is incredible. Finally, a tool that understands DeFi complexity. 📊",
    timestamp: "6h",
    likes: 287,
    retweets: 67,
  },
  {
    id: 4,
    username: "@aptos_whale",
    handle: "Aptos Whale",
    content:
      "Switched to Trego for my trading strategy. The AI insights are game-changing for Aptos ecosystem! 🌊",
    timestamp: "8h",
    likes: 423,
    retweets: 124,
  },
  {
    id: 5,
    username: "@defi_researcher",
    handle: "DeFi Researcher",
    content:
      "Love how Trego explains complex DeFi strategies in simple terms. Education + execution = perfect combo ✨",
    timestamp: "12h",
    likes: 198,
    retweets: 52,
  },
];

const TwitterSection: React.FC = () => {
  return (
    <div className="py-16 bg-muted/30">
      <div className="mx-auto container">
        <Marquee className="[--duration:40s]" pauseOnHover>
          {SAMPLE_TWEETS.map((tweet) => (
            <TweetCard key={tweet.id} tweet={tweet} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TwitterSection;
