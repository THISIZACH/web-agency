'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronUp } from 'lucide-react';

const RADIUS = 19;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScrollToTop() {
  const { locale, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const visibleRef = useRef(false);
  const circleRef = useRef<SVGCircleElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    let cachedTotalScroll = 0;
    const calculateTotalScroll = () => {
      cachedTotalScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    };
    calculateTotalScroll();
    window.addEventListener('resize', calculateTotalScroll, { passive: true });

    const onScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = window.requestAnimationFrame(() => {
        rafId.current = null;
        const scrollY = window.scrollY;
        const shouldBeVisible = scrollY > 300;

        if (visibleRef.current !== shouldBeVisible) {
          visibleRef.current = shouldBeVisible;
          setIsVisible(shouldBeVisible);
        }

        if (circleRef.current) {
          const progress = Math.min(1, Math.max(0, scrollY / cachedTotalScroll));
          const offset = CIRCUMFERENCE - progress * CIRCUMFERENCE;
          circleRef.current.style.strokeDashoffset = `${offset}`;
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', calculateTotalScroll);
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const label =
    locale === 'pt'
      ? 'Voltar ao topo'
      : locale === 'ar'
      ? 'العودة إلى الأعلى'
      : 'Scroll to top';

  return (
    <div
      className={`fixed bottom-4 sm:bottom-6 z-40 transition-all duration-300 ease-out ${
        isRTL ? 'right-4 sm:right-6' : 'left-4 sm:left-6'
      } ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
          : 'opacity-0 translate-y-4 pointer-events-none scale-90'
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={label}
        title={label}
        className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-slate-900/10 dark:shadow-black/40 hover:shadow-xl hover:shadow-brand-500/20 hover:border-brand-500/40 dark:hover:border-brand-500/50 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
      >
        {/* Subtle SVG Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox="0 0 44 44"
          aria-hidden="true"
        >
          {/* Background track */}
          <circle
            cx="22"
            cy="22"
            r={RADIUS}
            fill="none"
            className="stroke-slate-200/60 dark:stroke-slate-800/80"
            strokeWidth="2"
          />
          {/* Dynamic progress ring */}
          <circle
            ref={circleRef}
            cx="22"
            cy="22"
            r={RADIUS}
            fill="none"
            className="stroke-brand-500 dark:stroke-brand-400 transition-[stroke-dashoffset] duration-75 ease-out"
            strokeWidth="2.2"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE}
            strokeLinecap="round"
          />
        </svg>

        {/* Upward Chevron Icon */}
        <ChevronUp className="w-5 h-5 text-slate-700 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 relative z-10" />
      </button>
    </div>
  );
}

