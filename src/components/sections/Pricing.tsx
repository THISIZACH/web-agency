'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getWhatsAppUrl } from '@/config/contact';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Check, ArrowUpRight, Sparkles, Info } from 'lucide-react';

export function Pricing() {
  const { t, pricing, locale, isRTL } = useLanguage();
  const whatsappUrl = getWhatsAppUrl(locale, 'pricing');

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="brand" className="mb-4">
            {t.pricing.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            <span>{t.pricing.titlePrefix}</span>
            <span className="text-brand-500">{pricing.basePriceFormatted}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Primary Pricing Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl p-5 sm:p-8 md:p-12 bg-white dark:bg-slate-900 border-2 border-brand-500/40 shadow-2xl shadow-brand-500/10 transition-all duration-300">
            {/* Top Floating Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full bg-brand-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-500/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.pricing.cardBadge}</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {t.pricing.cardTitle}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md">
                  {t.pricing.cardDescription}
                </p>
              </div>

              <div className="text-start md:text-end shrink-0">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">
                  {t.pricing.priceStartingFrom}
                </span>
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {pricing.basePriceFormatted}
                </span>
                <span className="text-xs text-brand-600 dark:text-brand-400 block font-medium mt-1">
                  {pricing.currencyNote}
                </span>
              </div>
            </div>

            {/* Checklist */}
            <div className="py-8 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                {t.pricing.featuresTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {t.pricing.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-brand-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-500 font-bold" />
                    </div>
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Domain & Hosting Purchase Service Notice */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3 mb-6">
              <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                <span className="font-bold text-amber-700 dark:text-amber-300 block mb-0.5">
                  {t.pricing.domainNoticeTitle}
                </span>
                <span>{t.pricing.domainNoticeText}</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <Button
                href={whatsappUrl}
                isExternal
                size="lg"
                variant="primary"
                className="w-full text-base py-4 shadow-xl shadow-brand-500/25"
                icon={<ArrowUpRight className={`w-5 h-5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />}
                iconPosition="right"
              >
                {t.pricing.ctaButton.replace('€299', pricing.basePriceFormatted).replace('299€', pricing.basePriceFormatted).replace('$299', pricing.basePriceFormatted)}
              </Button>

              <p className="text-xs text-center text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
                {t.pricing.footnote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

