'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export function FirstMonthSupport() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-500/5 dark:bg-brand-500/[0.03] border-y border-brand-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="brand" className="mb-3">
            {t.firstMonthSupport.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {t.firstMonthSupport.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.firstMonthSupport.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-8 md:p-10 border border-brand-500/20 shadow-xl shadow-brand-500/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 block">
                {t.firstMonthSupport.includedBadge}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {t.firstMonthSupport.cardTitle}
              </h3>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            {t.firstMonthSupport.cardDescription}
          </p>

          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            {t.firstMonthSupport.examplesTitle}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {t.firstMonthSupport.examples.map((example, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span className="leading-snug">{example}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

