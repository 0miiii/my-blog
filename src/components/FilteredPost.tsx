"use client";

import React, { useState } from "react";
import PostList from "./PostList";
import Category from "./Category";
import SearchBar from "./SearchBar";
import TagList from "./TagList";
import { IPost } from "@/services/post";

interface IProps {
  posts: IPost[];
}

const FilteredPost: React.FC<IProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const tags = posts.map((post) => post.tags).flat();
  const categories = posts.map((post) => post.category);
  const filteredPosts = posts.filter((post) => {
    if (selectedCategory === "All") {
      return true;
    }
    return post.category === selectedCategory;
  });
  const numberOfPosts = `${filteredPosts.length}개의 포스팅이 있습니다.`;

  const changeCategoryHandler = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="flex justify-between mb-4 gap-5">
        <Category
          options={categories}
          selectedValue={selectedCategory}
          onChange={changeCategoryHandler}
        />
        <SearchBar />
      </div>
      <TagList tags={tags} />
      <div className="text-gray-500 mt-4 mb-2">{numberOfPosts}</div>
      <PostList posts={filteredPosts} />
    </>
  );
};

export default FilteredPost;
