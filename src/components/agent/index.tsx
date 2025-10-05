"use client";

import ChatPanel from "@/components/chat";
import { useState } from "react";

function Agent() {
  const [selectedConversation] = useState<string | undefined>("conversation_1");
  // const [isPanelOpen, setIsPanelOpen] = useState(true);
  // const { isDesktop } = useResponsive();

  // // Sync panel open state with responsive breakpoint
  // useEffect(() => {
  //   setIsPanelOpen(isDesktop);
  // }, [isDesktop]);

  // function handleSelectConversation(conversationId: string) {
  //   setSelectedConversation(conversationId);
  // }

  // function handleNewConversation() {
  //   setSelectedConversation(undefined);
  // }

  // function handleDeleteConversation(conversationId: string) {
  //   if (selectedConversation === conversationId) setSelectedConversation(undefined);
  // }

  return (
    <div className="h-full w-full flex gap-2 sm:gap-4 p-2 sm:p-4 relative">
      {/* Left Panel - History */}
      {/* <div
        className={`flex-shrink-0 transition-all duration-300 ${isPanelOpen ? "w-64 sm:w-80" : "w-0 overflow-hidden"}`}
      >
        <PanelHistory
          className="h-full"
          selectedConversationId={selectedConversation}
          onSelectConversation={handleSelectConversation}
          onNewConversation={handleNewConversation}
          onDeleteConversation={handleDeleteConversation}
        />
      </div> */}

      {/* Toggle Button */}
      {/* <Button
        variant="outline"
        size="icon"
        onClick={() => setIsPanelOpen((open) => !open)}
        className={`absolute top-1/2 -translate-y-1/2 z-10 h-8 w-8 sm:h-10 sm:w-10 rounded-full shadow-md transition-all duration-300 ${
          isPanelOpen ? "left-[16.5rem] sm:left-[21rem]" : "left-2 sm:left-4"
        }`}
        aria-label={isPanelOpen ? "Hide history panel" : "Show history panel"}
      >
        {isPanelOpen ? (
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
        ) : (
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
        )}
      </Button> */}

      {/* Right Panel - Chat */}
      <div className="flex-1 min-w-0">
        <ChatPanel className="h-full" selectedConversationId={selectedConversation} />
      </div>
    </div>
  );
}

export default Agent;
