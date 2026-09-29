import { Link } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  /** Breadcrumb trail after "דף הבית"; the last item is the current page */
  crumbs: { label: string; href?: string }[];
  children?: ReactNode;
}

export default function PageHeader({ title, description, crumbs, children }: PageHeaderProps) {
  return (
    <section className="bg-brand-900 text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12 md:py-16">
        <nav aria-label="פירורי לחם" className="mb-5 text-sm text-brand-100/80">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link to="/" className="hover:text-white">דף הבית</Link></li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1">
                <ChevronLeft className="w-4 h-4" aria-hidden />
                {c.href ? <Link to={c.href} className="hover:text-white">{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl text-balance">{title}</h1>
        {description && <p className="mt-4 text-lg md:text-xl text-brand-100 max-w-3xl leading-relaxed">{description}</p>}
        {children}
      </div>
    </section>
  );
}
