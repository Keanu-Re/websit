# Websit 项目记忆

## 技术栈
- Next.js 16 App Router + TypeScript + Tailwind CSS
- 博客: gray-matter + remark + remark-html (本地 Markdown)
- 图标: lucide-react (注意: v0.5+ 已移除 Github/Twitter，使用自定义 Icons.tsx)

## 项目结构
- `app/` — 页面路由 (首页/博客/作品集/关于/联系)
- `components/` — Header, Footer, BlogCard, ProjectCard, MarkdownRenderer, Icons
- `content/blog/` — Markdown 博客文章
- `lib/posts.ts` — 博客解析工具

## 设计规范
- 简约极简，黑白灰为主，slate-blue 强调色
- Inter/Geist 字体，大量留白，微妙淡入动画
- 响应式适配，移动端汉堡菜单

## 已知问题
- lucide-react 新版无 Github/Twitter 图标，需用自定义 SVG
