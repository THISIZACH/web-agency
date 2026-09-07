export type Locale = 'en' | 'pt' | 'ar';

export interface PricingConfig {
  locale: Locale;
  currencySymbol: string;
  currencyCode: string;
  isSymbolPrefix: boolean; // true for €299 or $299, false for 299€
  basePriceValue: number;
  basePriceFormatted: string;
  updatePriceValue: number;
  updatePriceFormatted: string;
  maintenanceMonthlyValue: number;
  maintenanceMonthlyFormatted: string;
  maintenanceLabel: string;
  currencyNote: string;
}

export const PRICING_BY_LOCALE: Record<Locale, PricingConfig> = {
  en: {
    locale: 'en',
    currencySymbol: '€',
    currencyCode: 'EUR',
    isSymbolPrefix: true,
    basePriceValue: 299,
    basePriceFormatted: '€299',
    updatePriceValue: 30,
    updatePriceFormatted: '€30',
    maintenanceMonthlyValue: 49,
    maintenanceMonthlyFormatted: '€49/month',
    maintenanceLabel: 'per month',
    currencyNote: 'All prices in EUR (€). No hidden fees.',
  },
  pt: {
    locale: 'pt',
    currencySymbol: '€',
    currencyCode: 'EUR',
    isSymbolPrefix: false,
    basePriceValue: 299,
    basePriceFormatted: '299€',
    updatePriceValue: 30,
    updatePriceFormatted: '30€',
    maintenanceMonthlyValue: 49,
    maintenanceMonthlyFormatted: '49€/mês',
    maintenanceLabel: 'por mês',
    currencyNote: 'Todos os preços em EUR (€). Sem custos ocultos.',
  },
  ar: {
    locale: 'ar',
    currencySymbol: '$',
    currencyCode: 'USD',
    isSymbolPrefix: true,
    basePriceValue: 299,
    basePriceFormatted: '$299',
    updatePriceValue: 30,
    updatePriceFormatted: '$30',
    maintenanceMonthlyValue: 49,
    maintenanceMonthlyFormatted: '$49/شهر',
    maintenanceLabel: 'شهرياً',
    currencyNote: 'جميع الأسعار بالدولار الأمريكي ($). لا توجد رسوم خفية.',
  },
};

export function getPricing(locale: Locale): PricingConfig {
  return PRICING_BY_LOCALE[locale] || PRICING_BY_LOCALE.en;
}

