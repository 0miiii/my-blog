"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const links = [
    { name: "Posts", path: "/posts" },
    { name: "About", path: "/about" },
    { name: "Portfolios", path: "/portfolios" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full py-4 sticky top-0 bg-gray-800 text-white">
      <div className="flex justify-between items-center max-w-3xl mx-auto">
        <h1 className="text-xl font-bold">
          <Link href="/">YeongMin.com</Link>
        </h1>
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`hover:underline ${
                  pathname === link.path && "underline"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
