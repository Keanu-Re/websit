import { ArrowRight, FileText, Layers, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Hero */}
      <section className="py-28 md:py-36 animate-fade-in-up">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Avatar */}
          <div className="relative">
            <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg animate-float ring-2 ring-border">
              <Image
                src="https://avatars.githubusercontent.com/u/57993552?v=4"
                alt="艾鸣之助"
                width={112}
                height={112}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-background" />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              你好，我是{" "}
              <span className="gradient-text">艾鸣之助</span>
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
              专注于 SLAM 算法与机器人系统开发。让机器"看见"世界，用代码构建智能。
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-4 mt-2">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              阅读博客
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-card-hover transition-colors"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="pb-24 grid gap-5 sm:grid-cols-3 stagger-children">
        <Link
          href="/blog"
          className="glass-card group p-7 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="icon-box">
              <FileText size={18} />
            </div>
            <ArrowRight
              size={16}
              className="text-muted group-hover:text-accent group-hover:translate-x-1.5 transition-all duration-300"
            />
          </div>
          <h2 className="font-semibold mb-1.5 text-lg">博客</h2>
          <p className="text-sm text-muted leading-relaxed">记录想法与学习笔记</p>
        </Link>

        <Link
          href="/projects"
          className="glass-card group p-7 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="icon-box">
              <Layers size={18} />
            </div>
            <ArrowRight
              size={16}
              className="text-muted group-hover:text-accent group-hover:translate-x-1.5 transition-all duration-300"
            />
          </div>
          <h2 className="font-semibold mb-1.5 text-lg">作品集</h2>
          <p className="text-sm text-muted leading-relaxed">做过的一些项目</p>
        </Link>

        <Link
          href="/about"
          className="glass-card group p-7 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="icon-box">
              <User size={18} />
            </div>
            <ArrowRight
              size={16}
              className="text-muted group-hover:text-accent group-hover:translate-x-1.5 transition-all duration-300"
            />
          </div>
          <h2 className="font-semibold mb-1.5 text-lg">关于</h2>
          <p className="text-sm text-muted leading-relaxed">了解更多关于我</p>
        </Link>
      </section>
    </div>
  );
}
