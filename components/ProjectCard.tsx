import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export default function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <div className="glass-card p-7 rounded-2xl group flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>
        <ArrowUpRight
          size={16}
          className="text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 mt-1 flex-shrink-0"
        />
      </div>
      <p className="text-sm text-muted mb-5 line-clamp-3 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-auto pt-2 border-t border-border/50">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent transition-colors flex items-center gap-1.5"
          >
            <GithubIcon size={14} />
            源码
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent transition-colors flex items-center gap-1.5"
          >
            <ExternalLink size={14} />
            演示
          </a>
        )}
      </div>
    </div>
  );
}
