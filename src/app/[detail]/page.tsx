import React from "react";
import MarkdownViewer from "@/components/MarkdownViewer";
import Comment from "@/components/Comment";
import { getPost } from "@/services/post";

interface Props {
  params: { detail: string };
}

const PostDetailPage: React.FC<Props> = ({ params }) => {
  const postData = getPost(params.detail);

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
        <MarkdownViewer markdown={postData.content} />
      </article>
      <Comment />
    </>
  );
};

export default PostDetailPage;
