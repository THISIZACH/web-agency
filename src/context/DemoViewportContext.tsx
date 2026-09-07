'use client';

import React, { createContext, useContext, useState } from 'react';

export type ViewportMode = 'desktop' | 'tablet' | 'mobile';

interface DemoViewportContextType {
  viewport: ViewportMode;
  setViewport: (mode: ViewportMode) => void;
}

const DemoViewportContext = createContext<DemoViewportContextType>({
  viewport: 'desktop',
  setViewport: () => {},
});

export function DemoViewportProvider({ children }: { children: React.ReactNode }) {
  const [viewport, setViewport] = useState<ViewportMode>('desktop');

  return (
    <DemoViewportContext.Provider value={{ viewport, setViewport }}>
      {children}
    </DemoViewportContext.Provider>
  );
}

export function useDemoViewport() {
  return useContext(DemoViewportContext);
}

