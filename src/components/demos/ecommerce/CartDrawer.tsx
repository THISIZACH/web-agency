'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';

export function CartDrawer() {
  const { locale, isRTL } = useLanguage();
  const { items, isDrawerOpen, setIsDrawerOpen, updateQuantity, removeFromCart, subtotal, totalCount } = useCart();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10 rtl:pl-0 rtl:pr-10">
        <div className="w-full max-w-md bg-white text-neutral-900 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-neutral-900" />
              <h2 className="font-serif text-lg font-bold uppercase tracking-wider">
                {locale === 'pt' ? 'O Seu Carrinho' : locale === 'ar' ? 'سلة المشتريات' : 'Shopping Bag'}
              </h2>
              <span className="text-xs font-mono text-neutral-500">({totalCount})</span>
            </div>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 cursor-pointer"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-neutral-100 text-neutral-400 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <p className="text-sm font-serif text-neutral-500">
                  {locale === 'pt' ? 'O seu saco está atualmente vazio.' : locale === 'ar' ? 'سلة التسوق فارغة حالياً.' : 'Your shopping bag is currently empty.'}
                </p>
                <Link
                  href="/demos/ecommerce/shop"
                  onClick={() => setIsDrawerOpen(false)}
                  className="inline-block px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs uppercase font-bold tracking-widest hover:bg-neutral-800"
                >
                  {locale === 'pt' ? 'Descobrir Peças' : locale === 'ar' ? 'استعراض المنتجات' : 'Discover Pieces'}
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-neutral-100 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="pt-4 first:pt-0 flex gap-4">
                    <div className="relative w-20 h-24 rounded bg-neutral-100 overflow-hidden shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name[locale]}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-xs font-serif font-bold text-neutral-900 line-clamp-1">
                            {item.product.name[locale]}
                          </h3>
                          <span className="text-xs font-mono font-bold text-neutral-900">
                            {item.product.currency}{item.product.price * item.quantity}
                          </span>
                        </div>
                        <div className="text-[11px] text-neutral-500 font-mono mt-1 space-x-2">
                          <span>Size: {item.size}</span>
                          <span>•</span>
                          <span>{item.color}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-neutral-200 rounded">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-neutral-100 text-neutral-600"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-mono">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-neutral-100 text-neutral-600"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-neutral-400 hover:text-red-600 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-neutral-200 bg-neutral-50 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-neutral-500">
                  <span>{locale === 'pt' ? 'Subtotal:' : locale === 'ar' ? 'المجموع الفرعي:' : 'Subtotal:'}</span>
                  <span className="font-mono text-neutral-900 font-bold">€{subtotal}</span>
                </div>
                <div className="flex justify-between text-neutral-500">
                  <span>{locale === 'pt' ? 'Envio Expresso:' : locale === 'ar' ? 'الشحن السريع:' : 'Express Shipping:'}</span>
                  <span className="font-mono text-emerald-600 font-semibold">{locale === 'pt' ? 'Grátis' : locale === 'ar' ? 'مجاناً' : 'Complimentary'}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Link
                  href="/demos/ecommerce/checkout"
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full py-3.5 rounded-full bg-neutral-900 hover:bg-black text-white font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.01]"
                >
                  <span>{locale === 'pt' ? 'Finalizar Encomenda' : locale === 'ar' ? 'إتمام الشراء' : 'Proceed to Checkout'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
                <Link
                  href="/demos/ecommerce/cart"
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full py-2.5 rounded-full border border-neutral-300 hover:bg-neutral-100 text-neutral-800 font-medium text-xs uppercase tracking-wider text-center block"
                >
                  {locale === 'pt' ? 'Ver Saco Completo' : locale === 'ar' ? 'عرض السلة كاملة' : 'View Full Bag'}
                </Link>
              </div>
              <p className="text-[10px] text-center text-neutral-400 font-mono">
                {locale === 'pt' ? 'Devoluções gratuitas até 30 dias • Envio com pegada neutra' : locale === 'ar' ? 'إرجاع مجاني حتى 30 يوماً • شحن محايد للكربون' : 'Complimentary 30-day returns • Carbon-neutral courier delivery'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

