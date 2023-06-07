"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface Props {
  categories: string[];
}

const CategorySelect: React.FC<Props> = ({ categories }) => {
  const router = useRouter();
  const params = useSearchParams().get("category");

  const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const select = event.target.value;
    const url = select ? `/posts?category=${event.target.value}` : "/posts";
    router.push(url);
  };

  return (
    <select
      className="text-black w-full p-2 rounded bg-white border border-gray-300 focus:outline-none focus-within:ring-1 focus-within:ring-blue-500"
      onChange={selectChangeHandler}
      value={params || ""}
    >
      <option disabled selected value="" className="disabled:hidden">
        카테고리
      </option>
      <option value="">전체</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
