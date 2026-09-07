'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const { t, pricing } = useLanguage();

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="amber" className="mb-4">
            {t.testimonials.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-8">
          {t.testimonials.items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-5 sm:p-7 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative group hover:border-amber-500/40 transition-all duration-300"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(item.rating)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{item.quote.replace('€299', pricing.basePriceFormatted).replace('299€', pricing.basePriceFormatted).replace('$299', pricing.basePriceFormatted)}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role} • {item.business}
                  </p>
                </div>
                <Quote className="w-6 h-6 text-slate-200 dark:text-slate-800 shrink-0 ms-3" />
              </div>
            </div>
          ))}
        </div>

        {/* Honest Transparency Disclaimer */}
        <p className="text-xs text-center text-slate-400 dark:text-slate-400 max-w-xl mx-auto">
          {t.testimonials.disclaimer}
        </p>
      </div>
    </section>
  );
}

