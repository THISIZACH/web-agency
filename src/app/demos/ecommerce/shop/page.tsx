'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { ECOMMERCE_PRODUCTS, ProductItem } from '@/config/ecommerceProducts';
import { Filter, Search, X, ShoppingBag, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export default function EcommerceShopPage() {
  const { locale } = useLanguage();
  const { addToCart } = useCart();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(1200);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categories = [
    { id: 'all', label: locale === 'pt' ? 'Todas as Peças' : locale === 'ar' ? 'الكل' : 'All Categories' },
    { id: 'outerwear', label: locale === 'pt' ? 'Casacos & Trench' : locale === 'ar' ? 'المعاطف' : 'Outerwear' },
    { id: 'tailoring', label: locale === 'pt' ? 'Alfaiataria & Calças' : locale === 'ar' ? 'البناطيل والخياطة' : 'Tailoring' },
    { id: 'knitwear', label: locale === 'pt' ? 'Malhas de Caxemira' : locale === 'ar' ? 'تريكو الكشمير' : 'Knitwear' },
    { id: 'leather-goods', label: locale === 'pt' ? 'Maroquinaria' : locale === 'ar' ? 'الشنط والجلود' : 'Leather Goods' },
    { id: 'footwear', label: locale === 'pt' ? 'Calçado Artesanal' : locale === 'ar' ? 'الأحذية' : 'Footwear' },
    { id: 'accessories', label: locale === 'pt' ? 'Acessórios & Relógios' : locale === 'ar' ? 'الإكسسوارات والساعات' : 'Accessories' },
  ];

  const filteredProducts = useMemo(() => {
    return ECOMMERCE_PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesSearch =
        p.name[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle[locale].toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = p.price <= maxPrice;
      return matchesCategory && matchesSearch && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [selectedCategory, searchQuery, maxPrice, sortBy, locale]);

  return (
    <div className="bg-white text-neutral-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Title */}
        <div className="border-b border-neutral-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
              {locale === 'pt' ? 'Catálogo Completo' : locale === 'ar' ? 'الكتالوج الكامل' : 'Atelier Catalog'}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-light text-neutral-950 uppercase mt-1">
              {locale === 'pt' ? 'Coleção Permanente' : locale === 'ar' ? 'المتجر الإلكتروني' : 'The Collection'}
            </h1>
          </div>
          <div className="text-xs font-mono text-neutral-500">
            {locale === 'pt' ? `A mostrar ${filteredProducts.length} peças` : locale === 'ar' ? `عرض ${filteredProducts.length} قطعة` : `Showing ${filteredProducts.length} creations`}
          </div>
        </div>

        {/* Controls bar (Search, Filter Button, Sort) */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-neutral-50 p-4 rounded-xl border border-neutral-200 text-xs">
          {/* Search */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={locale === 'pt' ? 'Pesquisar por casaco, seda, calça...' : locale === 'ar' ? 'بحث عن معطف، كشمير، بنطال...' : 'Search cashmere, overcoat, leather...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white rounded-lg border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900"
            />
          </div>

          {/* Mobile Filter Trigger */}
          <button
            type="button"
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden px-4 py-2 rounded-lg bg-neutral-900 text-white font-bold flex items-center gap-1.5 cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'Filtros' : locale === 'ar' ? 'تصفية' : 'Filters'}</span>
          </button>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-neutral-500 font-mono">{locale === 'pt' ? 'Ordenar:' : locale === 'ar' ? 'ترتيب:' : 'Sort:'}</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 bg-white rounded-lg border border-neutral-300 font-medium text-neutral-900 focus:outline-none"
            >
              <option value="featured">{locale === 'pt' ? 'Destaques' : locale === 'ar' ? 'الموصى به' : 'Featured'}</option>
              <option value="price-asc">{locale === 'pt' ? 'Preço: Menor para Maior' : locale === 'ar' ? 'السعر: من الأقل للأعلى' : 'Price: Low to High'}</option>
              <option value="price-desc">{locale === 'pt' ? 'Preço: Maior para Menor' : locale === 'ar' ? 'السعر: من الأعلى للأقل' : 'Price: High to Low'}</option>
            </select>
          </div>
        </div>

        {/* Main Content Layout (Desktop Sidebar + Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 space-y-8 sticky top-28 p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
            {/* Categories */}
            <div className="space-y-3">
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-2">
                {locale === 'pt' ? 'Categorias' : locale === 'ar' ? 'الأقسام' : 'Categories'}
              </h3>
              <div className="space-y-1 text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left rtl:text-right py-1.5 px-2 rounded transition-colors cursor-pointer flex justify-between items-center ${
                      selectedCategory === cat.id
                        ? 'bg-neutral-900 text-white font-bold'
                        : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                    }`}
                  >
                    <span>{cat.label}</span>
                    {selectedCategory === cat.id && <span>•</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-neutral-900">
                  {locale === 'pt' ? 'Preço Máximo' : locale === 'ar' ? 'أقصى سعر' : 'Max Price'}
                </h3>
                <span className="font-mono text-xs font-bold text-neutral-900">€{maxPrice}</span>
              </div>
              <input
                type="range"
                min="200"
                max="1200"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                className="w-full accent-neutral-900 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                <span>€200</span>
                <span>€1200</span>
              </div>
            </div>

            {/* Reset Filters */}
            {(selectedCategory !== 'all' || maxPrice < 1200 || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setMaxPrice(1200);
                  setSearchQuery('');
                }}
                className="w-full py-2 rounded bg-neutral-200 hover:bg-neutral-300 text-neutral-800 text-xs font-mono uppercase font-semibold cursor-pointer"
              >
                {locale === 'pt' ? 'Limpar Filtros' : locale === 'ar' ? 'إعادة ضبط' : 'Reset All Filters'}
              </button>
            )}
          </aside>

          {/* Products Grid (9 cols) */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="py-24 text-center space-y-4 border border-dashed border-neutral-300 rounded-2xl">
                <p className="font-serif text-lg text-neutral-500">
                  {locale === 'pt' ? 'Nenhuma peça encontrada com os filtros selecionados.' : locale === 'ar' ? 'لم يتم العثور على منتجات تطابق هذه الخيارات.' : 'No pieces match your selected filters.'}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setMaxPrice(1200);
                    setSearchQuery('');
                  }}
                  className="px-6 py-2.5 rounded-full bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-black cursor-pointer"
                >
                  {locale === 'pt' ? 'Ver Toda a Coleção' : locale === 'ar' ? 'عرض كافة المنتجات' : 'Clear Filters'}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group flex flex-col justify-between space-y-4">
                    <Link
                      href={`/demos/ecommerce/product/${product.slug}`}
                      className="block relative h-96 rounded bg-neutral-100 overflow-hidden"
                    >
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
                        <Link href={`/demos/ecommerce/product/${product.slug}`}>
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
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setMobileFilterOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-full max-w-sm bg-white p-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-neutral-200 pb-3">
                  <h3 className="font-serif text-lg font-bold uppercase tracking-wider">
                    {locale === 'pt' ? 'Filtros da Loja' : locale === 'ar' ? 'تصفية المنتجات' : 'Shop Filters'}
                  </h3>
                  <button type="button" onClick={() => setMobileFilterOpen(false)} className="p-1 text-neutral-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2">
                  <span className="font-serif text-xs font-bold uppercase text-neutral-700 block">
                    {locale === 'pt' ? 'Categoria' : locale === 'ar' ? 'القسم' : 'Category'}
                  </span>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setMobileFilterOpen(false);
                      }}
                      className={`block w-full text-left py-2 px-3 rounded text-xs ${
                        selectedCategory === cat.id ? 'bg-neutral-900 text-white font-bold' : 'text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 rounded-full bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest"
              >
                {locale === 'pt' ? 'Ver Resultados' : locale === 'ar' ? 'عرض النتائج' : 'Apply Filters'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

