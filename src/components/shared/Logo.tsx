import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-center group -space-x-6">
      <Image
        src="/logo.svg"
        alt="Trego Logo"
        width={100}
        height={100}
        className=""
        priority
      />
      <span className="text-2xl font-medium tracking-tight text-[#1FFFA9]">
        TREGO
      </span>
    </div>
  );
}

export default Logo;
