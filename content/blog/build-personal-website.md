---
title: "个人网站搭建全记录"
date: 2026-06-14
excerpt: "从零开始，用 Next.js 16 + TypeScript + Tailwind CSS v4 搭建并部署一个极简个人网站的全过程。"
tags: ["建站", "Next.js", "GitHub Pages"]
---

## 技术选型

这个网站的核心技术栈：

- **Next.js 16** — App Router + SSG 静态导出
- **React 19** + **TypeScript** — 类型安全的 UI 开发
- **Tailwind CSS v4** — 原子化样式，快速开发
- **gray-matter + remark** — Markdown 博客解析链路
- **GitHub Pages + Actions** — 自动构建部署

选择 Next.js 而不是纯静态站点，是因为 App Router 的文件路由、动态路由静态生成、`next/image` 图片优化等功能可以大幅减少样板代码。

## 项目结构

```
websit/
├── app/              # 页面路由
│   ├── page.tsx      # 首页
│   ├── blog/         # 博客列表 + 详情
│   ├── projects/     # 作品集
│   ├── about/        # 关于我
│   └── contact/      # 联系方式
├── components/       # 可复用组件
├── content/blog/     # Markdown 文章
├── lib/posts.ts      # 博客数据层
└── .github/workflows/ # CI/CD
```

架构原则：**Server Components 优先**，只有 `Header.tsx` 使用 `"use client"`（移动端菜单需要状态管理）。

## 关键配置

`next.config.ts` 是部署的核心：

```typescript
const nextConfig: NextConfig = {
  output: "export",       // SSG 静态导出，GitHub Pages 需要
  basePath: "/websit",    // 仓库名对应子路径
  images: {
    unoptimized: true,    // 静态导出不支持图片优化 API
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
};
```

每个配置都有明确原因——`output: "export"` 因为 GitHub Pages 不能运行 Node；`basePath` 因为 URL 是 `username.github.io/websit/`；`unoptimized` 因为静态导出模式图片优化不可用。

## 博客系统

文章放在 `content/blog/` 目录，使用 Markdown + frontmatter 管理：

```markdown
---
title: "文章标题"
date: 2026-06-14
excerpt: "文章摘要"
tags: ["标签1", "标签2"]
---

正文内容...
```

数据层 `lib/posts.ts` 封装了三个核心接口：

- `getAllPostSlugs()` — 获取所有文章 slug
- `getAllPosts()` — 获取所有文章元信息（列表页用）
- `getPostWithHtml(slug)` — 获取单篇文章含 HTML（详情页用）

还实现了基于字数的阅读时间估算：

```typescript
function calculateReadingTime(text: string): string {
  const charCount = text.length;
  const minutes = Math.max(1, Math.ceil(charCount / 400));
  return `${minutes} 分钟`;
}
```

动态路由通过 `generateStaticParams` 在构建时预生成所有博客页面，无需服务端渲染。

## UI 设计体系

### 色彩

黑白灰为主，slate-blue 强调色，浅色/深色模式自动跟随系统。

### CSS 工具类

| 类名 | 效果 |
|------|------|
| `glass-card` | 白底 + 边框 + 微阴影 + hover 上浮 |
| `tag-pill` | 圆角胶囊标签 + hover 变色 |
| `icon-box` | 圆角方框图标容器 |
| `gradient-text` | 渐变文字 |
| `stagger-children` | 子元素依次入场动画 |

### 动画

- `fadeInUp` — 页面入场
- `float` — 首页头像浮动
- `slideDown` — 移动端菜单展开
- `scaleIn` — 弹出元素

## 部署流程

```
git push origin main
  → GitHub Actions 触发
  → npm ci → npm run build → 上传产物
  → 部署到 GitHub Pages
  → 1-2 分钟后线上生效
```

GitHub Pages 需要在 Settings → Pages → Source 选择 **GitHub Actions**（默认是 "Deploy from a branch"，需要手动切换）。

## 踩坑记录

### lucide-react 品牌图标被移除

v0.5+ 移除了 `Github`、`Twitter` 等品牌图标。解决方式是创建 `components/Icons.tsx`，手写 SVG 路径。

### GitHub Pages 首次部署 404

推送后访问显示 404，原因是 GitHub Pages 默认 Source 不是 GitHub Actions，需要手动切换。

### 本地预览 404

`npm run dev` 后直接访问 `localhost:3000` 会 404，因为配置了 `basePath: "/websit"`，需要访问 `localhost:3000/websit`。

### 资源路径 404

部署后 CSS/JS 全部 404，因为缺少 `basePath` 配置。添加 `basePath: "/websit"` 后解决。

### 类型断言问题

`parseRawPost` 可能返回 `null`，使用 `RawPostData` 中间接口 + 类型守卫 `.filter((p): p is PostMeta => p !== null)` 解决。

## 后续规划

- 深色模式手动切换开关
- SEO 优化（Open Graph、sitemap）
- 评论系统（Giscus）
- RSS 订阅
- 搜索功能
- 更多博客文章

---

*搭建一个个人网站不需要太多时间，但维护和持续输出内容才是真正的挑战。*
