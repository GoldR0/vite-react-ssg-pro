import { Link } from 'react-router';
import { ArrowLeft, CircleCheck, EyeOff, HandHeart, Phone, Quote, Recycle, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ProcessSteps from '@/components/ProcessSteps';
import GalleryGrid from '@/components/GalleryGrid';
import FaqList from '@/components/FaqList';
import ArticleCard from '@/components/ArticleCard';
import CtaBanner from '@/components/CtaBanner';
import { categories, featuredServices, generalSteps, getService, servicesByCategory } from '@/data/services';
import { gallery } from '@/data/gallery';
import { faq } from '@/data/faq';
import { articles } from '@/data/articles';
import { testimonials } from '@/data/testimonials';
import { site, telHref, whatsappHref } from '@/data/site';

const whyUs = [
  { icon: EyeOff, title: 'דיסקרטיות מלאה', text: 'עבודה שקטה, ללא פרסום פרטים ואפשרות לרכב ללא שילוט.' },
  { icon: HandHeart, title: 'רגישות ויחס אנושי', text: 'ניסיון בעבודה עם דיירים ומשפחות במצבים רגישים, בסבלנות ובכבוד.' },
  { icon: ShieldCheck, title: 'שמירה על חפצי ערך', text: 'מסמכים, תמונות, כסף ותכשיטים נאספים בצד ונמסרים לכם.' },
  { icon: Recycle, title: 'פינוי לפי חוק', text: 'פסולת מועברת לאתרים מורשים, וחפצים שמישים לתרומה ולמחזור.' },
  { icon: Sparkles, title: 'הכול במקום אחד', text: 'פינוי, ניקיון יסודי, הדברה, פוליש והובלות - ספק אחד לכל התהליך.' },
  { icon: Clock, title: 'זמינות ועמידה בזמנים', text: 'מענה מהיר, הצעת מחיר ברורה ועבודה לפי לוח הזמנים שנקבע.' },
];

export default function Home() {
  const hoarding = getService('hoarding-cleanup');

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[24px_24px]" aria-hidden />
        <div className="relative container mx-auto px-4 lg:px-6 py-14 md:py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-brand-100 mb-6">
              <ShieldCheck className="w-4 h-4 text-accent-400" aria-hidden />
              שירות ב{site.serviceArea} - בדיסקרטיות מלאה
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.15] text-balance">
              פינוי דירות, פסולת <span className="text-accent-400">ואגרנות כפייתית</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-brand-100 leading-relaxed max-w-2xl">
              מחזירים לבית את הסדר, את הניקיון ואת השקט. מיון רגיש, פינוי מלא, ניקיון יסודי והדברה - בליווי אישי מהשיחה הראשונה ועד מסירת בית נקי.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-xl">
              {['הערכת מחיר מהירה לפי תמונות', 'שמירה על חפצים בעלי ערך', 'צוות מנוסה במצבים רגישים', 'ניקיון והדברה לאחר הפינוי'].map((t) => (
                <li key={t} className="flex items-center gap-2 text-brand-50">
                  <CircleCheck className="w-5 h-5 text-accent-400 shrink-0" aria-hidden />{t}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href={telHref} className="btn btn-accent text-lg"><Phone className="w-5 h-5" aria-hidden />חייגו: <span dir="ltr">{site.phone}</span></a>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-outline text-white text-lg">
                <FaWhatsapp className="w-5 h-5" aria-hidden />שלחו תמונות בוואטסאפ
              </a>
            </div>
          </div>

          <div className="card p-6 md:p-8 text-ink">
            <h2 className="text-2xl font-extrabold text-brand-900">לתיאום פינוי - השאירו פרטים</h2>
            <p className="text-muted mt-1 mb-5">נחזור אליכם עם הצעת מחיר בהקדם.</p>
            <ContactForm compact />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 lg:px-6 -mt-px py-16 md:py-20">
        <SectionHeading eyebrow="כל שירותי הפינוי במקום אחד" title="במה אנחנו יכולים לעזור?" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link key={cat.key} to={`/services#${cat.key}`} className="card group p-6 hover:border-brand-600/40 transition-colors">
              <cat.icon className="w-9 h-9 text-accent-600 mb-4" aria-hidden />
              <h3 className="font-bold text-lg text-brand-900 mb-2">{cat.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Hoarding spotlight */}
      <section className="bg-brand-50 py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="eyebrow">ההתמחות שלנו</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 leading-tight">אגרנות כפייתית: יותר מפינוי - החזרת הבית לחיים</h2>
            {hoarding.intro.map((p) => <p key={p.slice(0, 20)} className="mt-5 text-lg text-muted leading-relaxed">{p}</p>)}
            <Link to="/services/hoarding-cleanup" className="btn btn-brand mt-8">
              איך אנחנו מטפלים באגרנות כפייתית
              <ArrowLeft className="w-5 h-5" aria-hidden />
            </Link>
          </div>
          <div className="card p-6 md:p-8">
            <h3 className="text-xl font-bold text-brand-900 mb-5">{hoarding.signs.title}</h3>
            <ul className="space-y-3.5">
              {hoarding.signs.items.map((s) => (
                <li key={s} className="flex gap-3">
                  <CircleCheck className="w-5 h-5 text-brand-600 shrink-0 mt-1" aria-hidden />
                  <span className="text-ink leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted border-t border-brand-900/10 pt-4">
              מזהים את הסימנים אצל אדם קרוב? אפשר להתייעץ איתנו בדיסקרטיות ובלי התחייבות.
            </p>
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="container mx-auto px-4 lg:px-6 py-16 md:py-24">
        <SectionHeading eyebrow="השירותים שלנו" title="שירותי פינוי מקצועיים" description="מפינוי דירה אחת ועד בתים עמוסים במיוחד - עם צוות מקצועי, רכבים מתאימים ופינוי לאתרים מורשים." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredServices.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="btn btn-brand">לכל השירותים<ArrowLeft className="w-5 h-5" aria-hidden /></Link>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 md:py-24 border-y border-brand-900/5">
        <div className="container mx-auto px-4 lg:px-6">
          <SectionHeading eyebrow="איך זה עובד" title="שלושה שלבים לבית נקי ומסודר" />
          <ProcessSteps steps={generalSteps} />
        </div>
      </section>

      {/* Gallery preview */}
      <section className="container mx-auto px-4 lg:px-6 py-16 md:py-24">
        <SectionHeading eyebrow="לפני ואחרי" title="מהשטח: עבודות שביצענו" description="תמונות אמיתיות מפרויקטים של פינוי דירות, פסולת ובתים עם אגרנות כפייתית." />
        <GalleryGrid images={gallery.slice(0, 6)} />
        <div className="text-center mt-10">
          <Link to="/gallery" className="btn btn-brand">לגלריה המלאה<ArrowLeft className="w-5 h-5" aria-hidden /></Link>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <SectionHeading light eyebrow="למה לבחור בנו" title={`מה מייחד את ${site.name}`} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <item.icon className="w-8 h-8 text-accent-400 mb-4" aria-hidden />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-brand-100 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complementary services */}
      <section className="container mx-auto px-4 lg:px-6 py-16 md:py-24">
        <SectionHeading eyebrow="שירותים נלווים" title="כל מה שהבית צריך אחרי הפינוי" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {servicesByCategory('extras').map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="card group p-5 text-center hover:border-brand-600/40 transition-colors">
              <span className="w-14 h-14 mx-auto rounded-full bg-accent-100 text-accent-600 flex items-center justify-center mb-3 group-hover:bg-accent-500 group-hover:text-brand-950 transition-colors">
                <s.icon className="w-7 h-7" aria-hidden />
              </span>
              <h3 className="font-bold text-brand-900">{s.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials (hidden until real ones are added) */}
      {testimonials.length > 0 && (
        <section className="bg-brand-50 py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-6">
            <SectionHeading eyebrow="המלצות" title="לקוחות מספרים" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <figure key={t.name + t.text.slice(0, 10)} className="card p-6">
                  <Quote className="w-8 h-8 text-accent-500 mb-3" aria-hidden />
                  <blockquote className="text-ink leading-relaxed">{t.text}</blockquote>
                  <figcaption className="mt-4 font-bold text-brand-900">
                    {t.name}{t.detail && <span className="font-normal text-muted"> - {t.detail}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24 border-y border-brand-900/5">
        <div className="container mx-auto px-4 lg:px-6">
          <SectionHeading eyebrow="שאלות נפוצות" title="שאלות ששואלים אותנו" />
          <FaqList items={faq} />
        </div>
      </section>

      {/* Articles */}
      {articles.length > 0 && (
        <section className="container mx-auto px-4 lg:px-6 py-16 md:py-24">
          <SectionHeading eyebrow="מרכז הידע" title="מאמרים ומדריכים" description="מידע מקצועי על אגרנות כפייתית, פינוי דירות והתמודדות משפחתית." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.slice(0, 3).map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/articles" className="btn btn-brand">לכל המאמרים<ArrowLeft className="w-5 h-5" aria-hidden /></Link>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
