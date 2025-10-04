export interface Token {
  symbol: string;
  name: string;
  balance: string;
  decimals: number;
}

export interface Transaction {
  hash: string;
  type: "sent" | "received";
  amount: string;
  token: string;
  timestamp: number;
  from?: string;
  to?: string;
}

export interface WalletAccount {
  address: string;
}
