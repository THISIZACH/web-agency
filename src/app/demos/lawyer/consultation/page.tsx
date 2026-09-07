'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { LAWYER_PRACTICE_AREAS } from '@/config/lawyerData';
import {
  Shield,
  Lock,
  Calendar as CalendarIcon,
  Clock,
  Phone,
  Mail,
  Video,
  CheckCircle2,
  Download,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export default function LawyerConsultationPage() {
  const { locale, isRTL } = useLanguage();

  const [submitted, setSubmitted] = useState(false);
  const [matterCode, setMatterCode] = useState('');

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [matterType, setMatterType] = useState('Corporate Law & Governance');
  const [preferredMethod, setPreferredMethod] = useState<'video' | 'london' | 'dubai' | 'phone'>('video');
  const [preferredDate, setPreferredDate] = useState('2026-09-15');
  const [preferredTime, setPreferredTime] = useState('14:00');
  const [description, setDescription] = useState('');

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `ML-${Math.floor(10000 + Math.random() * 90000)}`;
    setMatterCode(code);
    setSubmitted(true);
  };

  const handleDownloadCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Meridian Legal Partners//Consultation//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Meridian Legal Consultation - ${matterType}`,
      `DESCRIPTION:Confidential briefing on ${matterType}. Reference: ${matterCode}. Method: ${preferredMethod}`,
      `LOCATION:Meridian Legal Partners (London/DIFC/Video)`,
      `DTSTART:${preferredDate.replace(/-/g, '')}T${preferredTime.replace(':', '')}00Z`,
      `DTEND:${preferredDate.replace(/-/g, '')}T${(parseInt(preferredTime.split(':')[0]) + 1).toString().padStart(2, '0')}${preferredTime.split(':')[1]}00Z`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `MeridianConsultation-${matterCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#0a192f] text-[#fcfbf7] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132845] border border-[#c5a880]/30 text-[#c5a880] text-xs font-mono uppercase tracking-widest">
            <Lock className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'Consulta Formal Privilegiada' : locale === 'ar' ? 'استشارة قانونية سرية ومحمية' : 'Privileged Intake Consultation'}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight">
            {locale === 'pt' ? 'Solicitação de Consulta' : locale === 'ar' ? 'طلب استشارة قانونية' : 'Consultation Briefing'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
            {locale === 'pt'
              ? 'Inicie o diálogo estratégico com os sócios da Meridian Legal. Verificação prévia de conflitos de interesse assegurada.'
              : locale === 'ar'
              ? 'ابدأ المحادثة الاستراتيجية مع كبار شركائنا. نضمن التدقيق المسبق لتعارض المصالح والسرية التامة.'
              : 'Commence confidential engagement with our senior partners. Pre-engagement conflicts screening executed prior to intake.'}
          </p>
        </div>

        {submitted ? (
          /* Confirmation Screen */
          <div className="p-8 sm:p-12 rounded-2xl bg-[#0e213b] border border-slate-800 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#c5a880] tracking-widest block">
                {locale === 'pt' ? 'Briefing Preliminar Agendado' : locale === 'ar' ? 'تم تسجيل طلب الاستشارة بنجاح' : 'Consultation Scheduled'}
              </span>
              <h2 className="font-serif text-3xl font-bold text-white uppercase">
                {locale === 'pt' ? 'Solicitação de Consulta Recebida' : locale === 'ar' ? 'تم استلام بيانات الاستشارة' : 'Intake Transmitted to Partnership'}
              </h2>
              <div className="inline-block mt-2 px-4 py-1.5 rounded-full bg-[#081528] border border-[#c5a880]/40 text-[#c5a880] font-mono text-sm font-bold">
                Matter Ref: {matterCode}
              </div>
            </div>

            {/* Receipt Summary */}
            <div className="max-w-md mx-auto p-6 rounded-xl bg-[#081528] border border-slate-800 text-left rtl:text-right space-y-2.5 text-xs">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Client / Interlocutor:</span>
                <span className="text-white font-bold">{name}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Matter Discipline:</span>
                <span className="text-[#c5a880] font-bold">{matterType}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Format:</span>
                <span className="text-white font-mono uppercase">{preferredMethod}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Preferred Date & Time:</span>
                <span className="text-white font-mono">{preferredDate} at {preferredTime}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleDownloadCalendar}
                className="w-full sm:w-auto px-6 py-3 rounded bg-[#10243e] hover:bg-[#152e4f] text-slate-200 text-xs font-mono uppercase flex items-center justify-center gap-2 border border-slate-700 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Add to Calendar (.ics)</span>
              </button>
              <a
                href={`https://wa.me/351912345678?text=${encodeURIComponent(`Meridian Legal Consultation Briefing: ${matterCode} - ${matterType} on ${preferredDate}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-mono uppercase font-bold flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Partner Desk</span>
              </a>
            </div>

            {/* Clear Simulation Notice */}
            <div className="max-w-md mx-auto p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-300 leading-relaxed">
              ⚠️ <span className="font-bold">{locale === 'pt' ? 'Demonstração Interativa:' : locale === 'ar' ? 'نموذج محاكاة تجريبي:' : 'Interactive Demo Simulation:'}</span>{' '}
              {locale === 'pt'
                ? 'Esta página é uma demonstração de frontend desenvolvida pela NexaWeb Studio. Nenhuma relação advogado-cliente formal é criada.'
                : locale === 'ar'
                ? 'هذه الصفحة هي نموذج محاكاة تجريبي تفاعلي مقدم من NexaWeb Studio. لا يتم إنشاء علاقة وكالة قانونية رسمية.'
                : 'This page is an interactive frontend demonstration engineered by NexaWeb Studio. No formal attorney-client fiduciary relationship is established.'}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-mono text-[#c5a880] hover:underline cursor-pointer"
              >
                Start another consultation briefing simulation
              </button>
            </div>
          </div>
        ) : (
          /* Intake Form */
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0e213b] border border-slate-800">
            <form onSubmit={handleConsultationSubmit} className="space-y-6">
              {/* Row 1: Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    {locale === 'pt' ? 'Nome do Interlocutor' : locale === 'ar' ? 'الاسم الكامل' : 'Full Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sir Arthur Sterling"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#081528] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    {locale === 'pt' ? 'E-mail Corporativo' : locale === 'ar' ? 'البريد الإلكتروني' : 'Corporate Email'} *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="a.sterling@capital.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#081528] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    {locale === 'pt' ? 'Telefone de Contacto Direto' : locale === 'ar' ? 'رقم الهاتف' : 'Direct Telephone'} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 20 7946 0899"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#081528] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    {locale === 'pt' ? 'Entidade / Sociedade' : locale === 'ar' ? 'الشركة أو المؤسسة' : 'Company / Family Office'}
                  </label>
                  <input
                    type="text"
                    placeholder="Sterling Holdings plc"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#081528] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
              </div>

              {/* Row 3: Matter Type & Preferred Format */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    {locale === 'pt' ? 'Área da Matéria' : locale === 'ar' ? 'نوع التخصص' : 'Matter Area'} *
                  </label>
                  <select
                    value={matterType}
                    onChange={(e) => setMatterType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#081528] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#c5a880]"
                  >
                    {LAWYER_PRACTICE_AREAS.map((p) => (
                      <option key={p.id} value={p.title.en}>
                        {p.title[locale]}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    {locale === 'pt' ? 'Método de Reunião Preferencial' : locale === 'ar' ? 'طريقة اللقاء المفضلة' : 'Preferred Meeting Method'}
                  </label>
                  <select
                    value={preferredMethod}
                    onChange={(e) => setPreferredMethod(e.target.value as any)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#081528] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="video">Encrypted Video Conference</option>
                    <option value="london">In-Person: London City (Bishopsgate)</option>
                    <option value="dubai">In-Person: Dubai DIFC</option>
                    <option value="phone">Direct Telephone Conference</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1 flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>{locale === 'pt' ? 'Data de Preferência' : locale === 'ar' ? 'التاريخ المفضل' : 'Preferred Date'}</span>
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    min="2026-09-12"
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#081528] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>{locale === 'pt' ? 'Horário de Preferência' : locale === 'ar' ? 'الوقت المفضل' : 'Preferred Time (CET / GMT)'}</span>
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#081528] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="10:00">10:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:30">03:30 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  {locale === 'pt' ? 'Descrição Sumária & Objetivos Estratégicos' : locale === 'ar' ? 'وصف موجز للموضوع والأهداف' : 'Brief Description of Legal Matter'} *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={locale === 'pt' ? 'Descreva o contexto da operação ou litígio, partes envolvidas e prazos críticos...' : locale === 'ar' ? 'يرجى توضيح سياق الموضوع، الأطراف المعنية والمواعيد المحددة...' : 'Outline the transaction framework, counterparties, multi-jurisdictional reach, or critical milestones...'}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#081528] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              {/* Disclaimer notice */}
              <div className="p-3.5 rounded-xl bg-[#081528] border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>
                  {locale === 'pt'
                    ? 'Submissão estritamente confidencial. Demonstração interativa desenvolvida pela NexaWeb Studio.'
                    : locale === 'ar'
                    ? 'بياناتك سرية تماماً. هذا نموذج محاكاة تفاعلي مقدم من NexaWeb Studio.'
                    : 'Confidential transmission. Interactive frontend demonstration engineered by NexaWeb Studio.'}
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded bg-[#c5a880] hover:bg-[#d8be9a] text-[#0a192f] font-extrabold text-xs uppercase tracking-widest transition-all shadow-xl shadow-[#c5a880]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Shield className="w-4 h-4" />
                <span>{locale === 'pt' ? 'Submeter Pedido de Consulta' : locale === 'ar' ? 'تأكيد طلب الاستشارة' : 'Submit Consultation Request'}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

