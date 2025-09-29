import Navbar from "@/components/shared/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen container mx-auto flex flex-col">
      {/* <Navbar /> */}
      {children}
    </main>
  );
};

export default layout;
