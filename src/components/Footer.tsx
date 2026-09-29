import { Link } from 'react-router';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Logo from './Logo';
import { getService, servicesByCategory } from '@/data/services';
import { site, telHref, whatsappHref } from '@/data/site';

const quickLinks = [
  'hoarding-cleanup', 'apartment-clearance', 'neglected-apartment', 'deceased-apartment', 'inheritance-clearance', 'waste-removal',
];

export default function Footer() {
  const extras = servicesByCategory('extras');

  return (
    <footer className="bg-brand-950 text-brand-100 pb-20 md:pb-0">
      <div className="container mx-auto px-4 lg:px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-brand-100/80">{site.description}</p>
        </div>

        <FooterList
          title="שירותים מובילים"
          links={quickLinks.map((slug) => ({ href: `/services/${slug}`, label: getService(slug).title }))}
        />

        <FooterList title="שירותים נלווים" links={extras.map((s) => ({ href: `/services/${s.slug}`, label: s.title }))} />

        <div>
          <h2 className="font-bold text-white mb-4">יצירת קשר</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={telHref} className="flex items-center gap-2 hover:text-white">
                <Phone className="w-4 h-4 text-accent-400" aria-hidden /><span dir="ltr">{site.phone}</span>
              </a>
            </li>
            <li>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                <FaWhatsapp className="w-4 h-4 text-accent-400" aria-hidden />שליחת הודעה בוואטסאפ
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="w-4 h-4 text-accent-400" aria-hidden />{site.email}
              </a>
            </li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent-400" aria-hidden />שירות ב{site.serviceArea}</li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent-400" aria-hidden />{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-6 py-5 flex flex-col sm:flex-row gap-3 justify-between text-sm text-brand-100/70">
          <span>© {new Date().getFullYear()} {site.name}. כל הזכויות שמורות.</span>
          <nav className="flex gap-5" aria-label="קישורים נוספים">
            <Link to="/services" className="hover:text-white">שירותים</Link>
            <Link to="/gallery" className="hover:text-white">גלריה</Link>
            <Link to="/articles" className="hover:text-white">מרכז הידע</Link>
            <Link to="/contact" className="hover:text-white">יצירת קשר</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="font-bold text-white mb-4">{title}</h2>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}><Link to={l.href} className="hover:text-white">{l.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
