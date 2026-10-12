import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Star, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';
import { BeforeAfterSlider } from './BeforeAfterSlider.tsx';

export const Hero: React.FC = () => {
  // Count-up animation for rating
  const [displayRating, setDisplayRating] = useState<number>(0);
  const [displayReviews, setDisplayReviews] = useState<number>(0);

  useEffect(() => {
    const duration = 1200; // ms
    const startTime = performance.now();

    const animateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo curve
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setDisplayRating(Number((ease * SITE_CONFIG.rating).toFixed(1)));
      setDisplayReviews(Math.floor(ease * SITE_CONFIG.reviewCount));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayRating(SITE_CONFIG.rating);
        setDisplayReviews(SITE_CONFIG.reviewCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, []);

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#0B1F3A] via-[#0D2647] to-slate-900 text-white">
      {/* Subtle background ambient glow & glass grid reflection */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-sky-400 blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-sky-600 blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Trust row kicker with Google Stars count-up */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-sky-200/90 mb-5 pb-1 border-b border-sky-400/20 font-medium">
              <span className="flex items-center gap-1 text-amber-400 font-semibold">
                <span className="text-white">{displayRating.toFixed(1)}</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </span>
              <span aria-hidden="true" className="text-sky-400/40">·</span>
              <span>{displayReviews} Google Reviews</span>
              <span aria-hidden="true" className="text-sky-400/40">·</span>
              <span className="text-sky-300">Locally Owned</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-white">
              Windows So Clean,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-amber-200">
                You’ll Forget
              </span>{' '}
              They’re There.
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Professional residential and commercial window cleaning across {SITE_CONFIG.serviceArea}. Led by {SITE_CONFIG.leadName} and his dedicated crew—delivering spotless, streak-free shine and fair upfront pricing.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-bold text-base shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 hover:border-white/40 backdrop-blur-md transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <Phone className="w-4 h-4 text-sky-400 fill-sky-400" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>

            {/* Quick Micro-Reassurance Bullet List */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Interior & Exterior</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Screens & Tracks</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>No Hidden Fees</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Squeegee Before/After Interactive Slider */}
          <div className="lg:col-span-6 w-full">
            <div className="relative">
              {/* Decorative glare backdrop frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-amber-300 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />

              <div className="relative p-2 sm:p-3 rounded-2xl bg-[#0B1F3A]/90 border border-white/15 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between pb-2 px-2 text-xs font-semibold text-sky-200">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    Interactive Clarity Demo
                  </span>
                  <span className="text-slate-400 font-normal">Real Chicago Results</span>
                </div>

                <BeforeAfterSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
