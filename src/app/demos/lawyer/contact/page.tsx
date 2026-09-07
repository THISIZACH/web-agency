'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Shield, MapPin, Phone, Mail, Clock, Lock, Send, CheckCircle2 } from 'lucide-react';

export default function LawyerContactPage() {
  const { locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [matterType, setMatterType] = useState('Corporate & M&A');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0a192f] text-[#fcfbf7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132845] border border-[#c5a880]/30 text-[#c5a880] text-xs font-mono uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'Escritórios & Contacto Confidencial' : locale === 'ar' ? 'المكاتب والتواصل السري' : 'Confidential Inquiries'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase">
            {locale === 'pt' ? 'Contacto & Escritórios' : locale === 'ar' ? 'المكاتب والتواصل' : 'Offices & Contact'}
          </h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto font-light leading-relaxed">
            {locale === 'pt'
              ? 'Atendimento presencial em Londres e Dubai por marcação prévia. Comunicações protegidas por sigilo profissional.'
              : locale === 'ar'
              ? 'نرحب بكم في مكاتبنا بلندن ودبي بالتنسيق المسبق، مع حماية كاملة لكافة المراسلات بسرية تامة.'
              : 'Direct partner contact across our London and Dubai offices. All correspondence is covered by professional legal privilege.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Office Directory (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* London */}
            <div className="p-6 rounded-2xl bg-[#0e213b] border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-[#c5a880] uppercase tracking-widest block">London City (Global Headquarters)</span>
              <h2 className="font-serif text-xl font-bold text-white">100 Bishopsgate</h2>
              <div className="space-y-2 text-xs text-slate-300 font-light">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <span>Level 32, 100 Bishopsgate, London EC2N 4AG</span>
                </p>
                <p className="flex items-center gap-2 font-mono">
                  <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>+44 20 7946 0700</span>
                </p>
                <p className="flex items-center gap-2 font-mono">
                  <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>london@meridianlegal.co.uk</span>
                </p>
              </div>
            </div>

            {/* Dubai */}
            <div className="p-6 rounded-2xl bg-[#0e213b] border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-[#c5a880] uppercase tracking-widest block">Dubai (Middle East Gateway)</span>
              <h2 className="font-serif text-xl font-bold text-white">DIFC Gate Precinct</h2>
              <div className="space-y-2 text-xs text-slate-300 font-light">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <span>Gate Precinct 4, Level 6, DIFC, Dubai, UAE</span>
                </p>
                <p className="flex items-center gap-2 font-mono">
                  <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>+971 4 362 7000</span>
                </p>
                <p className="flex items-center gap-2 font-mono">
                  <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>dubai@meridianlegal.co.uk</span>
                </p>
              </div>
            </div>
          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0e213b] border border-slate-800">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white uppercase">
                    {locale === 'pt' ? 'Comunicação Transmitida' : locale === 'ar' ? 'تم استلام الاستفسار بنجاح' : 'Communication Transmitted'}
                  </h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed font-light">
                    {locale === 'pt'
                      ? 'Obrigado. O secretariado sénior da Meridian Legal procederá à verificação prévia e entrará em contacto dentro de 24 horas úteis.'
                      : locale === 'ar'
                      ? 'شكراً لتواصلك. ستقوم أمانة الشركاء بمراجعة الموضوع والتواصل معك خلال 24 ساعة عمل.'
                      : 'Thank you. The partnership desk will conduct pre-engagement conflict checks and respond within 24 business hours.'}
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-[#c5a880] hover:underline cursor-pointer"
                    >
                      {locale === 'pt' ? 'Enviar outra mensagem' : locale === 'ar' ? 'إرسال رسالة أخرى' : 'Transmit another message'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-white">
                      {locale === 'pt' ? 'Envio de Mensagem Confidencial' : locale === 'ar' ? 'إرسال استفسار سري' : 'Confidential Inquiry'}
                    </h2>
                    <p className="text-xs text-slate-400 mt-1 font-light">
                      {locale === 'pt'
                        ? 'As informações submetidas através deste canal são estritamente confidenciais.'
                        : locale === 'ar'
                        ? 'كافة البيانات المرسلة عبر هذا النموذج محمية بموجب السرية المهنية.'
                        : 'Information submitted through this intake channel is handled under strict professional secrecy.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                        {locale === 'pt' ? 'Nome do Interlocutor' : locale === 'ar' ? 'الاسم' : 'Full Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jonathan Vance"
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
                        placeholder="j.vance@enterprise.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#081528] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                        {locale === 'pt' ? 'Entidade / Empresa' : locale === 'ar' ? 'اسم الشركة أو المؤسسة' : 'Company / Entity'}
                      </label>
                      <input
                        type="text"
                        placeholder="Vance Capital Group"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#081528] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                        {locale === 'pt' ? 'Área da Matéria' : locale === 'ar' ? 'نوع القضية' : 'Matter Area'}
                      </label>
                      <select
                        value={matterType}
                        onChange={(e) => setMatterType(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#081528] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#c5a880]"
                      >
                        <option value="Corporate & M&A">Corporate Law & M&A</option>
                        <option value="Commercial Litigation">Commercial Litigation & Arbitration</option>
                        <option value="Real Estate">Real Estate & Infrastructure</option>
                        <option value="Employment">Executive Employment</option>
                        <option value="Private Wealth">Private Wealth & Family Trust</option>
                        <option value="Intellectual Property">IP & Technology Assets</option>
                        <option value="Immigration">Global Mobility & Visas</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      {locale === 'pt' ? 'Descrição Sumária da Matéria' : locale === 'ar' ? 'ملخص الموضوع' : 'Summary of Matter'} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder={locale === 'pt' ? 'Por favor indique brevemente os objetivos estratégicos ou a jurisdição em causa...' : locale === 'ar' ? 'يرجى تقديم نبذة موجزة عن الموضوع القانوني...' : 'Please indicate transaction scope, timeline constraints, or dispute jurisdiction...'}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#081528] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>

                  <div className="p-3 rounded-lg bg-[#081528] border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                    <span>NexaWeb Studio Demo: Frontend simulation only. No client-attorney relationship is established.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded bg-[#c5a880] hover:bg-[#d8be9a] text-[#0a192f] font-extrabold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c5a880]/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{locale === 'pt' ? 'Transmitir Comunicação Segura' : locale === 'ar' ? 'إرسال الاستفسار' : 'Transmit Secure Briefing'}</span>
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

