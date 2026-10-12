import React from 'react';
import { ClipboardList, Sparkles, SunMedium, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: ClipboardList,
      title: 'Request a Free Quote',
      desc: 'Send us a brief message online or call Fernando directly at (773) 329-1755. Tell us about your home or business, and receive a fair, transparent estimate.',
      actionText: 'Quick 60-Second Form',
    },
    {
      number: '02',
      icon: Sparkles,
      title: 'Fernando & Team Arrive',
      desc: 'Our courteous crew arrives promptly on schedule. We work efficiently and thoroughly, taking utmost care with your property, landscaping, screens, and frames.',
      actionText: 'Detailed & Respectful',
    },
    {
      number: '03',
      icon: SunMedium,
      title: 'Enjoy Crystal Clear Views',
      desc: 'Inspect our streak-free results. Natural sunlight floods into your rooms with zero grime or water spots. Your windows have never looked better!',
      actionText: '100% Satisfaction Focused',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Simple 3-Step Process
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Booking professional window cleaning in Chicago should be seamless. Here is how easy we make it from start to finish.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-[2px] bg-gradient-to-r from-sky-500/20 via-sky-400/40 to-sky-500/20 -translate-y-12 z-0" />

          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="relative z-10 bg-[#0B1F3A]/90 border border-white/10 rounded-2xl p-7 sm:p-8 backdrop-blur-md shadow-xl hover:border-sky-400/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/30 text-sky-300 flex items-center justify-center group-hover:scale-105 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-display font-black text-3xl text-slate-700/80 group-hover:text-sky-400/60 transition-colors">
                      {st.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white">
                    {st.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-sky-400 font-medium">
                  <span>{st.actionText}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action prompt */}
        <div className="mt-12 text-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 transition-all"
          >
            <span>Ready to get started? Request your quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
