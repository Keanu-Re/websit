import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "博客",
  description: "记录想法与学习笔记",
};

export default function BlogPage() {
  const posts = getAllPosts();

  // 收集所有标签
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in-up">
      <div className="flex items-start justify-between mb-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">博客</h1>
        <span className="text-xs text-muted mt-2">{posts.length} 篇文章</span>
      </div>
      <p className="text-muted mb-8">记录想法与学习笔记</p>

      {/* Tags */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      )}

      {posts.length === 0 ? (
        <div className="text-center py-24">
          <div className="icon-box mx-auto mb-4 !w-14 !h-14">
            <FileText size={24} />
          </div>
          <p className="text-muted text-lg mb-1">暂无文章</p>
          <p className="text-muted text-sm">新文章正在路上，敬请期待</p>
        </div>
      ) : (
        <div className="grid gap-4 stagger-children">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
