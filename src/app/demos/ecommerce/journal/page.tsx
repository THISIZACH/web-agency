'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ECOMMERCE_JOURNAL } from '@/config/ecommerceProducts';
import { ArrowRight } from 'lucide-react';

export default function EcommerceJournalPage() {
  const { locale, isRTL } = useLanguage();

  return (
    <div className="bg-white text-neutral-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
            {locale === 'pt' ? 'Caderno Editorial & Ensaios' : locale === 'ar' ? 'المجلة التحريرية' : 'The Editorial Journal'}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-neutral-950 uppercase tracking-tight">
            {locale === 'pt' ? 'Caderno de Matéria & Estilo' : locale === 'ar' ? 'رؤى الأناقة والمنسوجات' : 'Essays on Fiber & Form'}
          </h1>
          <p className="text-neutral-500 text-sm max-w-xl mx-auto font-light leading-relaxed">
            {locale === 'pt'
              ? 'Reflexões sobre alfaiataria de autor, cultivo sustentável de fibras e a estética da contenção.'
              : locale === 'ar'
              ? 'تأملات في فنون الخياطة اليدوية، واستدامة ألياف الأقمشة النادرة، وجماليات البساطة المعمارية.'
              : 'Observations on sartorial restraint, ethical fiber cultivation, and the philosophy of permanent wardrobes.'}
          </p>
        </div>

        {/* Journal Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ECOMMERCE_JOURNAL.map((article) => (
            <article key={article.slug} className="group space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative h-72 rounded-2xl overflow-hidden bg-neutral-100">
                  <Image
                    src={article.image}
                    alt={article.title[locale]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.author}</span>
                  </div>
                  <h2 className="font-serif text-xl font-bold text-neutral-950 group-hover:text-neutral-600 transition-colors leading-snug">
                    {article.title[locale]}
                  </h2>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    {article.excerpt[locale]}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/demos/ecommerce/shop"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-neutral-950 hover:underline"
                >
                  <span>{locale === 'pt' ? 'Ler Artigo Completo' : locale === 'ar' ? 'قراءة المقال' : 'Read Full Essay'}</span>
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

