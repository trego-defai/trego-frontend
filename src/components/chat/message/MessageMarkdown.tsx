import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

interface MessageMarkdownProps {
  children: string;
}

export function MessageMarkdown({ children }: MessageMarkdownProps) {
  return (
    <div className="prose prose-sm max-w-none dark:prose-invert prose-pre:bg-muted prose-pre:border prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none break-words overflow-wrap-anywhere">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw]}
        components={{
          p: ({ children }) => (
            <p className="mb-2 last:mb-0 break-words whitespace-pre-line leading-relaxed">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="my-2 pl-4 whitespace-pre-line leading-relaxed">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-2 pl-4 whitespace-pre-line leading-relaxed">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="mb-1 whitespace-pre-line leading-relaxed ">{children}</li>
          ),
          code: ({ children, className }) => {
            const isInline = !className;
            return isInline ? (
              <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono whitespace-pre-line leading-relaxed">
                {children}
              </code>
            ) : (
              <code className={className} style={{ whiteSpace: "pre-line" }}>
                {children}
              </code>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
