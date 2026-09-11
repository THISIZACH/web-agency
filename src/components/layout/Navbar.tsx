'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { getWhatsAppUrl } from '@/config/contact';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/Button';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const { t, locale, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrolledRef = useRef(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (isScrolledRef.current !== scrolled) {
        isScrolledRef.current = scrolled;
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  if (pathname?.startsWith('/demos')) {
    return null;
  }

  const navLinks = [
    { label: t.nav.home, href: '/#' },
    { label: t.nav.services, href: '/#services' },
    { label: t.nav.demos, href: '/#demos' },
    { label: t.nav.pricing, href: '/#pricing' },
    { label: t.nav.process, href: '/#process' },
    { label: t.nav.faq, href: '/#faq' },
    { label: t.nav.blog, href: '/blog' },
    { label: t.nav.contact, href: '/#contact' },
  ];

  const whatsappCtaUrl = getWhatsAppUrl(locale, 'hero');

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo */}
            <Link
              href="/"
              prefetch={true}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg shrink-0"
            >
              <Image
                src="/logo-icon.svg"
                alt="NexaWeb Studio Logo"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain group-hover:scale-105 transition-transform duration-200 shrink-0"
                priority
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none flex items-center">
                  NEXA<span className="text-brand-500">WEB</span>
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold mt-0.5 sm:mt-1">
                  Studio
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Controls & CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher />
              <ThemeToggle />
              <Button
                href={whatsappCtaUrl}
                isExternal
                size="sm"
                variant="primary"
                icon={<ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />}
                iconPosition="right"
              >
                {t.nav.cta}
              </Button>
            </div>

            {/* Mobile Header: Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-expanded={false}
                aria-label="Open navigation menu"
                className="p-2.5 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Full-Screen Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-white dark:bg-slate-950">
          {/* Top Bar with Logo and Close Button */}
          <div className="border-b border-slate-200/80 dark:border-slate-800/80 shrink-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 sm:h-20">
                <Link
                  href="/"
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 group focus:outline-none"
                >
                  <Image
                    src="/logo-icon.svg"
                    alt="NexaWeb Studio Logo"
                    width={32}
                    height={32}
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0"
                    priority
                  />
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none flex items-center">
                      NEXA<span className="text-brand-500">WEB</span>
                    </span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold mt-0.5 sm:mt-1">
                      Studio
                    </span>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-expanded={true}
                  aria-label="Close navigation menu"
                  className="p-2.5 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col justify-between">
            {/* Preferences (Theme & Language Switcher) */}
            <div className="flex items-center justify-between pb-4 mb-3 border-b border-slate-100 dark:border-slate-800/80 shrink-0">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {locale === 'pt' ? 'Definições' : locale === 'ar' ? 'الإعدادات' : locale === 'fr' ? 'Préférences' : 'Preferences'}
              </span>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
            </div>

            {/* Vertical Navigation Links */}
            <nav className="flex flex-col gap-1 my-auto py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-brand-500/10 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Footer Full-Width CTA */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3 shrink-0">
              <Button
                href={whatsappCtaUrl}
                isExternal
                size="lg"
                variant="primary"
                className="w-full text-base py-3.5 shadow-lg shadow-brand-500/25"
                icon={<ArrowUpRight className={`w-5 h-5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />}
                iconPosition="right"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.cta}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

