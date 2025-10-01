import { BaseService } from "./baseService";

export interface GenerateWalletResponse {
  appAddress: string;
  privateKey: string;
}

class WalletService extends BaseService {
  async getWallet() {
    try {
      const response = await this.get<{ appAddress: string }>(`/api/wallet`);
      return response;
    } catch (error) {
      console.error("Error getting wallet:", error);
      throw error;
    }
  }

  async generateAppWallet() {
    try {
      const response = await this.post<GenerateWalletResponse>(`/api/wallet/generate-app-wallet`);
      return response;
    } catch (error) {
      console.error("Error generating app wallet:", error);
      throw error;
    }
  }
}

export const walletService = new WalletService();
