import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';
import { BLOG_POSTS } from '@/config/blog';
import { ARCHITECT_PROJECTS } from '@/config/architectProjects';
import { ECOMMERCE_PRODUCTS } from '@/config/ecommerceProducts';
import { LAWYER_PRACTICE_AREAS, LAWYER_ATTORNEYS, LAWYER_INSIGHTS } from '@/config/lawyerData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticRoutes = [
    '',
    '/blog',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const demoRoutes = [
    // Savor Bistro
    '/demos/restaurant',
    '/demos/restaurant/menu',
    '/demos/restaurant/reservations',
    '/demos/restaurant/about',
    '/demos/restaurant/contact',
    // NovaSmile Dental
    '/demos/dentist',
    '/demos/dentist/services',
    '/demos/dentist/about',
    '/demos/dentist/blog',
    '/demos/dentist/contact',
    // Atelier Forma Architects
    '/demos/architect',
    '/demos/architect/projects',
    ...ARCHITECT_PROJECTS.map((p) => `/demos/architect/projects/${p.slug}`),
    '/demos/architect/about',
    '/demos/architect/services',
    '/demos/architect/blog',
    '/demos/architect/contact',
    // North & Blade Barbershop
    '/demos/barbershop',
    '/demos/barbershop/services',
    '/demos/barbershop/barbers',
    '/demos/barbershop/about',
    '/demos/barbershop/gallery',
    '/demos/barbershop/pricing',
    '/demos/barbershop/book',
    '/demos/barbershop/contact',
    // VELORA Luxury E-Commerce
    '/demos/ecommerce',
    '/demos/ecommerce/shop',
    '/demos/ecommerce/collections',
    '/demos/ecommerce/about',
    '/demos/ecommerce/journal',
    '/demos/ecommerce/contact',
    '/demos/ecommerce/cart',
    '/demos/ecommerce/checkout',
    ...ECOMMERCE_PRODUCTS.map((p) => `/demos/ecommerce/product/${p.slug}`),
    // Meridian Legal
    '/demos/lawyer',
    '/demos/lawyer/practice-areas',
    ...LAWYER_PRACTICE_AREAS.map((pa) => `/demos/lawyer/practice-areas/${pa.slug}`),
    '/demos/lawyer/attorneys',
    ...LAWYER_ATTORNEYS.map((a) => `/demos/lawyer/attorneys/${a.slug}`),
    '/demos/lawyer/about',
    '/demos/lawyer/insights',
    ...LAWYER_INSIGHTS.map((ins) => `/demos/lawyer/insights/${ins.slug}`),
    '/demos/lawyer/contact',
    '/demos/lawyer/consultation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...demoRoutes, ...blogRoutes];
}


