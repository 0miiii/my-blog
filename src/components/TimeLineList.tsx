import React from "react";
import TimeLineCard from "./TimeLineCard";

interface Timeline {
  year: string;
  company: string;
  position: string;
  description: string;
}

interface Props {
  timeline: Timeline[];
}

const TimeLineList: React.FC<Props> = ({ timeline }) => {
  return (
    <ul className="flex flex-col rounded-lg shadow-md pr-6 pl-6">
      {timeline.map((career, index) => (
        <TimeLineCard
          key={index}
          timeline={career}
          isLast={index === timeline.length - 1}
        />
      ))}
    </ul>
  );
};

export default TimeLineList;
