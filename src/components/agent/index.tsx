"use client";

import ChatPanel from "@/components/chat";
import { useState, useEffect } from "react";
import PanelHistory from "./PanelHistory";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Agent = () => {
  const [selectedConversation, setSelectedConversation] = useState<string | undefined>("conversation_1");
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  // Auto-close panel on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsPanelOpen(false);
      } else {
        setIsPanelOpen(true);
      }
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  };

  return (
    <div className="h-full w-full flex gap-2 sm:gap-4 p-2 sm:p-4 relative">
      {/* Left Panel - History */}
      <div
        className={`flex-shrink-0 transition-all duration-300 ${isPanelOpen ? "w-64 sm:w-80" : "w-0 overflow-hidden"}`}
      >
        <PanelHistory
          className="h-full"
          selectedConversationId={selectedConversation}
          onSelectConversation={handleSelectConversation}
          onNewConversation={handleNewConversation}
          onDeleteConversation={handleDeleteConversation}
        />
      </div>

      {/* Toggle Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className={`absolute top-1/2 -translate-y-1/2 z-10 h-8 w-8 sm:h-10 sm:w-10 rounded-full shadow-md transition-all duration-300 ${
          isPanelOpen ? "left-[16.5rem] sm:left-[21rem]" : "left-2 sm:left-4"
        }`}
      >
        {isPanelOpen ? (
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
        ) : (
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
        )}
      </Button>

      {/* Right Panel - Chat */}
      <div className="flex-1 min-w-0">
        <ChatPanel className="h-full" selectedConversationId={selectedConversation} />
      </div>
    </div>
  );
};

export default Agent;
