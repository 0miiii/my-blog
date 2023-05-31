import React from "react";

interface Props {}

const CategorySelect: React.FC<Props> = () => {
  return (
    <select id="category" name="category">
      <option value="">카테고리</option>
      <option value="apple">사과</option>
      <option value="banana">바나나</option>
      <option value="orange">오렌지</option>
      <option value="grape">포도</option>
    </select>
  );
};

export default CategorySelect;
