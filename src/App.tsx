import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustBar } from './components/TrustBar.tsx';
import { Services } from './components/Services.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { Reviews } from './components/Reviews.tsx';
import { QuoteForm } from './components/QuoteForm.tsx';
import { FAQ } from './components/FAQ.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileStickyBar } from './components/MobileStickyBar.tsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* 1. Sticky Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section with Signature Before/After Glass Slider */}
        <Hero />

        {/* 3. Trust Bar Badges */}
        <TrustBar />

        {/* 4. Services Section (6 cards) */}
        <Services />

        {/* 5. Why Choose Us (Split layout based on authentic reviews) */}
        <WhyChooseUs />

        {/* 6. How It Works (3 Steps) */}
        <HowItWorks />

        {/* 7. Real Customer Reviews (Google badge + 2 verbatim reviews) */}
        <Reviews />

        {/* 8. Quote Request Form + Direct Call Card */}
        <QuoteForm />

        {/* 9. FAQ Accordion (6 questions) */}
        <FAQ />

        {/* 10. Final CTA Banner */}
        <FinalCTA />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Mobile Sticky Action Bar */}
      <MobileStickyBar />
    </div>
  );
}
