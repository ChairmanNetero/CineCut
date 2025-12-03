"use client";

import Link from "next/link";
import Logo from "./Logo";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
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

        {/* Future Login/Signup Button Placeholder */}
        {/* This empty div reserves 80px of space so the search bar isn't stuck to the edge */}
        <div className="w-20 hidden lg:block"></div>
      </div>
    </nav>
  );
};

export default Navbar;
