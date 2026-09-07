'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  UtensilsCrossed,
  Clock,
  MapPin,
  Star,
  Calendar,
  Sparkles,
  ArrowRight,
  Wine,
  Award,
  X,
  CheckCircle2,
} from 'lucide-react';

export default function RestaurantHomePage() {
  const { locale, isRTL } = useLanguage();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [partySize, setPartySize] = React.useState('2');
  const [date, setDate] = React.useState('2026-09-12');
  const [time, setTime] = React.useState('19:30');
  const [guestName, setGuestName] = React.useState('');
  const [confirmedCode, setConfirmedCode] = React.useState<string | null>(null);

  const chefSpecials = [
    {
      title: locale === 'pt' ? 'Robalo Selvagem em Crosta de Sal' : locale === 'ar' ? 'سمك القاروص البري في قشرة الملح' : 'Wild Atlantic Sea Bass in Sea Salt Crust',
      desc: locale === 'pt' ? 'Acompanhado de risoto de açafrão, espargos verdes grelhados e infusão de citrinos do Algarve.' : locale === 'ar' ? 'يقدم مع ريزوتو الزعفران الفاخر، الهليون المشوي ومستخلص الحمضيات الطبيعية.' : 'Served with saffron risotto, charred green asparagus, and Algarve citrus emulsion.',
      price: locale === 'ar' ? '$38' : '€36',
      badge: locale === 'pt' ? 'Especial de Hoje' : locale === 'ar' ? 'طبق اليوم المميز' : "Today's Special",
      image: '/images/restaurant/restaurant-dish-01.jpg',
    },
    {
      title: locale === 'pt' ? 'Bife Black Angus Maturado 45 Dias' : locale === 'ar' ? 'ستيك بلاك أنجوس معتق 45 يوماً' : '45-Day Dry-Aged Black Angus Ribeye',
      desc: locale === 'pt' ? 'Grelhado a carvão vegetal com puré trufado de batata rústica e redução de vinho do Porto.' : locale === 'ar' ? 'مشوي على الفحم مع بيوريه البطاطس بالكمأة وصوص العنب المعتق الفاخر.' : 'Charcoal seared with white truffle potato mousseline and port wine reduction.',
      price: locale === 'ar' ? '$46' : '€42',
      badge: locale === 'pt' ? 'Corte Nobre' : locale === 'ar' ? 'اختيار الشيف' : "Chef's Cut",
      image: '/images/restaurant/restaurant-dish-02.jpg',
    },
    {
      title: locale === 'pt' ? 'Ravioli Artesanal de Cantarelos & Ricotta' : locale === 'ar' ? 'رافيولي فطر الغابات وجبن الريكوتا' : 'Handmade Chanterelle & Buffalo Ricotta Ravioli',
      desc: locale === 'pt' ? 'Massa fresca feita diariamente, manteiga de sálvia crocante e avelãs tostadas.' : locale === 'ar' ? 'باستا طازجة تحضر يومياً مع زبدة الميرمية المقرمشة والبندق المحمص.' : 'Fresh daily pasta, crispy garden sage butter, and toasted Piedmont hazelnuts.',
      price: locale === 'ar' ? '$32' : '€28',
      badge: locale === 'pt' ? 'Vegetariano' : locale === 'ar' ? 'نباتي مميز' : 'Vegetarian',
      image: '/images/restaurant/restaurant-dish-03.jpg',
    },
  ];

  return (
    <div className="bg-stone-950 text-stone-100">
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        <Image
          src="/images/restaurant/restaurant-hero.jpg"
          alt="Savor Luxury Dining Hall"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35 filter brightness-90 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'Guia Michelin 2024 — Seleção Recomendada' : locale === 'ar' ? 'دليل ميشلان 2024 — اختيار موصى به' : 'Michelin Guide 2024 — Recommended Selection'}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            {locale === 'pt' ? (
              <>
                Sabores Puros. <span className="text-amber-400 italic">Alta Cozinha</span> Contemporânea.
              </>
            ) : locale === 'ar' ? (
              <>
                مذاق استثنائي. <span className="text-amber-400 italic">فن الطهي</span> المعاصر الراقي.
              </>
            ) : (
              <>
                Where Culinary Art <span className="text-amber-400 italic">Meets Modern Passion</span>
              </>
            )}
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {locale === 'pt'
              ? 'Uma viagem sensorial pela gastronomia costeira e sazonal. Produtos biológicos locais e uma carta de vinhos criteriosamente selecionada.'
              : locale === 'ar'
              ? 'رحلة حسية فريدة بين أطباق البحر الأبيض المتوسط والمكونات العضوية الطازجة، مع قائمة مشروبات معتقة مختارة بعناية فائقة.'
              : 'A modern tribute to seasonal coastal ingredients, hand-harvested produce, and an extraordinary 400-label wine cellar.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-amber-500/20 hover:scale-105 cursor-pointer"
            >
              {locale === 'pt' ? 'Reservar Mesa' : locale === 'ar' ? 'حجز طاولة الآن' : 'Reserve a Table'}
            </button>
            <Link
              href="/demos/restaurant/menu"
              prefetch={true}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-stone-900/80 hover:bg-stone-800 border border-stone-700 text-stone-200 hover:text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>{locale === 'pt' ? 'Ver Ementa' : locale === 'ar' ? 'استعراض القائمة' : 'Explore Menu'}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="py-8 bg-stone-900/60 border-y border-amber-500/20 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="block font-serif text-amber-400 text-xl font-bold">100% Organic</span>
            <span className="text-stone-400">{locale === 'pt' ? 'Produtores Locais' : locale === 'ar' ? 'مزارع محلية عضوية' : 'Locally Sourced'}</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-amber-400 text-xl font-bold">400+ Labels</span>
            <span className="text-stone-400">{locale === 'pt' ? 'Adega Climatizada' : locale === 'ar' ? 'قبو مشروبات فاخر' : 'Curated Wine Vault'}</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-amber-400 text-xl font-bold">Chef Moreau</span>
            <span className="text-stone-400">{locale === 'pt' ? '3 Estrelas de Experiência' : locale === 'ar' ? 'خبرة ميشلان العريقة' : '3-Star Pedigree'}</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-amber-400 text-xl font-bold">Private Dining</span>
            <span className="text-stone-400">{locale === 'pt' ? 'Salas Exclusivas' : locale === 'ar' ? 'صالات خاصة للمناسبات' : 'Exclusive Lounges'}</span>
          </div>
        </div>
      </section>

      {/* Chef's Daily Specials Showcase */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold">
            {locale === 'pt' ? 'Sazonal & Fresco' : locale === 'ar' ? 'أطباق اليوم الطازجة' : 'Seasonal & Fresh'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            {locale === 'pt' ? 'Destaques do Chefe de Hoje' : locale === 'ar' ? 'إبداعات الشيف اليومية' : "Today's Chef Highlights"}
          </h2>
          <p className="text-stone-400 text-sm">
            {locale === 'pt'
              ? 'Receitas preparadas de acordo com as melhores colheitas diárias e o melhor peixe fresco da lota.'
              : locale === 'ar'
              ? 'وصفات استثنائية يتم إعدادها يومياً وفقاً لأفضل المحاصيل ومصائد الأسماك الطازجة.'
              : 'Dishes thoughtfully curated according to daily morning harvests and pristine Atlantic catches.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {chefSpecials.map((dish, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-stone-900/50 border border-stone-800 hover:border-amber-500/40 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md border border-amber-500/30 text-amber-400 text-[11px] font-semibold">
                  {dish.badge}
                </div>
                <div className="absolute bottom-4 right-4 rtl:right-auto rtl:left-4 px-3 py-1 rounded-full bg-amber-500 text-stone-950 font-bold text-xs shadow-md">
                  {dish.price}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {dish.title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/demos/restaurant/menu"
            prefetch={true}
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>{locale === 'pt' ? 'Ver Toda a Ementa (Entradas, Pratos, Sobremesas & Vinhos)' : locale === 'ar' ? 'عرض قائمة الطعام الكاملة (المقبلات، الأطباق الرئيسية، الحلويات)' : 'View Full Menu (Appetizers, Mains, Desserts & Drinks)'}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>

      {/* Experience & Atmosphere Preview */}
      <section className="py-20 bg-stone-900/30 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold">
                {locale === 'pt' ? 'Ambiente Exclusivo' : locale === 'ar' ? 'أجواء استثنائية' : 'Atmosphere & Design'}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
                {locale === 'pt' ? (
                  <>
                    Um Refúgio Íntimo no <span className="text-amber-400 italic">Coração da Cidade</span>
                  </>
                ) : locale === 'ar' ? (
                  <>
                    ملاذ هادئ وراقٍ في <span className="text-amber-400 italic">قلب المدينة</span>
                  </>
                ) : (
                  <>
                    An Intimate Haven in the <span className="text-amber-400 italic">Heart of the City</span>
                  </>
                )}
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed">
                {locale === 'pt'
                  ? 'Iluminação quente a meia luz, acústica desenhada para conversas tranquilas, mármores nobres e arte contemporânea selecionada. Seja para um jantar romântico a dois, uma reunião de negócios ou uma celebração familiar privada.'
                  : locale === 'ar'
                  ? 'إضاءة دافئة هادئة، هندسة صوتية مريحة للمحادثات، رخام فاخر ولمسات فنية معاصرة. المكان الأمثل لعشاء رومانسي، لقاءات العمل الرفيعة، أو الاحتفالات العائلية الخاصة.'
                  : 'Gentle candlelit warmth, precision acoustic architecture for discreet dialogue, rich natural stone, and curated contemporary artwork.'}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-stone-900/70 border border-stone-800">
                  <Wine className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="font-semibold text-stone-200 text-sm">{locale === 'pt' ? 'Garrafeira Privada' : locale === 'ar' ? 'قبو النبيذ الخاص' : 'Sommelier Cellar'}</h4>
                  <p className="text-xs text-stone-400 mt-1">{locale === 'pt' ? 'Visitas e provas orientadas' : locale === 'ar' ? 'جلسات تذوق بإشراف الخبير' : 'Curated wine pairings'}</p>
                </div>
                <div className="p-4 rounded-xl bg-stone-900/70 border border-stone-800">
                  <Award className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="font-semibold text-stone-200 text-sm">{locale === 'pt' ? 'Mesa do Chefe' : locale === 'ar' ? 'طاولة الشيف الحصرية' : "Chef's Table"}</h4>
                  <p className="text-xs text-stone-400 mt-1">{locale === 'pt' ? 'Experiência gastronómica em direto' : locale === 'ar' ? 'مشاهدة إعداد الأطباق مباشرة' : 'Direct kitchen viewing'}</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/demos/restaurant/about"
                  prefetch={true}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>{locale === 'pt' ? 'Conhecer a Filosofia do Chefe' : locale === 'ar' ? 'تعرف على قصة الشيف وفلسفتنا' : 'Discover Our Chef & Philosophy'}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden border border-stone-800">
                  <Image
                    src="/images/restaurant/restaurant-interior.jpg"
                    alt="Dining Room"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-44 rounded-2xl overflow-hidden border border-stone-800">
                  <Image
                    src="/images/restaurant/wine-cellar.jpg"
                    alt="Wine Cellar"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-44 rounded-2xl overflow-hidden border border-stone-800">
                  <Image
                    src="/images/restaurant/chef-story.jpg"
                    alt="Chef Plating"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden border border-stone-800">
                  <Image
                    src="/images/restaurant/restaurant-dish-04.jpg"
                    alt="Signature Cocktails and Cuisine"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fast Reservation Call to Action Banner */}
      <section className="py-20 bg-gradient-to-b from-stone-950 to-stone-900 border-t border-amber-500/20 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">
            {locale === 'pt' ? 'Lugares Limitados' : locale === 'ar' ? 'المقاعد محدودة يومياً' : 'Limited Daily Seating'}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            {locale === 'pt' ? 'Reserve a Sua Experiência Gastronómica' : locale === 'ar' ? 'احجز طاولتك لتجربة عشاء لا تُنسى' : 'Book Your Unforgettable Evening'}
          </h2>
          <p className="text-stone-400 text-sm">
            {locale === 'pt'
              ? 'Garantimos uma mesa preparada ao pormenor para si e para os seus convidados. Confirmação imediata.'
              : locale === 'ar'
              ? 'نضمن لك ولضيوفك طاولة مهيأة بأعلى معايير الضيافة. تأكيد فوري للحجز.'
              : 'Secure your preferred seating area and dining time with instant online confirmation.'}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-sm tracking-wider uppercase transition-all shadow-xl shadow-amber-600/25 hover:scale-105 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{locale === 'pt' ? 'Reserva Instantânea' : locale === 'ar' ? 'حجز فوري مباشر' : 'Instant Table Reservation'}</span>
            </button>
            <Link
              href="/demos/restaurant/reservations"
              prefetch={true}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 text-sm font-semibold uppercase tracking-wider transition-all"
            >
              <span>{locale === 'pt' ? 'Ver Opções de Sala' : locale === 'ar' ? 'خيارات الجلوس الكاملة' : 'View Seating Options'}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Table Reservation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-stone-900 border border-amber-500/30 p-5 sm:p-8 shadow-2xl text-stone-100 space-y-6">
            <button
              type="button"
              onClick={() => {
                setIsModalOpen(false);
                setConfirmedCode(null);
              }}
              className="absolute top-5 right-5 rtl:right-auto rtl:left-5 text-stone-400 hover:text-white p-1 rounded-full hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {confirmedCode ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {locale === 'pt' ? 'Mesa Confirmada com Sucesso!' : locale === 'ar' ? 'تم تأكيد حجز طاولتك بنجاح!' : 'Table Reserved Successfully!'}
                </h3>
                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-2 text-xs">
                  <div className="flex justify-between text-stone-400">
                    <span>{locale === 'pt' ? 'Código de Reserva' : locale === 'ar' ? 'رمز الحجز' : 'Booking Code'}</span>
                    <span className="font-mono font-bold text-amber-400">{confirmedCode}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>{locale === 'pt' ? 'Convidados' : locale === 'ar' ? 'عدد الضيوف' : 'Guests'}</span>
                    <span className="font-semibold text-stone-200">{partySize} {locale === 'pt' ? 'Pessoas' : locale === 'ar' ? 'ضيوف' : 'Guests'}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>{locale === 'pt' ? 'Data & Hora' : locale === 'ar' ? 'التاريخ والوقت' : 'Date & Time'}</span>
                    <span className="font-semibold text-stone-200">{date} @ {time}</span>
                  </div>
                </div>
                <p className="text-xs text-stone-400">
                  {locale === 'pt'
                    ? 'Demonstração Frontend NexaWeb Studio: A sua simulação de reserva foi gerada com sucesso.'
                    : locale === 'ar'
                    ? 'نموذج محاكاة تجريبي من NexaWeb Studio: تم تأكيد محاكاة حجز الطاولة بنجاح.'
                    : 'Frontend Sales Demo: Interactive reservation simulation generated successfully.'}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setConfirmedCode(null);
                  }}
                  className="w-full py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {locale === 'pt' ? 'Fechar' : locale === 'ar' ? 'إغلاق' : 'Close'}
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setConfirmedCode(`SAVOR-${Math.floor(1000 + Math.random() * 9000)}`);
                }}
                className="space-y-4"
              >
                <div>
                  <span className="text-amber-400 text-[11px] uppercase tracking-widest font-bold block">
                    {locale === 'pt' ? 'Reserva Rápida' : locale === 'ar' ? 'حجز سريع' : 'Fast Booking'}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {locale === 'pt' ? 'Garanta a Sua Mesa' : locale === 'ar' ? 'احجز طاولتك الآن' : 'Reserve Your Table'}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-stone-400 mb-1">
                      {locale === 'pt' ? 'Nº de Pessoas' : locale === 'ar' ? 'عدد الأشخاص' : 'Party Size'}
                    </label>
                    <select
                      value={partySize}
                      onChange={(e) => setPartySize(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-amber-500"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-stone-400 mb-1">
                      {locale === 'pt' ? 'Horário' : locale === 'ar' ? 'الوقت' : 'Time'}
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-amber-500"
                    >
                      {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-stone-400 mb-1">
                    {locale === 'pt' ? 'Data' : locale === 'ar' ? 'التاريخ' : 'Date'}
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-stone-400 mb-1">
                    {locale === 'pt' ? 'Nome do Responsável' : locale === 'ar' ? 'اسم الضيف' : 'Guest Name'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={locale === 'pt' ? 'Ex: Dr. Miguel Costa' : locale === 'ar' ? 'مثال: فيصل العتيبي' : 'e.g. Eleanor Vance'}
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  {locale === 'pt' ? 'Confirmar Reserva Imediata' : locale === 'ar' ? 'تأكيد الحجز الفوري' : 'Confirm Instant Reservation'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
