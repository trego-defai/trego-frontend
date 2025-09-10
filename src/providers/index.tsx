"use client";

import React from "react";
import PrivyAuthProvider from "./PrivyAuthProvider";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <PrivyAuthProvider>{children}</PrivyAuthProvider>;
};

export default AppProviders;
