'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTACT_CONFIG, getWhatsAppUrl } from '@/config/contact';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MessageCircle, Mail, Send, CheckCircle, AlertCircle, Phone, ArrowUpRight, Loader2 } from 'lucide-react';

export function ContactSection() {
  const { t, locale, pricing, isRTL } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: '',
    needs: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = locale === 'pt' ? 'Por favor insira o seu nome' : locale === 'ar' ? 'يرجى إدخال اسمك' : 'Name is required';
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = locale === 'pt' ? 'Nome da empresa é obrigatório' : locale === 'ar' ? 'اسم النشاط التجاري مطلوب' : 'Business name is required';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = locale === 'pt' ? 'E-mail profissional válido é obrigatório' : locale === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Valid email is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = locale === 'pt' ? 'Contacto telefónico é obrigatório' : locale === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone number is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    setErrorMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          businessName: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          businessType: formData.businessType,
          goals: formData.needs,
          needs: formData.needs,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(
          data.error ||
            (locale === 'pt'
              ? 'Ocorreu um erro ao enviar a sua mensagem. Por favor tente novamente ou contacte-nos pelo WhatsApp.'
              : locale === 'ar'
              ? 'حدث خطأ أثناء إرسال طلبك. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.'
              : 'Failed to send your inquiry. Please try again or reach out to us via WhatsApp.')
        );
      }
    } catch (err: any) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage(
        locale === 'pt'
          ? 'Erro de rede ou de ligação. Por favor tente novamente ou contacte-nos pelo WhatsApp.'
          : locale === 'ar'
          ? 'خطأ في الاتصال بالشبكة. يرجى المحاولة مرة أخرى أو التواصل عبر واتساب.'
          : 'Network or server error. Please try again or reach out to us via WhatsApp.'
      );
    }
  };

  const whatsappUrl = getWhatsAppUrl(locale, 'general');

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="brand" className="mb-4">
            {t.contact.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Left Cards: Quick Direct Contact */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            {/* WhatsApp Card */}
            <div className="p-5 sm:p-7 md:p-8 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/30 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mb-5 shadow-lg shadow-[#25D366]/20">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t.contact.whatsappCardTitle}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {t.contact.whatsappCardDesc}
              </p>
              <Button
                href={whatsappUrl}
                isExternal
                variant="whatsapp"
                className="w-full justify-between"
                icon={<ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />}
                iconPosition="right"
              >
                {t.contact.whatsappCardBtn}
              </Button>
            </div>

            {/* Email Card */}
            <div className="p-5 sm:p-7 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t.contact.emailCardTitle}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                {t.contact.emailCardDesc}
              </p>
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline"
              >
                <span>{CONTACT_CONFIG.email}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Complete Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-900/5 dark:shadow-black/20">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {t.contact.form.title}
              </h3>

              {status === 'success' ? (
                <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      {t.contact.form.successMessage}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                      {locale === 'pt'
                        ? 'Mensagem recebida! Para obter uma resposta imediata da nossa equipa, por favor continue via WhatsApp ou e-mail.'
                        : locale === 'ar'
                        ? 'تم استلام رسالتك بنجاح! للحصول على رد فوري ومباشر، يرجى المتابعة عبر واتساب أو البريد الإلكتروني.'
                        : 'Message received! To receive an immediate response, please continue via WhatsApp or email.'}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                        locale === 'pt'
                          ? 'Olá NexaWeb Studio! Acabei de enviar um pedido de proposta no vosso website.'
                          : locale === 'ar'
                          ? 'مرحباً NexaWeb Studio! لقد قمت للتو بإرسال استفسار عبر موقعكم الإلكتروني.'
                          : 'Hello NexaWeb Studio! I just submitted a project inquiry on your website.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 active:scale-[0.98] text-sm px-5 py-2.5 gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[#25D366]/25 hover:shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>{locale === 'pt' ? 'Continuar no WhatsApp' : locale === 'ar' ? 'المتابعة عبر واتساب' : 'Continue via WhatsApp'}</span>
                    </a>
                    <a
                      href="mailto:contact.nexawebstudio.uk@gmail.com?subject=Project%20Inquiry%20-%20NexaWeb%20Studio"
                      className="w-full sm:w-auto inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 active:scale-[0.98] text-sm px-5 py-2.5 gap-2 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                    >
                      <Mail className="w-4 h-4 shrink-0" />
                      <span>{locale === 'pt' ? 'Enviar E-mail' : locale === 'ar' ? 'إرسال بريد إلكتروني' : 'Send Direct Email'}</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setStatus('idle');
                        setErrorMessage(null);
                        setErrors({});
                        setFormData({
                          name: '',
                          businessName: '',
                          email: '',
                          phone: '',
                          businessType: '',
                          needs: '',
                          message: '',
                        });
                      }}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 underline cursor-pointer"
                    >
                      {locale === 'pt' ? 'Enviar outro pedido' : locale === 'ar' ? 'إرسال استفسار آخر' : 'Submit another request'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.form.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder={t.contact.form.namePlaceholder}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${
                          errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 dark:border-slate-700'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-500 block mt-1">{errors.name}</span>
                      )}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.form.businessNameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => {
                          setFormData({ ...formData, businessName: e.target.value });
                          if (errors.businessName) setErrors({ ...errors, businessName: '' });
                        }}
                        placeholder={t.contact.form.businessNamePlaceholder}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${
                          errors.businessName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 dark:border-slate-700'
                        }`}
                      />
                      {errors.businessName && (
                        <span className="text-[11px] text-red-500 block mt-1">{errors.businessName}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.form.emailLabel}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder={t.contact.form.emailPlaceholder}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${
                          errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 dark:border-slate-700'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-500 block mt-1">{errors.email}</span>
                      )}
                    </div>

                    {/* Phone/WhatsApp */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.form.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder={t.contact.form.phonePlaceholder}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${
                          errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200 dark:border-slate-700'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-red-500 block mt-1">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Type */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.form.businessTypeLabel}
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                      >
                        <option value="">{t.contact.form.businessTypePlaceholder}</option>
                        {t.contact.form.businessTypeOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Needs */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.contact.form.needsLabel}
                      </label>
                      <select
                        value={formData.needs}
                        onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                      >
                        <option value="">{locale === 'pt' ? 'Selecione uma opção' : locale === 'ar' ? 'اختر خياراً' : 'Select an option'}</option>
                        {t.contact.form.needsOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt.replace('€299', pricing.basePriceFormatted).replace('299€', pricing.basePriceFormatted).replace('$299', pricing.basePriceFormatted)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.contact.form.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-y"
                    />
                  </div>

                  {status === 'error' && errorMessage && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm flex items-start gap-3 animate-in fade-in duration-200">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold">{locale === 'pt' ? 'Não foi possível enviar' : locale === 'ar' ? 'تعذر الإرسال' : 'Submission failed'}</p>
                        <p className="text-xs mt-0.5 opacity-90">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2"
                    disabled={status === 'submitting'}
                    icon={status === 'submitting' ? <Loader2 className="w-4 h-4 animate-spin" /> : undefined}
                  >
                    {status === 'submitting'
                      ? t.contact.form.submitting
                      : t.contact.form.submitBtn.replace('€299', pricing.basePriceFormatted).replace('299€', pricing.basePriceFormatted).replace('$299', pricing.basePriceFormatted)}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

