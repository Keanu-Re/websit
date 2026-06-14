import { ArrowRight, FileText, Layers, User } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Hero */}
      <section className="py-24 md:py-32 animate-fade-in-up">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Avatar placeholder */}
          <div className="w-24 h-24 rounded-full bg-border flex items-center justify-center text-muted text-2xl font-light">
            W
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              你好，我是 Websit
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
              一个热爱创造的人。写代码、写文字、做设计，偶尔也拍拍照。
            </p>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="pb-20 grid gap-4 sm:grid-cols-3">
        <Link
          href="/blog"
          className="group p-6 rounded-xl border border-border bg-card hover:bg-card-hover transition-colors"
        >
          <div className="flex items-center justify-between mb-3">
            <FileText size={20} className="text-muted" />
            <ArrowRight
              size={16}
              className="text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all"
            />
          </div>
          <h2 className="font-semibold mb-1">博客</h2>
          <p className="text-sm text-muted">记录想法与学习笔记</p>
        </Link>

        <Link
          href="/projects"
          className="group p-6 rounded-xl border border-border bg-card hover:bg-card-hover transition-colors"
        >
          <div className="flex items-center justify-between mb-3">
            <Layers size={20} className="text-muted" />
            <ArrowRight
              size={16}
              className="text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all"
            />
          </div>
          <h2 className="font-semibold mb-1">作品集</h2>
          <p className="text-sm text-muted">做过的一些项目</p>
        </Link>

        <Link
          href="/about"
          className="group p-6 rounded-xl border border-border bg-card hover:bg-card-hover transition-colors"
        >
          <div className="flex items-center justify-between mb-3">
            <User size={20} className="text-muted" />
            <ArrowRight
              size={16}
              className="text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all"
            />
          </div>
          <h2 className="font-semibold mb-1">关于</h2>
          <p className="text-sm text-muted">了解更多关于我</p>
        </Link>
      </section>
    </div>
  );
}
