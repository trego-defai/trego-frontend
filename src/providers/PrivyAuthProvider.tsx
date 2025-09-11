"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import React from "react";

const PrivyAuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_APP_ID!}
      config={{
        appearance: {
          theme: "dark",
          accentColor: "#676FFF",
          showWalletLoginFirst: false,
        },
        loginMethods: ["twitter", "google"],
      }}
    >
      {children}
    </PrivyProvider>
  );
};

export default PrivyAuthProvider;
