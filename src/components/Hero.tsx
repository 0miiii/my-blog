"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex gap-4 bg-gray-200 p-4 rounded-lg">
      <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
      <div className="flex flex-col justify-center gap-2">
        <h1 className="text-2xl font-bold">조영민 Frontend Developer</h1>
        <p>웹 개발에 대한 학습 내용 및 경험을 정리해 놓은 블로그입니다.</p>
        <ul className="flex gap-2">
          <li>
            <Link href="https://github.com/0miiii" target="_blank">
              <Image
                src="/icons/github.svg"
                alt="github"
                width={25}
                height={25}
              />
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <Image
                src="/icons/email.svg"
                alt="email"
                width={25}
                height={25}
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
