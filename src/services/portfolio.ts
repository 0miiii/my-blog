import fs from "fs";
import path from "path";

export interface IPortfolio {
  id: number;
  img: string;
  title: string;
  description: string;
  role: string;
  teamSize: number;
  stack: string[];
  link: { [key: string]: string }[];
}

export const getAllPortfolios = (): IPortfolio[] => {
  const portfoliosDirectory = path.join(
    process.cwd(),
    "data",
    "portfoliosData.json"
  );
  const portfoliosDataJson = fs.readFileSync(portfoliosDirectory, "utf-8");
  const portfoliosData = JSON.parse(portfoliosDataJson);
  return portfoliosData;
};
