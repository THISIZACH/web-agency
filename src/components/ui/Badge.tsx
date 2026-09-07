'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brand' | 'blue' | 'amber' | 'neutral';
  className?: string;
}

export function Badge({ children, variant = 'brand', className = '' }: BadgeProps) {
  const variantStyles = {
    brand:
      'bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/20 border',
    blue: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20 border',
    amber:
      'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 border',
    neutral:
      'bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 border',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

