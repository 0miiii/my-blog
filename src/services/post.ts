import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface IPost {
  id: number;
  title: string;
  date: string;
  category: string;
  tags: string[];
  path: string;
  content?: string;
}

const postsDirectory = path.join(process.cwd(), "data/posts");

const getPostsData = (): IPost[] => {
  const postsDataDirectory = path.join(process.cwd(), "data", "postsData.json");
  const postsDataJson = fs.readFileSync(postsDataDirectory, "utf-8");
  const postsData = JSON.parse(postsDataJson);
  return postsData;
};

export const getAllPosts = () => {
  const postsData = getPostsData();
  const filePaths = postsData.map((postData) => postData.path);
  return filePaths.map((filePath) => getPost(filePath));
};

export const getPost = (fileName: string): IPost => {
  const postSlug = fileName.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    id: data.id,
    title: data.title,
    content,
    path: postSlug,
    date: data.date,
    category: data.category,
    tags: data.tags,
  };
};
