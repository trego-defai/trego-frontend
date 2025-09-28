import { PATH } from "@/lib/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-center space-x-2 group">
      <Image
        src="/logo.svg"
        alt="Trego Logo"
        width={100}
        height={100}
        className="object-contain"
        priority
      />
      <div className="flex flex-col">
        <span className="text-2xl font-medium tracking-tight text-[#1FFFA9]">
          TREGO
        </span>
      </div>
    </div>
  );
}

export default Logo;
