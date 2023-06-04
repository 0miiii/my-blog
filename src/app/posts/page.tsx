import PostList from "@/components/PostList";
import CategorySelect from "@/components/CategorySelect";
import SearchInput from "@/components/SearchInput";
import { getAllPosts } from "@/services/post";

const categories = ["a", "b", "c", "d"];

const PostsPage = () => {
  const posts = getAllPosts();
  return (
    <>
      <div className="flex justify-between mb-4 gap-5">
        <CategorySelect categories={categories} />
        <SearchInput />
      </div>
      <div className="text-gray-500 mb-2">
        {posts.length}개의 포스팅이 있습니다.
      </div>
      <PostList posts={posts} />
    </>
  );
};

export default PostsPage;
