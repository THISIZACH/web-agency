'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className = '', hoverEffect = true }: CardProps) {
  return (
    <div
      className={`relative rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 p-5 sm:p-6 md:p-8 backdrop-blur-sm transition-all duration-300 ${
        hoverEffect
          ? 'hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/5'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

