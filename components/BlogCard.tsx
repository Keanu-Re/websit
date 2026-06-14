import Link from "next/link";
import { Calendar, Tag } from "lucide-react";
import type { PostMeta } from "@/lib/posts";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block p-6 rounded-xl border border-border bg-card hover:bg-card-hover transition-colors"
    >
      <article>
        <h2 className="text-lg font-semibold group-hover:text-accent transition-colors mb-2">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="text-sm text-muted mb-3 line-clamp-2">{post.excerpt}</p>
        )}
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
          {post.date && (
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {post.date}
            </span>
          )}
          {post.tags.length > 0 && (
            <span className="flex items-center gap-1">
              <Tag size={12} />
              {post.tags.join(", ")}
            </span>
          )}
        </div>
      </article>
    </Link>
  );
}
