import { ExternalLink } from "lucide-react";
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
    <div className="p-6 rounded-xl border border-border bg-card hover:bg-card-hover transition-colors">
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-sm text-muted mb-4 line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full border border-border text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors flex items-center gap-1"
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
            className="text-sm text-muted hover:text-foreground transition-colors flex items-center gap-1"
          >
            <ExternalLink size={14} />
            演示
          </a>
        )}
      </div>
    </div>
  );
}
