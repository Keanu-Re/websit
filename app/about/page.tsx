import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles, Cpu, Bot, Wrench, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "关于",
  description: "了解更多关于我",
};

const skillCategories = [
  {
    icon: Cpu,
    title: "SLAM 算法",
    items: [
      "激光雷达 · 视觉 · IMU · 多传感器融合",
      "VINS · ORB-SLAM · Cartographer · FAST-LIO",
      "G2O · Ceres 图优化与非线性优化",
    ],
  },
  {
    icon: Bot,
    title: "ROS 开发",
    items: [
      "RVIZ · Gazebo 仿真与可视化",
      "C++ / Python ROS 工程开发",
      "远程调试与数据回放工具链",
    ],
  },
  {
    icon: Wrench,
    title: "工程能力",
    items: [
      "PX4 飞控 · 仿真系统搭建",
      "嵌入式平台算法部署与优化",
      "单片机 & Linux · Git & Shell",
    ],
  },
  {
    icon: BookOpen,
    title: "语言与学术",
    items: [
      "英语六级 · 阅读前沿算法论文",
      "C++ · Python · Linux Shell",
    ],
  },
];

const projects = [
  {
    year: "2024 — 2025",
    title: "室内巡检无人机算法开发",
    tags: ["PX4", "FAST-LIO", "EGO-Planner", "RK3399"],
    highlights: [
      "搭建仿真系统，完成仿真验证与数据回放分析",
      "模块化重构 FAST-LIO，在嵌入式平台实现 10Hz 稳定定位",
      "集成 EGO-Planner，打通感知—规划—控制全流程",
      "主导闭环检测与回环优化，显著减少累积误差",
    ],
  },
  {
    year: "2023 — 2024",
    title: "扫地机器人 SLAM 算法开发",
    tags: ["视觉里程计", "多传感器融合", "ROS"],
    highlights: [
      "双目视觉里程计，融合激光数据实现三维环境感知",
      "视觉+激光融合定位，解决弱纹理场景定位难题",
      "设计避障环检测策略，保障失效场景稳定性",
      "独立开发远程调试工具，支持动态参数配置与数据回放",
    ],
  },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-accent mt-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3,8 6.5,11.5 13,4.5" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">关于我</h1>
      <p className="text-muted mb-12">专注于机器人感知与 SLAM 算法领域</p>

      {/* Bio */}
      <section className="mb-14 flex flex-col sm:flex-row items-start gap-8">
        <div className="w-24 h-24 rounded-full overflow-hidden shadow-md ring-2 ring-border flex-shrink-0">
          <Image
            src="https://avatars.githubusercontent.com/u/57993552?v=4"
            alt="艾鸣之助"
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">艾鸣之助</h2>
          <p className="text-muted leading-relaxed text-lg">
            你好！我是一名专注于 <strong className="text-foreground">SLAM 算法</strong> 与{" "}
            <strong className="text-foreground">机器人系统开发</strong> 的工程师。
            从传感器融合到后端优化，从仿真验证到嵌入式落地，
            我享受用算法让机器"看见"世界的过程。
          </p>
        </div>
      </section>

      {/* Skills by category */}
      <section className="mb-14">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles size={18} className="text-accent" />
          <h2 className="text-xl font-semibold">技术栈</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 stagger-children">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="glass-card p-5 rounded-xl">
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="icon-box !w-9 !h-9 !rounded-lg">
                  <cat.icon size={16} />
                </div>
                <h3 className="font-semibold text-sm">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-accent mt-1.5 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Project Experience */}
      <section>
        <div className="flex items-center gap-2 mb-8">
          <Sparkles size={18} className="text-accent" />
          <h2 className="text-xl font-semibold">项目经历</h2>
        </div>

        <div className="relative pl-8 space-y-10">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />

          {projects.map((project, i) => (
            <div
              key={project.year}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Dot */}
              <div className="absolute -left-8 top-1.5 w-[15px] h-[15px] flex items-center justify-center">
                <div className={`w-3 h-3 rounded-full border-2 border-accent ${i === 0 ? "bg-accent" : "bg-background"}`} />
              </div>

              <div className="glass-card p-6 rounded-xl">
                <p className="text-xs text-accent font-medium">{project.year}</p>
                <h3 className="font-semibold text-base mt-0.5 mb-2">{project.title}</h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill !text-xs !py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
                      <CheckIcon />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
