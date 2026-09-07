'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  Sparkles,
  Phone,
  Clock,
  Calendar,
  Menu,
  X,
  ShieldCheck,
  HeartPulse,
  ArrowUpRight,
} from 'lucide-react';

interface DentistNavProps {
  onOpenBooking?: () => void;
}

export function DentistNav({ onOpenBooking }: DentistNavProps) {
  const { locale, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/demos/dentist', label: locale === 'pt' ? 'Início' : locale === 'ar' ? 'الرئيسية' : 'Home' },
    { href: '/demos/dentist/services', label: locale === 'pt' ? 'Tratamentos' : locale === 'ar' ? 'العلاجات والخدمات' : 'Treatments' },
    { href: '/demos/dentist/about', label: locale === 'pt' ? 'A Clínica' : locale === 'ar' ? 'عن العيادة' : 'About Clinic' },
    { href: '/demos/dentist/blog', label: locale === 'pt' ? 'Guia de Saúde' : locale === 'ar' ? 'دليل صحة الفم' : 'Patient Guides' },
    { href: '/demos/dentist/contact', label: locale === 'pt' ? 'Contactos' : locale === 'ar' ? 'اتصل بنا' : 'Contact & Hours' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-cyan-100 dark:border-slate-800 transition-colors">
      {/* Top Clinical Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>{locale === 'pt' ? 'Seg - Sex: 8:30 - 19:30 | Sáb: 9:00 - 14:00' : locale === 'ar' ? 'الإثنين - الجمعة: 8:30 ص - 7:30 م | السبت: 9:00 ص - 2:00 م' : 'Mon - Fri: 8:30 AM - 7:30 PM | Sat: 9:00 AM - 2:00 PM'}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{locale === 'pt' ? 'Higiene Hospitalar ISO 13485' : locale === 'ar' ? 'معايير تعقيم طبية معتمدة' : 'ISO 13485 Sterilization Standards'}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+351912345678"
              className="flex items-center gap-1.5 font-semibold text-cyan-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>+351 912 345 678</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-amber-300 font-medium">
              {locale === 'pt' ? 'Urgências Dentárias Disponíveis' : locale === 'ar' ? 'طوارئ الأسنان متوفرة' : 'Emergency Care Available'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <Link href="/demos/dentist" prefetch={true} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-lg text-slate-900 dark:text-white leading-tight flex items-center gap-1">
                <span>NovaSmile</span>
                <span className="text-cyan-600 dark:text-cyan-400 text-xs px-1.5 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/60 font-semibold uppercase tracking-wider">Clinic</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                {locale === 'pt' ? 'Medicina Dentária Avançada' : locale === 'ar' ? 'طب وجراحة الأسنان الحديث' : 'Advanced Dental Medicine'}
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action: Book Appointment CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenBooking ? (
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-2.5 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-cyan-600/20 hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{locale === 'pt' ? 'Marcar Consulta' : locale === 'ar' ? 'حجز موعد كشف' : 'Book Appointment'}</span>
              </button>
            ) : (
              <Link
                href="/demos/dentist/contact"
                prefetch={true}
                className="px-6 py-2.5 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-cyan-600/20 hover:scale-105 flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{locale === 'pt' ? 'Marcar Consulta' : locale === 'ar' ? 'حجز موعد كشف' : 'Book Appointment'}</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 hover:text-cyan-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <Link
              href="/demos/dentist/contact"
              prefetch={true}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-cyan-600 text-white text-center font-bold text-xs uppercase tracking-wider block shadow-md"
            >
              {locale === 'pt' ? 'Marcar Consulta Online' : locale === 'ar' ? 'حجز موعد كشف' : 'Book Appointment'}
            </Link>
            <a
              href="tel:+351912345678"
              className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-center font-semibold text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-600" />
              <span>+351 912 345 678</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

