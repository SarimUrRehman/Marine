import React from 'react';
import {
  Home,
  Building2,
  Sparkles,
  Maximize2,
  Hammer,
  CalendarCheck2,
  ArrowRight,
} from 'lucide-react';
import { SERVICES_LIST } from '../config.ts';

const SERVICE_ICONS: Record<string, React.FC<{ className?: string }>> = {
  residential: Home,
  commercial: Building2,
  'interior-exterior': Sparkles,
  'screens-tracks': Maximize2,
  'post-construction': Hammer,
  recurring: CalendarCheck2,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            Our Specialties
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Complete Glass Care for Chicago Properties
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From single-family homes to storefronts and seasonal maintenance, Fernando and his crew deliver spotless perfection pane by pane.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service) => {
            const Icon = SERVICE_ICONS[service.id] || Sparkles;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Glow ring effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-400/0 via-sky-400/0 to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-200 flex items-center justify-center mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-sky-950 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Specific detail */}
                  <p className="mt-3 text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100 leading-normal">
                    {service.details}
                  </p>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 group-hover:text-sky-700 hover:underline"
                  >
                    <span>Request estimate</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-[11px] text-slate-400 font-medium">Free Quote</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
