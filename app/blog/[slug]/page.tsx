import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { getAllPostSlugs, getPostWithHtml } from "@/lib/posts";
import MarkdownRenderer from "@/components/MarkdownRenderer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostWithHtml(slug);
  if (!post) return { title: "未找到" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostWithHtml(slug);

  if (!post) notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in-up">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors mb-10 group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
        返回博客
      </Link>

      <article>
        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            {post.date && (
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </span>
            )}
            {post.readingTime && (
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readingTime}
              </span>
            )}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 ml-1">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    <Tag size={10} className="inline mr-0.5" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <MarkdownRenderer contentHtml={post.contentHtml} />
      </article>
    </div>
  );
}
