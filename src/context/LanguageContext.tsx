'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { Locale, PricingConfig, getPricing } from '@/config/pricing';
import { TranslationSchema } from '@/locales/types';
import { getDictionary, LOCALES_META } from '@/locales';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationSchema;
  pricing: PricingConfig;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'velo_agency_locale';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved && (saved === 'en' || saved === 'pt' || saved === 'fr' || saved === 'ar')) {
        setLocaleState(saved);
      }
    } catch {
      // ignore storage errors
    }
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {
      // ignore storage errors
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const meta = LOCALES_META[locale];
      document.documentElement.lang = meta.langTag;
      document.documentElement.dir = meta.dir;
      if (meta.dir === 'rtl') {
        document.documentElement.classList.add('rtl');
      } else {
        document.documentElement.classList.remove('rtl');
      }
    }
  }, [locale]);

  const t = useMemo(() => getDictionary(locale), [locale]);
  const pricing = useMemo(() => getPricing(locale), [locale]);
  const dir = LOCALES_META[locale].dir;
  const isRTL = dir === 'rtl';

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t,
        pricing,
        dir,
        isRTL,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

