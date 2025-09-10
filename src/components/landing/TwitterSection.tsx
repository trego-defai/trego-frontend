import { Marquee } from "@/components/ui/marquee";
import TweetCard from "./TweetCard";
import { Tweet } from "@/types/x.type";

const tweets: Tweet[] = [
  {
    id: 1,
    username: "@defi_trader",
    handle: "DeFi Trader",
    content:
      "Just tried Trego AI and it's absolutely game-changing! The real-time market analysis helped me spot a 20% opportunity I would have missed. This is the future of DeFi trading! 🚀 #DeFi #AI #Trading",
    timestamp: "2h",
    likes: 342,
    retweets: 89,
  },
  {
    id: 2,
    username: "@crypto_sarah",
    handle: "Sarah Chen",
    content:
      "Finally, an AI assistant that actually understands DeFi complexity. Trego's intelligent trading strategies saved me from a major loss during yesterday's market volatility. Highly recommended! 💯",
    timestamp: "4h",
    likes: 156,
    retweets: 34,
  },
  {
    id: 3,
    username: "@blockchain_dev",
    handle: "Alex Rodriguez",
    content:
      "The social integration feature in Trego is brilliant! Being able to see community insights alongside AI analysis gives me so much more confidence in my trading decisions. Amazing work! 👏",
    timestamp: "6h",
    likes: 289,
    retweets: 67,
  },
  {
    id: 4,
    username: "@yield_farmer",
    handle: "Mike Johnson",
    content:
      "Trego's AI spotted a yield farming opportunity that's already up 15% in just 3 days. The risk management suggestions were spot on too. This tool is a must-have for serious DeFi participants! 🌾",
    timestamp: "8h",
    likes: 198,
    retweets: 45,
  },
  {
    id: 5,
    username: "@defi_analyst",
    handle: "Emma Wilson",
    content:
      "As a DeFi researcher, I'm impressed by Trego's analytical depth. It processes market data faster than any human could and presents actionable insights beautifully. The future is here! 🔍",
    timestamp: "12h",
    likes: 423,
    retweets: 112,
  },
  {
    id: 6,
    username: "@crypto_newbie",
    handle: "David Kim",
    content:
      "New to DeFi and Trego has been my guiding light! The AI explains complex strategies in simple terms and helps me avoid rookie mistakes. Already seeing positive returns! 🙏 #DeFiEducation",
    timestamp: "1d",
    likes: 267,
    retweets: 78,
  },
];

const firstRow = tweets.slice(0, tweets.length);

function TwitterSection() {
  return (
    <div className="relative container mx-auto flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

export default TwitterSection;
