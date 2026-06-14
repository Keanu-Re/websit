interface MarkdownRendererProps {
  contentHtml: string;
}

export default function MarkdownRenderer({ contentHtml }: MarkdownRendererProps) {
  return (
    <div
      className="prose prose-neutral max-w-none"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
