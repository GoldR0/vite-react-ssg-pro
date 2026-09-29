import { Link } from 'react-router';
import { HeartHandshake } from 'lucide-react';
import { site } from '@/data/site';

export default function Logo({ light = false, onClick }: { light?: boolean; onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-2.5 shrink-0" aria-label={`${site.name} - דף הבית`}>
      <span className="w-10 h-10 rounded-xl bg-accent-500 text-brand-950 flex items-center justify-center">
        <HeartHandshake className="w-6 h-6" aria-hidden />
      </span>
      <span className="leading-tight">
        <span className={`block text-lg font-extrabold ${light ? 'text-white' : 'text-brand-900'}`}>{site.name}</span>
        <span className={`block text-xs ${light ? 'text-brand-100' : 'text-muted'}`}>פינוי דירות ואגרנות כפייתית</span>
      </span>
    </Link>
  );
}
