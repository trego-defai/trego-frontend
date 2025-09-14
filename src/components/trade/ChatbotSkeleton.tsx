"use client";

export function ChatbotSkeleton() {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header skeleton */}
      <div className="p-4 border-b border-gray-800">
        <div className="h-6 w-32 bg-gray-700/40 rounded animate-pulse"></div>
      </div>

      {/* Messages area skeleton */}
      <div className="flex-1 p-4 overflow-hidden">
        <div className="space-y-4">
          {/* Bot message skeleton */}
          <div className="flex justify-start">
            <div className="bg-gray-800/60 p-3 rounded-lg max-w-[80%] space-y-2">
              <div className="h-4 w-64 bg-gray-600/40 rounded animate-pulse"></div>
              <div
                className="h-4 w-48 bg-gray-600/40 rounded animate-pulse"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="h-3 w-16 bg-gray-600/40 rounded animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>

          {/* User message skeleton */}
          <div className="flex justify-end" style={{ animationDelay: "0.3s" }}>
            <div className="bg-blue-600/30 p-3 rounded-lg max-w-[80%] space-y-2">
              <div
                className="h-4 w-40 bg-blue-400/40 rounded animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
              <div
                className="h-3 w-16 bg-blue-400/40 rounded animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>

          {/* Bot response skeleton */}
          <div className="flex justify-start">
            <div className="bg-gray-800/60 p-3 rounded-lg max-w-[80%] space-y-2">
              <div
                className="h-4 w-56 bg-gray-600/40 rounded animate-pulse"
                style={{ animationDelay: "0.6s" }}
              ></div>
              <div
                className="h-4 w-72 bg-gray-600/40 rounded animate-pulse"
                style={{ animationDelay: "0.7s" }}
              ></div>
              <div
                className="h-4 w-32 bg-gray-600/40 rounded animate-pulse"
                style={{ animationDelay: "0.8s" }}
              ></div>
              <div
                className="h-3 w-16 bg-gray-600/40 rounded animate-pulse"
                style={{ animationDelay: "0.9s" }}
              ></div>
            </div>
          </div>

          {/* Typing indicator skeleton */}
          <div className="flex justify-start">
            <div className="bg-gray-800/60 p-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500/60 rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-gray-500/60 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-500/60 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                <div
                  className="h-3 w-20 bg-gray-600/40 rounded animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input area skeleton */}
      <div className="p-3 sm:p-4 border-t border-gray-800">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
          <div className="flex-1 bg-gray-800/40 border border-gray-700/50 rounded-lg px-3 py-2 min-h-[60px] sm:min-h-[40px] animate-pulse">
            <div className="space-y-2 pt-2">
              <div className="h-3 w-48 bg-gray-600/40 rounded animate-pulse"></div>
              <div
                className="h-3 w-36 bg-gray-600/40 rounded animate-pulse"
                style={{ animationDelay: "0.1s" }}
              ></div>
            </div>
          </div>
          <div className="bg-gray-700/40 px-4 py-2 rounded-lg self-end sm:self-auto animate-pulse">
            <div className="w-4 h-4 bg-gray-500/40 rounded"></div>
          </div>
        </div>
      </div>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent animate-shimmer opacity-50"></div>
    </div>
  );
}

export default ChatbotSkeleton;
