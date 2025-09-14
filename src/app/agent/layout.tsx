import Navbar from "@/components/shared/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar title="AI Agent" />
      {children}
    </div>
  );
};

export default layout;
