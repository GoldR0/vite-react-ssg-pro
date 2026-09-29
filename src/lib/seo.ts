// Builds the full SEO map for every page: static pages come from seo.json,
// service and article pages are generated from src/data.
// Build-time only (scripts/prerender.ts) - don't import from components, it pulls every article into the bundle.
import seoJson from '@/seo.json';
import { site } from '@/data/site';
import { services } from '@/data/services';
import { articles } from '@/data/articles';
import { formatTitle } from '@/lib/title';

export interface SeoEntry {
  /** Short page name, used in breadcrumbs */
  name?: string;
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  ogType: string;
  ogImage: string;
  ogImageAlt?: string;
  twitterCard: string;
  publishedDate?: string;
  sitemap?: { changefreq: string; priority: number; lastmod?: string };
  schema?: { organization?: boolean; website?: boolean; breadcrumb?: boolean; article?: boolean };
}

type RawEntry = Omit<SeoEntry, 'canonical' | 'ogImage' | 'twitterCard'> & Partial<SeoEntry>;

const { _global, ...staticPages } = seoJson as unknown as { _global: Record<string, string> } & Record<string, RawEntry>;

export const seoGlobal = {
  ..._global,
  siteName: site.name,
  business: { description: site.description, phone: site.phone, email: site.email, serviceArea: site.serviceArea },
};

function complete(path: string, entry: RawEntry): SeoEntry {
  return {
    ...entry,
    title: formatTitle(path, entry.title),
    canonical: `${_global.domain}${path}`,
    ogImage: entry.ogImage || _global.defaultImage,
    twitterCard: entry.twitterCard || _global.twitterCard,
  };
}

/** Concrete paths for each dynamic route in Router.tsx - used by the prerenderer */
export const dynamicRoutes: Record<string, string[]> = {
  '/services/:slug': services.map((s) => `/services/${s.slug}`),
  '/articles/:slug': articles.map((a) => `/articles/${a.slug}`),
};

export const seoMap: Record<string, SeoEntry> = {};

for (const [path, entry] of Object.entries(staticPages)) {
  seoMap[path] = complete(path, entry);
}

for (const s of services) {
  seoMap[`/services/${s.slug}`] = complete(`/services/${s.slug}`, {
    name: s.title,
    title: s.title,
    description: s.short,
    ogType: 'website',
    sitemap: { changefreq: 'monthly', priority: s.category === 'hoarding' ? 0.9 : 0.8 },
    schema: { breadcrumb: true },
  });
}

for (const a of articles) {
  seoMap[`/articles/${a.slug}`] = complete(`/articles/${a.slug}`, {
    name: a.title,
    title: a.title,
    description: a.excerpt,
    ogType: 'article',
    ogImage: a.cover?.src,
    ogImageAlt: a.cover?.alt,
    publishedDate: a.date,
    sitemap: { changefreq: 'yearly', priority: 0.7, lastmod: a.date },
    schema: { breadcrumb: true, article: true },
  });
}
