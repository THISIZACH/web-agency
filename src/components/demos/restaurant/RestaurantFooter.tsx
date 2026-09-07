'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { UtensilsCrossed, Phone, MapPin, Clock, Mail } from 'lucide-react';

export function RestaurantFooter() {
  const { locale } = useLanguage();

  return (
    <footer className="bg-stone-950 border-t border-amber-500/20 text-stone-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-stone-950 font-bold">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <span className="font-serif text-lg tracking-wider text-amber-300 font-bold">
                SAVOR BISTRO
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              {locale === 'pt'
                ? 'Alta gastronomia de inspiração mediterrânica. Ingredientes frescos, biológicos e sazonais em ambiente acolhedor e sofisticado.'
                : locale === 'ar'
                ? 'تجربة طعام فاخرة مستوحاة من نكهات البحر الأبيض المتوسط. مكونات طازجة وعضوية في أجواء راقية وأنيقة.'
                : 'Fine Mediterranean dining crafted with seasonal local harvest in an intimate, sophisticated atmosphere.'}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-stone-200 tracking-wider uppercase">
              {locale === 'pt' ? 'Explorar' : locale === 'ar' ? 'استكشف' : 'Explore'}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/demos/restaurant" className="hover:text-amber-400 transition-colors">
                  {locale === 'pt' ? 'Início' : locale === 'ar' ? 'الرئيسية' : 'Home'}
                </Link>
              </li>
              <li>
                <Link href="/demos/restaurant/menu" className="hover:text-amber-400 transition-colors">
                  {locale === 'pt' ? 'Ementa Completa' : locale === 'ar' ? 'قائمة الطعام' : 'Full Menu'}
                </Link>
              </li>
              <li>
                <Link href="/demos/restaurant/reservations" className="hover:text-amber-400 transition-colors">
                  {locale === 'pt' ? 'Reservas de Mesa' : locale === 'ar' ? 'حجز طاولة' : 'Reservations'}
                </Link>
              </li>
              <li>
                <Link href="/demos/restaurant/about" className="hover:text-amber-400 transition-colors">
                  {locale === 'pt' ? 'A Nossa História' : locale === 'ar' ? 'عن المطعم والشيف' : 'Our Story'}
                </Link>
              </li>
              <li>
                <Link href="/demos/restaurant/contact" className="hover:text-amber-400 transition-colors">
                  {locale === 'pt' ? 'Contactos & Localização' : locale === 'ar' ? 'الموقع والمواعيد' : 'Hours & Location'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-stone-200 tracking-wider uppercase flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>{locale === 'pt' ? 'Horário de Serviço' : locale === 'ar' ? 'أوقات العمل' : 'Service Hours'}</span>
            </h4>
            <div className="space-y-1.5 text-stone-400">
              <p className="font-semibold text-stone-300">
                {locale === 'pt' ? 'Terça a Domingo' : locale === 'ar' ? 'الثلاثاء إلى الأحد' : 'Tuesday – Sunday'}
              </p>
              <p>{locale === 'pt' ? 'Almoço: 12:30 — 15:30' : locale === 'ar' ? 'الغداء: 12:30 — 15:30' : 'Lunch: 12:30 PM — 3:30 PM'}</p>
              <p>{locale === 'pt' ? 'Jantar: 19:30 — 23:30' : locale === 'ar' ? 'العشاء: 19:30 — 23:30' : 'Dinner: 7:30 PM — 11:30 PM'}</p>
              <p className="text-amber-400/80 pt-1">
                {locale === 'pt' ? 'Segundas: Encerrado' : locale === 'ar' ? 'الإثنين: مغلق' : 'Mondays: Closed'}
              </p>
            </div>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-stone-200 tracking-wider uppercase">
              {locale === 'pt' ? 'Contactos' : locale === 'ar' ? 'الاتصال' : 'Contact & Location'}
            </h4>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Avenida da Liberdade 182, 1250-146 Lisboa, Portugal</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+351 21 098 7654</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>reservations@savorbistro.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-900 text-center text-stone-500">
          <p>© 2026 Savor Bistro & Lounge. {locale === 'pt' ? 'Todos os direitos reservados.' : locale === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
}

