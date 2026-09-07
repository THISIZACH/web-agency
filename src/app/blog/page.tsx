'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { BLOG_POSTS } from '@/config/blog';
import { Badge } from '@/components/ui/Badge';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';

export default function BlogListingPage() {
  const { t, locale, isRTL, pricing } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(BLOG_POSTS.map((p) => p.category[locale])))];

  const filteredPosts =
    selectedCategory === 'all'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category[locale] === selectedCategory);

  return (
    <main className="flex-1 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="brand" className="mb-4">
            {t.blog.badge}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {t.blog.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.blog.subtitle}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat === 'all'
                  ? locale === 'pt' ? 'Todos os Artigos' : locale === 'ar' ? 'جميع المقالات' : 'All Articles'
                  : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:border-brand-500/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <Link href={`/blog/${post.slug}`} className="block relative h-60 w-full overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title[locale]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-4 start-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/10">
                    {post.category[locale]}
                  </span>
                </Link>

                <div className="p-7 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>
                        {post.readTimeMinutes} {t.blog.readingTime}
                      </span>
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title[locale]}</Link>
                  </h2>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {post.excerpt[locale]}
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-4">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {post.author.name}
                  </span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline"
                >
                  <span>{t.blog.readMore}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

