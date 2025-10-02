"use client";

import ChatPanel from "@/components/chat";
import { useState } from "react";
import PanelHistory from "./PanelHistory";

const Agent = () => {
  const [selectedConversation, setSelectedConversation] = useState<string | undefined>("conversation_1");

  const handleSelectConversation = (conversationId: string) => {
    setSelectedConversation(conversationId);
  };

  const handleNewConversation = () => {
    setSelectedConversation(undefined);
  };

  const handleDeleteConversation = (conversationId: string) => {
    // If the deleted conversation is currently selected, clear selection
    if (selectedConversation === conversationId) {
      setSelectedConversation(undefined);
    }
    // In a real app, you would also call an API to delete the conversation
    // For now, this just handles the UI state
  };

  return (
    <div className="h-full w-full flex gap-4 p-4">
      {/* Left Panel - History */}
      <div className="w-80 flex-shrink-0">
        <PanelHistory
          className="h-full"
          selectedConversationId={selectedConversation}
          onSelectConversation={handleSelectConversation}
          onNewConversation={handleNewConversation}
          onDeleteConversation={handleDeleteConversation}
        />
      </div>

      {/* Right Panel - Chat */}
      <div className="flex-1 min-w-0">
        <ChatPanel
          className="h-full"
          selectedConversationId={selectedConversation}
        />
      </div>
    </div>
  );
};

export default Agent;
