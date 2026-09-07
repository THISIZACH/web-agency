'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { BARBER_SERVICES, MASTER_BARBERS } from '@/config/barberData';
import {
  Scissors,
  Calendar as CalendarIcon,
  Clock,
  User,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Download,
  MessageCircle,
  Sparkles,
} from 'lucide-react';

export default function BarbershopBookingPage() {
  const { locale, isRTL } = useLanguage();
  const searchParams = useSearchParams();

  // 6 Steps: 1: Service, 2: Barber, 3: Date, 4: Time, 5: Details, 6: Confirmation
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [selectedServiceId, setSelectedServiceId] = useState<string>(BARBER_SERVICES[0].id);
  const [selectedBarberId, setSelectedBarberId] = useState<string>(MASTER_BARBERS[0].id);
  const [selectedDate, setSelectedDate] = useState<string>('2026-09-12');
  const [selectedTime, setSelectedTime] = useState<string>('11:00');

  // Customer Details
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  const [confirmationCode, setConfirmationCode] = useState('');

  useEffect(() => {
    const s = searchParams.get('service');
    if (s && BARBER_SERVICES.some(item => item.id === s)) {
      setSelectedServiceId(s);
    }
    const b = searchParams.get('barber');
    if (b && MASTER_BARBERS.some(item => item.id === b)) {
      setSelectedBarberId(b);
    }
  }, [searchParams]);

  const selectedService = BARBER_SERVICES.find(s => s.id === selectedServiceId) || BARBER_SERVICES[0];
  const selectedBarber = MASTER_BARBERS.find(b => b.id === selectedBarberId) || MASTER_BARBERS[0];

  const quickDates = [
    { label: locale === 'pt' ? 'Hoje' : locale === 'ar' ? 'اليوم' : 'Today', date: '2026-09-12' },
    { label: locale === 'pt' ? 'Amanhã' : locale === 'ar' ? 'غداً' : 'Tomorrow', date: '2026-09-13' },
    { label: locale === 'pt' ? 'Sexta-feira' : locale === 'ar' ? 'الجمعة' : 'Friday', date: '2026-09-18' },
    { label: locale === 'pt' ? 'Sábado' : locale === 'ar' ? 'السبت' : 'Saturday', date: '2026-09-19' },
  ];

  const morningSlots = ['09:30', '10:15', '11:00', '11:45'];
  const afternoonSlots = ['13:30', '14:15', '15:00', '16:00', '16:45'];
  const eveningSlots = ['17:30', '18:15', '19:00'];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `NB-${Math.floor(10000 + Math.random() * 90000)}`;
    setConfirmationCode(code);
    setCurrentStep(6);
  };

  const handleDownloadCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//North & Blade Barber Studio//Appointment//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${selectedService.name.en} with ${selectedBarber.name}`,
      `DESCRIPTION:Appointment at North & Blade Mayfair London SW1A 1NP. Reference: ${confirmationCode}`,
      `LOCATION:42 St. James's Place, Mayfair, London`,
      `DTSTART:${selectedDate.replace(/-/g, '')}T${selectedTime.replace(':', '')}00Z`,
      `DTEND:${selectedDate.replace(/-/g, '')}T${(parseInt(selectedTime.split(':')[0]) + 1).toString().padStart(2, '0')}${selectedTime.split(':')[1]}00Z`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `NorthAndBlade-${confirmationCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stepsHeader = [
    { num: 1, label: locale === 'pt' ? 'Serviço' : locale === 'ar' ? 'الخدمة' : 'Service' },
    { num: 2, label: locale === 'pt' ? 'Barbeiro' : locale === 'ar' ? 'الحلاق' : 'Barber' },
    { num: 3, label: locale === 'pt' ? 'Data' : locale === 'ar' ? 'التاريخ' : 'Date' },
    { num: 4, label: locale === 'pt' ? 'Horário' : locale === 'ar' ? 'الوقت' : 'Time' },
    { num: 5, label: locale === 'pt' ? 'Dados' : locale === 'ar' ? 'بياناتك' : 'Details' },
  ];

  return (
    <div className="bg-[#0d0d0d] text-[#f5f0eb] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono uppercase tracking-widest">
            <Scissors className="w-3.5 h-3.5 -rotate-45" />
            <span>{locale === 'pt' ? 'Agendamento em 6 Passos' : locale === 'ar' ? 'حجز الموعد في 6 خطوات' : 'Bespoke Chair Booking'}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white uppercase">
            {locale === 'pt' ? 'Marque a Sua Cadeira' : locale === 'ar' ? 'احجز موعدك الآن' : 'Reserve Your Chair'}
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm">
            {locale === 'pt'
              ? 'Atendimento pontual e dedicado. Por favor, reserve cerca de 45 a 75 minutos para a sua experiência.'
              : locale === 'ar'
              ? 'مواعيد دقيقة بدون أي انتظار. يرجى تخصيص 45 إلى 75 دقيقة للاستمتاع بالجلسة كاملة.'
              : 'Punctual, dedicated chair service. Please allow 45 to 75 minutes for your full ritual.'}
          </p>
        </div>

        {/* Step Progress Indicators (Steps 1 to 5) */}
        {currentStep <= 5 && (
          <div className="flex items-center justify-between border-b border-stone-800 pb-4 overflow-x-auto no-scrollbar gap-2">
            {stepsHeader.map((st) => (
              <div
                key={st.num}
                className={`flex items-center gap-2 shrink-0 ${
                  currentStep === st.num
                    ? 'text-[#d4af37]'
                    : currentStep > st.num
                    ? 'text-white'
                    : 'text-stone-600'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold border transition-all ${
                    currentStep === st.num
                      ? 'bg-[#d4af37] text-black border-[#d4af37]'
                      : currentStep > st.num
                      ? 'bg-stone-800 text-[#d4af37] border-stone-700'
                      : 'bg-stone-900 text-stone-600 border-stone-800'
                  }`}
                >
                  {currentStep > st.num ? '✓' : st.num}
                </div>
                <span className="text-xs uppercase font-mono font-semibold hidden sm:inline">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Step Container Card */}
        <div className="rounded-2xl bg-[#141414] border border-stone-800 p-6 sm:p-10 shadow-xl">
          {/* STEP 1: SELECT SERVICE */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="border-b border-stone-800 pb-4">
                <span className="text-[#d4af37] text-xs font-mono uppercase tracking-wider block">
                  {locale === 'pt' ? 'Passo 1 de 6' : locale === 'ar' ? 'الخطوة 1 من 6' : 'Step 1 of 6'}
                </span>
                <h2 className="font-serif text-2xl font-bold text-white mt-1 uppercase">
                  {locale === 'pt' ? 'Selecione o Serviço Desejado' : locale === 'ar' ? 'اختر الخدمة المطلوبة' : 'Choose Your Service'}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BARBER_SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedServiceId(s.id)}
                    className={`p-4 rounded-xl border text-left rtl:text-right transition-all flex flex-col justify-between space-y-2 cursor-pointer ${
                      selectedServiceId === s.id
                        ? 'bg-[#1c1a14] border-[#d4af37] shadow-lg shadow-[#d4af37]/10'
                        : 'bg-[#181818] border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-sm font-bold text-white">{s.name[locale]}</h3>
                        <span className="font-mono text-sm font-bold text-[#d4af37]">{s.price[locale]}</span>
                      </div>
                      <p className="text-[11px] text-stone-400 mt-1 line-clamp-2">{s.desc[locale]}</p>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 pt-2 border-t border-stone-800/80">
                      <span>{s.duration}</span>
                      <span className="text-[#d4af37] font-semibold">{s.category}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-8 py-3.5 rounded bg-[#d4af37] hover:bg-[#e5c158] text-[#0d0d0d] font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-md shadow-[#d4af37]/20 cursor-pointer"
                >
                  <span>{locale === 'pt' ? 'Continuar: Escolher Barbeiro' : locale === 'ar' ? 'التالي: اختيار الحلاق' : 'Next: Choose Barber'}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: SELECT BARBER */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="border-b border-stone-800 pb-4">
                <span className="text-[#d4af37] text-xs font-mono uppercase tracking-wider block">
                  {locale === 'pt' ? 'Passo 2 de 6' : locale === 'ar' ? 'الخطوة 2 من 6' : 'Step 2 of 6'}
                </span>
                <h2 className="font-serif text-2xl font-bold text-white mt-1 uppercase">
                  {locale === 'pt' ? 'Selecione o Seu Mestre Barbeiro' : locale === 'ar' ? 'اختر الحلاق المفضل لديك' : 'Select Master Barber'}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MASTER_BARBERS.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setSelectedBarberId(b.id)}
                    className={`p-4 rounded-xl border text-left rtl:text-right transition-all flex gap-4 items-center cursor-pointer ${
                      selectedBarberId === b.id
                        ? 'bg-[#1c1a14] border-[#d4af37] shadow-lg shadow-[#d4af37]/10'
                        : 'bg-[#181818] border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-stone-900 shrink-0">
                      <Image src={b.image} alt={b.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 space-y-0.5">
                      <h3 className="font-serif text-sm font-bold text-white">{b.name}</h3>
                      <p className="text-[11px] text-[#d4af37] font-mono">{b.role[locale]}</p>
                      <p className="text-[10px] text-stone-400 line-clamp-1">{b.specialty[locale]}</p>
                      <span className="text-[9px] font-mono text-stone-500 block">{b.experience} Experience</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-2.5 rounded text-xs font-mono uppercase text-stone-400 hover:text-white flex items-center gap-2 cursor-pointer"
                >
                  <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  <span>{locale === 'pt' ? 'Voltar' : locale === 'ar' ? 'السابق' : 'Back'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="px-8 py-3.5 rounded bg-[#d4af37] hover:bg-[#e5c158] text-[#0d0d0d] font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-md shadow-[#d4af37]/20 cursor-pointer"
                >
                  <span>{locale === 'pt' ? 'Continuar: Escolher Data' : locale === 'ar' ? 'التالي: اختيار التاريخ' : 'Next: Choose Date'}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SELECT DATE */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="border-b border-stone-800 pb-4">
                <span className="text-[#d4af37] text-xs font-mono uppercase tracking-wider block">
                  {locale === 'pt' ? 'Passo 3 de 6' : locale === 'ar' ? 'الخطوة 3 من 6' : 'Step 3 of 6'}
                </span>
                <h2 className="font-serif text-2xl font-bold text-white mt-1 uppercase">
                  {locale === 'pt' ? 'Escolha o Dia do Atendimento' : locale === 'ar' ? 'حدد يوم الموعد' : 'Select Appointment Date'}
                </h2>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-mono uppercase text-stone-400 block">
                  {locale === 'pt' ? 'Sugestões Rápidas' : locale === 'ar' ? 'مواعيد سريعة' : 'Quick Presets'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {quickDates.map((q) => (
                    <button
                      key={q.date}
                      type="button"
                      onClick={() => setSelectedDate(q.date)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedDate === q.date
                          ? 'bg-[#d4af37] text-black border-[#d4af37] font-bold'
                          : 'bg-[#181818] text-stone-300 border-stone-800 hover:bg-stone-800'
                      }`}
                    >
                      <span className="text-[10px] font-mono block opacity-75">{q.date}</span>
                      <span className="text-xs font-semibold">{q.label}</span>
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <label className="text-xs font-mono uppercase text-stone-400 block mb-2">
                    {locale === 'pt' ? 'Ou escolha outra data no calendário:' : locale === 'ar' ? 'أو اختر يوماً آخر من التقويم:' : 'Or choose specific calendar date:'}
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    min="2026-09-12"
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-2.5 rounded text-xs font-mono uppercase text-stone-400 hover:text-white flex items-center gap-2 cursor-pointer"
                >
                  <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  <span>{locale === 'pt' ? 'Voltar' : locale === 'ar' ? 'السابق' : 'Back'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="px-8 py-3.5 rounded bg-[#d4af37] hover:bg-[#e5c158] text-[#0d0d0d] font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-md shadow-[#d4af37]/20 cursor-pointer"
                >
                  <span>{locale === 'pt' ? 'Continuar: Escolher Horário' : locale === 'ar' ? 'التالي: اختيار الوقت' : 'Next: Choose Time'}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: SELECT TIME */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="border-b border-stone-800 pb-4">
                <span className="text-[#d4af37] text-xs font-mono uppercase tracking-wider block">
                  {locale === 'pt' ? 'Passo 4 de 6' : locale === 'ar' ? 'الخطوة 4 من 6' : 'Step 4 of 6'}
                </span>
                <h2 className="font-serif text-2xl font-bold text-white mt-1 uppercase">
                  {locale === 'pt' ? 'Selecione o Horário' : locale === 'ar' ? 'حدد وقت الحلاقة' : 'Select Seating Time'}
                </h2>
                <p className="text-xs text-stone-400 mt-1">
                  {selectedDate} • {selectedBarber.name} • {selectedService.name[locale]}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-[#d4af37] uppercase block mb-2">
                    {locale === 'pt' ? 'Manhã (09:00 - 12:30)' : locale === 'ar' ? 'الفترة الصباحية' : 'Morning'}
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {morningSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2.5 rounded text-xs font-mono border transition-all cursor-pointer ${
                          selectedTime === time
                            ? 'bg-[#d4af37] text-black border-[#d4af37] font-bold shadow-md shadow-[#d4af37]/20'
                            : 'bg-[#181818] text-stone-300 border-stone-800 hover:bg-stone-800'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#d4af37] uppercase block mb-2">
                    {locale === 'pt' ? 'Tarde (13:30 - 17:00)' : locale === 'ar' ? 'فترة الظهيرة' : 'Afternoon'}
                  </span>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {afternoonSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2.5 rounded text-xs font-mono border transition-all cursor-pointer ${
                          selectedTime === time
                            ? 'bg-[#d4af37] text-black border-[#d4af37] font-bold shadow-md shadow-[#d4af37]/20'
                            : 'bg-[#181818] text-stone-300 border-stone-800 hover:bg-stone-800'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#d4af37] uppercase block mb-2">
                    {locale === 'pt' ? 'Fim de Tarde (17:30 - 19:30)' : locale === 'ar' ? 'فترة المساء' : 'Evening'}
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {eveningSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2.5 rounded text-xs font-mono border transition-all cursor-pointer ${
                          selectedTime === time
                            ? 'bg-[#d4af37] text-black border-[#d4af37] font-bold shadow-md shadow-[#d4af37]/20'
                            : 'bg-[#181818] text-stone-300 border-stone-800 hover:bg-stone-800'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-2.5 rounded text-xs font-mono uppercase text-stone-400 hover:text-white flex items-center gap-2 cursor-pointer"
                >
                  <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  <span>{locale === 'pt' ? 'Voltar' : locale === 'ar' ? 'السابق' : 'Back'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(5)}
                  className="px-8 py-3.5 rounded bg-[#d4af37] hover:bg-[#e5c158] text-[#0d0d0d] font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-md shadow-[#d4af37]/20 cursor-pointer"
                >
                  <span>{locale === 'pt' ? 'Continuar: Seus Dados' : locale === 'ar' ? 'التالي: بيانات العميل' : 'Next: Your Details'}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: CUSTOMER DETAILS */}
          {currentStep === 5 && (
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div className="border-b border-stone-800 pb-4">
                <span className="text-[#d4af37] text-xs font-mono uppercase tracking-wider block">
                  {locale === 'pt' ? 'Passo 5 de 6' : locale === 'ar' ? 'الخطوة 5 من 6' : 'Step 5 of 6'}
                </span>
                <h2 className="font-serif text-2xl font-bold text-white mt-1 uppercase">
                  {locale === 'pt' ? 'Dados do Cliente' : locale === 'ar' ? 'بيانات العميل' : 'Gentleman Details'}
                </h2>
                <div className="p-3 rounded-lg bg-[#1a1a1a] border border-stone-800 mt-2 text-xs flex justify-between items-center text-stone-300">
                  <span>{selectedService.name[locale]} • {selectedBarber.name}</span>
                  <span className="font-mono text-[#d4af37] font-bold">{selectedDate} às {selectedTime}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-stone-400 mb-1">
                    {locale === 'pt' ? 'Nome Completo' : locale === 'ar' ? 'الاسم الكامل' : 'Full Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={locale === 'pt' ? 'Ex: Tiago Silva' : locale === 'ar' ? 'مثال: خالد المنصور' : 'e.g. James Wilson'}
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-stone-400 mb-1">
                    {locale === 'pt' ? 'Telemóvel / WhatsApp' : locale === 'ar' ? 'رقم الهاتف' : 'Phone / WhatsApp'} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 7911 123456"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-stone-400 mb-1">
                  {locale === 'pt' ? 'E-mail para Confirmação' : locale === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} *
                </label>
                <input
                  type="email"
                  required
                  placeholder="gentleman@example.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-stone-400 mb-1">
                  {locale === 'pt' ? 'Notas de Estilo ou Preferências (Opcional)' : locale === 'ar' ? 'ملاحظات أو تفضيلات خاصة (اختياري)' : 'Style Notes or Hair Preferences (Optional)'}
                </label>
                <textarea
                  rows={2}
                  placeholder={locale === 'pt' ? 'Ex: Primeira vez no estúdio, preferência por acabamento mate com tesoura...' : locale === 'ar' ? 'مثال: الزيارة الأولى، تفضيل لمظهر طبيعي بدون لميع...' : 'e.g. First visit, sensitive skin on neck, prefer natural matte finish...'}
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 flex items-center gap-2.5 text-xs text-stone-400">
                <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>
                  {locale === 'pt'
                    ? 'Demonstração Interativa NexaWeb Studio: A sua confirmação de marcação será gerada de imediato no próximo passo.'
                    : locale === 'ar'
                    ? 'نموذج محاكاة تفاعلي من NexaWeb Studio: سيتم إنشاء بطاقة تأكيد الحجز فوراً أمامك.'
                    : 'Interactive NexaWeb Studio Demo: Your simulation confirmation pass will generate immediately on the next step.'}
                </span>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="px-6 py-2.5 rounded text-xs font-mono uppercase text-stone-400 hover:text-white flex items-center gap-2 cursor-pointer"
                >
                  <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  <span>{locale === 'pt' ? 'Voltar' : locale === 'ar' ? 'السابق' : 'Back'}</span>
                </button>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded bg-[#d4af37] hover:bg-[#e5c158] text-[#0d0d0d] font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-[#d4af37]/25 hover:scale-105 cursor-pointer"
                >
                  <Scissors className="w-4 h-4 -rotate-45" />
                  <span>{locale === 'pt' ? 'Confirmar Agendamento' : locale === 'ar' ? 'تأكيد حجز الموعد' : 'Confirm Chair Booking'}</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 6: CONFIRMATION STATE */}
          {currentStep === 6 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#d4af37] tracking-widest block">
                  {locale === 'pt' ? 'Agendamento Confirmado com Sucesso' : locale === 'ar' ? 'تم تأكيد الموعد بنجاح' : 'Chair Reserved Successfully'}
                </span>
                <h2 className="font-serif text-3xl font-bold text-white uppercase">
                  {locale === 'pt' ? 'Esperamos por Si na North & Blade' : locale === 'ar' ? 'نتطلع لاستقبالك في الصالون' : 'We Await You in Mayfair'}
                </h2>
                <div className="inline-block mt-2 px-4 py-1.5 rounded-full bg-stone-900 border border-[#d4af37]/40 text-[#d4af37] font-mono text-sm font-bold">
                  {locale === 'pt' ? 'Código da Marcação:' : locale === 'ar' ? 'رمز الحجز:' : 'Ref Code:'} {confirmationCode}
                </div>
              </div>

              {/* Summary Ticket */}
              <div className="max-w-md mx-auto p-6 rounded-xl bg-[#1a1a1a] border border-stone-800 text-left rtl:text-right space-y-3 text-xs">
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-400">{locale === 'pt' ? 'Cliente:' : locale === 'ar' ? 'العميل:' : 'Gentleman:'}</span>
                  <span className="text-white font-bold">{customerName || 'James Wilson'}</span>
                </div>
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-400">{locale === 'pt' ? 'Serviço:' : locale === 'ar' ? 'الخدمة:' : 'Service:'}</span>
                  <span className="text-white font-bold">{selectedService.name[locale]}</span>
                </div>
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-400">{locale === 'pt' ? 'Mestre Barbeiro:' : locale === 'ar' ? 'الحلاق:' : 'Master Barber:'}</span>
                  <span className="text-[#d4af37] font-bold">{selectedBarber.name}</span>
                </div>
                <div className="flex justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-400">{locale === 'pt' ? 'Data & Horário:' : locale === 'ar' ? 'التاريخ والوقت:' : 'Date & Time:'}</span>
                  <span className="text-white font-mono font-bold">{selectedDate} às {selectedTime}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-stone-400">{locale === 'pt' ? 'Valor Previsto:' : locale === 'ar' ? 'السعر المقدر:' : 'Estimated Price:'}</span>
                  <span className="text-[#d4af37] font-mono font-bold text-sm">{selectedService.price[locale]}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleDownloadCalendar}
                  className="w-full sm:w-auto px-6 py-3 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono uppercase flex items-center justify-center gap-2 border border-stone-700 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{locale === 'pt' ? 'Adicionar ao Calendário (.ics)' : locale === 'ar' ? 'إضافة للتقويم (.ics)' : 'Add to Calendar (.ics)'}</span>
                </button>
                <a
                  href={`https://wa.me/351912345678?text=${encodeURIComponent(`North & Blade Appointment: ${confirmationCode} - ${selectedService.name.en} on ${selectedDate} at ${selectedTime}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-mono uppercase font-bold flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{locale === 'pt' ? 'Enviar Para o WhatsApp' : locale === 'ar' ? 'إرسال عبر واتساب' : 'WhatsApp Pass'}</span>
                </a>
              </div>

              {/* Simulation Disclaimer Alert */}
              <div className="max-w-md mx-auto p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-300">
                ⚠️ {locale === 'pt'
                  ? 'Nota: Esta é uma demonstração interativa de frontend desenvolvida pela NexaWeb Studio. Nenhuma marcação real foi criada em barbearias comerciais.'
                  : locale === 'ar'
                  ? 'ملاحظة: هذا نموذج محاكاة تجريبي تفاعلي مطور بواسطة NexaWeb Studio، ولا يمثل حجزاً فعلياً في صالون تجاري حقيقي.'
                  : 'Notice: This is an interactive frontend demonstration built by NexaWeb Studio. No real commercial barbershop booking has been filed.'}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="text-xs font-mono text-stone-400 hover:text-white underline cursor-pointer"
                >
                  {locale === 'pt' ? 'Fazer outro agendamento de teste' : locale === 'ar' ? 'إجراء حجز تجريبي آخر' : 'Start another simulation booking'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

