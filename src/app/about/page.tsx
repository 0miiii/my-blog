import React from "react";
import TimeLineList from "@/components/TimeLineList";

const dummy_careers = [
  {
    company: "회사A",
    position: "Front-end Developer",
    year: "2023 - current",
    description: "테스트 중입니다.",
  },
  {
    company: "회사B",
    position: "Front-end Developer",
    year: "2022 - 2023",
    description: "테스트 중입니다.",
  },
];

const AboutPage = () => {
  return (
    <>
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Career</h1>
        <TimeLineList timeline={dummy_careers} />
      </section>
      <section>
        <h1 className="text-2xl font-bold mb-2">Activity</h1>
        <TimeLineList timeline={dummy_careers} />
      </section>
    </>
  );
};

export default AboutPage;
