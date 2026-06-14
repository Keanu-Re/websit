"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/blog", label: "博客" },
  { href: "/projects", label: "作品集" },
  { href: "/about", label: "关于" },
  { href: "/contact", label: "联系" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[var(--background)]/70 border-b border-border/50">
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity flex items-center gap-2"
        >
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-foreground text-background text-xs font-bold">
            W
          </span>
          <span className="hidden sm:inline">Websit</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-foreground font-medium bg-accent-bg"
                      : "text-muted hover:text-foreground hover:bg-card-hover"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-muted hover:text-foreground transition-colors rounded-lg hover:bg-card-hover"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-[var(--background)]/95 backdrop-blur-xl animate-slide-down">
          <ul className="max-w-4xl mx-auto px-6 py-4 flex flex-col gap-1 text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2.5 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "text-foreground font-medium bg-accent-bg"
                        : "text-muted hover:text-foreground hover:bg-card-hover"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
