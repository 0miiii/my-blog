import React from "react";
import Image from "next/image";

const SearchInput = () => {
  return (
    <div className="flex gap-2 bg-white rounded p-2">
      <Image src="/icons/search.svg" alt="search" width={25} height={25} />
      <input type="search" className="text-black p-1 focus:outline-0" />
    </div>
  );
};

export default SearchInput;
