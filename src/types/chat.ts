export enum ACTION_TYPE {
  USER = "user",
  UNKNOWN = "unknown",
  BRIDGE = "bridge",
  SWAP = "swap",
  PRE_SWAP = "pre_swap",
  LIQUIDITY = "liquidity",
  STAKING = "staking",
  UNSTAKING = "unstaking",
  BORROW = "borrow",
  SUPPLY = "supply",
  REPAY = "repay",
  WITHDRAW = "withdraw",
  CLAIM_REWARD = "claim_reward",
  PLACE_LIMIT_ORDER = "place_limit_order",
  PLACE_MARKET_ORDER = "place_market_order",
  REMOVE_LIQUIDITY = "remove_liquidity",
  HELP = "help",
}
export interface IMessage {
  id: string;
  data?: any;
  content: string;
  type: ACTION_TYPE;
  timestamp?: string;
}

export interface AssistantInfo {
  id: string;
  name: string;
  logo: string;
  description: string;
  capabilities: string[];
  color: string;
}

export interface AvailableAssistant {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
  color: string;
  icon: string;
}
