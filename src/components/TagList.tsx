import React from "react";
import Tag from "./Tag";

interface Props {
  tags: string[];
}

const TagList: React.FC<Props> = ({ tags }) => {
  return (
    <ul className="flex gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
