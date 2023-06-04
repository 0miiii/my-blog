import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { getPostData } from "@/services/post";

interface Props {
  params: { detail: string };
}

const PostDetailPage: React.FC<Props> = ({ params }) => {
  const postData = getPostData(params.detail);

  return (
    <>
      <article className="bg-white rounded-lg shadow-md p-4">
        <header className="border-b pb-4 mb-4">
          <h1 className="text-2xl font-bold mb-4">{postData.title}</h1>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">{postData.date}</span>
            <span className="text-gray-500">{postData.category}</span>
          </div>
        </header>
        <ReactMarkdown className="text-gray-600">
          {postData.content}
        </ReactMarkdown>
      </article>
      <section className="mt-4">댓글</section>
    </>
  );
};

export default PostDetailPage;
