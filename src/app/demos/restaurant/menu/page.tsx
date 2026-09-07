'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Calendar, ArrowRight, Check, UtensilsCrossed } from 'lucide-react';

type MenuCategory =
  | 'all'
  | 'starters'
  | 'soups-salads'
  | 'mains'
  | 'seafood'
  | 'grill'
  | 'pasta'
  | 'desserts'
  | 'drinks';

export default function RestaurantMenuPage() {
  const { locale, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: locale === 'pt' ? 'Toda a Ementa' : locale === 'ar' ? 'الكل' : 'All Offerings' },
    { id: 'starters', label: locale === 'pt' ? 'Entradas & Tapas' : locale === 'ar' ? 'المقبلات' : 'Starters' },
    { id: 'soups-salads', label: locale === 'pt' ? 'Sopas & Saladas' : locale === 'ar' ? 'الشوربات والسلطات' : 'Soups & Salads' },
    { id: 'mains', label: locale === 'pt' ? 'Pratos Principais' : locale === 'ar' ? 'الأطباق الرئيسية' : 'Main Courses' },
    { id: 'seafood', label: locale === 'pt' ? 'Peixes & Frutos do Mar' : locale === 'ar' ? 'المأكولات البحرية' : 'Seafood' },
    { id: 'grill', label: locale === 'pt' ? 'Grelha & Carnes Nobres' : locale === 'ar' ? 'المشاوي واللحوم' : 'Grill' },
    { id: 'pasta', label: locale === 'pt' ? 'Massas Artesanais' : locale === 'ar' ? 'الباستا الإيطالية' : 'Pasta' },
    { id: 'desserts', label: locale === 'pt' ? 'Sobremesas' : locale === 'ar' ? 'الحلويات الفاخرة' : 'Desserts' },
    { id: 'drinks', label: locale === 'pt' ? 'Carta de Vinhos & Cocktails' : locale === 'ar' ? 'المشروبات والكوكتيل' : 'Drinks' },
  ];

  const dishes = [
    // Starters
    {
      id: 1,
      category: 'starters',
      name: locale === 'pt' ? 'Carpaccio de Novilho Trufado' : locale === 'ar' ? 'كارباتشيو لحم البقر بالكمأة' : 'Truffle Beef Carpaccio',
      desc: locale === 'pt' ? 'Lâminas finas de novilho maturado, lascas de parmesão de 24 meses, rúcula selvagem e azeite de trufa branca.' : locale === 'ar' ? 'شرائح لحم بقري معتق رقيقة مع جبن بارميزان 24 شهراً، جرجير بري وزيت الكمأة البيضاء.' : 'Thinly sliced dry-aged beef, 24-month aged parmesan shavings, wild rocket, and white truffle oil.',
      price: locale === 'ar' ? '$22' : '€19',
      image: '/images/restaurant/restaurant-dish-01.jpg',
      tag: 'Chef Choice',
    },
    {
      id: 2,
      category: 'starters',
      name: locale === 'pt' ? 'Vieiras Seladas com Pancetta Crocante' : locale === 'ar' ? 'إسكالوب البحر مع البانسيتا المقرمشة' : 'Pan-Seared Sea Scallops',
      desc: locale === 'pt' ? 'Vieiras frescas de mergulho, puré aveludado de ervilhas da horta e crocante artesanal.' : locale === 'ar' ? 'إسكالوب بحري طازج بالزبدة مع بيوريه البازلاء الحلوة وقطع مقرمشة.' : 'Fresh king scallops, sweet garden pea velouté, and crispy pancetta crumb.',
      price: locale === 'ar' ? '$26' : '€24',
      image: '/images/restaurant/restaurant-dish-02.jpg',
      tag: 'Gluten-Free',
    },
    {
      id: 3,
      category: 'starters',
      name: locale === 'pt' ? 'Tártaro de Atum Rabilho' : locale === 'ar' ? 'تارتار تونة الزعنفة الزرقاء' : 'Bluefin Tuna Tartare',
      desc: locale === 'pt' ? 'Atum fresco cortado à ponta de faca, abacate hass, emulsão de yuzu e sésamo tostado.' : locale === 'ar' ? 'تونة طازجة متبلة بصوص اليوزو المنعش، أفوكادو مهروس وسمسم محمص.' : 'Knife-cut fresh tuna, creamy avocado, yuzu citrus emulsion, and sesame cracker.',
      price: locale === 'ar' ? '$24' : '€21',
      image: '/images/restaurant/restaurant-dish-04.jpg',
      tag: 'Wild Caught',
    },

    // Soups & Salads
    {
      id: 4,
      category: 'soups-salads',
      name: locale === 'pt' ? 'Burrata Pugliese & Tomates Confitados' : locale === 'ar' ? 'سلطة جبن البوراتا مع الطماطم المتبلة' : 'Burrata Pugliese & Heirloom Tomatoes',
      desc: locale === 'pt' ? 'Queijo burrata cremoso, tomates confitados na herdade, pesto de manjericão genovês e pinhões tostados.' : locale === 'ar' ? 'جبن بوراتا إيطالي كريمي مع طماطم كرزية مجففة ببطء، صلصة الريحان وصنوبر محمص.' : 'Creamy Pugliese burrata, slow-roasted heritage tomatoes, Genovese basil pesto, and toasted pine nuts.',
      price: locale === 'ar' ? '$19' : '€17',
      image: '/images/restaurant/restaurant-dish-03.jpg',
      tag: 'Vegetarian',
    },
    {
      id: 5,
      category: 'soups-salads',
      name: locale === 'pt' ? 'Bisque Aveludada de Lavagante' : locale === 'ar' ? 'شوربة حساء الكركند البحري الكريمية' : 'Velveteen Blue Lobster Bisque',
      desc: locale === 'pt' ? 'Creme rico de marisco tostado, conhaque XO, natas biológicas e croutons de focaccia caseira.' : locale === 'ar' ? 'حساء فاخر من كركند البحر الأزرق مع لمسة كونياك معتقة وكريمة طازجة.' : 'Concentrated crustacean reduction, aged cognac, fresh cream, and herb-buttered brioche.',
      price: locale === 'ar' ? '$23' : '€20',
      image: '/images/restaurant/restaurant-dish-06.jpg',
      tag: 'Signature',
    },

    // Main Courses
    {
      id: 6,
      category: 'mains',
      name: locale === 'pt' ? 'Pato Confit com Molho de Laranja & Especiarias' : locale === 'ar' ? 'بط كونفيت مع صوص البرتقال والتوابل' : 'Duck Confit with Spiced Orange Glaze',
      desc: locale === 'pt' ? 'Perna de pato estufada lentamente, puré rústico de aipo-rábano e molho agridoce de citrinos.' : locale === 'ar' ? 'فخذ بط مطهو ببطء في دهنه الطبيعي مع بيوريه الكرفس وصوص الحمضيات الفاخر.' : 'Slow-rendered crisp duck leg, celeriac root mousseline, baby glazed carrots, and citrus reduction.',
      price: locale === 'ar' ? '$36' : '€32',
      image: '/images/restaurant/restaurant-dish-07.jpg',
      tag: 'Slow Cooked',
    },
    {
      id: 7,
      category: 'mains',
      name: locale === 'pt' ? 'Bacalhau de Meia Cura em Crosta de Broa' : locale === 'ar' ? 'سمك القد الفاخر في قشرة خبز الذرة' : 'Heritage Salt Cod in Cornbread Crust',
      desc: locale === 'pt' ? 'Lombo nobre de bacalhau confitado em azeite virgem extra, broa de milho estaladiça e puré de grão de bico.' : locale === 'ar' ? 'قطعة فيليه من القد البري مطهوة بزيت الزيتون البكر مع قشرة مقرمشة وبيوريه الحمص.' : 'Thick Atlantic cod loin, golden cornbread crust, chickpea velouté, and warm extra virgin olive emulsion.',
      price: locale === 'ar' ? '$38' : '€34',
      image: '/images/restaurant/restaurant-dish-05.jpg',
      tag: 'Heritage',
    },

    // Seafood
    {
      id: 8,
      category: 'seafood',
      name: locale === 'pt' ? 'Robalo Selvagem em Crosta de Sal Marinho' : locale === 'ar' ? 'سمك القاروص البري في قشرة الملح' : 'Wild Atlantic Sea Bass in Salt Crust',
      desc: locale === 'pt' ? 'Acompanhado de risoto de açafrão persa, espargos verdes grelhados e infusão de citrinos do Algarve.' : locale === 'ar' ? 'يقدم مع ريزوتو الزعفران الفاخر، الهليون المشوي ومستخلص الحمضيات الطبيعية.' : 'Whole line-caught sea bass, Persian saffron risotto, roasted wild asparagus, and citrus foam.',
      price: locale === 'ar' ? '$44' : '€39',
      image: '/images/restaurant/restaurant-dish-05.jpg',
      tag: 'Michelin Pick',
    },
    {
      id: 9,
      category: 'seafood',
      name: locale === 'pt' ? 'Lavagante Grelhado na Brasa com Manteiga de Ervas' : locale === 'ar' ? 'كركند البحر المشوي بزبدة الأعشاب' : 'Charred Blue Lobster with Herb Butter',
      desc: locale === 'pt' ? 'Lavagante fresco da costa rochosa com gnocchi artesanais de batata doce e emulsão de bisque.' : locale === 'ar' ? 'كركند طازج مع نوكي البطاطا الحلوة وصلصة البسك الغنية بالمذاق البحري.' : 'Fresh Atlantic lobster split and charcoal-roasted, sweet potato pan-seared gnocchi, and lobster reduction.',
      price: locale === 'ar' ? '$62' : '€56',
      image: '/images/restaurant/restaurant-dish-02.jpg',
      tag: 'Prestige Catch',
    },

    // Grill
    {
      id: 10,
      category: 'grill',
      name: locale === 'pt' ? 'Bife Black Angus Maturado 45 Dias (350g)' : locale === 'ar' ? 'ستيك بلاك أنجوس المعتق 45 يوماً (350 جم)' : '45-Day Dry-Aged Black Angus Ribeye (350g)',
      desc: locale === 'pt' ? 'Grelhado a carvão vegetal de azinho com puré trufado de batata rústica e redução de vinho do Porto.' : locale === 'ar' ? 'مشوي على الفحم مع بيوريه البطاطس بالكمأة وصوص العنب المعتق الفاخر.' : 'Prime ribeye charcoal-seared with white truffle potato mousseline, charred shallots, and port reduction.',
      price: locale === 'ar' ? '$48' : '€43',
      image: '/images/restaurant/restaurant-dish-03.jpg',
      tag: 'Prime Cut',
    },
    {
      id: 11,
      category: 'grill',
      name: locale === 'pt' ? 'Carré de Cordeiro em Crosta de Alecrim & Mostarda' : locale === 'ar' ? 'ريش لحم الضأن بالأعشاب والزعتر' : 'Herb-Crusted Colorado Lamb Rack',
      desc: locale === 'pt' ? 'Cordeiro tenro grelhado no ponto rosa, com mil-folhas de batata e jus de alecrim fresco.' : locale === 'ar' ? 'ريش غنم طرية مشوية مع طبقات بطاطس غراتان وصوص لحم غني بالأعشاب الطبيعية.' : 'Tender rack of lamb, layered potato dauphinoise, charred rosemary jus, and garden pea pods.',
      price: locale === 'ar' ? '$46' : '€41',
      image: '/images/restaurant/restaurant-dish-06.jpg',
      tag: 'Chef Cut',
    },

    // Pasta
    {
      id: 12,
      category: 'pasta',
      name: locale === 'pt' ? 'Ravioli Artesanal de Cantarelos & Ricotta' : locale === 'ar' ? 'رافيولي فطر الغابات وجبن الريكوتا' : 'Chanterelle & Ricotta Artisan Ravioli',
      desc: locale === 'pt' ? 'Massa fresca feita diariamente, manteiga de sálvia crocante, avelãs tostadas e trufa ralada.' : locale === 'ar' ? 'باستا طازجة تحضر يومياً مع زبدة الميرمية المقرمشة والبندق المحمص والكمأة المبشورة.' : 'Fresh daily rolled pasta, crispy garden sage butter, roasted hazelnuts, and shaved winter truffle.',
      price: locale === 'ar' ? '$32' : '€28',
      image: '/images/restaurant/restaurant-dish-08.jpg',
      tag: 'Fresh Daily',
    },
    {
      id: 13,
      category: 'pasta',
      name: locale === 'pt' ? 'Tagliolini Negro com Gambas & Botarga' : locale === 'ar' ? 'تاجليوليني حبر الحبار مع الروبيان' : 'Squid Ink Tagliolini with Carabineiro',
      desc: locale === 'pt' ? 'Massa com tinta de choco, carabineiros do Algarve salteados, bisque leve e raspas de limão siciliano.' : locale === 'ar' ? 'باستا سوداء بنكهة البحر، روبيان أحمر طازج، ثوم مقلي ومستخلص الليمون الصقلي.' : 'House-extruded cuttlefish ink pasta, seared scarlet prawns, garlic chili oil, and cured bottarga.',
      price: locale === 'ar' ? '$36' : '€32',
      image: '/images/restaurant/restaurant-dish-04.jpg',
      tag: 'Handmade',
    },

    // Desserts
    {
      id: 14,
      category: 'desserts',
      name: locale === 'pt' ? 'Soufflé de Chocolate Valrhona 70%' : locale === 'ar' ? 'سوفليه الشوكولاتة الفرنسية الفاخرة 70%' : 'Valrhona 70% Dark Chocolate Soufflé',
      desc: locale === 'pt' ? 'Coração cremoso e fumegante servido com gelado artesanal de baunilha de Madagáscar.' : locale === 'ar' ? 'سوفليه شوكولاتة داكنة ساخنة مع آيس كريم فانيليا مدغشقر الطبيعية.' : 'Molten warm dark cocoa soufflé paired with Madagascar vanilla bean artisan gelato.',
      price: locale === 'ar' ? '$16' : '€14',
      image: '/images/restaurant/restaurant-dessert.jpg',
      tag: 'Baked to Order',
    },
    {
      id: 15,
      category: 'desserts',
      name: locale === 'pt' ? 'Mille-Feuille Crocante de Baunilha & Framboesas' : locale === 'ar' ? 'ميل فاي مقرمش بالفانيليا والتوت' : 'Caramelized Vanilla Mille-Feuille',
      desc: locale === 'pt' ? 'Camadas de massa folhada estaladiça, creme diplomata suave e framboesas silvestres frescas.' : locale === 'ar' ? 'طبقات رقائق المعجنات المقرمشة مع كريمة الفانيليا الناعمة وحبات التوت البري.' : 'Crisp puff pastry leaves, silky diplomat crème, and fresh forest wild raspberries.',
      price: locale === 'ar' ? '$15' : '€13',
      image: '/images/restaurant/restaurant-dish-01.jpg',
      tag: 'Patisserie',
    },

    // Drinks
    {
      id: 16,
      category: 'drinks',
      name: locale === 'pt' ? 'Cocktail de Assinatura: The Velvet Copper' : locale === 'ar' ? 'كوكتيل مخملي: ذا فيلفيت كوبر' : 'Signature Cocktail: The Velvet Copper',
      desc: locale === 'pt' ? 'Bourbon infusionado com fava tonka, xarope de figo do Douro, bitters aromáticos e fumo de carvalho.' : locale === 'ar' ? 'مشروب استثنائي من مستخلص التين المجفف، توابل عطرية ودخان خشب البلوط.' : 'Tonka-infused bourbon, Douro wild fig reduction, barrel bitters, and smoked oak aroma.',
      price: locale === 'ar' ? '$18' : '€16',
      image: '/images/restaurant/restaurant-cocktail.jpg',
      tag: 'Mixology',
    },
    {
      id: 17,
      category: 'drinks',
      name: locale === 'pt' ? 'Harmonização de Vinhos de Reserva (5 Copos)' : locale === 'ar' ? 'باقة تذوق المشروبات المعتقة (5 كؤوس)' : 'Sommelier Reserve Wine Flight (5 Glasses)',
      desc: locale === 'pt' ? 'Seleção exclusiva da nossa garrafeira com colheitas raras das regiões do Dão, Bairrada e Alentejo.' : locale === 'ar' ? 'جولة تذوق راقية لأندر المشروبات المعتقة بإشراف خبير الضيافة.' : 'Hand-selected rare vintages chosen by our head sommelier to accompany your dinner courses.',
      price: locale === 'ar' ? '$65' : '€58',
      image: '/images/restaurant/wine-cellar.jpg',
      tag: 'Sommelier Curated',
    },
  ];

  const filteredDishes =
    activeCategory === 'all'
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <div className="bg-[#1c120c] text-[#fbf8f2] min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-[#c85a32]/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#c85a32_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c85a32]/15 border border-[#c85a32]/30 text-[#e68a65] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'Ementa de Autor 2026' : locale === 'ar' ? 'قائمة طعام الشيف 2026' : 'Artisan Culinary Menu'}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white">
            {locale === 'pt' ? 'A Ementa Completa' : locale === 'ar' ? 'قائمة الطعام الكاملة' : 'Full Menu Offerings'}
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {locale === 'pt'
              ? 'Todos os pratos são confeccionados na hora com ingredientes biológicos de produtores locais da época.'
              : locale === 'ar'
              ? 'جميع أطباقنا تحضر فورياً باستخدام منتجات عضوية طازجة من مزارع محلية مستدامة.'
              : 'Each dish is prepared to order using hand-harvested organic ingredients from regional heritage producers.'}
          </p>
        </div>
      </section>

      {/* Categories Navigation Bar */}
      <section className="sticky top-20 z-10 bg-[#1c120c]/95 backdrop-blur-md border-b border-[#c85a32]/20 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#c85a32] text-white shadow-lg shadow-[#c85a32]/30'
                    : 'bg-[#291b13] text-stone-300 hover:text-white hover:bg-[#38261b] border border-[#c85a32]/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Menu Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group flex flex-col sm:flex-row gap-5 p-4 sm:p-5 rounded-2xl bg-[#261912]/80 border border-[#c85a32]/20 hover:border-[#c85a32]/50 hover:bg-[#2e1f16] transition-all duration-300"
            >
              <div className="relative w-full sm:w-36 h-40 sm:h-36 rounded-xl overflow-hidden shrink-0 bg-stone-900">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#1c120c]/80 text-[#e68a65] text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border border-[#c85a32]/30">
                  {dish.tag}
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#e68a65] transition-colors">
                      {dish.name}
                    </h3>
                    <span className="text-base sm:text-lg font-bold text-[#c85a32] shrink-0 font-serif">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                    {dish.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#c85a32]/15 flex items-center justify-between text-xs text-stone-400">
                  <span className="capitalize">{dish.category.replace('-', ' & ')}</span>
                  <Link
                    href="/demos/restaurant/reservations"
                    className="text-[#e68a65] hover:text-white font-semibold flex items-center gap-1 group/btn"
                  >
                    <span>{locale === 'pt' ? 'Provar na Reserva' : locale === 'ar' ? 'اطلبه عند الحجز' : 'Reserve & Taste'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''} group-hover/btn:translate-x-0.5 transition-transform`} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#2e1f16] to-[#1c120c] border border-[#c85a32]/30 space-y-6">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#c85a32]/20 flex items-center justify-center text-[#e68a65]">
            <UtensilsCrossed className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            {locale === 'pt' ? 'Pronto para uma experiência inesquecível?' : locale === 'ar' ? 'جاهز لتجربة طهي لا تُنسى؟' : 'Ready for an Unforgettable Dining Experience?'}
          </h2>
          <p className="text-stone-300 text-sm max-w-xl mx-auto">
            {locale === 'pt'
              ? 'Reserve a sua mesa com antecedência e desfrute de um atendimento personalizado e menus com harmonização de vinhos.'
              : locale === 'ar'
              ? 'احجز طاولتك الفاخرة مسبقاً واستمتع بضيافة راقية وأطباق طازجة محضرة بأعلى المعايير.'
              : 'Reserve your table today to secure our premier seating and indulge in our wine-paired seasonal tasting.'}
          </p>
          <div className="pt-2">
            <Link
              href="/demos/restaurant/reservations"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#c85a32] to-[#b04924] hover:from-[#d6653a] hover:to-[#c85a32] text-white font-bold text-sm tracking-wider uppercase transition-all shadow-xl shadow-[#c85a32]/25 hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>{locale === 'pt' ? 'Reservar a Minha Mesa' : locale === 'ar' ? 'احجز طاولتي الآن' : 'Reserve My Table'}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
