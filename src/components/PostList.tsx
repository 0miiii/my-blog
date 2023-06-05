import React from "react";
import PostCard from "./PostCard";
import { IPost } from "@/services/post";

interface Props {
  posts: IPost[];
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className="flex flex-col gap-5">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
