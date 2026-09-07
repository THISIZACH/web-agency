'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export function ArchitectFooter() {
  const { locale, isRTL } = useLanguage();

  return (
    <footer className="bg-[#0a0a0a] text-stone-300 border-t border-stone-800 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Col 1: Studio Identity */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/demos/architect" className="flex flex-col">
              <span className="font-serif text-2xl tracking-widest uppercase font-light text-stone-100">
                Atelier Forma
              </span>
              <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-stone-500">
                Architects & Associates
              </span>
            </Link>
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed pt-2">
              {locale === 'pt'
                ? 'Prática de arquitetura contemporânea focada em residências de luxo, edifícios culturais e integração paisagística sensível à luz e aos materiais naturais.'
                : locale === 'ar'
                ? 'استوديو عمارة وتصميم معاصر متخصص في المساكن الفاخرة، المشاريع الثقافية وتناغم الكتل المعمارية مع الطبيعة والضوء.'
                : 'Contemporary architectural studio dedicated to bespoke residential architecture, cultural spaces, and tactile materiality.'}
            </p>
          </div>

          {/* Col 2: Studio Works */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-stone-500 block">
              {locale === 'pt' ? 'Projetos Selecionados' : locale === 'ar' ? 'أبرز المشاريع' : 'Selected Works'}
            </span>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <Link href="/demos/architect/projects/modern-villa" className="hover:text-stone-100 transition-colors">
                  Villa Solstice (Algarve)
                </Link>
              </li>
              <li>
                <Link href="/demos/architect/projects/minimalist-residence" className="hover:text-stone-100 transition-colors">
                  Casa Monólito (Sintra)
                </Link>
              </li>
              <li>
                <Link href="/demos/architect/projects/luxury-apartment" className="hover:text-stone-100 transition-colors">
                  The Chiado Penthouse (Lisbon)
                </Link>
              </li>
              <li>
                <Link href="/demos/architect/projects/coastal-house" className="hover:text-stone-100 transition-colors">
                  Cliff Horizon House (Cascais)
                </Link>
              </li>
              <li>
                <Link href="/demos/architect/projects" className="text-stone-200 hover:text-white font-semibold flex items-center gap-1 pt-1">
                  <span>{locale === 'pt' ? 'Ver Todos os 7 Projetos' : locale === 'ar' ? 'عرض كافة المشاريع' : 'View Full Portfolio (7 Works)'}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Studios & Inquiry */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-stone-500 block">
              {locale === 'pt' ? 'Estúdios & Contacto' : locale === 'ar' ? 'الاستوديو والتواصل' : 'Studios & Inquiries'}
            </span>
            <div className="space-y-2 text-xs text-stone-400">
              <p>Rua Rodrigo da Fonseca 104, 1250-193 Lisboa</p>
              <p>inquiries@atelierforma.example • +351 912 345 678</p>
            </div>
            <div className="pt-3">
              <Link
                href="/demos/architect/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-stone-700 hover:border-stone-400 text-stone-200 hover:text-white text-xs uppercase tracking-wider transition-colors"
              >
                <span>{locale === 'pt' ? 'Apresentar Novo Projeto' : locale === 'ar' ? 'تقديم فكرة مشروعك' : 'Submit Project Inquiry'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Disclaimer */}
        <div className="border-t border-stone-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} Atelier Forma Architects. {locale === 'pt' ? 'Demonstração de portfólio concebida por' : locale === 'ar' ? 'نموذج عرض معماري تم تطويره بواسطة' : 'Editorial portfolio demo developed by'}{' '}
            <Link href="/" className="text-stone-200 hover:underline font-semibold">
              NexaWeb Studio
            </Link>
            .
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>{locale === 'pt' ? 'Conceito de Demonstração Frontend' : locale === 'ar' ? 'موقع تجريبي للعرض فقط' : 'Frontend Demonstration Concept'}</span>
            <span>•</span>
            <Link href="/demos/architect/about" className="hover:text-stone-400">
              {locale === 'pt' ? 'Metodologia' : locale === 'ar' ? 'منهجية العمل' : 'Practice Methodology'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

