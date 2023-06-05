import React from "react";
import PortfolioList from "@/components/PortfolioList";
import { getAllPortfolios } from "@/services/portfolio";

const PortfoliosPage = () => {
  const portfolios = getAllPortfolios();
  return (
    <>
      <p className="text-gray-600 mb-4">
        지금까지 진행한 프로젝트를 담은 페이지입니다.
      </p>
      <PortfolioList portfolios={portfolios} />
    </>
  );
};

export default PortfoliosPage;
