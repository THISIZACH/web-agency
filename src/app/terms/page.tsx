'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
  const { locale, isRTL, pricing } = useLanguage();

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
          {locale === 'pt' ? 'Termos e Condições' : locale === 'ar' ? 'الشروط والأحكام' : 'Terms of Service'}
        </h1>

        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-sm leading-relaxed space-y-6">
          <p>
            {locale === 'pt'
              ? 'Ao contratar os serviços da NexaWeb Studio, o cliente concorda com os termos e princípios transparentes de colaboração aqui estipulados.'
              : locale === 'ar'
              ? 'عند التعاقد مع وكالة NexaWeb Studio لتصميم موقعك، فإنك توافق على الشروط ومبادئ الشفافية الموضحة أدناه.'
              : 'By engaging NexaWeb Studio for web design services, you agree to the transparent terms and deliverables outlined below.'}
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">
            {locale === 'pt' ? '1. Pacote Base e Preços Transparentes' : locale === 'ar' ? '1. باقة الموقع الأساسية والأسعار' : '1. Core Deliverables & Pricing'}
          </h2>
          <p>
            {locale === 'pt'
              ? `O pacote base tem início em ${pricing.basePriceFormatted} e inclui a conceção de um website moderno, responsivo, com bases de SEO e formulário/WhatsApp. Qualquer necessidade de funcionalidades personalizadas complexas será orçamentada previamente por mútuo acordo.`
              : locale === 'ar'
              ? `تبدأ الباقة الأساسية من ${pricing.basePriceFormatted} وتشمل تصميماً عصرياً، متوافقاً مع الهواتف ومجهزاً بالـ SEO مع أزرار واتساب. يتم تسعير أي ميزات متقدمة إضافية بشكل محدد ومسبق.`
              : `Our core package starts at ${pricing.basePriceFormatted} and covers modern responsive design, technical SEO setup, WhatsApp integration, domain/hosting setup, and 30 days of complimentary content adjustments. Additional multi-page or bespoke features are quoted upfront.`}
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">
            {locale === 'pt' ? '2. Propriedade Integral do Cliente' : locale === 'ar' ? '2. الملكية التامة للعميل' : '2. Client Ownership'}
          </h2>
          <p>
            {locale === 'pt'
              ? 'Após a liquidação do projeto, o cliente é o proprietário exclusivo de todos os ficheiros de código, imagens fornecidas e credenciais de domínio/alojamento, sem taxas de retenção ou custos ocultos.'
              : locale === 'ar'
              ? 'بمجرد اكتمال المشروع وسداد مستحقاته، يصبح العميل المالك الحصري لكافة ملفات الكود، التصاميم، وبيانات النطاق والاستضافة دون أي شروط جزائية.'
              : 'Upon project settlement, the client holds 100% unrestricted ownership of the website code, domain name, and uploaded assets. There are no technical lock-ins.'}
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">
            {locale === 'pt' ? '3. Primeiro Mês e Ajustes Sob Pedido' : locale === 'ar' ? '3. دعم الشهر الأول والتعديلات عند الطلب' : '3. First-Month Support & On-Demand Updates'}
          </h2>
          <p>
            {locale === 'pt'
              ? `Durante os primeiros 30 dias após o lançamento, pequenos ajustes de texto, horários e contactos são gratuitos. Posteriormente, pedidos pontuais iniciam-se em ${pricing.updatePriceFormatted} por pedido sem mensalidades ou compromissos forçados.`
              : locale === 'ar'
              ? `خلال أول 30 يوماً من إطلاق الموقع، تكون التعديلات البسيطة على المحتوى مجانية بالكامل. بعد ذلك، تبدأ التعديلات عند الطلب من ${pricing.updatePriceFormatted} للطلب بدون أي رسوم اشتراك شهرية إلزامية.`
              : `For the first 30 days following launch, minor content updates (text, photos, hours, contacts) are complimentary. Subsequent on-demand updates start from ${pricing.updatePriceFormatted} per request with no recurring monthly contracts required.`}
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white pt-4">
            {locale === 'pt' ? '4. Domínio e Alojamento Web' : locale === 'ar' ? '4. حجز النطاق والاستضافة' : '4. Domain & Web Hosting Notice'}
          </h2>
          <p>
            {locale === 'pt'
              ? 'As taxas de registo do nome de domínio e de alojamento web são adquiridas separadamente e pagas diretamente pelo cliente ao fornecedor escolhido, estando os respetivos custos fora do valor do nosso pacote de serviços.'
              : locale === 'ar'
              ? 'رسوم حجز اسم النطاق (الدومين) وحساب الاستضافة يتم شراؤها وسدادها مباشرة من قِبل العميل لمزود الخدمة، وتعتبر هذه التكاليف خارج سعر باقة خدماتنا.'
              : 'Domain name registration and web hosting account fees are purchased separately and paid directly by the client (costs are outside our service package price).'}
          </p>
        </div>
      </div>
    </main>
  );
}

