import Link from "next/link";
import React from "react";

interface Props {
  post: {
    title: string;
    content: string;
    category: string;
    date: string;
    path: string;
  };
}

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <article className="flex flex-col justify-between h-36 border-b hover:bg-gray-400">
      <Link href="#">
        <h1 className="font-bold text-2xl mb-1.5">{post.title}</h1>
        <p className="line-clamp-3">{post.content}</p>
      </Link>
      <div className="flex justify-between">
        <time>{post.date}</time>
        <span>{post.category}</span>
      </div>
    </article>
  );
};

export default PostCard;
