"use client";

import React from "react";

interface Props {
  categories: string[];
  onSelect: (category: string) => void;
}

const CategorySelect: React.FC<Props> = ({ categories, onSelect }) => {
  const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <select
      className="text-black w-full p-2 rounded bg-white border border-gray-300 focus:outline-none focus-within:ring-1 focus-within:ring-blue-500"
      onChange={selectChangeHandler}
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
