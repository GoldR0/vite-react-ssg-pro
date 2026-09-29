import { use } from 'react';
import { Link, useParams } from 'react-router';
import PageHeader from '@/components/PageHeader';
import MarkdownBody from '@/components/MarkdownBody';
import ContactForm from '@/components/ContactForm';
import ArticleCard from '@/components/ArticleCard';
import ServiceCard from '@/components/ServiceCard';
import CtaBanner from '@/components/CtaBanner';
import NotFound from './not-found';
import { articles, formatDate, getArticle, loadArticleBody } from '@/data/articles';
import { servicesByCategory } from '@/data/services';
import { useDocumentTitle } from '@/lib/title';

// Cache so each article body is fetched once (required by use())
const bodies = new Map<string, Promise<string>>();
function getBody(slug: string) {
  if (!bodies.has(slug)) bodies.set(slug, loadArticleBody(slug));
  return bodies.get(slug)!;
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticle(slug ?? '');
  useDocumentTitle(article?.title);

  if (!article) return <NotFound />;

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const services = article.category ? servicesByCategory(article.category).slice(0, 3) : [];

  return (
    <>
      <PageHeader title={article.title} crumbs={[{ label: 'מרכז הידע', href: '/articles' }, { label: article.title }]}>
        <time dateTime={article.date} className="block mt-4 text-brand-100">{formatDate(article.date)}</time>
      </PageHeader>

      <div className="container mx-auto px-4 lg:px-6 py-12 md:py-16 grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-start">
        <article className="max-w-3xl">
          {article.cover && (
            <img src={article.cover.src} alt={article.cover.alt} className="w-full rounded-2xl mb-8 aspect-[16/9] object-cover" />
          )}
          <p className="text-xl leading-relaxed text-brand-900 font-medium mb-8">{article.excerpt}</p>
          <ArticleBody slug={article.slug} />
        </article>

        <aside className="card p-6 lg:sticky lg:top-32">
          <h2 className="text-xl font-extrabold text-brand-900">צריכים עזרה?</h2>
          <p className="text-muted mt-1 mb-5">ייעוץ ראשוני והצעת מחיר - בלי התחייבות ובדיסקרטיות.</p>
          <ContactForm compact />
        </aside>
      </div>

      {services.length > 0 && (
        <section className="bg-white py-14 border-y border-brand-900/5">
          <div className="container mx-auto px-4 lg:px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-900 mb-8">שירותים קשורים</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
            </div>
          </div>
        </section>
      )}

      {more.length > 0 && (
        <section className="container mx-auto px-4 lg:px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-900 mb-8">מאמרים נוספים</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {more.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
          <div className="text-center mt-8">
            <Link to="/articles" className="font-bold text-brand-700 hover:underline">לכל המאמרים</Link>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}

function ArticleBody({ slug }: { slug: string }) {
  return <MarkdownBody source={use(getBody(slug))} />;
}
