import React from "react";
import PortfolioList from "@/components/PortfolioList";

const test = [
  {
    id: 1,
    image: "test",
    title: "test",
    description: "test",
    url: "test",
  },
  {
    id: 2,
    image: "test",
    title: "test",
    description: "test",
    url: "test",
  },
];

const PortfoliosPage = () => {
  return (
    <>
      <p className="text-gray-600 mb-4">
        지금까지 진행한 프로젝트를 담은 페이지입니다.
      </p>
      <PortfolioList portfolios={test} />
    </>
  );
};

export default PortfoliosPage;
