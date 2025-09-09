export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="text-center space-y-6">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="w-16 h-16 border-4 border-transparent border-t-blue-300 rounded-full animate-spin absolute top-0 left-0 animate-pulse"></div>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Loading...</h2>
          <p className="text-gray-400">Please wait while we prepare your experience</p>
        </div>
        
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: "0.1s"}}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></div>
        </div>
      </div>
    </div>
  );
}