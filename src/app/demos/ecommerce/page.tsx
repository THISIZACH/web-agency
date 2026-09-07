'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { ECOMMERCE_PRODUCTS, ECOMMERCE_COLLECTIONS, ECOMMERCE_JOURNAL } from '@/config/ecommerceProducts';
import { ArrowRight, ShoppingBag, Sparkles, Shield, RefreshCw, Truck } from 'lucide-react';

export default function EcommerceHomePage() {
  const { locale, isRTL } = useLanguage();
  const { addToCart } = useCart();

  const featured = ECOMMERCE_PRODUCTS.slice(0, 4);
  const bestSellers = ECOMMERCE_PRODUCTS.slice(4, 8);

  return (
    <div className="bg-white text-neutral-900">
      {/* Campaign Hero Section */}
      <section className="relative h-[90vh] min-h-[640px] flex items-center justify-center overflow-hidden bg-neutral-100">
        <Image
          src="/images/ecommerce/hero-campaign.jpg"
          alt="VELORA Autumn Winter Campaign"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-95 scale-100 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white space-y-6">
          <span className="inline-block text-xs uppercase font-mono tracking-[0.3em] bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            {locale === 'pt' ? 'Coleção de Outono / Inverno 2026' : locale === 'ar' ? 'مجموعة خريف / شتاء 2026' : 'Autumn / Winter 2026 Collection'}
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight uppercase leading-tight">
            The Architecture <br />
            <span className="italic font-serif font-normal">of Restraint.</span>
          </h1>

          <p className="text-neutral-200 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            {locale === 'pt'
              ? 'Silhuetas puras talhadas em caxemiras puras da Mongólia e lãs penteadas inglesas. Feito para transcender o tempo.'
              : locale === 'ar'
              ? 'قصات معمارية نقية منسوجة من أندر ألياف الكشمير المنغولي والصوف الإنجليزي الفاخر. مصممة لتتحدى مواسم الموضة العابرة.'
              : 'Sculpted silhouettes tailored from certified Mongolian cashmeres and English worsted wools. Engineered for permanence.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/demos/ecommerce/shop"
              prefetch={true}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105"
            >
              {locale === 'pt' ? 'Descobrir a Coleção' : locale === 'ar' ? 'استكشف المجموعة' : 'Explore Collection'}
            </Link>
            <Link
              href="/demos/ecommerce/collections"
              prefetch={true}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/40 hover:bg-black/60 border border-white/30 text-white font-medium text-xs uppercase tracking-widest transition-all backdrop-blur-md flex items-center justify-center gap-2"
            >
              <span>{locale === 'pt' ? 'Ver Lookbook' : locale === 'ar' ? 'تصفح عروض الأزياء' : 'View Lookbook'}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Luxury Value Pillars Strip */}
      <section className="py-6 border-b border-neutral-200 bg-neutral-50/60 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex items-center justify-center gap-2.5 text-neutral-700">
            <Truck className="w-4 h-4 text-neutral-900 shrink-0" />
            <span className="font-mono uppercase tracking-wider text-[11px]">{locale === 'pt' ? 'Envio Expresso Global' : locale === 'ar' ? 'شحن دولي سريع مجاني' : 'Express Global Courier'}</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-neutral-700">
            <Sparkles className="w-4 h-4 text-neutral-900 shrink-0" />
            <span className="font-mono uppercase tracking-wider text-[11px]">{locale === 'pt' ? '100% Fibras Naturais' : locale === 'ar' ? 'ألياف طبيعية نقية 100%' : '100% Certified Fibers'}</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-neutral-700">
            <RefreshCw className="w-4 h-4 text-neutral-900 shrink-0" />
            <span className="font-mono uppercase tracking-wider text-[11px]">{locale === 'pt' ? 'Devoluções 30 Dias' : locale === 'ar' ? 'إرجاع سهل خلال 30 يوماً' : '30-Day Effortless Return'}</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-neutral-700">
            <Shield className="w-4 h-4 text-neutral-900 shrink-0" />
            <span className="font-mono uppercase tracking-wider text-[11px]">{locale === 'pt' ? 'Garantia de Manufatura' : locale === 'ar' ? 'ضمان الحرفية الدائمة' : 'Lifetime Craft Warranty'}</span>
          </div>
        </div>
      </section>

      {/* Featured Pieces (Editorial Grid) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
              {locale === 'pt' ? 'Seleção Editorial' : locale === 'ar' ? 'مختارات الموسم' : 'Curated Selection'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-neutral-950 uppercase tracking-tight mt-1">
              {locale === 'pt' ? 'Destaques do Atelier' : locale === 'ar' ? 'أبرز قطع الأتيليه' : 'Atelier Signatures'}
            </h2>
          </div>
          <Link
            href="/demos/ecommerce/shop"
            prefetch={true}
            className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            <span>{locale === 'pt' ? 'Ver Toda a Loja' : locale === 'ar' ? 'استعراض كافة المنتجات' : 'View Full Catalog'}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product) => (
            <div key={product.id} className="group flex flex-col justify-between space-y-4">
              <Link href={`/demos/ecommerce/product/${product.slug}`} prefetch={true} className="block relative h-96 rounded bg-neutral-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name[locale]}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/90 backdrop-blur-sm text-[10px] font-mono uppercase font-bold tracking-wider text-neutral-900">
                    {product.badge[locale]}
                  </span>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="w-full py-3 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{locale === 'pt' ? 'Adicionar ao Saco' : locale === 'ar' ? 'إضافة للسلة' : 'Quick Add'}</span>
                  </button>
                </div>
              </Link>

              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <Link href={`/demos/ecommerce/product/${product.slug}`} prefetch={true}>
                    <h3 className="font-serif text-sm font-bold text-neutral-900 hover:text-neutral-600 transition-colors line-clamp-1">
                      {product.name[locale]}
                    </h3>
                  </Link>
                  <span className="font-mono text-xs font-bold text-neutral-900 ml-2">
                    €{product.price}
                  </span>
                </div>
                <p className="text-xs text-neutral-500 line-clamp-1">{product.subtitle[locale]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Large Campaign Editorial Banner */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 relative h-[520px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/ecommerce/campaign-editorial.jpg"
                alt="Campaign Editorial"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-5 space-y-6 lg:pl-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
                {locale === 'pt' ? 'Manifesto do Atelier' : locale === 'ar' ? 'فلسفة التصميم' : 'The Creative Direction'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-neutral-950 uppercase tracking-tight leading-tight">
                {locale === 'pt' ? 'Vestuário Criado Para Não Envelhecer' : locale === 'ar' ? 'أزياء راقية لا تخضع للزمن' : 'Garments Crafted to Outlive Trends.'}
              </h2>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
                {locale === 'pt'
                  ? 'Rejeitamos o ciclo de consumo desenfreado. Cada casaco, calça e mala da VELORA é confecionado com margens generosas para ajustes alfaiatados, permitindo que a peça se adapte ao seu corpo ao longo de décadas.'
                  : locale === 'ar'
                  ? 'نرفض تماماً موضة الاستهلاك السريع. كل معطف وبنطال وحقيبة في دار فيلورا يتم حياكته بمرونة تتيح التعديل والتخصيص ليبقى جزءاً من أناقتك عبر السنين.'
                  : 'We reject seasonal obsolescence. Every coat, trouser, and leather bag is built with generous internal inlays for lifelong tailoring adjustments, ensuring the garment evolves with your personal journey.'}
              </p>
              <div className="pt-2">
                <Link
                  href="/demos/ecommerce/about"
                  prefetch={true}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-black text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md"
                >
                  <span>{locale === 'pt' ? 'Ler o Nosso Manifesto' : locale === 'ar' ? 'اقرأ بيان الدار' : 'Read Our Manifesto'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Discovery Tiles */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
            {locale === 'pt' ? 'Categorias de Alfaiataria' : locale === 'ar' ? 'أقسام المتجر' : 'Curated Categories'}
          </span>
          <h2 className="font-serif text-3xl font-light text-neutral-950 uppercase">
            {locale === 'pt' ? 'Descubra por Universo' : locale === 'ar' ? 'استكشف حسب القسم' : 'Discover by Category'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ECOMMERCE_COLLECTIONS.map((col, idx) => (
            <Link
              key={idx}
              href="/demos/ecommerce/shop"
              className="group relative h-96 rounded-xl overflow-hidden bg-neutral-100 flex flex-col justify-end p-6"
            >
              <Image
                src={col.image}
                alt={col.title[locale]}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative z-10 text-white space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300">{col.itemCount}</span>
                <h3 className="font-serif text-xl font-bold">{col.title[locale]}</h3>
                <p className="text-xs text-neutral-300 font-light line-clamp-1">{col.subtitle[locale]}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers Grid */}
      <section className="py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
              {locale === 'pt' ? 'Favoritos Permanentes' : locale === 'ar' ? 'الأكثر طلباً' : 'The Permanent Wardrobe'}
            </span>
            <h2 className="font-serif text-3xl font-light text-neutral-950 uppercase">
              {locale === 'pt' ? 'Peças Mais Procuradas' : locale === 'ar' ? 'القطع الأكثر مبيعاً' : 'Most Coveted Pieces'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <div key={product.id} className="group flex flex-col justify-between space-y-4">
                <Link href={`/demos/ecommerce/product/${product.slug}`} prefetch={true} className="block relative h-96 rounded bg-neutral-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name[locale]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/90 backdrop-blur-sm text-[10px] font-mono uppercase font-bold tracking-wider text-neutral-900">
                      {product.badge[locale]}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="w-full py-3 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{locale === 'pt' ? 'Adicionar ao Saco' : locale === 'ar' ? 'إضافة للسلة' : 'Quick Add'}</span>
                    </button>
                  </div>
                </Link>

                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <Link href={`/demos/ecommerce/product/${product.slug}`} prefetch={true}>
                      <h3 className="font-serif text-sm font-bold text-neutral-900 hover:text-neutral-600 transition-colors line-clamp-1">
                        {product.name[locale]}
                      </h3>
                    </Link>
                    <span className="font-mono text-xs font-bold text-neutral-900 ml-2">
                      €{product.price}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 line-clamp-1">{product.subtitle[locale]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Journal Preview */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
              {locale === 'pt' ? 'Caderno Têxtil' : locale === 'ar' ? 'مقالات الأتيليه' : 'From the Journal'}
            </span>
            <h2 className="font-serif text-3xl font-light text-neutral-950 uppercase mt-1">
              {locale === 'pt' ? 'Ensaios de Moda & Matéria' : locale === 'ar' ? 'رؤى حول الأناقة والمنسوجات' : 'Essays on Craft & Texture'}
            </h2>
          </div>
          <Link
            href="/demos/ecommerce/journal"
            prefetch={true}
            className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-neutral-900 hover:text-neutral-600"
          >
            <span>{locale === 'pt' ? 'Ler Todos os Ensaios' : locale === 'ar' ? 'قراءة كافة المقالات' : 'Read All Essays'}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ECOMMERCE_JOURNAL.map((post) => (
            <div key={post.slug} className="group space-y-4">
              <div className="relative h-64 rounded-xl overflow-hidden bg-neutral-100">
                <Image
                  src={post.image}
                  alt={post.title[locale]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400 uppercase">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-neutral-950 group-hover:text-neutral-600 transition-colors">
                  {post.title[locale]}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  {post.excerpt[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

