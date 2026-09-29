import { useCallback, useEffect, useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { categories, type CategoryKey } from '@/data/services';
import type { GalleryImage } from '@/data/gallery';

interface GalleryGridProps {
  images: GalleryImage[];
  /** Show category filter buttons */
  filters?: boolean;
  /** Number of "coming soon" tiles to show while there are no images */
  placeholders?: number;
}

export default function GalleryGrid({ images, filters = false, placeholders = 6 }: GalleryGridProps) {
  const [active, setActive] = useState<CategoryKey | 'all'>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const usedCategories = categories.filter((c) => images.some((img) => img.category === c.key));
  const shown = active === 'all' ? images : images.filter((img) => img.category === active);

  if (images.length === 0) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {Array.from({ length: placeholders }, (_, i) => (
          <div key={i} className="aspect-[4/3] rounded-2xl border-2 border-dashed border-brand-600/20 bg-brand-50 flex flex-col items-center justify-center gap-2 text-brand-600/60">
            <Camera className="w-10 h-10" aria-hidden />
            <span className="text-sm font-medium">תמונות יעלו בקרוב</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {filters && usedCategories.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="group" aria-label="סינון לפי סוג עבודה">
          {[{ key: 'all' as const, title: 'הכול' }, ...usedCategories].map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              aria-pressed={active === c.key}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${active === c.key ? 'bg-brand-700 text-white' : 'bg-white border border-brand-900/15 text-ink hover:bg-brand-50'}`}
            >
              {c.title}
            </button>
          ))}
        </div>
      )}

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {shown.map((img, i) => (
          <li key={img.src}>
            <button
              onClick={() => setOpenIndex(i)}
              className="group relative block w-full aspect-[4/3] rounded-2xl overflow-hidden bg-brand-100"
              aria-label={`הגדלת תמונה: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              {img.label && <Badge label={img.label} />}
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && <Lightbox images={shown} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />}
    </>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className={`absolute top-3 start-3 px-3 py-1 rounded-full text-sm font-bold ${label === 'אחרי' ? 'bg-brand-700 text-white' : 'bg-accent-500 text-brand-950'}`}>
      {label}
    </span>
  );
}

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
}

function Lightbox({ images, index, onChange, onClose }: LightboxProps) {
  const img = images[index];
  const next = useCallback(() => onChange((index + 1) % images.length), [index, images.length, onChange]);
  const prev = useCallback(() => onChange((index - 1 + images.length) % images.length), [index, images.length, onChange]);

  useEffect(() => {
    // RTL: the left arrow moves forward
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') next();
      else if (e.key === 'ArrowRight') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [next, prev, onClose]);

  const navBtn = 'absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center';

  return (
    <div role="dialog" aria-modal="true" aria-label={img.alt} className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4" onClick={onClose}>
      <figure className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} className="w-full max-h-[80vh] object-contain rounded-xl" />
        {img.label && <Badge label={img.label} />}
        <figcaption className="mt-3 text-center text-white/90">
          {img.caption ?? img.alt}
          <span className="block text-sm text-white/50 mt-1">{index + 1} / {images.length}</span>
        </figcaption>
      </figure>
      <button onClick={onClose} className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center" aria-label="סגירה" autoFocus>
        <X className="w-6 h-6" />
      </button>
      {images.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className={`${navBtn} right-4`} aria-label="התמונה הקודמת">
            <ChevronRight className="w-7 h-7" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className={`${navBtn} left-4`} aria-label="התמונה הבאה">
            <ChevronLeft className="w-7 h-7" />
          </button>
        </>
      )}
    </div>
  );
}
