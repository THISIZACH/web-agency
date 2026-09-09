import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import './globals.css';
import { AppProviders } from '@/context/AppProviders';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/config/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NexaWeb Studio | Modern Websites Starting at €299',
  description:
    'Modern Websites for Businesses That Want to Look Professional Online. Fast, mobile-responsive, and SEO-ready websites starting at €299 with 100% client ownership.',
  metadataBase: new URL(SITE_CONFIG.url),
  icons: {
    icon: '/logo-icon.svg',
    shortcut: '/logo-icon.svg',
    apple: '/logo-icon.svg',
  },
  openGraph: {
    title: 'NexaWeb Studio — Modern Websites for Businesses',
    description:
      'High-converting bespoke websites for restaurants, salons, consultancies, and local businesses. Launch in days with full ownership starting at €299.',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/agency/og-preview.jpg`,
        width: 1200,
        height: 630,
        alt: 'NexaWeb Studio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexaWeb Studio | Modern Websites Starting at €299',
    description:
      'High-converting bespoke websites for businesses. Launch in days with full ownership starting at €299.',
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      en: `${SITE_CONFIG.url}?lang=en`,
      'pt-PT': `${SITE_CONFIG.url}?lang=pt`,
      ar: `${SITE_CONFIG.url}?lang=ar`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-icon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        />
        {/* Anti-flash inline script for Theme and Locale */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('velo_agency_theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                  document.documentElement.classList.remove('dark');
                }

                const locale = localStorage.getItem('velo_agency_locale');
                if (locale === 'ar') {
                  document.documentElement.lang = 'ar';
                  document.documentElement.dir = 'rtl';
                  document.documentElement.classList.add('rtl');
                } else if (locale === 'pt') {
                  document.documentElement.lang = 'pt-PT';
                  document.documentElement.dir = 'ltr';
                } else {
                  document.documentElement.lang = 'en';
                  document.documentElement.dir = 'ltr';
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${cairo.variable} font-sans antialiased bg-light-bg dark:bg-dark-bg text-slate-900 dark:text-slate-100 min-h-screen flex flex-col selection:bg-brand-500 selection:text-white transition-colors duration-200`}
      >
        <AppProviders>
          <JsonLd />
          <Navbar />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
          <FloatingWhatsApp />
          <ScrollToTop />
        </AppProviders>
      </body>
    </html>
  );
}

