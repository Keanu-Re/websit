import type { Metadata } from "next";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "关于",
  description: "了解更多关于我",
};

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
  "Git",
  "Figma",
];

const timeline = [
  {
    year: "2024 — 至今",
    title: "独立开发者",
    description: "专注于全栈 Web 开发，构建开源工具和个人项目。",
  },
  {
    year: "2022 — 2024",
    title: "前端工程师",
    description: "负责核心产品的用户界面开发与性能优化。",
  },
  {
    year: "2020 — 2022",
    title: "计算机科学 学士",
    description: "学习计算机科学基础，参与多个学术项目。",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">关于我</h1>
      <p className="text-muted mb-12">了解更多关于我</p>

      {/* Bio */}
      <section className="mb-14">
        <p className="text-muted leading-relaxed max-w-2xl text-lg">
          你好！我是一个热爱技术的开发者，喜欢用代码解决有趣的问题。
          工作之余，我喜欢阅读、摄影和探索新技术。
          我相信好的设计和简洁的代码可以让世界变得更好一点。
        </p>
      </section>

      {/* Skills */}
      <section className="mb-14">
        <div className="flex items-center gap-2 mb-5">
          <Sparkles size={18} className="text-accent" />
          <h2 className="text-xl font-semibold">技能</h2>
        </div>
        <div className="flex flex-wrap gap-2 stagger-children">
          {skills.map((skill) => (
            <span
              key={skill}
              className="tag-pill !text-sm !px-3.5 !py-1.5"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-xl font-semibold mb-8">经历</h2>
        <div className="relative pl-8 space-y-10">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />

          {timeline.map((item, i) => (
            <div key={item.year} className="relative animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Dot */}
              <div className="absolute -left-8 top-1.5 w-[15px] h-[15px] flex items-center justify-center">
                <div className={`w-3 h-3 rounded-full border-2 border-accent ${i === 0 ? "bg-accent" : "bg-background"}`} />
              </div>

              <div className="glass-card p-5 rounded-xl">
                <p className="text-xs text-accent font-medium mb-1.5">{item.year}</p>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
