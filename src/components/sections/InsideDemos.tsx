'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { demoUrls } from '@/config/demos';
import { Badge } from '@/components/ui/Badge';
import {
  UtensilsCrossed,
  CalendarCheck2,
  Compass,
  MessageCircle,
  Smartphone,
  Gauge,
  ArrowRight,
} from 'lucide-react';

export function InsideDemos() {
  const { locale, isRTL } = useLanguage();

  const features = [
    {
      icon: <UtensilsCrossed className="w-6 h-6 text-amber-500" />,
      bgGradient: 'from-amber-500/10 to-transparent',
      borderColor: 'border-amber-500/20',
      title:
        locale === 'pt'
          ? 'Ementas Digitais & Filtros Dinâmicos'
          : locale === 'ar'
          ? 'قوائم طعام رقمية وتصفية ديناميكية'
          : 'Interactive Menus & Categorized Catalogs',
      desc:
        locale === 'pt'
          ? 'Navegue por entradas, pratos principais, cartas de vinhos e sobremesas com fotografia de alta resolução e preços automáticos.'
          : locale === 'ar'
          ? 'تصفح مقبلات وأطباق الشيف وقوائم الحلويات مع صور عالية الدقة وأسعار واضحة وعلامات مسببات الحساسية.'
          : 'Explore appetizers, chef specials, wine pairings, and desserts with high-resolution photography and allergen tags.',
      demoLink: demoUrls.restaurant,
      demoLabel:
        locale === 'pt' ? 'Ver Menu de Demonstração' : locale === 'ar' ? 'معاينة قائمة المطعم' : 'Explore Savor Menu',
    },
    {
      icon: <CalendarCheck2 className="w-6 h-6 text-cyan-500" />,
      bgGradient: 'from-cyan-500/10 to-transparent',
      borderColor: 'border-cyan-500/20',
      title:
        locale === 'pt'
          ? 'Agendamento Clínico & Visualizador de Sorriso'
          : locale === 'ar'
          ? 'حجز المواعيد الطبية ومقارنة الابتسامة'
          : 'Clinical Scheduling & Interactive Smile Preview',
      desc:
        locale === 'pt'
          ? 'Apresentação clínica de excelência com 8 especialidades detalhadas, normas de esterilização e marcação de consultas online em 4 passos.'
          : locale === 'ar'
          ? 'عرض طبي موثوق يشمل 8 تخصصات علاجية ومعايير التعقيم وحجز مواعيد الفحص المباشر في 4 خطوات سهلة.'
          : 'Evidence-based dental presentation with treatment step breakdowns, ISO sterilization standards, and 4-step online booking wizard.',
      demoLink: demoUrls.dentist,
      demoLabel:
        locale === 'pt' ? 'Ver Clínica NovaSmile' : locale === 'ar' ? 'معاينة عيادة NovaSmile' : 'Explore NovaSmile',
    },
    {
      icon: <Compass className="w-6 h-6 text-stone-400" />,
      bgGradient: 'from-stone-500/10 to-transparent',
      borderColor: 'border-stone-500/20',
      title:
        locale === 'pt'
          ? 'Portfólio Editorial & Estudos de Caso Dinâmicos'
          : locale === 'ar'
          ? 'معارض معمارية راقية ودراسات مشاريع ديناميكية'
          : 'Editorial Project Portfolios & Dynamic Case Studies',
      desc:
        locale === 'pt'
          ? 'Apresentação minimalista de luxo com fotografia de arquitetura, fichas de materiais, ensaios conceituais e formulário de projetos.'
          : locale === 'ar'
          ? 'تصميم تحريري فاخر يعرض تفاصيل المشاريع والمواد المستخدمة ومقالات العمارة ونموذج استفسار للمشاريع.'
          : 'Minimalist luxury presentation featuring architectural photography, material specifications, concept essays, and project parameter inquiries.',
      demoLink: demoUrls.architect,
      demoLabel:
        locale === 'pt' ? 'Ver Obras Atelier Forma' : locale === 'ar' ? 'استعراض مشاريع المعمار' : 'View Architectural Works',
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#25D366]" />,
      bgGradient: 'from-[#25D366]/10 to-transparent',
      borderColor: 'border-[#25D366]/20',
      title:
        locale === 'pt'
          ? 'Canal Direto de WhatsApp com Mensagens Pré-formatadas'
          : locale === 'ar'
          ? 'ربط مباشر وفوري مع واتساب'
          : 'Frictionless Click-to-WhatsApp Flow',
      desc:
        locale === 'pt'
          ? 'Elimine barreiras de conversão. Cada visitante pode contactar a sua equipa com o serviço de interesse já preenchido na conversa.'
          : locale === 'ar'
          ? 'تواصل فوري بنقرة واحدة ينقل العميل مباشرة إلى محادثة واتساب مع رسالة جاهزة تتضمن الخدمة المطلوبة.'
          : 'Every call-to-action prepares an intelligent pre-filled inquiry, allowing leads to reach your WhatsApp in a single tap.',
      demoLink: '/#demos',
      demoLabel:
        locale === 'pt' ? 'Ver Demonstrações' : locale === 'ar' ? 'معاينة النماذج' : 'View Demos in Action',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-sky-500" />,
      bgGradient: 'from-sky-500/10 to-transparent',
      borderColor: 'border-sky-500/20',
      title:
        locale === 'pt'
          ? 'Simulador de Dispositivos (Desktop, Tablet, Telemóvel)'
          : locale === 'ar'
          ? 'مبدّل المعاينة (كمبيوتر، لوحي، جوال)'
          : 'Live Viewport Switcher Controls',
      desc:
        locale === 'pt'
          ? 'Teste a responsividade dos modelos com o botão integrado na barra superior e veja a adaptação impecável a qualquer ecrã.'
          : locale === 'ar'
          ? 'اختبر تجاوب موقعك الفعلي عبر شريط التحكم العلوي لمشاهدة المظهر على شاشات الهواتف والأجهزة اللوحية والحواسيب.'
          : 'Clients can switch between 100% desktop, 768px tablet, and 390px mobile phone shells right from the sticky top bar.',
      demoLink: demoUrls.restaurant,
      demoLabel:
        locale === 'pt' ? 'Testar Barra de Controlo' : locale === 'ar' ? 'تجربة شريط المعاينة' : 'Test Device Switcher',
    },
    {
      icon: <Gauge className="w-6 h-6 text-indigo-500" />,
      bgGradient: 'from-indigo-500/10 to-transparent',
      borderColor: 'border-indigo-500/20',
      title:
        locale === 'pt'
          ? 'Performance Sub-Segundo & Otimização Técnica de SEO'
          : locale === 'ar'
          ? 'سرعة استجابة فائقة وتهيئة تقنية'
          : 'Sub-Second Speed & Technical SEO Engine',
      desc:
        locale === 'pt'
          ? 'Construído com Next.js 14, garantindo tempos de carregamento quase instantâneos e excelente posicionamento no Google.'
          : locale === 'ar'
          ? 'مبني بتقنيات Next.js 14 الحديثة لضمان تحميل فوري بدون انتظار وتصدر مراتب متقدمة في نتائج بحث جوجل.'
          : 'Pre-rendered static architectures deliver instant loads, zero layout shifts, and strong organic discovery signals.',
      demoLink: '/#pricing',
      demoLabel:
        locale === 'pt' ? 'Ver Pacote de Criação' : locale === 'ar' ? 'عرض باقة التصميم' : 'Explore Service Scope',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-950 relative border-t border-slate-100 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="neutral" className="mb-4">
            {locale === 'pt'
              ? 'Arquitetura Interativa'
              : locale === 'ar'
              ? 'ميزات تفاعلية متطورة'
              : 'Production-Grade Architecture'}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {locale === 'pt'
              ? 'O Que Pode Experimentar Dentro Das Nossas Demos'
              : locale === 'ar'
              ? 'ما الذي يمكنك تجربته داخل نماذجنا الحية'
              : 'What You Can Experience Inside Our Demos'}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {locale === 'pt'
              ? 'Não criamos maquetes estáticas. Cada demonstração é um sistema totalmente funcional que pode ser adaptado ao seu negócio.'
              : locale === 'ar'
              ? 'نحن لا نقدم تصاميم صور ثابتة، بل مواقع متكاملة الميزات وجاهزة للعمل الفوري لجلب الزبائن لنشاطك.'
              : 'We don’t build static mockups. Every live demo is a functional, interactive business portal ready to customize for your brand.'}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-5 sm:p-7 bg-slate-50/50 dark:bg-slate-900/50 border ${feat.borderColor} hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-md border border-slate-200 dark:border-slate-700">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800">
                {feat.demoLink.startsWith('http') ? (
                  <a
                    href={feat.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    <span>{feat.demoLabel}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </a>
                ) : (
                  <Link
                    href={feat.demoLink}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    <span>{feat.demoLabel}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

