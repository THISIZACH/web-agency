'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { UtensilsCrossed, Menu, X, Calendar } from 'lucide-react';

export function RestaurantNav() {
  const { locale } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    {
      href: '/demos/restaurant',
      label: locale === 'pt' ? 'Início' : locale === 'ar' ? 'الرئيسية' : 'Home',
    },
    {
      href: '/demos/restaurant/menu',
      label: locale === 'pt' ? 'Ementa Completa' : locale === 'ar' ? 'قائمة الطعام' : 'Full Menu',
    },
    {
      href: '/demos/restaurant/reservations',
      label: locale === 'pt' ? 'Reservar Mesa' : locale === 'ar' ? 'حجز طاولة' : 'Reservations',
    },
    {
      href: '/demos/restaurant/about',
      label: locale === 'pt' ? 'A Nossa História' : locale === 'ar' ? 'قصتنا وفلسفتنا' : 'Our Story',
    },
    {
      href: '/demos/restaurant/contact',
      label: locale === 'pt' ? 'Horários & Localização' : locale === 'ar' ? 'الموقع والمواعيد' : 'Hours & Location',
    },
  ];

  return (
    <header className="sticky top-0 z-20 bg-stone-950/90 backdrop-blur-md border-b border-amber-500/20 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/demos/restaurant"
            prefetch={true}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-stone-950 font-bold shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-wider text-amber-300 font-bold leading-none">
                SAVOR
              </span>
              <span className="text-[10px] tracking-[0.25em] text-stone-400 uppercase font-light mt-1">
                Bistro & Lounge
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  className={`px-3.5 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10 font-semibold'
                      : 'text-stone-300 hover:text-amber-300 hover:bg-stone-900/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/demos/restaurant/reservations"
              prefetch={true}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-xs tracking-wide uppercase transition-all shadow-md shadow-amber-600/20 hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{locale === 'pt' ? 'Reservar Mesa' : locale === 'ar' ? 'احجز طاولة' : 'Book a Table'}</span>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-400 hover:text-amber-400 hover:bg-stone-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-amber-500/20 bg-stone-950 px-4 py-6 space-y-3">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'text-amber-400 bg-amber-500/10 font-bold'
                    : 'text-stone-300 hover:text-amber-300 hover:bg-stone-900'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/demos/restaurant/reservations"
              prefetch={true}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-bold text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>{locale === 'pt' ? 'Reservar Mesa' : locale === 'ar' ? 'احجز طاولة' : 'Book a Table'}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

