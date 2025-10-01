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
class ChatService extends BaseService {
  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    try {
      const response = await this.post<SendMessageResponse>("/api/chat/message", request);
      return response;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }

  // async getMessages(
  //   conversationId: string,
  //   page: number = 1,
  //   limit: number = 20
  // ): Promise<GetMessagesResponse> {
  //   try {
  //     const response = await this.get<any>("/api/chat/messages", {
  //       conversationId,
  //       page,
  //       limit,
  //     });

  //     const payload = response as any;
  //     const rawData = payload?.data?.data ?? payload?.data ?? payload;
  //     const rawMessages = rawData?.messages ?? rawData?.data ?? [];
  //     const normalized: IMessage[] = Array.isArray(rawMessages)
  //       ? (rawMessages
  //           .map((m: any, idx: number) => this.normalizeMessage(m, idx))
  //           .filter(Boolean) as IMessage[])
  //       : [];
  //     const hasMore = Boolean(rawData?.hasMore ?? rawData?.has_more ?? false);
  //     const convId = String(rawData?.conversationId ?? rawData?.conversation_id ?? conversationId);

  //     return {
  //       success: true,
  //       data: {
  //         messages: normalized,
  //         hasMore,
  //         conversationId: convId,
  //       },
  //     };
  //   } catch (error) {
  //     console.warn("Chat API not available, using mock response");
  //     return {
  //       success: true,
  //       data: {
  //         messages: [],
  //         hasMore: false,
  //         conversationId,
  //       },
  //     };
  //   }
  // }

  // async createConversation(): Promise<{ success: boolean; data: { conversationId: string } }> {
  //   try {
  //     const response = await this.post<any>("/api/chat/conversation");
  //     const payload = response as any;
  //     const convId =
  //       payload?.data?.data?.conversationId ??
  //       payload?.data?.conversationId ??
  //       payload?.conversationId ??
  //       `conv_${Date.now()}`;
  //     return { success: true, data: { conversationId: String(convId) } };
  //   } catch (error) {
  //     console.warn("Chat API not available, using mock response");
  //     return {
  //       success: true,
  //       data: {
  //         conversationId: `conv_${Date.now()}`,
  //       },
  //     };
  //   }
  // }
}

export const chatService = new ChatService();
