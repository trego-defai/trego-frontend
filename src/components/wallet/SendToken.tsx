"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronDown, Coins, RefreshCw, Send } from "lucide-react";
import { useState } from "react";
import { Token } from "./types";

interface SendTokenProps {
  tokens: Token[];
  selectedToken: Token | null;
  onSelectToken: (token: Token) => void;
  recipient: string;
  amount: string;
  onRecipientChange: (value: string) => void;
  onAmountChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
}

export function SendToken({
  tokens,
  selectedToken,
  onSelectToken,
  recipient,
  amount,
  onRecipientChange,
  onAmountChange,
  onSend,
  isLoading,
}: SendTokenProps) {
  const [isTokenDropdownOpen, setIsTokenDropdownOpen] = useState(false);

  return (
    <Card className="p-6 flex-shrink-0">
      <div className="flex items-center gap-2 mb-4">
        <Send className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Send</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm mb-2 block">Token</label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsTokenDropdownOpen(!isTokenDropdownOpen)}
              className="w-full flex items-center justify-between p-3 bg-muted/30 rounded-lg border-2 border-transparent hover:border-primary/30 transition-colors"
            >
              {selectedToken ? (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Coins className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">{selectedToken.symbol}</div>
                    <div className="text-xs text-muted-foreground">Balance: {selectedToken.balance}</div>
                  </div>
                </div>
              ) : (
                <span className="text-muted-foreground">Select a token</span>
              )}
              <ChevronDown className={`w-4 h-4 transition-transform ${isTokenDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isTokenDropdownOpen && (
              <div className="absolute z-10 w-full mt-2 bg-card border border-border rounded-lg shadow-lg">
                {tokens.map((token) => (
                  <button
                    key={token.symbol}
                    type="button"
                    onClick={() => {
                      onSelectToken(token);
                      setIsTokenDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3 hover:bg-muted/50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      selectedToken?.symbol === token.symbol ? "bg-primary/10" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Coins className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-sm">{token.name}</div>
                        <div className="text-xs text-muted-foreground">{token.symbol}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-sm">{token.balance}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm mb-2 block">Recipient</label>
          <Input placeholder="0x..." value={recipient} onChange={(e) => onRecipientChange(e.target.value)} />
        </div>

        <div>
          <label className="text-sm mb-2 block">Amount</label>
          <Input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            step="0.00000001"
            min="0"
          />
        </div>

        <Button onClick={onSend} disabled={isLoading || !recipient || !amount || !selectedToken} className="w-full">
          {isLoading ? (
            <>
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}
