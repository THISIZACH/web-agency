import React from 'react';
import type { Metadata } from 'next';
import { DemoViewportProvider } from '@/context/DemoViewportContext';
import { DemoContainer } from '@/components/demos/DemoContainer';
import { DemoPreviewBar } from '@/components/demos/DemoPreviewBar';
import { BarberNav } from '@/components/demos/barbershop/BarberNav';
import { BarberFooter } from '@/components/demos/barbershop/BarberFooter';

export const metadata: Metadata = {
  title: 'North & Blade Barber Studio — Live Demo | NexaWeb Studio',
  description: 'Modern luxury barber studio website demo featuring precision haircut menu, hot towel straight-razor shaves, master barber portfolios, and interactive 6-step chair booking.',
};

export default function BarberDemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <DemoViewportProvider>
      <DemoPreviewBar
        demoTitle="North & Blade Barber Studio"
        category="Men's Grooming & Studio"
        intent="barbershop"
      />
      <DemoContainer>
        <div className="min-h-screen flex flex-col bg-[#0d0d0d] text-[#f5f0eb] selection:bg-[#d4af37] selection:text-[#0d0d0d] font-sans antialiased">
          <BarberNav />
          <main className="flex-1">{children}</main>
          <BarberFooter />
        </div>
      </DemoContainer>
    </DemoViewportProvider>
  );
}

