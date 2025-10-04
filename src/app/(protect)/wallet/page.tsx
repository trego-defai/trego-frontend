'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { WalletAccount, walletService } from '@/service/walletService';
import { useUser } from '@clerk/nextjs';
import { Copy, Download, ExternalLink, RefreshCw, Send, Wallet } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function WalletPage() {
  const { user } = useUser();
  const [account, setAccount] = useState<WalletAccount | null>(null);
  const [balance, setBalance] = useState<string>('0');
  const [loading, setLoading] = useState(false);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    checkUserAccount();
  }, []);

  const checkUserAccount = async () => {
    try {
      setLoading(true);
      const response = await walletService.getWallet();

      // Check if data exists and is not null
      if (response.data && response.data.appAddress) {
        const walletAccount: WalletAccount = {
          address: response.data.appAddress,
        };
        setAccount(walletAccount);
        await fetchBalance(response.data.appAddress);
      } else {
        // User has no wallet yet
        setAccount(null);
      }
    } catch (error) {
      console.error('Error checking account:', error);
      setAccount(null);
    } finally {
      setLoading(false);
    }
  };

  const generateWallet = async () => {
    try {
      setLoading(true);
      const response = await walletService.generateAppWallet();

      if (response.data && response.data.appAddress) {
        const walletAccount: WalletAccount = {
          address: response.data.appAddress,
        };
        setAccount(walletAccount);
        await fetchBalance(response.data.appAddress);
        toast.success('Wallet created successfully!');
      }
    } catch (error) {
      toast.error('Failed to create wallet');
      console.error('Error generating wallet:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBalance = async (address: string) => {
    try {
      const response = await walletService.getBalance(address);

      if (response.data) {
        const convertedBalance = parseFloat(response.data) / 10 ** 8;
        console.log('convertedBalance>>>>>', convertedBalance);
        setBalance(convertedBalance.toString());
      }
    } catch (error) {
      console.error('Error fetching balance:', error);
      setBalance('0.00000000');
    }
  };

  const handleSendToken = async () => {
    if (!account || !recipient || !amount) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!user?.id) {
      toast.error('User not authenticated');
      return;
    }

    try {
      setLoading(true);

      const response = await walletService.sendToken({
        id: user.id,
        recipient,
        amount: parseFloat(amount) * 10 ** 8,
      });

      if (response.data) {
        toast.success('Transaction sent successfully!');
        setRecipient('');
        setAmount('');
        await fetchBalance(account.address);
      }
    } catch (error) {
      toast.error('Failed to send transaction');
      console.error('Error sending:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const refreshBalance = () => {
    if (account) {
      fetchBalance(account.address);
      toast.success('Balance refreshed!');
    }
  };

  if (!account) {
    return (
      <main className="flex-1 p-6">
        <div className="flex items-center justify-center h-full">
          <Card className="p-8 bg-slate-900/50 border-slate-800 max-w-md w-full">
            <div className="flex flex-col items-center gap-6">
              <Wallet className="w-16 h-16 text-blue-500" />
              <h2 className="text-2xl font-bold text-white">No Wallet Found</h2>
              <p className="text-slate-400 text-center">
                Create a new wallet to start receiving and sending APT tokens
              </p>
              <Button
                onClick={generateWallet}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Creating Wallet...
                  </>
                ) : (
                  'Create Wallet'
                )}
              </Button>
            </div>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 p-6 space-y-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Balance Card */}
        <Card className="p-6 bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-300">Wallet Balance</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={refreshBalance}
              className="text-slate-400 hover:text-white"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-4xl font-bold text-white mb-2">{balance} APT</div>
              <div className="text-sm text-slate-400">Aptos Mainnet</div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                <div className="flex-1 mr-2">
                  <div className="text-xs text-slate-400 mb-1">Address</div>
                  <div className="text-sm text-white font-mono break-all">{account.address}</div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(account.address)}
                    className="text-slate-400 hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-slate-400 hover:text-white"
                  >
                    <a
                      href={`https://explorer.aptoslabs.com/account/${account.address}?network=mainnet`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {account.publicKey && (
                <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                  <div className="flex-1 mr-2">
                    <div className="text-xs text-slate-400 mb-1">Public Key</div>
                    <div className="text-sm text-white font-mono break-all">
                      {account.publicKey}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(account.publicKey!)}
                    className="text-slate-400 hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Send & Receive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Send Token Card */}
          <Card className="p-6 bg-slate-900/50 border-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <Send className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-white">Send APT</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">Recipient Address</label>
                <Input
                  placeholder="0x..."
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">Amount (APT)</label>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white"
                  step="0.00000001"
                  min="0"
                />
              </div>

              <Button
                onClick={handleSendToken}
                disabled={loading || !recipient || !amount}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Transaction
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Receive Token Card */}
          <Card className="p-6 bg-slate-900/50 border-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <Download className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold text-white">Receive APT</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-100 rounded-lg">
                <div className="flex items-center justify-center">
                  <QRCodeSVG value={account.address} />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Info Card */}
        <Card className="p-4 bg-blue-900/20 border-blue-800/50">
          <div className="flex gap-3">
            <div className="text-blue-400 mt-0.5">ℹ️</div>
            <div className="text-sm text-slate-300">
              <p className="font-semibold mb-1">Important Notes:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li>This wallet is on Aptos Mainnet</li>
                <li>Send transactions require backend implementation</li>
                <li>Never share your private keys</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
