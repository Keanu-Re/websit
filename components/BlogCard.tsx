import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import type { PostMeta } from "@/lib/posts";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="glass-card group block p-6 rounded-2xl"
    >
      <article>
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-semibold group-hover:text-accent transition-colors duration-200">
            {post.title}
          </h2>
          <ArrowUpRight
            size={16}
            className="text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 mt-1 flex-shrink-0"
          />
        </div>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-sm text-muted mt-2.5 line-clamp-2 leading-relaxed">{post.excerpt}</p>
        )}

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-border/50">
          {post.date && (
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <Calendar size={12} />
              {post.date}
            </span>
          )}
          {post.readingTime && (
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <Clock size={12} />
              {post.readingTime}
            </span>
          )}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 ml-auto">
              {post.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
