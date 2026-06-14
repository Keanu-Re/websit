import { Mail } from "lucide-react";
import { GithubIcon, TwitterIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="text-sm font-medium">&copy; {new Date().getFullYear()} Websit</p>
          <p className="text-xs text-muted">用代码构建，以热爱驱动</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-box !w-9 !h-9 !rounded-lg"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-box !w-9 !h-9 !rounded-lg"
            aria-label="Twitter"
          >
            <TwitterIcon size={16} />
          </a>
          <a
            href="mailto:hello@example.com"
            className="icon-box !w-9 !h-9 !rounded-lg"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
