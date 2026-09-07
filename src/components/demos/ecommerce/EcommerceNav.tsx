'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { CartDrawer } from './CartDrawer';
import { ShoppingBag, Search, Menu, X, ArrowRight } from 'lucide-react';

export function EcommerceNav() {
  const { locale, isRTL } = useLanguage();
  const pathname = usePathname();
  const { totalCount, setIsDrawerOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: '/demos/ecommerce', label: locale === 'pt' ? 'Início' : locale === 'ar' ? 'الرئيسية' : 'Home' },
    { href: '/demos/ecommerce/shop', label: locale === 'pt' ? 'Coleção' : locale === 'ar' ? 'المتجر' : 'Shop All' },
    { href: '/demos/ecommerce/collections', label: locale === 'pt' ? 'Lookbooks' : locale === 'ar' ? 'المجموعات' : 'Collections' },
    { href: '/demos/ecommerce/about', label: locale === 'pt' ? 'O Atelier' : locale === 'ar' ? 'عن الدار' : 'The Atelier' },
    { href: '/demos/ecommerce/journal', label: locale === 'pt' ? 'Caderno' : locale === 'ar' ? 'المجلة' : 'Journal' },
    { href: '/demos/ecommerce/contact', label: locale === 'pt' ? 'Contacto' : locale === 'ar' ? 'اتصل بنا' : 'Contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 text-neutral-900 transition-all">
        {/* Top announcement bar */}
        <div className="bg-neutral-900 text-white text-[11px] py-1.5 px-4 text-center tracking-widest uppercase font-mono">
          <span>
            {locale === 'pt'
              ? 'Envio Expresso Gratuito para todo o mundo • Devoluções até 30 dias'
              : locale === 'ar'
              ? 'شحن سريع مجاني لجميع أنحاء العالم • إرجاع مجاني خلال 30 يوماً'
              : 'Complimentary Worldwide Express Delivery • 30-Day Effortless Returns'}
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left Desktop Links */}
            <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-[0.18em] font-semibold text-neutral-600">
              {links.slice(0, 3).map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    className={`hover:text-neutral-950 transition-colors py-1 relative ${
                      isActive ? 'text-neutral-950 font-bold border-b-2 border-neutral-950' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Center Brand Logo */}
            <Link
              href="/demos/ecommerce"
              prefetch={true}
              className="flex flex-col items-center justify-center group focus:outline-none"
            >
              <span className="font-serif tracking-[0.35em] text-2xl sm:text-3xl font-black text-neutral-950 uppercase leading-none">
                VELORA
              </span>
              <span className="text-[9px] tracking-[0.45em] text-neutral-400 uppercase font-mono mt-1">
                Atelier Contemporary
              </span>
            </Link>

            {/* Right Desktop Links + Bag */}
            <div className="flex items-center gap-5">
              <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-[0.18em] font-semibold text-neutral-600">
                {links.slice(3).map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      prefetch={true}
                      className={`hover:text-neutral-950 transition-colors py-1 relative ${
                        isActive ? 'text-neutral-950 font-bold border-b-2 border-neutral-950' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Shopping Bag Trigger */}
              <button
                type="button"
                onClick={() => setIsDrawerOpen(true)}
                className="relative p-2 rounded-full hover:bg-neutral-100 text-neutral-800 hover:text-black transition-colors cursor-pointer flex items-center gap-1.5"
                aria-label="Open shopping bag"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="font-mono text-xs font-bold text-neutral-900">
                  {totalCount}
                </span>
              </button>

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded text-neutral-700 hover:text-black hover:bg-neutral-100"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white px-6 py-8 space-y-4">
            <div className="space-y-3">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 text-sm uppercase tracking-widest ${
                      isActive ? 'font-black text-neutral-950 border-l-2 border-neutral-950 pl-3' : 'text-neutral-600 hover:text-neutral-950'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsDrawerOpen(true);
                }}
                className="w-full py-3 rounded-full bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{locale === 'pt' ? `Ver Saco (${totalCount})` : locale === 'ar' ? `سلة التسوق (${totalCount})` : `View Bag (${totalCount})`}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Slide-over cart drawer */}
      <CartDrawer />
    </>
  );
}

