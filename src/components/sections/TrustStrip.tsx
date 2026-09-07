'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Layout, Smartphone, Search, Zap, Server, ShieldCheck, UserCheck } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-brand-500" />,
  Smartphone: <Smartphone className="w-5 h-5 text-brand-500" />,
  Search: <Search className="w-5 h-5 text-brand-500" />,
  Zap: <Zap className="w-5 h-5 text-brand-500" />,
  Server: <Server className="w-5 h-5 text-brand-500" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-brand-500" />,
  UserCheck: <UserCheck className="w-5 h-5 text-brand-500" />,
};

export function TrustStrip() {
  const { t } = useLanguage();

  return (
    <section className="py-8 sm:py-10 lg:py-12 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {t.trustStrip.items.map((item, index) => {
            const iconElement = iconMap[item.icon] || <ShieldCheck className="w-5 h-5 text-brand-500" />;
            return (
              <div
                key={index}
                className="flex flex-col items-center sm:items-start text-center sm:text-start p-3 sm:p-4 rounded-xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 hover:border-brand-500/30 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mb-3">
                  {iconElement}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
