"use client";

import React, { useEffect, useState } from "react";

// Predefined particle positions to avoid hydration mismatch
const PARTICLE_POSITIONS = [
  { left: 10, top: 15, delay: 0, duration: 3.2 },
  { left: 25, top: 8, delay: 1.5, duration: 4.1 },
  { left: 45, top: 22, delay: 0.8, duration: 3.7 },
  { left: 65, top: 12, delay: 2.2, duration: 3.5 },
  { left: 80, top: 35, delay: 1.1, duration: 4.3 },
  { left: 92, top: 18, delay: 2.8, duration: 3.9 },
  { left: 15, top: 45, delay: 0.3, duration: 3.8 },
  { left: 35, top: 52, delay: 1.8, duration: 4.2 },
  { left: 55, top: 38, delay: 2.5, duration: 3.4 },
  { left: 75, top: 48, delay: 0.6, duration: 4.0 },
  { left: 88, top: 62, delay: 1.3, duration: 3.6 },
  { left: 5, top: 75, delay: 2.1, duration: 4.4 },
  { left: 28, top: 82, delay: 0.9, duration: 3.3 },
  { left: 48, top: 78, delay: 1.6, duration: 3.8 },
  { left: 68, top: 85, delay: 2.7, duration: 4.1 },
  { left: 85, top: 88, delay: 0.4, duration: 3.7 },
  { left: 18, top: 65, delay: 1.9, duration: 4.0 },
  { left: 38, top: 72, delay: 2.4, duration: 3.5 },
  { left: 58, top: 68, delay: 0.7, duration: 4.2 },
  { left: 78, top: 75, delay: 1.4, duration: 3.9 },
];

const Background = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

      {/* Floating particles - only render on client to avoid hydration mismatch */}
      {isClient && (
        <div className="absolute inset-0 z-0">
          {PARTICLE_POSITIONS.map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-ping"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>
      )}

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

      {/* Background chart layer (does not affect layout) */}
      <div className="absolute z-50">{/* <AnimatedChart /> */}</div>

      {/* Radial gradient overlay */}
      {/* <div className="absolute inset-0 z-0 bg-gradient-radial from-transparent via-transparent to-black/50 pointer-events-none" /> */}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
