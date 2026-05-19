import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import StaffSection from './components/StaffSection'
import TeacherTrainingSection from './components/TeacherTrainingSection'
import BandaActivitySection from './components/BandaActivitySection'
import GallerySection from './components/GallerySection'
import AdmissionSection from './components/AdmissionSection'
import ReviewsCarousel from './components/ReviewsCarousel'
import EnquirySection from './components/EnquirySection'
import Footer from './components/Footer'

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
        <AboutSection />
        <StaffSection />
        <TeacherTrainingSection />
        <BandaActivitySection />
        <GallerySection />
        <AdmissionSection />
        <ReviewsCarousel />
        <EnquirySection />
      </main>
      <Footer />
    </div>
  )
}

export default App
