'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export function EcommerceFooter() {
  const { locale, isRTL } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900 py-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Newsletter (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif tracking-[0.3em] text-xl font-bold text-white uppercase block">
              VELORA
            </span>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm font-light">
              {locale === 'pt'
                ? 'Atelier contemporâneo dedicado a peças de vestuário e maroquinaria de pureza geométrica, tecidos nobres e longevidade perene.'
                : locale === 'ar'
                ? 'دار أزياء معاصرة مكرسة للقطع الفاخرة والمصنوعات الجلدية المتقنة من أندر الألياف الطبيعية التي تتحدى الزمن.'
                : 'Contemporary luxury atelier creating architectural silhouettes, certified ethical cashmeres, and vegetable-tanned leather goods.'}
            </p>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-white font-mono block mb-2">
                {locale === 'pt' ? 'Assine a Edição Privada' : locale === 'ar' ? 'النشرة البريدية الحصرية' : 'The Private Dispatch'}
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 text-xs py-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{locale === 'pt' ? 'Obrigado por se juntar ao atelier.' : locale === 'ar' ? 'شكراً لانضمامك إلى قائمتنا الخاصة.' : 'Thank you for joining our private circle.'}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-sm">
                  <input
                    type="email"
                    required
                    placeholder={locale === 'pt' ? 'O seu e-mail...' : locale === 'ar' ? 'بريدك الإلكتروني...' : 'Enter your email...'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 bg-neutral-900 border border-neutral-800 text-white text-xs placeholder-neutral-500 rounded-l focus:outline-none focus:border-neutral-500"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-white hover:bg-neutral-200 text-neutral-950 font-bold uppercase tracking-wider text-[11px] rounded-r transition-colors cursor-pointer"
                  >
                    {locale === 'pt' ? 'Subscrever' : locale === 'ar' ? 'اشتراك' : 'Join'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 3: Customer Care */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs font-mono">
              {locale === 'pt' ? 'Apoio ao Cliente' : locale === 'ar' ? 'خدمة العملاء' : 'Client Care'}
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link href="/demos/ecommerce/contact" className="hover:text-white transition-colors">
                  {locale === 'pt' ? 'Concierge & Atendimento' : locale === 'ar' ? 'المساعد الشخصي' : 'Client Concierge'}
                </Link>
              </li>
              <li>
                <Link href="/demos/ecommerce/cart" className="hover:text-white transition-colors">
                  {locale === 'pt' ? 'Acompanhar Encomenda' : locale === 'ar' ? 'تتبع الطلب' : 'Track Order'}
                </Link>
              </li>
              <li>
                <Link href="/demos/ecommerce/about" className="hover:text-white transition-colors">
                  {locale === 'pt' ? 'Guia de Tamanhos' : locale === 'ar' ? 'دليل المقاسات' : 'Sizing Atelier'}
                </Link>
              </li>
              <li>
                <span className="text-neutral-500">
                  {locale === 'pt' ? 'Devoluções Globais' : locale === 'ar' ? 'الإرجاع الدولي' : 'Global Returns (30d)'}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: The House */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs font-mono">
              {locale === 'pt' ? 'A Casa VELORA' : locale === 'ar' ? 'عن الدار' : 'The House'}
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link href="/demos/ecommerce/about" className="hover:text-white transition-colors">
                  {locale === 'pt' ? 'História & Manufatura' : locale === 'ar' ? 'الحرفية والتاريخ' : 'Atelier Craft'}
                </Link>
              </li>
              <li>
                <Link href="/demos/ecommerce/collections" className="hover:text-white transition-colors">
                  {locale === 'pt' ? 'Arquivo de Coleções' : locale === 'ar' ? 'أرشيف المجموعات' : 'Collection Lookbooks'}
                </Link>
              </li>
              <li>
                <Link href="/demos/ecommerce/journal" className="hover:text-white transition-colors">
                  {locale === 'pt' ? 'Caderno Editorial' : locale === 'ar' ? 'المقالات التحريرية' : 'Editorial Journal'}
                </Link>
              </li>
              <li>
                <span className="text-neutral-500">
                  {locale === 'pt' ? 'Sustentabilidade Zero Plástico' : locale === 'ar' ? 'استدامة خالية من البلاستيك' : 'Zero Plastic Packaging'}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: Boutique Flagships */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs font-mono">
              {locale === 'pt' ? 'Ateliers Físicos' : locale === 'ar' ? 'الفروع الرئيسية' : 'Flagship Salons'}
            </h4>
            <div className="space-y-2 text-neutral-400">
              <div>
                <span className="text-white font-semibold block">Paris Flagship</span>
                <p className="text-[11px] text-neutral-500">18 Rue du Faubourg Saint-Honoré</p>
              </div>
              <div>
                <span className="text-white font-semibold block">Milan Salone</span>
                <p className="text-[11px] text-neutral-500">Via Montenapoleone 14</p>
              </div>
              <div>
                <span className="text-white font-semibold block">London Studio</span>
                <p className="text-[11px] text-neutral-500">Bond Street, Mayfair</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright + NexaWeb attribution */}
        <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2026 VELORA Atelier Contemporary S.A. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Commercial e-commerce demo engineered by</span>
            <Link href="/" className="text-white hover:underline font-semibold">
              NexaWeb Studio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

