'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Shield, Sparkles, Feather, Globe, ArrowRight } from 'lucide-react';

export default function EcommerceAboutPage() {
  const { locale, isRTL } = useLanguage();

  return (
    <div className="bg-white text-neutral-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
            {locale === 'pt' ? 'História & Manufatura' : locale === 'ar' ? 'قصة الأتيليه' : 'The Atelier House'}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-neutral-950 uppercase tracking-tight">
            {locale === 'pt' ? 'A Alma do Atelier VELORA' : locale === 'ar' ? 'أصالة الحرفية في دار فيلورا' : 'The Soul of the Atelier'}
          </h1>
          <p className="text-neutral-500 text-sm max-w-xl mx-auto font-light leading-relaxed">
            {locale === 'pt'
              ? 'Uma visão radical de moda lenta: eliminar o ruído sazonal e criar peças estruturadas que duram gerações.'
              : locale === 'ar'
              ? 'رؤية جريئة نحو الموضة المستدامة البطيئة: التخلص من فوضى الموضة المؤقتة وصنع قطع تدوم لأجيال متعاقبة.'
              : 'A radical dedication to slow craft: stripping away fleeting trends to create architectural garments that endure.'}
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative h-[520px] rounded-2xl overflow-hidden bg-neutral-100 shadow-xl">
            <Image
              src="/images/ecommerce/about-atelier.jpg"
              alt="Atelier Workshop"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Founded in 2021 • Paris & Milan
            </span>
            <h2 className="font-serif text-3xl font-light text-neutral-950 uppercase leading-snug">
              {locale === 'pt' ? 'A Nobreza dos Materiais em Primeiro Lugar' : locale === 'ar' ? 'أصالة الخامات أولاً' : 'Material Purity Precedes Design'}
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
              {locale === 'pt'
                ? 'Começamos sempre pela fibra. Antes de qualquer esboço ser desenhado, viajamos para as estepes da Mongólia e para as tecelagens históricas de Biella para selecionar lotes de matérias-primas com rastreabilidade total.'
                : locale === 'ar'
                ? 'نبدأ دوماً من أصالة الألياف الطبيعية. قبل رسم أي تصميم، نسافر إلى سهول منغوليا ومصانع بييلا الإيطالية العريقة لاختيار أجود الألياف مع ضمان المصدر المستدام.'
                : 'We start at the fiber level. Before any sketch is committed to paper, we partner directly with pastoralists in Inner Mongolia and heritage weavers in Biella to harvest single-origin raw materials with uncompromised integrity.'}
            </p>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
              {locale === 'pt'
                ? 'As nossas peças são cortadas uma a uma por mestres artesãos. Não utilizamos poliésteres ou forros sintéticos que comprometam a respiração natural da pele.'
                : locale === 'ar'
                ? 'تُقص قطعنا يدوياً بواسطة خياطين محترفين. لا نستخدم البوليستر أو الأقمشة الصناعية التي تحبس التنفس الطبيعي للبشرة.'
                : 'Every coat and trouser is bench-cut by hand. We deliberately eliminate synthetic blends, ensuring our garments remain 100% biodegradable and respectful to the human form.'}
            </p>
            <div className="pt-2">
              <Link
                href="/demos/ecommerce/shop"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-black text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md"
              >
                <span>{locale === 'pt' ? 'Descobrir as Peças' : locale === 'ar' ? 'تصفح المتجر' : 'Shop the Atelier'}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-neutral-200 pt-16">
          <div className="space-y-3">
            <Feather className="w-6 h-6 text-neutral-900" />
            <h3 className="font-serif text-lg font-bold text-neutral-950 uppercase">
              {locale === 'pt' ? 'Fibras de Origem Ética' : locale === 'ar' ? 'ألياف طبيعية مستدامة' : 'Ethical Harvesting'}
            </h3>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              {locale === 'pt'
                ? 'A caxemira é colhida através de escovagem suave na muda natural de primavera, sem qualquer dano para os animais.'
                : locale === 'ar'
                ? 'يتم تمشيط الكشمير برفق خلال موسم التبديل الطبيعي في الربيع دون إلحاق أي ضرر بالحيوانات.'
                : 'Our cashmere is hand-combed during the natural spring molt, protecting the welfare of ancestral herds.'}
            </p>
          </div>

          <div className="space-y-3">
            <Shield className="w-6 h-6 text-neutral-900" />
            <h3 className="font-serif text-lg font-bold text-neutral-950 uppercase">
              {locale === 'pt' ? 'Manufatura Europeia' : locale === 'ar' ? 'صناعة يدوية أوروبية' : 'European Craftsmanship'}
            </h3>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              {locale === 'pt'
                ? 'Oficinas familiares no norte de Itália e Portugal com mais de quatro gerações de mestria em alfaiataria.'
                : locale === 'ar'
                ? 'ورش عائلية في شمال إيطاليا والبرتغال توارثت فنون الخياطة الراقية عبر أربعة أجيال متعاقبة.'
                : 'Family-owned ateliers across northern Italy and northern Portugal with generational tailoring expertise.'}
            </p>
          </div>

          <div className="space-y-3">
            <Globe className="w-6 h-6 text-neutral-900" />
            <h3 className="font-serif text-lg font-bold text-neutral-950 uppercase">
              {locale === 'pt' ? 'Zero Plástico em Todo o Envio' : locale === 'ar' ? 'تغليف بيئي خالٍ من البلاستيك' : 'Plastic-Free Logistics'}
            </h3>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              {locale === 'pt'
                ? 'Caixas rígidas de papel reciclado certificado FSC, sacos de algodão biológico e selos de cera natural.'
                : locale === 'ar'
                ? 'علب فاخرة من ورق معاد تدويره معتمد، وحقائب قطنية عضوية لحفظ الملابس مع أختام شمع طبيعي.'
                : '100% FSC-certified recycled paper packaging, reusable raw organic cotton dustbags, and mineral ink.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

