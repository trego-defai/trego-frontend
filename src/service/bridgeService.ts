import { ApiSuccessResponse } from "@/types/api-response";
import { BridgeQuoteRequest, BridgeQuoteResponse, BridgeExecuteRequest, BridgeExecuteResponse } from "@/types/bridge";
import { BaseService } from "./baseService";

class BridgeService extends BaseService {
  async getBridgeQuote(data: BridgeQuoteRequest) {
    try {
      const response = await this.post<ApiSuccessResponse<BridgeQuoteResponse>>(`/api/bridge/quote`, data);
      return response;
    } catch (error) {
      console.error("Error getting bridge quote:", error);
      throw error;
    }
  }

  async executeBridge(data: BridgeExecuteRequest) {
    try {
      const response = await this.post<ApiSuccessResponse<BridgeExecuteResponse>>(`/api/bridge/stargate-quote`, data);
      return response;
    } catch (error) {
      console.error("Error executing bridge:", error);
      throw error;
    }
  }
}

export const bridgeService = new BridgeService();
