'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Shield, MapPin, Phone, Mail, Clock, Lock, ArrowUpRight } from 'lucide-react';

export function LawyerFooter() {
  const { locale, isRTL } = useLanguage();

  return (
    <footer className="bg-[#060f1d] border-t border-[#c5a880]/20 text-slate-400 py-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Firm Ethos */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#0f2442] border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880]">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-serif tracking-[0.2em] text-base font-bold text-white uppercase">
                MERIDIAN LEGAL
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed font-light">
              {locale === 'pt'
                ? 'Sociedade de advogados independente focada em direito societário, contencioso comercial de elevado valor e gestão patrimonial discreta.'
                : locale === 'ar'
                ? 'مؤسسة قانونية مستقلة متخصصة في قانون الشركات، النزاعات التجارية الكبرى وإدارة ثروات العائلات بسرية تامة.'
                : 'Commercial corporate counsel and dispute advocates providing strategic clarity to international enterprises and private wealth offices.'}
            </p>
            <div className="pt-2 flex items-center gap-2 text-[#c5a880] text-[11px] font-mono">
              <Lock className="w-3.5 h-3.5" />
              <span>Privileged & Confidential Counsel</span>
            </div>
          </div>

          {/* Col 2: Practice Areas */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs font-mono">
              {locale === 'pt' ? 'Áreas de Prática' : locale === 'ar' ? 'مجالات الممارسة' : 'Practice Areas'}
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/demos/lawyer/practice-areas/corporate-law" className="hover:text-[#c5a880] transition-colors">
                  {locale === 'pt' ? 'Direito Societário & M&A' : locale === 'ar' ? 'قانون الشركات والاندماج' : 'Corporate Law & M&A'}
                </Link>
              </li>
              <li>
                <Link href="/demos/lawyer/practice-areas/commercial-litigation" className="hover:text-[#c5a880] transition-colors">
                  {locale === 'pt' ? 'Contencioso Comercial & Arbitragem' : locale === 'ar' ? 'النزاعات التجارية والتحكيم' : 'Commercial Litigation'}
                </Link>
              </li>
              <li>
                <Link href="/demos/lawyer/practice-areas/real-estate" className="hover:text-[#c5a880] transition-colors">
                  {locale === 'pt' ? 'Direito Imobiliário' : locale === 'ar' ? 'القانون العقاري' : 'Real Estate & Infrastructure'}
                </Link>
              </li>
              <li>
                <Link href="/demos/lawyer/practice-areas/intellectual-property" className="hover:text-[#c5a880] transition-colors">
                  {locale === 'pt' ? 'Propriedade Intelectual & IA' : locale === 'ar' ? 'الملكية الفكرية والتقنية' : 'Intellectual Property & Tech'}
                </Link>
              </li>
              <li>
                <Link href="/demos/lawyer/practice-areas" className="hover:text-[#c5a880] text-[#c5a880] font-semibold transition-colors flex items-center gap-1">
                  <span>{locale === 'pt' ? 'Ver Todas as 8 Práticas' : locale === 'ar' ? 'عرض جميع التخصصات الثمانية' : 'View All 8 Practice Areas'}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key International Offices */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs font-mono">
              {locale === 'pt' ? 'Escritórios' : locale === 'ar' ? 'المكاتب الدولية' : 'Offices'}
            </h4>
            <div className="space-y-3 text-slate-300">
              <div>
                <span className="text-white font-semibold block">London City</span>
                <p className="text-[11px] text-slate-400">100 Bishopsgate, Level 32, EC2N 4AG</p>
                <p className="text-[11px] font-mono text-[#c5a880]">+44 20 7946 0700</p>
              </div>
              <div>
                <span className="text-white font-semibold block">Dubai (DIFC)</span>
                <p className="text-[11px] text-slate-400">Gate Precinct 4, Level 6, DIFC</p>
                <p className="text-[11px] font-mono text-[#c5a880]">+971 4 362 7000</p>
              </div>
            </div>
          </div>

          {/* Col 4: Intake Consultation */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs font-mono">
              {locale === 'pt' ? 'Consulta Formal' : locale === 'ar' ? 'استشارة قانونية' : 'Consultation'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              {locale === 'pt'
                ? 'Agende um briefing preliminar confidencial com os sócios da sociedade.'
                : locale === 'ar'
                ? 'حدد موعداً لجلسة استكشافية سرية ومباشرة مع شركاء الشركة.'
                : 'Schedule a confidential preliminary briefing with our partners.'}
            </p>
            <div className="pt-2">
              <Link
                href="/demos/lawyer/consultation"
                className="inline-block w-full py-2.5 rounded bg-[#c5a880] hover:bg-[#d8be9a] text-[#0a192f] font-bold text-center text-xs uppercase tracking-wider transition-all"
              >
                {locale === 'pt' ? 'Marcar Consulta' : locale === 'ar' ? 'طلب موعد استشارة' : 'Request Consultation'}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar with demo disclaimer */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 Meridian Legal Partners LLP. Fictional demo law firm showcase.</p>
          <div className="flex items-center gap-2">
            <span>Corporate law practice demo engineered by</span>
            <Link href="/" className="text-white hover:text-[#c5a880] font-semibold transition-colors">
              NexaWeb Studio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

