import { Link, useParams } from 'react-router';
import { AlertTriangle, CircleCheck, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import ProcessSteps from '@/components/ProcessSteps';
import GalleryGrid from '@/components/GalleryGrid';
import FaqList from '@/components/FaqList';
import ContactForm from '@/components/ContactForm';
import ServiceCard from '@/components/ServiceCard';
import ArticleCard from '@/components/ArticleCard';
import CtaBanner from '@/components/CtaBanner';
import NotFound from './not-found';
import { generalSteps, getCategory, getService, servicesByCategory } from '@/data/services';
import { gallery } from '@/data/gallery';
import { articles } from '@/data/articles';
import { site, telHref, whatsappHref } from '@/data/site';
import { useDocumentTitle } from '@/lib/title';

export default function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug ?? '');
  useDocumentTitle(service?.title);

  if (!service) return <NotFound />;

  const category = getCategory(service.category);
  const images = gallery.filter((img) => img.category === service.category);
  const related = servicesByCategory(service.category).filter((s) => s.slug !== service.slug).slice(0, 3);
  const relatedArticles = articles.filter((a) => a.category === service.category).slice(0, 3);

  return (
    <>
      <PageHeader
        title={service.title}
        description={service.short}
        crumbs={[{ label: 'השירותים שלנו', href: '/services' }, { label: category.title, href: `/services#${category.key}` }, { label: service.title }]}
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href={telHref} className="btn btn-accent"><Phone className="w-5 h-5" aria-hidden />חייגו: <span dir="ltr">{site.phone}</span></a>
          <a href={whatsappHref(`שלום, אשמח לקבל הצעת מחיר ל${service.title}`)} target="_blank" rel="noopener noreferrer" className="btn btn-outline text-white">
            <FaWhatsapp className="w-5 h-5" aria-hidden />הצעת מחיר בוואטסאפ
          </a>
        </div>
      </PageHeader>

      <section className="container mx-auto px-4 lg:px-6 py-14 md:py-20 grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 items-start">
        <div>
          <div className="prose-he">
            {service.intro.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </div>

          <h2 className="mt-10 text-2xl font-extrabold text-brand-900">מה כולל השירות</h2>
          <ul className="mt-5 grid sm:grid-cols-2 gap-3">
            {service.includes.map((item) => (
              <li key={item} className="card p-4 flex gap-3">
                <CircleCheck className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {service.signs && (
            <div className="mt-10 rounded-2xl bg-accent-100 p-6 md:p-8">
              <h2 className="text-2xl font-extrabold text-brand-900 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-accent-600" aria-hidden />{service.signs.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {service.signs.items.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent-600 shrink-0 mt-2.5" aria-hidden />
                    <span className="leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <aside className="card p-6 lg:sticky lg:top-32">
          <h2 className="text-xl font-extrabold text-brand-900">קבלו הצעת מחיר</h2>
          <p className="text-muted mt-1 mb-5">השאירו פרטים ונחזור אליכם בהקדם.</p>
          <ContactForm compact defaultService={service.title} />
        </aside>
      </section>

      <section className="bg-white py-14 md:py-20 border-y border-brand-900/5">
        <div className="container mx-auto px-4 lg:px-6">
          <SectionHeading eyebrow={`תהליך העבודה - ${service.title}`} title="כך זה עובד, שלב אחר שלב" />
          <ProcessSteps steps={service.steps ?? generalSteps} />
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-6 py-14 md:py-20">
        <SectionHeading eyebrow="גלריה" title="תמונות מהשטח" />
        <GalleryGrid images={images} placeholders={3} />
      </section>

      {service.faq && (
        <section className="bg-brand-50 py-14 md:py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <SectionHeading eyebrow="שאלות נפוצות" title={`שאלות על ${service.title}`} />
            <FaqList items={service.faq} />
          </div>
        </section>
      )}

      {relatedArticles.length > 0 && (
        <section className="container mx-auto px-4 lg:px-6 py-14 md:py-20">
          <SectionHeading eyebrow="מרכז הידע" title="מאמרים בנושא" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedArticles.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="container mx-auto px-4 lg:px-6 py-14 md:py-20">
          <SectionHeading eyebrow={category.title} title="שירותים נוספים שיכולים לעניין אתכם" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="font-bold text-brand-700 hover:underline">לכל השירותים</Link>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
