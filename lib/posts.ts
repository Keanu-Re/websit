import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

interface RawPostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  rawContent: string;
  readingTime: string;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function calculateReadingTime(text: string): string {
  // 中文约 400 字/分钟，英文约 200 词/分钟，取混合平均值
  const charCount = text.length;
  const minutes = Math.max(1, Math.ceil(charCount / 400));
  return `${minutes} 分钟`;
}

function parseRawPost(slug: string): RawPostData | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ? new Date(data.date).toISOString().slice(0, 10) : "",
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    rawContent: content,
    readingTime: calculateReadingTime(content),
  };
}

export async function getPostWithHtml(slug: string): Promise<Post | null> {
  const raw = parseRawPost(slug);
  if (!raw) return null;

  const processed = await remark().use(html).process(raw.rawContent);

  return {
    slug: raw.slug,
    title: raw.title,
    date: raw.date,
    excerpt: raw.excerpt,
    tags: raw.tags,
    readingTime: raw.readingTime,
    contentHtml: processed.toString(),
  };
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();
  return slugs
    .map((slug) => {
      const raw = parseRawPost(slug);
      if (!raw) return null;
      return {
        slug: raw.slug,
        title: raw.title,
        date: raw.date,
        excerpt: raw.excerpt,
        tags: raw.tags,
        readingTime: raw.readingTime,
      };
    })
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
