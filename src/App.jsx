import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

// Lazy load components that are below the fold for speed optimization
const AboutSection = React.lazy(() => import('./components/AboutSection'))
const StaffSection = React.lazy(() => import('./components/StaffSection'))
const TeacherTrainingSection = React.lazy(() => import('./components/TeacherTrainingSection'))
const BandaActivitySection = React.lazy(() => import('./components/BandaActivitySection'))
const GallerySection = React.lazy(() => import('./components/GallerySection'))
const AdmissionSection = React.lazy(() => import('./components/AdmissionSection'))
const ReviewsCarousel = React.lazy(() => import('./components/ReviewsCarousel'))
const BlogSection = React.lazy(() => import('./components/BlogSection'))
const EnquirySection = React.lazy(() => import('./components/EnquirySection'))
const Footer = React.lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="font-body text-text-dark bg-cream overflow-x-hidden">
      <Helmet>
        <title>Aquila Montessori Pre-School | Sithalapakkam, Chennai</title>
        <meta name="description" content="Aquila Montessori Pre-School in Sithalapakkam, Chennai offers authentic child-led education for children aged 1.5 to 6. Admissions open for 2025-26. Call now!" />
        <meta name="keywords" content="Montessori preschool Sithalapakkam, best preschool Chennai, Aquila Montessori, Montessori school Chennai, preschool admissions Chennai 2025" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Aquila Montessori Pre-School | Sithalapakkam, Chennai" />
        <meta property="og:description" content="Aquila Montessori Pre-School in Sithalapakkam, Chennai offers authentic child-led education for children aged 1.5 to 6. Admissions open for 2025-26. Call now!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aquilamontessori.in" />
        <meta property="og:image" content="https://aquilamontessori.in/src/assets/hero.jpeg" />
        <meta property="og:site_name" content="Aquila Montessori Pre-School" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aquila Montessori Pre-School | Sithalapakkam, Chennai" />
        <meta name="twitter:description" content="Aquila Montessori Pre-School in Sithalapakkam, Chennai offers authentic child-led education for children aged 1.5 to 6. Admissions open for 2025-26. Call now!" />
        <meta name="twitter:image" content="https://aquilamontessori.in/src/assets/hero.jpeg" />

        <link rel="canonical" href="https://aquilamontessori.in" />
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="h-20 flex items-center justify-center"></div>}>
          <AboutSection />
          <StaffSection />
          <TeacherTrainingSection />
          <BandaActivitySection />
          <GallerySection />
          <AdmissionSection />
          <ReviewsCarousel />
          <BlogSection />
          <EnquirySection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
