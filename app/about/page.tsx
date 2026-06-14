import type { Metadata } from "next";

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
      <h1 className="text-3xl font-bold tracking-tight mb-2">关于我</h1>
      <p className="text-muted mb-10">了解更多关于我</p>

      {/* Bio */}
      <section className="mb-12">
        <p className="text-muted leading-relaxed max-w-2xl">
          你好！我是一个热爱技术的开发者，喜欢用代码解决有趣的问题。
          工作之余，我喜欢阅读、摄影和探索新技术。
          我相信好的设计和简洁的代码可以让世界变得更好一点。
        </p>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">技能</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-sm px-3 py-1 rounded-full border border-border text-muted hover:text-foreground hover:border-foreground/20 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-xl font-semibold mb-6">经历</h2>
        <div className="relative pl-6 border-l-2 border-border space-y-8">
          {timeline.map((item) => (
            <div key={item.year} className="relative">
              <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-border" />
              <p className="text-xs text-muted mb-1">{item.year}</p>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
