'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Car,
  Sparkles,
  Send,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

export default function RestaurantContactPage() {
  const { locale } = useLanguage();
  const [inquirySent, setInquirySent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs uppercase tracking-widest font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'Lisboa, Avenida da Liberdade' : locale === 'ar' ? 'لشبونة، أفينيدا دا ليبرداد' : 'Lisbon Prime Location'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
            {locale === 'pt' ? 'Horários, Localização & Eventos' : locale === 'ar' ? 'الموقع، أوقات العمل والمناسبات' : 'Location, Hours & Private Dining'}
          </h1>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            {locale === 'pt'
              ? 'Encontre-nos no centro de Lisboa com serviço de valet parking privativo. Contacte-nos para reservas ou eventos exclusivos.'
              : locale === 'ar'
              ? 'موقع متميز في قلب لشبونة مع خدمة صف السيارات المجانية. تواصل معنا للحجز أو تنظيم المناسبات الخاصة.'
              : 'Located on Lisbon’s prestigious boulevard with complimentary valet parking and private dining buyout suites.'}
          </p>
        </div>

        {/* 2-Column Info & Map layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Col 1: Practical Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Opening Hours Card */}
            <div className="p-8 rounded-3xl bg-stone-900/60 border border-amber-500/20 space-y-6">
              <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>{locale === 'pt' ? 'Horários de Atendimento' : locale === 'ar' ? 'مواعيد العمل' : 'Dining Hours'}</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div className="pb-3 border-b border-stone-800">
                  <div className="flex justify-between font-bold text-stone-200">
                    <span>{locale === 'pt' ? 'Terça a Sexta-feira' : locale === 'ar' ? 'الثلاثاء إلى الجمعة' : 'Tuesday to Friday'}</span>
                  </div>
                  <div className="flex justify-between text-stone-400 mt-1">
                    <span>{locale === 'pt' ? 'Almoço Executivo' : locale === 'ar' ? 'فترة الغداء' : 'Business Lunch'}</span>
                    <span className="text-amber-300 font-semibold">12:30 — 15:30</span>
                  </div>
                  <div className="flex justify-between text-stone-400 mt-1">
                    <span>{locale === 'pt' ? 'Jantar Gastronómico' : locale === 'ar' ? 'فترة العشاء' : 'Fine Dinner'}</span>
                    <span className="text-amber-300 font-semibold">19:30 — 23:30</span>
                  </div>
                </div>

                <div className="pb-3 border-b border-stone-800">
                  <div className="flex justify-between font-bold text-stone-200">
                    <span>{locale === 'pt' ? 'Sábado e Domingo' : locale === 'ar' ? 'السبت والأحد' : 'Saturday & Sunday'}</span>
                  </div>
                  <div className="flex justify-between text-stone-400 mt-1">
                    <span>{locale === 'pt' ? 'Serviço Contínuo' : locale === 'ar' ? 'الخدمة المستمرة' : 'All-Day Dining'}</span>
                    <span className="text-amber-300 font-semibold">13:00 — 23:30</span>
                  </div>
                </div>

                <div className="flex justify-between text-amber-400/80 font-semibold">
                  <span>{locale === 'pt' ? 'Segundas-feiras' : locale === 'ar' ? 'أيام الإثنين' : 'Mondays'}</span>
                  <span>{locale === 'pt' ? 'Encerrado para Descanso' : locale === 'ar' ? 'مغلق (عطلة أسبوعية)' : 'Closed'}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/demos/restaurant/reservations"
                  className="block text-center w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  {locale === 'pt' ? 'Reservar Mesa' : locale === 'ar' ? 'حجز طاولة الآن' : 'Book a Table'}
                </Link>
              </div>
            </div>

            {/* Arrival & Dress code */}
            <div className="p-8 rounded-3xl bg-stone-900/60 border border-stone-800 space-y-4 text-xs text-stone-300">
              <h4 className="font-serif text-base font-bold text-white flex items-center gap-2">
                <Car className="w-4 h-4 text-amber-400" />
                <span>{locale === 'pt' ? 'Valet Parking & Código de Vestuário' : locale === 'ar' ? 'خدمة السيارات والزي الموصى به' : 'Valet Parking & Dress Code'}</span>
              </h4>
              <p className="leading-relaxed">
                {locale === 'pt'
                  ? 'Dispomos de serviço de Valet Parking privativo à porta do restaurante durante o horário de almoço e jantar.'
                  : locale === 'ar'
                  ? 'نوفر خدمة صف السيارات المجانية أمام مدخل المطعم طوال فترات الغداء والعشاء.'
                  : 'Complimentary valet parking is stationed directly at our front entrance for all dinner and lunch guests.'}
              </p>
              <div className="pt-2 border-t border-stone-800">
                <span className="font-bold text-amber-300 block mb-1">
                  {locale === 'pt' ? 'Dress Code: Casual Sofisticado' : locale === 'ar' ? 'الزي: أنيق ومحتشم (Smart Casual)' : 'Dress Code: Smart Casual to Formal'}
                </span>
                <p className="text-stone-400">
                  {locale === 'pt'
                    ? 'Agradecemos que os senhores evitem chinelos, bermudas ou vestuário de praia.'
                    : locale === 'ar'
                    ? 'نرجو من ضيوفنا الكرام تجنب الملابس الرياضية أو الشاطئية لضمان راحة الجميع.'
                    : 'To maintain the intimate atmosphere, sportswear and beachwear are kindly discouraged.'}
                </p>
              </div>
            </div>
          </div>

          {/* Col 2: Interactive Map Mockup & Private Dining Form */}
          <div className="lg:col-span-7 space-y-8">
            {/* Google Map Style View */}
            <div className="rounded-3xl overflow-hidden border border-amber-500/30 bg-stone-900 relative shadow-2xl">
              <div className="h-80 w-full relative bg-stone-900 flex items-center justify-center">
                {/* Visual map grid representation */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'radial-gradient(#d97706 1px, transparent 1px), radial-gradient(#d97706 1px, #0c0a09 1px)',
                    backgroundSize: '24px 24px',
                    backgroundPosition: '0 0, 12px 12px',
                  }}
                />

                <div className="relative z-10 text-center space-y-3 p-6 bg-stone-950/85 backdrop-blur-md rounded-2xl border border-amber-500/40 max-w-md shadow-2xl">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30 animate-pulse">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    Savor Bistro & Lounge — Lisboa
                  </h4>
                  <p className="text-xs text-stone-300">
                    Avenida da Liberdade 182, 1250-146 Lisboa, Portugal
                  </p>
                  <div className="pt-1">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline"
                    >
                      <span>{locale === 'pt' ? 'Abrir no Google Maps' : locale === 'ar' ? 'افتح في خرائط جوجل' : 'Open in Google Maps'}</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Private Dining / Event Buyout Form */}
            <div className="p-8 rounded-3xl bg-stone-900/60 border border-amber-500/20 space-y-6">
              <div className="space-y-2">
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
                  {locale === 'pt' ? 'Eventos Exclusivos' : locale === 'ar' ? 'المناسبات والفعاليات الخاصة' : 'Private Celebrations & Corporate Events'}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {locale === 'pt' ? 'Pedido de Reserva de Sala Privada' : locale === 'ar' ? 'استفسار عن حجز صالة خاصة أو حجز المطعم بالكامل' : 'Private Dining & Buyout Inquiry'}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {locale === 'pt'
                    ? 'Disponibilizamos a Adega Privada (até 16 pessoas) ou o aluguer completo do restaurante para jantares de empresa, aniversários e casamentos intimistas.'
                    : locale === 'ar'
                    ? 'نوفر القبو الخاص (حتى 16 شخصاً) أو حجز المطعم بالكامل لاجتماعات الشركات، أعياد الميلاد والاحتفالات العائلية الراقية.'
                    : 'From intimate 16-guest private cellar dinners to complete venue buyouts (up to 90 guests).'}
                </p>
              </div>

              {inquirySent ? (
                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-amber-400 mx-auto" />
                  <h4 className="font-bold text-white text-sm">
                    {locale === 'pt' ? 'Pedido Enviado com Sucesso!' : locale === 'ar' ? 'تم استلام طلبك بنجاح!' : 'Inquiry Received!'}
                  </h4>
                  <p className="text-xs text-stone-400">
                    {locale === 'pt'
                      ? 'A nossa equipa de eventos entrará em contacto dentro de 24 horas úteis.'
                      : locale === 'ar'
                      ? 'سيتواصل معك مدير المناسبات لدينا خلال 24 ساعة لترتيب كافة التفاصيل.'
                      : 'Our private events coordinator will reach out to you within 24 business hours.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-stone-300 mb-1">
                        {locale === 'pt' ? 'Nome do Responsável' : locale === 'ar' ? 'اسم المسؤول' : 'Organizer Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={locale === 'pt' ? 'Ex: Dra. Maria Santos' : locale === 'ar' ? 'مثال: عبد الله السالم' : 'e.g. Elena Rostova'}
                        className="w-full px-4 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-stone-100 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-300 mb-1">
                        {locale === 'pt' ? 'Email Corporativo' : locale === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="elena@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-stone-100 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-semibold text-stone-300 mb-1">
                        {locale === 'pt' ? 'Tipo de Evento' : locale === 'ar' ? 'نوع المناسبة' : 'Event Type'}
                      </label>
                      <select className="w-full px-3 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-stone-200 focus:outline-none focus:border-amber-500">
                        <option>{locale === 'pt' ? 'Jantar Corporativo' : locale === 'ar' ? 'عشاء عمل رسمي' : 'Corporate Dinner'}</option>
                        <option>{locale === 'pt' ? 'Aniversário / Celebração' : locale === 'ar' ? 'ذكرى سنوية أو احتفال خاص' : 'Birthday / Anniversary'}</option>
                        <option>{locale === 'pt' ? 'Casamento Íntimo' : locale === 'ar' ? 'حفل زفاف خاص' : 'Intimate Wedding'}</option>
                        <option>{locale === 'pt' ? 'Aluguer Completo (Buyout)' : locale === 'ar' ? 'حجز المطعم بالكامل' : 'Full Venue Buyout'}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-300 mb-1">
                        {locale === 'pt' ? 'Nº Estimado Pessoas' : locale === 'ar' ? 'العدد المتوقع' : 'Estimated Guests'}
                      </label>
                      <input
                        type="number"
                        placeholder="12"
                        className="w-full px-4 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-stone-100 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-300 mb-1">
                        {locale === 'pt' ? 'Data Pretendida' : locale === 'ar' ? 'التاريخ المفضل' : 'Target Date'}
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-stone-100 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-300 mb-1">
                      {locale === 'pt' ? 'Detalhes ou Requisitos do Menu' : locale === 'ar' ? 'تفاصيل إضافية أو متطلبات خاصة' : 'Additional Requirements or Menu Preferences'}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={locale === 'pt' ? 'Harmonização de vinhos pretendida, apresentação com projetor...' : locale === 'ar' ? 'تفضيلات الأطباق، تجهيزات العرض...' : 'Wine pairing preferences, AV setup needed...'}
                      className="w-full px-4 py-2 rounded-xl bg-stone-800 border border-stone-700 text-stone-100 focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-600/20"
                  >
                    {locale === 'pt' ? 'Enviar Pedido de Evento' : locale === 'ar' ? 'إرسال طلب الحجز الخاص' : 'Submit Private Dining Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

