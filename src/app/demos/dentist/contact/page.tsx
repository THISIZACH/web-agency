'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getWhatsAppUrl } from '@/config/contact';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  Car,
  Train,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';

export default function DentistContactPage() {
  const { locale, isRTL } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [appointmentCode, setAppointmentCode] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'cleaning',
    preferredDate: '2026-09-15',
    preferredTime: 'morning',
    notes: '',
  });

  const whatsappUrl = getWhatsAppUrl(locale, 'dentist');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentCode(`NS-${Math.floor(10000 + Math.random() * 90000)}`);
    setSubmitted(true);
  };

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'Contactos & Marcações' : locale === 'ar' ? 'التواصل وحجز المواعيد' : 'Appointments & Location'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {locale === 'pt' ? 'Estamos Prontos Para Cuidar do Seu Sorriso' : locale === 'ar' ? 'نحن هنا لرعايتك والإجابة عن استفساراتك' : 'Book an Appointment or Visit Our Practice'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {locale === 'pt'
              ? 'Localizada no centro de Lisboa com fácil acesso por metro e estacionamento privativo. Marcações online ou por telefone.'
              : locale === 'ar'
              ? 'تقع عيادتنا في موقع استراتيجي مع مواقف سيارات وسهولة وصول عبر المترو. يسعدنا استقبالكم.'
              : 'Centrally located with convenient metro access and patient parking. Reserve online or call directly.'}
          </p>
        </div>

        {/* 2 Column Layout: Details Left, Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Urgent Care Card */}
            <div className="p-6 rounded-3xl bg-amber-500/10 border-2 border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>{locale === 'pt' ? 'Urgência Dentária Imediata' : locale === 'ar' ? 'طوارئ الأسنان العاجلة' : 'Immediate Dental Emergency'}</span>
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                {locale === 'pt' ? 'Dor de Dentes Forte ou Fratura?' : locale === 'ar' ? 'ألم حاد مفاجئ أو كسر بالسن؟' : 'Severe Pain or Chipped Tooth?'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {locale === 'pt'
                  ? 'Dispomos de vagas diárias reservadas para urgências odontológicas com alívio imediato da dor.'
                  : locale === 'ar'
                  ? 'نوفر مواعيد طارئة يومية للحالات العاجلة لتسكين الألم وعلاج المشكلة في نفس اليوم.'
                  : 'We reserve emergency slots daily for acute pain relief, trauma, and immediate care.'}
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{locale === 'pt' ? 'Linha Direta WhatsApp' : locale === 'ar' ? 'خط واتساب السريع' : 'Urgent Care on WhatsApp'}</span>
                </a>
              </div>
            </div>

            {/* Address & Hours */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>{locale === 'pt' ? 'Morada & Horário' : locale === 'ar' ? 'العنوان وأوقات العمل' : 'Location & Hours'}</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Avenida da Liberdade 182, 3º Andar, 1250-142 Lisboa, Portugal
              </p>

              <div className="space-y-2 text-xs border-t border-slate-200 dark:border-slate-800 pt-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">{locale === 'pt' ? 'Segunda - Sexta' : locale === 'ar' ? 'الإثنين - الجمعة' : 'Mon - Fri'}:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">08:30 - 19:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{locale === 'pt' ? 'Sábado' : locale === 'ar' ? 'السبت' : 'Saturday'}:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{locale === 'pt' ? 'Domingo' : locale === 'ar' ? 'الأحد' : 'Sunday'}:</span>
                  <span className="font-semibold text-amber-500">Urgências</span>
                </div>
              </div>
            </div>

            {/* Transit & Parking */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                {locale === 'pt' ? 'Como Chegar' : locale === 'ar' ? 'كيفية الوصول ومواقف السيارات' : 'Transit & Parking'}
              </h4>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Train className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Metro: Avenida (Linha Azul) — a 2 minutos a pé</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Estacionamento subterrâneo Parque Avenida Liberdade</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              {submitted ? (
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div className="space-y-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase">
                      Confirmed
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {locale === 'pt' ? 'Marcação de Consulta Simulada' : locale === 'ar' ? 'تم تسجيل طلب الحجز التجريبي' : 'Appointment Simulation Recorded'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      {locale === 'pt'
                        ? `Obrigado, ${formData.name}. Guarde o código de agendamento ${appointmentCode}.`
                        : locale === 'ar'
                        ? `شكراً لك، ${formData.name}. كود الموعد التجريبي الخاص بك هو ${appointmentCode}.`
                        : `Thank you, ${formData.name}. Your booking reference code is ${appointmentCode}.`}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs text-slate-500 border border-slate-200 dark:border-slate-700 max-w-md mx-auto">
                    ⚠️ {locale === 'pt'
                      ? 'Demonstração de portfólio da NexaWeb Studio. Nenhuma consulta real foi registada na clínica.'
                      : locale === 'ar'
                      ? 'معاينة تجريبية لواجهة الحجز تم تطويرها بواسطة NexaWeb Studio.'
                      : 'Frontend demo for NexaWeb Studio portfolio. No real clinic appointment was transmitted.'}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: 'cleaning',
                        preferredDate: '2026-09-15',
                        preferredTime: 'morning',
                        notes: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-cyan-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-cyan-500 transition-colors"
                  >
                    {locale === 'pt' ? 'Novo Agendamento de Demonstração' : locale === 'ar' ? 'حجز تجريبي جديد' : 'New Demo Booking'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider block">
                      {locale === 'pt' ? 'Marcação Online Rápida' : locale === 'ar' ? 'حجز سريع عبر الموقع' : 'Online Booking Form'}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                      {locale === 'pt' ? 'Agende a Sua Primeira Consulta' : locale === 'ar' ? 'سجل موعد فحص واستشارة' : 'Request Your Consultation'}
                    </h2>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {locale === 'pt' ? 'Nome Completo' : locale === 'ar' ? 'الاسم الكريم' : 'Full Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          {locale === 'pt' ? 'Telemóvel' : locale === 'ar' ? 'رقم الهاتف' : 'Phone'} *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+351 912 345 678"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          {locale === 'pt' ? 'E-mail' : locale === 'ar' ? 'البريد الإلكتروني' : 'Email'} *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="patient@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          {locale === 'pt' ? 'Tratamento Pretendido' : locale === 'ar' ? 'نوع العلاج' : 'Treatment'}
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                        >
                          <option value="cleaning">Dental Cleaning & Check-Up</option>
                          <option value="whitening">Laser Teeth Whitening</option>
                          <option value="implants">Dental Implants</option>
                          <option value="veneers">Porcelain Veneers</option>
                          <option value="ortho">Clear Aligners (Invisalign)</option>
                          <option value="emergency">Urgent Care / Pain</option>
                          <option value="pediatric">Pediatric Dentistry</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          {locale === 'pt' ? 'Data de Preferência' : locale === 'ar' ? 'التاريخ المفضل' : 'Preferred Date'}
                        </label>
                        <input
                          type="date"
                          value={formData.preferredDate}
                          min="2026-09-12"
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {locale === 'pt' ? 'Notas ou Sintomas (Opcional)' : locale === 'ar' ? 'ملاحظات أو أعراض خاصة' : 'Notes or Symptoms'}
                      </label>
                      <textarea
                        rows={3}
                        placeholder={locale === 'pt' ? 'Descreva eventuais dores ou questões prévias...' : locale === 'ar' ? 'اكتب أي تفاصيل حول الألم أو الاستفسارات...' : 'Describe any specific symptoms or questions...'}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-500">
                    ℹ️ {locale === 'pt'
                      ? 'Demonstração Interativa NexaWeb Studio: A sua marcação simulada será gerada instantaneamente no ecrã.'
                      : locale === 'ar'
                      ? 'نموذج محاكاة تجريبي من NexaWeb Studio: سيتم تأكيد حجزك التجريبي فورياً على الشاشة.'
                      : 'NexaWeb Studio Interactive Demo: Your simulated confirmation will be generated immediately.'}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-600/25 cursor-pointer"
                  >
                    {locale === 'pt' ? 'Submeter Pedido de Consulta' : locale === 'ar' ? 'إرسال طلب الحجز' : 'Submit Appointment Request'}
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

