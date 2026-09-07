'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getOrganizationSchema, getFaqSchema } from '@/config/seo';

export function JsonLd() {
  const { locale, t, pricing } = useLanguage();

  const orgSchema = getOrganizationSchema(locale);

  const formattedFaq = t.faq.items.map((item) => ({
    question: item.question,
    answer: item.answer
      .replace(/€299/g, pricing.basePriceFormatted)
      .replace(/299€/g, pricing.basePriceFormatted)
      .replace(/\$299/g, pricing.basePriceFormatted)
      .replace(/€30/g, pricing.updatePriceFormatted)
      .replace(/30€/g, pricing.updatePriceFormatted)
      .replace(/\$30/g, pricing.updatePriceFormatted),
  }));

  const faqSchema = getFaqSchema(formattedFaq);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

