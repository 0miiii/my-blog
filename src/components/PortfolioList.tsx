import React from "react";
import PortfolioCard from "./PortfolioCard";
import { IPortfolio } from "@/services/portfolio";

interface Props {
  portfolios: IPortfolio[];
}

const PortfolioList: React.FC<Props> = ({ portfolios }) => {
  return (
    <ul className="flex flex-col gap-5">
      {portfolios.map((portfolio) => (
        <li key={portfolio.id}>
          <PortfolioCard portfolio={portfolio} />
        </li>
      ))}
    </ul>
  );
};

export default PortfolioList;
