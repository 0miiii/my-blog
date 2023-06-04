import React from "react";
import Image from "next/image";

interface Props {
  portfolio: {
    id: number;
    image: string;
    title: string;
    description: string;
    url: string;
  };
}

const PortfolioCard: React.FC<Props> = ({ portfolio }) => {
  return (
    <article className="flex bg-white rounded-lg shadow-md p-4">
      <div className="w-40 h-40 border">
        {/* <Image
          src={portfolio.image}
          alt={portfolio.title}
          width={100}
          height={100}
        /> */}
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h1 className="text-xl font-bold mb-2">{portfolio.title}</h1>
        <p className="text-gray-600">{portfolio.description}</p>
        <div className="mt-4">
          <h3>Stack</h3>
          <ul className="flex gap-2">
            <li className="text-blue-500 underline">TypeScript</li>
            <li className="text-blue-500 underline">NextJS</li>
            <li className="text-blue-500 underline">Tailwind</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3>Link</h3>
          <ul className="flex gap-2">
            <li className="text-blue-500 underline">깃허브</li>
            <li className="text-blue-500 underline">배포링크</li>
            <li className="text-blue-500 underline">노션링크</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
