'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { LAWYER_INSIGHTS } from '@/config/lawyerData';
import { Shield, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

export default function LegalInsightDetailPage({ params }: { params: { slug: string } }) {
  const { locale, isRTL } = useLanguage();

  const insight = LAWYER_INSIGHTS.find((i) => i.slug === params.slug);

  if (!insight) {
    notFound();
  }

  const otherInsights = LAWYER_INSIGHTS.filter((i) => i.slug !== insight.slug);

  return (
    <div className="bg-[#0a192f] text-[#fcfbf7] min-h-screen py-12 sm:py-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
          <Link href="/demos/lawyer" className="hover:text-white">
            {locale === 'pt' ? 'Início' : locale === 'ar' ? 'الرئيسية' : 'Home'}
          </Link>
          <span>/</span>
          <Link href="/demos/lawyer/insights" className="hover:text-white">
            {locale === 'pt' ? 'Artigos' : locale === 'ar' ? 'المقالات' : 'Insights'}
          </Link>
          <span>/</span>
          <span className="text-[#c5a880] font-bold truncate">
            {insight.title[locale]}
          </span>
        </nav>

        {/* Article Header */}
        <header className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex items-center gap-3 text-xs font-mono text-[#c5a880]">
            <span className="px-2.5 py-0.5 rounded bg-[#132845] border border-slate-700">{insight.category}</span>
            <span>•</span>
            <span>{insight.date}</span>
            <span>•</span>
            <span>{insight.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            {insight.title[locale]}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            {insight.excerpt[locale]}
          </p>

          <div className="text-xs font-mono text-slate-400 pt-2">
            By <span className="text-white font-bold">{insight.author}</span> • Senior Partner, Meridian Legal
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
          <Image
            src={insight.image}
            alt={insight.title[locale]}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Body Content */}
        <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
          <p>{insight.content[locale]}</p>
          <p>
            {locale === 'pt'
              ? 'As decisões societárias tomadas nos estágios preliminares de qualquer transação internacional têm um impacto determinante sobre a capacidade de execução posterior. Aconselhamos os conselhos de administração a auditarem preventivamente os mecanismos de governação e cláusulas de arbitragem antes da assinatura vinculativa.'
              : locale === 'ar'
              ? 'إن القرارات القانونية التي تتخذها مجالس الإدارة في المراحل التمهيدية للصفقات الدولية تؤثر بشكل مباشر على قدرة الأطراف على التنفيذ لاحقاً. نوصي دوماً بالتدقيق الاستباقي لبنود التحكيم والحوكمة قبل التوقيع النهائي.'
              : 'Corporate structuring determinations established in the preliminary phases of any multi-jurisdictional acquisition hold a disproportionate sway over future enforcement agility. We counsel boards to audit arbitration seats and cross-border indemnity carve-outs well in advance of definitive execution.'}
          </p>
        </div>

        {/* Author Bio Box */}
        <div className="p-6 rounded-2xl bg-[#0e213b] border border-slate-800 flex items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-base font-bold text-white">Need strategic advice on this topic?</h3>
            <p className="text-xs text-slate-400 mt-0.5">Contact our senior partners for a confidential discussion.</p>
          </div>
          <Link
            href="/demos/lawyer/consultation"
            className="px-6 py-2.5 rounded bg-[#c5a880] hover:bg-[#d8be9a] text-[#0a192f] font-bold text-xs uppercase tracking-wider shrink-0 transition-all"
          >
            Inquire Now
          </Link>
        </div>

        {/* Other Insights */}
        <div className="border-t border-slate-800 pt-10 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-white">Further Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherInsights.map((i) => (
              <Link
                key={i.slug}
                href={`/demos/lawyer/insights/${i.slug}`}
                className="p-5 rounded-xl bg-[#0e213b] border border-slate-800 hover:border-[#c5a880]/40 transition-all group block"
              >
                <span className="text-[10px] font-mono text-[#c5a880] uppercase block mb-1">{i.category}</span>
                <h3 className="font-serif text-base font-bold text-white group-hover:text-[#c5a880] transition-colors line-clamp-2">
                  {i.title[locale]}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

