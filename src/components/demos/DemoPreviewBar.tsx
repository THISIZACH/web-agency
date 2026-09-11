'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useDemoViewport, ViewportMode } from '@/context/DemoViewportContext';
import { getWhatsAppUrl, WhatsAppIntent } from '@/config/contact';
import { ArrowLeft, ArrowUpRight, MessageCircle, Monitor, Tablet, Smartphone } from 'lucide-react';

interface DemoPreviewBarProps {
  demoTitle: string;
  category: string;
  intent: WhatsAppIntent;
}

export function DemoPreviewBar({ demoTitle, category, intent }: DemoPreviewBarProps) {
  const { t, locale, pricing, isRTL } = useLanguage();
  const { viewport, setViewport } = useDemoViewport();
  const [isEmbedded, setIsEmbedded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setIsEmbedded(params.get('viewport_embed') === '1');
    }
  }, []);

  if (isEmbedded) {
    return null;
  }

  const whatsappUrl = getWhatsAppUrl(locale, intent);

  const viewports: { mode: ViewportMode; label: string; icon: React.ReactNode }[] = [
    {
      mode: 'desktop',
      label: locale === 'pt' ? 'Desktop' : locale === 'ar' ? 'حاسوب' : 'Desktop',
      icon: <Monitor className="w-3.5 h-3.5" />,
    },
    {
      mode: 'tablet',
      label: locale === 'pt' ? 'Tablet' : locale === 'ar' ? 'لوحي' : 'Tablet',
      icon: <Tablet className="w-3.5 h-3.5" />,
    },
    {
      mode: 'mobile',
      label: locale === 'pt' ? 'Telemóvel' : locale === 'ar' ? 'هاتف' : 'Mobile',
      icon: <Smartphone className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <aside
      aria-label="Demo interactive header bar"
      className="sticky top-0 z-50 bg-slate-950/95 text-white backdrop-blur-md border-b border-slate-800 py-2 px-2.5 sm:py-2.5 sm:px-6 shadow-xl max-w-full overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-1.5 sm:gap-3 text-xs">
        {/* Left: Back to agency */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="/"
            prefetch={true}
            className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white transition-all font-semibold text-xs border border-slate-700/60 shrink-0"
          >
            <ArrowLeft className={`w-3.5 h-3.5 shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
            <span className="hidden sm:inline">{locale === 'pt' ? '← Voltar à NexaWeb Studio' : locale === 'ar' ? '← العودة إلى NexaWeb Studio' : locale === 'fr' ? '← Retour à NexaWeb Studio' : '← Back to NexaWeb Studio'}</span>
            <span className="sm:hidden text-[11px]">{locale === 'pt' ? 'Voltar' : locale === 'ar' ? 'عودة' : locale === 'fr' ? 'Retour' : 'Back'}</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 border-l border-slate-800 pl-3">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">
              {locale === 'pt' ? 'DEMO AO VIVO —' : locale === 'ar' ? 'معاينة حية —' : locale === 'fr' ? 'DÉMO EN DIRECT —' : 'LIVE DEMO —'}
            </span>
            <span className="font-bold text-white text-xs">{demoTitle}</span>
            <span className="hidden md:inline px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px] uppercase font-semibold">
              {category}
            </span>
          </div>
        </div>

        {/* Center: Viewport Switcher */}
        <div className="flex items-center bg-slate-900 rounded-lg p-0.5 sm:p-1 border border-slate-800">
          <span className="hidden lg:inline text-[11px] text-slate-400 px-2 font-medium">
            {locale === 'pt' ? 'Vista:' : locale === 'ar' ? 'العرض:' : locale === 'fr' ? 'Vue :' : 'View:'}
          </span>
          {viewports.map((item) => (
            <button
              key={item.mode}
              type="button"
              onClick={() => setViewport(item.mode)}
              className={`flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                viewport === item.mode
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title={`Switch to ${item.label} view`}
            >
              {item.icon}
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Right: WhatsApp CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden xl:inline text-slate-400 text-xs">
            {locale === 'pt'
              ? `Personalizado a partir de ${pricing.basePriceFormatted}`
              : locale === 'ar'
              ? `مخصص لعملك بدءاً من ${pricing.basePriceFormatted}`
              : locale === 'fr'
              ? `Personnalisé dès ${pricing.basePriceFormatted}`
              : `Bespoke build starting at ${pricing.basePriceFormatted}`}
          </span>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold transition-all shadow-md shadow-[#25D366]/20 hover:scale-[1.02]"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {locale === 'pt'
                ? `Encomendar Este Site (${pricing.basePriceFormatted})`
                : locale === 'ar'
                ? `اطلب هذا الموقع (${pricing.basePriceFormatted})`
                : locale === 'fr'
                ? `Commander Ce Site (${pricing.basePriceFormatted})`
                : `Order This Website (${pricing.basePriceFormatted})`}
            </span>
            <span className="sm:hidden">
              {locale === 'pt'
                ? `Encomendar (${pricing.basePriceFormatted})`
                : locale === 'ar'
                ? `اطلب (${pricing.basePriceFormatted})`
                : locale === 'fr'
                ? `Commander (${pricing.basePriceFormatted})`
                : `Order (${pricing.basePriceFormatted})`}
            </span>
            <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
          </a>
        </div>
      </div>
    </aside>
  );
}
