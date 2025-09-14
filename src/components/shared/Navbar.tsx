import React from "react";
import Link from "next/link";
import AuthButton from "../auth/AuthButton";

interface NavbarProps {
  title: string;
}

const Navbar = ({ title }: NavbarProps) => {
  return (
    <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-bold text-white">
              Trego
            </Link>
            <span className="text-gray-400">|</span>
            <h1 className="text-lg font-semibold text-white">{title}</h1>
          </div>

          <div className="flex items-center space-x-4">
            <AuthButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
