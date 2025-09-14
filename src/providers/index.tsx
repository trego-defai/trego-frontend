"use client";

import React from "react";
import ClerkAuthProvider from "./ClerkAuthProvider";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <ClerkAuthProvider>{children}</ClerkAuthProvider>;
};

export default AppProviders;
