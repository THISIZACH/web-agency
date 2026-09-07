'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost, BLOG_POSTS } from '@/config/blog';
import { useLanguage } from '@/context/LanguageContext';
import { getWhatsAppUrl } from '@/config/contact';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Clock, Calendar, Share2, Sparkles, ArrowUpRight } from 'lucide-react';

export function BlogPostClient({ post }: { post: BlogPost }) {
  const { t, locale, pricing, isRTL } = useLanguage();
  const whatsappUrl = getWhatsAppUrl(locale, 'hero');

  const contentParagraphs = post.content[locale] || post.content.en;

  return (
    <article className="flex-1 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline mb-8"
        >
          <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          <span>{t.blog.backToList}</span>
        </Link>

        {/* Category & Title */}
        <div className="space-y-4 mb-8">
          <Badge variant="brand">{post.category[locale]}</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {post.title[locale]}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {post.excerpt[locale]}
          </p>
        </div>

        {/* Author & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 dark:border-slate-800 mb-10 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">
                {post.author.name}
              </span>
              <span className="text-[11px]">{post.author.role[locale]}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>
                {post.readTimeMinutes} {t.blog.readingTime}
              </span>
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden mb-12 shadow-lg">
          <Image
            src={post.coverImage}
            alt={post.title[locale]}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="prose dark:prose-invert max-w-none space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
          {contentParagraphs.map((para, idx) => {
            if (para.startsWith('### ')) {
              return (
                <h2
                  key={idx}
                  className="text-2xl font-bold text-slate-900 dark:text-white pt-6 pb-2"
                >
                  {para.replace('### ', '')}
                </h2>
              );
            }
            return (
              <p key={idx} className="text-base sm:text-lg leading-relaxed">
                {para
                  .replace(/€299/g, pricing.basePriceFormatted)
                  .replace(/299€/g, pricing.basePriceFormatted)
                  .replace(/\$299/g, pricing.basePriceFormatted)}
              </p>
            );
          })}
        </div>

        {/* In-Article Conversion Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-tr from-brand-600 to-emerald-500 text-white shadow-xl shadow-brand-500/20 text-center space-y-5">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold max-w-lg mx-auto leading-snug">
            {t.blog.ctaArticleTitle}
          </h3>
          <p className="text-sm text-white/90 max-w-md mx-auto leading-relaxed">
            {t.blog.ctaArticleDesc
              .replace(/€299/g, pricing.basePriceFormatted)
              .replace(/299€/g, pricing.basePriceFormatted)
              .replace(/\$299/g, pricing.basePriceFormatted)}
          </p>
          <Button
            href={whatsappUrl}
            isExternal
            size="lg"
            variant="secondary"
            className="bg-white text-slate-950 hover:bg-slate-100 font-bold text-sm shadow-md"
            icon={<ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />}
            iconPosition="right"
          >
            {t.blog.ctaArticleBtn
              .replace(/€299/g, pricing.basePriceFormatted)
              .replace(/299€/g, pricing.basePriceFormatted)
              .replace(/\$299/g, pricing.basePriceFormatted)}
          </Button>
        </div>

        {/* Related Articles */}
        {BLOG_POSTS.filter((p) => p.slug !== post.slug).length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
              {t.blog.relatedPosts}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {BLOG_POSTS.filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-brand-500/50 hover:shadow-md transition-all"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={rel.coverImage}
                        alt={rel.title[locale]}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      <span className="absolute top-3 start-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/10">
                        {rel.category[locale]}
                      </span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors line-clamp-2 text-base leading-snug">
                        {rel.title[locale]}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {rel.readTimeMinutes} {t.blog.readingTime}
                        </span>
                        <span className="text-brand-600 dark:text-brand-400 font-semibold inline-flex items-center gap-1 group-hover:underline">
                          {t.blog.readMore}
                          <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

