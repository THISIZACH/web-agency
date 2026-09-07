'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { MASTER_BARBERS } from '@/config/barberData';
import { Scissors, Award, Star, Calendar, ArrowRight, Instagram } from 'lucide-react';

export default function BarbershopTeamPage() {
  const { locale, isRTL } = useLanguage();

  return (
    <div className="bg-[#0d0d0d] text-[#f5f0eb] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono uppercase tracking-widest">
            <Scissors className="w-3.5 h-3.5 -rotate-45" />
            <span>{locale === 'pt' ? 'Mestres da Barbearia Tradicional' : locale === 'ar' ? 'فريق الحلاقين المحترفين' : 'The Craftsmen Behind the Blades'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase">
            {locale === 'pt' ? 'A Nossa Equipa de Mestres' : locale === 'ar' ? 'الحلاقون المحترفون' : 'Master Barbers'}
          </h1>
          <p className="text-stone-400 text-sm max-w-xl mx-auto">
            {locale === 'pt'
              ? 'Barbeiros dedicados à precisão, disciplina britânica e cuidado personalizado para cada cavalheiro.'
              : locale === 'ar'
              ? 'حلاقون معتمدون يتمتعون بأعلى درجات الانضباط والمهارة الحرفية لتقديم تجربة حلاقة لا تضاهى.'
              : 'Decades of combined master craft, British sartorial discipline, and genuine dedication to the art of grooming.'}
          </p>
        </div>

        {/* Master Barbers Detailed Roster */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {MASTER_BARBERS.map((barber) => (
            <div
              key={barber.id}
              className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-[#141414] border border-stone-800 hover:border-[#d4af37]/40 transition-all duration-300 group"
            >
              <div className="relative w-full sm:w-56 h-72 rounded-xl overflow-hidden bg-stone-900 shrink-0">
                <Image
                  src={barber.image}
                  alt={barber.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                />
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#0d0d0d]/90 text-[#d4af37] text-xs font-mono border border-[#d4af37]/30">
                  {barber.experience}
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-[#d4af37] uppercase tracking-wider block">
                    {barber.role[locale]}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#d4af37] transition-colors">
                    {barber.name}
                  </h3>
                  <div className="text-xs text-stone-300 font-semibold">
                    <span className="text-stone-500 block text-[10px] uppercase font-mono">{locale === 'pt' ? 'Especialidade:' : locale === 'ar' ? 'التخصص:' : 'Specialty:'}</span>
                    {barber.specialty[locale]}
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed pt-1">
                    {barber.bio[locale]}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-500 flex items-center gap-1">
                    <Instagram className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{barber.instagram}</span>
                  </span>
                  <Link
                    href={`/demos/barbershop/book?barber=${barber.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#d4af37] hover:bg-[#e5c158] text-[#0d0d0d] font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{locale === 'pt' ? 'Marcar Cadeira' : locale === 'ar' ? 'حجز موعد' : 'Book Chair'}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

