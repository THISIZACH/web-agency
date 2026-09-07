'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { ARCHITECT_PROJECTS } from '@/config/architectProjects';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  Maximize2,
  Zap,
  CheckCircle2,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

export default function ProjectDetailPage() {
  const { locale, isRTL } = useLanguage();
  const params = useParams();
  const slug = params?.slug as string;

  const project = ARCHITECT_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-[#0f0f0f] text-stone-100 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Back Link */}
        <div>
          <Link
            href="/demos/architect/projects"
            className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-stone-400 hover:text-white transition-colors"
          >
            <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
            <span>{locale === 'pt' ? 'Voltar ao Portfólio' : locale === 'ar' ? 'العودة لكافة المشاريع' : 'Back to All Works'}</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-stone-400">
            <span className="text-stone-200">{project.typology[locale]}</span>
            <span>•</span>
            <span>{project.location}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight">
            {project.title[locale]}
          </h1>

          <p className="text-stone-300 text-sm sm:text-lg font-light leading-relaxed max-w-3xl">
            {project.excerpt[locale]}
          </p>
        </div>

        {/* Large Hero Image */}
        <div className="relative h-[60vh] min-h-[420px] max-h-[750px] w-full rounded-3xl overflow-hidden shadow-2xl bg-stone-900">
          <Image
            src={project.heroImage}
            alt={project.title[locale]}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Project Specs Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0c0c] border border-stone-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-start">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 block">
              {locale === 'pt' ? 'Área Bruta' : locale === 'ar' ? 'المساحة المبنية' : 'Gross Floor Area'}
            </span>
            <span className="font-serif text-2xl text-white font-light mt-1 block">{project.area}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 block">
              {locale === 'pt' ? 'Ano de Conclusão' : locale === 'ar' ? 'سنة الإنجاز' : 'Year Completed'}
            </span>
            <span className="font-serif text-2xl text-white font-light mt-1 block">{project.year}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 block">
              {locale === 'pt' ? 'Desempenho Energético' : locale === 'ar' ? 'كفاءة الطاقة' : 'Energy Benchmark'}
            </span>
            <span className="font-serif text-2xl text-white font-light mt-1 block">{project.details.energyRating.split(' ')[0]}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 block">
              {locale === 'pt' ? 'Duração de Obra' : locale === 'ar' ? 'مدة التنفيذ' : 'Timeline'}
            </span>
            <span className="font-serif text-2xl text-white font-light mt-1 block">{project.details.duration.split(' ')[0]} {project.details.duration.split(' ')[1]}</span>
          </div>
        </div>

        {/* Architectural Concept & Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-stone-500 block">
              {locale === 'pt' ? 'Conceito Espacial' : locale === 'ar' ? 'الرؤية المعمارية' : 'Design Statement'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-white leading-snug">
              {locale === 'pt'
                ? 'A integração entre a paisagem circundante e o silêncio interior.'
                : locale === 'ar'
                ? 'التناغم بين تضاريس الموقع والسكينة الداخلية.'
                : 'Integrating landscape geography with interior tranquility.'}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            <p>{project.concept[locale]}</p>
            <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 text-xs text-stone-400">
              <span className="font-semibold text-stone-200 block mb-1">
                {locale === 'pt' ? 'Âmbito do Atelier:' : locale === 'ar' ? 'نطاق عمل الاستوديو:' : 'Studio Scope:'}
              </span>
              {project.details.scope[locale]}
            </div>
          </div>
        </div>

        {/* Materiality Palette */}
        <div className="space-y-6 pt-6 border-t border-stone-800">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-stone-500 block">
              {locale === 'pt' ? 'Paleta de Matérias' : locale === 'ar' ? 'المواد المعمارية' : 'Materiality'}
            </span>
            <h3 className="font-serif text-2xl font-light text-white">
              {locale === 'pt' ? 'Texturas & Elementos Construtivos' : locale === 'ar' ? 'الخامات والتشطيبات الطبيعية' : 'Primary Material Palette'}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.materials[locale].map((mat, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#0c0c0c] border border-stone-800 space-y-1">
                <div className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-stone-500" />
                  <span className="font-mono text-[10px] uppercase text-stone-500">0{i + 1}</span>
                </div>
                <span className="font-semibold text-xs text-stone-200 block">{mat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Images */}
        <div className="space-y-6 pt-6 border-t border-stone-800">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-stone-500 block">
              {locale === 'pt' ? 'Documentação Visual' : locale === 'ar' ? 'معرض الصور المعمارية' : 'Visual Documentation'}
            </span>
            <h3 className="font-serif text-2xl font-light text-white">
              {locale === 'pt' ? 'Espaços Interiores & Luz' : locale === 'ar' ? 'اللقطات الداخلية والفراغات' : 'Atmospheric Spaces'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.galleryImages.map((img, idx) => (
              <div key={idx} className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-stone-900 shadow-xl">
                <Image src={img} alt={`${project.title[locale]} - View ${idx + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Project Inquiry CTA */}
        <div className="rounded-3xl bg-[#0c0c0c] border border-stone-800 p-8 sm:p-14 text-center space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl font-light text-white">
            {locale === 'pt' ? 'Inicie a Conversa Sobre o Seu Projeto' : locale === 'ar' ? 'ابدأ المحادثة حول رؤيتك المعمارية' : 'Discuss a Bespoke Commission'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto font-light leading-relaxed">
            {locale === 'pt'
              ? 'Se possui um lote de terreno ou pretende reabilitar uma propriedade singular, apresente-nos a sua intenção arquitetónica.'
              : locale === 'ar'
              ? 'سواء كنت تمتلك قطعة أرض أو ترغب في ترميم عقار استثنائي، يسعدنا مناقشة فكرة مشروعك بتفصيل.'
              : 'Whether acquiring a new site or restoring a heritage building, we invite you to share your vision with our principals.'}
          </p>
          <div className="pt-2">
            <Link
              href="/demos/architect/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-stone-100 hover:bg-white text-stone-950 font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105"
            >
              <span>{locale === 'pt' ? 'Apresentar Projeto ao Atelier' : locale === 'ar' ? 'تقديم تفاصيل المشروع' : 'Start Project Inquiry'}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

