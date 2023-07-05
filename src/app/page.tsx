import FilteredPost from "@/components/FilteredPost";
import { getAllPosts } from "@/services/post";

export default function Home() {
  const posts = getAllPosts();

  return <FilteredPost posts={posts} />;
}
