"use client";

import React from "react";

interface Props {
  options: string[];
  selectedValue: string;
  onChange: (selectedValue: string) => void;
}

const Category: React.FC<Props> = ({ options, selectedValue, onChange }) => {
  const categories = [...new Set(["All", ...options])];
  const selectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select
      className="text-black w-full p-2 rounded bg-white border border-gray-300 focus:outline-none focus-within:ring-1 focus-within:ring-blue-500"
      onChange={selectChangeHandler}
      value={selectedValue}
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Category;
