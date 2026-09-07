'use client';

import React from 'react';
import { DemoViewportProvider } from '@/context/DemoViewportContext';
import { DemoContainer } from '@/components/demos/DemoContainer';
import { DemoPreviewBar } from '@/components/demos/DemoPreviewBar';
import { RestaurantNav } from '@/components/demos/restaurant/RestaurantNav';
import { RestaurantFooter } from '@/components/demos/restaurant/RestaurantFooter';
import { useLanguage } from '@/context/LanguageContext';

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale } = useLanguage();

  return (
    <DemoViewportProvider>
      <div className="bg-stone-950 text-stone-100 min-h-screen flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
        <DemoPreviewBar
          demoTitle="Savor Bistro & Lounge"
          category={locale === 'pt' ? 'Restaurante & Gastronomia' : locale === 'ar' ? 'مطاعم وضيافة' : 'Restaurant & Dining'}
          intent="restaurant"
        />
        <DemoContainer>
          <RestaurantNav />
          <div className="flex-1 flex flex-col">{children}</div>
          <RestaurantFooter />
        </DemoContainer>
      </div>
    </DemoViewportProvider>
  );
}
