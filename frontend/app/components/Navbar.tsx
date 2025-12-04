"use client";

import Link from "next/link";
import Logo from "./Logo";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // TEMPORARY: Toggle this to true/false to test the Logged In/Out views
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <nav
      className="fixed top-0 z-50 w-full flex items-center 
    justify-between py-5 px-10 lg:px-24 border-b border-gray-700 bg-black"
    >
      {/* 1. Logo Section */}
      <Link href="/" className="transition-opacity hover:opacity-90">
        <Logo />
      </Link>

      {/* 2. Navigation Links */}
      {/* Changed gap-10 to gap-16 for more space between elements */}
      <ul className="hidden md:flex gap-25 text-lg">
        <li>
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/watchlist"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Watchlist
          </Link>
        </li>
        <li>
          <Link
            href="/history"
            className="text-gray-300 hover:text-white transition-colors"
          >
            History
          </Link>
        </li>
      </ul>

      {/* 3. Right Section (Search + Future Button Placeholder) */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative mr-50">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-800 text-gray-200 text-sm rounded-full pl-4 pr-10 py-2 
                     focus:outline-none focus:ring-2 focus:ring-gray-500 w-48 transition-all focus:w-64"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>

        {/* Auth Buttons Section */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            // === LOGGED IN STATE ===
            <>
              {/* Profile Avatar */}
              <Link
                href="/profile"
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-gray-800 to-gray-700 
                         flex items-center justify-center border border-gray-600
                         hover:border-gray-400 transition-colors"
                title="Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                title="Logout"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </>
          ) : (
            // === LOGGED OUT STATE (New Cleaner Design) ===
            <>
              <Link
                href="/login"
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-white text-black hover:bg-gray-200 
                         text-sm px-5 py-2 rounded-full font-semibold transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
