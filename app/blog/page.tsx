import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "博客",
  description: "记录想法与学习笔记",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in-up">
      <h1 className="text-3xl font-bold tracking-tight mb-2">博客</h1>
      <p className="text-muted mb-10">记录想法与学习笔记</p>

      {posts.length === 0 ? (
        <p className="text-muted">暂无文章，敬请期待。</p>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
