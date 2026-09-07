'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { LAWYER_ATTORNEYS, LAWYER_PRACTICE_AREAS } from '@/config/lawyerData';
import { Shield, Mail, Phone, GraduationCap, Globe, ArrowRight, ArrowLeft } from 'lucide-react';

export default function AttorneyProfilePage({ params }: { params: { slug: string } }) {
  const { locale, isRTL } = useLanguage();

  const attorney = LAWYER_ATTORNEYS.find((a) => a.slug === params.slug);

  if (!attorney) {
    notFound();
  }

  const otherAttorneys = LAWYER_ATTORNEYS.filter((a) => a.id !== attorney.id).slice(0, 3);

  return (
    <div className="bg-[#0a192f] text-[#fcfbf7] min-h-screen py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
          <Link href="/demos/lawyer" className="hover:text-white">
            {locale === 'pt' ? 'Início' : locale === 'ar' ? 'الرئيسية' : 'Home'}
          </Link>
          <span>/</span>
          <Link href="/demos/lawyer/attorneys" className="hover:text-white">
            {locale === 'pt' ? 'Sócios' : locale === 'ar' ? 'المحامون' : 'Attorneys'}
          </Link>
          <span>/</span>
          <span className="text-[#c5a880] font-bold truncate">
            {attorney.name}
          </span>
        </nav>

        {/* Profile Card Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-8 sm:p-10 rounded-2xl bg-[#0e213b] border border-slate-800">
          <div className="md:col-span-4 relative h-80 sm:h-96 rounded-xl overflow-hidden bg-slate-950">
            <Image
              src={attorney.image}
              alt={attorney.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="md:col-span-8 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase text-[#c5a880] tracking-widest block">
                {attorney.title[locale]}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-1">
                {attorney.name}
              </h1>
            </div>

            {/* Practice Badges */}
            <div className="flex flex-wrap gap-2">
              {attorney.practices.map((p, i) => (
                <span key={i} className="px-3 py-1 rounded text-xs font-mono bg-[#132845] text-slate-200 border border-slate-700">
                  {p}
                </span>
              ))}
            </div>

            {/* Direct Contact */}
            <div className="space-y-2 text-xs font-mono text-slate-300 border-y border-slate-800 py-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c5a880]" />
                <span>{attorney.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c5a880]" />
                <span>{attorney.directPhone}</span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <Link
                href="/demos/lawyer/consultation"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-[#c5a880] hover:bg-[#d8be9a] text-[#0a192f] font-extrabold text-xs uppercase tracking-widest transition-all shadow-md"
              >
                <span>{locale === 'pt' ? 'Solicitar Reunião com este Sócio' : locale === 'ar' ? 'طلب اجتماع مع هذا الشريك' : 'Schedule Briefing with Partner'}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Biography & Pedigree */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif text-2xl font-bold text-white border-b border-slate-800 pb-3">
              {locale === 'pt' ? 'Biografia Profissional' : locale === 'ar' ? 'السيرة المهنية' : 'Professional Biography'}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              {attorney.bio[locale]}
            </p>
            <p className="text-slate-400 text-xs leading-relaxed font-light">
              {locale === 'pt'
                ? 'Conduz regularmente negociações estratégicas para instituições financeiras e fundos soberanos. Atua com frequência como árbitro e consultor de referência em matérias de elevado impacto económico.'
                : locale === 'ar'
                ? 'يقود مفاوضات استراتيجية كبرى للمؤسسات المالية والصناديق السيادية، ويمتلك حضوراً راسخاً في التحكيم الدولي والاستشارات المعقدة.'
                : 'Regularly leads strategic multi-million pound negotiations for sovereign and institutional capital. Renowned for decisive boardroom problem-solving under tight transaction deadlines.'}
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6">
            {/* Education */}
            <div className="p-6 rounded-2xl bg-[#0e213b] border border-slate-800 space-y-3">
              <h3 className="font-serif text-base font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#c5a880]" />
                <span>{locale === 'pt' ? 'Formação Académica' : locale === 'ar' ? 'المؤهلات العلمية' : 'Education'}</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                {attorney.education.map((ed, i) => (
                  <li key={i} className="border-b border-slate-800/60 pb-1.5 last:border-0">
                    {ed}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="p-6 rounded-2xl bg-[#0e213b] border border-slate-800 space-y-3">
              <h3 className="font-serif text-base font-bold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#c5a880]" />
                <span>{locale === 'pt' ? 'Idiomas de Prática' : locale === 'ar' ? 'اللغات' : 'Working Languages'}</span>
              </h3>
              <ul className="space-y-1 text-xs text-slate-300 font-mono">
                {attorney.languages.map((lang, i) => (
                  <li key={i}>{lang}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Other Partners */}
        <div className="border-t border-slate-800 pt-12 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-white">
            {locale === 'pt' ? 'Outros Sócios da Sociedade' : locale === 'ar' ? 'شركاء آخرون في المؤسسة' : 'Other Senior Partners'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherAttorneys.map((a) => (
              <Link
                key={a.id}
                href={`/demos/lawyer/attorneys/${a.slug}`}
                className="p-5 rounded-xl bg-[#0e213b] border border-slate-800 hover:border-[#c5a880]/40 transition-all group block"
              >
                <h3 className="font-serif text-base font-bold text-white group-hover:text-[#c5a880] transition-colors">
                  {a.name}
                </h3>
                <p className="text-xs text-[#c5a880] font-mono mt-0.5">{a.title[locale]}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

