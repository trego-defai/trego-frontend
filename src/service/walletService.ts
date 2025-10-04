import { ApiSuccessResponse } from '@/types/api-response';
import {
  WalletResponse,
  GenerateWalletResponse,
  SendTokenRequest,
  SendTokenResponse,
  WalletDetailsResponse,
} from '@/types/wallet';
import { BaseService } from './baseService';

class WalletService extends BaseService {
  async getWallet() {
    try {
      const response = await this.get<ApiSuccessResponse<WalletResponse>>(`/api/wallet`);
      return response;
    } catch (error) {
      console.error('Error getting wallet:', error);
      throw error;
    }
  }

  async generateAppWallet() {
    try {
      const response = await this.post<ApiSuccessResponse<GenerateWalletResponse>>(
        `/api/wallet/generate-app-wallet`
      );
      return response;
    } catch (error) {
      console.error('Error generating app wallet:', error);
      throw error;
    }
  }

  async getBalance(address: string) {
    try {
      const response = await this.post<ApiSuccessResponse<{ balance: string }>>(
        `/api/wallet/balance`,
        {
          address,
        }
      );
      return response;
    } catch (error) {
      console.error('Error getting balance:', error);
      throw error;
    }
  }

  async getWalletDetails(address: string) {
    try {
      const response = await this.get<ApiSuccessResponse<WalletDetailsResponse>>(
        `/api/wallet/details`,
        {
          address,
        }
      );
      return response;
    } catch (error) {
      console.error('Error getting wallet details:', error);
      throw error;
    }
  }

  async sendToken(data: SendTokenRequest) {
    try {
      const response = await this.post<ApiSuccessResponse<SendTokenResponse>>(
        `/api/wallet/send`,
        data
      );
      return response;
    } catch (error) {
      console.error('Error sending token:', error);
      throw error;
    }
  }
}

export const walletService = new WalletService();
