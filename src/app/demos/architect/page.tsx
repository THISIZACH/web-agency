'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ARCHITECT_PROJECTS } from '@/config/architectProjects';
import { ArrowUpRight, ArrowRight, Compass, Layers, Sun, Sparkles } from 'lucide-react';

export default function ArchitectHomePage() {
  const { locale, isRTL } = useLanguage();

  const featured = ARCHITECT_PROJECTS.slice(0, 6);

  return (
    <div className="bg-[#0f0f0f] text-stone-100">
      {/* ========================================================================= */}
      {/* EDITORIAL HERO */}
      {/* ========================================================================= */}
      <section className="relative min-h-[88vh] flex items-end pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Monumental Photography */}
        <Image
          src="/images/architect/architect-hero.jpg"
          alt="Atelier Forma Monolithic Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full space-y-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-stone-300 backdrop-blur-md border border-white/15 text-[11px] uppercase tracking-[0.25em] font-mono">
              <span>{locale === 'pt' ? 'Atelier de Arquitetura & Design Espacial' : locale === 'ar' ? 'استوديو العمارة والتصميم المكاني المعاصر' : 'Contemporary Spatial Architecture'}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.05]">
              {locale === 'pt' ? (
                <>
                  A Sua Nova Vida Começa com um <span className="italic font-normal">Grande Projeto</span>.
                </>
              ) : locale === 'ar' ? (
                <>
                  حياتك الجديدة تبدأ مع <span className="italic font-normal">عمارة وتصميم استثنائي</span>.
                </>
              ) : (
                <>
                  Your New Life Begins With <span className="italic font-normal">Great Design</span>.
                </>
              )}
            </h1>

            <p className="text-stone-300 text-sm sm:text-base max-w-xl font-light leading-relaxed">
              {locale === 'pt'
                ? 'Residências unifamiliares, hotéis de charme e intervenções espaciais fundamentadas na pureza dos materiais, no silêncio e na luz natural.'
                : locale === 'ar'
                ? 'فلل سكنية فاخرة، منتجعات استجمام وتصاميم فراغية ترتكز على أصالة المواد، السكون المعماري والضوء الطبيعي.'
                : 'Bespoke residences, boutique retreats, and structural interventions shaped by raw tactile materials, silence, and natural daylight.'}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/demos/architect/contact"
                prefetch={true}
                className="px-8 py-4 rounded-full bg-stone-100 hover:bg-white text-stone-950 font-bold text-xs uppercase tracking-widest transition-all shadow-2xl flex items-center justify-center gap-2 hover:scale-105"
              >
                <span>{locale === 'pt' ? 'Iniciar Projeto' : locale === 'ar' ? 'بدء مشروعك' : 'Start Your Project'}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
              <Link
                href="/demos/architect/projects"
                prefetch={true}
                className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-stone-200 hover:text-white border border-stone-700 text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2"
              >
                <span>{locale === 'pt' ? 'Explorar Portfólio' : locale === 'ar' ? 'استعراض المشاريع' : 'Explore Our Projects'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHILOSOPHY STRIP */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#0c0c0c] border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-start">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Sun className="w-5 h-5 text-stone-400" />
                <span className="font-mono text-xs uppercase tracking-widest text-stone-400">01 / Daylight</span>
              </div>
              <h3 className="font-serif text-xl font-normal text-white">
                {locale === 'pt' ? 'Esculpir o Espaço com Luz' : locale === 'ar' ? 'تشكيل الفراغ بالضوء الطبيعي' : 'Sculpting Space with Light'}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                {locale === 'pt'
                  ? 'Cada volume é orientado para capturar o trajeto solar, criando sombras dinâmicas que transformam o interior ao longo das horas do dia.'
                  : locale === 'ar'
                  ? 'نوجه كل كتلة معمارية لتلتقط حركة الشمس، فنخلق ظلالاً متحركة تغير روح المكان مع كل ساعة.'
                  : 'Every volume is positioned to harness the diurnal solar path, cultivating dynamic shadow choreography from dawn to dusk.'}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-stone-400" />
                <span className="font-mono text-xs uppercase tracking-widest text-stone-400">02 / Materiality</span>
              </div>
              <h3 className="font-serif text-xl font-normal text-white">
                {locale === 'pt' ? 'Verdade dos Materiais Brutos' : locale === 'ar' ? 'أصالة المواد الطبيعية الخام' : 'Honesty of Raw Materials'}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                {locale === 'pt'
                  ? 'Pedra calcária da região, betão aparente, madeira de carvalho e aço corten envelhecem com nobreza e contam a história da obra.'
                  : locale === 'ar'
                  ? 'الحجر الجيري، الخرسانة المكشوفة، خشب البلوط وفولاذ الكورتن المعتق تكتسب جمالاً ورونقاً مع مرور السنين.'
                  : 'Indigenous limestone, board-formed concrete, smoked oak, and weathering steel that age with dignity and patina.'}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Compass className="w-5 h-5 text-stone-400" />
                <span className="font-mono text-xs uppercase tracking-widest text-stone-400">03 / Permanence</span>
              </div>
              <h3 className="font-serif text-xl font-normal text-white">
                {locale === 'pt' ? 'Arquitetura de Permanência' : locale === 'ar' ? 'عمارة خالدة تتجاوز الزمن' : 'Timeless Permanence'}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                {locale === 'pt'
                  ? 'Recusamos modas efémeras. Criamos edifícios com proporções serenas que mantêm a sua pertinência estética daqui a cinquenta anos.'
                  : locale === 'ar'
                  ? 'نبتعد عن الصرعات العابرة لنصمم مبانٍ بنسب جمالية خالدة تزداد قيمة ورسوخاً عبر العقود.'
                  : 'Rejecting transient trends in favor of serene structural proportions that will command relevance decades from now.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* EDITORIAL PORTFOLIO GRID */}
      {/* ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800 pb-8">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-stone-400 block">
              {locale === 'pt' ? 'Obras Selecionadas 2022 — 2024' : locale === 'ar' ? 'مشاريع مختارة 2022 — 2024' : 'Selected Portfolio 2022 — 2024'}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
              {locale === 'pt' ? 'Projetos em Destaque' : locale === 'ar' ? 'أبرز الإنجازات المعمارية' : 'Curated Works'}
            </h2>
          </div>

          <Link
            href="/demos/architect/projects"
            prefetch={true}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-300 hover:text-white transition-colors"
          >
            <span>{locale === 'pt' ? 'Ver Todos os 7 Projetos' : locale === 'ar' ? 'استعراض كافة المشاريع' : 'View All 7 Projects'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Editorial Grid: Desktop 3 cols, Tablet 2 cols, Mobile 1 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {featured.map((p, idx) => (
            <Link
              key={p.slug}
              href={`/demos/architect/projects/${p.slug}`}
              prefetch={true}
              className="group flex flex-col space-y-4"
            >
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-stone-900 shadow-xl">
                <Image
                  src={p.heroImage}
                  alt={p.title[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-stone-300 border border-white/10">
                  {p.year}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-mono text-[11px] text-stone-300">{p.area}</span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-stone-200 group-hover:text-white">
                    <span>{locale === 'pt' ? 'Explorar' : locale === 'ar' ? 'تفاصيل' : 'Explore'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>

              <div className="space-y-1 text-start">
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span>{p.location}</span>
                  <span className="uppercase">{p.typology[locale]}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-light text-white group-hover:text-stone-300 transition-colors">
                  {p.title[locale]}
                </h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed line-clamp-2">
                  {p.excerpt[locale]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PRACTICE METRICS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#0c0c0c] border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <span className="font-serif text-4xl sm:text-5xl font-light text-white block">45+</span>
            <span className="text-[11px] uppercase font-mono tracking-widest text-stone-400">
              {locale === 'pt' ? 'Obras Construídas' : locale === 'ar' ? 'مشروع مكتمل' : 'Completed Works'}
            </span>
          </div>
          <div className="space-y-2">
            <span className="font-serif text-4xl sm:text-5xl font-light text-white block">100%</span>
            <span className="text-[11px] uppercase font-mono tracking-widest text-stone-400">
              {locale === 'pt' ? 'Eficiência A+ / nZEB' : locale === 'ar' ? 'كفاءة طاقة A+' : 'Passive Ready'}
            </span>
          </div>
          <div className="space-y-2">
            <span className="font-serif text-4xl sm:text-5xl font-light text-white block">14</span>
            <span className="text-[11px] uppercase font-mono tracking-widest text-stone-400">
              {locale === 'pt' ? 'Arquitetos & Designers' : locale === 'ar' ? 'معماري ومصمم' : 'Architects & Planners'}
            </span>
          </div>
          <div className="space-y-2">
            <span className="font-serif text-4xl sm:text-5xl font-light text-white block">12</span>
            <span className="text-[11px] uppercase font-mono tracking-widest text-stone-400">
              {locale === 'pt' ? 'Distinções Editoriais' : locale === 'ar' ? 'تقديرات نقدية وتصميمية' : 'Design Commendations'}
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INQUIRY BANNER */}
      {/* ========================================================================= */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-stone-900 via-[#141414] to-black border border-stone-800 p-8 sm:p-16 text-center space-y-8 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-stone-400 block">
              {locale === 'pt' ? 'Comissões & Novos Projetos' : locale === 'ar' ? 'تكليفات ومشاريع جديدة' : 'Commissions & Collaborations'}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
              {locale === 'pt'
                ? 'Tem um Terreno ou uma Visão Arquitetónica?'
                : locale === 'ar'
                ? 'هل لديك قطعة أرض أو رؤية معمارية ترغب في تحقيقها؟'
                : 'Have a Site or Vision in Mind?'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
              {locale === 'pt'
                ? 'O atelier aceita um número criteriosamente limitado de novas comissões residenciais e culturais por ano para garantir rigor de execução absoluto.'
                : locale === 'ar'
                ? 'يقبل الاستوديو عدداً محدوداً من المشاريع السكنية والتجارية سنوياً لضمان أعلى درجات الإتقان والاهتمام بأدق التفاصيل.'
                : 'Our studio accepts a strictly limited number of private residential and boutique commercial commissions annually to maintain uncompromising detail.'}
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/demos/architect/contact"
              prefetch={true}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-100 hover:bg-white text-stone-950 font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105"
            >
              {locale === 'pt' ? 'Iniciar Consulta de Projeto' : locale === 'ar' ? 'بدء استشارة المشروع' : 'Start Project Inquiry'}
            </Link>
            <Link
              href="/demos/architect/about"
              prefetch={true}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-white text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              {locale === 'pt' ? 'Conhecer a Metodologia' : locale === 'ar' ? 'منهجية العمل' : 'Our Methodology'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

