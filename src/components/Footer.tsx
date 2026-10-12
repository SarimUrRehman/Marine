import React from 'react';
import { Phone, MapPin, Sparkles, Mail, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071527] text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                <Sparkles className="w-5 h-5 text-sky-300" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Marín <span className="text-sky-400">Window Services</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Premier residential and commercial window cleaning in Chicago and surrounding suburbs. Dedicated to crystal clarity, spotless frames, and fair upfront pricing.
            </p>
            <div className="text-xs text-amber-300 font-semibold flex items-center gap-1.5">
              <span>★ 5.0 Google Rating (11 Verified Reviews)</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-sky-300 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-sky-300 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-sky-300 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-sky-300 transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-300 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#quote" className="hover:text-sky-300 transition-colors">
                  Request a Free Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Service Coverage
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.serviceArea}</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Including Lincoln Park, Lakeview, Logan Square, Bucktown, Wicker Park, West Loop, Evanston, Oak Park, and nearby suburbs.
              </p>
              <div className="pt-2 text-xs text-slate-400">
                Team Lead: <span className="text-white font-medium">{SITE_CONFIG.leadName}</span>
              </div>
            </div>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Contact & Inquiries
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <a
                href={SITE_CONFIG.phoneTel}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-sky-400/50 text-white hover:text-sky-300 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Direct Phone</div>
                  <div className="font-bold text-sm text-white">{SITE_CONFIG.phoneDisplay}</div>
                </div>
              </a>

              <a
                href="#quote"
                className="block text-center py-2.5 px-4 rounded-xl bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 font-medium transition-colors border border-sky-400/20"
              >
                Online Quote Form
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Crafted for crystal clarity in Chicago</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
