'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  Calendar as CalendarIcon,
  Clock,
  Users,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  MapPin,
  UtensilsCrossed,
  Wine,
  Phone,
  Mail,
  ShieldCheck,
  CalendarCheck,
} from 'lucide-react';

export default function RestaurantReservationPage() {
  const { locale, isRTL } = useLanguage();

  // Step state: 1 (Date) | 2 (Time) | 3 (Guests & Area) | 4 (Contact Details) | 5 (Confirmed)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form selections
  const [reservationDate, setReservationDate] = useState('2026-09-12');
  const [timeSlot, setTimeSlot] = useState('19:30');
  const [partySize, setPartySize] = useState('2');
  const [seatingArea, setSeatingArea] = useState<'indoor' | 'terrace' | 'vault'>('indoor');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');

  const [bookingCode, setBookingCode] = useState('');

  // Quick dates (e.g., Today, Tomorrow, Weekend)
  const quickDates = [
    { label: locale === 'pt' ? 'Hoje à Noite' : locale === 'ar' ? 'الليلة' : 'Tonight', date: '2026-09-12' },
    { label: locale === 'pt' ? 'Amanhã' : locale === 'ar' ? 'غداً' : 'Tomorrow', date: '2026-09-13' },
    { label: locale === 'pt' ? 'Sábado' : locale === 'ar' ? 'السبت' : 'Saturday', date: '2026-09-19' },
    { label: locale === 'pt' ? 'Domingo' : locale === 'ar' ? 'الأحد' : 'Sunday', date: '2026-09-20' },
  ];

  const lunchSlots = ['12:30', '13:00', '13:30', '14:00'];
  const dinnerSlots = ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30'];

  const seatingOptions = [
    {
      id: 'indoor' as const,
      title: locale === 'pt' ? 'Salão Principal Interior' : locale === 'ar' ? 'القاعة الداخلية الفاخرة' : 'Main Dining Hall',
      desc: locale === 'pt' ? 'Ambiente aconchegante à luz de velas e música acústica.' : locale === 'ar' ? 'أجواء ساحرة على ضوء الشموع وموسيقى هادئة.' : 'Warm candlelight, elegant table settings & acoustic jazz.',
      tag: locale === 'pt' ? 'Mais Popular' : locale === 'ar' ? 'الأكثر طلباً' : 'Most Popular',
    },
    {
      id: 'terrace' as const,
      title: locale === 'pt' ? 'Varanda Jardim de Inverno' : locale === 'ar' ? 'الشرفة والحديقة الخارجية' : 'Olive Garden Veranda',
      desc: locale === 'pt' ? 'Cercada por oliveiras e aquecimento radiante exterior.' : locale === 'ar' ? 'محاطة بأشجار الزيتون مع تدفئة شتوية لطيفة.' : 'Surrounded by ancient olive trees and radiant outdoor warmth.',
      tag: locale === 'pt' ? 'Vista Aberta' : locale === 'ar' ? 'إطلالة خارجية' : 'Open Air',
    },
    {
      id: 'vault' as const,
      title: locale === 'pt' ? 'Adega Privada & Sommelier' : locale === 'ar' ? 'قبو المشروبات الحصري' : 'Private Cellar Vault',
      desc: locale === 'pt' ? 'Mesa reservada dentro da nossa garrafeira climatizada.' : locale === 'ar' ? 'طاولة حصرية داخل قبو المشروبات المعتقة للمناسبات.' : 'Private dining table flanked by our 400-label curated reserve.',
      tag: locale === 'pt' ? 'Exclusivo' : locale === 'ar' ? 'حصري' : 'VIP Reserve',
    },
  ];

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingCode(`SAV-${Math.floor(10000 + Math.random() * 90000)}`);
    setCurrentStep(5);
  };

  const stepsList = [
    { num: 1, title: locale === 'pt' ? 'Data' : locale === 'ar' ? 'التاريخ' : 'Date' },
    { num: 2, title: locale === 'pt' ? 'Horário' : locale === 'ar' ? 'الوقت' : 'Time' },
    { num: 3, title: locale === 'pt' ? 'Pessoas' : locale === 'ar' ? 'الضيوف' : 'Guests' },
    { num: 4, title: locale === 'pt' ? 'Contacto' : locale === 'ar' ? 'البيانات' : 'Details' },
  ];

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'Reserva de Mesa em 4 Passos' : locale === 'ar' ? 'حجز طاولة في 4 خطوات' : 'Interactive Table Booking'}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {locale === 'pt' ? 'Reserve a Sua Mesa' : locale === 'ar' ? 'احجز طاولتك الفاخرة' : 'Reserve Your Table'}
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm">
            {locale === 'pt'
              ? 'Experiência gastronómica de alta cozinha. Escolha os seus detalhes e receba confirmação instantânea no ecrã.'
              : locale === 'ar'
              ? 'تجربة طعام راقية واستثنائية. اختر تفاصيل زيارتك واحصل على تأكيد فوري مباشر.'
              : 'Seasonal fine dining experience. Select your preferences and receive an instant digital confirmation.'}
          </p>
        </div>

        {/* Multi-step Progress Indicator (Only for steps 1-4) */}
        {currentStep <= 4 && (
          <div className="max-w-xl mx-auto">
            <div className="flex items-center justify-between relative">
              {/* Connecting line */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-0.5 bg-stone-800 -z-0" />
              <div
                className="absolute top-1/2 left-0 -translate-y-1/2 h-0.5 bg-amber-500 transition-all duration-300 -z-0"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              />

              {stepsList.map((st) => (
                <div key={st.num} className="relative z-10 flex flex-col items-center gap-1.5">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      currentStep === st.num
                        ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/30 scale-110'
                        : currentStep > st.num
                        ? 'bg-amber-600 text-white'
                        : 'bg-stone-800 text-stone-400 border border-stone-700'
                    }`}
                  >
                    {currentStep > st.num ? '✓' : st.num}
                  </div>
                  <span
                    className={`text-[11px] font-medium hidden sm:inline ${
                      currentStep === st.num ? 'text-amber-400 font-bold' : 'text-stone-400'
                    }`}
                  >
                    {st.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Wizard Card */}
        <div className="bg-stone-900/70 border border-amber-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          {/* ========================================================================= */}
          {/* STEP 1: CHOOSE DATE */}
          {/* ========================================================================= */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="border-b border-stone-800 pb-4">
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block">
                  {locale === 'pt' ? 'Passo 1 de 4' : locale === 'ar' ? 'الخطوة 1 من 4' : 'Step 1 of 4'}
                </span>
                <h2 className="font-serif text-2xl font-bold text-white mt-1">
                  {locale === 'pt' ? 'Escolha a Data da Reserva' : locale === 'ar' ? 'اختر تاريخ زيارتك' : 'Select Reservation Date'}
                </h2>
                <p className="text-xs text-stone-400 mt-1">
                  {locale === 'pt'
                    ? 'Mesas disponíveis até 30 dias de antecedência.'
                    : locale === 'ar'
                    ? 'الحجوزات متاحة حتى 30 يوماً مقدماً.'
                    : 'Table bookings open up to 30 days in advance.'}
                </p>
              </div>

              {/* Quick Preset Date Pills */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-2">
                  {locale === 'pt' ? 'Atalhos Rápidos' : locale === 'ar' ? 'خيارات سريعة' : 'Quick Presets'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {quickDates.map((q) => (
                    <button
                      key={q.date}
                      type="button"
                      onClick={() => setReservationDate(q.date)}
                      className={`p-3 rounded-xl text-xs font-semibold border transition-all ${
                        reservationDate === q.date
                          ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md shadow-amber-500/20 font-bold'
                          : 'bg-stone-800/80 text-stone-300 border-stone-700 hover:bg-stone-800'
                      }`}
                    >
                      <div className="text-[11px] opacity-75">{q.date}</div>
                      <div>{q.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Specific Date Input */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-stone-300 mb-2 flex items-center gap-2">
                  <CalendarIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>{locale === 'pt' ? 'Ou selecione outra data no calendário:' : locale === 'ar' ? 'أو حدد تاريخاً محدداً من التقويم:' : 'Or choose a specific calendar date:'}</span>
                </label>
                <input
                  type="date"
                  value={reservationDate}
                  min="2026-09-12"
                  onChange={(e) => setReservationDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-stone-800/90 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  <span>{locale === 'pt' ? 'Continuar: Horário' : locale === 'ar' ? 'التالي: اختيار الوقت' : 'Next: Choose Time'}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 2: CHOOSE TIME */}
          {/* ========================================================================= */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="border-b border-stone-800 pb-4">
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block">
                  {locale === 'pt' ? 'Passo 2 de 4' : locale === 'ar' ? 'الخطوة 2 من 4' : 'Step 2 of 4'}
                </span>
                <h2 className="font-serif text-2xl font-bold text-white mt-1">
                  {locale === 'pt' ? 'Selecione o Horário de Serviço' : locale === 'ar' ? 'اختر وقت الجلوس' : 'Select Seating Time'}
                </h2>
                <p className="text-xs text-stone-400 mt-1">
                  {locale === 'pt'
                    ? `Data selecionada: ${reservationDate}. Escolha almoço ou jantar.`
                    : locale === 'ar'
                    ? `التاريخ المختار: ${reservationDate}. اختر بين الغداء أو العشاء.`
                    : `Date selected: ${reservationDate}. Choose lunch or dinner service.`}
                </p>
              </div>

              {/* Dinner Slots */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-amber-300 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{locale === 'pt' ? 'Serviço de Jantar (19:00 - 22:30)' : locale === 'ar' ? 'جلسة العشاء (19:00 - 22:30)' : 'Dinner Service (19:00 - 22:30)'}</span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                  {dinnerSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`py-3 rounded-xl text-xs font-bold border transition-all ${
                        timeSlot === slot
                          ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md shadow-amber-500/20 scale-105'
                          : 'bg-stone-800/80 text-stone-200 border-stone-700 hover:bg-stone-800'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lunch Slots */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-semibold text-stone-300 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  <span>{locale === 'pt' ? 'Serviço de Almoço (12:30 - 15:00)' : locale === 'ar' ? 'جلسة الغداء (12:30 - 15:00)' : 'Lunch Service (12:30 - 15:00)'}</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {lunchSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`py-3 rounded-xl text-xs font-bold border transition-all ${
                        timeSlot === slot
                          ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md shadow-amber-500/20 scale-105'
                          : 'bg-stone-800/80 text-stone-300 border-stone-700 hover:bg-stone-800'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-stone-400 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  <span>{locale === 'pt' ? 'Voltar' : locale === 'ar' ? 'السابق' : 'Back'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  <span>{locale === 'pt' ? 'Continuar: Pessoas' : locale === 'ar' ? 'التالي: عدد الضيوف' : 'Next: Guest Count'}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 3: CHOOSE NUMBER OF GUESTS & SEATING AREA */}
          {/* ========================================================================= */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="border-b border-stone-800 pb-4">
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block">
                  {locale === 'pt' ? 'Passo 3 de 4' : locale === 'ar' ? 'الخطوة 3 من 4' : 'Step 3 of 4'}
                </span>
                <h2 className="font-serif text-2xl font-bold text-white mt-1">
                  {locale === 'pt' ? 'Número de Convidados & Ambiente' : locale === 'ar' ? 'عدد الضيوف ومنطقة الجلوس' : 'Party Size & Dining Ambiance'}
                </h2>
                <p className="text-xs text-stone-400 mt-1">
                  {locale === 'pt'
                    ? 'Indique o tamanho do grupo para alocação da mesa ideal.'
                    : locale === 'ar'
                    ? 'حدد عدد الأفراد لاختيار الطاولة الأنسب لمجموعتك.'
                    : 'Select table capacity and preferred dining atmosphere.'}
                </p>
              </div>

              {/* Party size counter */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-2">
                  {locale === 'pt' ? 'Quantos convidados estarão presentes?' : locale === 'ar' ? 'كم عدد الضيوف الحاضرين؟' : 'How many guests in your party?'}
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                  {['1', '2', '4', '6', '8', '10+'].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setPartySize(size)}
                      className={`py-3 rounded-xl text-xs font-bold border transition-all ${
                        partySize === size
                          ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md shadow-amber-500/20 scale-105'
                          : 'bg-stone-800/80 text-stone-300 border-stone-700 hover:bg-stone-800'
                      }`}
                    >
                      {size} {locale === 'pt' ? 'Pessoas' : locale === 'ar' ? 'ضيوف' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating Area selection */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-semibold text-amber-300">
                  {locale === 'pt' ? 'Preferência de Ambiente:' : locale === 'ar' ? 'منطقة الجلوس المفضلة:' : 'Atmosphere Preference:'}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {seatingOptions.map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setSeatingArea(opt.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                        seatingArea === opt.id
                          ? 'bg-amber-500/10 border-amber-400 ring-1 ring-amber-400 shadow-md shadow-amber-500/10'
                          : 'bg-stone-800/60 border-stone-700/80 hover:border-stone-600'
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">{opt.title}</span>
                          <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[10px] font-semibold">
                            {opt.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-400 leading-relaxed">{opt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-stone-400 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  <span>{locale === 'pt' ? 'Voltar' : locale === 'ar' ? 'السابق' : 'Back'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  <span>{locale === 'pt' ? 'Continuar: Seus Dados' : locale === 'ar' ? 'التالي: بيانات الاتصال' : 'Next: Contact Details'}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* STEP 4: ENTER CONTACT DETAILS & CONFIRM */}
          {/* ========================================================================= */}
          {currentStep === 4 && (
            <form onSubmit={handleComplete} className="space-y-6">
              <div className="border-b border-stone-800 pb-4">
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider block">
                  {locale === 'pt' ? 'Passo 4 de 4' : locale === 'ar' ? 'الخطوة 4 من 4' : 'Step 4 of 4'}
                </span>
                <h2 className="font-serif text-2xl font-bold text-white mt-1">
                  {locale === 'pt' ? 'Dados do Titular da Reserva' : locale === 'ar' ? 'بيانات صاحب الحجز' : 'Guest Details'}
                </h2>
                <p className="text-xs text-stone-400 mt-1">
                  {locale === 'pt'
                    ? `Resumo: ${partySize} pessoas para ${reservationDate} às ${timeSlot}.`
                    : locale === 'ar'
                    ? `ملخص الحجز: ${partySize} ضيوف في تاريخ ${reservationDate} الساعة ${timeSlot}.`
                    : `Summary: ${partySize} guests on ${reservationDate} at ${timeSlot}.`}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    {locale === 'pt' ? 'Nome Completo' : locale === 'ar' ? 'الاسم الكريم' : 'Full Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={locale === 'pt' ? 'Ex: Dr. Roberto Silva' : locale === 'ar' ? 'مثال: عبد الله السعدي' : 'e.g. Robert Smith'}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-800/90 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    {locale === 'pt' ? 'Telemóvel / WhatsApp' : locale === 'ar' ? 'رقم الهاتف' : 'Phone / WhatsApp'} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={locale === 'pt' ? '+351 912 345 678' : locale === 'ar' ? '+966 50 123 4567' : '+44 7911 123456'}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-800/90 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    {locale === 'pt' ? 'E-mail para Confirmação' : locale === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="guest@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-800/90 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                  {locale === 'pt' ? 'Alergias Alimentares ou Ocasião Especial (Opcional)' : locale === 'ar' ? 'حساسية طعام أو مناسبة خاصة (اختياري)' : 'Special Requests & Dietary Requirements (Optional)'}
                </label>
                <textarea
                  rows={2}
                  placeholder={locale === 'pt' ? 'Ex: Aniversário de casamento, preferência por mesa junto à janela, sem marisco...' : locale === 'ar' ? 'مثال: مناسبة تخرج، طاولة هادئة، حساسية الغلوتين...' : 'e.g. Celebrating anniversary, window table preference, gluten-free dessert...'}
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-800/90 border border-stone-700 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Demo Notice */}
              <div className="p-3.5 rounded-xl bg-stone-800/60 border border-stone-700 text-xs text-stone-400 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  {locale === 'pt'
                    ? 'Demonstração Interativa NexaWeb Studio: A sua confirmação será gerada de imediato no próximo ecrã.'
                    : locale === 'ar'
                    ? 'نموذج محاكاة تفاعلي من NexaWeb Studio: سيتم إنشاء قسيمة الحجز التجريبية فوراً أمامك.'
                    : 'Interactive NexaWeb Studio Demo: Your simulation confirmation voucher will be displayed immediately.'}
                </span>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-stone-400 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  <span>{locale === 'pt' ? 'Voltar' : locale === 'ar' ? 'السابق' : 'Back'}</span>
                </button>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:scale-105 cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>{locale === 'pt' ? 'Confirmar Reserva de Mesa' : locale === 'ar' ? 'تأكيد حجز الطاولة الآن' : 'Reserve Your Table'}</span>
                </button>
              </div>
            </form>
          )}

          {/* ========================================================================= */}
          {/* STEP 5: BEAUTIFUL CONFIRMATION STATE */}
          {/* ========================================================================= */}
          {currentStep === 5 && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-pulse">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
                  {locale === 'pt' ? 'Reserva Confirmada' : locale === 'ar' ? 'تم تأكيد الحجز بنجاح' : 'Table Reserved'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {locale === 'pt' ? 'Aguardamos a Sua Visita, ' : locale === 'ar' ? 'أهلاً وسهلاً بك، ' : 'We Look Forward to Welcoming You, '}
                  <span className="text-amber-400">{fullName || 'Valued Guest'}</span>
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto">
                  {locale === 'pt'
                    ? 'A sua mesa foi reservada com sucesso. Apresente o código da reserva ou nome à chegada.'
                    : locale === 'ar'
                    ? 'تم حجز طاولتك بنجاح. يمكنك إبراز كود الحجز أو اسمك عند الوصول إلى المطعم.'
                    : 'Your table is prepared. Present your booking reference or name upon arrival.'}
                </p>
              </div>

              {/* Voucher Card */}
              <div className="max-w-md mx-auto p-6 rounded-2xl bg-stone-950 border-2 border-amber-500/30 shadow-xl space-y-4 text-start">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-mono">
                      {locale === 'pt' ? 'CÓDIGO DE RESERVA' : locale === 'ar' ? 'رمز الحجز' : 'BOOKING REFERENCE'}
                    </span>
                    <span className="font-mono text-lg font-extrabold text-amber-400 tracking-wider">
                      {bookingCode}
                    </span>
                  </div>
                  <div className="text-end">
                    <span className="text-[10px] text-stone-400 uppercase block font-mono">STATUS</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-xs">
                      Confirmed
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[11px]">{locale === 'pt' ? 'Data:' : locale === 'ar' ? 'التاريخ:' : 'Date:'}</span>
                    <span className="font-bold text-white">{reservationDate}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[11px]">{locale === 'pt' ? 'Horário:' : locale === 'ar' ? 'الوقت:' : 'Time:'}</span>
                    <span className="font-bold text-white">{timeSlot}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[11px]">{locale === 'pt' ? 'Pessoas:' : locale === 'ar' ? 'الضيوف:' : 'Guests:'}</span>
                    <span className="font-bold text-white">{partySize} {locale === 'pt' ? 'Pessoas' : locale === 'ar' ? 'أفراد' : 'Guests'}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[11px]">{locale === 'pt' ? 'Ambiente:' : locale === 'ar' ? 'المنطقة:' : 'Area:'}</span>
                    <span className="font-bold text-amber-300">
                      {seatingArea === 'indoor' ? 'Main Dining Room' : seatingArea === 'terrace' ? 'Garden Veranda' : 'Wine Vault'}
                    </span>
                  </div>
                </div>

                {specialRequest && (
                  <div className="pt-2 border-t border-stone-800/80 text-[11px] text-stone-400">
                    <span className="font-semibold text-stone-300">{locale === 'pt' ? 'Nota especial: ' : locale === 'ar' ? 'ملاحظة خاصة: ' : 'Note: '}</span>
                    {specialRequest}
                  </div>
                )}
              </div>

              {/* Disclaimer Notice */}
              <div className="text-[11px] text-stone-400 bg-stone-900/60 p-3 rounded-xl max-w-md mx-auto border border-stone-800">
                ⚠️ {locale === 'pt'
                  ? 'Demonstração Frontend — Este é um fluxo simulado para portfólio da NexaWeb Studio.'
                  : locale === 'ar'
                  ? 'معاينة تجريبية تفاعلية — هذا نموذج محاكاة لواجهة الحجز تم تطويره بواسطة NexaWeb Studio.'
                  : 'Frontend Sales Demo — This is a simulated interactive booking flow designed by NexaWeb Studio.'}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentStep(1);
                    setBookingCode('');
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-colors cursor-pointer"
                >
                  {locale === 'pt' ? 'Nova Reserva de Demonstração' : locale === 'ar' ? 'حجز تجريبي جديد' : 'New Demo Reservation'}
                </button>
                <Link
                  href="/demos/restaurant/menu"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  {locale === 'pt' ? 'Explorar Ementa Completa' : locale === 'ar' ? 'استعراض قائمة الطعام' : 'Explore Menu'}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
