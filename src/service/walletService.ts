import { GenerateWalletResponse, WalletResponse } from "@/types/wallet";
import { BaseService } from "./baseService";
import { ApiSuccessResponse } from "@/types/api-response";

class WalletService extends BaseService {
  async getWallet() {
    try {
      const response = await this.get<ApiSuccessResponse<WalletResponse>>(`/api/wallet`);
      return response;
    } catch (error) {
      console.error("Error getting wallet:", error);
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
      console.error("Error generating app wallet:", error);
      throw error;
    }
  }
}

export const walletService = new WalletService();
