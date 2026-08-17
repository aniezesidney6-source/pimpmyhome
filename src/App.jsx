import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'
import CookieConsent from './components/CookieConsent'
import NewsletterModal from './components/NewsletterModal'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-3 focus:left-3 focus:bg-ink focus:text-canvas focus:px-4 focus:py-2 u-meta"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
      <NewsletterModal />
    </>
  )
}
