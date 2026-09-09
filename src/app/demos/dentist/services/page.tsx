'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  Sparkles,
  Clock,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  HeartPulse,
  ArrowRight,
  HelpCircle,
  Phone,
  Check,
} from 'lucide-react';

export default function DentistServicesPage() {
  const { locale, isRTL } = useLanguage();

  const treatments = [
    {
      id: 'cleaning',
      title: locale === 'pt' ? 'Higiene Oral & Destartarização Profissional' : locale === 'ar' ? 'تنظيف الأسنان وإزالة الجير وتلميع المينا' : 'Dental Cleaning & Ultrasonic Prophylaxis',
      subtitle: locale === 'pt' ? 'Prevenção de cáries e doença periodontal' : locale === 'ar' ? 'الوقاية من التسوس وأمراض اللثة المزمنة' : 'Preventative Care & Periodontal Protection',
      image: '/images/dentist/service-cleaning.jpg',
      price: locale === 'pt' ? 'Exemplo: 65€' : locale === 'ar' ? 'مثال: 65$' : 'Example: €65',
      duration: '45 minutos',
      steps: [
        locale === 'pt' ? 'Remoção ultrassónica de cálculo supragengival e subgengival' : locale === 'ar' ? 'إزالة ترسبات الجير بالموجات الصوتية الدقيقة' : 'Ultrasonic scaling of tartar and hardened plaque',
        locale === 'pt' ? 'Jato de ar-bicarbonato para eliminação de manchas superficiais' : locale === 'ar' ? 'صقل الأسنان بجزيئات دقيقة لإزالة بقع القهوة والتبغ' : 'Air-flow polishing to lift surface coffee and tea stains',
        locale === 'pt' ? 'Aplicação tópica de flúor remineralizante' : locale === 'ar' ? 'تطبيق موضعي للفلورايد لتقوية طبقة المينا' : 'Remineralizing fluoride varnish application',
      ],
      suitableFor: locale === 'pt' ? 'Recomendado a cada 6 meses para todos os adultos e jovens.' : locale === 'ar' ? 'يوصى به كل 6 أشهر لجميع الفئات العمرية للحفاظ على صحة اللثة.' : 'Recommended every 6 months for all adults and teens.',
    },
    {
      id: 'whitening',
      title: locale === 'pt' ? 'Branqueamento Dentário Laser em Clínica' : locale === 'ar' ? 'تبييض الأسنان الاحترافي بالليزر' : 'In-Clinic Laser Teeth Whitening',
      subtitle: locale === 'pt' ? 'Até 8 tons mais claro numa única sessão' : locale === 'ar' ? 'حتى 8 درجات ناصعة في جلسة واحدة' : 'Up to 8 Shades Brighter in One Session',
      image: '/images/dentist/service-whitening.jpg',
      price: locale === 'pt' ? 'Exemplo: 220€' : locale === 'ar' ? 'مثال: 220$' : 'Example: €220',
      duration: '60 minutos',
      steps: [
        locale === 'pt' ? 'Proteção gengival com barreira fotopolimerizável' : locale === 'ar' ? 'عزل كامل للثة لحمايتها من أي حساسية' : 'Gingival barrier barrier application for gum safety',
        locale === 'pt' ? 'Aplicação de gel clareador ativado por luz LED/Laser' : locale === 'ar' ? 'وضع جل التبييض وتنشيطه بضوء الليزر المتقدم' : 'Application of medical-grade hydrogen peroxide activated by LED',
        locale === 'pt' ? 'Três ciclos de 15 minutos com hidratação do esmalte' : locale === 'ar' ? 'ثلاث دورات علاجية مع جل ترطيب لتقليل الحساسية' : 'Three 15-minute cycles with anti-sensitivity desensitizer',
      ],
      suitableFor: locale === 'pt' ? 'Ideal para casamentos, eventos ou rejuvenescimento estético do sorriso.' : locale === 'ar' ? 'مثالي للمناسبات وتجديد إشراقة الابتسامة بأمان.' : 'Perfect before weddings, milestones, or aesthetic smile revitalization.',
    },
    {
      id: 'implants',
      title: locale === 'pt' ? 'Implantes Dentários com Cirurgia Guiada 3D' : locale === 'ar' ? 'زراعة الأسنان الرقمية الموجهة بالحاسوب' : '3D Computer-Guided Dental Implants',
      subtitle: locale === 'pt' ? 'Substituição definitiva de raízes perdidas' : locale === 'ar' ? 'الحل الدائم والنهائي لتعويض الأسنان المفقودة' : 'Permanent Biocompatible Root Replacement',
      image: '/images/dentist/service-implants.jpg',
      price: locale === 'pt' ? 'Sob Avaliação Clínica' : locale === 'ar' ? 'بناءً على التقييم السريري' : 'From Consultation',
      duration: '1 a 2 sessões cirúrgicas',
      steps: [
        locale === 'pt' ? 'Tomografia 3D e planeamento digital da posição milimétrica' : locale === 'ar' ? 'تصوير مقطعي ثلاثي الأبعاد لتحديد زاوية الزرع بالمليمتر' : '3D CBCT scan to map bone density and nerve canals',
        locale === 'pt' ? 'Colocação do implante em titânio grau médico com guia cirúrgica' : locale === 'ar' ? 'تثبيت جذر التيتانيوم الحيوي بأقل تدخل جراحي ممكن' : 'Minimally invasive placement via precision custom surgical guide',
        locale === 'pt' ? 'Coroa de zircónia definitiva perfeitamente adaptada à mordida' : locale === 'ar' ? 'تركيب تاج الزيركون النهائي المتطابق مع لون وشكل الأسنان' : 'Custom zirconia crown matched seamlessly to natural dentition',
      ],
      suitableFor: locale === 'pt' ? 'Pacientes com ausência de um ou mais dentes que procuram estabilidade total.' : locale === 'ar' ? 'لمن فقد سناً أو أكثر ويرغب في استعادة وظيفة المضغ والجمال.' : 'Patients with one or more missing teeth desiring natural chewing strength.',
    },
    {
      id: 'veneers',
      title: locale === 'pt' ? 'Facetas de Porcelana & Lentes de Contacto Dental' : locale === 'ar' ? 'عدسات الفينير واللومينير الخزفية' : 'Custom Porcelain Smile Veneers',
      subtitle: locale === 'pt' ? 'Transformação estética duradoura do sorriso' : locale === 'ar' ? 'تجميل شامل وتناسق تام للابتسامة' : 'Comprehensive Cosmetic Smile Redesign',
      image: '/images/dentist/service-veneers.jpg',
      price: locale === 'pt' ? 'Sob Avaliação Clínica' : locale === 'ar' ? 'بناءً على التقييم السريري' : 'From Consultation',
      duration: '2 a 3 consultas',
      steps: [
        locale === 'pt' ? 'Estudo fotográfico facial e simulação digital do sorriso (Mockup)' : locale === 'ar' ? 'دراسة فوتوغرافية وتجربة محاكاة ثلاثية الأبعاد قبل البدء' : 'Facial photography and digital smile mockup preview',
        locale === 'pt' ? 'Micro-preparação minimamente invasiva do esmalte' : locale === 'ar' ? 'تحضير مجهري فائق الدقة بدون إضرار بالمينا' : 'Minimal-prep enamel contouring with micro-precision',
        locale === 'pt' ? 'Cimentação adesiva definitiva de lâminas de cerâmica feldspática' : locale === 'ar' ? 'تثبيت نهائي للعدسات الخزفية بمقاومة عالية للتصبغ' : 'High-bond adhesive cementation of custom handcrafted ceramics',
      ],
      suitableFor: locale === 'pt' ? 'Correção de dentes escurecidos, pequenos diastemas ou formato irregular.' : locale === 'ar' ? 'إصلاح تباعد الأسنان، التصبغات العنيدة والعيوب الشكلية.' : 'Correcting deep discoloration, small gaps, or irregular tooth proportions.',
    },
    {
      id: 'crowns',
      title: locale === 'pt' ? 'Coroas & Reabilitação em Zircónia / Cerâmica' : locale === 'ar' ? 'تيجان وترميمات الأسنان بالزيركون' : 'Zirconia & Ceramic Restorative Crowns',
      subtitle: locale === 'pt' ? 'Proteção e força para dentes fraturados' : locale === 'ar' ? 'حماية وترميم الأسنان المتضررة والضعيفة' : 'Structural Restoration for Compromised Teeth',
      image: '/images/dentist/service-crowns.jpg',
      price: locale === 'pt' ? 'Exemplo: 350€' : locale === 'ar' ? 'مثال: 350$' : 'Example: €350',
      duration: '2 consultas',
      steps: [
        locale === 'pt' ? 'Tratamento endodôntico ou limpeza profunda do remanescente' : locale === 'ar' ? 'معالجة العصب أو تنظيف السن المتضرر بالكامل' : 'Root therapy or structural core buildup',
        locale === 'pt' ? 'Impressão digital ótica 3D sem gesso nem náuseas' : locale === 'ar' ? 'أخذ مقاسات رقمية دقيقة بماسح ضوئي ثلاثي الأبعاد' : 'Digital intraoral 3D scan with zero impression goop',
        locale === 'pt' ? 'Fresagem CAD/CAM de coroa monolítica de alta resistência' : locale === 'ar' ? 'تصنيع التاج بمخارط رقمية دقيقة وتثبيته بإحكام' : 'CAD/CAM milling of biocompatible monolithic zirconia crown',
      ],
      suitableFor: locale === 'pt' ? 'Dentes desvitalizados ou com restaurações extensas com risco de fratura.' : locale === 'ar' ? 'الأسنان المعالجة العصب أو التي تعاني من كسور كبيرة.' : 'Root-canal treated or severely fractured teeth needing protection.',
    },
    {
      id: 'ortho',
      title: locale === 'pt' ? 'Alinhadores Invisíveis & Ortodontia Digital' : locale === 'ar' ? 'تقويم الأسنان الشفاف (الإنفزلاين)' : 'Clear Aligners & Digital Orthodontics',
      subtitle: locale === 'pt' ? 'Alinhe os seus dentes sem arames visíveis' : locale === 'ar' ? 'تعديل اصطفاف الأسنان بدون أسلاك معدنية' : 'Discreet Straightening Without Metal Brackets',
      image: '/images/dentist/service-ortho.jpg',
      price: locale === 'pt' ? 'Sob Avaliação Clínica' : locale === 'ar' ? 'بناءً على التقييم السريري' : 'From Consultation',
      duration: '6 a 18 meses',
      steps: [
        locale === 'pt' ? 'Escaneamento 3D e vídeo de simulação do movimento dentário' : locale === 'ar' ? 'مسح ضوئي ثلاثي الأبعاد ومحاكاة فيديو لحركة الأسنان' : '3D scan and virtual video projection of tooth movement',
        locale === 'pt' ? 'Produção de série de alinhadores transparentes sob medida' : locale === 'ar' ? 'تصنيع قوالب شفافة مخصصة يتم تبديلها كل أسبوعين' : 'Fabrication of custom clear aligner trays swapped fortnightly',
        locale === 'pt' ? 'Consultas de controlo a cada 6 a 8 semanas' : locale === 'ar' ? 'متابعة دورية سريعة كل 6-8 أسابيع للتأكد من التقدم' : 'Progress checkups every 6 to 8 weeks with refinement scans',
      ],
      suitableFor: locale === 'pt' ? 'Adultos e adolescentes que procuram discrição e higiene facilitada.' : locale === 'ar' ? 'للبالغين والشباب الراغبين في تقويم غير مرئي وسهل التنظيف.' : 'Adults and teens seeking comfortable, virtually invisible realignment.',
    },
    {
      id: 'emergency',
      title: locale === 'pt' ? 'Serviço de Urgência Dentária (Same-Day)' : locale === 'ar' ? 'علاج طوارئ الأسنان الفوري في نفس اليوم' : 'Same-Day Emergency Dental Protocol',
      subtitle: locale === 'pt' ? 'Alívio rápido da dor aguda e traumatismos' : locale === 'ar' ? 'تسكين فوري للألم الحاد والإصابات الطارئة' : 'Immediate Pain Relief & Trauma Care',
      image: '/images/dentist/service-emergency.jpg',
      price: locale === 'pt' ? 'Atendimento Prioritário' : locale === 'ar' ? 'أولوية طبية فورية' : 'Priority Care',
      duration: 'Atendimento Imediato',
      steps: [
        locale === 'pt' ? 'Diagnóstico radiográfico urgente e identificação da causa da dor' : locale === 'ar' ? 'فحص إشعاعي فوري لتحديد مصدر الألم والالتهاب' : 'Immediate radiographic evaluation of pain root',
        locale === 'pt' ? 'Anestesia local computadorizada para cessação instantânea do desconforto' : locale === 'ar' ? 'تخدير موضعي حديث لإيقاف الألم في الحال' : 'Computerized localized anesthesia for instant relief',
        locale === 'pt' ? 'Tratamento de suporte (drenagem, desvitalização de urgência ou contenção)' : locale === 'ar' ? 'إجراء الإسعافات اللازمة (فتح عصب، تصريف خراج، تثبيت سن)' : 'Definitive emergency stabilization and follow-up plan',
      ],
      suitableFor: locale === 'pt' ? 'Dores agudas, dentes partidos em quedas, hemorragias ou inchaço facial.' : locale === 'ar' ? 'حالات الألم المفاجئ، كسر الأسنان، التورم الحاد أو نزيف اللثة.' : 'Sudden unbearable toothache, fractured teeth, facial swelling, or trauma.',
    },
    {
      id: 'pediatric',
      title: locale === 'pt' ? 'Odontopediatria & Cuidados Dentários Infantis' : locale === 'ar' ? 'طب أسنان الأطفال والعناية الوقائية المبكرة' : 'Gentle Pediatric Dental Care',
      subtitle: locale === 'pt' ? 'Consultas divertidas, sem medo e focadas na prevenção' : locale === 'ar' ? 'بيئة ودودة وتجربة مريحة خالية من الخوف للأطفال' : 'Anxiety-Free First Visits & Cavity Prevention',
      image: '/images/dentist/service-pediatric.jpg',
      price: locale === 'pt' ? 'Exemplo: 50€' : locale === 'ar' ? 'مثال: 50$' : 'Example: €50',
      duration: '30 a 40 minutos',
      steps: [
        locale === 'pt' ? 'Adaptação lúdica à cadeira e instrumentos (Dizer-Mostrar-Fazer)' : locale === 'ar' ? 'جلسة تعارف لطيفة وبسيطة لإزالة أي خوف أو رهبة' : 'Playful introduction to dental tools (Tell-Show-Do method)',
        locale === 'pt' ? 'Deteção precoce de cáries e avaliação de hábitos de deglutição e mastigação' : locale === 'ar' ? 'فحص دقيق للتسوس المبكر ونمو الفكين واصطفاف الأسنان' : 'Gentle exam of primary teeth and bite alignment habits',
        locale === 'pt' ? 'Aplicação de selantes de fissuras e treino de escovagem com os pais' : locale === 'ar' ? 'وضع مادة واقية من التسوس وتوجيه الأهل لطرق التفريش الصحيحة' : 'Fissure sealant protective application and parental brushing coaching',
      ],
      suitableFor: locale === 'pt' ? 'Crianças a partir do primeiro ano de vida ou nascimento do primeiro dente.' : locale === 'ar' ? 'للأطفال من عمر سنة وما فوق للمتابعة والوقاية المبكرة.' : 'Children from their first tooth through adolescence.',
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'Catálogo de Especialidades' : locale === 'ar' ? 'دليل التخصصات العلاجية' : 'Specialized Dental Services'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {locale === 'pt' ? 'Tratamentos Dentários com Rigor Clínico' : locale === 'ar' ? 'علاجات الأسنان بدقة طبية فائقة' : 'Treatments Designed For Health & Aesthetics'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {locale === 'pt'
              ? 'Conheça em detalhe os nossos procedimentos, tempos de execução e indicações clínicas. Preços de exemplo indicativos para portfólio.'
              : locale === 'ar'
              ? 'تعرف على تفاصيل الإجراءات العلاجية، مدة كل جلسة والفئات المناسبة لكل علاج. الأسعار الموضحة هي نماذج استرشادية للعرض.'
              : 'Explore our full procedural catalog, appointment times, and clinical steps. Prices are example illustrative estimates.'}
          </p>
        </div>

        {/* Detailed Treatments List */}
        <div className="space-y-12">
          {treatments.map((t, idx) => (
            <div
              key={t.id}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-8"
            >
              {/* Service Image */}
              <div className="lg:col-span-4">
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-inner">
                  <Image src={t.image} alt={t.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-xs font-bold text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700">
                    ⏱ {t.duration}
                  </div>
                  <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 px-3 py-1 rounded-full bg-cyan-600 text-white font-bold text-xs shadow-md">
                    {t.price}
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="lg:col-span-8 space-y-4">
                <div>
                  <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block">
                    {t.subtitle}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                    {t.title}
                  </h2>
                </div>

                {/* Steps */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                    {locale === 'pt' ? 'Como Funciona o Procedimento:' : locale === 'ar' ? 'خطوات الإجراء الطبي:' : 'What Happens During Treatment:'}
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {t.steps.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 text-xs text-slate-500 border border-slate-200/60 dark:border-slate-800">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {locale === 'pt' ? 'Para quem é indicado: ' : locale === 'ar' ? 'الفئة المستهدفة: ' : 'Who it is for: '}
                  </span>
                  {t.suitableFor}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/demos/dentist/contact"
                    className="px-6 py-2.5 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{locale === 'pt' ? 'Agendar Consulta de Avaliação' : locale === 'ar' ? 'حجز موعد كشف وتقييم' : 'Book Consultation'}</span>
                  </Link>
                  <a
                    href="tel:+351932020456"
                    className="px-5 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{locale === 'pt' ? 'Tirar Dúvidas por Telefone' : locale === 'ar' ? 'استفسار هاتفي' : 'Inquire by Phone'}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Disclaimer Strip */}
        <div className="p-6 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 text-center space-y-2">
          <span className="font-bold text-xs text-cyan-800 dark:text-cyan-300">
            {locale === 'pt' ? 'Aviso Médico & Comercial NexaWeb Studio' : locale === 'ar' ? 'تنويه طبي وتجاري من NexaWeb Studio' : 'Medical & Portfolio Notice'}
          </span>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {locale === 'pt'
              ? 'Todos os valores são exemplos ilustrativos para websites de clínicas privadas. Cada tratamento requer avaliação clínica presencial individual por médico dentista inscrito na OMD.'
              : locale === 'ar'
              ? 'كافة الأسعار الموضحة هي نماذج تقريبية لعرض إمكانيات الموقع للعيادات الخاصة. أي خطة علاجية تتطلب فحصاً سريرياً مباشراً لدى طبيب أسنان مرخص.'
              : 'All prices are example illustrative figures for private dental practice demos. Actual treatments require direct clinical evaluation by a licensed dental practitioner.'}
          </p>
        </div>
      </div>
    </div>
  );
}

