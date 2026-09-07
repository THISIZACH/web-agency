'use client';

import React, { useEffect, useState } from 'react';
import { useDemoViewport } from '@/context/DemoViewportContext';

export function DemoContainer({ children }: { children: React.ReactNode }) {
  const { viewport } = useDemoViewport();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkScreen = () => {
        setIsSmallScreen(window.innerWidth < 1024);
      };
      checkScreen();
      window.addEventListener('resize', checkScreen);
      return () => window.removeEventListener('resize', checkScreen);
    }
  }, []);

  // On native mobile/tablet screens or desktop mode, render standard full-width layout
  if (isSmallScreen || viewport === 'desktop') {
    return (
      <div className="w-full min-h-screen flex flex-col transition-all duration-200">
        {children}
      </div>
    );
  }

  // Desktop user selecting "mobile" view: render in authentic 390px mobile bezel frame
  if (viewport === 'mobile') {
    return (
      <div className="w-full bg-slate-950/95 py-6 sm:py-10 px-3 flex justify-center transition-all duration-300 min-h-screen">
        <div className="w-full max-w-[420px] bg-black rounded-[48px] border-[12px] border-slate-800 shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col relative ring-1 ring-white/10 overflow-hidden my-auto">
          {/* Dynamic Island / Speaker Notch */}
          <div className="h-8 bg-black flex items-center justify-center relative shrink-0 z-30">
            <div className="w-28 h-4 bg-slate-900 rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700" />
            </div>
          </div>
          {/* Direct Mobile Viewport Container */}
          <div className="w-full max-h-[820px] overflow-y-auto overflow-x-hidden relative flex flex-col bg-black">
            {children}
          </div>
          {/* Bottom Home Indicator Bar */}
          <div className="h-6 bg-black flex items-center justify-center shrink-0 z-30">
            <div className="w-32 h-1 bg-slate-700 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  // Desktop user selecting "tablet" view: render in authentic 768px tablet bezel frame
  if (viewport === 'tablet') {
    return (
      <div className="w-full bg-slate-950/95 py-6 sm:py-10 px-4 flex justify-center transition-all duration-300 min-h-screen">
        <div className="w-full max-w-[820px] bg-black rounded-3xl border-[10px] border-slate-800 shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col relative ring-1 ring-white/10 overflow-hidden my-auto">
          {/* Tablet Front Camera */}
          <div className="h-6 bg-slate-900 flex items-center justify-center shrink-0 z-30">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700" />
          </div>
          {/* Direct Tablet Viewport Container */}
          <div className="w-full max-h-[880px] overflow-y-auto overflow-x-hidden relative flex flex-col bg-black">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col transition-all duration-200">
      {children}
    </div>
  );
}
