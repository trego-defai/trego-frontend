import Navbar from "@/components/shared/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen container mx-auto flex flex-col overflow-hidden">
      <Navbar />
      {children}
    </main>
  );
};

export default layout;
