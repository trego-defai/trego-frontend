"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import React from "react";

const ClerkAuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
      signInFallbackRedirectUrl={"/"}
      signUpFallbackRedirectUrl={"/"}
    >
      {children}
    </ClerkProvider>
  );
};

export default ClerkAuthProvider;
