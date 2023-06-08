import React from "react";
import Image from "next/image";
import { IPortfolio } from "@/services/portfolio";

interface Props {
  portfolio: IPortfolio;
}

const PortfolioCard: React.FC<Props> = ({ portfolio }) => {
  return (
    <article className="flex bg-white rounded-lg shadow-md p-4">
      <div className="w-40 h-40 border border-gray-300 flex-shrink-0">
        <Image
          src={portfolio.img}
          alt={portfolio.title}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col ml-4">
        <h1 className="text-xl font-bold mb-2">{portfolio.title}</h1>
        <p className="text-gray-600 mb-4">{portfolio.description}</p>
        <div className="mb-4">
          <h3 className="font-bold">Role</h3>
          <span>{portfolio.role}</span>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Team</h3>
          <span>{portfolio.teamSize}명</span>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Stack</h3>
          <ul className="flex flex-wrap gap-2">
            {portfolio.stack.map((stack) => (
              <li
                key={stack}
                className="text-blue-500 underline whitespace-nowrap"
              >
                {stack}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Links</h3>
          <ul className="flex flex-wrap gap-2">
            <li className="text-blue-500 underline">GitHub</li>
            <li className="text-blue-500 underline">Deployed Link</li>
            <li className="text-blue-500 underline">Notion Link</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
