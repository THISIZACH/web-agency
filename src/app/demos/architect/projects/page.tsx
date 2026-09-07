'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ARCHITECT_PROJECTS, ArchitectProject } from '@/config/architectProjects';
import { ArrowUpRight } from 'lucide-react';

export default function ArchitectProjectsPage() {
  const { locale, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'hospitality' | 'commercial' | 'interior'>('all');

  const filtered = activeFilter === 'all'
    ? ARCHITECT_PROJECTS
    : ARCHITECT_PROJECTS.filter((p) => p.category === activeFilter);

  const filters = [
    { id: 'all' as const, label: locale === 'pt' ? 'Todos os Projetos' : locale === 'ar' ? 'كافة المشاريع' : 'All Works' },
    { id: 'residential' as const, label: locale === 'pt' ? 'Habitação' : locale === 'ar' ? 'المساكن الخاصة' : 'Residential' },
    { id: 'hospitality' as const, label: locale === 'pt' ? 'Hotelaria' : locale === 'ar' ? 'الضيافة والاستجمام' : 'Hospitality' },
    { id: 'commercial' as const, label: locale === 'pt' ? 'Corporativo' : locale === 'ar' ? 'المباني الإدارية' : 'Commercial' },
    { id: 'interior' as const, label: locale === 'pt' ? 'Design de Interiores' : locale === 'ar' ? 'التصميم الداخلي' : 'Interior Architecture' },
  ];

  return (
    <div className="bg-[#0f0f0f] text-stone-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-stone-400 block">
            {locale === 'pt' ? 'Portfólio de Obras' : locale === 'ar' ? 'سجل الأعمال المعمارية' : 'Studio Archive'}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-white tracking-tight">
            {locale === 'pt' ? 'Obras Construídas & Projetos' : locale === 'ar' ? 'المشاريع المنفذة والتصاميم' : 'Selected Architectural Works'}
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
            {locale === 'pt'
              ? 'Uma coleção de habitações personalizadas, reabilitações patrimoniais e edifícios singulares que valorizam o lugar e a experiência sensorial humana.'
              : locale === 'ar'
              ? 'مجموعة متميزة من الفلل السكنية، الترميم التاريخي والمباني المعاصرة التي تحتفي بالمكان وتمنح تجربة بصرية وروحية استثنائية.'
              : 'A curated body of bespoke residences, historical restorations, and landmark structures that anchor into their geographical context.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-800 pb-6">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-stone-100 text-stone-950 font-bold shadow-md'
                  : 'text-stone-400 hover:text-white bg-stone-900/60 hover:bg-stone-850'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Editorial Project Grid: Desktop 3 cols, Tablet 2 cols, Mobile 1 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={`/demos/architect/projects/${p.slug}`}
              className="group flex flex-col space-y-4"
            >
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-stone-900 shadow-xl">
                <Image
                  src={p.heroImage}
                  alt={p.title[locale]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-stone-300 border border-white/10">
                  {p.year}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-mono text-[11px] text-stone-300">{p.area}</span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-stone-200 group-hover:text-white">
                    <span>{locale === 'pt' ? 'Ver Projeto' : locale === 'ar' ? 'عرض المشروع' : 'View Project'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 text-start">
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span>{p.location}</span>
                  <span className="uppercase">{p.typology[locale]}</span>
                </div>
                <h2 className="font-serif text-2xl font-light text-white group-hover:text-stone-300 transition-colors">
                  {p.title[locale]}
                </h2>
                <p className="text-xs text-stone-400 font-light leading-relaxed line-clamp-2">
                  {p.excerpt[locale]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

