import React from 'react';
import type { Metadata } from 'next';
import { DemoViewportProvider } from '@/context/DemoViewportContext';
import { DemoContainer } from '@/components/demos/DemoContainer';
import { DemoPreviewBar } from '@/components/demos/DemoPreviewBar';
import { LawyerNav } from '@/components/demos/lawyer/LawyerNav';
import { LawyerFooter } from '@/components/demos/lawyer/LawyerFooter';

export const metadata: Metadata = {
  title: 'Meridian Legal Partners — Corporate Law & Counsel | NexaWeb Studio',
  description: 'Authoritative corporate law firm website demo featuring dedicated practice area monographs, senior partner profiles, thought leadership legal insights, and a confidential consultation intake engine.',
};

export default function LawyerDemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <DemoViewportProvider>
      <DemoPreviewBar
        demoTitle="Meridian Legal Partners"
        category="Corporate Law & Counsel"
        intent="lawyer"
      />
      <DemoContainer>
        <div className="min-h-screen flex flex-col bg-[#0a192f] text-[#fcfbf7] selection:bg-[#c5a880] selection:text-[#0a192f] font-sans antialiased">
          <LawyerNav />
          <main className="flex-1">{children}</main>
          <LawyerFooter />
        </div>
      </DemoContainer>
    </DemoViewportProvider>
  );
}

