import React from 'react';
import type { Metadata } from 'next';
import { DemoViewportProvider } from '@/context/DemoViewportContext';
import { DemoContainer } from '@/components/demos/DemoContainer';
import { DemoPreviewBar } from '@/components/demos/DemoPreviewBar';
import { CartProvider } from '@/context/CartContext';
import { EcommerceNav } from '@/components/demos/ecommerce/EcommerceNav';
import { EcommerceFooter } from '@/components/demos/ecommerce/EcommerceFooter';

export const metadata: Metadata = {
  title: 'VELORA Contemporary Atelier — Luxury E-Commerce | NexaWeb Studio',
  description: 'Contemporary luxury fashion e-commerce demo featuring interactive product catalog, responsive filter drawer, variant selection, reactive cart, and simulated checkout flow.',
};

export default function EcommerceDemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <DemoViewportProvider>
      <DemoPreviewBar
        demoTitle="VELORA Contemporary Atelier"
        category="Luxury Fashion & Retail"
        intent="ecommerce"
      />
      <DemoContainer>
        <CartProvider>
          <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white font-sans antialiased">
            <EcommerceNav />
            <main className="flex-1">{children}</main>
            <EcommerceFooter />
          </div>
        </CartProvider>
      </DemoContainer>
    </DemoViewportProvider>
  );
}

