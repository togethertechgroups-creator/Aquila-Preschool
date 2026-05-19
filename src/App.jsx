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
const EnquirySection = React.lazy(() => import('./components/EnquirySection'))
const Footer = React.lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="font-body text-text-dark bg-cream overflow-x-hidden">
      <Helmet>
        <title>Aquila Montessori Pre-School | Sithalapakkam, Chennai</title>
        <meta name="description" content="Aquila Montessori Pre-School in Sithalapakkam, Chennai — authentic Montessori education for children aged 1.5 to 6 years. Admissions open for 2025–26. Call +91 72000 83468." />
        <meta name="keywords" content="Montessori preschool Sithalapakkam, best preschool Chennai, Aquila Montessori, Montessori school Chennai, preschool admissions Chennai 2025" />
        <meta property="og:title" content="Aquila Montessori Pre-School | Where Every Child Learns Their Way" />
        <meta property="og:description" content="Premier Montessori preschool in Sithalapakkam, Chennai. Enrol your child today." />
        <meta property="og:type" content="website" />
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
