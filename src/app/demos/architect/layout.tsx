import React from 'react';
import type { Metadata } from 'next';
import { DemoViewportProvider } from '@/context/DemoViewportContext';
import { DemoContainer } from '@/components/demos/DemoContainer';
import { DemoPreviewBar } from '@/components/demos/DemoPreviewBar';
import { ArchitectNav } from '@/components/demos/architect/ArchitectNav';
import { ArchitectFooter } from '@/components/demos/architect/ArchitectFooter';

export const metadata: Metadata = {
  title: 'Atelier Forma Architects — Live Demo | NexaWeb Studio',
  description: 'Editorial luxury architecture portfolio website demo featuring curated projects, design philosophy, architectural essays, and bespoke project inquiry engine.',
};

export default function ArchitectDemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <DemoViewportProvider>
      <DemoPreviewBar
        demoTitle="Atelier Forma Architects"
        category="Architecture & Editorial Design"
        intent="architect"
      />
      <DemoContainer>
        <div className="min-h-screen flex flex-col bg-[#0f0f0f] text-stone-100 selection:bg-stone-100 selection:text-black font-sans antialiased">
          <ArchitectNav />
          <main className="flex-1">{children}</main>
          <ArchitectFooter />
        </div>
      </DemoContainer>
    </DemoViewportProvider>
  );
}

