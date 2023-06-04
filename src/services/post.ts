import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "data/posts");

export const getPostData = (fileName: string) => {
  const postSlug = fileName.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  // console.log("filePath", filePath);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  // console.log("fileContent", fileContent);
  const { data, content } = matter(fileContent);

  return {
    id: data.id,
    path: postSlug,
    title: data.title,
    content,
    date: data.date,
    category: data.category,
  };
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDirectory);
  return postFiles.map((postFile) => getPostData(postFile));
};
