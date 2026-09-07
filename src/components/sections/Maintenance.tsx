'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getWhatsAppUrl } from '@/config/contact';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Wrench, Check, ArrowUpRight } from 'lucide-react';

export function Maintenance() {
  const { t, pricing, locale, isRTL } = useLanguage();
  const whatsappUrl = getWhatsAppUrl(locale, 'maintenance');

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="blue" className="mb-4">
            {t.maintenance.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {t.maintenance.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.maintenance.subtitle}
          </p>
        </div>

        {/* Focused Model: Pay-As-You-Go On-Demand Updates */}
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col justify-between rounded-3xl p-5 sm:p-8 md:p-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-900/5 dark:shadow-black/30 transition-all duration-300">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 block w-fit mb-1">
                      {t.maintenance.perRequestBadge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {t.maintenance.perRequestTitle}
                    </h3>
                  </div>
                </div>

                <div className="text-start sm:text-end">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {pricing.updatePriceFormatted}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">
                    / request
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                {t.maintenance.perRequestDescription}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                {t.maintenance.examplesTitle.replace('€30', pricing.updatePriceFormatted).replace('30€', pricing.updatePriceFormatted).replace('$30', pricing.updatePriceFormatted)}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {t.maintenance.examples.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                    <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
              <p className="text-xs text-center sm:text-start text-slate-500 dark:text-slate-400 leading-relaxed">
                {t.maintenance.customQuoteNote}
              </p>
              <Button
                href={whatsappUrl}
                isExternal
                variant="primary"
                size="lg"
                className="w-full text-base py-3.5 shadow-lg shadow-sky-500/20"
                icon={<ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />}
                iconPosition="right"
              >
                {t.maintenance.ctaButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

