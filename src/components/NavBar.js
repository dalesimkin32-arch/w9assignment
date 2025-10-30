// /src/components/NavBar.js

"use client";
// /src/components/NavBar.jsx

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center bg-blue-700 border-4 border-white rounded-xl p-8">
      <div className="flex items-center gap-3">
        <div></div>
        <h1 className="text-2xl font-bold text-white">M80 Blogs</h1>
      </div>
      <div className="flex gap-6 text-lg text-white">
        <Link href="/" className="hover:font-bold transition-colors">
          Home
        </Link>
        <Link href="/posts" className="hover:font-bold transition-colors">
          Posts
        </Link>
        {pathname == "/posts" ? (
          <Link
            href="/posts?sortBy=asc"
            className="hover:font-bold transition-colors"
          >
            Sort Ascending
          </Link>
        ) : (
          ""
        )}
        {pathname == "/posts" ? (
          <Link
            href="/posts?sortBy=desc"
            className="hover:font-bold transition-colors"
          >
            Sort Descending
          </Link>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
