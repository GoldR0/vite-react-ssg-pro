import { Outlet, useLocation } from 'react-router';
import { type FC, Suspense, useEffect, useState } from 'react';
import SEOTitle from './components/SEOTitle';
import LoadingScreen from './components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

// Prerendered page HTML, captured before React replaces it (empty during prerendering).
// Used as the loading fallback on the first page load so the page doesn't flash a spinner
// while its lazy chunk downloads.
const prerenderedPage = typeof document !== 'undefined' ? document.querySelector('main')?.innerHTML ?? '' : '';

const Layout: FC = () => {
  const location = useLocation();
  const [firstPath] = useState(location.pathname);
  const pageFallback = prerenderedPage && location.pathname === firstPath
    ? <div className="contents" dangerouslySetInnerHTML={{ __html: prerenderedPage }} />
    : <LoadingScreen />;

  // Scroll to the #hash target (e.g. /services#hoarding), or to the top on route change.
  // Lazy pages may not be rendered yet, so retry for a few frames.
  useEffect(() => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }
    let frame = 0;
    let raf = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView();
      else if (frame++ < 30) raf = requestAnimationFrame(tryScroll);
    };
    tryScroll();
    return () => cancelAnimationFrame(raf);
  }, [location.pathname, location.hash]);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <SEOTitle />
      <div data-beasties-container className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={pageFallback}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </Suspense>
  );
};

export default Layout;
