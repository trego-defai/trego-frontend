"use client";

import React from "react";
import { Toaster } from "sonner";
import ClerkAuthProvider from "./ClerkAuthProvider";
import ReactQueryProvider from "./ReactQueryProvider";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <ClerkAuthProvider>
        {children}
        <Toaster />
      </ClerkAuthProvider>
    </ReactQueryProvider>
  );
};

export default AppProviders;
