'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { getWhatsAppUrl, CONTACT_CONFIG } from '@/config/contact';
import { MessageCircle, X } from 'lucide-react';

export function FloatingWhatsApp() {
  const pathname = usePathname();
  const { locale, t, isRTL } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (pathname?.startsWith('/demos') || !visible || dismissed) return null;

  const whatsappUrl = getWhatsAppUrl(locale, 'general');

  return (
    <div
      className={`fixed bottom-4 sm:bottom-6 z-50 flex items-center gap-3 ${
        isRTL ? 'left-4 sm:left-6 flex-row-reverse' : 'right-4 sm:right-6'
      }`}
    >
      {/* Tooltip bubble */}
      <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg text-xs font-medium text-slate-800 dark:text-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <span>{t.floatingWhatsApp.tooltip}</span>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Close notification"
          className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp Chat"
        className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="absolute -top-1 rtl:-left-1 rtl:right-auto -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-emerald-300 rounded-full animate-ping opacity-75" />
        <span className="absolute -top-1 rtl:-left-1 rtl:right-auto -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-emerald-300 rounded-full border-2 border-white dark:border-slate-900" />
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </div>
  );
}

