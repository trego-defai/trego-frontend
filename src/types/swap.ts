export interface SwapEstimateItem {
  fromAmount: string;
  fromAmountUsd: number;
  fromToken: string;
  toAmount: string;
  toAmountUsd: number;
  toToken: string;
  provider: string;
  slippage: number;
  timestamp: string;
  path: string[];
}

export interface SwapEstimateRequest {
  user_address: string;
  content: string;
}

export interface SwapEstimateResponse {
  message: string;
  data?: any;
  success?: boolean;
}

interface TokenInfo {
  tokenAddress: string;
  faAddress: string;
  name: string;
  symbol: string;
  decimals: number;
}

export interface SwapExecuteRequest {
  userAddress: string;
  fromToken: TokenInfo;
  toToken: TokenInfo;
  amountOut: string;
  amountIn: string;
  path: string[];
  slippage: number;
  recipient: string;
}

export interface SwapExecuteResponse {
  message: string;
  data?: any;
  success?: boolean;
}
