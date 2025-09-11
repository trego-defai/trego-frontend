import React from "react";

const Background = ({ children }: { children: React.ReactNode }) => {
  return (  
    <div className="min-h-screen w-full relative bg-gradient-to-br from-slate-900 via-black to-slate-800 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0">  
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div  
          className="absolute top-3/4 -right-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
                 linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
               `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-transparent via-transparent to-black/50" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
