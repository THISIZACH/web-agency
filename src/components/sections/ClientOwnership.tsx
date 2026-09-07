'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { Code2, Globe2, Server, FileText, KeyRound, CheckCircle2, UserCheck } from 'lucide-react';

const pillarIcons = [
  <Code2 key="code" className="w-6 h-6 text-brand-500" />,
  <Globe2 key="globe" className="w-6 h-6 text-sky-500" />,
  <Server key="server" className="w-6 h-6 text-amber-500" />,
  <FileText key="file" className="w-6 h-6 text-purple-500" />,
];

export function ClientOwnership() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="brand" className="mb-4">
            {t.clientOwnership.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {t.clientOwnership.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.clientOwnership.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12">
          {t.clientOwnership.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-brand-500/40 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                {pillarIcons[idx % pillarIcons.length]}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 100% Full Ownership & Credentials Transfer Showcase */}
        <div className="max-w-4xl mx-auto rounded-3xl p-5 sm:p-8 md:p-10 bg-gradient-to-tr from-brand-500/10 via-brand-500/5 to-transparent border-2 border-brand-500/30 shadow-lg mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-3.5 sm:gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-brand-500/20">
              <KeyRound className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-1">
                Guaranteed Handover
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {t.clientOwnership.credentialsHandover.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {t.clientOwnership.credentialsHandover.desc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {t.clientOwnership.credentialsHandover.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border border-brand-500/20 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-center text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
          {t.clientOwnership.disclaimer}
        </p>
      </div>
    </section>
  );
}

