"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const hasScroll = () => {
  if (typeof window === "undefined") return false;
  const element = document.documentElement;
  const hasVerticalScrollbar = element.scrollHeight > element.clientHeight;
  return hasVerticalScrollbar;
};

const Footer = () => {
  const pathname = usePathname();
  const [hasVerticalScroll, setHasVerticalScroll] = useState(false);

  useEffect(() => {
    setHasVerticalScroll(hasScroll());
  }, [pathname]);

  return (
    <footer
      className={`w-full py-4 bg-gray-800 text-white text-center ${
        !hasVerticalScroll && "fixed bottom-0"
      }`}
    >
      <p className="text-gray-400 text-sm">&copy; 2023, All rights reserved.</p>
    </footer>
  );
};

export default Footer;
