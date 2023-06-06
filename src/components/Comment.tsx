"use client";

import React, { useEffect, useRef } from "react";

const Comment = () => {
  const commentsEl = useRef<HTMLElement>(null);

  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.setAttribute("repo", "0miiii/my-blog");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", "github-light");
    scriptEl.setAttribute("label", "comment");
    scriptEl.crossOrigin = "anonymous";
    commentsEl.current?.appendChild(scriptEl);
  }, []);

  return <section className="mt-4" ref={commentsEl} />;
};

export default Comment;
