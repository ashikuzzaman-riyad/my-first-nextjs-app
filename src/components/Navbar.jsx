"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Navbar({ session, status }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/product", label: "Product" },
    { href: "/addproduct", label: "Add Product" },
    { href: "/manageproduct", label: "Manage Products" },
  ];

  return (
    <header className="bg-gray-900 mb-5 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-5 flex-wrap">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white">VortexGear</h2>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
         <nav className="flex flex-col lg:flex-row lg:gap-6 gap-2 mt-4 lg:mt-0">
  {navLinks.map((link, idx) => (
    <Link
      key={idx}
      href={link.href}
      className="text-gray-300 hover:text-white font-medium px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-gray-700"
      onClick={() => setMenuOpen(false)} // <-- Close menu on click
    >
      {link.label}
    </Link>
  ))}
</nav>


          {/* Auth Buttons */}
          <div className="flex flex-col lg:flex-row gap-3 mt-4 lg:mt-0 lg:ml-6">
            {status === "loading" ? (
              <p className="text-gray-300">Loading...</p>
            ) : session ? (
              <button
                onClick={() => signOut()}
                className="bg-red-600 px-4 py-2 rounded-2xl text-white shadow hover:bg-red-500 transition-all duration-300"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="bg-amber-600 px-4 py-2 rounded-2xl text-white shadow hover:bg-amber-500 transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-amber-600 px-4 py-2 rounded-2xl text-white shadow hover:bg-amber-500 transition-all duration-300"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
