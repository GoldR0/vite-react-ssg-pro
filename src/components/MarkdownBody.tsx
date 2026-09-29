import type { ReactNode } from 'react';

// Minimal Markdown renderer for article text (see the format notes in src/data/articles.ts).
// Supports: ## / ### headings, - bullets, 1. numbered lists, **bold**, ![alt](src) images, paragraphs.

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part,
  );
}

export default function MarkdownBody({ source }: { source: string }) {
  const blocks = source.trim().split(/\n\s*\n/);

  return (
    <div className="prose-he">
      {blocks.map((block, i) => {
        const lines = block.trim().split('\n').map((l) => l.trim());
        const first = lines[0];

        if (first.startsWith('### ')) return <h3 key={i}>{inline(first.slice(4))}</h3>;
        if (first.startsWith('## ')) return <h2 key={i}>{inline(first.slice(3))}</h2>;

        const image = first.match(/^!\[(.*)\]\((.+)\)$/);
        if (image) {
          return (
            <figure key={i}>
              <img src={image[2]} alt={image[1]} loading="lazy" decoding="async" />
              {image[1] && <figcaption>{image[1]}</figcaption>}
            </figure>
          );
        }

        if (lines.every((l) => l.startsWith('- '))) {
          return <ul key={i}>{lines.map((l, j) => <li key={j}>{inline(l.slice(2))}</li>)}</ul>;
        }
        if (lines.every((l) => /^\d+\.\s/.test(l))) {
          return <ol key={i}>{lines.map((l, j) => <li key={j}>{inline(l.replace(/^\d+\.\s/, ''))}</li>)}</ol>;
        }

        return <p key={i}>{inline(lines.join(' '))}</p>;
      })}
    </div>
  );
}
