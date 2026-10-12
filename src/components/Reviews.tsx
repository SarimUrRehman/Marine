import React from 'react';
import { Star, ExternalLink, Quote, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG, REAL_REVIEWS } from '../config.ts';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Google Score Summary Card */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              Verified Feedback
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              What Real Customers Say
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Honest, verbatim Google reviews from homeowners and clients in the Chicago community.
            </p>
          </div>

          {/* Google Summary Badge */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-md flex items-center gap-4 shrink-0">
            {/* Google "G" logo icon */}
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2.5 shadow-xs">
              <svg className="w-full h-full" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-2xl text-slate-900 leading-none">
                  {SITE_CONFIG.rating.toFixed(1)}
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-slate-500 mt-1 font-medium">
                {SITE_CONFIG.reviewCount} Reviews on Google
              </div>
            </div>
          </div>
        </div>

        {/* Verbatim Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {REAL_REVIEWS.map((rev, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-shadow relative flex flex-col justify-between"
            >
              {/* Decorative light quote mark */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-sky-100 pointer-events-none" />

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-slate-500">
                    5.0 / 5.0
                  </span>
                </div>

                {/* Verbatim customer quote */}
                <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed italic">
                  “{rev.quote}”
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-600 to-sky-400 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                    {rev.initials}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-slate-900 leading-tight">
                      {rev.author}
                    </h3>
                    <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{rev.source}</span>
                    </div>
                  </div>
                </div>

                {/* Mini Google badge */}
                <span className="text-[11px] font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60">
                  Verified Client
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Read All Reviews Button */}
        <div className="mt-12 text-center">
          <a
            href={SITE_CONFIG.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-sm hover:shadow transition-all"
          >
            <span>Read all reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
          <p className="mt-2 text-xs text-slate-400">
            Reviews sourced directly from public Google Business listings
          </p>
        </div>
      </div>
    </section>
  );
};
