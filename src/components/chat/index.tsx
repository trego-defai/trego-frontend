"use client";

import { DEFAULT_ASSISTANT } from "@/lib/constants/assistants";
import { cn } from "@/lib/utils";
import { chatService } from "@/service/chatService";
import type { AssistantInfo, IMessage } from "@/types/chat";
import { ACTION_TYPE } from "@/types/chat";
import { useCallback, useEffect, useState } from "react";
import ChatInput from "./ChatInput";
import ChatContainer from "./message/ChatContainer";

interface ChatPanelProps {
  className?: string;
  assistantInfo?: AssistantInfo;
  selectedConversationId?: string;
}

const ChatPanel = ({ className, assistantInfo, selectedConversationId }: ChatPanelProps) => {
  // Initialize with default assistant if none provided
  const [_currentAssistant, setCurrentAssistant] = useState<AssistantInfo>(
    assistantInfo || {
      id: DEFAULT_ASSISTANT.id,
      name: DEFAULT_ASSISTANT.name,
      logo: DEFAULT_ASSISTANT.icon,
      description: DEFAULT_ASSISTANT.description,
      capabilities: DEFAULT_ASSISTANT.capabilities,
      color: DEFAULT_ASSISTANT.color,
    },
  );
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [conversationId, setConversationId] = useState<string | undefined>();
  const [isLoading, _setIsLoading] = useState(false);
  const [hasMore, _setHasMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);

  const _handleAssistantSelect = useCallback((newAssistant: AssistantInfo) => {
    setCurrentAssistant(newAssistant);
    // Optionally clear messages when switching assistants
    setMessages([]);
    setError(null);
  }, []);

  useEffect(() => {
    if (selectedConversationId) {
      // Load selected conversation
      setConversationId(selectedConversationId);
      loadConversationMessages(selectedConversationId);
    } else if (!conversationId) {
      initializeConversation();
    }
  }, [selectedConversationId, conversationId]);

  const loadConversationMessages = async (_convId: string) => {
    // try {
    //   setIsLoading(true);
    //   const response = await chatService.getMessages(convId, 1, 50);
    //   if (response.success) {
    //     setMessages(response.data.messages);
    //     setHasMore(response.data.hasMore);
    //   }
    // } catch (error) {
    //   console.error("Failed to load conversation messages:", error);
    //   setError("Failed to load conversation");
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const initializeConversation = async () => {
    // try {
    //   const response = await chatService.createConversation();
    //   if (response.success) {
    //     setConversationId(response.data.conversationId);
    //   }
    // } catch (error) {
    //   console.error("Failed to create conversation:", error);
    //   setError("Failed to initialize chat");
    // }
  };

  const loadMoreMessages = useCallback(async () => {
    if (!conversationId || isLoading) return;

    // setIsLoading(true);
    // try {
    //   const response = await chatService.getMessages(conversationId, 1, 20);
    //   if (response.success) {
    //     setMessages((prev) => [...response.data.messages, ...prev]);
    //     setHasMore(response.data.hasMore);
    //   }
    // } catch (error) {
    //   console.error("Failed to load messages:", error);
    //   setError("Failed to load messages");
    // } finally {
    //   setIsLoading(false);
    // }
  }, [conversationId, isLoading]);

  const handleSendMessage = useCallback(
    async (message: string) => {
      if (!message.trim() || isWaitingForResponse || !conversationId) return;

      setIsWaitingForResponse(true);
      setError(null);

      const userMessage: IMessage = {
        id: `user-${Date.now()}`,
        content: message.trim(),
        type: ACTION_TYPE.USER,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, userMessage]);

      try {
        const {
          message: botReply,
          data,
          intent,
        } = await chatService.sendMessage({
          user_address: "0x1",
          content: message.trim(),
        });

        if (botReply) {
          setMessages((prev) => [
            ...prev,
            {
              id: `bot-${Date.now()}`,
              content: botReply,
              type: intent?.actionType as ACTION_TYPE,
              timestamp: new Date().toISOString(),
              data,
            },
          ]);
        }
      } catch (error) {
        console.error("Failed to send message:", error);
        setError("Failed to send message. Please try again.");
        // Remove user message if sending failed
        setMessages((prev) => prev.filter((msg) => msg.id !== userMessage.id));
      } finally {
        setIsWaitingForResponse(false);
      }
    },
    [conversationId, isWaitingForResponse],
  );

  return (
    <div
      className={cn(
        "flex flex-col h-full bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm border border-slate-700/50 rounded-lg overflow-hidden",
        className,
      )}
    >
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-700/50 bg-slate-800/30">Ai agent</div>

      {/* Error Display */}
      {error && (
        <div className="p-4 bg-red-500/10 border-b border-red-500/20">
          <div className="flex items-center gap-2 text-red-500 text-sm">
            <span>⚠️</span>
            <span>{error}</span>
            <button onClick={() => setError(null)} className="ml-auto text-red-500 hover:text-red-400">
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Chat Messages Container */}
      <div className="flex-1 min-h-0">
        {!conversationId ? (
          <div className="flex flex-col items-center justify-center h-full px-4 pb-2">
            <p className="text-xs text-slate-400 text-center">Setting up chat...</p>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-800/60 flex items-center justify-center mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Start your DeFi AI chat</h3>
            <p className="text-slate-400 max-w-md">
              Ask about swap, staking, unstaking, on-chain analytics, or get AI-powered insights for your crypto
              portfolio.
            </p>
            {!conversationId && <p className="text-sm text-slate-400 mt-2">Connecting to your DeFi AI assistant...</p>}
          </div>
        ) : (
          <ChatContainer
            messages={messages}
            onLoadMore={loadMoreMessages}
            hasMore={hasMore}
            isLoading={isLoading}
            isWaitingForResponse={isWaitingForResponse}
          />
        )}
      </div>

      {/* Chat Input */}
      <div className="border-t border-slate-700/50">
        <ChatInput
          onSend={handleSendMessage}
          value={inputValue}
          setValue={setInputValue}
          isLoading={isWaitingForResponse}
          disabled={isWaitingForResponse || !conversationId}
        />
        {/* <PreSwap 
          item={
            {
              fromToken: "USDC",
              toToken: "USDT",
              fromAmount: "100",
              toAmount: "100",
              fromAmountUsd: 100,
              toAmountUsd: 100,
            } as SwapEstimateItem
          }
          isLoading={isWaitingForResponse}
        /> */}
      </div>
    </div>
  );
};

export default ChatPanel;
