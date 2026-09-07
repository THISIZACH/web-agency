'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Scissors, MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function BarbershopContactPage() {
  const { locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Appointment Query');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0d0d0d] text-[#f5f0eb] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono uppercase tracking-widest">
            <Scissors className="w-3.5 h-3.5 -rotate-45" />
            <span>{locale === 'pt' ? 'Atendimento Personalizado' : locale === 'ar' ? 'تواصل معنا' : 'Get in Touch'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase">
            {locale === 'pt' ? 'Localização & Contacto' : locale === 'ar' ? 'الموقع والتواصل' : 'Location & Contact'}
          </h1>
          <p className="text-stone-400 text-sm max-w-xl mx-auto">
            {locale === 'pt'
              ? 'Localizado discretamente no coração de Mayfair. Atendimento exclusivo com marcação prévia.'
              : locale === 'ar'
              ? 'يقع الاستوديو في قلب حي مايفير الراقي بلندن. نرحب بزيارتكم الكريمة بالحجز المسبق.'
              : 'Discreetly nestled in St. James’s, Mayfair. Dedicated bespoke chair appointments available six days a week.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-[#141414] border border-stone-800 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-white uppercase">
                {locale === 'pt' ? 'O Estúdio Mayfair' : locale === 'ar' ? 'استوديو مايفير' : 'Mayfair Studio'}
              </h2>

              <div className="space-y-4 text-xs text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">{locale === 'pt' ? 'Endereço:' : locale === 'ar' ? 'العنوان:' : 'Address:'}</span>
                    <p>42 St. James&apos;s Place</p>
                    <p>Mayfair, London SW1A 1NP</p>
                    <span className="text-[11px] text-stone-500 font-mono mt-1 block">Green Park Underground (3 min walk)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-stone-800 pt-4">
                  <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">{locale === 'pt' ? 'Horário de Abertura:' : locale === 'ar' ? 'ساعات العمل:' : 'Opening Hours:'}</span>
                    <p>Mon – Fri: 09:00 – 20:00</p>
                    <p>Saturday: 09:00 – 19:00</p>
                    <p className="text-[#d4af37] pt-0.5">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-stone-800 pt-4">
                  <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">{locale === 'pt' ? 'Telefone do Estúdio:' : locale === 'ar' ? 'رقم الهاتف:' : 'Telephone:'}</span>
                    <p className="font-mono text-white">+44 20 7946 0888</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-stone-800 pt-4">
                  <Mail className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">{locale === 'pt' ? 'Correio Eletrónico:' : locale === 'ar' ? 'البريد الإلكتروني:' : 'Direct Desk:'}</span>
                    <p className="font-mono text-white">concierge@northblade.co.uk</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/351912345678?text=Hello%20North%20%26%20Blade%20Barber%20Studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-mono uppercase font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#141414] border border-stone-800">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white uppercase">
                    {locale === 'pt' ? 'Mensagem Recebida' : locale === 'ar' ? 'تم استلام رسالتك' : 'Inquiry Received'}
                  </h3>
                  <p className="text-xs text-stone-400 max-w-sm mx-auto leading-relaxed">
                    {locale === 'pt'
                      ? 'Obrigado pelo seu contacto. A equipa de recepção da North & Blade responderá no prazo de 2 horas úteis.'
                      : locale === 'ar'
                      ? 'شكراً لتواصلك معنا. سيقوم فريق الاستقبال بالرد عليك خلال ساعتي عمل.'
                      : 'Thank you for your message. The North & Blade desk will respond within two business hours.'}
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-[#d4af37] hover:underline cursor-pointer"
                    >
                      {locale === 'pt' ? 'Enviar outra mensagem' : locale === 'ar' ? 'إرسال رسالة أخرى' : 'Send another inquiry'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-white uppercase">
                      {locale === 'pt' ? 'Envie uma Mensagem ao Estúdio' : locale === 'ar' ? 'أرسل استفسارك للاستوديو' : 'Send an Inquiry'}
                    </h2>
                    <p className="text-xs text-stone-400 mt-1">
                      {locale === 'pt'
                        ? 'Dúvidas sobre tratamentos especiais, eventos privados ou marcações para grupos.'
                        : locale === 'ar'
                        ? 'للاستفسار عن الخدمات الخاصة، الفعاليات الحصرية أو حجوزات المجموعات.'
                        : 'For inquiries regarding private studio hire, wedding morning party grooming, or tailored treatments.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-stone-400 mb-1">
                        {locale === 'pt' ? 'Nome Completo' : locale === 'ar' ? 'الاسم' : 'Full Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="James Wilson"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-stone-400 mb-1">
                        {locale === 'pt' ? 'E-mail de Contacto' : locale === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="j.wilson@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-stone-400 mb-1">
                      {locale === 'pt' ? 'Assunto' : locale === 'ar' ? 'الموضوع' : 'Subject'}
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="Appointment Query">Appointment & Booking Query</option>
                      <option value="Wedding Grooming">Wedding Party Grooming Package</option>
                      <option value="Membership">Gentleman Membership Inquiry</option>
                      <option value="Other">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-stone-400 mb-1">
                      {locale === 'pt' ? 'Mensagem' : locale === 'ar' ? 'نص الرسالة' : 'Message'} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder={locale === 'pt' ? 'Descreva a sua solicitação...' : locale === 'ar' ? 'اكتب استفسارك هنا...' : 'How may our concierge assist you?'}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 text-[11px] text-stone-400 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>NexaWeb Studio Demo: Frontend simulation only.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded bg-[#d4af37] hover:bg-[#e5c158] text-[#0d0d0d] font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{locale === 'pt' ? 'Enviar Mensagem' : locale === 'ar' ? 'إرسال الرسالة' : 'Send Message'}</span>
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

