'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { LAWYER_ATTORNEYS } from '@/config/lawyerData';
import { Shield, Mail, Phone, ArrowRight } from 'lucide-react';

export default function LawyerAttorneysPage() {
  const { locale, isRTL } = useLanguage();

  return (
    <div className="bg-[#0a192f] text-[#fcfbf7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132845] border border-[#c5a880]/30 text-[#c5a880] text-xs font-mono uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'Corpo Jurídico de Elite' : locale === 'ar' ? 'فريق المحامين والشركاء' : 'Senior Partners & Counsel'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase">
            {locale === 'pt' ? 'Sócios da Sociedade' : locale === 'ar' ? 'فريق الشركاء' : 'Our Attorneys'}
          </h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto font-light leading-relaxed">
            {locale === 'pt'
              ? 'Profissionais com sólida formação académica internacional e vasta experiência na condução de matérias jurídicas de elevada exigência.'
              : locale === 'ar'
              ? 'محامون معتمدون دولياً يتمتعون بسجل حافل في إدارة القضايا والصفقات الكبرى في لندن وفرانكفورت ودبي.'
              : 'Our partners combine elite academic pedigrees from Oxford, Harvard, and the Sorbonne with battle-tested commercial acumen.'}
          </p>
        </div>

        {/* Attorneys Roster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LAWYER_ATTORNEYS.map((attorney) => (
            <div
              key={attorney.id}
              className="group flex flex-col justify-between rounded-2xl bg-[#0e213b] border border-slate-800 hover:border-[#c5a880]/40 overflow-hidden transition-all duration-300"
            >
              <div>
                <div className="relative h-80 overflow-hidden bg-slate-950">
                  <Image
                    src={attorney.image}
                    alt={attorney.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e213b] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-white group-hover:text-[#c5a880] transition-colors">
                      {attorney.name}
                    </h2>
                    <span className="text-xs text-[#c5a880] font-mono block mt-0.5">
                      {attorney.title[locale]}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {attorney.practices.map((p, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#132845] text-slate-300 border border-slate-700">
                        {p}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light line-clamp-3 pt-2">
                    {attorney.bio[locale]}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between text-xs font-mono">
                <Link
                  href={`/demos/lawyer/attorneys/${attorney.slug}`}
                  className="text-[#c5a880] hover:underline font-bold flex items-center gap-1"
                >
                  <span>{locale === 'pt' ? 'Ver Perfil' : locale === 'ar' ? 'الملف الشخصي' : 'View Bio'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
                <Link
                  href="/demos/lawyer/consultation"
                  className="text-slate-400 hover:text-white"
                >
                  {locale === 'pt' ? 'Contactar' : locale === 'ar' ? 'تواصل' : 'Inquire'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

