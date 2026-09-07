'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { LAWYER_PRACTICE_AREAS } from '@/config/lawyerData';
import { Shield, ArrowRight, Check } from 'lucide-react';

export default function LawyerPracticeAreasPage() {
  const { locale, isRTL } = useLanguage();

  return (
    <div className="bg-[#0a192f] text-[#fcfbf7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132845] border border-[#c5a880]/30 text-[#c5a880] text-xs font-mono uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'Competências Jurídicas Especializadas' : locale === 'ar' ? 'التخصصات القانونية المعتمدة' : 'Practice Disciplines'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase">
            {locale === 'pt' ? 'Áreas de Atuação' : locale === 'ar' ? 'مجالات الممارسة' : 'Practice Areas'}
          </h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto font-light leading-relaxed">
            {locale === 'pt'
              ? 'Uma equipa multidisciplinar de advogados seniores dedicada a transações complexas, litígios estratégicos e consultoria regulatória.'
              : locale === 'ar'
              ? 'فريق متخصص من كبار المحامين والشركاء يغطي كافة الجوانب التجارية والنزاعات الدولية والاستشارات التنظيمية.'
              : 'Senior practitioners delivering pragmatic counsel across commercial transactions, high-value disputes, and corporate compliance.'}
          </p>
        </div>

        {/* Practice Areas Detailed List */}
        <div className="space-y-12">
          {LAWYER_PRACTICE_AREAS.map((practice, idx) => (
            <div
              key={practice.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-2xl bg-[#0e213b] border border-slate-800 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:col-span-5 relative h-72 rounded-xl overflow-hidden bg-slate-950 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={practice.image}
                  alt={practice.title[locale]}
                  fill
                  className="object-cover"
                />
              </div>

              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-xs font-mono text-[#c5a880] uppercase tracking-widest block">
                  Practice Area 0{idx + 1} • Lead: {practice.leadAttorney}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {practice.title[locale]}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {practice.overview[locale]}
                </p>

                <div className="pt-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    {locale === 'pt' ? 'Capacidades Principais:' : locale === 'ar' ? 'القدرات الجوهرية:' : 'Core Capabilities:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {practice.keyCapabilities[locale].map((cap, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    href={`/demos/lawyer/practice-areas/${practice.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-[#c5a880] hover:bg-[#d8be9a] text-[#0a192f] font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <span>{locale === 'pt' ? 'Ver Monografia da Prática' : locale === 'ar' ? 'التفاصيل الكاملة' : 'Full Practice Monograph'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                  <Link
                    href="/demos/lawyer/consultation"
                    className="text-xs font-mono text-slate-400 hover:text-white underline"
                  >
                    {locale === 'pt' ? 'Marcar Consulta' : locale === 'ar' ? 'طلب استشارة' : 'Inquire on this matter'}
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

