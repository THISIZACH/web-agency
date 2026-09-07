'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getWhatsAppUrl } from '@/config/contact';
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Compass,
  Building,
} from 'lucide-react';

export default function ArchitectContactPage() {
  const { locale, isRTL } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [inquiryCode, setInquiryCode] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'villa',
    location: '',
    projectSize: '400-800',
    budgetRange: 'medium',
    timeline: '6-12',
    message: '',
  });

  const whatsappUrl = getWhatsAppUrl(locale, 'architect');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryCode(`FORMA-${Math.floor(1000 + Math.random() * 9000)}`);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0f0f0f] text-stone-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-stone-400 block">
            {locale === 'pt' ? 'Comissões & Novos Projetos' : locale === 'ar' ? 'التكليفات والمشاريع الجديدة' : 'Project Commission Inquiries'}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-white tracking-tight">
            {locale === 'pt' ? 'Apresente a Sua Visão ao Atelier' : locale === 'ar' ? 'شاركنا رؤيتك المعمارية لمشروعك' : 'Present Your Vision to the Studio'}
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
            {locale === 'pt'
              ? 'Se possui um lote de terreno ou uma propriedade a reabilitar, preencha o formulário exploratório para agendar uma reunião inicial com os arquitetos titulares.'
              : locale === 'ar'
              ? 'إذا كنت تمتلك قطعة أرض أو ترغب في إعادة ترميم عقار استثنائي، تفضل بتعبئة النموذج الاستكشافي لتحديد موعد مبدئي مع الشركاء المؤسسين.'
              : 'Whether you own land or a property awaiting restoration, complete our preliminary brief to arrange an exploratory partner consultation.'}
          </p>
        </div>

        {/* 2 Column Layout: Details Left, Inquiry Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Studios & Direct Details */}
          <div className="lg:col-span-5 space-y-8 text-start font-light">
            <div className="p-8 rounded-2xl bg-[#0c0c0c] border border-stone-800 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 block">
                  {locale === 'pt' ? 'Estúdio Lisboa' : locale === 'ar' ? 'استوديو لشبونة' : 'Lisbon Studio'}
                </span>
                <p className="text-xs text-stone-300">
                  Rua Rodrigo da Fonseca 104, 3º Dto<br />
                  1250-193 Lisboa, Portugal
                </p>
              </div>

              <div className="space-y-1 border-t border-stone-800/80 pt-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 block">
                  {locale === 'pt' ? 'Contacto Direto' : locale === 'ar' ? 'الاتصال المباشر' : 'Direct Inquiries'}
                </span>
                <p className="text-xs text-stone-300">
                  inquiries@atelierforma.example<br />
                  +351 912 345 678
                </p>
              </div>

              <div className="space-y-1 border-t border-stone-800/80 pt-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 block">
                  {locale === 'pt' ? 'Atendimento Personalizado' : locale === 'ar' ? 'المواعيد الخاصة' : 'Private Consultations'}
                </span>
                <p className="text-xs text-stone-400">
                  {locale === 'pt'
                    ? 'Reuniões presenciais no atelier ou no próprio terreno sob agendamento prévio.'
                    : locale === 'ar'
                    ? 'جلسات العمل في الاستوديو أو في موقع المشروع تتم بموعد مسبق.'
                    : 'Studio and on-site consultations strictly by appointment.'}
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="p-6 rounded-2xl bg-[#0c0c0c] border border-stone-800 space-y-3">
              <span className="text-xs font-mono uppercase text-stone-400 block">
                {locale === 'pt' ? 'Conversa Direta' : locale === 'ar' ? 'تواصل فوري' : 'Direct Dialogue'}
              </span>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                {locale === 'pt'
                  ? 'Prefere iniciar o contacto diretamente por WhatsApp com o nosso gestor de projeto?'
                  : locale === 'ar'
                  ? 'هل تفضل التواصل مباشرة وبسرعة عبر تطبيق واتساب لمناقشة فكرة أولية؟'
                  : 'Prefer to initiate a direct dialogue with our project lead via WhatsApp?'}
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Atelier Forma</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0c0c] border border-stone-800 shadow-2xl">
              {submitted ? (
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-stone-800 text-stone-100 flex items-center justify-center mx-auto border border-stone-700">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="px-3 py-1 rounded-full bg-stone-800 text-[10px] font-mono uppercase tracking-widest text-stone-300">
                      Inquiry Received
                    </span>
                    <h3 className="font-serif text-3xl font-light text-white">
                      {locale === 'pt' ? 'Proposta de Projeto Registada' : locale === 'ar' ? 'تم تسجيل بيانات مشروعك' : 'Project Brief Recorded'}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-400 max-w-md mx-auto font-light leading-relaxed">
                      {locale === 'pt'
                        ? `Obrigado, ${formData.name}. O seu código de referência é ${inquiryCode}.`
                        : locale === 'ar'
                        ? `شكراً لك، ${formData.name}. تم تسجيل كود الاستفسار المعماري ${inquiryCode}.`
                        : `Thank you, ${formData.name}. Your project inquiry reference is ${inquiryCode}.`}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-400 max-w-md mx-auto font-light">
                    ⚠️ {locale === 'pt'
                      ? 'Demonstração Comercial NexaWeb Studio: Este é um formulário de simulação para portfólio. Não foi submetida uma comissão real para estúdio.'
                      : locale === 'ar'
                      ? 'نموذج محاكاة تفاعلي لواجهة استفسار المشاريع تم تطويره بواسطة NexaWeb Studio.'
                      : 'NexaWeb Studio Sales Demo: This is an interactive simulation form for client presentation. No real architectural commission has been dispatched.'}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'villa',
                        location: '',
                        projectSize: '400-800',
                        budgetRange: 'medium',
                        timeline: '6-12',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    {locale === 'pt' ? 'Nova Simulação' : locale === 'ar' ? 'استفسار جديد' : 'New Simulation'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-start">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-stone-500 block">
                      {locale === 'pt' ? 'Questionário de Projeto' : locale === 'ar' ? 'استبيان المشروع الأولي' : 'Preliminary Brief'}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-light text-white mt-1">
                      {locale === 'pt' ? 'Dados da Obra & Localização' : locale === 'ar' ? 'تفاصيل الموقع والمشروع' : 'Project Parameters'}
                    </h2>
                  </div>

                  <div className="space-y-4 text-xs font-light">
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                        {locale === 'pt' ? 'Nome do Proprietário / Promotor' : locale === 'ar' ? 'الاسم الكريم / الجهة المالكة' : 'Your Full Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lorde / Dr. Alexander Hayes"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-stone-800 text-white focus:outline-none focus:border-stone-500 font-normal"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                          {locale === 'pt' ? 'E-mail' : locale === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="client@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-stone-800 text-white focus:outline-none focus:border-stone-500 font-normal"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                          {locale === 'pt' ? 'Contacto Telefónico' : locale === 'ar' ? 'رقم الهاتف' : 'Telephone'} *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+351 912 345 678"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-stone-800 text-white focus:outline-none focus:border-stone-500 font-normal"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                          {locale === 'pt' ? 'Tipologia de Projeto' : locale === 'ar' ? 'نوع المشروع' : 'Project Typology'}
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-stone-800 text-white focus:outline-none focus:border-stone-500 font-normal"
                        >
                          <option value="villa">Modern Residential Villa</option>
                          <option value="apartment">Penthouse / Apartment Renovation</option>
                          <option value="hospitality">Boutique Hotel / Vineyard Retreat</option>
                          <option value="commercial">Commercial / Workspace Pavilion</option>
                          <option value="heritage">Heritage Historical Restoration</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                          {locale === 'pt' ? 'Localização / Terreno' : locale === 'ar' ? 'موقع الأرض أو العقار' : 'Site Location'} *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Cascais, Sintra, Comporta..."
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-stone-800 text-white focus:outline-none focus:border-stone-500 font-normal"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                          {locale === 'pt' ? 'Área Estimada' : locale === 'ar' ? 'المساحة التقديرية' : 'Estimated Floor Area'}
                        </label>
                        <select
                          value={formData.projectSize}
                          onChange={(e) => setFormData({ ...formData, projectSize: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-stone-800 text-white focus:outline-none focus:border-stone-500 font-normal"
                        >
                          <option value="200-400">200 — 400 m²</option>
                          <option value="400-800">400 — 800 m²</option>
                          <option value="800+">800 m²+ Large Estate</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                          {locale === 'pt' ? 'Orçamento Previsto de Obra' : locale === 'ar' ? 'الميزانية التقديرية للبناء' : 'Construction Budget Target'}
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-stone-800 text-white focus:outline-none focus:border-stone-500 font-normal"
                        >
                          <option value="entry">€400k — €800k</option>
                          <option value="medium">€800k — €1.8M</option>
                          <option value="high">€1.8M — €4M+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                        {locale === 'pt' ? 'Visão do Projeto & Intenção' : locale === 'ar' ? 'رؤيتك للمشروع وتطلعاتك' : 'Vision & Special Requirements'}
                      </label>
                      <textarea
                        rows={3}
                        placeholder={locale === 'pt' ? 'Descreva características do terreno, vistas pretendidas ou materiais de preferência...' : locale === 'ar' ? 'اذكر أي تفاصيل حول تضاريس الأرض، الإطلالة المرغوبة أو المواد المفضلة...' : 'Describe site features, terrain slope, orientation, or material preferences...'}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-stone-800 text-white focus:outline-none focus:border-stone-500 font-normal"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-[11px] text-stone-500 font-light">
                    ℹ️ {locale === 'pt'
                      ? 'Demonstração Interativa NexaWeb Studio: A sua confirmação de proposta simulada será gerada imediatamente.'
                      : locale === 'ar'
                      ? 'نموذج محاكاة تفاعلي من NexaWeb Studio: سيتم تأكيد بياناتك التجريبية مباشرة على الشاشة.'
                      : 'NexaWeb Studio Interactive Demo: Your simulated proposal voucher will be displayed immediately.'}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-stone-100 hover:bg-white text-stone-950 font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-[1.01] cursor-pointer"
                  >
                    {locale === 'pt' ? 'Submeter Intenção de Projeto' : locale === 'ar' ? 'إرسال بيانات المشروع للاستوديو' : 'Submit Project Brief'}
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

