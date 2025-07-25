import React, { useState, useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

const Navbar = () => (
  <header className="z-[100] border-b px-3 flex justify-center border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 overflow-visible">
    <div className="container flex items-center justify-between py-4 overflow-visible" style={{ overflow: 'visible' }}>
      <div className="flex items-center gap-2">
        <Link to="/" className="text-xl font-bold text-blue-700">LawMate</Link>
      </div>
      <nav className="z-[101] hidden md:flex items-center gap-6">
        <Link to="/" className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors">Home</Link>
        <a href="#footer" className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors">Contact</a>
        {/* Login Dropdown */}
        <Dropdown
          label="Login"
          items={[
            { to: "/login/user", label: "User Login" },
            { to: "/login/lawyer", label: "Lawyer Login" },
          ]}
        />
        {/* Signup Dropdown */}
        <Dropdown
          label="Signup"
          items={[
            { to: "/signup/user", label: "User Signup" },
            { to: "/signup/lawyer", label: "Lawyer Signup" },
          ]}
        />
      </nav>
    </div>
  </header>
);

export default Navbar;

// Dropdown component
type DropdownItem = { to: string; label: string };
type DropdownProps = { label: string; items: DropdownItem[] };
function Dropdown({ label, items }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        btnRef.current &&
        !btnRef.current.contains(e.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Position dropdown below button
  useLayoutEffect(() => {
    if (open && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: "absolute",
        top: rect.bottom + window.scrollY + 8, // 8px gap
        left: rect.right - 192 + window.scrollX, // 192px = w-48
        minWidth: "10rem",
        zIndex: 99999,
      });
    }
  }, [open]);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        className={`flex items-center text-sm font-medium px-3 py-1 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300
          ${open ? "bg-blue-50 text-blue-700" : "text-gray-600"}
          hover:bg-blue-50 hover:text-blue-700
        `}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      // Only open/close on click, not on mouse enter/leave
      >
        {label}
        <svg
          className={`ml-1 w-4 h-4 transition-transform duration-200 ${open ? "rotate-180 text-blue-700" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && createPortal(
        <div
          ref={dropdownRef}
          style={dropdownStyle}
          className="w-48 bg-white border border-gray-200 rounded-xl shadow-2xl transition-all duration-200 ease-out opacity-100 pointer-events-auto"
        >
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-colors"
              tabIndex={0}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>,
        document.body
      )}
    </>
  );
} 