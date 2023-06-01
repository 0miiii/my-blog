import PostCard from "@/components/PostCard";
import CategorySelect from "@/components/CategorySelect";
import SearchInput from "@/components/SearchInput";

const post = {
  title: "테스트테스트테스트테스트테스트",
  content:
    "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
  category: "테스트",
  date: "2023-06-01",
  path: "test",
};

const categories = ["a", "b", "c", "d"];

const PostsPage = () => {
  return (
    <main className="max-w-3xl mx-auto">
      <div className="flex justify-between">
        <CategorySelect categories={categories} />
        <SearchInput />
      </div>
      <div>9개의 포스팅이 있습니다.</div>
      <div>
        <PostCard post={post} />
        <PostCard post={post} />
      </div>
    </main>
  );
};

export default PostsPage;
