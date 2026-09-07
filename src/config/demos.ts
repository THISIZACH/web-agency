import { Locale } from './pricing';

export interface DemoItem {
  id: string;
  slug: string;
  category: {
    en: string;
    pt: string;
    ar: string;
  };
  title: {
    en: string;
    pt: string;
    ar: string;
  };
  tagline: {
    en: string;
    pt: string;
    ar: string;
  };
  description: {
    en: string;
    pt: string;
    ar: string;
  };
  features: {
    en: string[];
    pt: string[];
    ar: string[];
  };
  image: string;
  badge: {
    en: string;
    pt: string;
    ar: string;
  };
  demoUrl: string;
  accentColor: string;
}

export const DEMOS_DATA: DemoItem[] = [
  {
    id: 'restaurant',
    slug: 'restaurant',
    category: {
      en: 'Restaurant & Dining',
      pt: 'Restaurante & Gastronomia',
      ar: 'مطاعم وضيافة',
    },
    title: {
      en: 'Savor Bistro & Lounge',
      pt: 'Savor Bistro & Lounge',
      ar: 'سافور بيسترو آند لاونج',
    },
    tagline: {
      en: 'Modern artisan dining experience with online reservations',
      pt: 'Experiência gastronómica artesanal com reservas online',
      ar: 'تجربة طعام راقية ومميزة مع حجز طاولات عبر الإنترنت',
    },
    description: {
      en: 'An elegant culinary concept featuring seasonal menus, wine pairings, photography gallery, customer reviews, and direct table reservation system.',
      pt: 'Um conceito culinário elegante com ementas sazonais, carta de vinhos, galeria fotográfica, avaliações e sistema de reserva direta de mesas.',
      ar: 'مفهوم طهي أنيق يشمل قوائم طعام موسمية، معرض صور عالي الجودة، آراء الزوار، ونظام حجز طاولات تفاعلي وسهل.',
    },
    features: {
      en: ['Digital Menu Tabs', '4-Step Online Table Booking', 'Food Photography Gallery', 'Chef Story & Reviews', 'Location & Google Map'],
      pt: ['Menu Digital com Categorias', 'Reserva de Mesa em 4 Passos', 'Galeria de Fotografia', 'História do Chef & Avaliações', 'Localização & Mapa'],
      ar: ['قائمة طعام رقمية تفاعلية', 'حجز طاولات في 4 خطوات', 'معرض صور الأطباق', 'قصة الشيف وتقييمات العملاء', 'الموقع وخريطة الوصول'],
    },
    image: '/images/restaurant/restaurant-hero.jpg',
    badge: {
      en: 'High-Converting Concept',
      pt: 'Conceito de Alta Conversão',
      ar: 'نموذج عالي التحويل',
    },
    demoUrl: '/demos/restaurant',
    accentColor: '#d97706',
  },
  {
    id: 'dentist',
    slug: 'dentist',
    category: {
      en: 'Healthcare & Dentistry',
      pt: 'Saúde & Medicina Dentária',
      ar: 'عيادات وصحة الأسنان',
    },
    title: {
      en: 'NovaSmile Dental Clinic',
      pt: 'NovaSmile Dental Clinic',
      ar: 'عيادة الأسنان NovaSmile',
    },
    tagline: {
      en: 'Evidence-based gentle dentistry, clinical treatments catalog & online patient scheduling',
      pt: 'Medicina dentária de precisão sem dor, catálogo de tratamentos e marcações online',
      ar: 'طب أسنان متطور بدون ألم، دليل علاجات تفصيلي وحجز مواعيد فوري',
    },
    description: {
      en: 'A clean, authoritative healthcare presence featuring 8 medical services, clinical before/after smile preview, sterilization standards, patient education blog, and multi-step appointment booking.',
      pt: 'Uma presença de saúde clínica e moderna com 8 especialidades, antes/depois interativo, normas de esterilização ISO, guia educativo de saúde e agendamento de consultas em 4 passos.',
      ar: 'موقع طبي راقٍ يرسخ الثقة ويشمل 8 تخصصات علاجية، مقارنة تفاعلية للابتسامة قبل وبعد، معايير التعقيم الطبي، مدونة التوعية الصحية، ونظام حجز مواعيد دقيق.',
    },
    features: {
      en: ['Interactive 4-Step Booking', '8 Detailed Clinical Services', 'Aesthetic Before/After Preview', 'Patient Knowledge Base', 'Emergency WhatsApp Trigger'],
      pt: ['Agendamento em 4 Passos', '8 Tratamentos Especializados', 'Antes & Depois Interativo', 'Guia de Saúde do Paciente', 'Linha de Urgência WhatsApp'],
      ar: ['حجز موعد كشف في 4 خطوات', '8 علاجات تخصصية دقيقة', 'مقارنة الابتسامة قبل وبعد', 'دليل تثقيفي وتوعوي شامل', 'خط طوارئ مباشر عبر واتساب'],
    },
    image: '/images/dentist/dentist-hero.jpg',
    badge: {
      en: 'Clinical Excellence',
      pt: 'Excelência Médica',
      ar: 'معايير طبية معتمدة',
    },
    demoUrl: '/demos/dentist',
    accentColor: '#0891b2',
  },
  {
    id: 'architect',
    slug: 'architect',
    category: {
      en: 'Architecture & Spatial Design',
      pt: 'Arquitetura & Design Espacial',
      ar: 'عمارة وتصميم معاصر',
    },
    title: {
      en: 'Atelier Forma Architects',
      pt: 'Atelier Forma Arquitetos',
      ar: 'استوديو العمارة Atelier Forma',
    },
    tagline: {
      en: 'Luxury minimal editorial portfolio, curated project archives & bespoke commissions',
      pt: 'Portfólio editorial minimalista de luxo, arquivo de obras e comissões personalizadas',
      ar: 'سجل أعمال معماري فاخر بتصميم نقي، أرشيف مشاريع راقٍ واستشارات مخصصة',
    },
    description: {
      en: 'A high-end editorial presence focusing on bespoke residential architecture, physical materiality palettes, dedicated project detail studies, architectural essays, and tailored project inquiry briefings.',
      pt: 'Presença editorial de luxo dedicada à arquitetura de autor, paletas táteis de materiais, estudos monográficos de projetos, caderno de ensaios e formulário avançado de briefing.',
      ar: 'موقع معماري وتحريري فخم يركز على الفلل والمساكن الفاخرة، لوحات الخامات الطبيعية، دراسات تفصيلية لكل مشروع، مقالات معمارية ونموذج تقديم استفسارات المشاريع.',
    },
    features: {
      en: ['7 Curated Project Case Studies', 'Materiality & Concept Palette', 'Detailed Project Pages', 'Architectural Essays Journal', 'Bespoke Project Brief Form'],
      pt: ['7 Projetos Arquitetónicos', 'Paleta de Matérias & Conceito', 'Páginas Dedicadas por Obra', 'Caderno de Ensaios Espaciais', 'Briefing de Novo Projeto'],
      ar: ['7 دراسات معمارية لمشاريع حقيقية', 'لوحات المواد والخامات الطبيعية', 'صفحة مخصصة لكل مشروع', 'مدونة الدراسات والأفكار المعمارية', 'استبيان استكشافي للمشاريع'],
    },
    image: '/images/architect/architect-hero.jpg',
    badge: {
      en: 'Editorial Luxury',
      pt: 'Luxo Editorial',
      ar: 'طابع تحريري فاخر',
    },
    demoUrl: '/demos/architect',
    accentColor: '#78716c',
  },
  {
    id: 'barbershop',
    slug: 'barbershop',
    category: {
      en: 'Men\'s Grooming & Studio',
      pt: 'Barbearia & Barbearia de Luxo',
      ar: 'صالونات الحلاقة والعناية الرجالية',
    },
    title: {
      en: 'North & Blade Barber Studio',
      pt: 'North & Blade Barber Studio',
      ar: 'صالون الحلاقة North & Blade',
    },
    tagline: {
      en: 'Modern luxury barber studio with bespoke cuts, hot towel shaves & 6-step chair booking',
      pt: 'Estúdio de barbearia de luxo moderno com cortes de autor, toalha quente e marcação em 6 passos',
      ar: 'استوديو حلاقة رجالي فاخر يقدم قصات دقيقة، حلاقة بالمنشفة الساخنة وحجز مقعد فوري في 6 خطوات',
    },
    description: {
      en: 'A dark charcoal and brass aesthetic tailored for modern gentlemen. Includes service menu, master barber profiles, haircut gallery, studio philosophy, and a friction-free 6-step appointment booking engine.',
      pt: 'Estética sofisticada em carvão escuro e latão para o cavalheiro moderno. Inclui preçário de serviços, perfis dos mestres barbeiros, galeria de cortes e agendamento de cadeira em 6 passos.',
      ar: 'تصميم راقٍ بألوان الفحم والبرونز مخصص للرجل العصري. يشمل قائمة الخدمات، ملفات الحلاقين المحترفين، معرض القصات، ونظام حجز مقاعد متطور في 6 خطوات.',
    },
    features: {
      en: ['6-Step Chair Booking Wizard', '8 Signature Barber Services', 'Master Barber Profiles', 'Studio Atmosphere Gallery', 'Direct WhatsApp Line'],
      pt: ['Agendamento de Cadeira em 6 Passos', '8 Serviços de Assinatura', 'Perfis de Barbeiros Mestres', 'Galeria de Ambiente & Cortes', 'Linha Direta de WhatsApp'],
      ar: ['نظام حجز الكرسي في 6 خطوات', '8 خدمات حلاقة وعناية مميزة', 'ملفات تعريف الحلاقين المحترفين', 'معرض أجواء الصالون والقصات', 'تواصل فوري عبر واتساب'],
    },
    image: '/images/barbershop/barbershop-hero.jpg',
    badge: {
      en: 'Masculine Luxury',
      pt: 'Luxo Masculino',
      ar: 'فخامة رجالية معاصرة',
    },
    demoUrl: '/demos/barbershop',
    accentColor: '#d4af37',
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    category: {
      en: 'Luxury Fashion & Lifestyle',
      pt: 'Moda de Luxo & E-Commerce',
      ar: 'متاجر الأزياء والأناقة الفاخرة',
    },
    title: {
      en: 'VELORA Contemporary Atelier',
      pt: 'VELORA Atelier Contemporâneo',
      ar: 'متجر الأزياء الراقي VELORA',
    },
    tagline: {
      en: 'Minimalist high-fashion e-commerce with interactive catalog, variant picker & checkout simulation',
      pt: 'Loja online de moda minimalista de alta-costura com catálogo tátil, seletores de variantes e checkout',
      ar: 'متجر إلكتروني فاخر للأزياء المعاصرة يشمل دليلاً تفاعلياً، اختيار المقاس واللون ومحاكاة الدفع السريع',
    },
    description: {
      en: 'Editorial high-end retail experience featuring campaign lookbooks, interactive product drawer, size/color variant selector, dynamic cart drawer, and complete multi-step checkout simulation.',
      pt: 'Experiência de retalho editorial de luxo com lookbooks sazonais, filtros dinâmicos, seletores de cor e tamanho, carrinho interativo e fluxo completo de checkout simulado.',
      ar: 'تجربة تسوق إلكتروني تحريرية مستوحاة من كبرى دور الأزياء العالمية، تشمل كتالوج المنتجات، فلاتر ذكية، اختيار الألوان والمقاسات، وسلة تسوق متكاملة مع تجربة إتمام الطلب.',
    },
    features: {
      en: ['Interactive Shopping Bag & Drawer', 'Product Variant & Size Selector', 'Faceted Category Filtering', 'Editorial Campaign Lookbook', 'Complete Checkout Simulation'],
      pt: ['Carrinho de Compras Interativo', 'Seletor de Tamanho & Variantes', 'Filtros Dinâmicos de Loja', 'Lookbook Editorial de Coleção', 'Simulação Completa de Checkout'],
      ar: ['سلة تسوق حية وحساب تلقائي', 'اختيار ألوان ومقاسات المنتجات', 'فلاتر دقيقة وتصنيفات مرنة', 'كتالوج عروض الأزياء التحريري', 'محاكاة كاملة لإتمام الشراء'],
    },
    image: '/images/ecommerce/hero-campaign.jpg',
    badge: {
      en: 'High-Converting Retail',
      pt: 'Comércio de Alta Conversão',
      ar: 'متجر عالي المبيعات',
    },
    demoUrl: '/demos/ecommerce',
    accentColor: '#171717',
  },
  {
    id: 'lawyer',
    slug: 'lawyer',
    category: {
      en: 'Corporate Law & Counsel',
      pt: 'Advocacia & Direito Societário',
      ar: 'محاماة واستشارات قانونية للشركات',
    },
    title: {
      en: 'Meridian Legal Partners',
      pt: 'Meridian Legal Partners',
      ar: 'شركة ميريديان للمحاماة والاستشارات',
    },
    tagline: {
      en: 'Distinguished corporate & commercial legal practice with partner profiles & confidential briefing engine',
      pt: 'Sociedade de advogados corporativa de prestígio com perfis de sócios e solicitação confidencial',
      ar: 'مؤسسة قانونية رائدة للشركات والأعمال مع ملفات الشركاء ونظام استشارات قانونية سري ومحكم',
    },
    description: {
      en: 'Authoritative deep navy and warm ivory corporate presence with zero cliché courthouse imagery. Features 8 dedicated practice area monographs, partner biographies, thought leadership legal essays, and a formal consultation intake engine.',
      pt: 'Presença institucional imponente em azul-marinho e marfim, sem clichés visuais. Conta com 8 áreas de prática especializadas, biografias de advogados sócios, artigos jurídicos de liderança e agendamento formal de consulta.',
      ar: 'حضور مؤسسي رفيع يجمع بين الكحلي الداكن والعاجي الوقور بعيداً عن الصور النمطية للمحاكم. يضم 8 تخصصات قانونية مفصلة، سير الشركاء، مقالات فكرية وقانونية، ونموذج حجز استشارات سرية.',
    },
    features: {
      en: ['8 Dedicated Practice Monographs', 'Senior Attorney Profiles & Bios', 'Legal Thought Leadership Journal', 'Formal Intake Consultation Form', 'Confidential Client Inquiries'],
      pt: ['8 Áreas de Prática Dedicadas', 'Perfis & Biografias de Sócios', 'Caderno de Ensaios Jurídicos', 'Formulário de Consulta Formal', 'Canal Confidencial de Contacto'],
      ar: ['8 صفحات تخصصية للمجالات القانونية', 'سير ذاتية مفصلة للشركاء والمستشارين', 'مدونة الرؤى والأبحاث القانونية', 'نموذج طلب استشارة رسمية محكم', 'قناة تواصل سرية وموثوقة'],
    },
    image: '/images/lawyer/lawyer-hero.jpg',
    badge: {
      en: 'Authoritative Practice',
      pt: 'Prática de Prestígio',
      ar: 'مكانة قانونية مرموقة',
    },
    demoUrl: '/demos/lawyer',
    accentColor: '#1e3a8a',
  },
];
