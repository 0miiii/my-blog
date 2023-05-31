import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between max-w-3xl mx-auto">
      <h1>
        <Link href="#">YeongMin.com</Link>
      </h1>
      <ul>
        <li className="flex gap-2.5">
          <Link href="#">posts</Link>
          <Link href="#">about</Link>
          <Link href="#">portfolios</Link>
          <Link href="#">contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
