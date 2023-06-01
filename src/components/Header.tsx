import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between max-w-3xl mx-auto">
      <h1>
        <Link href="/">YeongMin.com</Link>
      </h1>
      <ul className="flex gap-2.5">
        <li>
          <Link href="/posts">posts</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/portfolios">portfolios</Link>
        </li>
        <li>
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
