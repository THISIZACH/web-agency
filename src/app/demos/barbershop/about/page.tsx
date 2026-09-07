'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Scissors, ShieldCheck, Award, Sparkles, CheckCircle2, Clock, Calendar } from 'lucide-react';

export default function BarbershopAboutPage() {
  const { locale } = useLanguage();

  const principles = [
    {
      title: locale === 'pt' ? 'Tesoura & Navalha Clássica' : locale === 'ar' ? 'المقص اليدوي والموس التقليدي' : 'Pure Shear & Razor Mastery',
      desc: locale === 'pt' ? 'Priorizamos o trabalho artesanal de tesoura sobre máquinas elétricas, garantindo transições suaves e duradouras.' : locale === 'ar' ? 'نفضل العمل اليدوي المتقن بالمقص على الماكينات الكهربائية لنمنحك تدرجاً ناعماً يدوم طويلاً.' : 'We prioritize artisanal shear sculpting over electric clippers, producing softer growth lines and longer-lasting shape.',
    },
    {
      title: locale === 'pt' ? 'Cadeiras Belmont Originais' : locale === 'ar' ? 'كراسي بيلمونت الجلدية الأصلية' : 'Authentic Belmont Heritage Chairs',
      desc: locale === 'pt' ? 'Revestidas a couro nobre envelhecido e concebidas para o máximo conforto ergonómico durante todo o atendimento.' : locale === 'ar' ? 'مصنوعة من أجود أنواع الجلد الطبيعي لراحة فائقة واسترخاء تام طوال فترة الجلسة.' : 'Upholstered in rich distressed leather, offering bespoke lumbar comfort throughout your ritual.',
    },
    {
      title: locale === 'pt' ? 'Higiene & Esterilização Hospitalar' : locale === 'ar' ? 'أعلى معايير التعقيم الفندقي' : 'Hospital-Grade Sterilization',
      desc: locale === 'pt' ? 'Lâminas individuais descartáveis e esterilização por autoclave de todos os instrumentos de precisão.' : locale === 'ar' ? 'شفرات حلاقة جديدة لكل عميل، وتعقيم متقدم لكافة الأدوات المعدنية بعد كل استخدام.' : 'Every straight-razor blade is single-use, with all steel instruments sanitized via clinical medical autoclave.',
    },
    {
      title: locale === 'pt' ? 'Bespoke Hospitality' : locale === 'ar' ? 'ضيافة خاصة واستثنائية' : 'Gentleman Hospitality',
      desc: locale === 'pt' ? 'Espresso artesanal de origem única, seleção de whiskies de malte escocês e música ambiente sem ruído.' : locale === 'ar' ? 'قهوة مختصة، مشروبات فاخرة، وأجواء هادئة بدون ضجيج أو استعجال.' : 'Complimentary single-origin espresso, curated single-malt reserve, and bespoke acoustic jazz.',
    },
  ];

  return (
    <div className="bg-[#0d0d0d] text-[#f5f0eb] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Story Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono uppercase tracking-widest">
              <Scissors className="w-3.5 h-3.5 -rotate-45" />
              <span>{locale === 'pt' ? 'A Filosofia North & Blade' : locale === 'ar' ? 'فلسفة الاستوديو' : 'The North & Blade Ethos'}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase leading-tight">
              {locale === 'pt' ? 'O Resgate da Alta Barbearia' : locale === 'ar' ? 'إحياء فنون الحلاقة الراقية' : 'The Renaissance of Gentleman Grooming'}
            </h1>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              {locale === 'pt'
                ? 'Fundada com a convicção de que o corte masculino não deve ser um ato apressado, a North & Blade une o rigor da alfaiataria britânica à tranquilidade de um clube privado londrino.'
                : locale === 'ar'
                ? 'تأسس استوديو نورث آند بليد انطلاقاً من إيمان عميق بأن العناية بمظهر الرجل ليست أمراً سريعاً أو عابراً، بل هي طقس يومي يعكس الانضباط والأناقة الرفيعة.'
                : 'Founded on the conviction that male grooming should never be rushed, North & Blade blends the precision of Savile Row tailoring with the sanctuary of a Mayfair private club.'}
            </p>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              {locale === 'pt'
                ? 'Aqui, cada cliente é recebido pelo nome, o seu perfil de crescimento capilar é mapeado e cada toalha quente é infundida com óleos botânicos colhidos de forma sustentável.'
                : locale === 'ar'
                ? 'هنا، نعتني بكل عميل بشكل شخصي وخاص، نحدد اتجاه نمو الشعر بدقة، ونستخدم مناشف مشبعة بزيوت عطرية عضوية طبيعية.'
                : 'Every gentleman is welcomed by name. We map your hair grain, calibrate blade pressure to your skin sensitivity, and serve coffee roasted specifically for our lounge.'}
            </p>
            <div className="pt-2">
              <Link
                href="/demos/barbershop/book"
                className="inline-flex items-center gap-2 px-8 py-4 rounded bg-[#d4af37] hover:bg-[#e5c158] text-[#0d0d0d] font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-[#d4af37]/20"
              >
                <Calendar className="w-4 h-4" />
                <span>{locale === 'pt' ? 'Marcar Visita' : locale === 'ar' ? 'حجز موعد' : 'Book an Appointment'}</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[480px] rounded-2xl overflow-hidden bg-stone-900 border border-[#d4af37]/30 shadow-2xl">
            <Image
              src="/images/barbershop/barber-lounge.jpg"
              alt="Studio Interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60" />
          </div>
        </div>

        {/* Pillars / Principles */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#d4af37] text-xs font-mono uppercase tracking-[0.2em]">
              {locale === 'pt' ? 'Os Nossos Quatro Pilares' : locale === 'ar' ? 'ركائز الجودة' : 'Our Commitments'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white uppercase">
              {locale === 'pt' ? 'Porque os Clientes Nos Escolhem' : locale === 'ar' ? 'لماذا يفضلنا عملاؤنا' : 'Why Gentlemen Choose Us'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-[#141414] border border-stone-800 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[#d4af37] text-xl font-bold block mb-2">0{i + 1}.</span>
                  <h3 className="font-serif text-lg font-bold text-white">{p.title}</h3>
                  <p className="text-xs text-stone-400 mt-2 leading-relaxed">{p.desc}</p>
                </div>
                <div className="pt-4 border-t border-stone-800/80 flex items-center gap-1 text-[11px] text-[#d4af37]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="font-mono">{locale === 'pt' ? 'Garantia de Padrão' : locale === 'ar' ? 'معيار ثابت' : 'Quality Standard'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

