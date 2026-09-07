'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { LAWYER_PRACTICE_AREAS, LAWYER_ATTORNEYS } from '@/config/lawyerData';
import { Shield, Check, ArrowRight, ArrowLeft, Lock, UserCheck } from 'lucide-react';

export default function PracticeAreaDetailPage({ params }: { params: { slug: string } }) {
  const { locale, isRTL } = useLanguage();

  const practice = LAWYER_PRACTICE_AREAS.find((p) => p.slug === params.slug);

  if (!practice) {
    notFound();
  }

  const leadPartner = LAWYER_ATTORNEYS.find((a) => a.name === practice.leadAttorney) || LAWYER_ATTORNEYS[0];
  const otherPractices = LAWYER_PRACTICE_AREAS.filter((p) => p.id !== practice.id).slice(0, 3);

  return (
    <div className="bg-[#0a192f] text-[#fcfbf7] min-h-screen py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
          <Link href="/demos/lawyer" className="hover:text-white">
            {locale === 'pt' ? 'Início' : locale === 'ar' ? 'الرئيسية' : 'Home'}
          </Link>
          <span>/</span>
          <Link href="/demos/lawyer/practice-areas" className="hover:text-white">
            {locale === 'pt' ? 'Áreas de Prática' : locale === 'ar' ? 'مجالات الممارسة' : 'Practices'}
          </Link>
          <span>/</span>
          <span className="text-[#c5a880] font-bold truncate">
            {practice.title[locale]}
          </span>
        </nav>

        {/* Practice Hero */}
        <div className="space-y-6">
          <div className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
            <Image
              src={practice.image}
              alt={practice.title[locale]}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 space-y-2">
              <span className="text-xs font-mono uppercase text-[#c5a880] tracking-widest block">
                Practice Monograph • Meridian Legal
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
                {practice.title[locale]}
              </h1>
            </div>
          </div>
        </div>

        {/* Two-Column Monograph Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-white border-b border-slate-800 pb-3">
                {locale === 'pt' ? 'Visão Estratégica' : locale === 'ar' ? 'الرؤية الاستراتيجية' : 'Strategic Perspective'}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {practice.overview[locale]}
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                {practice.subtitle[locale]}
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="font-serif text-xl font-bold text-white">
                {locale === 'pt' ? 'Capacidades & Áreas de Intervenção' : locale === 'ar' ? 'نطاق الاختصاص والخدمات' : 'Core Capabilities'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {practice.keyCapabilities[locale].map((cap, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#0e213b] border border-slate-800 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <Check className="w-4 h-4 text-[#c5a880] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Notice */}
            <div className="p-5 rounded-xl bg-[#06101e] border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
              <Lock className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
              <span>
                {locale === 'pt'
                  ? 'Todas as consultas e briefings preliminares nesta área de prática estão sujeitos a rigoroso segredo profissional e verificação prévia de conflitos de interesse.'
                  : locale === 'ar'
                  ? 'تخضع كافة الاستشارات والجلسات التمهيدية في هذا التخصص لأعلى معايير السرية المهنية والتحقق المسبق من عدم وجود تعارض مصالح.'
                  : 'All inquiries and preliminary briefings in this practice area are protected by professional legal privilege and subject to pre-engagement conflict checks.'}
              </span>
            </div>
          </div>

          {/* Sidebar: Lead Attorney & Consultation (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="p-6 rounded-2xl bg-[#0e213b] border border-slate-800 space-y-4">
              <span className="text-[11px] font-mono text-[#c5a880] uppercase tracking-wider block">
                {locale === 'pt' ? 'Sócio Responsável' : locale === 'ar' ? 'الشريك المسؤول' : 'Practice Lead'}
              </span>

              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-950 shrink-0">
                  <Image src={leadPartner.image} alt={leadPartner.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-white">{leadPartner.name}</h3>
                  <span className="text-[11px] text-slate-400 block">{leadPartner.title[locale]}</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 font-light leading-relaxed line-clamp-3">
                {leadPartner.bio[locale]}
              </p>

              <div className="pt-2 border-t border-slate-800">
                <Link
                  href={`/demos/lawyer/attorneys/${leadPartner.slug}`}
                  className="text-xs font-mono text-[#c5a880] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>{locale === 'pt' ? 'Ver Biografia do Sócio' : locale === 'ar' ? 'السيرة الكاملة للشريك' : 'View Partner Profile'}</span>
                  <ArrowRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>

            {/* Direct Consultation Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#10243e] to-[#0a192f] border border-[#c5a880]/30 space-y-4">
              <h3 className="font-serif text-lg font-bold text-white">
                {locale === 'pt' ? 'Precisa de Aconselhamento?' : locale === 'ar' ? 'هل تحتاج إلى استشارة؟' : 'Need Strategic Counsel?'}
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {locale === 'pt'
                  ? 'Agende uma reunião inicial confidencial para avaliar o seu caso.'
                  : locale === 'ar'
                  ? 'تواصل معنا لحجز جلسة استكشافية سرية لتقييم الموقف القانوني.'
                  : 'Schedule an initial confidential conference to evaluate your commercial position.'}
              </p>
              <Link
                href="/demos/lawyer/consultation"
                className="w-full py-3 rounded bg-[#c5a880] hover:bg-[#d8be9a] text-[#0a192f] font-bold text-xs uppercase tracking-wider text-center block transition-all shadow-md"
              >
                {locale === 'pt' ? 'Solicitar Consulta' : locale === 'ar' ? 'طلب استشارة' : 'Inquire on Matter'}
              </Link>
            </div>
          </div>
        </div>

        {/* Other Practice Areas */}
        <div className="border-t border-slate-800 pt-12 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-white">
            {locale === 'pt' ? 'Outras Áreas de Prática' : locale === 'ar' ? 'تخصصات قانونية أخرى' : 'Explore Other Practices'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPractices.map((p) => (
              <Link
                key={p.id}
                href={`/demos/lawyer/practice-areas/${p.slug}`}
                className="p-5 rounded-xl bg-[#0e213b] border border-slate-800 hover:border-[#c5a880]/40 transition-all group block"
              >
                <h3 className="font-serif text-base font-bold text-white group-hover:text-[#c5a880] transition-colors">
                  {p.title[locale]}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">{p.subtitle[locale]}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

