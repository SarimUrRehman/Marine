import React from 'react';
import { Phone, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-tr from-[#0B1F3A] via-[#0E2F59] to-[#0B1F3A] text-white overflow-hidden">
      {/* Decorative glass glow streaks */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-sky-400 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-4 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Locally Owned Chicago Glass Care</span>
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.15]">
          Ready for Spotless Windows?
        </h2>

        <p className="mt-4 text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Experience the difference of crystal-clear clarity. Reach out today for your free, no-obligation quote or call Fernando directly.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-slate-950 font-bold text-base shadow-xl shadow-sky-500/25 transition-all active:scale-95"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>

          <a
            href={SITE_CONFIG.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 text-sky-300 fill-sky-300" />
            <span>Call {SITE_CONFIG.phoneDisplay}</span>
          </a>
        </div>

        {/* Small trust row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span>5.0 ★ Google Rating</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span>Residential & Commercial</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span>Serving {SITE_CONFIG.serviceArea}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
