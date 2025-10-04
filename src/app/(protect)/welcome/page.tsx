"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AgentCardProps {
  title: string;
  author: string;
  description: string;
  avatars: string[];
  href?: string;
  onClick?: () => void;
}

interface StatRowProps {
  count: string;
  label: string;
  icons: { color: string; symbol: string }[];
}

function AgentCard({ title, author, description, avatars, href, onClick }: AgentCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (href) {
      router.push(href);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-700/50 p-3 sm:p-4 hover:border-slate-600/50 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
    >
      <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
        <div className="flex items-center gap-1">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden ${index > 0 ? "-ml-2 sm:-ml-3" : ""}`}
            >
              <Image src={avatar} alt="avatar" width={30} height={30} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-medium flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
            <span className="truncate">{title}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-slate-500 flex-shrink-0 sm:w-4 sm:h-4"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </h4>
          <p className="text-xs text-slate-500">by {author}</p>
        </div>
      </div>
      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

function StatRow({ count, label, icons }: StatRowProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8">
      <div className="text-left min-w-[120px] sm:min-w-[150px] lg:min-w-[200px]">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">{count}</h2>
        <p className="text-slate-400 text-sm sm:text-base lg:text-lg">{label}</p>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-lg ${icon.color} flex items-center justify-center`}
          >
            <span className="text-white text-sm sm:text-base">{icon.symbol}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const agentCards = [
  {
    title: "Trego Chat",
    author: "@tregodefai",
    description:
      "Ask and engage with Trego for everything onchain—request wallet details, swapping, bridging, and more.",
    avatars: [
      "https://media.aptosfoundation.org/1710268412-photo_2024-03-12_11-32-47.jpg?auto=format&fit=crop&h=344&w=344",
      "https://media.aptosfoundation.org/1745520865-project-icon_hyperion.png?auto=format&fit=crop&h=344&w=344",
      "https://media.aptosfoundation.org/1749513649-8be1e546e317-tapp_exchange.png?auto=format&fit=crop&h=344&w=344",
    ],
    href: "/agent",
  },
  {
    title: "Trading Bot",
    author: "@tregodefai",
    description:
      "Automated trading bot that monitors social media and market signals to execute trades on Aptos chain.",
    avatars: [
      "https://media.aptosfoundation.org/1690445358-e55899f0b363-kanalabs_logo.png?auto=format&fit=crop&h=344&w=344",
    ],
    href: "/trading",
  },
];

const stats = [
  {
    count: "10+",
    label: "Chains",
    icons: [
      { color: "bg-orange-500", symbol: "A" },
      { color: "bg-blue-600", symbol: "B" },
      { color: "bg-green-500", symbol: "C" },
      { color: "bg-yellow-500", symbol: "K" },
      { color: "bg-amber-600", symbol: "D" },
      { color: "bg-cyan-600", symbol: "E" },
      { color: "bg-purple-600", symbol: "F" },
    ],
  },
  {
    count: "100+",
    label: "MCPs",
    icons: [
      { color: "bg-red-500", symbol: "G" },
      { color: "bg-blue-500", symbol: "H" },
      { color: "bg-indigo-600", symbol: "D" },
      { color: "bg-gray-800", symbol: "I" },
      { color: "bg-red-600", symbol: "M" },
    ],
  },
  {
    count: "30+",
    label: "dApps",
    icons: [
      { color: "bg-green-600", symbol: "J" },
      { color: "bg-pink-500", symbol: "K" },
      { color: "bg-purple-600", symbol: "L" },
      { color: "bg-cyan-500", symbol: "M" },
      { color: "bg-blue-600", symbol: "Y" },
      { color: "bg-cyan-600", symbol: "N" },
      { color: "bg-green-500", symbol: "O" },
    ],
  },
];

export default function WelcomePage() {
  return (
    <div className="flex-1 flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div className="flex flex-col lg:flex-row w-full max-w-8xl min-h-[80vh] lg:h-[90vh] bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm rounded-2xl lg:rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl">
        <div className="w-full lg:w-[45%] p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center border-b lg:border-b-0">
          <div className="w-full max-w-md space-y-3 sm:space-y-4">
            <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold">
              <span className="text-red-500">Ask</span>
              <span className="text-white"> AI agents to automate your trading.</span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6">
              AI agents for trading, analysis, and DeFi portfolio management across chains.
            </p>

            {agentCards.map((card, index) => (
              <AgentCard key={index} {...card} />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[55%] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 w-full max-w-5xl">
            {stats.map((stat, index) => (
              <StatRow key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
