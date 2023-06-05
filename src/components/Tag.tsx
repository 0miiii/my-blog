import React from "react";

interface Props {
  children: React.ReactNode;
}

const Tag: React.FC<Props> = ({ children }) => {
  return (
    <span className="inline-block px-2 py-1 bg-gray-300 text-gray-800 rounded-md text-sm cursor-pointer hover:bg-blue-500 hover:text-white">
      {children}
    </span>
  );
};

export default Tag;
