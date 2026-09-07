'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getWhatsAppUrl } from '@/config/contact';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  TrendingUp,
  Zap,
  Smartphone,
  Star,
  MessageCircle,
  KeyRound,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

export function BuiltToSell() {
  const { locale, isRTL, pricing } = useLanguage();
  const whatsappUrl = getWhatsAppUrl(locale, 'hero');

  const pillars = [
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-500" />,
      title:
        locale === 'pt'
          ? 'Posicionamento Estratégico de CTAs'
          : locale === 'ar'
          ? 'مواضع مدروسة لأزرار اتخاذ القرار'
          : 'High-Converting CTA Architecture',
      desc:
        locale === 'pt'
          ? 'Botões de ação desenhados para onde o olhar do visitante vai primeiro, maximizando o número de contactos por visita.'
          : locale === 'ar'
          ? 'أزرار اتصال وحجز موضوعة بدقة حيث تتجه أنظار الزوار لتوليد أعلى معدل استفسارات ومبيعات.'
          : 'Action triggers placed at natural decision points across both mobile and desktop screens to turn browsers into buyers.',
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title:
        locale === 'pt'
          ? 'Velocidade Sub-Segundo Sem Esperas'
          : locale === 'ar'
          ? 'سرعة تحميل فائقة بأقل من ثانية'
          : 'Sub-Second Page Load Speed',
      desc:
        locale === 'pt'
          ? 'Cada segundo de atraso custa clientes. As nossas páginas carregam instantaneamente em redes 4G e 5G.'
          : locale === 'ar'
          ? 'كل ثانية تأخير تفقدك زبائن محتملين. مواقعنا تفتح على الفور حتى عبر شبكات الهاتف المحمول العادية.'
          : 'Zero bloatware, optimized imagery, and modern Next.js prerendering prevent bounce rates and preserve customer interest.',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-sky-500" />,
      title:
        locale === 'pt'
          ? 'Ergonomia Focada em Telemóveis'
          : locale === 'ar'
          ? 'تجربة تصفح مثالية للهواتف'
          : 'Mobile-First Thumb Ergonomics',
      desc:
        locale === 'pt'
          ? 'Mais de 70% dos seus potenciais clientes acedem pelo telemóvel. O design adapta-se perfeitamente com navegação fácil por polegar.'
          : locale === 'ar'
          ? 'أكثر من 70% من زبائنك يتصفحون عبر الهاتف الذكي. تصاميمنا تضمن سهولة النقر والتنقل بيد واحدة.'
          : 'Designed from mobile screens upward, ensuring thumb-accessible booking actions, readable typography, and effortless navigation.',
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title:
        locale === 'pt'
          ? 'Prova Social & Credibilidade Imediata'
          : locale === 'ar'
          ? 'عناصر ثقة واضحة تبدد تردد العميل'
          : 'Immediate Authority & Social Proof',
      desc:
        locale === 'pt'
          ? 'Apresentação cuidada de avaliações, galeria de trabalhos reais e sinais que transmitem seriedade e solidez.'
          : locale === 'ar'
          ? 'إبراز تقييمات العملاء الحقيقيين، معارض الأعمال والإحصائيات التي تبني الثقة الفورية لدى الزائر الجديد.'
          : 'Strategically integrated customer feedback, verified review badges, and visual evidence that eliminate buyer hesitation.',
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#25D366]" />,
      title:
        locale === 'pt'
          ? 'Conversão com 1 Toque para WhatsApp'
          : locale === 'ar'
          ? 'محادثة فورية بنقرة واحدة عبر واتساب'
          : 'Direct Click-to-WhatsApp Inquiries',
      desc:
        locale === 'pt'
          ? 'Sem formulários longos ou complicados. Os clientes chegam diretamente à sua conversa com a intenção clara de compra.'
          : locale === 'ar'
          ? 'بدون نماذج معقدة ومملة، يصل الزبون مباشرة إلى محادثتك على واتساب مع تفاصيل ما يبحث عنه بالتحديد.'
          : 'Connect leads straight to your WhatsApp with pre-filled intent, turning casual interest into real sales conversations.',
    },
    {
      icon: <KeyRound className="w-6 h-6 text-purple-500" />,
      title:
        locale === 'pt'
          ? '100% Propriedade do Cliente & Sem Fidelização'
          : locale === 'ar'
          ? 'ملكية كاملة 100% بدون أي عقود احتكارية'
          : '100% Client Ownership & Zero Lock-in',
      desc:
        locale === 'pt'
          ? 'O domínio e o alojamento são seus. Entregamos todos os acessos diretos. Sem mensalidades obrigatórias de plataforma.'
          : locale === 'ar'
          ? 'الدومين والاستضافة بحسابك الخاص، ونسلمك جميع كلمات المرور. لا توجد أي اشتراكات إجبارية أو قيود تقنية.'
          : 'You own all credentials, domain records, and hosting accounts outright. No monthly hostage pricing or locked platforms.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-400 text-xs font-bold uppercase tracking-wider">
            <span>
              {locale === 'pt'
                ? 'Construído Para Vender'
                : locale === 'ar'
                ? 'تصميم صُمم ليبيع'
                : 'Built To Convert'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {locale === 'pt' ? (
              <>
                Um Website Bonito É Bom. <br />
                <span className="text-brand-400">Um Website Que Conquista Clientes É Muito Melhor.</span>
              </>
            ) : locale === 'ar' ? (
              <>
                الموقع الجميل جيد، <br />
                <span className="text-brand-400">لكن الموقع الذي يجلب لك عملاء حقيقيين هو الأفضل دائماً.</span>
              </>
            ) : (
              <>
                A Beautiful Website Is Good. <br />
                <span className="text-brand-400">A Website That Gets You Customers Is Better.</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            {locale === 'pt'
              ? 'Combinamos estética de prestígio com psicologia de conversão comercial para garantir que o seu novo website gera retorno concreto para a sua empresa.'
              : locale === 'ar'
              ? 'ندمج بين التصميم العصري الفخم وعلم نفس التحويل التجاري لنضمن أن موقعك الجديد يحقق لك أرباحاً وعوائد تفوق تكلفته.'
              : 'We combine high-end aesthetic design with commercial conversion psychology to ensure your new website pays for itself.'}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-7 rounded-3xl bg-slate-800/60 border border-slate-700/80 hover:border-brand-500/40 transition-all duration-300 space-y-3.5 sm:space-y-4 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-md">
                {pillar.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-800 to-slate-850 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1 text-center sm:text-start">
            <h4 className="text-base sm:text-lg font-bold text-white">
              {locale === 'pt'
                ? `Pronto para transformar o website do seu negócio? (A partir de ${pricing.basePriceFormatted})`
                : locale === 'ar'
                ? `جاهز لترقية موقعك وتحويله إلى محرك مبيعات؟ (ابتداءً من ${pricing.basePriceFormatted})`
                : `Ready to turn your website into a client-acquisition asset? (Starting at ${pricing.basePriceFormatted})`}
            </h4>
            <p className="text-xs text-slate-400">
              {locale === 'pt'
                ? 'Sem reuniões intermináveis. Resposta rápida no WhatsApp com orçamento transparente.'
                : locale === 'ar'
                ? 'تواصل مباشر عبر واتساب، واستشارة سريعة مع أسعار واضحة بدون رسوم خفية.'
                : 'No endless sales meetings. Direct WhatsApp consultation with crystal clear pricing.'}
            </p>
          </div>

          <Button
            href={whatsappUrl}
            isExternal
            variant="whatsapp"
            className="w-full sm:w-auto px-6 py-3 shrink-0"
            icon={<ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />}
            iconPosition="right"
          >
            {locale === 'pt' ? 'Falar no WhatsApp' : locale === 'ar' ? 'تحدث معنا عبر واتساب' : 'Chat on WhatsApp'}
          </Button>
        </div>
      </div>
    </section>
  );
}

