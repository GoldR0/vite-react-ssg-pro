import PageHeader from '@/components/PageHeader';
import ServiceCard from '@/components/ServiceCard';
import CtaBanner from '@/components/CtaBanner';
import { categories, servicesByCategory } from '@/data/services';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="השירותים שלנו"
        description="פינוי דירות, פסולת ואגרנות כפייתית, מחסנים, ירושות - וכל השירותים הנלווים שהופכים נכס מפונה לבית נקי ומוכן."
        crumbs={[{ label: 'השירותים שלנו' }]}
      >
        <nav className="mt-8 flex flex-wrap gap-2" aria-label="קטגוריות שירות">
          {categories.map((c) => (
            <a key={c.key} href={`#${c.key}`} className="rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-sm font-medium transition-colors">
              {c.title}
            </a>
          ))}
        </nav>
      </PageHeader>

      {categories.map((cat, i) => (
        <section key={cat.key} id={cat.key} className={`scroll-mt-24 py-14 md:py-20 ${i % 2 ? 'bg-white' : ''}`}>
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex items-start gap-4 mb-8">
              <span className="w-14 h-14 rounded-2xl bg-accent-100 text-accent-600 flex items-center justify-center shrink-0">
                <cat.icon className="w-7 h-7" aria-hidden />
              </span>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-brand-900">{cat.title}</h2>
                <p className="mt-1 text-muted text-lg">{cat.description}</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {servicesByCategory(cat.key).map((s) => <ServiceCard key={s.slug} service={s} />)}
            </div>
          </div>
        </section>
      ))}

      <CtaBanner />
    </>
  );
}
