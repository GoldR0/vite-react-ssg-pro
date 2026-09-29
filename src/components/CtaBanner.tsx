import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { site, telHref, whatsappHref } from '@/data/site';

export default function CtaBanner({
  title = 'צריכים פינוי? אנחנו כאן בשבילכם',
  text = 'שלחו תמונות בוואטסאפ וקבלו הערכת מחיר מהירה - בלי התחייבות ובדיסקרטיות מלאה.',
}: { title?: string; text?: string }) {
  return (
    <section className="container mx-auto px-4 lg:px-6 py-14">
      <div className="rounded-3xl bg-brand-800 text-white px-6 py-10 md:px-12 md:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold">{title}</h2>
          <p className="mt-3 text-brand-100 text-lg">{text}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a href={telHref} className="btn btn-accent text-lg">
            <Phone className="w-5 h-5" aria-hidden /><span dir="ltr">{site.phone}</span>
          </a>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp text-lg">
            <FaWhatsapp className="w-5 h-5" aria-hidden />וואטסאפ
          </a>
        </div>
      </div>
    </section>
  );
}
