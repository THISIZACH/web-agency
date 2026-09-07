'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function ArchitectNav() {
  const { locale, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/demos/architect/projects', label: locale === 'pt' ? 'Portfólio' : locale === 'ar' ? 'المشاريع' : 'Works' },
    { href: '/demos/architect/about', label: locale === 'pt' ? 'Atelier & Filosofia' : locale === 'ar' ? 'عن الاستوديو' : 'Studio & Philosophy' },
    { href: '/demos/architect/services', label: locale === 'pt' ? 'Serviços' : locale === 'ar' ? 'خدماتنا' : 'Services' },
    { href: '/demos/architect/blog', label: locale === 'pt' ? 'Caderno de Projeto' : locale === 'ar' ? 'مدونة العمارة' : 'Journal' },
    { href: '/demos/architect/contact', label: locale === 'pt' ? 'Contacto' : locale === 'ar' ? 'تواصل معنا' : 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0c0c0c]/90 text-stone-100 backdrop-blur-md border-b border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Editorial Logo */}
          <Link href="/demos/architect" prefetch={true} className="flex flex-col group">
            <span className="font-serif text-xl sm:text-2xl tracking-widest uppercase font-light text-stone-100 group-hover:text-stone-300 transition-colors">
              Atelier Forma
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-[0.3em] text-stone-400">
              {locale === 'pt' ? 'Arquitetura & Urbanismo' : locale === 'ar' ? 'عمارة وتصميم معاصر' : 'Architects & Associates'}
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-medium text-stone-400">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className="hover:text-stone-100 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-stone-300 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action CTA: Start Your Project */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/demos/architect/contact"
              prefetch={true}
              className="px-6 py-2.5 rounded-full bg-stone-100 text-stone-950 hover:bg-stone-200 text-xs font-semibold uppercase tracking-wider transition-all hover:scale-105"
            >
              <span>{locale === 'pt' ? 'Iniciar Projeto' : locale === 'ar' ? 'بدء مشروعك' : 'Start Your Project'}</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c0c] border-b border-stone-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-xs uppercase tracking-[0.2em] font-medium text-stone-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-white border-b border-stone-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2">
            <Link
              href="/demos/architect/contact"
              prefetch={true}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 text-center rounded-full bg-stone-100 text-stone-950 font-bold text-xs uppercase tracking-wider"
            >
              {locale === 'pt' ? 'Iniciar Projeto' : locale === 'ar' ? 'بدء مشروعك' : 'Start Your Project'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

