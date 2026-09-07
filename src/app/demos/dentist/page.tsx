'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getWhatsAppUrl } from '@/config/contact';
import {
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  ArrowRight,
  Phone,
  MessageCircle,
  X,
  SlidersHorizontal,
  ChevronDown,
  Activity,
  Award,
  Users,
  Star,
  Check,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

export default function DentistHomePage() {
  const { locale, isRTL } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedService, setSelectedService] = useState('cleaning');
  const [selectedDate, setSelectedDate] = useState('2026-09-15');
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientNotes, setPatientNotes] = useState('');
  const [appointmentCode, setAppointmentCode] = useState('');

  // Smile transformation slider state
  const [smileSlider, setSmileSlider] = useState(50);

  const whatsappUrgentUrl = getWhatsAppUrl(locale, 'dentist');

  const services = [
    {
      id: 'cleaning',
      title: locale === 'pt' ? 'Higiene Oral & Destartarização' : locale === 'ar' ? 'تنظيف الأسنان وإزالة الجير' : 'Dental Cleaning & Prophylaxis',
      desc: locale === 'pt' ? 'Remoção ultrassónica de tártaro, polimento e profilaxia com jato de bicarbonato para gengivas saudáveis.' : locale === 'ar' ? 'تنظيف عميق بالموجات فوق الصوتية وتلميع الأسنان لإزالة التصبغات وحماية اللثة من الالتهابات.' : 'Ultrasonic plaque removal, enamel polishing, and deep gum prophylaxis for long-term health.',
      price: locale === 'pt' ? 'Exemplo: 65€' : locale === 'ar' ? 'مثال: 65$' : 'Example: €65',
      duration: '45 min',
      image: '/images/dentist/service-cleaning.jpg',
    },
    {
      id: 'whitening',
      title: locale === 'pt' ? 'Branqueamento Dentário Laser' : locale === 'ar' ? 'تبييض الأسنان بالليزر' : 'In-Clinic Laser Teeth Whitening',
      desc: locale === 'pt' ? 'Tecnologia LED/Laser que clareia até 6 a 8 tons numa única sessão de 60 minutos, sem sensibilidade.' : locale === 'ar' ? 'تقنية ليزر حديثة تمنحك ابتسامة ناصعة حتى 8 درجات في جلسة واحدة مع حماية طبقة المينا.' : 'Safe, hydrogen peroxide LED-activated formula brightening smiles up to 8 shades in one session.',
      price: locale === 'pt' ? 'Exemplo: 220€' : locale === 'ar' ? 'مثال: 220$' : 'Example: €220',
      duration: '60 min',
      image: '/images/dentist/service-whitening.jpg',
    },
    {
      id: 'implants',
      title: locale === 'pt' ? 'Implantes Dentários Guiados' : locale === 'ar' ? 'زراعة الأسنان الرقمية' : 'Computer-Guided Dental Implants',
      desc: locale === 'pt' ? 'Substituição permanente de dentes perdidos com titânio biocompatível e planeamento 3D computadorizado.' : locale === 'ar' ? 'تعويض الأسنان المفقودة بجذور تيتانيوم حيوية مع تخطيط ثلاثي الأبعاد دقيق لنتائج تدوم طويلاً.' : 'Titanium root replacement planned via 3D CBCT scans for maximum stability and natural aesthetics.',
      price: locale === 'pt' ? 'Sob Avaliação' : locale === 'ar' ? 'بحسب الحالة' : 'From Consultation',
      duration: 'Surgical Unit',
      image: '/images/dentist/service-implants.jpg',
    },
    {
      id: 'veneers',
      title: locale === 'pt' ? 'Facetas Dentárias de Porcelana' : locale === 'ar' ? 'عدسات الفينير التجميلية' : 'Custom Porcelain Veneers',
      desc: locale === 'pt' ? 'Lâminas ultrafinas de cerâmica personalizadas para corrigir alinhamento, forma e coloração do sorriso.' : locale === 'ar' ? 'طبقات خزفية فائقة الرقة يتم تفصيلها خصيصاً لتعديل شكل ولون الابتسامة بمظهر طبيعي جذاب.' : 'Ultra-thin custom ceramic shells crafted to correct shape, alignment, and long-term smile beauty.',
      price: locale === 'pt' ? 'Sob Avaliação' : locale === 'ar' ? 'بحسب الحالة' : 'From Consultation',
      duration: 'Smile Design',
      image: '/images/dentist/service-veneers.jpg',
    },
    {
      id: 'crowns',
      title: locale === 'pt' ? 'Coroas & Pontes Dentárias' : locale === 'ar' ? 'تيجان وجسور الزيركون' : 'Zirconia Crowns & Bridges',
      desc: locale === 'pt' ? 'Reabilitação de dentes fraturados com materiais cerâmicos de alta resistência mecânica e acabamento natural.' : locale === 'ar' ? 'ترميم الأسنان المتضررة بتيجان زيركون متينة تحاكي الأسنان الطبيعية بدقة وقوة مضغ عالية.' : 'Full restorative crowns sculpted from biocompatible zirconia for maximum chewing strength.',
      price: locale === 'pt' ? 'Exemplo: 350€' : locale === 'ar' ? 'مثال: 350$' : 'Example: €350',
      duration: '2 Sessions',
      image: '/images/dentist/service-crowns.jpg',
    },
    {
      id: 'ortho',
      title: locale === 'pt' ? 'Ortodontia Invisível (Alinhadores)' : locale === 'ar' ? 'تقويم الأسنان الشفاف' : 'Clear Invisible Orthodontics',
      desc: locale === 'pt' ? 'Alinhamento dentário discreto e removível sem arames metálicos, com acompanhamento digital 3D.' : locale === 'ar' ? 'تصحيح اصطفاف الأسنان بقوالب شفافة متحركة غير مرئية وبدون أسلاك معدنية مزعجة.' : 'Removable transparent aligners tailored to gradually straighten teeth without metal brackets.',
      price: locale === 'pt' ? 'Sob Avaliação' : locale === 'ar' ? 'بحسب الخطة' : 'Personalized Plan',
      duration: '6-18 Months',
      image: '/images/dentist/service-ortho.jpg',
    },
    {
      id: 'emergency',
      title: locale === 'pt' ? 'Urgência Dentária no Próprio Dia' : locale === 'ar' ? 'علاج طوارئ الأسنان الفوري' : 'Same-Day Emergency Dental Care',
      desc: locale === 'pt' ? 'Atendimento prioritário para alívio imediato da dor de dentes, fraturas, abscessos e perda de restaurações.' : locale === 'ar' ? 'استقبال فوري لحالات آلام الأسنان الحادة، كسر الضرس، خراجات الفم وسقوط الحشوات.' : 'Immediate pain relief protocol for severe toothache, chipped teeth, abscesses, and urgent trauma.',
      price: locale === 'pt' ? 'Atendimento Prioritário' : locale === 'ar' ? 'أولوية فورية' : 'Priority Care',
      duration: 'Immediate',
      image: '/images/dentist/service-emergency.jpg',
    },
    {
      id: 'pediatric',
      title: locale === 'pt' ? 'Odontopediatria (Crianças)' : locale === 'ar' ? 'طب أسنان الأطفال' : 'Gentle Pediatric Dentistry',
      desc: locale === 'pt' ? 'Abordagem lúdica e sem dor concebida para crianças. Prevenção de cáries, selantes e flúor protetor.' : locale === 'ar' ? 'بيئة ودودة ومريحة مخصصة للأطفال لعلاج التسوس ووقاية الأسنان اللبنية والدائمة بدون خوف.' : 'Friendly, anxiety-free dental experience for children, focusing on cavity prevention and healthy habits.',
      price: locale === 'pt' ? 'Exemplo: 50€' : locale === 'ar' ? 'مثال: 50$' : 'Example: €50',
      duration: '30 min',
      image: '/images/dentist/service-pediatric.jpg',
    },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentCode(`NS-${Math.floor(10000 + Math.random() * 90000)}`);
    setBookingStep(5);
  };

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      {/* ========================================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-cyan-50/60 via-white to-white dark:from-slate-900/80 dark:via-slate-950 dark:to-slate-950">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{locale === 'pt' ? 'Medicina Dentária Preventiva & Estética' : locale === 'ar' ? 'طب الأسنان الوقائي والتجميلي الحديث' : 'Evidence-Based Modern Dentistry'}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                {locale === 'pt' ? (
                  <>
                    Sorrisos Confiantes Começam com <span className="text-cyan-600 dark:text-cyan-400">Cuidados Especializados</span>.
                  </>
                ) : locale === 'ar' ? (
                  <>
                    ابتسامة واثقة تبدأ برعاية <span className="text-cyan-600 dark:text-cyan-400">طبية فائقة التخصص</span>.
                  </>
                ) : (
                  <>
                    Confident Smiles Start With <span className="text-cyan-600 dark:text-cyan-400">Expert Dental Care</span>.
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {locale === 'pt'
                  ? 'Tratamentos suaves, tecnologia digital 3D e foco rigoroso no conforto do paciente. De limpezas preventivas a reabilitações completas com anestesia sem dor.'
                  : locale === 'ar'
                  ? 'علاجات هادئة ومريحة، مسح رقمي ثلاثي الأبعاد واهتمام فائق براحة المريض. من الفحص الدوري البسيط إلى تجميل وزراعة الأسنان بدون ألم.'
                  : 'Gentle treatments, low-radiation digital imaging, and patient-first comfort. From routine prophylaxis to complete smile rehabilitations with pain-free technology.'}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setBookingStep(1);
                    setIsBookingOpen(true);
                  }}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-cyan-600/25 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{locale === 'pt' ? 'Marcar Consulta' : locale === 'ar' ? 'حجز موعد كشف' : 'Book Your Appointment'}</span>
                </button>
                <Link
                  href="/demos/dentist/services"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700"
                >
                  <span>{locale === 'pt' ? 'Explorar Tratamentos' : locale === 'ar' ? 'استعراض العلاجات' : 'Explore Our Services'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>

              {/* Emergency Banner */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 p-2.5 px-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200">
                  <span className="font-bold">{locale === 'pt' ? 'Precisa de atendimento urgente?' : locale === 'ar' ? 'تحتاج إلى موعد عاجل اليوم؟' : 'Need an appointment sooner?'}</span>
                  <span>•</span>
                  <a
                    href={whatsappUrgentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-cyan-700 dark:text-cyan-300 hover:underline flex items-center gap-1"
                  >
                    <span>{locale === 'pt' ? 'Falar no WhatsApp' : locale === 'ar' ? 'تواصل عبر واتساب فوراً' : 'Urgent WhatsApp Care'}</span>
                    <ArrowRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Hero Image & Trust Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <div className="relative h-[420px] sm:h-[480px] w-full bg-slate-100 dark:bg-slate-900">
                  <Image
                    src="/images/dentist/dentist-hero.jpg"
                    alt="NovaSmile Dental Clinic Modern Treatment Room"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Floating Trust Card on Image */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-cyan-100 dark:border-slate-800 shadow-xl flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-bold text-xs text-slate-900 dark:text-white">
                          {locale === 'pt' ? 'Tecnologia 100% Sem Dor' : locale === 'ar' ? 'تقنيات علاجية مريحة وبدون ألم' : 'Comfort & Pain-Free Protocol'}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          {locale === 'pt' ? 'Anestesia digital computadorizada' : locale === 'ar' ? 'تخدير رقمي حديث ودقيق' : 'Computerized precision sedation'}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold shrink-0">
                      ★ 4.9/5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4 CLINICAL PILLARS */}
      {/* ========================================================================= */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                {locale === 'pt' ? 'Diagnóstico 3D Digital' : locale === 'ar' ? 'تشخيص رقمي ثلاثي الأبعاد' : '3D Digital Imaging'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {locale === 'pt'
                  ? 'Tomografia computorizada de baixa radiação e scanner intraoral sem moldes desconfortáveis.'
                  : locale === 'ar'
                  ? 'تصوير مقطعي فائق الدقة ومسح رقمي يغنيك عن قوالب الطين المزعجة.'
                  : 'Low-dose CBCT scans and optical intraoral scanners eliminating messy impression trays.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                {locale === 'pt' ? 'Medicina Sem Dor' : locale === 'ar' ? 'علاج مريح وبدون خوف' : 'Gentle Sedation Care'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {locale === 'pt'
                  ? 'Protocolos de conforto e anestesia suave concebidos especialmente para pacientes ansiosos.'
                  : locale === 'ar'
                  ? 'بروتوكولات راحة مخصصة للتعامل مع توتر عيادة الأسنان وتجربة كشف سلسة للغاية.'
                  : 'Compassionate care calibrated for dental anxiety with modern localized numbing.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                {locale === 'pt' ? 'Esterilização Hospitalar' : locale === 'ar' ? 'أعلى معايير التعقيم الطبي' : 'Hospital-Grade Hygiene'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {locale === 'pt'
                  ? 'Autoclaves classe B e embalagem estéril individual para cada consulta e paciente.'
                  : locale === 'ar'
                  ? 'أجهزة تعقيم معتمدة وتغليف معقم فردي لكل مريض لمنع أي انتقال للعدوى.'
                  : 'Class-B autoclaves and individually tracked sterile instrument packs for every visit.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                {locale === 'pt' ? 'Preçário Transparente' : locale === 'ar' ? 'أسعار واضحة وشفافة' : 'Transparent Pricing'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {locale === 'pt'
                  ? 'Planos de tratamento detalhados antes de iniciar. Sem taxas surpresa nem asteriscos ocultos.'
                  : locale === 'ar'
                  ? 'خطة علاج وتكلفة واضحة تماماً قبل البدء، بدون أي رسوم غير متوقعة أو شروط غامضة.'
                  : 'Detailed itemized treatment plans presented upfront with zero surprise billing.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FEATURED SERVICES DIRECTORY (8 SERVICES) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'Tratamentos Abrangentes' : locale === 'ar' ? 'دليل الخدمات الشامل' : 'Comprehensive Treatments'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {locale === 'pt' ? 'Cuidados Completos Para Toda a Família' : locale === 'ar' ? 'رعاية متكاملة لصحة وجمال ابتسامتك' : 'Complete Dental Care For Every Need'}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {locale === 'pt'
              ? 'Desde a higiene de rotina até cirurgias complexas e reabilitação estética do sorriso.'
              : locale === 'ar'
              ? 'من العناية الدورية والوقاية إلى جراحة وزراعة وتجميل الأسنان بأرقى المعايير الطبية.'
              : 'From routine preventative cleanings to advanced implantology and aesthetic smile redesigns.'}
          </p>
        </div>

        {/* 8 Services Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 px-2.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[11px] font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    ⏱ {svc.duration}
                  </div>
                  <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 px-3 py-1 rounded-full bg-cyan-600 text-white font-bold text-xs shadow-md">
                    {svc.price}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-4 flex items-center justify-between gap-3">
                <Link
                  href="/demos/dentist/services"
                  className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center gap-1 transition-colors"
                >
                  <span>{locale === 'pt' ? 'Saber Mais' : locale === 'ar' ? 'تفاصيل الخدمة' : 'Learn More'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedService(svc.id);
                    setBookingStep(2);
                    setIsBookingOpen(true);
                  }}
                  className="px-4 py-2 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 hover:bg-cyan-600 text-cyan-700 dark:text-cyan-300 hover:text-white text-xs font-bold transition-all cursor-pointer"
                >
                  {locale === 'pt' ? 'Marcar' : locale === 'ar' ? 'حجز الآن' : 'Book'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/demos/dentist/services"
            prefetch={true}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-cyan-600/20"
          >
            <span>{locale === 'pt' ? 'Ver Diretório Completo de Tratamentos & Preços' : locale === 'ar' ? 'استعراض الدليل الشامل لكافة العلاجات والأسعار' : 'View Full Treatments & Example Pricing Directory'}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE BEFORE & AFTER SMILE MAKEOVER */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-cyan-600 dark:text-cyan-400 text-xs uppercase tracking-widest font-bold">
              {locale === 'pt' ? 'Estética Dentária de Precisão' : locale === 'ar' ? 'تجميل وتعديل الابتسامة' : 'Aesthetic Smile Design'}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {locale === 'pt' ? 'Antes & Depois: A Sua Nova Expressão' : locale === 'ar' ? 'نتائج واقعية: الابتسامة قبل وبعد' : 'Before & After: The Smile Transformation'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {locale === 'pt'
                ? 'Arraste o cursor para comparar o estado inicial de pigmentação e desalinhamento com o resultado final após facetas e branqueamento.'
                : locale === 'ar'
                ? 'اسحب المؤشر لترى مقارنة نموذجية بين التصبغات واصفرار الأسنان وبين النتيجة الناصعة بعد الفينير والتبييض.'
                : 'Drag the slider below to simulate typical aesthetic enhancements from dental whitening and porcelain veneers.'}
            </p>
          </div>

          {/* Slider Container */}
          <div className="rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card Before */}
              <div className="p-6 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider">
                    {locale === 'pt' ? 'Antes: Estado Inicial' : locale === 'ar' ? 'قبل: الحالة الأولية' : 'Before: Initial State'}
                  </span>
                  <span className="text-xs text-rose-600 font-semibold">Tártaro & Desgaste</span>
                </div>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <p>❌ {locale === 'pt' ? 'Manchas profundas de café e tabaco' : locale === 'ar' ? 'تصبغات عميقة واصفرار بالأسنان' : 'Deep coffee and enamel staining'}</p>
                  <p>❌ {locale === 'pt' ? 'Desgaste e pequenas fraturas nas bordas' : locale === 'ar' ? 'تآكل وتكسر في حواف الأسنان' : 'Micro-fractures and uneven tooth edges'}</p>
                  <p>❌ {locale === 'pt' ? 'Inflamação gengival e sensibilidade ao frio' : locale === 'ar' ? 'حساسية مفرطة والتهاب باللثة' : 'Mild gum inflammation & thermal sensitivity'}</p>
                </div>
              </div>

              {/* Card After */}
              <div className="p-6 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-900/40 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                    {locale === 'pt' ? 'Depois: NovaSmile Care' : locale === 'ar' ? 'بعد: رعاية NovaSmile' : 'After: NovaSmile Care'}
                  </span>
                  <span className="text-xs text-cyan-600 font-bold">✨ +8 Tons Clareados</span>
                </div>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <p>✓ {locale === 'pt' ? 'Esmalte polido, livre de tártaro e manchas' : locale === 'ar' ? 'مينا أسنان مصقولة وخالية تماماً من الجير' : 'Polished, stain-free radiant white enamel'}</p>
                  <p>✓ {locale === 'pt' ? 'Bordas perfeitamente simétricas e alinhadas' : locale === 'ar' ? 'حواف متناسقة وابتسامة متطابقة' : 'Symmetrical, natural contouring with veneers'}</p>
                  <p>✓ {locale === 'pt' ? 'Gengivas rosadas, saudáveis e protegidas' : locale === 'ar' ? 'لثة صحية ووردية خالية من الالتهاب' : 'Healthy pink gums and long-term protection'}</p>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-100 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span>{locale === 'pt' ? 'Consulte um médico dentista para avaliar o seu caso clínico individual.' : locale === 'ar' ? 'احجز استشارتك لتقييم حالتك السريرية وخطة العلاج المناسبة لك.' : 'Consult our clinical team to assess your individual dental anatomy.'}</span>
              <button
                type="button"
                onClick={() => {
                  setBookingStep(1);
                  setIsBookingOpen(true);
                }}
                className="font-bold text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
              >
                {locale === 'pt' ? 'Avaliar Meu Sorriso →' : locale === 'ar' ? 'فحص أسناني الآن ←' : 'Assess My Smile →'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MEET THE CLINICAL TEAM */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <div className="relative h-[420px] w-full bg-slate-100 dark:bg-slate-900">
                <Image
                  src="/images/dentist/dentist-doctor.jpg"
                  alt="Dr. Elena Ramos, Lead Dentist"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>{locale === 'pt' ? 'Direção Clínica' : locale === 'ar' ? 'الإدارة الطبية للعيادة' : 'Clinical Leadership'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              {locale === 'pt' ? 'Dra. Elena Ramos' : locale === 'ar' ? 'د. إيلينا راموس' : 'Dr. Elena Ramos, DDS'}
            </h2>
            <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm">
              {locale === 'pt' ? 'Especialista em Reabilitação Oral & Implantologia Avançada' : locale === 'ar' ? 'أخصائية جراحة وزراعة الأسنان والتأهيل الفموي الشامل' : 'Specialist in Oral Rehabilitation & Advanced Implantology'}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {locale === 'pt'
                ? 'Com mais de uma década dedicada à medicina dentária preventiva e reabilitadora, a Dra. Elena Ramos lidera a equipa da NovaSmile com uma premissa clara: nenhum paciente deve sentir medo ou desconforto numa cadeira de dentista.'
                : locale === 'ar'
                ? 'بخبرة تمتد لأكثر من عقد في طب الأسنان الوقائي والترميمي، تقود الدكتورة إيلينا فريق NovaSmile بفلسفة واضحة: توفير أعلى مستويات الراحة والأمان لكل مريض بدون أي ألم.'
                : 'With over a decade dedicated to restorative and aesthetic dentistry, Dr. Elena Ramos leads NovaSmile with a core commitment: patient comfort, gentle touch, and transparent communication.'}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="block font-bold text-slate-900 dark:text-white text-sm">OMD Nº 8492</span>
                <span className="text-[11px] text-slate-500">Membro da Ordem dos Médicos Dentistas</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="block font-bold text-slate-900 dark:text-white text-sm">CBCT Certified</span>
                <span className="text-[11px] text-slate-500">Formação Avançada em Imagiologia 3D</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/demos/dentist/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                <span>{locale === 'pt' ? 'Conhecer Toda a Equipa & Filosofia da Clínica' : locale === 'ar' ? 'التعرف على الفريق الطبي وفلسفة العيادة' : 'Meet Our Full Clinical Team & Staff'}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PATIENT TESTIMONIALS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-cyan-600 dark:text-cyan-400 text-xs uppercase tracking-widest font-bold">
              {locale === 'pt' ? 'Experiências Reais' : locale === 'ar' ? 'تجارب المرضى' : 'Patient Stories'}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {locale === 'pt' ? 'O Que Dizem os Nossos Pacientes' : locale === 'ar' ? 'ماذا يقول مرضانا عنا' : 'What Our Patients Say'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex text-amber-400 text-sm">★★★★★</div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                {locale === 'pt'
                  ? '“Tinha fobia de ir ao dentista há anos. A Dra. Elena e a equipa foram inacreditavelmente pacientes. A anestesia nem se sente!”'
                  : locale === 'ar'
                  ? '“كنت أعاني من خوف شديد من عيادات الأسنان لسنوات. الفريق كان صبوراً ومحترفاً لأبعد حد، ولم أشعر بأي ألم على الإطلاق.”'
                  : '“I had dental anxiety for years. Dr. Ramos was incredibly gentle. The computerized numbing was completely imperceptible.”'}
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <span className="font-bold text-slate-900 dark:text-white block">Mariana S.</span>
                <span className="text-slate-400 text-[11px]">Tratamento: Higiene & Branqueamento</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex text-amber-400 text-sm">★★★★★</div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                {locale === 'pt'
                  ? '“Coloquei 2 implantes com planeamento 3D. Em menos de uma hora estava feito e no dia seguinte voltei ao trabalho sem dor.”'
                  : locale === 'ar'
                  ? '“أجريت زراعة سنين بتقنية التخطيط ثلاثي الأبعاد. الإجراء تم بسرعة وبدون أي مضاعفات، وعدت لعملي في اليوم التالي.”'
                  : '“Placed 2 implants using the 3D guide. Took under an hour and I was back at work the next day with minimal discomfort.”'}
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <span className="font-bold text-slate-900 dark:text-white block">Dr. Carlos M.</span>
                <span className="text-slate-400 text-[11px]">Tratamento: Implantes Guiados</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex text-amber-400 text-sm">★★★★★</div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                {locale === 'pt'
                  ? '“Clínica impecável, tudo esterilizado à nossa frente e marcação online que funciona mesmo. Recomendo a 100%.”'
                  : locale === 'ar'
                  ? '“عيادة نظيفة وفخمة للغاية، الأدوات معقمة أمامك، والحجز أونلاين سريع وسهل جداً. أنصح بها بشدة.”'
                  : '“Spotless clinic, sterile instruments opened right in front of you, and online appointment booking that actually works.”'}
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <span className="font-bold text-slate-900 dark:text-white block">Beatriz F.</span>
                <span className="text-slate-400 text-[11px]">Tratamento: Ortodontia Invisível</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* APPOINTMENT MODAL (5-STEP WIZARD) */}
      {/* ========================================================================= */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-cyan-100 dark:border-slate-800 p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-slate-100">
            <button
              type="button"
              onClick={() => {
                setIsBookingOpen(false);
                setBookingStep(1);
              }}
              className="absolute top-5 right-5 rtl:right-auto rtl:left-5 text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Step 1: Select Service */}
            {bookingStep === 1 && (
              <div className="space-y-6">
                <div>
                  <span className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
                    {locale === 'pt' ? 'Passo 1 de 4' : locale === 'ar' ? 'الخطوة 1 من 4' : 'Step 1 of 4'}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    {locale === 'pt' ? 'Qual o Motivo da Sua Consulta?' : locale === 'ar' ? 'ما نوع العلاج المطلوب؟' : 'Select Treatment or Service'}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((svc) => (
                    <div
                      key={svc.id}
                      onClick={() => setSelectedService(svc.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        selectedService === svc.id
                          ? 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-500 ring-1 ring-cyan-500 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span className="font-bold text-xs text-slate-900 dark:text-white block">{svc.title}</span>
                      <span className="text-[11px] text-cyan-600 dark:text-cyan-400 font-semibold">{svc.price}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setBookingStep(2)}
                    className="px-8 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>{locale === 'pt' ? 'Continuar: Data' : locale === 'ar' ? 'التالي: اختيار التاريخ' : 'Next: Choose Date'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Select Date */}
            {bookingStep === 2 && (
              <div className="space-y-6">
                <div>
                  <span className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
                    {locale === 'pt' ? 'Passo 2 de 4' : locale === 'ar' ? 'الخطوة 2 من 4' : 'Step 2 of 4'}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    {locale === 'pt' ? 'Selecione a Data Pretendida' : locale === 'ar' ? 'اختر التاريخ المناسب' : 'Choose Appointment Date'}
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {locale === 'pt' ? 'Data no Calendário' : locale === 'ar' ? 'تاريخ الموعد' : 'Calendar Date'}
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    min="2026-09-12"
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setBookingStep(1)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                  >
                    {locale === 'pt' ? '← Voltar' : locale === 'ar' ? '← السابق' : '← Back'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingStep(3)}
                    className="px-8 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>{locale === 'pt' ? 'Continuar: Horário' : locale === 'ar' ? 'التالي: اختيار الوقت' : 'Next: Choose Time'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Select Time Slot */}
            {bookingStep === 3 && (
              <div className="space-y-6">
                <div>
                  <span className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
                    {locale === 'pt' ? 'Passo 3 de 4' : locale === 'ar' ? 'الخطوة 3 من 4' : 'Step 3 of 4'}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    {locale === 'pt' ? 'Vagas Disponíveis' : locale === 'ar' ? 'الأوقات المتاحة' : 'Available Time Slots'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {locale === 'pt' ? `Data: ${selectedDate}` : locale === 'ar' ? `التاريخ: ${selectedDate}` : `Selected Date: ${selectedDate}`}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">Manhã / Morning:</span>
                    <div className="grid grid-cols-4 gap-2">
                      {['09:00', '09:30', '10:00', '11:00'].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                            selectedTime === slot
                              ? 'bg-cyan-600 text-white border-cyan-600 shadow-sm'
                              : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">Tarde / Afternoon:</span>
                    <div className="grid grid-cols-4 gap-2">
                      {['14:00', '15:00', '16:30', '18:00'].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                            selectedTime === slot
                              ? 'bg-cyan-600 text-white border-cyan-600 shadow-sm'
                              : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setBookingStep(2)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                  >
                    {locale === 'pt' ? '← Voltar' : locale === 'ar' ? '← السابق' : '← Back'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingStep(4)}
                    className="px-8 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>{locale === 'pt' ? 'Continuar: Paciente' : locale === 'ar' ? 'التالي: بيانات المريض' : 'Next: Patient Details'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Patient Info Form */}
            {bookingStep === 4 && (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <span className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
                    {locale === 'pt' ? 'Passo 4 de 4' : locale === 'ar' ? 'الخطوة 4 من 4' : 'Step 4 of 4'}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    {locale === 'pt' ? 'Identificação do Paciente' : locale === 'ar' ? 'بيانات المريض للتأكيد' : 'Patient Information'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {locale === 'pt'
                      ? `Marcação: ${selectedService} em ${selectedDate} às ${selectedTime}`
                      : locale === 'ar'
                      ? `الموعد: ${selectedService} في ${selectedDate} الساعة ${selectedTime}`
                      : `Appointment: ${selectedService} on ${selectedDate} at ${selectedTime}`}
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {locale === 'pt' ? 'Nome Completo' : locale === 'ar' ? 'الاسم الكريم' : 'Full Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={locale === 'pt' ? 'Ex: Ana Cristina Matos' : locale === 'ar' ? 'مثال: سارة محمد' : 'e.g. Sarah Jenkins'}
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {locale === 'pt' ? 'Telemóvel' : locale === 'ar' ? 'رقم الهاتف' : 'Phone'} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+351 912 345 678"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {locale === 'pt' ? 'E-mail' : locale === 'ar' ? 'البريد الإلكتروني' : 'Email'} *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="patient@example.com"
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {locale === 'pt' ? 'Sintomas ou Notas Clínicas (Opcional)' : locale === 'ar' ? 'الأعراض أو ملاحظات طبية (اختياري)' : 'Symptoms or Clinical Notes (Optional)'}
                    </label>
                    <textarea
                      rows={2}
                      placeholder={locale === 'pt' ? 'Ex: Sensibilidade no molar inferior, sangramento nas gengivas...' : locale === 'ar' ? 'مثال: ألم بالضرس السفلي عند شرب السوائل الباردة...' : 'e.g. Sensitivity to cold, chipped crown, bleeding gums...'}
                      value={patientNotes}
                      onChange={(e) => setPatientNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* Honest Frontend Disclaimer */}
                <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 text-[11px] text-cyan-800 dark:text-cyan-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>
                    {locale === 'pt'
                      ? 'Demonstração Frontend: Este é um fluxo simulado desenvolvido pela NexaWeb Studio.'
                      : locale === 'ar'
                      ? 'نموذج محاكاة تفاعلي لواجهة الحجز تم تصميمه بواسطة NexaWeb Studio.'
                      : 'Frontend Demo: Simulated interactive booking workflow designed by NexaWeb Studio.'}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setBookingStep(3)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                  >
                    {locale === 'pt' ? '← Voltar' : locale === 'ar' ? '← السابق' : '← Back'}
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-cyan-600/25 cursor-pointer"
                  >
                    {locale === 'pt' ? 'Confirmar Agendamento' : locale === 'ar' ? 'تأكيد الموعد الطبي' : 'Confirm Appointment'}
                  </button>
                </div>
              </form>
            )}

            {/* Step 5: Beautiful Confirmation State */}
            {bookingStep === 5 && (
              <div className="text-center py-4 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                    {locale === 'pt' ? 'Consulta Agendada' : locale === 'ar' ? 'تم تسجيل موعدك بنجاح' : 'Appointment Confirmed'}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {locale === 'pt' ? 'Estimado(a) ' : locale === 'ar' ? 'أهلاً بك، ' : 'Thank You, '}
                    <span className="text-cyan-600 dark:text-cyan-400">{patientName || 'Patient'}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    {locale === 'pt'
                      ? 'O seu agendamento de demonstração foi registado. Apresente este comprovativo na clínica.'
                      : locale === 'ar'
                      ? 'تم تسجيل حجزك التجريبي بنجاح. يمكنك إبراز رقم الموعد عند الحضور للعيادة.'
                      : 'Your simulated dental booking has been recorded. Present your appointment voucher upon arrival.'}
                  </p>
                </div>

                {/* Voucher Summary Card */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-start space-y-3">
                  <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2.5">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-mono block">REF Nº</span>
                      <span className="font-mono text-base font-bold text-cyan-600 dark:text-cyan-400">{appointmentCode}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold text-xs">
                      Confirmed
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Tratamento:</span>
                      <span className="font-semibold text-slate-900 dark:text-white capitalize">{selectedService}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Data:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{selectedDate}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Horário:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{selectedTime}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Clínica:</span>
                      <span className="font-semibold text-cyan-600 dark:text-cyan-400">NovaSmile Lisboa</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-500 max-w-md mx-auto">
                  ⚠️ {locale === 'pt'
                    ? 'Demonstração comercial interativa da NexaWeb Studio. Não foi submetida uma consulta real para backend.'
                    : locale === 'ar'
                    ? 'معاينة تجريبية تفاعلية تم تطويرها بواسطة NexaWeb Studio. لم يتم إرسال طلب حقيقي لأي عيادة طبية.'
                    : 'Interactive frontend portfolio demo by NexaWeb Studio. No real clinical booking has been submitted.'}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsBookingOpen(false);
                      setBookingStep(1);
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {locale === 'pt' ? 'Fechar' : locale === 'ar' ? 'إغلاق' : 'Close'}
                  </button>
                  <a
                    href={whatsappUrgentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{locale === 'pt' ? 'Notificar via WhatsApp' : locale === 'ar' ? 'متابعة عبر واتساب' : 'Notify via WhatsApp'}</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

