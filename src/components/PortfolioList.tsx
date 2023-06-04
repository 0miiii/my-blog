import React from "react";
import PortfolioCard from "./PortfolioCard";

interface Props {
  portfolios: {
    id: number;
    image: string;
    title: string;
    description: string;
    url: string;
  }[];
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
