import React from "react";
import Navbar from "@/components/shared/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar title="Trading" />
      {children}
    </div>
  );
};

export default layout;
