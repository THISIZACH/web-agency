'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { Accordion } from '@/components/ui/Accordion';

export function FAQSection() {
  const { t, pricing } = useLanguage();

  const formattedItems = t.faq.items.map((item, index) => ({
    id: `faq-${index}`,
    question: item.question,
    answer: item.answer
      .replace(/€299/g, pricing.basePriceFormatted)
      .replace(/299€/g, pricing.basePriceFormatted)
      .replace(/\$299/g, pricing.basePriceFormatted)
      .replace(/€30/g, pricing.updatePriceFormatted)
      .replace(/30€/g, pricing.updatePriceFormatted)
      .replace(/\$30/g, pricing.updatePriceFormatted),
  }));

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-slate-50/50 dark:bg-slate-900/40 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="brand" className="mb-4">
            {t.faq.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {t.faq.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.faq.subtitle.replace('€299', pricing.basePriceFormatted).replace('299€', pricing.basePriceFormatted).replace('$299', pricing.basePriceFormatted)}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion items={formattedItems} />
        </div>
      </div>
    </section>
  );
}

