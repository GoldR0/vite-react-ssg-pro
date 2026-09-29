import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import type { Service } from '@/data/services';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link to={`/services/${service.slug}`} className="card group p-6 flex flex-col hover:border-brand-600/40 hover:-translate-y-0.5 transition-all">
      <span className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mb-4 group-hover:bg-brand-700 group-hover:text-white transition-colors">
        <service.icon className="w-6 h-6" aria-hidden />
      </span>
      <h3 className="text-xl font-bold text-brand-900 mb-2">{service.title}</h3>
      <p className="text-muted leading-relaxed flex-1">{service.short}</p>
      <span className="mt-4 inline-flex items-center gap-1 font-bold text-brand-700">
        לפרטים נוספים
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
