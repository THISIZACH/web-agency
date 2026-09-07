'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { BARBER_SERVICES } from '@/config/barberData';
import { Scissors, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function BarberServicesPage() {
  const { locale, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: locale === 'pt' ? 'Todos os Serviços' : locale === 'ar' ? 'جميع الخدمات' : 'All Services' },
    { id: 'Hair', label: locale === 'pt' ? 'Cortes de Cabelo' : locale === 'ar' ? 'قص الشعر' : 'Hair Cuts' },
    { id: 'Shave', label: locale === 'pt' ? 'Barba & Navalha' : locale === 'ar' ? 'حلاقة الذقن' : 'Shave & Beard' },
    { id: 'Package', label: locale === 'pt' ? 'Combos Executivos' : locale === 'ar' ? 'الباقات الشاملة' : 'Signature Combos' },
    { id: 'Therapy', label: locale === 'pt' ? 'Tratamentos & Spa' : locale === 'ar' ? 'العلاجات والسبا' : 'Therapy & Scalp' },
  ];

  const filtered = selectedCategory === 'all'
    ? BARBER_SERVICES
    : BARBER_SERVICES.filter(s => s.category === selectedCategory || (selectedCategory === 'Shave' && (s.category === 'Shave' || s.category === 'Beard')));

  return (
    <div className="bg-[#0d0d0d] text-[#f5f0eb] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono uppercase tracking-widest">
            <Scissors className="w-3.5 h-3.5 -rotate-45" />
            <span>{locale === 'pt' ? 'Preçário & Serviços de Autor' : locale === 'ar' ? 'دليل الخدمات والأسعار' : 'Menu of Services'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase">
            {locale === 'pt' ? 'Menu de Serviços' : locale === 'ar' ? 'قائمة الخدمات' : 'The Service Menu'}
          </h1>
          <p className="text-stone-400 text-sm max-w-xl mx-auto">
            {locale === 'pt'
              ? 'Todos os serviços incluem toalha quente aromática, diagnóstico capilar e acabamento com produtos de autor.'
              : locale === 'ar'
              ? 'تشمل كافة الخدمات منشفة عطرية ساخنة، فحص دقيق للشعر، وتصفيف نهائي بمنتجات راقية.'
              : 'Every treatment includes botanical hot towel infusion, facial contour analysis, and premium artisanal finish.'}
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-stone-800 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded text-xs uppercase font-mono tracking-wider font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#d4af37] text-[#0d0d0d] shadow-md shadow-[#d4af37]/20 font-bold'
                  : 'bg-[#171717] text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((service) => (
            <div
              key={service.id}
              className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-[#141414] border border-stone-800 hover:border-[#d4af37]/40 transition-all duration-300 group"
            >
              <div className="relative w-full sm:w-44 h-48 sm:h-auto rounded-xl overflow-hidden bg-stone-900 shrink-0">
                <Image
                  src={service.image}
                  alt={service.name[locale]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {service.badge && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[#d4af37] text-black">
                    {service.badge[locale]}
                  </span>
                )}
              </div>

              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      {service.name[locale]}
                    </h3>
                    <span className="font-mono text-lg font-bold text-[#d4af37] shrink-0">
                      {service.price[locale]}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-stone-400 mt-1">
                    <Clock className="w-3 h-3 text-[#d4af37]" />
                    <span>{service.duration}</span>
                  </span>
                  <p className="text-xs text-stone-300 mt-3 leading-relaxed">
                    {service.desc[locale]}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-500 uppercase">{service.category}</span>
                  <Link
                    href={`/demos/barbershop/book?service=${service.id}`}
                    className="inline-flex items-center gap-1 text-xs uppercase font-bold text-[#d4af37] hover:text-[#e5c158]"
                  >
                    <span>{locale === 'pt' ? 'Marcar Cadeira' : locale === 'ar' ? 'حجز الموعد' : 'Book Chair'}</span>
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

