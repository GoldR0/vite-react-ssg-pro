import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import { site, telHref, whatsappHref } from '@/data/site';

export default function ContactPage() {
  const items = [
    { icon: Phone, label: 'טלפון', value: site.phone, href: telHref, ltr: true },
    { icon: FaWhatsapp, label: 'וואטסאפ', value: 'שליחת הודעה ותמונות', href: whatsappHref() },
    { icon: Mail, label: 'אימייל', value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: 'אזורי שירות', value: site.serviceArea },
    { icon: Clock, label: 'שעות פעילות', value: site.hours },
  ];

  return (
    <>
      <PageHeader
        title="יצירת קשר"
        description="ספרו לנו מה צריך לפנות ונחזור אליכם עם הצעת מחיר. הכי מהיר: לשלוח תמונות של הנכס בוואטסאפ."
        crumbs={[{ label: 'יצירת קשר' }]}
      />
      <section className="container mx-auto px-4 lg:px-6 py-14 md:py-20 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
        <ul className="grid gap-4">
          {items.map((item) => {
            const content = (
              <>
                <span className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm text-muted">{item.label}</span>
                  <span className="block font-bold text-brand-900 text-lg" dir={item.ltr ? 'ltr' : undefined}>{item.value}</span>
                </span>
              </>
            );
            return (
              <li key={item.label}>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="card p-5 flex items-center gap-4 hover:border-brand-600/40 transition-colors">
                    {content}
                  </a>
                ) : (
                  <div className="card p-5 flex items-center gap-4">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
        <div className="card p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-brand-900 mb-6">השאירו פרטים</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
