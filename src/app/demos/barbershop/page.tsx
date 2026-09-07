'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { BARBER_SERVICES, MASTER_BARBERS, BARBER_GALLERY, BARBER_TESTIMONIALS } from '@/config/barberData';
import { Scissors, Clock, Calendar, Shield, Award, Sparkles, ArrowRight, Star, MapPin, Phone } from 'lucide-react';

export default function BarbershopHomePage() {
  const { locale, isRTL } = useLanguage();

  return (
    <div className="bg-[#0d0d0d] text-[#f5f0eb]">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden border-b border-[#d4af37]/20">
        <Image
          src="/images/barbershop/barbershop-hero.jpg"
          alt="North & Blade Studio Interior"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30 filter brightness-90 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6 pt-8 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a1a1a] border border-[#d4af37]/40 text-[#d4af37] text-xs font-mono uppercase tracking-[0.25em]">
            <Scissors className="w-3.5 h-3.5 -rotate-45" />
            <span>{locale === 'pt' ? 'Barbearia de Autor • Mayfair Londres' : locale === 'ar' ? 'استوديو حلاقة بريطاني فاخر' : 'Master Barber Studio • London'}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-none">
            Sharp by <span className="text-[#d4af37] italic font-serif">Design.</span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {locale === 'pt'
              ? 'Onde a alfaiataria do corte encontra o relaxamento da toalha quente. Uma experiência de grooming desenhada para homens que valorizam a perfeição.'
              : locale === 'ar'
              ? 'حيث تلتقي حرفية القص الدقيقة بطقوس المنشفة الساخنة المعتقة. تجربة عناية متكاملة للرجل الذي لا يقبل بأقل من الامتياز.'
              : 'Where bespoke shear sculpting meets restorative hot towel straight-razor rituals. An uncompromising grooming experience for modern gentlemen.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/demos/barbershop/book"
              prefetch={true}
              className="w-full sm:w-auto px-8 py-4 rounded bg-[#d4af37] hover:bg-[#e5c158] text-[#0d0d0d] font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-[#d4af37]/20 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{locale === 'pt' ? 'Marcar Atendimento' : locale === 'ar' ? 'حجز موعد الآن' : 'Book Appointment'}</span>
            </Link>
            <Link
              href="/demos/barbershop/services"
              prefetch={true}
              className="w-full sm:w-auto px-8 py-4 rounded bg-[#1c1c1c] hover:bg-[#262626] border border-stone-700 text-stone-200 hover:text-white font-medium text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              <span>{locale === 'pt' ? 'Ver Preçário & Serviços' : locale === 'ar' ? 'استعراض الخدمات والأسعار' : 'View Services & Pricing'}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Metrics Banner */}
      <section className="py-8 bg-[#141414] border-b border-stone-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="block font-serif text-[#d4af37] text-2xl font-bold">14+</span>
            <span className="text-stone-400 uppercase tracking-wider text-[11px]">{locale === 'pt' ? 'Anos de Tradição' : locale === 'ar' ? 'سنوات من الخبرة' : 'Years Experience'}</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-[#d4af37] text-2xl font-bold">4 Chairs</span>
            <span className="text-stone-400 uppercase tracking-wider text-[11px]">{locale === 'pt' ? 'Atendimento Exclusivo' : locale === 'ar' ? 'كراسي جلدية خاصة' : 'Belmont Leather Chairs'}</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-[#d4af37] text-2xl font-bold">100% Organic</span>
            <span className="text-stone-400 uppercase tracking-wider text-[11px]">{locale === 'pt' ? 'Bálsamos & Óleos Botânicos' : locale === 'ar' ? 'مستحضرات عضوية نقية' : 'Botanical Grooming Care'}</span>
          </div>
          <div className="space-y-1">
            <span className="block font-serif text-[#d4af37] text-2xl font-bold">4.9 ★</span>
            <span className="text-stone-400 uppercase tracking-wider text-[11px]">{locale === 'pt' ? 'Classificação de Clientes' : locale === 'ar' ? 'تقييم رضا العملاء' : 'Client Rating'}</span>
          </div>
        </div>
      </section>

      {/* Featured Service Spotlight */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-[420px] rounded-2xl overflow-hidden bg-[#161616] border border-[#d4af37]/30 shadow-2xl">
            <Image
              src="/images/barbershop/barber-lounge.jpg"
              alt="North & Blade Private Lounge"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0d0d0d]/85 backdrop-blur-md border border-stone-800">
              <span className="text-[#d4af37] text-xs font-mono uppercase tracking-widest">{locale === 'pt' ? 'Experiência em Destaque' : locale === 'ar' ? 'الباقة الأكثر طلباً' : 'Signature Package'}</span>
              <p className="text-white font-serif text-lg font-bold mt-1">The Executive Combo (Haircut + Royal Shave)</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{locale === 'pt' ? 'O Ritual Supremo' : locale === 'ar' ? 'طقس العناية الكامل' : 'The Gentleman Standard'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {locale === 'pt' ? 'Mais do Que Um Corte. Uma Recalibração.' : locale === 'ar' ? 'أكثر من مجرد قصة شعر. استعادة كاملة للحيوية.' : 'More Than a Haircut. A Total Recalibration.'}
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              {locale === 'pt'
                ? 'No ritmo acelerado da vida moderna, a cadeira do barbeiro é um dos poucos refúgios onde o tempo desacelera. Combinamos café de torra artesanal, toalhas de vapor com infusão de eucalipto e lâminas afiadas à mão para lhe devolver clareza e elegância sem pressa.'
                : locale === 'ar'
                ? 'في إيقاع الحياة اليومي المتسارع، يشكل كرسي الحلاقة أحد الملاذات النادرة التي يتوقف عندها الزمن. نجمع بين القهوة المختصة، مناشف البخار المنعشة والموس الحاد لنمنحك أناقة متجددة وراحة عميقة.'
                : 'In the relentless pace of modern life, the barber chair is one of the few places where time slows down. We pair single-origin espresso, steaming botanical towels, and hand-honed steel to restore your edge.'}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/demos/barbershop/book"
                className="px-6 py-3.5 rounded bg-[#d4af37] hover:bg-[#e5c158] text-[#0d0d0d] font-bold text-xs uppercase tracking-widest transition-all shadow-md shadow-[#d4af37]/20"
              >
                {locale === 'pt' ? 'Reservar a Sua Cadeira' : locale === 'ar' ? 'احجز كرسيك الآن' : 'Reserve Your Chair'}
              </Link>
              <Link
                href="/demos/barbershop/about"
                className="px-6 py-3.5 rounded bg-transparent hover:bg-stone-900 border border-stone-700 text-stone-300 hover:text-white font-medium text-xs uppercase tracking-widest transition-all"
              >
                {locale === 'pt' ? 'Conhecer a Filosofia' : locale === 'ar' ? 'فلسفة الاستوديو' : 'Our Philosophy'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Menu Grid (8 Services) */}
      <section className="py-20 bg-[#121212] border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#d4af37] text-xs font-mono uppercase tracking-[0.2em]">
              {locale === 'pt' ? 'Preçário & Serviços' : locale === 'ar' ? 'قائمة الخدمات' : 'Service Menu'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              {locale === 'pt' ? 'Serviços de Assinatura' : locale === 'ar' ? 'خدماتنا الحصرية' : 'Signature Services'}
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm">
              {locale === 'pt'
                ? 'Todos os serviços incluem consulta de estilo, lavagem relaxante e finalização com ceras e pomadas de alta gama.'
                : locale === 'ar'
                ? 'تشمل جميع الخدمات استشارة الشكل، غسيل مهدئ للشعر وتصفيف بمنتجات عناية فاخرة.'
                : 'Every service includes stylistic consultation, clarifying wash, and premium matte finish.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BARBER_SERVICES.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-xl bg-[#171717] border border-stone-800 hover:border-[#d4af37]/50 overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden bg-stone-900">
                  <Image
                    src={service.image}
                    alt={service.name[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {service.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#d4af37] text-black">
                      {service.badge[locale]}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 px-2 py-1 rounded text-xs font-mono font-bold bg-[#0d0d0d]/90 text-[#d4af37] border border-[#d4af37]/30">
                    {service.duration}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-base font-bold text-white group-hover:text-[#d4af37] transition-colors">
                        {service.name[locale]}
                      </h3>
                      <span className="font-mono text-base font-bold text-[#d4af37] shrink-0">
                        {service.price[locale]}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 mt-2 leading-relaxed line-clamp-3">
                      {service.desc[locale]}
                    </p>
                  </div>

                  <Link
                    href={`/demos/barbershop/book?service=${service.id}`}
                    prefetch={true}
                    className="w-full py-2.5 rounded bg-[#222222] hover:bg-[#d4af37] hover:text-[#0d0d0d] text-stone-200 text-xs font-bold uppercase tracking-wider text-center transition-all"
                  >
                    {locale === 'pt' ? 'Selecionar' : locale === 'ar' ? 'اختيار' : 'Book This'}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/demos/barbershop/pricing"
              prefetch={true}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d4af37] hover:text-[#e5c158] transition-colors"
            >
              <span>{locale === 'pt' ? 'Ver Tabela Completa de Preços' : locale === 'ar' ? 'عرض جدول الأسعار الكامل' : 'View Complete Pricing Table'}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Master Barbers Showcase */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[#d4af37] text-xs font-mono uppercase tracking-[0.2em]">
            {locale === 'pt' ? 'Artistas da Lâmina' : locale === 'ar' ? 'فريق المحترفين' : 'The Craftsmen'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            {locale === 'pt' ? 'Conheça os Nossos Mestres Barbeiros' : locale === 'ar' ? 'تعرف على حلاقينا المحترفين' : 'Meet Our Master Barbers'}
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm">
            {locale === 'pt'
              ? 'Profissionais com formação internacional dedicados à arte milenar da tesoura e navalha.'
              : locale === 'ar'
              ? 'خبراء معتمدون دولياً مكرسون لفنون القص الدقيق وحلاقة الذقن التراثية.'
              : 'Internationally trained specialists dedicated to the timeless heritage of shear and razor craft.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MASTER_BARBERS.map((barber) => (
            <div
              key={barber.id}
              className="group rounded-xl bg-[#141414] border border-stone-800 hover:border-[#d4af37]/40 overflow-hidden transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden bg-stone-900">
                <Image
                  src={barber.image}
                  alt={barber.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 right-3 px-2 py-1 rounded bg-[#0d0d0d]/80 text-[#d4af37] text-[10px] font-mono border border-[#d4af37]/30">
                  {barber.experience}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors">
                  {barber.name}
                </h3>
                <p className="text-xs text-[#d4af37] font-medium">{barber.role[locale]}</p>
                <p className="text-xs text-stone-400 leading-relaxed line-clamp-2">{barber.specialty[locale]}</p>
                <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-500">{barber.instagram}</span>
                  <Link
                    href={`/demos/barbershop/book?barber=${barber.id}`}
                    prefetch={true}
                    className="text-xs text-[#d4af37] hover:underline font-semibold"
                  >
                    {locale === 'pt' ? 'Agendar' : locale === 'ar' ? 'حجز' : 'Book Chair'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Showcase Preview */}
      <section className="py-20 bg-[#121212] border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[#d4af37] text-xs font-mono uppercase tracking-[0.2em]">
                {locale === 'pt' ? 'Atmosfera & Cortes' : locale === 'ar' ? 'معرض الصور' : 'Visual Portfolio'}
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mt-1">
                {locale === 'pt' ? 'Galeria do Estúdio' : locale === 'ar' ? 'لقطات من الاستوديو' : 'The Studio Gallery'}
              </h2>
            </div>
            <Link
              href="/demos/barbershop/gallery"
              prefetch={true}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#d4af37] hover:text-[#e5c158]"
            >
              <span>{locale === 'pt' ? 'Ver Galeria Completa' : locale === 'ar' ? 'مشاهدة كل الصور' : 'Explore All Images'}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {BARBER_GALLERY.map((item, i) => (
              <div
                key={i}
                className="group relative h-48 sm:h-56 rounded-lg overflow-hidden bg-stone-900 border border-stone-800"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <span className="text-[10px] text-[#d4af37] font-mono uppercase">{item.category}</span>
                  <p className="text-white text-xs font-bold line-clamp-1">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="flex justify-center gap-1 text-[#d4af37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <h2 className="font-serif text-3xl font-bold text-white">
            {locale === 'pt' ? 'A Palavra dos Nossos Clientes' : locale === 'ar' ? 'آراء نخبة عملائنا' : 'Words from Our Gentlemen'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BARBER_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl bg-[#141414] border border-stone-800 flex flex-col justify-between space-y-6"
            >
              <p className="text-stone-300 text-xs sm:text-sm font-light italic leading-relaxed">
                &ldquo;{t.quote[locale]}&rdquo;
              </p>
              <div className="border-t border-stone-800/80 pt-4">
                <span className="block font-bold text-white text-xs sm:text-sm">{t.author}</span>
                <span className="text-[11px] text-[#d4af37] font-mono">{t.role[locale]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#080808] border-t border-[#d4af37]/30 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mx-auto">
            <Scissors className="w-6 h-6 -rotate-45" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
            {locale === 'pt' ? 'Pronto Para o Seu Próximo Corte?' : locale === 'ar' ? 'جاهز لمظهرك الاستثنائي القادم؟' : 'Ready for Your Next Precision Cut?'}
          </h2>
          <p className="text-stone-400 text-sm max-w-xl mx-auto leading-relaxed">
            {locale === 'pt'
              ? 'Agende online em menos de 2 minutos. Escolha o serviço, o barbeiro da sua preferência e o horário mais conveniente.'
              : locale === 'ar'
              ? 'احجز موعدك بسهولة في أقل من دقيقتين. اختر الخدمة المفضلة والحلاق والوقت الملائم لجدولك.'
              : 'Book your chair online in under two minutes. Select your preferred service, master barber, and convenient time slot.'}
          </p>
          <div className="pt-2">
            <Link
              href="/demos/barbershop/book"
              prefetch={true}
              className="inline-flex items-center gap-2 px-8 py-4 rounded bg-[#d4af37] hover:bg-[#e5c158] text-[#0d0d0d] font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-[#d4af37]/30 hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>{locale === 'pt' ? 'Marcar Cadeira Agora' : locale === 'ar' ? 'احجز كرسيك الآن' : 'Book Chair Now'}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

