import { TokenMappingProp } from "./token";

export interface SwapEstimateItem {
  fromAmount: string;
  fromAmountUsd: number;
  fromToken: TokenMappingProp;
  toAmount: string;
  toAmountUsd: number;
  toToken: TokenMappingProp;
  provider: string;
  slippage: number;
  timestamp: string;
  path: string[];
}

export interface SwapEstimateRequest {
  [key: string]: any;
}

export interface SwapEstimateResponse {
  message: string;
  data?: any;
  success?: boolean;
}

export interface SwapExecuteRequest {
  [key: string]: any;
  userAddress: string;
}

export interface SwapExecuteResponse {
  message: string;
  data?: any;
  success?: boolean;
}
