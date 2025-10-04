"use client";

import { cn } from "@/lib/utils";
import type { IMessage } from "@/types/chat";
import { Loader2 } from "lucide-react";
import { ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";
import BotThinking from "./BotThinking";
import ChatMessageSkeleton from "./ChatMessageSkeleton";
import { MessageType } from "./MessageType";

interface ChatContainerProps {
  messages: IMessage[];
  onLoadMore?: () => Promise<void>;
  hasMore?: boolean;
  isLoading?: boolean;
  isWaitingForResponse?: boolean;
}

const AT_BOTTOM_THRESHOLD = 500;
const AT_TOP_THRESHOLD = 200;
const SAFE_START = 100_000;
const BOT_THINKING = { type: "bot-thinking" };

function getDisplayMessages(messages: IMessage[], isWaitingForResponse: boolean): (IMessage | typeof BOT_THINKING)[] {
  return isWaitingForResponse ? [...messages, BOT_THINKING] : messages;
}

function getItemKey(item: IMessage | typeof BOT_THINKING): string {
  if ("type" in item && item.type === BOT_THINKING.type) return BOT_THINKING.type;
  const msg = item as IMessage;
  return `${msg.id}-${msg.content.length}`;
}

function renderMessageItem(item: IMessage | typeof BOT_THINKING, messages: IMessage[]): ReactNode {
  if (!item) return null;
  if ("type" in item && item.type === BOT_THINKING.type) {
    return (
      <div key={BOT_THINKING.type} className="flex items-center justify-start py-3">
        <BotThinking />
      </div>
    );
  }
  const msg = item as IMessage;
  return (
    <div key={`${msg.id}-${msg.content.length}`}>
      <MessageType message={msg} isLatestMessage={msg.id === messages[messages.length - 1]?.id} />
    </div>
  );
}

export function ChatContainer({
  messages,
  onLoadMore,
  hasMore = false,
  isLoading = false,
  isWaitingForResponse = false,
}: ChatContainerProps) {
  const virtuosoRef = useRef<VirtuosoHandle>(null);

  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [firstItemIndex, setFirstItemIndex] = useState(SAFE_START - (messages?.length ?? 0));
  const prevLenRef = useRef(messages.length);
  const didPrependRef = useRef(false);

  const handleLoadMore = useCallback(async () => {
    if (!onLoadMore || !hasMore || isLoadingMore) return;
    didPrependRef.current = true;
    setIsLoadingMore(true);
    try {
      await onLoadMore();
    } finally {
      setIsLoadingMore(false);
    }
  }, [onLoadMore, hasMore, isLoadingMore]);

  const lastMessage = messages[messages.length - 1];
  const lastMessageContent = lastMessage?.content || "";

  const [isBotTyping, setIsBotTyping] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    if (!lastMessageContent || didPrependRef.current) return;
    setIsBotTyping(true);

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    typingTimeoutRef.current = setTimeout(() => {
      setIsBotTyping(false);
    }, 500);

    virtuosoRef.current?.scrollToIndex({
      index: "LAST",
      align: "start",
      offset: 100,
      behavior: "smooth",
    });
  }, [lastMessageContent]);

  useLayoutEffect(() => {
    const prev = prevLenRef.current;
    const curr = messages.length;
    if (didPrependRef.current && curr > prev) {
      setFirstItemIndex((v) => v - (curr - prev));
      didPrependRef.current = false;
    }
    prevLenRef.current = curr;
  }, [messages.length]);

  const displayMessages = getDisplayMessages(messages, isWaitingForResponse);

  return (
    <div className="h-full relative">
      {isLoading && (
        <div className="py-3 absolute top-0 left-0 right-0 bottom-0">
          <ChatMessageSkeleton />
        </div>
      )}
      <Virtuoso
        ref={virtuosoRef}
        className={cn("h-full", messages?.length > 0 && "pb-10", isBotTyping && "pointer-events-none")}
        data={displayMessages}
        computeItemKey={(_, item) => getItemKey(item)}
        itemContent={(_, item) => renderMessageItem(item, messages)}
        alignToBottom
        followOutput="smooth"
        firstItemIndex={firstItemIndex}
        atBottomThreshold={AT_BOTTOM_THRESHOLD}
        atTopThreshold={AT_TOP_THRESHOLD}
        atTopStateChange={(atTop) => {
          if (atTop && !isBotTyping) handleLoadMore();
        }}
        increaseViewportBy={{ top: 200, bottom: 500 }}
        overscan={500}
        components={{
          Header: () =>
            isLoadingMore ? (
              <div className="flex items-center justify-center py-3">
                <div className="flex items-center gap-2 rounded-full border px-3 py-1">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm">Loading more…</span>
                </div>
              </div>
            ) : null,
          Footer: () => <div className="h-20" />,
        }}
        endReached={handleLoadMore}
      />
    </div>
  );
}

export default ChatContainer;
