import React from "react";
import Tag from "./Tag";

interface Props {
  tags: string[];
  onClick: (tag: string) => void;
}

const TagList: React.FC<Props> = ({ tags, onClick }) => {
  const deduplicatedTags = [...new Set(tags)];

  return (
    <ul className="flex gap-2">
      {deduplicatedTags.map((tag) => (
        <li key={tag}>
          <Tag onClick={onClick}>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
