"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import ChatbotSkeleton from "./ChatbotSkeleton";

interface ChatbotPanelProps {
  className?: string;
}

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function MessageBubble({
  message,
  isLast,
  isUser,
}: {
  message: Message;
  isLast: boolean;
  isUser: boolean;
}) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} w-full`}>
      <div
        className={`max-w-[80%] px-4 py-2 rounded-2xl shadow-sm transition-colors flex flex-col gap-1
          ${
            isUser
              ? "bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-br-md"
              : "bg-gray-800/90 text-gray-100 rounded-bl-md"
          }
          ${isLast && !isUser ? "animate-fade-in" : ""}
        `}
        tabIndex={0}
        aria-label={`${isUser ? "You" : "AI"}: ${message.content}`}
      >
        <p className="text-sm whitespace-pre-line">{message.content}</p>
        <span className="block text-[10px] opacity-60 select-none mt-1 text-right pr-1">
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start w-full">
      <div className="bg-gray-800/90 text-gray-100 px-4 py-2 rounded-2xl flex items-center gap-2 min-w-[90px]">
        <div className="flex space-x-1">
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.15s" }}
          />
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.3s" }}
          />
        </div>
        <span className="text-xs text-gray-400">AI is typing…</span>
      </div>
    </div>
  );
}

function ChatInput({
  inputValue,
  setInputValue,
  isStreaming,
  isLoading,
  onSend,
  hasError,
}: {
  inputValue: string;
  setInputValue: (v: string) => void;
  isStreaming: boolean;
  isLoading: boolean;
  onSend: () => void;
  hasError: boolean;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, [inputValue]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!isStreaming && !isLoading && inputValue.trim()) onSend();
    }
    // Allow Shift+Enter for newlines
  }

  function handlePaste(e: React.ClipboardEvent<HTMLTextAreaElement>) {
    // Prevent pasting very long text
    const pasted = e.clipboardData.getData("Text");
    if (pasted.length + inputValue.length > 500) {
      e.preventDefault();
    }
  }

  return (
    <form
      className="p-3 sm:p-4 border-t border-gray-800 bg-transparent"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isStreaming && !isLoading && inputValue.trim()) onSend();
      }}
      autoComplete="off"
      aria-label="Chat input"
    >
      <div className="flex items-end gap-2">
        <div className="relative flex items-center flex-1">
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            placeholder={hasError ? "Try again…" : "Type a message..."}
            className={`flex-1 w-full bg-gray-800/80 border border-gray-700/60 rounded-xl px-3 py-2 text-white placeholder-gray-400 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px] max-h-[120px] transition-shadow pr-10 ${
              hasError ? "border-red-500 ring-red-400" : ""
            }`}
            rows={1}
            disabled={isStreaming || isLoading}
            aria-label="Type your message"
            maxLength={500}
            spellCheck
            autoFocus
          />
          <span className="absolute right-2 bottom-2 text-xs text-gray-500 select-none">
            {inputValue.length}/500
          </span>
        </div>
        <Button
          type="submit"
          disabled={!inputValue.trim() || isStreaming || isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-md transition-all flex items-center gap-1 disabled:opacity-60"
          aria-label="Send message"
          tabIndex={0}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </form>
  );
}

export function ChatbotPanel({ className }: ChatbotPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    if (!isLoading) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isStreaming, isLoading]);

  // Simulate component mounting and initial data loading
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const initializeChatbot = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 900));
        const welcomeMessage: Message = {
          id: "1",
          content: "👋 Hello! I'm your AI trading assistant.\nHow can I help you today?",
          sender: "bot",
          timestamp: new Date(Date.now() - 60000),
        };
        setMessages([welcomeMessage]);
        setIsReady(true);
        timeout = setTimeout(() => setIsLoading(false), 250);
      } catch (err) {
        setHasError(true);
        setIsLoading(false);
      }
    };
    initializeChatbot();
    return () => clearTimeout(timeout);
  }, []);

  function handleSendMessage() {
    if (!inputValue.trim() || isStreaming || isLoading) return;
    setHasError(false);

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev: Message[]) => [...prev, userMessage]);
    setInputValue("");
    setIsStreaming(true);

    // Simulate bot response with streaming
    setTimeout(() => {
      // Simulate error for demonstration
      if (inputValue.toLowerCase().includes("error")) {
        setHasError(true);
        setIsStreaming(false);
        return;
      }
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I understand you want to know about market conditions.\nLet me analyze the current data…",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev: Message[]) => [...prev, botMessage]);
      setIsStreaming(false);
    }, 1200);
  }

  return (
    <div
      className={`bg-gray-950/80 border border-gray-800 bg-gradient-to-b from-gray-950/80 to-gray-900/80 rounded-2xl flex flex-col w-full min-w-0 relative shadow-lg ${className}`}
      aria-label="AI Trading Assistant Chat"
    >
      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 min-h-0 transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <header className="p-4 border-b border-gray-800 flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-700/30 text-blue-300 font-bold text-lg mr-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight">AI Assistant</h3>
          <span className="ml-auto text-xs text-blue-400 bg-blue-900/30 px-2 py-0.5 rounded font-medium border border-blue-700/40">
            Beta
          </span>
        </header>

        {/* Messages List */}
        <section className="flex-1 p-4 overflow-y-auto min-h-0 ">
          <div className="space-y-4">
            {messages.map((message: Message, idx: number = 0) => (
              <MessageBubble
                key={message.id}
                message={message}
                isLast={idx === messages.length - 1}
                isUser={message.sender === "user"}
              />
            ))}
            {isStreaming && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        </section>

        {/* Error Message */}
        {hasError && (
          <div className="px-4 pb-2">
            <div className="bg-red-700/20 border border-red-600/30 text-red-300 rounded-lg px-3 py-2 text-xs flex items-center gap-2">
              <svg
                className="w-4 h-4 text-red-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"
                />
              </svg>
              Sorry, something went wrong. Please try again.
            </div>
          </div>
        )}

        {/* Improved Input Box */}
        <ChatInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          isStreaming={isStreaming}
          isLoading={isLoading}
          onSend={handleSendMessage}
          hasError={hasError}
        />
      </div>

      {/* Skeleton Overlay */}
      {isLoading && (
        <div
          className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
            isReady ? "opacity-0" : "opacity-100"
          }`}
        >
          <ChatbotSkeleton />
        </div>
      )}
    </div>
  );
}
