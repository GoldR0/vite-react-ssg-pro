import { Link } from 'react-router';
import { ArrowLeft, BookOpen } from 'lucide-react';
import type { Article } from '@/data/articles';

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link to={`/articles/${article.slug}`} className="card group overflow-hidden flex flex-col hover:-translate-y-0.5 transition-transform">
      <div className="aspect-[16/9] bg-brand-100 overflow-hidden">
        {article.cover ? (
          <img
            src={article.cover.src}
            alt={article.cover.alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-brand-600/50">
            <BookOpen className="w-14 h-14" aria-hidden />
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-brand-900 leading-snug">{article.title}</h3>
        <p className="mt-3 text-muted leading-relaxed flex-1 line-clamp-3">{article.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1 font-bold text-brand-700">
          להמשך קריאה
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
