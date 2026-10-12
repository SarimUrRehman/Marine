import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B1F3A]/95 backdrop-blur-xl border-t border-sky-400/20 p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={SITE_CONFIG.phoneTel}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-amber-400 active:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all"
          aria-label={`Call ${SITE_CONFIG.phoneDisplay}`}
        >
          <Phone className="w-4 h-4 fill-slate-950" />
          <span>Call Now</span>
        </a>

        <a
          href="#quote"
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-sky-500 active:bg-sky-400 text-white font-bold text-sm shadow-md transition-all"
        >
          <span>Free Quote</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
