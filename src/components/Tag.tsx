import React, { useState } from "react";

interface Props {
  children: string;
  onClick: (tag: string) => void;
}

const Tag: React.FC<Props> = ({ children, onClick }) => {
  const [activity, setActivity] = useState(false);

  const clickHandler = () => {
    onClick(children);
    setActivity(!activity);
  };

  return (
    <span
      className={`inline-block px-2 py-1 rounded-md text-sm cursor-pointer ${
        activity
          ? "bg-blue-500 text-white"
          : "bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white"
      }`}
      onClick={clickHandler}
    >
      {children}
    </span>
  );
};

export default Tag;
