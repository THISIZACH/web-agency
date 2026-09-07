'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { Sparkles, Zap, Smartphone, Search, Tag, ShieldCheck } from 'lucide-react';

const reasonIcons = [
  <Sparkles key="sparkles" className="w-5 h-5 text-brand-500" />,
  <Zap key="zap" className="w-5 h-5 text-amber-500" />,
  <Smartphone key="phone" className="w-5 h-5 text-sky-500" />,
  <Search key="search" className="w-5 h-5 text-emerald-500" />,
  <Tag key="tag" className="w-5 h-5 text-purple-500" />,
  <ShieldCheck key="shield" className="w-5 h-5 text-rose-500" />,
];

export function WhyChooseUs() {
  const { t, pricing } = useLanguage();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="brand" className="mb-4">
            {t.whyChooseUs.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {t.whyChooseUs.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.whyChooseUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {t.whyChooseUs.reasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-brand-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-5">
                {reasonIcons[idx % reasonIcons.length]}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {reason.title.replace('€299', pricing.basePriceFormatted).replace('299€', pricing.basePriceFormatted).replace('$299', pricing.basePriceFormatted)}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
