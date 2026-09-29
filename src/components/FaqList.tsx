import { Plus } from 'lucide-react';

// Native <details> accordion: works without JavaScript and in the prerendered HTML.
export default function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="grid gap-3 max-w-3xl mx-auto">
      {items.map((item) => (
        <details key={item.q} className="card group px-6 open:pb-5">
          <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none font-bold text-lg text-brand-900">
            {item.q}
            <Plus className="w-5 h-5 shrink-0 text-accent-600 transition-transform group-open:rotate-45" aria-hidden />
          </summary>
          <p className="text-muted leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
