import type { Metadata } from "next";
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
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in-up">
      <h1 className="text-3xl font-bold tracking-tight mb-2">作品集</h1>
      <p className="text-muted mb-10">做过的一些项目</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
