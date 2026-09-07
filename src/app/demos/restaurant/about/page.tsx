'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  Sparkles,
  Award,
  Heart,
  Wine,
  Leaf,
  ArrowRight,
  UtensilsCrossed,
  X,
  ZoomIn,
} from 'lucide-react';

export default function RestaurantAboutPage() {
  const { locale, isRTL } = useLanguage();
  const [lightboxImage, setLightboxImage] = React.useState<{ src: string; title: string } | null>(null);

  const galleryImages = [
    {
      src: '/images/restaurant/restaurant-interior.jpg',
      title: locale === 'pt' ? 'Salão Nobre Iluminado a Velas' : locale === 'ar' ? 'القاعة الرئيسية الفاخرة' : 'Main Dining Ambiance',
    },
    {
      src: '/images/restaurant/chef-story.jpg',
      title: locale === 'pt' ? 'Dólmã & Precisão no Empratamento' : locale === 'ar' ? 'دقة وفن تقديم الأطباق' : 'Artisanal Plating Precision',
    },
    {
      src: '/images/restaurant/wine-cellar.jpg',
      title: locale === 'pt' ? 'Adega Histórica com 400 Rótulos' : locale === 'ar' ? 'قبو المشروبات المعتقة' : 'Sommelier Reserve Vault',
    },
    {
      src: '/images/restaurant/restaurant-hero.jpg',
      title: locale === 'pt' ? 'Bar de Cocktails de Assinatura' : locale === 'ar' ? 'ركن المشروبات المميزة' : 'Craft Cocktail Lounge',
    },
    {
      src: '/images/restaurant/restaurant-dish-01.jpg',
      title: locale === 'pt' ? 'Pesca Fresca da Manhã' : locale === 'ar' ? 'صيد البحر الطازج يومياً' : 'Daily Ocean Catch',
    },
    {
      src: '/images/restaurant/restaurant-dish-02.jpg',
      title: locale === 'pt' ? 'Cozinha Aberta ao Vivo' : locale === 'ar' ? 'المطبخ التفاعلي المفتوح' : 'Open Kitchen Mastery',
    },
  ];

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs uppercase tracking-widest font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'Paixão, Origem & Tradição' : locale === 'ar' ? 'شغف، أصالة وتراث طهي' : 'Heritage & Culinary Craft'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
            {locale === 'pt' ? 'A Nossa História & Filosofia' : locale === 'ar' ? 'قصتنا وفلسفة الشيف' : 'Our Story & Culinary Philosophy'}
          </h1>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            {locale === 'pt'
              ? 'Fundado sob a convicção de que cada prato deve contar uma história autêntica de terra, mar e dedicação intemporal.'
              : locale === 'ar'
              ? 'تأسس مطعم سافور على إيمان عميق بأن كل طبق يجب أن يروي قصة فريدة من الأصالة والاهتمام بأدق التفاصيل.'
              : 'Founded on the conviction that dining is an art form bridging regenerative organic earth and ocean terroir.'}
          </p>
        </div>

        {/* Executive Chef Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-stone-900/40 border border-amber-500/20 rounded-3xl p-8 sm:p-12">
          <div className="lg:col-span-5 relative h-96 sm:h-[480px] rounded-2xl overflow-hidden border border-stone-800 shadow-2xl">
            <Image
              src="/images/restaurant/chef-story.jpg"
              alt="Executive Chef Jean-Luc Moreau"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 rtl:left-auto rtl:right-6">
              <span className="font-serif text-xl font-bold text-white block">Jean-Luc Moreau</span>
              <span className="text-xs text-amber-400 font-semibold tracking-wider uppercase">
                {locale === 'pt' ? 'Chefe Executivo & Criador' : locale === 'ar' ? 'رئيس الطهاة ومؤسس القائمة' : 'Executive Chef & Founder'}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold">
                {locale === 'pt' ? 'O Mestre da Cozinha' : locale === 'ar' ? 'فلسفة الطهي' : 'The Visionary Behind the Menu'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                {locale === 'pt' ? (
                  <>
                    &ldquo;Cozinhar é honrar a natureza no seu <span className="text-amber-400 italic">estado mais puro</span>.&rdquo;
                  </>
                ) : locale === 'ar' ? (
                  <>
                    &ldquo;الطهي هو تكريم الطبيعة في <span className="text-amber-400 italic">أنقى حالاتها</span>.&rdquo;
                  </>
                ) : (
                  <>
                    &ldquo;To cook is to celebrate nature in its <span className="text-amber-400 italic">purest truth</span>.&rdquo;
                  </>
                )}
              </h2>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed">
              {locale === 'pt'
                ? 'Com mais de 18 anos de experiência em restaurantes galardoados com três estrelas Michelin em Lyon, Paris e San Sebastián, o Chefe Jean-Luc Moreau trouxe para Lisboa a sua visão de uma cozinha de autor calorosa, honesta e profundamente respeitadora do ciclo natural das estações.'
                : locale === 'ar'
                ? 'بخبرة تمتد لأكثر من 18 عاماً في مطاعم ميشلان الثلاث نجوم في ليون وباريس وسان سيباستيان، نقل الشيف جان لوك موريو رؤيته المتميزة إلى لشبونة، ليقدم أطباقاً تحتفي بأصالة المذاق ومواسم الطبيعة دون تكلف.'
                : 'Having refined his craft across 3-star Michelin kitchens in Lyon, Paris, and San Sebastián, Chef Jean-Luc Moreau established Savor to reconnect guests with unadulterated provenance, woodfire precision, and seasonal intuition.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-stone-900/60 border border-stone-800">
                <Leaf className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-200 text-xs">{locale === 'pt' ? 'Origem Biológica' : locale === 'ar' ? 'مزارع عضوية معتمدة' : 'Zero Industrial Sourcing'}</h4>
                  <p className="text-[11px] text-stone-400 mt-1">{locale === 'pt' ? 'Ervas e legumes colhidos em quintas parceiras a menos de 40km' : locale === 'ar' ? 'خضار وأعشاب طازجة من مزارع قريبة' : 'Produce harvested within 40km of our kitchen'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-stone-900/60 border border-stone-800">
                <Wine className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-200 text-xs">{locale === 'pt' ? 'Harmonização Biodinâmica' : locale === 'ar' ? 'مشروبات نادرة ومعتقة' : 'Biodynamic Vintages'}</h4>
                  <p className="text-[11px] text-stone-400 mt-1">{locale === 'pt' ? 'Vinhos de pequenos produtores independentes' : locale === 'ar' ? 'خيارات مختارة من منتجين مستقلين' : 'Small-lot independent terroir winemakers'}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/demos/restaurant/reservations"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-500/20"
              >
                <span>{locale === 'pt' ? 'Reservar Mesa do Chefe' : locale === 'ar' ? 'حجز طاولة الشيف' : "Reserve Chef's Table"}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>
        </div>

        {/* Atmosphere Gallery */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold">
              {locale === 'pt' ? 'Galeria Fotográfica' : locale === 'ar' ? 'معرض صور المطعم' : 'Atmosphere Showcase'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              {locale === 'pt' ? 'Um Vislumbre do Nosso Espaço' : locale === 'ar' ? 'لمحات من أجواء سافور' : 'A Glimpse into the Savor Experience'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightboxImage(img)}
                className="group relative h-72 rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 cursor-pointer text-start w-full focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute top-4 right-4 p-2 rounded-full bg-stone-950/70 border border-amber-500/30 text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn className="w-4 h-4" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-xs font-semibold text-stone-200">
                  {img.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-stone-300 hover:text-white p-2 rounded-full bg-stone-900/80 border border-stone-700 hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-stone-950">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-center font-serif text-lg font-bold text-amber-300">
              {lightboxImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
