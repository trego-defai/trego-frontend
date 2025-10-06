export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse"
          style={{ background: "rgba(var(--color-primary), 0.05)" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ background: "rgba(var(--color-primary), 0.03)" }}
        ></div>
      </div>

      <div className="text-center space-y-8 z-10 relative">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1
            className="text-4xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, var(--color-primary), var(--color-primary), #6ee7b7)",
            }}
          >
            Trego
          </h1>
          <p className="text-muted-foreground text-sm mt-2">DeFi AI Assistant</p>
        </div>

        {/* Enhanced spinner */}
        <div className="relative flex items-center justify-center">
          <div className="w-20 h-20 border-2 rounded-full" style={{ borderColor: "var(--color-border)" }}></div>
          <div
            className="w-20 h-20 border-2 border-transparent rounded-full animate-spin absolute"
            style={{
              borderTopColor: "var(--color-primary)",
              borderRightColor: "#6ee7b7",
            }}
          ></div>
          <div
            className="w-16 h-16 border-2 border-transparent rounded-full animate-spin absolute animate-reverse"
            style={{
              borderTopColor: "#bbf7d0",
              borderLeftColor: "var(--color-primary)",
            }}
          ></div>

          {/* Center glow */}
          <div
            className="w-8 h-8 rounded-full absolute animate-pulse blur-sm"
            style={{
              background: "linear-gradient(to right, var(--color-primary), #34d399)",
            }}
          ></div>
          <div
            className="w-4 h-4 rounded-full absolute animate-pulse"
            style={{ background: "var(--color-card)" }}
          ></div>
        </div>

        {/* Loading text */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Initializing AI Assistant</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Preparing your personalized DeFi trading experience with real-time market analysis
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 rounded-full animate-bounce" style={{ background: "var(--color-primary)" }}></div>
          <div
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ background: "#34d399", animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full animate-bounce"
            style={{
              background: "var(--color-primary)",
              animationDelay: "0.2s",
            }}
          ></div>
          <div
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ background: "#bbf7d0", animationDelay: "0.3s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
