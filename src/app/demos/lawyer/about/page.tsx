'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Shield, Lock, Globe, Building2, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LawyerAboutPage() {
  const { locale, isRTL } = useLanguage();

  const firmPillars = [
    {
      title: locale === 'pt' ? 'Independência Incondicional' : locale === 'ar' ? 'استقلالية مهنية تامة' : 'Uncompromising Independence',
      desc: locale === 'pt' ? 'Não pertencemos a redes corporativas difusas. Cada cliente beneficia do aconselhamento direto dos sócios principais.' : locale === 'ar' ? 'لا نتبع لأي تكتلات تجارية، مما يضمن حصول العميل على المشورة المباشرة من الشركاء دون أي تعارض مصالح.' : 'We remain an independent boutique partnership free from institutional conflicts, ensuring uncompromised fiduciary dedication.',
    },
    {
      title: locale === 'pt' ? 'Visão Comercial Pragmática' : locale === 'ar' ? 'رؤية تجارية عملية' : 'Commercial-First Acumen',
      desc: locale === 'pt' ? 'Analisamos o impacto económico do negócio antes de redigir a primeira linha contratual.' : locale === 'ar' ? 'ندرس الأثر المالي والاقتصادي للصفقة قبل صياغة العقود لضمان تحقيق الأهداف التجارية بأمان.' : 'We evaluate economic return and operational friction before architecting contractual covenants or litigation claims.',
    },
    {
      title: locale === 'pt' ? 'Discreção & Sigilo Absoluto' : locale === 'ar' ? 'سرية مصرفية وقانونية صارمة' : 'Discreet High-Stakes Counsel',
      desc: locale === 'pt' ? 'Os assuntos mais sensíveis dos nossos clientes permanecem sob o mais estrito sigilo profissional.' : locale === 'ar' ? 'تدار القضايا الأكثر حساسية لعملائنا في سرية تامة وبأعلى درجات الخصوصية.' : 'Our highest-profile victories remain unpublicized, preserved beneath the absolute sanctity of client privilege.',
    },
    {
      title: locale === 'pt' ? 'Capacidade Transfronteiriça' : locale === 'ar' ? 'تغطية دولية متعددة الاختصاصات' : 'Multi-Jurisdictional Reach',
      desc: locale === 'pt' ? 'Presença nos centros nevrálgicos de Londres, Frankfurt e Dubai para estruturação transnacional.' : locale === 'ar' ? 'حضور استراتيجي في مراكز المال بلندن وفرانكفورت ودبي لتنفيذ الصفقات العابرة للحدود.' : 'Direct partner presence across London, Frankfurt, and Dubai DIFC to orchestrate international capital flows.',
    },
  ];

  return (
    <div className="bg-[#0a192f] text-[#fcfbf7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132845] border border-[#c5a880]/30 text-[#c5a880] text-xs font-mono uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'A Nossa História & Princípios' : locale === 'ar' ? 'عن المؤسسة وتاريخها' : 'Heritage & Principles'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase">
            {locale === 'pt' ? 'A Sociedade Meridian' : locale === 'ar' ? 'مؤسسة ميريديان القانونية' : 'The Meridian Practice'}
          </h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto font-light leading-relaxed">
            {locale === 'pt'
              ? 'Fundada com o compromisso de aliar a disciplina dos Inns of Court britânicos à agilidade dos negócios internacionais modernos.'
              : locale === 'ar'
              ? 'تأسست الشركة لتوحيد عراقة التقاليد القضائية البريطانية مع متطلبات الاقتصاد والاستثمار الدولي الحديث.'
              : 'Founded to marry the rigorous discipline of London’s Inns of Court with the agility demanded by modern corporate capital.'}
          </p>
        </div>

        {/* Firm Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase text-[#c5a880] tracking-widest block">
              Established 1998 • City of London
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              {locale === 'pt' ? 'Onde a Estratégia Jurídica Protege o Futuro dos Negócios' : locale === 'ar' ? 'حيث تصنع الاستراتيجيات القانونية المحكمة حماية المستقبل' : 'Strategic Counsel that Shields Enterprise Value'}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              {locale === 'pt'
                ? 'Desde a sua fundação no centro financeiro de Londres, a Meridian Legal consolidou-se como a sociedade de referência para empresários e fundos institucionais que exigem mais do que meras minutas contratuais.'
                : locale === 'ar'
                ? 'منذ انطلاقتنا في المركز المالي لمدينة لندن، أثبتت ميريديان مكانتها كخيار أول للمستثمرين وصناديق الأعمال الباحثين عن رؤية استراتيجية تتجاوز مجرد الصياغة التقليدية.'
                : 'Since our establishment in London’s financial core, Meridian Legal has served as trusted counsel to institutional dealmakers, corporate boards, and family enterprises facing critical inflection points.'}
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              {locale === 'pt'
                ? 'Não operamos como uma fábrica de horas faturadas. O nosso modelo assenta no envolvimento direto dos sócios seniores em cada etapa de cada processo.'
                : locale === 'ar'
                ? 'نموذج عملنا يبتعد تماماً عن البيروقراطية؛ إذ يشارك الشركاء الكبار شخصياً في قيادة كل تفاوض وتوجيه كل استراتيجية.'
                : 'We deliberately reject high-volume leverage models. Our partners lead transactions directly, ensuring that every brief benefits from senior trial wisdom and commercial negotiation experience.'}
            </p>
            <div className="pt-2">
              <Link
                href="/demos/lawyer/consultation"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-[#c5a880] hover:bg-[#d8be9a] text-[#0a192f] font-extrabold text-xs uppercase tracking-widest transition-all shadow-md"
              >
                <span>{locale === 'pt' ? 'Solicitar Consulta' : locale === 'ar' ? 'طلب استشارة رسمية' : 'Initiate Consultation'}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[480px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
            <Image
              src="/images/lawyer/lawyer-office.jpg"
              alt="Meridian Legal Partners Office"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="space-y-10 border-t border-slate-800 pt-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#c5a880] text-xs font-mono uppercase tracking-[0.2em]">
              {locale === 'pt' ? 'Os Nossos Quatro Pilares' : locale === 'ar' ? 'ركائز عملنا' : 'Four Tenets'}
            </span>
            <h2 className="font-serif text-3xl font-bold text-white uppercase">
              {locale === 'pt' ? 'Porque os Clientes Nos Confiam o Seu Futuro' : locale === 'ar' ? 'لماذا يثق بنا كبار المستثمرين' : 'Why Leaders Rely on Meridian'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {firmPillars.map((pillar, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-[#0e213b] border border-slate-800 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[#c5a880] text-xl font-bold block mb-2">0{i + 1}.</span>
                  <h3 className="font-serif text-lg font-bold text-white">{pillar.title}</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">{pillar.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-800 flex items-center gap-1.5 text-[11px] text-[#c5a880] font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Institutional Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

