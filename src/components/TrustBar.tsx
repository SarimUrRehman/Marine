import React from 'react';
import { Star, DollarSign, Users, Award } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: Star,
      title: '5-Star Rated',
      subtitle: `${SITE_CONFIG.rating}.0 on Google · 11 verified reviews`,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
    },
    {
      icon: DollarSign,
      title: 'Fair, Upfront Pricing',
      subtitle: 'Accurate estimates with no hidden surprise fees',
      color: 'text-sky-500',
      bgColor: 'bg-sky-500/10',
    },
    {
      icon: Users,
      title: 'Friendly, Professional Crew',
      subtitle: `${SITE_CONFIG.leadName} and his respectful, detail-oriented team`,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Award,
      title: 'Satisfaction Focused',
      subtitle: 'Committed to streak-free, crystal-clear results',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
    },
  ];

  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-900/5 p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3.5 pt-3 sm:pt-0 ${
                  idx > 0 ? 'lg:pl-6' : ''
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.bgColor} ${item.color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-sm sm:text-base text-slate-900 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
