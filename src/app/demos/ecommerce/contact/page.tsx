'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function EcommerceContactPage() {
  const { locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [inquiryType, setInquiryType] = useState('Product Advisory');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-neutral-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
            {locale === 'pt' ? 'Atendimento Personalizado' : locale === 'ar' ? 'خدمة العملاء' : 'Client Concierge'}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-neutral-950 uppercase tracking-tight">
            {locale === 'pt' ? 'Contacto & Apoio ao Cliente' : locale === 'ar' ? 'تواصل مع دار فيلورا' : 'Contact & Advisory'}
          </h1>
          <p className="text-neutral-500 text-sm max-w-xl mx-auto font-light leading-relaxed">
            {locale === 'pt'
              ? 'A nossa equipa de consultores de alfaiataria está disponível para esclarecer dúvidas sobre tamanhos, encomendas e envios.'
              : locale === 'ar'
              ? 'فريق الاستشارات والمساعد الشخصي في خدمتكم لتقديم المشورة حول المقاسات والطلبات الخاصة.'
              : 'Our dedicated client advisors are on hand to provide personalized sizing counsel, bespoke orders, and order logistics.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-6">
              <h2 className="font-serif text-2xl font-light text-neutral-950 uppercase">
                {locale === 'pt' ? 'Canais do Concierge' : locale === 'ar' ? 'قنوات التواصل المباشر' : 'Direct Concierge'}
              </h2>

              <div className="space-y-4 text-xs text-neutral-600 font-light">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-neutral-950 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-900 block mb-0.5">{locale === 'pt' ? 'Correio Eletrónico:' : locale === 'ar' ? 'البريد الإلكتروني:' : 'Email Desk:'}</span>
                    <p className="font-mono text-neutral-900">concierge@velora-atelier.com</p>
                    <span className="text-[11px] text-neutral-400">Response within 3 business hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-neutral-200 pt-4">
                  <Phone className="w-4 h-4 text-neutral-950 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-900 block mb-0.5">{locale === 'pt' ? 'Linha Telefónica Privada:' : locale === 'ar' ? 'الهاتف المباشر:' : 'Telephone Advisory:'}</span>
                    <p className="font-mono text-neutral-900">+33 1 42 68 55 00 (Paris)</p>
                    <p className="font-mono text-neutral-900">+44 20 7946 0990 (London)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-neutral-200 pt-4">
                  <Clock className="w-4 h-4 text-neutral-950 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-900 block mb-0.5">{locale === 'pt' ? 'Horário de Atendimento:' : locale === 'ar' ? 'ساعات الخدمة:' : 'Concierge Hours:'}</span>
                    <p>Monday – Saturday: 08:00 – 20:00 CET</p>
                    <p>Sunday: 10:00 – 18:00 CET</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/351912345678?text=Hello%20VELORA%20Concierge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-mono uppercase font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp VIP Concierge</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-light text-neutral-950 uppercase">
                    {locale === 'pt' ? 'Mensagem Entregue com Sucesso' : locale === 'ar' ? 'تم استلام استفسارك بنجاح' : 'Message Transmitted'}
                  </h3>
                  <p className="text-xs text-neutral-500 max-w-sm mx-auto leading-relaxed">
                    {locale === 'pt'
                      ? 'Obrigado pelo seu contacto. Um dos nossos consultores dedicados responderá em breve.'
                      : locale === 'ar'
                      ? 'شكراً لتواصلك معنا. سيقوم أحد مستشارينا بالرد عليك في أقرب وقت.'
                      : 'Thank you for contacting the atelier. A personal client advisor has been assigned to your query.'}
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-neutral-900 underline cursor-pointer"
                    >
                      {locale === 'pt' ? 'Enviar outra mensagem' : locale === 'ar' ? 'إرسال رسالة أخرى' : 'Submit another inquiry'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-light text-neutral-950 uppercase">
                      {locale === 'pt' ? 'Solicitação ao Concierge' : locale === 'ar' ? 'إرسال رسالة للمساعد الشخصي' : 'Advisory Request'}
                    </h2>
                    <p className="text-xs text-neutral-500 mt-1">
                      {locale === 'pt'
                        ? 'Questões sobre tamanho de peças, entregas internacionais ou encomendas personalizadas.'
                        : locale === 'ar'
                        ? 'استفسارات حول المقاسات، الشحن الدولي، أو التعديلات الخاصة على الملابس.'
                        : 'For questions regarding tailoring fit, international deliveries, or private appointments.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                        {locale === 'pt' ? 'Nome Completo' : locale === 'ar' ? 'الاسم' : 'Full Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Elena Rostova"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-neutral-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                        {locale === 'pt' ? 'E-mail de Contacto' : locale === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="elena@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-neutral-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                        {locale === 'pt' ? 'Tipo de Consulta' : locale === 'ar' ? 'نوع الاستفسار' : 'Inquiry Type'}
                      </label>
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-neutral-900"
                      >
                        <option value="Product Advisory">Product & Sizing Advisory</option>
                        <option value="Order Tracking">Order Status & Shipping</option>
                        <option value="Private Appointment">Private Salon Appointment</option>
                        <option value="Press">Press & Editorial</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                        {locale === 'pt' ? 'Nº de Encomenda (Opcional)' : locale === 'ar' ? 'رقم الطلب (اختياري)' : 'Order Reference (Optional)'}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. VEL-89421"
                        value={orderNumber}
                        onChange={(e) => setOrderNumber(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-neutral-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                      {locale === 'pt' ? 'Mensagem' : locale === 'ar' ? 'الرسالة' : 'Your Message'} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder={locale === 'pt' ? 'Como podemos ajudar com a sua peça VELORA?' : locale === 'ar' ? 'كيف يمكننا مساعدتك؟' : 'How may our concierge assist your wardrobe today?'}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs focus:outline-none focus:border-neutral-900"
                    />
                  </div>

                  <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-[11px] text-neutral-500 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-neutral-900 shrink-0" />
                    <span>NexaWeb Studio Demo: Frontend simulation only.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-neutral-900 hover:bg-black text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{locale === 'pt' ? 'Enviar Pedido ao Concierge' : locale === 'ar' ? 'إرسال الرسالة' : 'Send Inquiry'}</span>
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

