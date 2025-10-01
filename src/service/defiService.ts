import { BaseService } from "./baseService";

interface SendMessageRequest {
  user_address: string;
  content: string;
}

interface SendMessageResponse {
  message: string;
  data?: any;
  success?: boolean;
  intent?: any;
}

class DefiService extends BaseService {
  async swapEstimate(request: SendMessageRequest): Promise<SendMessageResponse> {
    try {
      const response = await this.post<SendMessageResponse>("/api/chat/message", request);
      return response;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }
  async swapExecute(request: SendMessageRequest): Promise<SendMessageResponse> {
    try {
      const response = await this.post<SendMessageResponse>("/api/chat/message", request);
      return response;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }
}

export const defiService = new DefiService();
