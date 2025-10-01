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
