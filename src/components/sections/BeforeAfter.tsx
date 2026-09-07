'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import {
  XCircle,
  CheckCircle2,
  SlidersHorizontal,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Zap,
  Clock,
  Smartphone,
  MessageCircle,
  AlertTriangle,
} from 'lucide-react';

export function BeforeAfter() {
  const { locale, pricing, isRTL } = useLanguage();
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [mobileTab, setMobileTab] = useState<'stacked' | 'before' | 'after'>('stacked');

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 dark:bg-slate-900/40 relative border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-4">
          <Badge variant="brand">
            {locale === 'pt'
              ? 'Antes & Depois'
              : locale === 'ar'
              ? 'مقارنة قبل وبعد'
              : 'Interactive Comparison'}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {locale === 'pt'
              ? 'De Básico e Ignorado → Moderno e Lucrativo'
              : locale === 'ar'
              ? 'من موقع قديم ومهمل ← إلى موقع عصري يجلب العملاء'
              : 'From Outdated & Ignored → Modern & High-Converting'}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {locale === 'pt'
              ? 'Compare um website amador comum com o padrão de alta conversão da NexaWeb Studio.'
              : locale === 'ar'
              ? 'قارن بوضوح بين المواقع القديمة الضعيفة وبين المواقع الاحترافية التي نبنيها في NexaWeb Studio.'
              : 'Compare a typical neglected business site with a NexaWeb Studio high-converting build.'}
          </p>

          {/* Desktop/Tablet Preset Buttons */}
          <div className="hidden md:flex items-center justify-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => setSliderPos(25)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                sliderPos <= 35
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {locale === 'pt' ? 'Focar "Antes"' : locale === 'ar' ? 'تركيز على "قبل"' : 'Focus: Before'}
            </button>
            <button
              type="button"
              onClick={() => setSliderPos(50)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                sliderPos > 35 && sliderPos < 65
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {locale === 'pt' ? 'Comparação 50/50' : locale === 'ar' ? 'مقارنة 50/50' : 'Split 50 / 50'}
            </button>
            <button
              type="button"
              onClick={() => setSliderPos(75)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                sliderPos >= 65
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {locale === 'pt' ? 'Focar "Depois"' : locale === 'ar' ? 'تركيز على "بعد"' : 'Focus: After'}
            </button>
          </div>

          {/* Mobile Tab Switcher */}
          <div className="flex md:hidden items-center justify-center p-1 bg-slate-200/80 dark:bg-slate-800 rounded-xl max-w-xs mx-auto text-xs font-semibold">
            <button
              type="button"
              onClick={() => setMobileTab('stacked')}
              className={`flex-1 py-1.5 rounded-lg transition-all ${
                mobileTab === 'stacked'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {locale === 'pt' ? 'Ambos' : locale === 'ar' ? 'الكل' : 'Both'}
            </button>
            <button
              type="button"
              onClick={() => setMobileTab('before')}
              className={`flex-1 py-1.5 rounded-lg transition-all ${
                mobileTab === 'before'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {locale === 'pt' ? 'Antes' : locale === 'ar' ? 'قبل' : 'Before'}
            </button>
            <button
              type="button"
              onClick={() => setMobileTab('after')}
              className={`flex-1 py-1.5 rounded-lg transition-all ${
                mobileTab === 'after'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {locale === 'pt' ? 'Depois' : locale === 'ar' ? 'بعد' : 'After'}
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP & TABLET VIEW: Responsive Dual Panel with Proportional Split */}
        {/* ========================================================================= */}
        <div className="hidden md:block">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-950">
            {/* Top Bar Indicator */}
            <div className="px-6 py-3 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-2 font-medium">
                <SlidersHorizontal className="w-3.5 h-3.5 text-brand-500" />
                <span>
                  {locale === 'pt'
                    ? 'Use o cursor para ajustar a proporção da comparação'
                    : locale === 'ar'
                    ? 'استخدم شريط التمرير للتحكم في مساحة المقارنة'
                    : 'Adjust slider to expand or collapse each view'}
                </span>
              </span>
              <div className="flex items-center gap-3 font-mono text-xs font-bold">
                <span className="text-rose-600 dark:text-rose-400">
                  {locale === 'pt' ? 'Antes' : locale === 'ar' ? 'قبل' : 'Before'} {100 - sliderPos}%
                </span>
                <span className="text-slate-400">/</span>
                <span className="text-brand-600 dark:text-brand-400">
                  {locale === 'pt' ? 'Depois' : locale === 'ar' ? 'بعد' : 'After'} {sliderPos}%
                </span>
              </div>
            </div>

            {/* Side-by-Side Flex Container */}
            <div className="flex flex-row w-full min-h-[520px] overflow-hidden">
              {/* BEFORE PANEL (LEFT in LTR, RIGHT in RTL) */}
              <div
                style={{ width: `${100 - sliderPos}%` }}
                className="min-w-[180px] sm:min-w-[220px] lg:min-w-[280px] transition-[width] duration-200 ease-out bg-rose-50/40 dark:bg-rose-950/20 border-e border-rose-200 dark:border-rose-900/40 p-5 sm:p-6 lg:p-8 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                      <span>{locale === 'pt' ? 'ANTES: Típico & Lento' : locale === 'ar' ? 'قبل: متهالك وضعيف' : 'BEFORE: Outdated & Slow'}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 text-[11px] font-bold border border-rose-200 dark:border-rose-800">
                      ⚠️ 4.8s Delay
                    </span>
                  </div>

                  {/* Body Mockup */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider">
                      {locale === 'pt' ? 'Website Amador de 2015' : locale === 'ar' ? 'تصميم قديم غير منظم' : 'Legacy 2015-Era Webpage'}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-200 leading-snug">
                      {locale === 'pt'
                        ? 'Layout confuso, lento e sem conversão'
                        : locale === 'ar'
                        ? 'صفحة بطيئة، غير متجاوبة ولا تجلب الزبائن'
                        : 'Slow, cluttered layout losing valuable leads'}
                    </h3>
                    <p className="text-xs lg:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {locale === 'pt'
                        ? 'Sem botão de WhatsApp visível. O visitante precisa de dar zoom no telemóvel para conseguir ler e desiste em 3 segundos.'
                        : locale === 'ar'
                        ? 'غياب زر واتساب مباشر، نصوص مكدسة يصعب قراءتها في الهاتف، وارتداد أكثر من 60% من الزوار خلال 3 ثوانٍ.'
                        : 'No prominent WhatsApp button, poor mobile scaling requiring pinch-to-zoom, and high visitor drop-off within seconds.'}
                    </p>

                    {/* Flaws checklist */}
                    <div className="pt-3 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-rose-700 dark:text-rose-300">
                        <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span>{locale === 'pt' ? 'Mobile quebrado e sem adaptação' : locale === 'ar' ? 'غير متوافق مع شاشات الهواتف' : 'Broken mobile viewport scaling'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-rose-700 dark:text-rose-300">
                        <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span>{locale === 'pt' ? 'Sem WhatsApp ou reserva direta' : locale === 'ar' ? 'بدون زر اتصال سريع أو واتساب' : 'No direct WhatsApp booking trigger'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-rose-700 dark:text-rose-300">
                        <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span>{locale === 'pt' ? 'Taxa de rejeição superior a 65%' : locale === 'ar' ? 'معدل ارتداد يتجاوز 65%' : 'Over 65% bounce rate on cellular 4G'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-rose-200/60 dark:border-rose-900/30 text-xs text-slate-500">
                  {locale === 'pt' ? 'Resultado: Clientes vão para concorrentes modernos' : locale === 'ar' ? 'النتيجة: ذهاب الزبائن للمنافسين' : 'Result: High bounce rate & lost customers'}
                </div>
              </div>

              {/* AFTER PANEL (RIGHT in LTR, LEFT in RTL) */}
              <div
                style={{ width: `${sliderPos}%` }}
                className="min-w-[180px] sm:min-w-[220px] lg:min-w-[280px] transition-[width] duration-200 ease-out bg-slate-900 text-white p-5 sm:p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/40 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                      <span>{locale === 'pt' ? 'DEPOIS: NexaWeb Studio' : locale === 'ar' ? 'بعد: تصميم NexaWeb Studio' : 'AFTER: NexaWeb Studio'}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold border border-emerald-500/40">
                      ⚡ 99/100 Lighthouse
                    </span>
                  </div>

                  {/* Body Mockup */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      {locale === 'pt' ? 'Alta Conversão Comprovada' : locale === 'ar' ? 'أداء فائق وتصميم عالي التحويل' : 'Engineered For Conversions'}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-extrabold text-white leading-snug">
                      {locale === 'pt'
                        ? 'Design Moderno & Agendamento Instantâneo'
                        : locale === 'ar'
                        ? 'موقع عصري وسريع مع حجز فوري عبر واتساب'
                        : 'Sleek Aesthetic with 1-Tap Instant WhatsApp'}
                    </h3>
                    <p className="text-xs lg:text-sm text-slate-300 leading-relaxed">
                      {locale === 'pt'
                        ? 'Estrutura ultra-rápida Next.js, fotos impecáveis, navegação pensada para polegar e botões de contacto que transformam cliques em vendas.'
                        : locale === 'ar'
                        ? 'سرعة فائقة بتقنية Next.js، صور ممتازة، وتجربة تصفح مثالية تجعل كل زائر يتواصل معك بنقرة واحدة.'
                        : 'Ultra-fast Next.js architecture, thumb-friendly navigation, retina-ready graphics, and direct triggers converting clicks into paying customers.'}
                    </p>

                    {/* Features checklist */}
                    <div className="pt-3 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{locale === 'pt' ? '100% Otimizado para Mobile & Tablet' : locale === 'ar' ? 'متوافق تماماً مع جميع الأجهزة والهواتف' : '100% Fluid Responsive Layout'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{locale === 'pt' ? 'Botão WhatsApp com mensagem pré-definida' : locale === 'ar' ? 'زر واتساب برابط محادثة فوري ومباشر' : 'Instant WhatsApp CTA with pre-filled message'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{locale === 'pt' ? `Preço único ${pricing.basePriceFormatted} sem taxas surpresa` : locale === 'ar' ? `سعر محدد ${pricing.basePriceFormatted} بدون رسوم خفية` : `Fixed ${pricing.basePriceFormatted} build with zero recurring platform fee`}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 relative z-10 flex items-center justify-between">
                  <span>{locale === 'pt' ? 'Resultado: Mais contactos e agenda preenchida' : locale === 'ar' ? 'النتيجة: طلبات حقيقية وأرباح أعلى' : 'Result: Immediate inquiries & higher revenue'}</span>
                  <span className="text-brand-400 font-semibold">{locale === 'pt' ? '48h Entrega' : locale === 'ar' ? 'تسليم 48 ساعة' : '48h Delivery'}</span>
                </div>
              </div>
            </div>

            {/* Range Slider Control at Bottom */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4">
              <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 shrink-0">
                {locale === 'pt' ? 'Antes' : locale === 'ar' ? 'قبل' : 'Before'}
              </span>
              <input
                type="range"
                min="20"
                max="80"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                aria-label="Comparison slider"
                className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-ew-resize accent-brand-600"
              />
              <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 shrink-0">
                {locale === 'pt' ? 'Depois' : locale === 'ar' ? 'بعد' : 'After'}
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (< md): Vertically Stacked Cards or Tabbed View */}
        {/* ========================================================================= */}
        <div className="block md:hidden space-y-6">
          {/* Card: BEFORE */}
          {(mobileTab === 'stacked' || mobileTab === 'before') && (
            <div className="rounded-2xl border-2 border-rose-300 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/20 p-5 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                  <span>{locale === 'pt' ? 'ANTES: Desatualizado' : locale === 'ar' ? 'قبل: موقع قديم' : 'BEFORE: Outdated'}</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 text-[11px] font-bold">
                  ⚠️ 4.8s Delay
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                  {locale === 'pt'
                    ? 'Layout confuso, lento e sem conversão'
                    : locale === 'ar'
                    ? 'صفحة بطيئة، غير متجاوبة ولا تجلب الزبائن'
                    : 'Slow, cluttered layout losing valuable leads'}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {locale === 'pt'
                    ? 'Sem botão de WhatsApp visível. O visitante precisa de dar zoom no telemóvel para conseguir ler e desiste em 3 segundos.'
                    : locale === 'ar'
                    ? 'غياب زر واتساب مباشر، نصوص مكدسة يصعب قراءتها في الهاتف، وارتداد الزوار خلال ثوانٍ.'
                    : 'No prominent WhatsApp button, poor mobile scaling requiring pinch-to-zoom, and high visitor bounce rate.'}
                </p>
              </div>

              <div className="space-y-2 pt-1 border-t border-rose-200/60 dark:border-rose-900/30 text-xs text-rose-700 dark:text-rose-300">
                <div className="flex items-center gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>{locale === 'pt' ? 'Mobile quebrado e sem adaptação' : locale === 'ar' ? 'غير متوافق مع الهواتف' : 'Broken mobile viewport'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>{locale === 'pt' ? 'Sem WhatsApp ou reserva direta' : locale === 'ar' ? 'بدون زر اتصال سريع أو واتساب' : 'No direct WhatsApp trigger'}</span>
                </div>
              </div>
            </div>
          )}

          {/* Transformation Indicator on Mobile */}
          {mobileTab === 'stacked' && (
            <div className="flex items-center justify-center gap-2 py-1 text-slate-400">
              <div className="h-px bg-slate-300 dark:bg-slate-700 flex-1" />
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-semibold">
                <ArrowDown className="w-3.5 h-3.5" />
                <span>{locale === 'pt' ? 'A Transformação NexaWeb' : locale === 'ar' ? 'التحول مع NexaWeb' : 'NexaWeb Upgrade'}</span>
              </div>
              <div className="h-px bg-slate-300 dark:bg-slate-700 flex-1" />
            </div>
          )}

          {/* Card: AFTER */}
          {(mobileTab === 'stacked' || mobileTab === 'after') && (
            <div className="rounded-2xl border-2 border-brand-500/40 bg-slate-900 text-white p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/40 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />
                  <span>{locale === 'pt' ? 'DEPOIS: NexaWeb Studio' : locale === 'ar' ? 'بعد: NexaWeb Studio' : 'AFTER: NexaWeb Studio'}</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold border border-emerald-500/40">
                  ⚡ 99/100 Lighthouse
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">
                  {locale === 'pt'
                    ? 'Design Moderno & Agendamento Instantâneo'
                    : locale === 'ar'
                    ? 'موقع عصري وسريع مع حجز فوري عبر واتساب'
                    : 'Sleek Aesthetic with 1-Tap Instant WhatsApp'}
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {locale === 'pt'
                    ? 'Estrutura ultra-rápida Next.js, fotos impecáveis, navegação pensada para polegar e botões de contacto que transformam cliques em vendas.'
                    : locale === 'ar'
                    ? 'سرعة فائقة بتقنية Next.js، صور ممتازة، وتجربة تصفح مثالية تجعل كل زائر يتواصل معك بنقرة واحدة.'
                    : 'Ultra-fast Next.js architecture, thumb-friendly navigation, retina-ready graphics, and direct triggers converting clicks into paying customers.'}
                </p>
              </div>

              <div className="space-y-2 pt-1 border-t border-slate-800 text-xs text-emerald-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{locale === 'pt' ? '100% Otimizado para Mobile' : locale === 'ar' ? 'متوافق تماماً مع الهواتف' : '100% Fluid Responsive Layout'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{locale === 'pt' ? 'Botão WhatsApp com mensagem pré-definida' : locale === 'ar' ? 'زر واتساب برابط محادثة فوري ومباشر' : 'Instant WhatsApp CTA with pre-filled message'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{locale === 'pt' ? `Preço único ${pricing.basePriceFormatted}` : locale === 'ar' ? `سعر محدد ${pricing.basePriceFormatted}` : `Fixed ${pricing.basePriceFormatted} build with zero lock-in`}</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between">
                <span>{locale === 'pt' ? 'Entrega em 48 Horas' : locale === 'ar' ? 'تسليم خلال 48 ساعة' : '48h Guaranteed Delivery'}</span>
                <span className="text-brand-400 font-semibold">{locale === 'pt' ? '48h Entrega' : locale === 'ar' ? 'تسليم 48 ساعة' : '48h Delivery'}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
