export interface TokenBalance {
  coinType: string;
  amount: string;
  decimals: number;
  symbol?: string;
  name?: string;
}

export interface Transaction {
  version: string;
  hash: string;
  success: boolean;
  timestamp: string;
  type: string;
  sender: string;
  gasUsed: string;
  gasUnitPrice: string;
  vmStatus: string;
  payload?: any;
}

export interface WalletResponse {
  appAddress: string;
}

export interface WalletDetailsResponse extends WalletResponse {
  balance: string | null;
  tokens?: TokenBalance[];
  history?: Transaction[];
}

export interface GenerateWalletResponse {
  appAddress: string;
}

export interface WalletAccount {
  address: string;
  publicKey?: string;
}

export interface SendTokenRequest {
  id: string;
  recipient: string;
  amount: number;
}

export interface SendTokenResponse {
  transactionHash: string;
}
