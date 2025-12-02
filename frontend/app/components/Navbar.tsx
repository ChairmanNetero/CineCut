import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 w-full flex items-center 
    justify-around py-5 px-24 border-b border-gray-700 bg-black"
    >

      <Link href="/">
      <p>logo placeholder</p></Link>

      <ul className="flex gap-10 text-lg">
        <Link href="/" className="text-gray-300 hover:text-white transition-colors">
        Home
        </Link>
      </ul>

      <ul className="flex gap-10 text-lg">
        <Link href="/watchlist" className="text-gray-300 hover:text-white transition-colors">
        Watchlist
        </Link>
      </ul>

      <ul className="flex gap-10 text-lg">
        <Link href="/history" className="text-gray-300 hover:text-white transition-colors">
        History
        </Link>
      </ul>

    </nav>
  );
};

export default Navbar;
