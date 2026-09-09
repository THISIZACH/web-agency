import { Locale, getPricing } from './pricing';

export interface ContactConfig {
  agencyName: string;
  whatsappNumber: string; // Raw digits for wa.me URL
  whatsappDisplay: string; // Formatted for human reading
  email: string;
  phone: string;
  officeHours: {
    en: string;
    pt: string;
    ar: string;
  };
}

export const CONTACT_CONFIG: ContactConfig = {
  agencyName: 'NexaWeb Studio',
  whatsappNumber: '351932020456', // Single source of truth for WhatsApp
  whatsappDisplay: '+351 932 020 456',
  email: 'contact.nexawebstudio.uk@gmail.com',
  phone: '+351 932 020 456',
  officeHours: {
    en: 'Mon - Fri: 9:00 AM - 6:00 PM (GMT)',
    pt: 'Seg - Sex: 9:00 - 18:00 (GMT)',
    ar: 'الإثنين - الجمعة: 9:00 ص - 6:00 م (توقيت جرينتش)',
  },
};

export type WhatsAppIntent =
  | 'hero'
  | 'pricing'
  | 'general'
  | 'maintenance'
  | 'restaurant'
  | 'dentist'
  | 'architect'
  | 'barbershop'
  | 'ecommerce'
  | 'lawyer'
  | 'accountant';

export function getWhatsAppPrefillMessage(locale: Locale, intent: WhatsAppIntent = 'general'): string {
  const price = getPricing(locale).basePriceFormatted;

  if (locale === 'pt') {
    switch (intent) {
      case 'restaurant':
        return `Olá NexaWeb Studio! Estou interessado no modelo de demonstração Savor Bistro para o meu negócio (${price}).`;
      case 'dentist':
        return `Olá NexaWeb Studio! Estou interessado no modelo de demonstração NovaSmile Dental Clinic (${price}).`;
      case 'architect':
        return `Olá NexaWeb Studio! Estou interessado no modelo de demonstração Atelier Forma Architects (${price}).`;
      case 'barbershop':
        return `Olá NexaWeb Studio! Estou interessado no modelo North & Blade para barbearias (${price}).`;
      case 'ecommerce':
        return `Olá NexaWeb Studio! Estou interessado na loja online de luxo VELORA E-Commerce (${price}).`;
      case 'lawyer':
        return `Olá NexaWeb Studio! Estou interessado no modelo Meridian Legal para sociedade de advogados (${price}).`;
      case 'accountant':
        return `Olá NexaWeb Studio! Gostaria de saber mais sobre modelos corporativos e consultoria (${price}).`;
      case 'maintenance':
        return `Olá NexaWeb Studio! Gostaria de saber mais sobre os serviços de atualização e manutenção para websites.`;
      case 'pricing':
        return `Olá NexaWeb Studio! Estou interessado no pacote de website profissional a partir de ${price}. Como podemos avançar?`;
      case 'hero':
      case 'general':
      default:
        return `Olá NexaWeb Studio! Estou interessado em criar um website moderno e profissional para a minha empresa a partir de ${price}.`;
    }
  }

  if (locale === 'ar') {
    switch (intent) {
      case 'restaurant':
        return `مرحباً NexaWeb Studio! أنا مهتم بنموذج Savor Bistro وأرغب في موقع مشابه لنشاطي التجاري (بدءاً من ${price}).`;
      case 'dentist':
        return `مرحباً NexaWeb Studio! أنا مهتم بنموذج NovaSmile Dental Clinic لعيادة أسنان (بدءاً من ${price}).`;
      case 'architect':
        return `مرحباً NexaWeb Studio! أعجبني تصميم Atelier Forma Architects وأود موقعاً معمارياً راقياً (بدءاً من ${price}).`;
      case 'barbershop':
        return `مرحباً NexaWeb Studio! أنا مهتم بنموذج صالون الحلاقة الراقي North & Blade (بدءاً من ${price}).`;
      case 'ecommerce':
        return `مرحباً NexaWeb Studio! أنا مهتم بنموذج متجر الأزياء الفاخر VELORA E-Commerce (بدءاً من ${price}).`;
      case 'lawyer':
        return `مرحباً NexaWeb Studio! أنا مهتم بنموذج Meridian Legal لمكتب المحاماة والاستشارات القانونية (بدءاً من ${price}).`;
      case 'accountant':
      case 'maintenance':
        return `مرحباً NexaWeb Studio! أود الاستفسار عن خدمات تصميم وتطوير المواقع الفاخرة.`;
      case 'pricing':
        return `مرحباً NexaWeb Studio! أنا مهتم بباقة الموقع الاحترافي بدءاً من ${price}. أود معرفة التفاصيل.`;
      case 'hero':
      case 'general':
      default:
        return `مرحباً NexaWeb Studio! أنا مهتم بإنشاء موقع إلكتروني احترافي لنشاطي التجاري بدءاً من ${price}.`;
    }
  }

  // Default English
  switch (intent) {
    case 'restaurant':
      return `Hi NexaWeb Studio! I'm interested in the Savor Bistro website demo (starting at ${price}).`;
    case 'dentist':
      return `Hi NexaWeb Studio! I'm interested in the NovaSmile Dental Clinic website demo (starting at ${price}).`;
    case 'architect':
      return `Hi NexaWeb Studio! I'm interested in the Atelier Forma Architects website demo (starting at ${price}).`;
    case 'barbershop':
      return `Hi NexaWeb Studio! I'm interested in the North & Blade barbershop demo (starting at ${price}).`;
    case 'ecommerce':
      return `Hi NexaWeb Studio! I'm interested in the VELORA luxury e-commerce demo (starting at ${price}).`;
    case 'lawyer':
      return `Hi NexaWeb Studio! I'm interested in the Meridian Legal law firm demo (starting at ${price}).`;
    case 'accountant':
    case 'maintenance':
      return `Hi NexaWeb Studio! I'd like to ask about your website packages and maintenance plans.`;
    case 'pricing':
      return `Hi NexaWeb Studio! I'd like to get started with your ${price} professional website package.`;
    case 'hero':
    case 'general':
    default:
      return `Hi NexaWeb Studio! I'm interested in getting a modern website for my business (starting at ${price}).`;
  }
}

export function getWhatsAppUrl(locale: Locale, intent: WhatsAppIntent = 'general'): string {
  const message = getWhatsAppPrefillMessage(locale, intent);
  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
