'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Scissors, Menu, X, Calendar, Sparkles } from 'lucide-react';

export function BarberNav() {
  const { locale, isRTL } = useLanguage();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/demos/barbershop', label: locale === 'pt' ? 'Início' : locale === 'ar' ? 'الرئيسية' : 'Home' },
    { href: '/demos/barbershop/services', label: locale === 'pt' ? 'Serviços' : locale === 'ar' ? 'الخدمات' : 'Services' },
    { href: '/demos/barbershop/barbers', label: locale === 'pt' ? 'Mestres Barbeiros' : locale === 'ar' ? 'الحلاقون' : 'Barbers' },
    { href: '/demos/barbershop/pricing', label: locale === 'pt' ? 'Preçário' : locale === 'ar' ? 'الأسعار' : 'Pricing' },
    { href: '/demos/barbershop/gallery', label: locale === 'pt' ? 'Galeria' : locale === 'ar' ? 'المعرض' : 'Gallery' },
    { href: '/demos/barbershop/about', label: locale === 'pt' ? 'O Estúdio' : locale === 'ar' ? 'عن الصالون' : 'About' },
    { href: '/demos/barbershop/contact', label: locale === 'pt' ? 'Contacto' : locale === 'ar' ? 'اتصل بنا' : 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#d4af37]/20 text-[#f5f0eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/demos/barbershop" prefetch={true} className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-sm bg-[#1a1a1a] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shadow-lg group-hover:border-[#d4af37] transition-all">
              <Scissors className="w-5 h-5 -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.2em] text-lg font-bold text-white uppercase group-hover:text-[#d4af37] transition-colors">
                NORTH & BLADE
              </span>
              <span className="text-[9px] tracking-[0.35em] text-[#a39b8e] uppercase font-mono">
                Gentleman Studio
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  className={`px-3 py-1.5 rounded text-xs tracking-wider uppercase font-semibold transition-all ${
                    isActive
                      ? 'text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/30'
                      : 'text-[#d1c7bd] hover:text-[#d4af37] hover:bg-[#1a1a1a]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/demos/barbershop/book"
              prefetch={true}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#d4af37] hover:bg-[#e5c158] text-[#0d0d0d] font-bold text-xs uppercase tracking-widest transition-all shadow-md shadow-[#d4af37]/20 hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{locale === 'pt' ? 'Marcar Cadeira' : locale === 'ar' ? 'حجز موعد' : 'Book Chair'}</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded text-[#d1c7bd] hover:text-[#d4af37] hover:bg-[#1a1a1a]"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#d4af37]/20 bg-[#0d0d0d] px-4 py-6 space-y-2">
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
                    ? 'text-[#d4af37] bg-[#d4af37]/10 font-bold'
                    : 'text-[#d1c7bd] hover:text-[#d4af37] hover:bg-[#1a1a1a]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3">
            <Link
              href="/demos/barbershop/book"
              prefetch={true}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded bg-[#d4af37] text-[#0d0d0d] font-bold text-xs uppercase tracking-widest"
            >
              <Calendar className="w-4 h-4" />
              <span>{locale === 'pt' ? 'Marcar Cadeira Agora' : locale === 'ar' ? 'حجز موعد فوري' : 'Book Chair Now'}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

