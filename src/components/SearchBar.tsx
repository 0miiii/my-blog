"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface IProps {
  onSearch: (search: string) => void;
}

const SearchBar: React.FC<IProps> = ({ onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    inputRef.current && onSearch(inputRef.current.value);
  };

  return (
    <form
      className="w-full flex gap-2 bg-white p-2 border border-gray-300 rounded focus-within:ring-1 focus-within:ring-blue-500"
      onSubmit={submitHandler}
    >
      <Image src="/icons/search.svg" alt="search" width={25} height={25} />
      <input
        name="search"
        type="search"
        className="w-full text-black p-1 focus:outline-none"
        placeholder="검색어를 입력해주세요"
        ref={inputRef}
      />
    </form>
  );
};

export default SearchBar;
