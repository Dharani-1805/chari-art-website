import React, { useState } from 'react'
import Navbar from './components/common/Navbar'
import Hero from './components/home/Hero'
import ServicesSection from './components/home/ServicesSection'
import GallerySection from './components/gallery/GallerySection'
import CustomOrderSection from './components/order/CustomOrderSection'
import ProcessSection from './components/home/ProcessSection'
import AboutSection from './components/home/AboutSection'
import TestimonialsSection from './components/home/TestimonialsSection'
import ContactSection from './components/contact/ContactSection'
import Footer from './components/common/Footer'
import WhatsAppBubble from './components/common/WhatsAppBubble'

export default function App() {
  const [selectedMediumForOrder, setSelectedMediumForOrder] = useState('pencil')

  const handleSelectMediumFromSection = (mediumCategory) => {
    setSelectedMediumForOrder(mediumCategory)
  }

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#e2e4e9] relative selection:bg-[#d4af37]/30 selection:text-[#f8f6f0]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Artistic Services & Specialties */}
        <ServicesSection
          onSelectMediumForCommission={handleSelectMediumFromSection}
        />

        {/* Curated Portfolio Gallery */}
        <GallerySection
          onSelectMediumForCommission={handleSelectMediumFromSection}
        />

        {/* Custom Commission Builder & Instant Quote */}
        <CustomOrderSection
          preselectedMedium={selectedMediumForOrder}
        />

        {/* The 4-Step Artistic Process */}
        <ProcessSection />

        {/* Meet Artist Chari & Materials */}
        <AboutSection />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* Contact & Socials */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppBubble />
    </div>
  )
}
