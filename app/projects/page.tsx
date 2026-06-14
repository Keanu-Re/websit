import type { Metadata } from "next";
import { Layers } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import type { ProjectData } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "作品集",
  description: "做过的一些项目",
};

const projects: ProjectData[] = [
  {
    title: "项目一",
    description:
      "一个基于 Next.js 的全栈 Web 应用，实现了用户认证、数据管理和实时通知功能。",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "项目二",
    description:
      "一个开源的 CLI 工具，用于自动化常见的开发工作流，提升团队效率。",
    tags: ["Node.js", "CLI", "开源"],
    github: "https://github.com",
  },
  {
    title: "项目三",
    description:
      "一个移动端优先的响应式设计系统，包含 30+ 可复用组件。",
    tags: ["React", "Tailwind CSS", "设计系统"],
    demo: "https://example.com",
  },
];

export default function ProjectsPage() {
  // 收集所有技术栈标签
  const allTechTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in-up">
      <div className="flex items-start justify-between mb-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">作品集</h1>
        <span className="text-xs text-muted mt-2">{projects.length} 个项目</span>
      </div>
      <p className="text-muted mb-8">做过的一些项目</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {allTechTags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 stagger-children">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
        >
          <Layers size={16} />
          在 GitHub 上查看更多
        </a>
      </div>
    </div>
  );
}
