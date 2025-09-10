export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="text-center space-y-8 z-10 relative">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary to-green-300 bg-clip-text text-transparent">
            Trego
          </h1>
          <p className="text-gray-400 text-sm mt-2">DeFi AI Assistant</p>
        </div>
        
        {/* Enhanced spinner */}
        <div className="relative flex items-center justify-center">
          <div className="w-20 h-20 border-2 border-gray-700 rounded-full"></div>
          <div className="w-20 h-20 border-2 border-transparent border-t-primary border-r-green-400 rounded-full animate-spin absolute"></div>
          <div className="w-16 h-16 border-2 border-transparent border-t-green-300 border-l-primary rounded-full animate-spin absolute animate-reverse"></div>
          
          {/* Center glow */} 
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-green-400 rounded-full absolute animate-pulse blur-sm"></div>
          <div className="w-4 h-4 bg-white rounded-full absolute animate-pulse"></div>
        </div>
        
        {/* Loading text */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Initializing AI Assistant</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Preparing your personalized DeFi trading experience with real-time market analysis
          </p>
        </div>
        
        {/* Progress dots */}
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div 
            className="w-2 h-2 bg-green-400 rounded-full animate-bounce" 
            style={{animationDelay: "0.1s"}}
          ></div>
          <div 
            className="w-2 h-2 bg-primary rounded-full animate-bounce" 
            style={{animationDelay: "0.2s"}}
          ></div>
          <div 
            className="w-2 h-2 bg-green-300 rounded-full animate-bounce" 
            style={{animationDelay: "0.3s"}}
          ></div>
        </div>
      </div>
    </div>
  );
}