import { SITE_CONFIG } from './site';
import { Locale } from './pricing';
import { CONTACT_CONFIG } from './contact';

export interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  locale?: Locale;
}

export function generateMetadataConfig({
  title,
  description,
  canonical = SITE_CONFIG.url,
  ogImage = `${SITE_CONFIG.url}/og-image.jpg`,
  locale = 'en',
}: SeoProps = {}) {
  const defaultTitle = SITE_CONFIG.name;
  const defaultDesc = SITE_CONFIG.description[locale] || SITE_CONFIG.description.en;

  const siteTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const siteDesc = description || defaultDesc;

  return {
    title: siteTitle,
    description: siteDesc,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical,
      languages: {
        en: `${SITE_CONFIG.url}?lang=en`,
        'pt-PT': `${SITE_CONFIG.url}?lang=pt`,
        ar: `${SITE_CONFIG.url}?lang=ar`,
      },
    },
    openGraph: {
      title: siteTitle,
      description: siteDesc,
      url: canonical,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
      locale: locale === 'pt' ? 'pt_PT' : locale === 'ar' ? 'ar_AR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDesc,
      images: [ogImage],
      creator: '@nexawebstudio',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function getOrganizationSchema(locale: Locale = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description[locale] || SITE_CONFIG.description.en,
    telephone: CONTACT_CONFIG.phone,
    email: CONTACT_CONFIG.email,
    priceRange: locale === 'ar' ? '$299 - $999' : '€299 - €999',
    currenciesAccepted: locale === 'ar' ? 'USD' : 'EUR',
    paymentAccepted: 'Credit Card, Bank Transfer, PayPal',
    openingHours: 'Mo-Fr 09:00-18:00',
    areaServed: ['US', 'PT', 'GB', 'AE', 'SA', 'Worldwide'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Design & Digital Growth Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Professional Web Design Package',
            description: 'Custom modern website design, mobile responsiveness, SEO foundation, domain setup, and 1st month support.',
          },
          price: '299',
          priceCurrency: locale === 'ar' ? 'USD' : 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Maintenance & Updates',
            description: 'Post-launch on-demand updates starting from €30 / $30 with no monthly retainers.',
          },
          price: '30',
          priceCurrency: locale === 'ar' ? 'USD' : 'EUR',
        },
      ],
    },
  };
}

export function getFaqSchema(faqItems: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

