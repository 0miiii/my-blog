import React from "react";
import Link from "next/link";
import { IPost } from "@/services/post";

interface Props {
  post: IPost;
}

const PostCard: React.FC<Props> = ({ post }) => {
  const easyToReadDate = new Date(post.date).toLocaleDateString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const detailPath = `/${post.path}`;

  return (
    <article className="flex flex-col justify-between gap-y-4 hover:bg-gray-400 transition duration-300 bg-white rounded-lg shadow-md p-4">
      <Link href={detailPath}>
        <h1 className="font-bold text-xl mb-2">{post.title}</h1>
        <p className="line-clamp-3 text-gray-600">{post.content}</p>
      </Link>
      <div className="flex justify-between items-center">
        <time className="text-gray-500">{easyToReadDate}</time>
        <span className="text-gray-500">{post.category}</span>
      </div>
    </article>
  );
};

export default PostCard;
