'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Scale, Menu, X, ArrowRight, Shield } from 'lucide-react';

export function LawyerNav() {
  const { locale, isRTL } = useLanguage();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/demos/lawyer', label: locale === 'pt' ? 'Início' : locale === 'ar' ? 'الرئيسية' : 'Home' },
    { href: '/demos/lawyer/practice-areas', label: locale === 'pt' ? 'Áreas de Prática' : locale === 'ar' ? 'مجالات الممارسة' : 'Practice Areas' },
    { href: '/demos/lawyer/attorneys', label: locale === 'pt' ? 'Sócios & Advogados' : locale === 'ar' ? 'المحامون والشركاء' : 'Attorneys' },
    { href: '/demos/lawyer/about', label: locale === 'pt' ? 'A Sociedade' : locale === 'ar' ? 'عن الشركة' : 'The Firm' },
    { href: '/demos/lawyer/insights', label: locale === 'pt' ? 'Artigos & Análises' : locale === 'ar' ? 'رؤى قانونية' : 'Insights' },
    { href: '/demos/lawyer/contact', label: locale === 'pt' ? 'Contacto' : locale === 'ar' ? 'اتصل بنا' : 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#0a192f]/95 backdrop-blur-md border-b border-[#c5a880]/20 text-[#fcfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/demos/lawyer" prefetch={true} className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded bg-[#0f2442] border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880] shadow-md group-hover:border-[#c5a880] transition-all">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.25em] text-lg font-bold text-white uppercase group-hover:text-[#c5a880] transition-colors leading-none">
                MERIDIAN LEGAL
              </span>
              <span className="text-[9px] tracking-[0.35em] text-[#c5a880]/80 uppercase font-mono mt-1">
                Partners & Counsel
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  className={`px-3.5 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'text-[#c5a880] bg-[#c5a880]/10 border border-[#c5a880]/30 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-[#132845]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/demos/lawyer/consultation"
              prefetch={true}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#c5a880] hover:bg-[#d8be9a] text-[#0a192f] font-extrabold text-xs uppercase tracking-widest transition-all shadow-md shadow-[#c5a880]/20 hover:scale-[1.02]"
            >
              <span>{locale === 'pt' ? 'Solicitar Consulta' : locale === 'ar' ? 'طلب استشارة قانونية' : 'Request Consultation'}</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded text-slate-300 hover:text-white hover:bg-[#132845]"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#c5a880]/20 bg-[#0a192f] px-6 py-6 space-y-3">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 rounded text-xs uppercase tracking-wider font-semibold ${
                  isActive
                    ? 'text-[#c5a880] bg-[#c5a880]/10 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-[#132845]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/demos/lawyer/consultation"
              prefetch={true}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded bg-[#c5a880] text-[#0a192f] font-bold text-xs uppercase tracking-widest"
            >
              <span>{locale === 'pt' ? 'Solicitar Consulta Formal' : locale === 'ar' ? 'طلب استشارة رسمية' : 'Request Formal Consultation'}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

