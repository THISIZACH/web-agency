'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { CONTACT_CONFIG, getWhatsAppUrl } from '@/config/contact';
import { SITE_CONFIG } from '@/config/site';
import { demoUrls } from '@/config/demos';
import { Sparkles, MessageCircle, Mail, Phone, Clock, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const pathname = usePathname();
  const { t, locale, isRTL } = useLanguage();

  if (pathname?.startsWith('/demos')) {
    return null;
  }

  const currentYear = new Date().getFullYear();
  const whatsappUrl = getWhatsAppUrl(locale, 'general');

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

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8">
          {/* Column 1: Brand & Tagline */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white leading-none flex items-center">
                  NEXA<span className="text-brand-500">WEB</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-bold mt-1">
                  Studio
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors text-xs font-semibold max-w-full truncate"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span className="truncate">WhatsApp: {CONTACT_CONFIG.whatsappDisplay}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t.footer.navigationTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services & Demos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={demoUrls.restaurant}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-400 transition-colors"
                >
                  {locale === 'pt' ? 'Modelo de Restaurante' : locale === 'ar' ? 'نموذج المطاعم' : 'Restaurant Concept'}
                </a>
              </li>
              <li>
                <a
                  href={demoUrls.dentist}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-400 transition-colors"
                >
                  {locale === 'pt' ? 'NovaSmile Dental Clinic' : locale === 'ar' ? 'عيادة الأسنان NovaSmile' : 'NovaSmile Dental Clinic'}
                </a>
              </li>
              <li>
                <a
                  href={demoUrls.architect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-400 transition-colors"
                >
                  {locale === 'pt' ? 'Atelier Forma Arquitetura' : locale === 'ar' ? 'استوديو العمارة Atelier Forma' : 'Atelier Forma Architects'}
                </a>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-400 transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-brand-400 transition-colors">
                  {t.nav.pricing}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact & Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {CONTACT_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <a href={`tel:${CONTACT_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {CONTACT_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {CONTACT_CONFIG.officeHours[locale]}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

