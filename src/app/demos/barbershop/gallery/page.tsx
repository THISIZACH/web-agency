'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { BARBER_GALLERY } from '@/config/barberData';
import { Scissors, Calendar, ArrowRight } from 'lucide-react';

export default function BarbershopGalleryPage() {
  const { locale, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: locale === 'pt' ? 'Tudo' : locale === 'ar' ? 'الكل' : 'All Work' },
    { id: 'Cuts', label: locale === 'pt' ? 'Cortes & Tapers' : locale === 'ar' ? 'القصات والتدرجات' : 'Precision Cuts' },
    { id: 'Beard', label: locale === 'pt' ? 'Barba & Navalha' : locale === 'ar' ? 'اللحية والموس' : 'Beard Architecture' },
    { id: 'Rituals', label: locale === 'pt' ? 'Rituais & Cuidados' : locale === 'ar' ? 'طقوس الحلاقة' : 'Hot Towel Rituals' },
    { id: 'Atmosphere', label: locale === 'pt' ? 'O Estúdio' : locale === 'ar' ? 'أجواء الاستوديو' : 'Studio Lounge' },
  ];

  const items = activeFilter === 'all'
    ? BARBER_GALLERY
    : BARBER_GALLERY.filter(item => item.category === activeFilter);

  return (
    <div className="bg-[#0d0d0d] text-[#f5f0eb] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono uppercase tracking-widest">
            <Scissors className="w-3.5 h-3.5 -rotate-45" />
            <span>{locale === 'pt' ? 'Portfólio Visual & Detalhes' : locale === 'ar' ? 'المعرض المرئي' : 'Craft in Detail'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase">
            {locale === 'pt' ? 'Galeria do Estúdio' : locale === 'ar' ? 'معرض الصور' : 'Studio Gallery'}
          </h1>
          <p className="text-stone-400 text-sm max-w-xl mx-auto">
            {locale === 'pt'
              ? 'Uma visão detalhada das nossas técnicas de tesoura, rituais de toalha quente e atmosfera Mayfair.'
              : locale === 'ar'
              ? 'نظرة مقربة على دقة المقص اليدوي، طقوس المنشفة الساخنة الفاخرة وأجواء صالوننا المميزة.'
              : 'An intimate glimpse into our shear work, steaming hot towel infusions, and refined Mayfair lounge.'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-stone-800 pb-6">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded text-xs uppercase font-mono tracking-wider font-semibold transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-[#d4af37] text-[#0d0d0d] shadow-md shadow-[#d4af37]/20 font-bold'
                  : 'bg-[#171717] text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-80 rounded-xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-[#d4af37]/50 transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-mono uppercase text-[#d4af37] tracking-widest">{item.category}</span>
                <h3 className="font-serif text-lg font-bold text-white mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking CTA */}
        <div className="mt-16 text-center p-10 rounded-2xl bg-[#141414] border border-[#d4af37]/30 space-y-4 max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-white">
            {locale === 'pt' ? 'Gostou do que viu?' : locale === 'ar' ? 'أعجبك مستوى العمل؟' : 'Inspired by Our Craft?'}
          </h3>
          <p className="text-xs text-stone-400">
            {locale === 'pt' ? 'Garanta a sua cadeira com o seu barbeiro de eleição.' : locale === 'ar' ? 'احجز مقعدك الآن مع حلاقك المفضل.' : 'Book your chair with your barber of choice today.'}
          </p>
          <div className="pt-2">
            <Link
              href="/demos/barbershop/book"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-[#d4af37] hover:bg-[#e5c158] text-[#0d0d0d] font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#d4af37]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>{locale === 'pt' ? 'Marcar Cadeira' : locale === 'ar' ? 'حجز موعد' : 'Book Chair'}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

