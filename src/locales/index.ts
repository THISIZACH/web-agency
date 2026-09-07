import { Locale } from '@/config/pricing';
import { TranslationSchema } from './types';
import { en } from './en';
import { pt } from './pt';
import { ar } from './ar';

export const dictionaries: Record<Locale, TranslationSchema> = {
  en,
  pt,
  ar,
};

export function getDictionary(locale: Locale): TranslationSchema {
  return dictionaries[locale] || dictionaries.en;
}

export interface LocaleMeta {
  code: Locale;
  label: string;
  nativeLabel: string;
  dir: 'ltr' | 'rtl';
  flag: string;
  langTag: string; // HTML lang attribute e.g. en, pt-PT, ar
}

export const LOCALES_META: Record<Locale, LocaleMeta> = {
  en: {
    code: 'en',
    label: 'English',
    nativeLabel: 'English',
    dir: 'ltr',
    flag: '🇬🇧',
    langTag: 'en',
  },
  pt: {
    code: 'pt',
    label: 'Portuguese',
    nativeLabel: 'Português',
    dir: 'ltr',
    flag: '🇵🇹',
    langTag: 'pt-PT',
  },
  ar: {
    code: 'ar',
    label: 'Arabic',
    nativeLabel: 'العربية',
    dir: 'rtl',
    flag: '🇦🇪',
    langTag: 'ar',
  },
};

