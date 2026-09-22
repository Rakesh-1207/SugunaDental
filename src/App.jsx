import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ScrollReveal from './components/ScrollReveal';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import AISmileScanner from './components/AISmileScanner';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import SpecialistTeam from './components/SpecialistTeam';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingActions from './components/FloatingActions';
import CostCalculator from './components/CostCalculator';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Prevent scroll during initial loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoading]);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  const handleOpenAISmile = () => {
    const el = document.getElementById('ai-smile-preview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased relative selection:bg-orange-600 selection:text-white">
      {/* Brand Loading Overlay */}
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}

      {/* Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections with Scroll Reveal Animations */}
      <main>
        {/* Hero Section */}
        <Hero 
          onOpenBooking={handleOpenBooking} 
          onOpenAISmile={handleOpenAISmile} 
        />

        {/* 01 Approach / Philosophy */}
        <ScrollReveal direction="up" delay={100}>
          <Philosophy />
        </ScrollReveal>

        {/* 02 Clinical Specialties / Services */}
        <ScrollReveal direction="up" delay={150}>
          <Services onOpenBooking={handleOpenBooking} />
        </ScrollReveal>

        {/* 03 AI 3D Smile Tool */}
        <ScrollReveal direction="up" delay={150}>
          <AISmileScanner onOpenBooking={handleOpenBooking} />
        </ScrollReveal>

        {/* 04 Treatment & Cost Estimator */}
        <ScrollReveal direction="up" delay={150}>
          <CostCalculator onOpenBooking={handleOpenBooking} />
        </ScrollReveal>

        {/* 05 Results (Before & After Slider) */}
        <ScrollReveal direction="up" delay={150}>
          <BeforeAfterSlider />
        </ScrollReveal>

        {/* 06 Specialist Team */}
        <ScrollReveal direction="up" delay={150}>
          <SpecialistTeam onOpenBooking={handleOpenBooking} />
        </ScrollReveal>

        {/* 07 Contact, Address & Location Map */}
        <ScrollReveal direction="up" delay={150}>
          <LocationContact />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating Action Buttons */}
      <FloatingActions />

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
      />
    </div>
  );
}

