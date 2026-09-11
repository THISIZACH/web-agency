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
  metadataBase: new URL('https://nexawebstudio.uk'),
  title: 'NexaWeb Studio — Modern Websites for Businesses',
  description: 'High-converting custom web design and lead generation websites.',
  icons: {
    icon: '/logo-icon.png',
    shortcut: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
  openGraph: {
    title: 'NexaWeb Studio — Modern Websites for Businesses',
    description: 'High-converting custom web design and lead generation websites.',
    url: 'https://nexawebstudio.uk',
    siteName: 'NexaWeb Studio',
    images: [
      {
        url: '/og-image-wide.png',
        width: 1200,
        height: 630,
        alt: 'NexaWeb Studio',
      },
      {
        url: '/og-image.png',
        width: 512,
        height: 512,
        alt: 'NexaWeb Studio Icon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexaWeb Studio — Modern Websites for Businesses',
    description: 'High-converting custom web design and lead generation websites.',
    images: ['/og-image-wide.png'],
  },
  alternates: {
    canonical: 'https://nexawebstudio.uk',
    languages: {
      en: 'https://nexawebstudio.uk?lang=en',
      'pt-PT': 'https://nexawebstudio.uk?lang=pt',
      fr: 'https://nexawebstudio.uk?lang=fr',
      ar: 'https://nexawebstudio.uk?lang=ar',
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
        <link rel="apple-touch-icon" href="/logo-icon.png" />
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
                } else if (locale === 'fr') {
                  document.documentElement.lang = 'fr';
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

