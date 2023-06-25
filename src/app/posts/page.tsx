import React from "react";
import FilteredPost from "@/components/FilteredPost";
import { getAllPosts } from "@/services/post";

const PostsPage = () => {
  const posts = getAllPosts();

  return <FilteredPost posts={posts} />;
};

export default PostsPage;
