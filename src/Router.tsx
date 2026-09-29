import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import ErrorBoundary from './components/ErrorBoundary'
import Layout from './Layout'
import Home from './pages/home'

const Services = lazy(() => import('./pages/services'))
const ServicePage = lazy(() => import('./pages/service'))
const Gallery = lazy(() => import('./pages/gallery'))
const Articles = lazy(() => import('./pages/articles'))
const ArticlePage = lazy(() => import('./pages/article'))
const About = lazy(() => import('./pages/about'))
const Contact = lazy(() => import('./pages/contact'))
const NotFound = lazy(() => import('./pages/not-found'))

// Dynamic routes (:slug) are prerendered for every path listed in src/lib/seo.ts -> dynamicRoutes
function Router() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<ServicePage />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="articles" element={<Articles />} />
            <Route path="articles/:slug" element={<ArticlePage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default Router
