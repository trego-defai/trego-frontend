import { BaseService } from "./baseService";
import { SwapEstimateRequest, SwapEstimateResponse, SwapExecuteRequest, SwapExecuteResponse } from "@/types/swap";

class DefiService extends BaseService {
  async swapEstimate(request: SwapEstimateRequest): Promise<SwapEstimateResponse> {
    try {
      const response = await this.post<SwapEstimateResponse>("/api/aggregator/pre-swap", request);
      return response;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }
  async swapExecute(request: SwapExecuteRequest): Promise<SwapExecuteResponse> {
    try {
      const response = await this.post<SwapExecuteResponse>("/api/aggregator/swap", request);
      return response;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }
}

export const defiService = new DefiService();
