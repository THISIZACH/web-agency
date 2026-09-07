'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const { locale, isRTL } = useLanguage();

  return (
    <main className="flex-1 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline mb-8"
        >
          <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          <span>{locale === 'pt' ? 'Voltar ao Início' : locale === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}</span>
        </Link>

        <Badge variant="brand" className="mb-4">
          Legal
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
          {locale === 'pt' ? 'Política de Privacidade' : locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
        </h1>

        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-sm leading-relaxed space-y-6">
          <p>
            {locale === 'pt'
              ? 'A NexaWeb Studio valoriza e respeita a sua privacidade. Esta política descreve de que forma recolhemos, utilizamos e salvaguardamos os seus dados pessoais quando visita o nosso website ou solicita os nossos serviços.'
              : locale === 'ar'
              ? 'تلتزم وكالة NexaWeb Studio باحترام خصوصيتك وحماية بياناتك الشخصية. توضح هذه السياسة كيفية جمع واستخدام وتأمين معلوماتك عند زيارة موقعنا أو طلب خدماتنا.'
              : 'NexaWeb Studio values and respects your privacy. This policy explains how we collect, use, and protect your information when you browse our site or request web design services.'}
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">
            {locale === 'pt' ? '1. Informações que Recolhemos' : locale === 'ar' ? '1. المعلومات التي نجمعها' : '1. Information We Collect'}
          </h2>
          <p>
            {locale === 'pt'
              ? 'Recolhemos apenas as informações estritamente necessárias para o desenvolvimento do seu projeto, tais como nome, endereço de email, contacto telefónico/WhatsApp e preferências de negócio submetidas através dos nossos formulários de contacto.'
              : locale === 'ar'
              ? 'نقوم فقط بجمع المعلومات الضرورية لتنفيذ مشروعك، مثل الاسم، البريد الإلكتروني، رقم الهاتف أو واتساب، وتفاصيل النشاط التجاري المقدمة في نموذج التواصل.'
              : 'We only collect information strictly required to assess and build your website project, including your name, business name, email address, phone number, and project requirements submitted via our contact forms.'}
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">
            {locale === 'pt' ? '2. Propriedade dos Seus Dados' : locale === 'ar' ? '2. ملكية البيانات وسريتها' : '2. Ownership of Your Data'}
          </h2>
          <p>
            {locale === 'pt'
              ? 'Nunca vendemos, alugamos ou partilhamos os seus dados pessoais ou credenciais com terceiros para fins comerciais. Todos os acessos fornecidos para configuração de alojamento ou domínio são estritamente confidenciais.'
              : locale === 'ar'
              ? 'نحن لا نبيع أو نشارك بياناتك مع أي طرف ثالث لأغراض تجارية إطلاقاً. جميع بيانات الدخول الخاصة بالدومين والاستضافة تعامل بسرية تامة ومطلقة.'
              : 'We never sell, rent, or trade your personal data. Any server credentials or domain registrar logins provided during onboarding are handled with utmost confidentiality.'}
          </p>
        </div>
      </div>
    </main>
  );
}

