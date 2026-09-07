'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { LAWYER_PRACTICE_AREAS, LAWYER_ATTORNEYS, LAWYER_INSIGHTS } from '@/config/lawyerData';
import { Shield, ArrowRight, Lock, CheckCircle2, Building, Globe, Scale } from 'lucide-react';

export default function LawyerHomePage() {
  const { locale, isRTL } = useLanguage();

  return (
    <div className="bg-[#0a192f] text-[#fcfbf7]">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden border-b border-[#c5a880]/20">
        <Image
          src="/images/lawyer/lawyer-hero.jpg"
          alt="London City Skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25 filter brightness-90 scale-100 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/70 to-[#0a192f]/40" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6 pt-10 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132845] border border-[#c5a880]/40 text-[#c5a880] text-xs font-mono uppercase tracking-[0.25em]">
            <Shield className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'Sociedade de Advogados Independente • Londres & Dubai' : locale === 'ar' ? 'مؤسسة قانونية رائدة • لندن ودبي' : 'Commercial Counsel • London & Dubai'}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Clarity in <br />
            <span className="text-[#c5a880] italic font-serif">Complex Matters.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {locale === 'pt'
              ? 'Aconselhamos conselhos de administração, fundos de investimento e famílias empresárias em operações societárias de alto impacto e contencioso transfronteiriço.'
              : locale === 'ar'
              ? 'نقدم المشورة القانونية الحاسمة لمجالس الإدارة وصناديق الاستثمار والمكاتب العائلية في الصفقات الكبرى والنزاعات التجارية الدولية.'
              : 'Decisive commercial counsel for corporate boards, private capital sponsors, and multi-generational family offices navigating multi-jurisdictional complexity.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/demos/lawyer/consultation"
              prefetch={true}
              className="w-full sm:w-auto px-8 py-4 rounded bg-[#c5a880] hover:bg-[#d8be9a] text-[#0a192f] font-extrabold text-xs uppercase tracking-widest transition-all shadow-xl shadow-[#c5a880]/20 hover:scale-105"
            >
              {locale === 'pt' ? 'Solicitar Consulta Preliminar' : locale === 'ar' ? 'طلب استشارة أولية' : 'Request Consultation'}
            </Link>
            <Link
              href="/demos/lawyer/practice-areas"
              prefetch={true}
              className="w-full sm:w-auto px-8 py-4 rounded bg-[#10243e] hover:bg-[#152e4f] border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              <span>{locale === 'pt' ? 'Explorar Áreas de Prática' : locale === 'ar' ? 'استعراض التخصصات' : 'Explore Practice Areas'}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Presence Strip */}
      <section className="py-8 bg-[#081528] border-b border-[#c5a880]/15 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="block font-serif text-[#c5a880] text-2xl font-bold">28 Years</span>
            <span className="text-slate-400 uppercase tracking-wider text-[11px]">{locale === 'pt' ? 'Prática Consolidada' : locale === 'ar' ? 'سنة من الخبرة القانونية' : 'Institutional Practice'}</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-[#c5a880] text-2xl font-bold">8 Disciplines</span>
            <span className="text-slate-400 uppercase tracking-wider text-[11px]">{locale === 'pt' ? 'Práticas Especializadas' : locale === 'ar' ? 'مجالات تخصص متكاملة' : 'Dedicated Practices'}</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-[#c5a880] text-2xl font-bold">3 Gateways</span>
            <span className="text-slate-400 uppercase tracking-wider text-[11px]">{locale === 'pt' ? 'Londres, Frankfurt & Dubai' : locale === 'ar' ? 'مكاتب لندن وفرانكفورت ودبي' : 'London, Frankfurt & DIFC'}</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-[#c5a880] text-2xl font-bold">100% Discreet</span>
            <span className="text-slate-400 uppercase tracking-wider text-[11px]">{locale === 'pt' ? 'Confidencialidade Rigorosa' : locale === 'ar' ? 'سرية مهنية مطلقة' : 'Privileged Engagement'}</span>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid (8 dedicated areas) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[#c5a880] text-xs font-mono uppercase tracking-[0.25em]">
              {locale === 'pt' ? 'Especialização Jurídica' : locale === 'ar' ? 'القطاعات القانونية' : 'Areas of Excellence'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              {locale === 'pt' ? 'Áreas de Prática Estratégica' : locale === 'ar' ? 'مجالات الممارسة القانونية' : 'Strategic Practice Areas'}
            </h2>
          </div>
          <Link
            href="/demos/lawyer/practice-areas"
            prefetch={true}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#c5a880] hover:text-[#d8be9a]"
          >
            <span>{locale === 'pt' ? 'Ver Todas as Práticas' : locale === 'ar' ? 'عرض جميع التخصصات' : 'View All Practice Areas'}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LAWYER_PRACTICE_AREAS.map((practice) => (
            <Link
              key={practice.id}
              href={`/demos/lawyer/practice-areas/${practice.slug}`}
              prefetch={true}
              className="group flex flex-col justify-between rounded-xl bg-[#0e213b] border border-slate-800 hover:border-[#c5a880]/50 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44 overflow-hidden bg-slate-950">
                <Image
                  src={practice.image}
                  alt={practice.title[locale]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e213b] via-transparent to-transparent" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#c5a880] transition-colors leading-snug">
                    {practice.title[locale]}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-3 font-light">
                    {practice.subtitle[locale]}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-[#c5a880] font-mono font-semibold">
                  <span>Lead: {practice.leadAttorney}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''} group-hover:translate-x-1 transition-transform`} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Firm Ethos & Philosophy */}
      <section className="py-20 bg-[#071324] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <Image
                src="/images/lawyer/lawyer-office.jpg"
                alt="Meridian Boardroom"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c5a880]">
                {locale === 'pt' ? 'A Abordagem Meridian' : locale === 'ar' ? 'فلسفة العمل' : 'Our Strategic Approach'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                {locale === 'pt' ? 'Precisão Jurídica. Sem Ruído de Retórica.' : locale === 'ar' ? 'دقة قانونية حاسمة. بلا خطابات استعراضية.' : 'Surgical Precision. No Legal Theater.'}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                {locale === 'pt'
                  ? 'Rejeitamos o formalismo arcaico que apenas acrescenta custos sem produzir valor. Trabalhamos como consultores estratégicos de confiança, analisando o risco comercial antes de propor a solução jurídica.'
                  : locale === 'ar'
                  ? 'نرفض الإجراءات الشكلية المعقدة التي تكلف وقتاً ومالاً دون فائدة حقيقية. نعمل كشريك استراتيجي يحلل المخاطر التجارية أولاً ثم يبتكر الحلول القانونية المحكمة.'
                  : 'We reject defensive legal boilerplate that complicates commerce. Our partners operate as trusted business advisors, identifying commercial leverage before formulating regulatory or transactional structures.'}
              </p>
              <div className="pt-2">
                <Link
                  href="/demos/lawyer/about"
                  prefetch={true}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-[#c5a880] hover:bg-[#d8be9a] text-[#0a192f] font-extrabold text-xs uppercase tracking-widest transition-all shadow-md"
                >
                  <span>{locale === 'pt' ? 'Conhecer a Sociedade' : locale === 'ar' ? 'عن الشركة وتاريخها' : 'About the Firm'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Partners Roster */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[#c5a880] text-xs font-mono uppercase tracking-[0.25em]">
            {locale === 'pt' ? 'Corpo de Sócios' : locale === 'ar' ? 'الشركاء والمستشارون' : 'Leadership & Partners'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            {locale === 'pt' ? 'Sócios & Consultores Principais' : locale === 'ar' ? 'الشركاء الرئيسيون' : 'Senior Partners & Counsel'}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            {locale === 'pt'
              ? 'Advogados seniores com décadas de liderança nos principais centros financeiros mundiais.'
              : locale === 'ar'
              ? 'محامون معتمدون يتمتعون بعقود من الخبرة في كبرى المراكز المالية والقضائية العالمية.'
              : 'Senior practitioners with decades of trial and transactional leadership across key international financial hubs.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {LAWYER_ATTORNEYS.map((attorney) => (
            <div
              key={attorney.id}
              className="group rounded-xl bg-[#0e213b] border border-slate-800 hover:border-[#c5a880]/40 overflow-hidden transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden bg-slate-950">
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e213b] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#c5a880] transition-colors">
                  {attorney.name}
                </h3>
                <p className="text-xs text-[#c5a880] font-mono">{attorney.title[locale]}</p>
                <p className="text-xs text-slate-300 leading-relaxed font-light line-clamp-3">
                  {attorney.bio[locale]}
                </p>
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <Link
                    href={`/demos/lawyer/attorneys/${attorney.slug}`}
                    prefetch={true}
                    className="text-xs font-mono text-[#c5a880] hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>{locale === 'pt' ? 'Ver Perfil Completo' : locale === 'ar' ? 'السيرة الكاملة' : 'Full Biography'}</span>
                    <ArrowRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                  <Link
                    href="/demos/lawyer/consultation"
                    prefetch={true}
                    className="text-[11px] font-mono text-slate-400 hover:text-white"
                  >
                    {locale === 'pt' ? 'Marcar' : locale === 'ar' ? 'طلب موعد' : 'Inquire'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Legal Insights */}
      <section className="py-20 bg-[#071324] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[#c5a880] text-xs font-mono uppercase tracking-[0.25em]">
                {locale === 'pt' ? 'Análises Jurídicas' : locale === 'ar' ? 'الأبحاث والآراء' : 'Thought Leadership'}
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mt-1">
                {locale === 'pt' ? 'Artigos & Risco Regulatório' : locale === 'ar' ? 'رؤى قانونية وتحليلية' : 'Legal Insights'}
              </h2>
            </div>
            <Link
              href="/demos/lawyer/insights"
              prefetch={true}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#c5a880] hover:text-[#d8be9a]"
            >
              <span>{locale === 'pt' ? 'Ver Todos os Artigos' : locale === 'ar' ? 'عرض كافة المقالات' : 'Read All Insights'}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LAWYER_INSIGHTS.map((insight) => (
              <div key={insight.slug} className="group space-y-4 rounded-xl bg-[#0e213b] border border-slate-800 p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#c5a880]">
                    <span>{insight.category}</span>
                    <span>{insight.readTime}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#c5a880] transition-colors leading-snug">
                    {insight.title[locale]}
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {insight.excerpt[locale]}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Author: {insight.author}</span>
                  <Link
                    href={`/demos/lawyer/insights/${insight.slug}`}
                    prefetch={true}
                    className="text-[#c5a880] hover:underline font-mono font-semibold"
                  >
                    {locale === 'pt' ? 'Ler' : locale === 'ar' ? 'قراءة' : 'Read →'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Intake Final CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0a192f] to-[#050c18] border-t border-[#c5a880]/30 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded bg-[#0f2442] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {locale === 'pt' ? 'Iniciar uma Consulta Confidencial' : locale === 'ar' ? 'بدء استشارة سرية وموثوقة' : 'Initiate a Confidential Matter'}
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed font-light">
            {locale === 'pt'
              ? 'Os nossos sócios estão disponíveis para reuniões presenciais nos nossos escritórios de Londres e Dubai ou por videoconferência encriptada.'
              : locale === 'ar'
              ? 'شركاؤنا متاحون للاجتماعات المباشرة في مكاتب لندن ودبي أو عبر قنوات الاتصال المشفرة.'
              : 'Our senior partners are available for in-person consultations at our London City or Dubai DIFC offices, or via encrypted video link.'}
          </p>
          <div className="pt-2">
            <Link
              href="/demos/lawyer/consultation"
              prefetch={true}
              className="inline-flex items-center gap-2 px-8 py-4 rounded bg-[#c5a880] hover:bg-[#d8be9a] text-[#0a192f] font-extrabold text-xs uppercase tracking-widest transition-all shadow-xl shadow-[#c5a880]/25 hover:scale-105"
            >
              <span>{locale === 'pt' ? 'Solicitar Consulta' : locale === 'ar' ? 'حجز موعد استشارة' : 'Request Consultation Briefing'}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

