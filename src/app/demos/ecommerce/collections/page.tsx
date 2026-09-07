'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ECOMMERCE_COLLECTIONS } from '@/config/ecommerceProducts';
import { ArrowRight } from 'lucide-react';

export default function EcommerceCollectionsPage() {
  const { locale, isRTL } = useLanguage();

  return (
    <div className="bg-white text-neutral-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
            {locale === 'pt' ? 'Edições Sazonais & Arquivo' : locale === 'ar' ? 'المجموعات الحصرية' : 'Seasonal Archives'}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-neutral-950 uppercase tracking-tight">
            {locale === 'pt' ? 'Lookbooks & Coleções' : locale === 'ar' ? 'عروض الأزياء والكتالوج' : 'Collections & Lookbooks'}
          </h1>
          <p className="text-neutral-500 text-sm max-w-xl mx-auto font-light leading-relaxed">
            {locale === 'pt'
              ? 'Cada coleção é concebida como uma narrativa completa de tecidos, tons terrosos e proporções arquitetónicas.'
              : locale === 'ar'
              ? 'كل مجموعة تمثل قصة متكاملة من الأنسجة الفاخرة والألوان الطبيعية والقصات المعمارية النقية.'
              : 'Each collection is conceived as an architectural continuum of fiber, mineral dye palettes, and fluid tailoring.'}
          </p>
        </div>

        {/* Collections Editorial Grid */}
        <div className="space-y-16">
          {ECOMMERCE_COLLECTIONS.map((col, idx) => (
            <div
              key={col.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:col-span-7 relative h-[480px] rounded-2xl overflow-hidden bg-neutral-100 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={col.image}
                  alt={col.title[locale]}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className={`lg:col-span-5 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">
                  Edition {idx + 1} • {col.itemCount}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-neutral-950 uppercase tracking-tight">
                  {col.title[locale]}
                </h2>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
                  {col.subtitle[locale]}
                </p>
                <div className="pt-2">
                  <Link
                    href="/demos/ecommerce/shop"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-black text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md"
                  >
                    <span>{locale === 'pt' ? 'Explorar Lookbook' : locale === 'ar' ? 'تصفح المجموعة' : 'Explore Lookbook'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

