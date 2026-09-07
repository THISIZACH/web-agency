'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { BARBER_SERVICES } from '@/config/barberData';
import { Scissors, Clock, Check, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export default function BarbershopPricingPage() {
  const { locale, isRTL } = useLanguage();

  const membershipTiers = [
    {
      name: locale === 'pt' ? 'Assinatura Mensal Gentleman' : locale === 'ar' ? 'الباقة الشهرية المميزة' : 'The Monthly Gentleman',
      price: locale === 'ar' ? '$95 / mo' : locale === 'pt' ? '85€ / mês' : '£90 / mo',
      desc: locale === 'pt' ? 'Para cavalheiros que mantêm o corte e a barba sempre impecáveis com visitas regulares.' : locale === 'ar' ? 'للرجال الحريصين على الحفاظ على مظهر متقن دوماً بزيارات دورية.' : 'For gentlemen who value consistent refinement and pristine upkeep.',
      features: [
        locale === 'pt' ? '2 Cortes Signature por mês' : locale === 'ar' ? 'قصتان مميزتان كل شهر' : '2 Signature Precision Cuts / month',
        locale === 'pt' ? '1 Ritual de Barba com Toalha Quente' : locale === 'ar' ? 'جلسة حلاقة ذقن بالمنشفة الساخنة' : '1 Royal Hot Towel Shave / month',
        locale === 'pt' ? '15% de desconto em produtos botânicos' : locale === 'ar' ? 'خصم 15% على منتجات العناية' : '15% discount on grooming products',
        locale === 'pt' ? 'Prioridade de agendamento em horário nobre' : locale === 'ar' ? 'أولوية الحجز في أوقات الذروة' : 'Priority booking access',
      ],
      badge: locale === 'pt' ? 'Mais Popular' : locale === 'ar' ? 'الأكثر طلباً' : 'Most Popular',
    },
    {
      name: locale === 'pt' ? 'Clube Executivo VIP' : locale === 'ar' ? 'عضوية النادي التنفيذي VIP' : 'The Executive Reserve',
      price: locale === 'ar' ? '$180 / mo' : locale === 'pt' ? '160€ / mês' : '£170 / mo',
      desc: locale === 'pt' ? 'Acesso ilimitado a manutenção de contornos, tratamentos capilares e serviço exclusivo de concierge.' : locale === 'ar' ? 'تحديد خطوط غير محدود، علاجات لفروة الرأس وتنسيق مواعيد مخصص.' : 'Unlimited neck cleanup, scalp rejuvenation therapies, and concierge chair reservation.',
      features: [
        locale === 'pt' ? 'Cortes e Barbas Ilimitados' : locale === 'ar' ? 'حلاقة شعر وذقن غير محدودة' : 'Unlimited Cuts & Shaves',
        locale === 'pt' ? 'Massagem Craniana & Scalp Detox semanal' : locale === 'ar' ? 'جلسة تدليك للرأس والديتوكس أسبوعياً' : 'Weekly Scalp Detox & Acupressure',
        locale === 'pt' ? 'Lounge privado com prova de single-malt' : locale === 'ar' ? 'دخول صالة كبار الشخصيات مع ضيافة فاخرة' : 'Private VIP lounge access',
        locale === 'pt' ? 'Kit de produtos North & Blade oferta' : locale === 'ar' ? 'مجموعة منتجات عناية هدية ترحيبية' : 'Curated seasonal gift package',
      ],
    },
  ];

  return (
    <div className="bg-[#0d0d0d] text-[#f5f0eb] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono uppercase tracking-widest">
            <Scissors className="w-3.5 h-3.5 -rotate-45" />
            <span>{locale === 'pt' ? 'Transparência & Excelência' : locale === 'ar' ? 'الشفافية والوضوح' : 'Honest Craft Pricing'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase">
            {locale === 'pt' ? 'Tabela de Preços' : locale === 'ar' ? 'جدول الأسعار' : 'Pricing & Tiers'}
          </h1>
          <p className="text-stone-400 text-sm max-w-xl mx-auto">
            {locale === 'pt'
              ? 'Valores claros e sem surpresas. Cada atendimento é um compromisso inviolável com a sua satisfação.'
              : locale === 'ar'
              ? 'أسعار واضحة ودقيقة. كل موعد هو عهد منا بتقديم أرقى مستويات الخدمة دون أي مساومة.'
              : 'Clear, transparent pricing. Every appointment is an uncompromising commitment to your dignity and personal style.'}
          </p>
        </div>

        {/* Individual Services Table */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#141414] border border-stone-800 overflow-hidden">
          <div className="p-6 border-b border-stone-800 bg-[#171717] flex justify-between items-center">
            <h2 className="font-serif text-xl font-bold text-white uppercase tracking-wider">
              {locale === 'pt' ? 'Serviços Individuais' : locale === 'ar' ? 'الخدمات الفردية' : 'Individual Services'}
            </h2>
            <span className="text-xs font-mono text-[#d4af37]">London Mayfair Standard</span>
          </div>

          <div className="divide-y divide-stone-800/80">
            {BARBER_SERVICES.map((s) => (
              <div
                key={s.id}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#1a1a1a] transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-base font-bold text-white">{s.name[locale]}</h3>
                    {s.badge && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-[#d4af37] text-black">
                        {s.badge[locale]}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-400 max-w-xl leading-relaxed">{s.desc[locale]}</p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-stone-500 pt-1">
                    <Clock className="w-3 h-3 text-[#d4af37]" />
                    <span>{s.duration}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0 pt-2 sm:pt-0">
                  <span className="font-mono text-xl font-bold text-[#d4af37]">{s.price[locale]}</span>
                  <Link
                    href={`/demos/barbershop/book?service=${s.id}`}
                    className="px-4 py-2 rounded bg-[#222222] hover:bg-[#d4af37] hover:text-black text-stone-200 text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    {locale === 'pt' ? 'Agendar' : locale === 'ar' ? 'حجز' : 'Book'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Membership Tiers */}
        <div className="space-y-8 pt-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#d4af37] text-xs font-mono uppercase tracking-[0.2em]">
              {locale === 'pt' ? 'Para Clientes Frequentes' : locale === 'ar' ? 'اشتراكات النخبة' : 'Gentlemen Memberships'}
            </span>
            <h2 className="font-serif text-3xl font-bold text-white uppercase">
              {locale === 'pt' ? 'Planos de Assinatura Mensal' : locale === 'ar' ? 'باقات الاشتراك الشهري' : 'Curated Memberships'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {membershipTiers.map((tier, i) => (
              <div
                key={i}
                className="relative rounded-2xl bg-[#141414] border border-stone-800 p-8 flex flex-col justify-between space-y-6 hover:border-[#d4af37]/50 transition-all"
              >
                {tier.badge && (
                  <span className="absolute -top-3 right-6 px-3 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[#d4af37] text-black">
                    {tier.badge}
                  </span>
                )}
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-white">{tier.name}</h3>
                  <div className="font-mono text-3xl font-black text-[#d4af37]">{tier.price}</div>
                  <p className="text-xs text-stone-400 leading-relaxed">{tier.desc}</p>
                  <ul className="space-y-2.5 pt-2 text-xs text-stone-300">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/demos/barbershop/book"
                  className="w-full py-3.5 rounded bg-[#d4af37] hover:bg-[#e5c158] text-black font-bold text-xs uppercase tracking-widest text-center transition-all shadow-md shadow-[#d4af37]/20"
                >
                  {locale === 'pt' ? 'Aderir à Assinatura' : locale === 'ar' ? 'الاشتراك في الباقة' : 'Inquire for Membership'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

