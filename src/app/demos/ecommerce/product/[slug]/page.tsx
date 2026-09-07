'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { ECOMMERCE_PRODUCTS, ProductItem } from '@/config/ecommerceProducts';
import {
  ShoppingBag,
  Heart,
  Truck,
  RotateCcw,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Plus,
  Minus,
  Check,
} from 'lucide-react';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { locale, isRTL } = useLanguage();
  const router = useRouter();
  const { addToCart } = useCart();

  const product = ECOMMERCE_PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.colorName[locale] || 'Natural');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>(product.image);

  // Accordion states
  const [materialsOpen, setMaterialsOpen] = useState(true);
  const [shippingOpen, setShippingOpen] = useState(false);

  const relatedProducts = ECOMMERCE_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    router.push('/demos/ecommerce/checkout');
  };

  return (
    <div className="bg-white text-neutral-900 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <nav className="text-xs font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2">
          <Link href="/demos/ecommerce" className="hover:text-neutral-900">
            {locale === 'pt' ? 'Início' : locale === 'ar' ? 'الرئيسية' : 'Home'}
          </Link>
          <span>/</span>
          <Link href="/demos/ecommerce/shop" className="hover:text-neutral-900">
            {product.category.toUpperCase()}
          </Link>
          <span>/</span>
          <span className="text-neutral-950 font-bold truncate max-w-[200px] sm:max-w-none">
            {product.name[locale]}
          </span>
        </nav>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Gallery Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative h-[540px] sm:h-[640px] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200">
              <Image
                src={activeImage}
                alt={product.name[locale]}
                fill
                priority
                className="object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded bg-white/90 backdrop-blur-sm text-xs font-mono uppercase font-bold tracking-wider text-neutral-900 shadow-sm">
                  {product.badge[locale]}
                </span>
              )}
            </div>

            {/* Thumbnail selector if gallery has multiple images */}
            {product.gallery.length > 1 && (
              <div className="flex gap-3">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-24 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImage === img ? 'border-neutral-950 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Action Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-2 border-b border-neutral-200 pb-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block">
                {product.category}
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 leading-snug">
                {product.name[locale]}
              </h1>
              <div className="font-mono text-2xl font-black text-neutral-950 pt-1">
                €{product.price}
              </div>
              <p className="text-xs text-neutral-500 font-light leading-relaxed pt-1">
                {product.subtitle[locale]}
              </p>
            </div>

            {/* Color Selector */}
            {product.colors.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs">
                  <span className="font-mono uppercase font-bold text-neutral-900">
                    {locale === 'pt' ? 'Cor:' : locale === 'ar' ? 'اللون:' : 'Color:'}
                  </span>
                  <span className="text-neutral-500">{selectedColor}</span>
                </div>
                <div className="flex gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.colorHex}
                      type="button"
                      onClick={() => setSelectedColor(c.colorName[locale])}
                      title={c.colorName[locale]}
                      style={{ backgroundColor: c.colorHex }}
                      className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer ${
                        selectedColor === c.colorName[locale]
                          ? 'border-neutral-950 scale-125 ring-2 ring-neutral-200'
                          : 'border-white shadow-sm'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs">
                  <span className="font-mono uppercase font-bold text-neutral-900">
                    {locale === 'pt' ? 'Tamanho:' : locale === 'ar' ? 'المقاس:' : 'Size:'}
                  </span>
                  <button type="button" className="text-[11px] underline text-neutral-500 hover:text-neutral-900">
                    {locale === 'pt' ? 'Guia de Medidas' : locale === 'ar' ? 'دليل المقاسات' : 'Size Guide'}
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`min-w-[48px] py-2 px-3 rounded text-xs font-mono font-semibold border transition-all cursor-pointer ${
                        selectedSize === s
                          ? 'bg-neutral-950 text-white border-neutral-950'
                          : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-900'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Controls */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase font-bold text-neutral-900 block">
                {locale === 'pt' ? 'Quantidade:' : locale === 'ar' ? 'الكمية:' : 'Quantity:'}
              </span>
              <div className="inline-flex items-center border border-neutral-300 rounded-lg">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-neutral-100 text-neutral-700"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-xs font-mono font-bold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-neutral-100 text-neutral-700"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* CTAs: Add to Bag & Buy Now */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full py-4 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-[1.01] cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{locale === 'pt' ? 'Adicionar ao Saco de Compras' : locale === 'ar' ? 'إضافة إلى سلة التسوق' : 'Add to Shopping Bag'}</span>
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full py-3.5 rounded-full border-2 border-neutral-950 hover:bg-neutral-950 hover:text-white text-neutral-950 font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
              >
                {locale === 'pt' ? 'Comprar Agora (Checkout Rápido)' : locale === 'ar' ? 'الشراء الآن (دفع فوري)' : 'Buy Now (Instant Checkout)'}
              </button>
            </div>

            {/* Accordion: Materials & Provenance */}
            <div className="border-t border-neutral-200 pt-4 divide-y divide-neutral-200 text-xs">
              <div className="py-3">
                <button
                  type="button"
                  onClick={() => setMaterialsOpen(!materialsOpen)}
                  className="w-full flex justify-between items-center text-left rtl:text-right font-mono uppercase font-bold text-neutral-900 cursor-pointer"
                >
                  <span>{locale === 'pt' ? 'Materiais & Manufatura' : locale === 'ar' ? 'الخامات والمنشأ' : 'Materials & Craft'}</span>
                  {materialsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {materialsOpen && (
                  <div className="mt-3 space-y-2 text-neutral-600 font-light leading-relaxed">
                    <p>{product.materials[locale]}</p>
                    <ul className="space-y-1 pt-1">
                      {product.details[locale].map((d, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Accordion: Shipping & Complimentary Returns */}
              <div className="py-3">
                <button
                  type="button"
                  onClick={() => setShippingOpen(!shippingOpen)}
                  className="w-full flex justify-between items-center text-left rtl:text-right font-mono uppercase font-bold text-neutral-900 cursor-pointer"
                >
                  <span>{locale === 'pt' ? 'Envio & Devoluções Grátis' : locale === 'ar' ? 'الشحن والإرجاع المجاني' : 'Shipping & Global Returns'}</span>
                  {shippingOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {shippingOpen && (
                  <div className="mt-3 space-y-2 text-neutral-600 font-light leading-relaxed">
                    <p>
                      {locale === 'pt'
                        ? 'Envio expresso internacional gratuito através da DHL Express. Entregas entre 1 e 3 dias úteis. Devoluções aceites até 30 dias.'
                        : locale === 'ar'
                        ? 'شحن دولي سريع ومجاني عبر دي إتش إل إكسبريس. التسليم خلال 1 إلى 3 أيام عمل مع إمكانية الإرجاع المجاني خلال 30 يوماً.'
                        : 'Complimentary international courier shipping via DHL Express. Delivery in 1–3 business days. 30-day effortless returns.'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Grid */}
        <div className="border-t border-neutral-200 pt-16 space-y-8">
          <h2 className="font-serif text-2xl font-light text-neutral-950 uppercase tracking-tight">
            {locale === 'pt' ? 'Complete a Silhueta' : locale === 'ar' ? 'قطع مكملة للإطلالة' : 'Complete the Silhouette'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group space-y-3">
                <Link href={`/demos/ecommerce/product/${p.slug}`} className="block relative h-80 rounded bg-neutral-100 overflow-hidden">
                  <Image src={p.image} alt={p.name[locale]} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </Link>
                <div>
                  <h3 className="font-serif text-xs font-bold text-neutral-900 line-clamp-1">{p.name[locale]}</h3>
                  <span className="font-mono text-xs font-bold text-neutral-900">€{p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

