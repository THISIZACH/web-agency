'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { demoUrls } from '@/config/demos';
import { getWhatsAppUrl } from '@/config/contact';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Sparkles, Smartphone, Laptop } from 'lucide-react';

export function Hero() {
  const { t, pricing, locale, isRTL } = useLanguage();
  const whatsappUrl = getWhatsAppUrl(locale, 'hero');

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-sky-500/10 dark:bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <Sparkles className="w-4 h-4 text-brand-500 shrink-0" />
            <span>{t.hero.badge.replace('€299', pricing.basePriceFormatted).replace('299€', pricing.basePriceFormatted).replace('$299', pricing.basePriceFormatted)}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-5 sm:mb-6 break-words">
            <span>{t.hero.titleStart}</span>
            <span className="bg-gradient-to-r from-brand-600 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
            <span>{t.hero.titleEnd}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full max-w-md sm:max-w-none mx-auto">
            <Button
              href={whatsappUrl}
              isExternal
              size="lg"
              variant="primary"
              className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 shadow-xl shadow-brand-500/25"
              icon={<ArrowUpRight className={`w-5 h-5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />}
              iconPosition="right"
            >
              {t.hero.primaryCta}
            </Button>
            <Button
              href="/#demos"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4"
            >
              {t.hero.secondaryCta}
            </Button>
          </div>

          {/* Quick Value Bullets */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
            {t.hero.bulletPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Device Mockup Showcase */}
        <div className="mt-12 sm:mt-16 md:mt-20 max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-2.5 sm:p-4 bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 border border-slate-300 dark:border-slate-700/80 shadow-2xl shadow-slate-900/10 dark:shadow-black/60">
            {/* Top Device Bar */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 mb-2 bg-slate-100 dark:bg-slate-950/80 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-lg bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-[11px] sm:text-xs font-mono border border-slate-200 dark:border-slate-800 truncate mx-2">
                <span className="text-brand-500">https://</span>yourbusiness.com
              </div>
              <div className="text-[11px] sm:text-xs text-brand-500 font-semibold px-2 py-0.5 rounded bg-brand-500/10 shrink-0">
                {pricing.basePriceFormatted}
              </div>
            </div>

            {/* Mockup Screen Grid */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-3 p-3 sm:p-4">
              {/* Card 1: Restaurant Preview */}
              <a
                href={demoUrls.restaurant}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="h-44 relative overflow-hidden">
                  <Image
                    src="/images/restaurant/restaurant-hero.jpg"
                    alt="Restaurant Demo"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-2.5 start-2.5 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950">
                    {locale === 'pt' ? 'Restaurante' : locale === 'ar' ? 'مطاعم' : 'Restaurant'}
                  </span>
                </div>
                <div className="p-3.5">
                  <h4 className="text-white text-sm font-bold group-hover:text-amber-400 transition-colors">
                    Savor Bistro & Lounge
                  </h4>
                  <p className="text-slate-400 text-xs mt-1 line-clamp-2">
                    {locale === 'pt'
                       ? 'Ementa digital, reservas de mesas e galeria fotográfica de alta qualidade.'
                      : locale === 'ar'
                      ? 'قوائم طعام رقمية، حجز طاولات مباشر، وتصميم أنيق للضيافة.'
                      : 'Digital menus, table booking, and artisan dining presentation.'}
                  </p>
                </div>
              </a>

              {/* Card 2: Dentist Preview */}
              <a
                href={demoUrls.dentist}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="h-44 relative overflow-hidden">
                  <Image
                    src="/images/dentist/dentist-hero.jpg"
                    alt="Dental Clinic Demo"
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-2.5 start-2.5 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-cyan-600 text-white">
                    {locale === 'pt' ? 'Clínica Dentária' : locale === 'ar' ? 'عيادة أسنان' : 'Dental Clinic'}
                  </span>
                </div>
                <div className="p-3.5">
                  <h4 className="text-white text-sm font-bold group-hover:text-cyan-400 transition-colors">
                    NovaSmile Dental Clinic
                  </h4>
                  <p className="text-slate-400 text-xs mt-1 line-clamp-2">
                    {locale === 'pt'
                      ? 'Especialidades clínicas, marcações online em 4 passos e visualizador de sorriso.'
                      : locale === 'ar'
                      ? 'تخصصات طبية دقيقة، حجز مواعيد تفاعلي في 4 خطوات، ومقارنة الابتسامة.'
                      : 'Clinical treatments, 4-step appointment booking, and interactive smile preview.'}
                  </p>
                </div>
              </a>

              {/* Card 3: Architecture Preview */}
              <a
                href={demoUrls.architect}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="h-44 relative overflow-hidden">
                  <Image
                    src="/images/architect/architect-hero.jpg"
                    alt="Architecture Studio Demo"
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-2.5 start-2.5 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-stone-300 text-stone-900 font-serif">
                    {locale === 'pt' ? 'Arquitetura' : locale === 'ar' ? 'عمارة وتصميم' : 'Architecture'}
                  </span>
                </div>
                <div className="p-3.5">
                  <h4 className="text-white text-sm font-bold group-hover:text-stone-300 transition-colors">
                    Atelier Forma Architects
                  </h4>
                  <p className="text-slate-400 text-xs mt-1 line-clamp-2">
                    {locale === 'pt'
                      ? 'Portfólio editorial de prestígio, páginas dinâmicas de projetos e consulta espacial.'
                      : locale === 'ar'
                      ? 'معرض أعمال ومشاريع معمارية فاخرة، صفحات مفصلة، ونموذج استفسار للمشاريع.'
                      : 'Luxury editorial portfolio, dynamic project case studies, and spatial design inquiries.'}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

