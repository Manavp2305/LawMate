import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <header className="z-[100] border-b px-3 flex justify-center border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 overflow-visible">
    <div className="container flex h-16 items-center justify-between py-4 overflow-visible">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-xl font-bold text-blue-700">LawMate</Link>
      </div>
      <nav className="z-[101] hidden md:flex items-center gap-6">
        <Link to="/" className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors">Home</Link>
        <a href="#footer" className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors">Contact</a>
        {/* Login Dropdown */}
        <div className="relative group">
          <button className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors focus:outline-none">
            Login
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity z-50">
            <Link to="/login/user" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">User Login</Link>
            <Link to="/login/lawyer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Lawyer Login</Link>
          </div>
        </div>
        {/* Signup Dropdown */}
        <div className="relative group">
          <button className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors focus:outline-none">
            Signup
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity z-50">
            <Link to="/signup/user" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">User Signup</Link>
            <Link to="/signup/lawyer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Lawyer Signup</Link>
          </div>
        </div>
      </nav>
    </div>
  </header>
);

export default Navbar; 