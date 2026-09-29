import { Link, NavLink } from 'react-router';
import { useEffect, useState } from 'react';
import { ChevronDown, Clock, MapPin, Menu, Phone, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Logo from './Logo';
import { categories, servicesByCategory } from '@/data/services';
import { site, telHref, whatsappHref } from '@/data/site';

const navLinks = [
  { name: 'גלריה', href: '/gallery' },
  { name: 'מרכז הידע', href: '/articles' },
  { name: 'אודות', href: '/about' },
  { name: 'יצירת קשר', href: '/contact' },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-lg font-medium transition-colors ${isActive ? 'text-brand-700 bg-brand-50' : 'text-ink hover:text-brand-700 hover:bg-brand-50'}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden md:block bg-brand-900 text-brand-100 text-sm">
        <div className="container mx-auto px-4 lg:px-6 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" aria-hidden />{site.hours}</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" aria-hidden />שירות ב{site.serviceArea}</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
              <FaWhatsapp className="w-4 h-4" aria-hidden />וואטסאפ
            </a>
            <a href={telHref} className="flex items-center gap-1.5 hover:text-white" dir="ltr">
              {site.phone}<Phone className="w-4 h-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <nav className="bg-white/95 backdrop-blur border-b border-brand-900/10" aria-label="ניווט ראשי">
        <div className="relative container mx-auto px-4 lg:px-6 h-18 flex items-center justify-between gap-4">
          <Logo onClick={close} />

          <div className="hidden lg:flex self-stretch items-center gap-1">
            <NavLink to="/" end className={linkClass}>דף הבית</NavLink>

            {/* Services mega menu (opens on hover and keyboard focus) */}
            <div className="group self-stretch flex items-center">
              <NavLink to="/services" className={(s) => `${linkClass(s)} flex items-center gap-1`}>
                השירותים שלנו
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden />
              </NavLink>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity absolute top-full inset-x-4 lg:inset-x-6">
                <div className="card p-6 grid grid-cols-5 gap-6">
                  {categories.map((cat) => (
                    <div key={cat.key}>
                      <Link to={`/services#${cat.key}`} className="flex items-center gap-2 font-bold text-brand-800 hover:text-brand-600 mb-3">
                        <cat.icon className="w-5 h-5 text-accent-600" aria-hidden />
                        {cat.title}
                      </Link>
                      <ul className="space-y-1.5">
                        {servicesByCategory(cat.key).map((s) => (
                          <li key={s.slug}>
                            <Link to={`/services/${s.slug}`} className="text-sm text-muted hover:text-brand-700">{s.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((l) => (
              <NavLink key={l.href} to={l.href} className={linkClass}>{l.name}</NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href={telHref} className="btn btn-accent hidden sm:inline-flex py-2.5 px-4">
              <Phone className="w-4 h-4" aria-hidden />
              <span dir="ltr">{site.phone}</span>
            </a>
            <button
              className="lg:hidden p-2 rounded-lg text-brand-900 hover:bg-brand-50"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'סגירת תפריט' : 'פתיחת תפריט'}
              aria-expanded={open}
            >
              {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-x-0 bottom-0 top-18 md:top-27 bg-white overflow-y-auto overscroll-contain z-40">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-1 text-lg">
            <Link to="/" onClick={close} className="py-3 border-b border-brand-900/10 font-medium">דף הבית</Link>
            <Link to="/services" onClick={close} className="py-3 font-medium">השירותים שלנו</Link>
            {categories.map((cat) => (
              <details key={cat.key} className="group border-b border-brand-900/10">
                <summary className="flex items-center justify-between py-2.5 ps-3 cursor-pointer list-none text-base text-brand-800 font-medium">
                  <span className="flex items-center gap-2"><cat.icon className="w-5 h-5 text-accent-600" aria-hidden />{cat.title}</span>
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <ul className="pb-3 ps-10 space-y-2">
                  {servicesByCategory(cat.key).map((s) => (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`} onClick={close} className="block text-base text-muted py-1">{s.title}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
            {navLinks.map((l) => (
              <Link key={l.href} to={l.href} onClick={close} className="py-3 border-b border-brand-900/10 font-medium">{l.name}</Link>
            ))}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <a href={telHref} className="btn btn-accent"><Phone className="w-5 h-5" aria-hidden />חייגו</a>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><FaWhatsapp className="w-5 h-5" aria-hidden />וואטסאפ</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
