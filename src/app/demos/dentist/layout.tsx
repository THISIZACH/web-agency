import React from 'react';
import type { Metadata } from 'next';
import { DemoViewportProvider } from '@/context/DemoViewportContext';
import { DemoContainer } from '@/components/demos/DemoContainer';
import { DemoPreviewBar } from '@/components/demos/DemoPreviewBar';
import { DentistNav } from '@/components/demos/dentist/DentistNav';
import { DentistFooter } from '@/components/demos/dentist/DentistFooter';

export const metadata: Metadata = {
  title: 'NovaSmile Dental Clinic — Live Demo | NexaWeb Studio',
  description: 'Premium healthcare & dental clinic website demo with interactive appointment scheduling, treatments catalog, patient guides, and clinic story.',
};

export default function DentistDemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <DemoViewportProvider>
      <DemoPreviewBar
        demoTitle="NovaSmile Dental Clinic"
        category="Healthcare & Dentistry"
        intent="dentist"
      />
      <DemoContainer>
        <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-cyan-500 selection:text-white">
          <DentistNav />
          <main className="flex-1">{children}</main>
          <DentistFooter />
        </div>
      </DemoContainer>
    </DemoViewportProvider>
  );
}

