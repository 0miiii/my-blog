import React from "react";

interface Props {
  categories: string[];
}

const CategorySelect: React.FC<Props> = ({ categories }) => {
  return (
    <select className="text-black w-48 p-2 rounded">
      <option disabled selected className="disabled:hidden">
        카테고리
      </option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
