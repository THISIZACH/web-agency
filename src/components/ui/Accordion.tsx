'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className = '' }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`space-y-3.5 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id || index}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white dark:bg-slate-900 border-brand-500/40 shadow-sm'
                : 'bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <button
              type="button"
              id={`faq-btn-${index}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              onClick={() => toggle(item.id)}
              className="w-full text-start py-4 px-4 sm:py-5 sm:px-6 flex items-center justify-between gap-3 sm:gap-4 font-semibold text-slate-900 dark:text-white transition-colors cursor-pointer"
            >
              <span className="text-sm sm:text-base md:text-lg leading-snug">{item.question}</span>
              <span
                className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                  isOpen
                    ? 'rotate-180 bg-brand-500/10 text-brand-500'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-btn-${index}`}
              className={`transition-all duration-300 ease-in-out px-4 sm:px-6 ${
                isOpen ? 'max-h-[800px] pb-4 sm:pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0 overflow-hidden'
              }`}
            >
              <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800/80">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

