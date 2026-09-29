import { useEffect, type ReactElement } from 'react';
import { useLocation } from 'react-router';
import seoJson from '@/seo.json';
import { formatTitle } from '@/lib/title';

const seo = seoJson as unknown as Record<string, { title?: string }>;

// Updates the tab title on client-side navigation for pages listed in seo.json.
// Service and article pages set their own title with useDocumentTitle.
export default function SEOTitle(): ReactElement | null {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname || '/';
    const title = seo[path]?.title;
    if (title) document.title = formatTitle(path, title);
  }, [location]);

  return null;
}
