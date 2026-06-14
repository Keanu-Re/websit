import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, TwitterIcon } from "@/components/Icons";
import type { LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

export const metadata: Metadata = {
  title: "联系",
  description: "与我取得联系",
};

type IconComponent = LucideIcon | ComponentType<{ size?: number } & SVGProps<SVGSVGElement>>;

const contacts: { icon: IconComponent; label: string; value: string; href: string | null; color?: string }[] = [
  {
    icon: Mail,
    label: "邮箱",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/username",
    href: "https://github.com/username",
  },
  {
    icon: TwitterIcon,
    label: "Twitter",
    value: "@username",
    href: "https://twitter.com/username",
  },
  {
    icon: MapPin,
    label: "所在地",
    value: "中国",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">联系我</h1>
      <p className="text-muted mb-12">随时欢迎交流</p>

      <div className="grid gap-4 sm:grid-cols-2 max-w-2xl stagger-children">
        {contacts.map((contact) => {
          const Icon = contact.icon;
          const content = (
            <div className="glass-card p-6 rounded-2xl group">
              <div className="flex items-center gap-4">
                <div className="icon-box">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">{contact.label}</p>
                  <p className="text-sm font-medium">{contact.value}</p>
                </div>
              </div>
            </div>
          );

          if (contact.href) {
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                {content}
              </a>
            );
          }

          return <div key={contact.label}>{content}</div>;
        })}
      </div>
    </div>
  );
}
