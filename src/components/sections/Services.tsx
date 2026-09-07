'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Layout, Smartphone, Search, BookOpen, Server, Wrench } from 'lucide-react';

const serviceIcons: Record<string, React.ReactNode> = {
  'web-design': <Layout className="w-6 h-6 text-brand-500" />,
  responsive: <Smartphone className="w-6 h-6 text-sky-500" />,
  seo: <Search className="w-6 h-6 text-amber-500" />,
  blog: <BookOpen className="w-6 h-6 text-purple-500" />,
  hosting: <Server className="w-6 h-6 text-emerald-500" />,
  maintenance: <Wrench className="w-6 h-6 text-rose-500" />,
};

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="brand" className="mb-4">
            {t.services.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.services.items.map((service) => {
            const icon = serviceIcons[service.id] || <Layout className="w-6 h-6 text-brand-500" />;
            return (
              <Card key={service.id} className="flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      {icon}
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-brand-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

