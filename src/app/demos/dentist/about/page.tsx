'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  ShieldCheck,
  Award,
  HeartPulse,
  Activity,
  Calendar,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';

export default function DentistAboutPage() {
  const { locale, isRTL } = useLanguage();

  const standards = [
    {
      title: locale === 'pt' ? 'Esterilização Autoclave Classe B' : locale === 'ar' ? 'تعقيم متطور بأجهزة أوتوكلاف فئة B' : 'Class-B Autoclave Sterilization',
      desc: locale === 'pt' ? 'Todos os instrumentos metálicos passam por tripla esterilização a vapor sob vácuo e são embalados individualmente com rastreabilidade química.' : locale === 'ar' ? 'تعقيم جراحي كامل لكافة الأدوات المعدنية بالبخار تحت ضغط تفريغي وتغليف فردي محكم لكل مريض.' : 'All reusable instruments undergo vacuum steam cycles and individual sealed sterilization pouches.',
    },
    {
      title: locale === 'pt' ? 'Imagiologia 3D de Baixa Radiação' : locale === 'ar' ? 'تصوير مقطعي رقمي فائق الأمان' : 'Low-Dose 3D CBCT Imaging',
      desc: locale === 'pt' ? 'Equipamento digital com redução de até 70% na dosagem de radiação em comparação aos raios-X tradicionais, com resolução milimétrica.' : locale === 'ar' ? 'أجهزة تصوير شعاعي رقمية تخفض جرعة الإشعاع بنسبة تصل إلى 70% مع دقة متناهية بالمليمتر.' : 'Advanced tomography emitting up to 70% less radiation than legacy equipment while providing sub-millimeter precision.',
    },
    {
      title: locale === 'pt' ? 'Digital Smile Design (DSD)' : locale === 'ar' ? 'تصميم الابتسامة الرقمي المسبق' : 'Digital Smile Design Simulation',
      desc: locale === 'pt' ? 'Antes de qualquer intervenção estética, os pacientes visualizam em 3D e experimentam um provisório estético na própria boca.' : locale === 'ar' ? 'محاكاة كاملة للنتيجة النهائية لابتسامتك ثلاثية الأبعاد قبل البدء بأي تدخل تجميلي أو علاجي.' : 'Patients preview their projected smile in 3D and test physical trial mockups prior to any cosmetic procedure.',
    },
    {
      title: locale === 'pt' ? 'Ambiente Clínico Calmo & Sem Odores' : locale === 'ar' ? 'بيئة علاجية هادئة وخالية من الروائح' : 'Tranquil Acoustic & Filtered Space',
      desc: locale === 'pt' ? 'Sistemas de filtragem HEPA médica e isolamento sonoro para eliminar a sensação e o cheiro tradicional de consultório.' : locale === 'ar' ? 'فلاتر هواء طبية HEPA وعزل صوتي كامل للتخلص من الروائح والأصوات المعتادة المزعجة في العيادات.' : 'Medical HEPA air purification and acoustic dampening to alleviate traditional dental clinic anxiety.',
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'Sobre a NovaSmile' : locale === 'ar' ? 'عن العيادة ومعاييرنا' : 'About NovaSmile'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {locale === 'pt' ? 'Medicina Dentária Sem Medo, com Máxima Rigorosidade' : locale === 'ar' ? 'طب أسنان متطور يجمع بين الراحة والدقة الطبية' : 'Gentle Dental Medicine With Clinical Rigor'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {locale === 'pt'
              ? 'Concebida para transformar a experiência na cadeira do dentista num momento de serenidade, confiança e transparência médica.'
              : locale === 'ar'
              ? 'تم تأسيس عيادتنا لتغيير النظرة التقليدية لزيارة طبيب الأسنان، وتقديم تجربة علاجية تتسم بالطمأنينة والوضوح الكامل.'
              : 'Established to replace dental dread with comfort, precision diagnostics, and compassionate healthcare.'}
          </p>
        </div>

        {/* Section 1: Philosophy & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block">
              {locale === 'pt' ? 'A Nossa Filosofia' : locale === 'ar' ? 'فلسفة الرعاية الصحية لدينا' : 'Our Practice Philosophy'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {locale === 'pt'
                ? 'Preservar dentes naturais antes de intervir.'
                : locale === 'ar'
                ? 'الحفاظ على الأسنان الطبيعية هو أساس كل قرار طبي.'
                : 'Conservative Care: Preserving Natural Tooth Structure First.'}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {locale === 'pt'
                ? 'Na NovaSmile acreditamos que o melhor dente é sempre o dente natural do paciente. Todas as nossas abordagens diagnósticas são minimamente invasivas, fundamentadas em literatura científica e com esclarecimento completo antes de qualquer intervenção.'
                : locale === 'ar'
                ? 'في NovaSmile نؤمن بأن السن الطبيعي هو الأثمن دائماً. نعتمد نهجاً محافظاً مدعوماً بأحدث الدراسات السريرية، ونناقش كل خيار علاجي بوضوح تام مع المريض قبل البدء.'
                : 'At NovaSmile, our primary objective is always the conservation of natural enamel and periodontal architecture. We favor proactive preventative care over aggressive intervention, ensuring patients feel informed and in control of their oral health.'}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>{locale === 'pt' ? 'Consentimento informado e planos orçamentais detalhados' : locale === 'ar' ? 'موافقة طبية مستنيرة وخطة تكلفة شفافة' : 'Informed patient consent & transparent itemized quotes'}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>{locale === 'pt' ? 'Anestesia digital confortável sem agulhas visíveis' : locale === 'ar' ? 'تخدير موضعي إلكتروني دقيق ومريح' : 'Comfortable computer-controlled local anesthesia'}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>{locale === 'pt' ? 'Acompanhamento pós-operatório preventivo e atencioso' : locale === 'ar' ? 'متابعة دورية واهتمام مستمر بعد كل علاج' : 'Dedicated post-treatment follow-up and hygiene coaching'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800">
              <Image
                src="/images/dentist/dentist-clinic.jpg"
                alt="NovaSmile Dental Clinic Modern Operatory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Clinical Standards Grid */}
        <div className="space-y-8 pt-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
              {locale === 'pt' ? 'Segurança & Tecnologia' : locale === 'ar' ? 'معايير الأمان والتعقيم' : 'Hygiene & Clinical Protocols'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {locale === 'pt' ? 'Compromisso Inegociável com a Esterilização' : locale === 'ar' ? 'أعلى درجات التعقيم والسلامة الطبية' : 'Uncompromising Sterilization Standards'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {standards.map((std, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2"
              >
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{std.title}</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Clinical Team Snapshot */}
        <div className="rounded-3xl bg-cyan-900 text-white p-8 sm:p-12 space-y-8 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest block">
              {locale === 'pt' ? 'A Nossa Equipa Clínica' : locale === 'ar' ? 'كادرنا الطبي المتخصص' : 'Multidisciplinary Team'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {locale === 'pt'
                ? 'Médicos Dentistas Especialistas em Cada Área do Sorriso'
                : locale === 'ar'
                ? 'أطباء أسنان متخصصون في كافة مجالات طب الفم والأسنان'
                : 'Dedicated Specialists Across Every Branch of Dentistry'}
            </h2>
            <p className="text-xs sm:text-sm text-cyan-100 leading-relaxed">
              {locale === 'pt'
                ? 'A nossa equipa clínica é composta por especialistas dedicados em cirurgia oral, endodontia microscópica, ortodontia e odontopediatria, garantindo que o seu tratamento é acompanhado pelo profissional mais qualificado para a sua necessidade.'
                : locale === 'ar'
                ? 'يضم فريقنا استشاريين وأخصائيين في جراحة الفم واللثة، علاج الجذور المجهري، تقويم الأسنان وطب أسنان الأطفال لضمان تلقيك أفضل رعاية ممكنة.'
                : 'Our practice brings together specialists in periodontology, implant surgery, microscopic endodontics, orthodontics, and cosmetic smile architecture under one roof.'}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/demos/dentist/contact"
                className="px-8 py-3.5 rounded-full bg-white text-cyan-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-50 transition-all shadow-lg"
              >
                {locale === 'pt' ? 'Marcar Avaliação Inicial' : locale === 'ar' ? 'حجز فحص أولي' : 'Book Initial Consultation'}
              </Link>
              <Link
                href="/demos/dentist/services"
                className="px-6 py-3.5 rounded-full bg-cyan-800/80 hover:bg-cyan-800 text-white font-semibold text-xs transition-colors border border-cyan-700"
              >
                {locale === 'pt' ? 'Ver Todos os Tratamentos' : locale === 'ar' ? 'استعراض العلاجات' : 'View Treatments'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

