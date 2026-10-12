import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQ_LIST, SITE_CONFIG } from '../config.ts';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            Common Questions
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Everything you need to know about professional window cleaning for your property in the Chicago area.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${index}`;
            const buttonId = `faq-question-${index}`;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-colors"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-slate-900 hover:text-sky-600 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-sky-500' : ''
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={`px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed ${
                    isOpen ? 'block animate-in fade-in duration-200' : 'hidden'
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-display font-bold text-base text-slate-900">
              Have another question about your windows?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Fernando is happy to discuss your specific window setup and answer questions directly.
            </p>
          </div>
          <a
            href={SITE_CONFIG.phoneTel}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shrink-0 transition-colors"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call {SITE_CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
