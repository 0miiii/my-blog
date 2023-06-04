"use client";

import React from "react";
import Image from "next/image";

interface Props {
  onSearch: (keyword: string) => void;
}

const SearchInput: React.FC<Props> = ({ onSearch }) => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const search = formData.get("search")?.toString() || "";
    onSearch(search);
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
      />
    </form>
  );
};

export default SearchInput;
