'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { MessageSquare, Palette, Code, Rocket } from 'lucide-react';

const stepIcons = [
  <MessageSquare key="msg" className="w-5 h-5 text-brand-500" />,
  <Palette key="palette" className="w-5 h-5 text-sky-500" />,
  <Code key="code" className="w-5 h-5 text-amber-500" />,
  <Rocket key="rocket" className="w-5 h-5 text-purple-500" />,
];

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="brand" className="mb-4">
            {t.howItWorks.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {t.howItWorks.steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-brand-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-extrabold text-slate-200 dark:text-slate-800">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  {stepIcons[idx % stepIcons.length]}
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

