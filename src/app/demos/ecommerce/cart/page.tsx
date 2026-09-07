'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export default function EcommerceCartPage() {
  const { locale, isRTL } = useLanguage();
  const { items, updateQuantity, removeFromCart, subtotal, totalCount } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const discountAmount = discountApplied ? Math.round(subtotal * 0.1) : 0;
  const finalTotal = subtotal - discountAmount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().length > 0) {
      setDiscountApplied(true);
    }
  };

  return (
    <div className="bg-white text-neutral-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="border-b border-neutral-200 pb-6 flex items-end justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
              {locale === 'pt' ? 'Resumo de Compras' : locale === 'ar' ? 'سلة التسوق' : 'Bag Summary'}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-light text-neutral-950 uppercase mt-1">
              {locale === 'pt' ? 'O Seu Saco de Compras' : locale === 'ar' ? 'سلة المشتريات' : 'Your Shopping Bag'}
            </h1>
          </div>
          <span className="text-xs font-mono text-neutral-500">
            {totalCount} {locale === 'pt' ? 'peças selecionadas' : locale === 'ar' ? 'قطع' : 'items'}
          </span>
        </div>

        {items.length === 0 ? (
          <div className="py-24 text-center space-y-6 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-neutral-100 text-neutral-400 flex items-center justify-center mx-auto">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-2xl font-light text-neutral-950 uppercase">
              {locale === 'pt' ? 'O seu saco está vazio' : locale === 'ar' ? 'سلة التسوق فارغة' : 'Your bag is empty'}
            </h2>
            <p className="text-xs text-neutral-500 leading-relaxed font-light">
              {locale === 'pt'
                ? 'Descubra a nossa coleção permanente de sobretudos de caxemira, alfaiataria em lã e artigos de maroquinaria.'
                : locale === 'ar'
                ? 'استكشف مجموعتنا الدائمة من معاطف الكشمير وبناطيل الصوف والمصنوعات الجلدية التوسكانية.'
                : 'Explore our permanent collection of pure cashmeres, worsted wool tailoring, and vegetable-tanned leather goods.'}
            </p>
            <div className="pt-2">
              <Link
                href="/demos/ecommerce/shop"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-neutral-950 text-white font-bold text-xs uppercase tracking-widest hover:bg-black transition-all shadow-md"
              >
                <span>{locale === 'pt' ? 'Ir Para a Loja' : locale === 'ar' ? 'تصفح المتجر' : 'Explore The Shop'}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Items Table (8 cols) */}
            <div className="lg:col-span-8 divide-y divide-neutral-200">
              {items.map((item) => (
                <div key={item.id} className="py-6 first:pt-0 flex flex-col sm:flex-row gap-6">
                  <div className="relative w-28 h-36 rounded-lg bg-neutral-100 overflow-hidden shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name[locale]}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link href={`/demos/ecommerce/product/${item.product.slug}`}>
                          <h3 className="font-serif text-base font-bold text-neutral-950 hover:underline">
                            {item.product.name[locale]}
                          </h3>
                        </Link>
                        <span className="font-mono text-base font-bold text-neutral-950">
                          €{item.product.price * item.quantity}
                        </span>
                      </div>
                      <div className="text-xs text-neutral-500 font-mono mt-1 space-x-3">
                        <span>Size: {item.size}</span>
                        <span>•</span>
                        <span>Color: {item.color}</span>
                        <span>•</span>
                        <span>€{item.product.price} each</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-neutral-300 rounded-lg">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-neutral-100 text-neutral-600"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-4 text-xs font-mono font-bold">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-neutral-100 text-neutral-600"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-neutral-400 hover:text-red-600 flex items-center gap-1 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>{locale === 'pt' ? 'Remover' : locale === 'ar' ? 'حذف' : 'Remove'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-6">
                <Link
                  href="/demos/ecommerce/shop"
                  className="text-xs font-mono uppercase font-bold text-neutral-900 hover:underline flex items-center gap-1.5"
                >
                  <ArrowRight className={`w-3.5 h-3.5 rotate-180 ${isRTL ? 'rotate-0' : ''}`} />
                  <span>{locale === 'pt' ? 'Continuar a Explorar Peças' : locale === 'ar' ? 'مواصلة التسوق' : 'Continue Shopping'}</span>
                </Link>
              </div>
            </div>

            {/* Order Summary Card (4 cols) */}
            <div className="lg:col-span-4 p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-6 lg:sticky lg:top-28">
              <h2 className="font-serif text-xl font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-200 pb-3">
                {locale === 'pt' ? 'Resumo da Encomenda' : locale === 'ar' ? 'ملخص الطلب' : 'Order Summary'}
              </h2>

              <div className="space-y-3 text-xs text-neutral-600">
                <div className="flex justify-between">
                  <span>{locale === 'pt' ? 'Subtotal:' : locale === 'ar' ? 'المجموع الفرعي:' : 'Subtotal:'}</span>
                  <span className="font-mono text-neutral-900 font-bold">€{subtotal}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-emerald-600">
                    <span>{locale === 'pt' ? 'Desconto Especial (10%):' : locale === 'ar' ? 'خصم ترويجي (10%):' : 'Promotion (10%):'}</span>
                    <span className="font-mono font-bold">-€{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-neutral-900" />
                    <span>{locale === 'pt' ? 'Envio Expresso:' : locale === 'ar' ? 'الشحن السريع:' : 'Express Courier:'}</span>
                  </span>
                  <span className="font-mono text-emerald-600 font-bold">{locale === 'pt' ? 'Grátis' : locale === 'ar' ? 'مجاني' : 'Complimentary'}</span>
                </div>
                <div className="border-t border-neutral-200 pt-3 flex justify-between text-sm text-neutral-950 font-bold">
                  <span>{locale === 'pt' ? 'Total Previsto:' : locale === 'ar' ? 'الإجمالي النهائي:' : 'Estimated Total:'}</span>
                  <span className="font-mono text-lg font-black">€{finalTotal}</span>
                </div>
              </div>

              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="pt-2 flex gap-2">
                <input
                  type="text"
                  placeholder={locale === 'pt' ? 'Código promocional' : locale === 'ar' ? 'كود الخصم' : 'Promo code'}
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-2 bg-white rounded-lg border border-neutral-300 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-neutral-200 hover:bg-neutral-300 text-neutral-800 text-xs font-mono uppercase font-semibold cursor-pointer"
                >
                  {locale === 'pt' ? 'Aplicar' : locale === 'ar' ? 'تطبيق' : 'Apply'}
                </button>
              </form>

              {/* Proceed to Checkout CTA */}
              <div className="pt-2">
                <Link
                  href="/demos/ecommerce/checkout"
                  className="w-full py-4 rounded-full bg-neutral-950 hover:bg-black text-white font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-[1.01]"
                >
                  <span>{locale === 'pt' ? 'Avançar Para o Checkout' : locale === 'ar' ? 'متابعة الدفع السريع' : 'Proceed to Checkout'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>

              <div className="p-3 rounded-lg bg-white border border-neutral-200 text-[11px] text-neutral-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-neutral-900 shrink-0" />
                <span>Complimentary express courier & 30-day returns guaranteed.</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

