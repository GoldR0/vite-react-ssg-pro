import type { CategoryKey } from './services';

export interface GalleryImage {
  /** Image under /public, e.g. /images/gallery/hoarding-01-before.webp */
  src: string;
  /** Short description of what the image shows (for accessibility and Google Images) */
  alt: string;
  category: CategoryKey;
  label?: 'לפני' | 'אחרי';
  caption?: string;
}

// TODO: add the real project images here (put the files in public/images/gallery/).
// Example:
// { src: '/images/gallery/hoarding-01-before.webp', alt: 'סלון עמוס בחפצים לפני הפינוי', category: 'hoarding', label: 'לפני' },
// { src: '/images/gallery/hoarding-01-after.webp', alt: 'הסלון אחרי פינוי וניקיון', category: 'hoarding', label: 'אחרי' },
export const gallery: GalleryImage[] = [];
