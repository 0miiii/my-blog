import React from "react";

interface Timeline {
  year: string;
  company: string;
  position: string;
  description: string;
}

interface Props {
  timeline: Timeline;
  isLast: boolean;
}

const TimeLine: React.FC<Props> = ({ timeline, isLast }) => {
  const borderStyle = isLast ? "border-none" : "border-b border-gray-300";

  return (
    <li className={`bg-white ${borderStyle} pb-6 pt-6`}>
      <p className="text-gray-500 text-sm mb-2">{timeline.year}</p>
      <h2 className="text-2xl font-bold mb-2">{timeline.company}</h2>
      <p className="text-gray-700 mb-4">{timeline.position}</p>
      <p className="text-gray-600">{timeline.description}</p>
    </li>
  );
};

export default TimeLine;
