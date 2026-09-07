'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import {
  ShoppingBag,
  CreditCard,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

export default function EcommerceCheckoutPage() {
  const { locale, isRTL } = useLanguage();
  const { items, subtotal, totalCount, clearCart } = useCart();

  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Form states
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('Portugal');
  const [deliveryOption, setDeliveryOption] = useState<'express' | 'white-glove'>('express');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple-pay'>('card');

  const deliveryFee = deliveryOption === 'white-glove' ? 45 : 0;
  const grandTotal = subtotal + deliveryFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `VEL-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderNumber(code);
    setOrderComplete(true);
    // don't clearCart immediately so user can see what they bought in ticket
  };

  return (
    <div className="bg-white text-neutral-900 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
          <Link href="/demos/ecommerce" className="font-serif tracking-[0.3em] text-2xl font-black uppercase">
            VELORA
          </Link>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
            <Lock className="w-3.5 h-3.5 text-neutral-900" />
            <span>256-Bit Encrypted Secure Checkout</span>
          </div>
        </div>

        {orderComplete ? (
          /* Confirmation Screen */
          <div className="max-w-2xl mx-auto text-center py-12 space-y-8">
            <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold block">
                {locale === 'pt' ? 'Encomenda Confirmada com Sucesso' : locale === 'ar' ? 'تم استلام طلبك بنجاح' : 'Order Placed Successfully'}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-light text-neutral-950 uppercase">
                {locale === 'pt' ? 'Obrigado pela sua Compra' : locale === 'ar' ? 'شكراً لثقتكم بدار فيلورا' : 'Thank You for Your Order'}
              </h1>
              <p className="text-xs text-neutral-500 max-w-md mx-auto">
                {locale === 'pt'
                  ? `Uma confirmação detalhada foi enviada para ${email || 'o seu e-mail'}. A sua peça será embalada manualmente em caixa rígida de linho.`
                  : locale === 'ar'
                  ? `تم إرسال بريد تأكيد إلى ${email || 'بريدك الإلكتروني'}. سيتم تغليف طلبك يدوياً داخل علب خاصة معطرة.`
                  : `A confirmation receipt has been dispatched to ${email || 'your email'}. Your pieces will be carefully hand-packed in archival linen boxes.`}
              </p>
              <div className="inline-block mt-3 px-4 py-2 rounded-full bg-neutral-100 border border-neutral-300 font-mono text-xs font-bold text-neutral-900">
                {locale === 'pt' ? 'Referência:' : locale === 'ar' ? 'رقم الطلب:' : 'Order Ref:'} {orderNumber}
              </div>
            </div>

            {/* Simulated Receipt Voucher */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 text-left rtl:text-right space-y-3 text-xs">
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-neutral-500">{locale === 'pt' ? 'Destinatário:' : locale === 'ar' ? 'الاسم:' : 'Recipient:'}</span>
                <span className="font-bold text-neutral-900">{firstName} {lastName}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-neutral-500">{locale === 'pt' ? 'Endereço de Entrega:' : locale === 'ar' ? 'العنوان:' : 'Delivery Address:'}</span>
                <span className="font-bold text-neutral-900 text-right rtl:text-left">{address}, {city}, {country}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-neutral-500">{locale === 'pt' ? 'Método de Envio:' : locale === 'ar' ? 'الشحن:' : 'Shipping Mode:'}</span>
                <span className="font-mono text-neutral-900 font-bold capitalize">{deliveryOption.replace('-', ' ')}</span>
              </div>
              <div className="flex justify-between pt-1 font-bold text-sm">
                <span className="text-neutral-500">{locale === 'pt' ? 'Total Faturado:' : locale === 'ar' ? 'المجموع:' : 'Grand Total:'}</span>
                <span className="font-mono text-neutral-950">€{grandTotal}</span>
              </div>
            </div>

            {/* Clear Simulation Notice */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed max-w-lg mx-auto">
              ⚠️ <span className="font-bold">{locale === 'pt' ? 'Simulação de Demonstração:' : locale === 'ar' ? 'محاكاة تجريبية:' : 'Interactive Demo Simulation:'}</span>{' '}
              {locale === 'pt'
                ? 'Nenhum pagamento real foi processado no seu cartão. Esta página demonstra a experiência de checkout fluida criada pela NexaWeb Studio.'
                : locale === 'ar'
                ? 'لم يتم سحب أي أموال من بطاقتك الائتمانية. هذه صفحة محاكاة لعرض تجربة الشراء الاحترافية المطورة بواسطة NexaWeb Studio.'
                : 'No actual funds have been debited from your card. This page simulates the frictionless luxury e-commerce checkout flow crafted by NexaWeb Studio.'}
            </div>

            <div className="pt-2 flex justify-center gap-4">
              <Link
                href="/demos/ecommerce/shop"
                onClick={() => clearCart()}
                className="px-8 py-3.5 rounded-full bg-neutral-950 text-white font-bold text-xs uppercase tracking-widest hover:bg-black transition-all shadow-md"
              >
                {locale === 'pt' ? 'Voltar à Loja' : locale === 'ar' ? 'العودة للمتجر' : 'Return to Shop'}
              </Link>
            </div>
          </div>
        ) : (
          /* Main Checkout Form + Summary */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Steps (7 cols) */}
            <form onSubmit={handlePlaceOrder} className="lg:col-span-7 space-y-8">
              {/* Step 1: Contact Information */}
              <div className="space-y-4">
                <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-200 pb-2 flex items-center justify-between">
                  <span>1. {locale === 'pt' ? 'Informação de Contacto' : locale === 'ar' ? 'بيانات الاتصال' : 'Contact Information'}</span>
                  <span className="text-[11px] font-mono text-neutral-400 font-normal">Step 1 of 4</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                      {locale === 'pt' ? 'E-mail para Recibo' : locale === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-xs focus:outline-none focus:border-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                      {locale === 'pt' ? 'Telemóvel (Para Envio)' : locale === 'ar' ? 'رقم الهاتف' : 'Phone (For Courier)'} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+351 912 345 678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-xs focus:outline-none focus:border-neutral-900"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Shipping Destination */}
              <div className="space-y-4">
                <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-200 pb-2 flex items-center justify-between">
                  <span>2. {locale === 'pt' ? 'Endereço de Entrega' : locale === 'ar' ? 'عنوان الشحن' : 'Shipping Destination'}</span>
                  <span className="text-[11px] font-mono text-neutral-400 font-normal">Step 2 of 4</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                      {locale === 'pt' ? 'Primeiro Nome' : locale === 'ar' ? 'الاسم الأول' : 'First Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Elena"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-xs focus:outline-none focus:border-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                      {locale === 'pt' ? 'Último Nome' : locale === 'ar' ? 'اسم العائلة' : 'Last Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Rostova"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-xs focus:outline-none focus:border-neutral-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                    {locale === 'pt' ? 'Morada & Número' : locale === 'ar' ? 'العنوان والشارع' : 'Street Address'} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Avenida da Liberdade 120, 3º Dto"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-xs focus:outline-none focus:border-neutral-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                      {locale === 'pt' ? 'Cidade' : locale === 'ar' ? 'المدينة' : 'City'} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Lisboa"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-xs focus:outline-none focus:border-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                      {locale === 'pt' ? 'Código Postal' : locale === 'ar' ? 'الرمز البريدي' : 'Postal Code'} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="1250-096"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-xs focus:outline-none focus:border-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 mb-1">
                      {locale === 'pt' ? 'País' : locale === 'ar' ? 'الدولة' : 'Country'} *
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 text-xs focus:outline-none focus:border-neutral-900"
                    >
                      <option value="Portugal">Portugal</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="France">France</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="United States">United States</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Delivery Options */}
              <div className="space-y-4">
                <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-200 pb-2 flex items-center justify-between">
                  <span>3. {locale === 'pt' ? 'Opção de Entrega' : locale === 'ar' ? 'طريقة الشحن' : 'Delivery Method'}</span>
                  <span className="text-[11px] font-mono text-neutral-400 font-normal">Step 3 of 4</span>
                </h2>
                <div className="space-y-2">
                  <label
                    onClick={() => setDeliveryOption('express')}
                    className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      deliveryOption === 'express' ? 'border-neutral-900 bg-neutral-50 shadow-sm' : 'border-neutral-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input type="radio" checked={deliveryOption === 'express'} readOnly className="accent-neutral-900" />
                      <div>
                        <span className="font-bold text-xs block text-neutral-900">DHL Express Worldwide Courier (1–3 Business Days)</span>
                        <span className="text-[11px] text-neutral-500 font-light">Carbon-neutral tracking with signature required on delivery</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-600">Complimentary</span>
                  </label>

                  <label
                    onClick={() => setDeliveryOption('white-glove')}
                    className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      deliveryOption === 'white-glove' ? 'border-neutral-900 bg-neutral-50 shadow-sm' : 'border-neutral-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input type="radio" checked={deliveryOption === 'white-glove'} readOnly className="accent-neutral-900" />
                      <div>
                        <span className="font-bold text-xs block text-neutral-900">White Glove Same-Day VIP Delivery & Unpacking</span>
                        <span className="text-[11px] text-neutral-500 font-light">Delivered by private atelier courier in hand-pressed garment bags</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-neutral-900">€45</span>
                  </label>
                </div>
              </div>

              {/* Step 4: Payment Simulation */}
              <div className="space-y-4">
                <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-200 pb-2 flex items-center justify-between">
                  <span>4. {locale === 'pt' ? 'Pagamento Seguro' : locale === 'ar' ? 'طريقة الدفع' : 'Payment Method'}</span>
                  <span className="text-[11px] font-mono text-neutral-400 font-normal">Step 4 of 4</span>
                </h2>

                <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 space-y-4">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`px-4 py-2 rounded text-xs font-mono uppercase font-bold border transition-all ${
                        paymentMethod === 'card' ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white border-neutral-300'
                      }`}
                    >
                      Credit / Debit Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('apple-pay')}
                      className={`px-4 py-2 rounded text-xs font-mono uppercase font-bold border transition-all ${
                        paymentMethod === 'apple-pay' ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white border-neutral-300'
                      }`}
                    >
                      Apple Pay / Google Pay
                    </button>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="space-y-3 pt-2">
                      <div>
                        <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">Card Number</label>
                        <input
                          type="text"
                          placeholder="4242 •••• •••• 4242"
                          defaultValue="4242 •••• •••• 4242"
                          className="w-full px-4 py-2 rounded border border-neutral-300 bg-white text-xs font-mono"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">Expiry</label>
                          <input
                            type="text"
                            placeholder="12 / 28"
                            defaultValue="12 / 28"
                            className="w-full px-4 py-2 rounded border border-neutral-300 bg-white text-xs font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-mono uppercase text-neutral-500 mb-1">CVC / CVV</label>
                          <input
                            type="text"
                            placeholder="942"
                            defaultValue="942"
                            className="w-full px-4 py-2 rounded border border-neutral-300 bg-white text-xs font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-neutral-950 hover:bg-black text-white font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  <span>
                    {locale === 'pt' ? `Confirmar Encomenda (€${grandTotal})` : locale === 'ar' ? `تأكيد الطلب (€${grandTotal})` : `Place Order (€${grandTotal})`}
                  </span>
                </button>
              </div>
            </form>

            {/* Sticky Order Summary (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-6 lg:sticky lg:top-28">
              <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-200 pb-3">
                {locale === 'pt' ? 'Artigos no Pedido' : locale === 'ar' ? 'المنتجات في الطلب' : 'In Your Bag'} ({totalCount})
              </h2>

              <div className="divide-y divide-neutral-200 max-h-80 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.id} className="py-3 first:pt-0 flex gap-3 items-center">
                    <div className="relative w-14 h-16 rounded bg-neutral-100 overflow-hidden shrink-0">
                      <Image src={item.product.image} alt={item.product.name[locale]} fill className="object-cover" />
                    </div>
                    <div className="flex-1 text-xs">
                      <h3 className="font-serif font-bold text-neutral-900 line-clamp-1">{item.product.name[locale]}</h3>
                      <p className="text-[11px] text-neutral-500 font-mono">Qty: {item.quantity} • Size: {item.size}</p>
                    </div>
                    <span className="font-mono text-xs font-bold text-neutral-900">€{item.product.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-200 pt-3 space-y-2 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal:</span>
                  <span className="font-mono text-neutral-900 font-bold">€{subtotal}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping:</span>
                  <span className="font-mono text-emerald-600 font-bold">
                    {deliveryFee === 0 ? 'Complimentary' : `€${deliveryFee}`}
                  </span>
                </div>
                <div className="border-t border-neutral-200 pt-2 flex justify-between text-sm font-bold text-neutral-950">
                  <span>Total:</span>
                  <span className="font-mono text-lg font-black">€{grandTotal}</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white border border-neutral-200 text-[11px] text-neutral-500 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-neutral-900">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-900" />
                  <span>The VELORA Guarantee</span>
                </div>
                <p>30-day worldwide returns. Unconditional refund upon arrival at our Paris fulfillment center.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

