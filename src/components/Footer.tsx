"use client";

import React, { useState, useEffect } from "react";

const hasScroll = () => {
  if (typeof window === "undefined") return false;
  const element = document.documentElement;
  const hasVerticalScrollbar = element.scrollHeight > element.clientHeight;
  console.log("scrollHeight", element.scrollHeight);
  console.log("clientHeight", element.clientHeight);
  return hasVerticalScrollbar;
};

const Footer = () => {
  const [hasVerticalScroll, setHasVerticalScroll] = useState(false);

  useEffect(() => {
    setHasVerticalScroll(hasScroll());
    console.log(hasScroll());
  }, [hasVerticalScroll]);

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
