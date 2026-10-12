import React from 'react';
import { Check, Heart, Sparkles, DollarSign, Clock, Repeat } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Clock,
      title: 'Efficient & Thorough Execution',
      desc: 'Clients remark on how promptly Fernando and the team work without ever cutting corners. Every pane is scrubbed, squeegeed, and hand-detailed.',
    },
    {
      icon: Heart,
      title: 'Lovely & Respectful Crew',
      desc: 'Inviting a team into your home requires trust. Our crew is courteous, friendly, careful around furniture and landscaping, and leaves no mess behind.',
    },
    {
      icon: Sparkles,
      title: '“Our Windows Have Never Looked Better”',
      desc: 'That is the direct quote our customers repeat. We remove hard water spots, grime, fingerprints, and environmental residue to restore pure transparency.',
    },
    {
      icon: DollarSign,
      title: 'Fair, Transparent Pricing',
      desc: 'No hidden add-ons or sudden surprise fees. You receive a clear, honest quote upfront tailored to your exact property.',
    },
    {
      icon: Repeat,
      title: 'Trusted for Repeat & Annual Cleanings',
      desc: 'Our clients don’t just use us once—they schedule us annually or seasonally to maintain effortless shine across all four Chicago seasons.',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Authentic points based on real reviews */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              The Marín Standard
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Why Chicago Homeowners & Businesses Rely on Fernando’s Team
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              We let our actual work and client feedback speak for itself. When you book Marín Window Services INC, you get dedicated, personal attention from a crew that takes genuine pride in every reflection.
            </p>

            <div className="mt-8 space-y-5">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-slate-900">
                        {pt.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Feature Card with Chicago Craft */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Background gradient decorative card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500/20 to-amber-300/20 rounded-3xl blur-xl" />

              <div className="relative bg-[#0B1F3A] text-white rounded-3xl p-7 sm:p-9 shadow-2xl border border-sky-400/20 overflow-hidden">
                {/* Subtle glass reflection highlight */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-52 h-52 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-300 mb-6">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Locally Owned Chicago Service</span>
                </div>

                <blockquote className="border-l-2 border-sky-400 pl-4 italic text-slate-200 text-sm sm:text-base leading-relaxed">
                  “Fernando and his team did a fantastic job cleaning our windows. They were efficient and thorough. Our windows have never looked better.”
                </blockquote>
                <div className="mt-3 pl-4 text-xs font-semibold text-sky-300">
                  — Dorina Aguilar-Rasmussen, Verified Google Review
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700/60 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Direct Crew Lead</span>
                    <span className="font-semibold text-white">{SITE_CONFIG.leadName}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Service Area</span>
                    <span className="font-semibold text-white">{SITE_CONFIG.serviceArea}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Google Customer Rating</span>
                    <span className="font-semibold text-amber-300">★ 5.0 (11 Reviews)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Phone Support</span>
                    <a
                      href={SITE_CONFIG.phoneTel}
                      className="font-semibold text-sky-300 hover:text-sky-200 underline"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#quote"
                    className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all text-center"
                  >
                    Get Your Free Quote Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
