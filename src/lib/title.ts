import { useEffect } from 'react';
import { site } from '@/data/site';

export function formatTitle(path: string, title: string) {
  return path === '/' ? `${site.name} | ${title}` : `${title} | ${site.name}`;
}

/** Sets the browser tab title for pages that are not listed in seo.json (services, articles) */
export function useDocumentTitle(title: string | undefined) {
  useEffect(() => {
    if (title) document.title = formatTitle('', title);
  }, [title]);
}
