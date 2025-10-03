import type { AvailableAssistant } from "@/types/chat";

export const AVAILABLE_ASSISTANTS: AvailableAssistant[] = [
  {
    id: "defi-expert",
    name: "DeFi Expert",
    description:
      "Specialized in DeFi protocols, token swaps, yield farming, and liquidity management",
    capabilities: [
      "Token Swaps",
      "Yield Farming",
      "Liquidity Provision",
      "Portfolio Analysis",
      "Risk Assessment",
    ],
    color: "bg-blue-500",
    icon: "💱",
  },
  {
    id: "trading-assistant",
    name: "Trading Assistant",
    description: "Advanced trading strategies, market analysis, and automated trading execution",
    capabilities: [
      "Market Analysis",
      "Technical Analysis",
      "Order Management",
      "Risk Management",
      "Strategy Execution",
    ],
    color: "bg-green-500",
    icon: "📈",
  },
  {
    id: "portfolio-manager",
    name: "Portfolio Manager",
    description: "Comprehensive portfolio optimization and wealth management strategies",
    capabilities: [
      "Portfolio Optimization",
      "Asset Allocation",
      "Performance Tracking",
      "Rebalancing",
      "Tax Optimization",
    ],
    color: "bg-purple-500",
    icon: "💼",
  },
  {
    id: "analytics-expert",
    name: "Analytics Expert",
    description: "On-chain data analysis, market intelligence, and predictive insights",
    capabilities: [
      "On-chain Analytics",
      "Market Intelligence",
      "Predictive Models",
      "Data Visualization",
      "Trend Analysis",
    ],
    color: "bg-orange-500",
    icon: "📊",
  },
  {
    id: "staking-specialist",
    name: "Staking Specialist",
    description: "Optimized staking strategies, validator selection, and reward maximization",
    capabilities: [
      "Validator Selection",
      "Staking Strategies",
      "Reward Optimization",
      "Unstaking Management",
      "Slashing Protection",
    ],
    color: "bg-teal-500",
    icon: "🛡️",
  },
];

export const DEFAULT_ASSISTANT = AVAILABLE_ASSISTANTS[0]; // DeFi Expert as default
