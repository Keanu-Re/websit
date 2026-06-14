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
    title: "室内巡检无人机 SLAM 系统",
    description:
      "基于 FAST-LIO 的定位建图系统，集成 EGO-Planner 轨迹规划，在嵌入式平台实现实时感知—规划—控制闭环。",
    tags: ["FAST-LIO", "EGO-Planner", "PX4", "RK3399", "ROS"],
  },
  {
    title: "扫地机器人视觉 SLAM",
    description:
      "双目视觉里程计 + 多传感器融合定位，解决弱纹理场景定位难题，开发远程调试工具链。",
    tags: ["双目视觉", "多传感器融合", "ROS", "C++"],
  },
  {
    title: "更多项目",
    description: "持续探索中，敬请期待。",
    tags: ["Coming Soon"],
  },
];

export default function ProjectsPage() {
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
          href="https://github.com/Keanu-Re"
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
