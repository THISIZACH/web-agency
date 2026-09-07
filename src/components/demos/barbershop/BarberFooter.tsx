'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Scissors, MapPin, Phone, Mail, Clock, Instagram, ArrowUpRight } from 'lucide-react';

export function BarberFooter() {
  const { locale, isRTL } = useLanguage();

  return (
    <footer className="bg-[#080808] border-t border-[#d4af37]/20 text-[#a39b8e] py-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#161616] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                <Scissors className="w-4 h-4 -rotate-45" />
              </div>
              <span className="font-serif tracking-[0.2em] text-base font-bold text-white uppercase">
                NORTH & BLADE
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed font-light">
              {locale === 'pt'
                ? 'Estúdio de barbearia contemporâneo dedicado ao corte masculino de alta precisão e rituais clássicos de toalha quente.'
                : locale === 'ar'
                ? 'استوديو حلاقة معاصر مخصص لقصات الشعر الدقيقة وطقوس الحلاقة الكلاسيكية بالمنشفة الساخنة للرجل الأنيق.'
                : 'Modern luxury barber studio dedicated to shear precision, bespoke beard architecture, and restorative wet shaving rituals.'}
            </p>
            <div className="pt-2 flex items-center gap-3 text-stone-300">
              <span className="inline-flex items-center gap-1.5 text-[#d4af37]">
                <Instagram className="w-4 h-4" />
                <span className="font-mono text-[11px]">@northblade.studio</span>
              </span>
            </div>
          </div>

          {/* Col 2: Studio Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{locale === 'pt' ? 'Horário de Atendimento' : locale === 'ar' ? 'ساعات العمل' : 'Studio Hours'}</span>
            </h4>
            <ul className="space-y-2 text-stone-300">
              <li className="flex justify-between border-b border-stone-800 pb-1">
                <span>{locale === 'pt' ? 'Segunda – Sexta' : locale === 'ar' ? 'الإثنين – الجمعة' : 'Monday – Friday'}</span>
                <span className="font-mono text-white">09:00 – 20:00</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-1">
                <span>{locale === 'pt' ? 'Sábado' : locale === 'ar' ? 'السبت' : 'Saturday'}</span>
                <span className="font-mono text-white">09:00 – 19:00</span>
              </li>
              <li className="flex justify-between pb-1">
                <span>{locale === 'pt' ? 'Domingo' : locale === 'ar' ? 'الأحد' : 'Sunday'}</span>
                <span className="text-[#d4af37] font-semibold">{locale === 'pt' ? 'Encerrado' : locale === 'ar' ? 'مغلق' : 'Closed'}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Location & Booking */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{locale === 'pt' ? 'Localização' : locale === 'ar' ? 'العنوان' : 'Location'}</span>
            </h4>
            <address className="not-italic space-y-1 text-stone-300">
              <p>42 St. James&apos;s Place</p>
              <p>Mayfair, London SW1A 1NP</p>
              <p className="pt-2 text-[#d4af37] flex items-center gap-1.5 font-mono">
                <Phone className="w-3 h-3" />
                <span>+44 20 7946 0888</span>
              </p>
            </address>
          </div>

          {/* Col 4: Quick Links & Agency Attribution */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">
              {locale === 'pt' ? 'Navegação' : locale === 'ar' ? 'روابط سريعة' : 'Navigation'}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link href="/demos/barbershop/services" className="hover:text-[#d4af37] transition-colors">
                  {locale === 'pt' ? 'Menu de Serviços' : locale === 'ar' ? 'دليل الخدمات' : 'Service Menu'}
                </Link>
              </li>
              <li>
                <Link href="/demos/barbershop/barbers" className="hover:text-[#d4af37] transition-colors">
                  {locale === 'pt' ? 'Equipa de Barbeiros' : locale === 'ar' ? 'فريق الحلاقين' : 'Master Barbers'}
                </Link>
              </li>
              <li>
                <Link href="/demos/barbershop/pricing" className="hover:text-[#d4af37] transition-colors">
                  {locale === 'pt' ? 'Tabela de Preços' : locale === 'ar' ? 'قائمة الأسعار' : 'Pricing List'}
                </Link>
              </li>
              <li>
                <Link href="/demos/barbershop/book" className="hover:text-[#d4af37] text-[#d4af37] font-semibold transition-colors flex items-center gap-1">
                  <span>{locale === 'pt' ? 'Agendar Online' : locale === 'ar' ? 'احجز موعدك' : 'Book Chair Online'}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© 2026 North & Blade Barber Studio. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Client showcase demo designed by</span>
            <Link href="/" className="text-white hover:text-[#d4af37] font-semibold transition-colors">
              NexaWeb Studio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

