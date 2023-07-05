"use client";

import React, { useState, useMemo } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string[]>([]);

  const tags = posts.map((post) => post.tags).flat();
  const categories = posts.map((post) => post.category);

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    if (selectedTag.length !== 0) {
      let arr = [];
      for (let i = 0; i < selectedTag.length; i++) {
        const filteredArr = filtered.filter((post) =>
          post.tags.includes(selectedTag[i])
        );
        arr.push(...filteredArr);
      }
      filtered = [...new Set(arr)];
    }

    if (searchQuery !== "") {
      filtered = filtered.filter(
        (post) =>
          post.title.includes(searchQuery) || post.content.includes(searchQuery)
      );
    }

    return filtered;
  }, [posts, selectedCategory, searchQuery, selectedTag]);

  const numberOfPosts = `${filteredPosts.length}개의 포스팅이 있습니다.`;

  const changeCategoryHandler = (category: string) => {
    setSelectedCategory(category);
  };

  const changeSearchHandler = (search: string) => {
    setSearchQuery(search);
  };

  const clickTagHandler = (tag: string) => {
    if (selectedTag.includes(tag)) {
      setSelectedTag((prevSelectTags) => {
        return prevSelectTags.filter((prevSelectTag) => prevSelectTag !== tag);
      });
      return;
    }

    setSelectedTag((prevSelectTags) => {
      return [...prevSelectTags, tag];
    });
  };

  return (
    <>
      <div className="flex justify-between mb-4 gap-5">
        <Category
          options={categories}
          selectedValue={selectedCategory}
          onChange={changeCategoryHandler}
        />
        <SearchBar onSearch={changeSearchHandler} />
      </div>
      <TagList tags={tags} onClick={clickTagHandler} />
      <p className="text-gray-500 mt-4 mb-2">{numberOfPosts}</p>
      <PostList posts={filteredPosts} />
    </>
  );
};

export default FilteredPost;
