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
    title: "SLAM 算法开发",
    items: [
      "激光雷达 · 视觉相机 · IMU · 轮速计 · RTK",
      "VINS · ORB-SLAM · Cartographer · FAST-LIO",
      "G2O · Ceres 非线性优化与图优化",
    ],
  },
  {
    icon: Bot,
    title: "ROS 开发",
    items: [
      "RVIZ · Gazebo 仿真与可视化工具",
      "Ubuntu 下 C++ / Python 的 ROS 开发",
    ],
  },
  {
    icon: Wrench,
    title: "工程能力",
    items: [
      "Git & Shell 脚本 · 自动化构建",
      "嵌入式单片机 & 嵌入式 Linux 开发",
      "嵌入式平台快速部署算法",
    ],
  },
  {
    icon: BookOpen,
    title: "语言与学术",
    items: [
      "英语六级 · 流畅阅读前沿算法论文",
      "C++ · Python · Linux Shell",
    ],
  },
];

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
    </div>
  );
}
