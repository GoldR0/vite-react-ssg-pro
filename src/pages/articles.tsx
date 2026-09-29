import { BookOpen } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ArticleCard from '@/components/ArticleCard';
import CtaBanner from '@/components/CtaBanner';
import { articles } from '@/data/articles';

export default function ArticlesPage() {
  return (
    <>
      <PageHeader
        title="מרכז הידע"
        description="מאמרים ומדריכים על אגרנות כפייתית, פינוי דירות, פינוי ירושות והתמודדות של משפחות עם בית עמוס."
        crumbs={[{ label: 'מרכז הידע' }]}
      />
      <section className="container mx-auto px-4 lg:px-6 py-14 md:py-20">
        {articles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        ) : (
          <div className="text-center py-16 text-muted">
            <BookOpen className="w-14 h-14 mx-auto mb-4 text-brand-600/50" aria-hidden />
            <p className="text-lg">מאמרים חדשים יעלו בקרוב.</p>
          </div>
        )}
      </section>
      <CtaBanner />
    </>
  );
}
