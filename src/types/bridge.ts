export interface BridgeQuoteRequest {
  tokenA: string;
  tokenB: string;
  srcChainKey: string;
  dstChainKey: string;
  amount: string;
  dstAddress: string;
  user_address: string;
}

export interface BridgeQuoteResponse {
  message: string;
  data?: BridgeQuoteData;
  success?: boolean;
}

export interface BridgeFee {
  token: string;
  chainKey: string;
  amount: string;
  type: string;
}

export interface BridgeDuration {
  estimated: number;
}

export interface BridgeTransaction {
  type: string;
  encoding: string;
  data: string;
}

export interface BridgeStep {
  type: string;
  sender: string;
  chainKey: string;
  transaction: BridgeTransaction;
}

export interface BridgeQuote {
  route: string;
  error: string | null;
  srcAmount: string;
  dstAmount: string;
  srcAmountMax: string;
  dstAmountMin: string;
  srcToken: string;
  dstToken: string;
  srcAddress: string;
  dstAddress: string;
  srcChainKey: string;
  dstChainKey: string;
  dstNativeAmount: string;
  duration: BridgeDuration;
  fees: BridgeFee[];
  steps: BridgeStep[];
}

export interface BridgeQuoteData {
  action: string;
  tokenA: string;
  tokenB: string;
  amount: string;
  srcChainKey: string;
  dstChainKey: string;
  dstAddress: string;
  user_address: string;
  quote: BridgeQuote;
  decimalsSrcToken: number;
  decimalsDstToken: number;
  symbolSrcToken: string;
  symbolDstToken: string;
}

export interface BridgeExecuteRequest {
  quote: BridgeQuote;
  user_address: string;
}

export interface BridgeExecuteResponse {
  message: string;
  data?: any;
  success?: boolean;
}
