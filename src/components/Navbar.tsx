import React from "react";

const Navbar = () => (
  <header className="border-b px-3 flex justify-center border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
    <div className="container flex h-16 items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-blue-700">LawMate</span>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#hero" className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors">Home</a>
        <a href="#footer" className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors">Contact</a>
      </nav>
    </div>
  </header>
);

export default Navbar; 