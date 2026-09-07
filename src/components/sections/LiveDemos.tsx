'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { DEMOS_DATA } from '@/config/demos';
import { getWhatsAppUrl, WhatsAppIntent } from '@/config/contact';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight, Check, Sparkles, ExternalLink, Filter } from 'lucide-react';

export function LiveDemos() {
  const { t, locale, isRTL, pricing } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    {
      id: 'all',
      label: locale === 'pt' ? 'Todos os Modelos (6)' : locale === 'ar' ? 'جميع النماذج (6)' : 'All Demos (6)',
    },
    {
      id: 'restaurant',
      label: locale === 'pt' ? 'Restaurante & Lounge' : locale === 'ar' ? 'مطاعم وضيافة' : 'Restaurant & Dining',
    },
    {
      id: 'barbershop',
      label: locale === 'pt' ? 'Barbearia de Luxo' : locale === 'ar' ? 'صالون حلاقة راقٍ' : 'Luxury Barbershop',
    },
    {
      id: 'dentist',
      label: locale === 'pt' ? 'Clínica Dentária' : locale === 'ar' ? 'عيادات الأسنان والصحة' : 'Dental Clinic',
    },
    {
      id: 'architect',
      label: locale === 'pt' ? 'Atelier de Arquitetura' : locale === 'ar' ? 'عمارة وتصميم معاصر' : 'Architecture Studio',
    },
    {
      id: 'ecommerce',
      label: locale === 'pt' ? 'Loja Online de Moda' : locale === 'ar' ? 'متجر أزياء فاخر' : 'Luxury E-Commerce',
    },
    {
      id: 'lawyer',
      label: locale === 'pt' ? 'Sociedade de Advogados' : locale === 'ar' ? 'مكتب محاماة واستشارات' : 'Corporate Law Firm',
    },
  ];

  const filteredDemos =
    selectedFilter === 'all'
      ? DEMOS_DATA
      : DEMOS_DATA.filter((demo) => demo.id === selectedFilter);

  return (
    <section id="demos" className="py-16 sm:py-20 lg:py-24 bg-slate-50/60 dark:bg-slate-900/40 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="brand" className="mb-4">
            {t.demos.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {t.demos.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.demos.subtitle}
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => {
            const isActive = selectedFilter === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedFilter(opt.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-brand-500 dark:text-white shadow-md shadow-brand-500/20'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDemos.map((demo) => {
            const intent = demo.id as WhatsAppIntent;
            const whatsappUrl = getWhatsAppUrl(locale, intent);

            // Per-demo color identities
            const isRestaurant = demo.id === 'restaurant';
            const isBarber = demo.id === 'barbershop';
            const isDentist = demo.id === 'dentist';
            const isArchitect = demo.id === 'architect';
            const isEcommerce = demo.id === 'ecommerce';
            const isLawyer = demo.id === 'lawyer';

            const borderHoverClass = isRestaurant
              ? 'hover:border-amber-500/50 hover:shadow-amber-500/10'
              : isBarber
              ? 'hover:border-yellow-600/50 hover:shadow-yellow-600/10'
              : isDentist
              ? 'hover:border-cyan-500/50 hover:shadow-cyan-500/10'
              : isArchitect
              ? 'hover:border-stone-500/50 hover:shadow-stone-500/10'
              : isEcommerce
              ? 'hover:border-purple-500/50 hover:shadow-purple-500/10'
              : 'hover:border-blue-700/50 hover:shadow-blue-700/10';

            const badgeBgClass = isRestaurant
              ? 'bg-amber-600 text-white'
              : isBarber
              ? 'bg-[#d4af37] text-slate-950 font-black'
              : isDentist
              ? 'bg-cyan-600 text-white'
              : isArchitect
              ? 'bg-stone-200 text-stone-950 font-bold'
              : isEcommerce
              ? 'bg-neutral-900 text-white border border-neutral-700'
              : 'bg-blue-900 text-white';

            return (
              <div
                key={demo.id}
                className={`group flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg shadow-slate-900/5 dark:shadow-black/30 ${borderHoverClass} hover:-translate-y-1.5 transition-all duration-300`}
              >
                {/* Visual Header with Image */}
                <div>
                  <div className="relative h-52 sm:h-60 md:h-64 w-full overflow-hidden bg-slate-950">
                    <Image
                      src={demo.image}
                      alt={demo.title[locale]}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 sm:top-4 inset-x-3.5 sm:inset-x-4 flex items-center justify-between">
                      <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/10">
                        {demo.category[locale]}
                      </span>
                      <span
                        className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-wider shadow-md ${badgeBgClass}`}
                      >
                        {demo.badge[locale]}
                      </span>
                    </div>

                    {/* Title & Tagline overlay */}
                    <div className="absolute bottom-3 sm:bottom-4 inset-x-4 sm:inset-x-6 text-white space-y-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-brand-300 transition-colors">
                        {demo.title[locale]}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-1 font-medium">
                        {demo.tagline[locale]}
                      </p>
                    </div>
                  </div>

                  {/* Card Content & Features */}
                  <div className="p-5 sm:p-7 space-y-5">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {demo.description[locale]}
                    </p>

                    {/* Key Included Features */}
                    <div className="space-y-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-[11px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                        {locale === 'pt' ? 'O que inclui esta demo:' : locale === 'ar' ? 'ما يشمله هذا النموذج:' : 'Key features included:'}
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                        {demo.features[locale].map((feat, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 text-[10px] font-bold">
                              ✓
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer CTAs */}
                <div className="p-5 sm:p-7 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-4 space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">
                      {locale === 'pt' ? 'Preço do website completo:' : locale === 'ar' ? 'سعر الموقع بالكامل:' : 'Complete bespoke build:'}
                    </span>
                    <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                      {pricing.basePriceFormatted}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <Link
                      href={demo.demoUrl}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-brand-600 dark:hover:bg-brand-500 text-xs font-bold transition-all shadow-md group-hover:scale-[1.02]"
                    >
                      <span>{t.demos.viewDemo}</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                    </Link>

                    <Button
                      href={whatsappUrl}
                      isExternal
                      variant="whatsapp"
                      size="sm"
                      className="w-full text-xs font-bold"
                    >
                      {t.demos.orderThisStyle}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
