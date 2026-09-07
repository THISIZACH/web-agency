'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { LAWYER_INSIGHTS } from '@/config/lawyerData';
import { Shield, ArrowRight, Clock } from 'lucide-react';

export default function LawyerInsightsPage() {
  const { locale, isRTL } = useLanguage();

  return (
    <div className="bg-[#0a192f] text-[#fcfbf7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132845] border border-[#c5a880]/30 text-[#c5a880] text-xs font-mono uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'Análises & Perspetivas Jurídicas' : locale === 'ar' ? 'أبحاث ودراسات قانونية' : 'Thought Leadership'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase">
            {locale === 'pt' ? 'Artigos & Análises' : locale === 'ar' ? 'رؤى وتحليلات قانونية' : 'Legal Insights'}
          </h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto font-light leading-relaxed">
            {locale === 'pt'
              ? 'Perspetivas de sócios seniores sobre evolução regulatória, contencioso transfronteiriço e novos riscos corporativos.'
              : locale === 'ar'
              ? 'رؤى تحليلية من كبار الشركاء حول التطورات التشريعية والتحكيم الدولي والمخاطر التنظيمية للشركات.'
              : 'Senior partner analysis on cross-border regulatory shifts, arbitration enforcement, and emerging corporate liabilities.'}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LAWYER_INSIGHTS.map((insight) => (
            <article
              key={insight.slug}
              className="group flex flex-col justify-between rounded-2xl bg-[#0e213b] border border-slate-800 hover:border-[#c5a880]/40 overflow-hidden transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="relative h-60 overflow-hidden bg-slate-950">
                  <Image
                    src={insight.image}
                    alt={insight.title[locale]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e213b] via-transparent to-transparent" />
                </div>

                <div className="p-6 pt-0 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#c5a880]">
                    <span>{insight.category}</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-3 h-3" />
                      <span>{insight.readTime}</span>
                    </span>
                  </div>

                  <h2 className="font-serif text-xl font-bold text-white group-hover:text-[#c5a880] transition-colors leading-snug">
                    {insight.title[locale]}
                  </h2>

                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {insight.excerpt[locale]}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">By {insight.author}</span>
                <Link
                  href={`/demos/lawyer/insights/${insight.slug}`}
                  className="text-[#c5a880] hover:underline font-bold flex items-center gap-1"
                >
                  <span>{locale === 'pt' ? 'Ler Artigo' : locale === 'ar' ? 'قراءة التحليل' : 'Read Insight'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

