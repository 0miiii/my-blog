import PostList from "@/components/PostList";
import CategorySelect from "@/components/CategorySelect";
import SearchInput from "@/components/SearchInput";
import TagList from "@/components/TagList";
import { getAllPosts } from "@/services/post";

const PostsPage = () => {
  const posts = getAllPosts();
  const tags = [...new Set(posts.map((post) => post.tags).flat())];
  const categories = [...new Set(posts.map((post) => post.category))];
  const postCount = `${posts.length}개의 포스팅이 있습니다.`;

  return (
    <>
      <div className="flex justify-between mb-4 gap-5">
        <CategorySelect categories={categories} />
        <SearchInput />
      </div>
      <TagList tags={tags} />
      <div className="text-gray-500 mt-4 mb-2">{postCount}</div>
      <PostList posts={posts} />
    </>
  );
};

export default PostsPage;
