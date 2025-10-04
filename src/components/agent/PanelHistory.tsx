"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface ConversationHistory {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  isActive?: boolean;
}

interface PanelHistoryProps {
  className?: string;
  selectedConversationId?: string;
  onSelectConversation?: (conversationId: string) => void;
  onNewConversation?: () => void;
  onDeleteConversation?: (conversationId: string) => void;
}

const PanelHistory = ({
  className,
  selectedConversationId,
  onSelectConversation,
  onNewConversation,
  onDeleteConversation,
}: PanelHistoryProps) => {
  const [conversations, setConversations] = useState<ConversationHistory[]>([
    {
      id: "conversation_1",
      title: "Trading Strategy Discussion",
      lastMessage: "What's the best approach for day trading?",
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: "conversation_2",
      title: "Market Analysis",
      lastMessage: "Can you analyze the BTC price trend?",
      timestamp: new Date(Date.now() - 7200000),
    },
    {
      id: "conversation_3",
      title: "Portfolio Review",
      lastMessage: "Help me review my crypto portfolio",
      timestamp: new Date(Date.now() - 86400000),
    },
  ]);

  const handleConversationClick = (conversationId: string) => {
    onSelectConversation?.(conversationId);
  };

  const handleDeleteConversation = (e: React.MouseEvent, conversationId: string) => {
    e.stopPropagation(); // Prevent conversation selection when clicking delete

    if (window.confirm("Are you sure you want to delete this conversation? This action cannot be undone.")) {
      // Remove conversation from local state
      setConversations((prev) => prev.filter((conv) => conv.id !== conversationId));
      // Notify parent component
      onDeleteConversation?.(conversationId);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col h-full bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm border border-slate-700/50 rounded-lg overflow-hidden",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-700/50 bg-slate-800/30">
        <h3 className="font-semibold text-white">Chat History</h3>
        <button
          onClick={onNewConversation}
          className="text-slate-400 hover:text-white text-sm hover:bg-slate-800/60 rounded px-2 py-1 transition-colors"
        >
          + New
        </button>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-slate-800/60 flex items-center justify-center mb-3">
              <span className="text-xl">💬</span>
            </div>
            <p className="text-slate-400 text-sm">No conversations yet</p>
          </div>
        ) : (
          <div className="p-2">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => handleConversationClick(conversation.id)}
                className={cn(
                  "p-3 rounded-lg cursor-pointer border transition-colors hover:bg-slate-800/50 mb-2 group",
                  selectedConversationId === conversation.id
                    ? "bg-slate-800/60 border-slate-700/50"
                    : "!border-transparent",
                )}
              >
                <div className="mb-2">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-medium text-white text-sm truncate pr-2">{conversation.title}</h4>
                    <button
                      onClick={(e) => handleDeleteConversation(e, conversation.id)}
                      className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition-all duration-200 flex-shrink-0 p-1 hover:bg-red-500/10 rounded"
                      title="Delete conversation"
                    >
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c0 1 1 2 2 2v2M10 11v6M14 11v6" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-slate-400 text-xs mt-1 line-clamp-2">{conversation.lastMessage}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{conversation.timestamp.toLocaleDateString()}</span>
                  {selectedConversationId === conversation.id && <div className="w-2 h-2 bg-brand rounded-full"></div>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PanelHistory;
