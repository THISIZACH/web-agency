import { Locale } from './pricing';

export interface DemoItem {
  id: string;
  slug: string;
  category: Record<Locale, string>;
  title: Record<Locale, string>;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  features: Record<Locale, string[]>;
  image: string;
  badge: Record<Locale, string>;
  demoUrl: string;
  accentColor: string;
}

export const demoUrls = {
  barbershop: "https://nexaweb-barbershop.vercel.app/",
  restaurant: "https://nexaweb-restaurant.vercel.app/",
  dentist: "https://nexaweb-dentist.vercel.app/",
  architect: "https://nexaweb-architect.vercel.app/",
  ecommerce: "https://nexaweb-ecommerce.vercel.app/",
  lawyer: "https://nexaweb-lawyer.vercel.app/",
} as const;

export const DEMOS_DATA: DemoItem[] = [
  {
    id: 'restaurant',
    slug: 'restaurant',
    category: {
      en: 'Restaurant & Dining',
      pt: 'Restaurante & Gastronomia',
      fr: 'Restauration & Gastronomie',
      ar: 'مطاعم وضيافة',
    },
    title: {
      en: 'Savor Bistro & Lounge',
      pt: 'Savor Bistro & Lounge',
      fr: 'Savor Bistro & Lounge',
      ar: 'سافور بيسترو آند لاونج',
    },
    tagline: {
      en: 'Modern artisan dining experience with online reservations',
      pt: 'Experiência gastronómica artesanal com reservas online',
      fr: 'Expérience gastronomique artisanale avec réservations en ligne',
      ar: 'تجربة طعام راقية ومميزة مع حجز طاولات عبر الإنترنت',
    },
    description: {
      en: 'An elegant culinary concept featuring seasonal menus, wine pairings, photography gallery, customer reviews, and direct table reservation system.',
      pt: 'Um conceito culinário elegante com ementas sazonais, carta de vinhos, galeria fotográfica, avaliações e sistema de reserva direta de mesas.',
      fr: 'Un concept culinaire raffiné avec menus de saison, accords mets & vins, galerie photo, avis clients et système de réservation directe.',
      ar: 'مفهوم طهي أنيق يشمل قوائم طعام موسمية، معرض صور عالي الجودة، آراء الزوار، ونظام حجز طاولات تفاعلي وسهل.',
    },
    features: {
      en: ['Digital Menu Tabs', '4-Step Online Table Booking', 'Food Photography Gallery', 'Chef Story & Reviews', 'Location & Google Map'],
      pt: ['Menu Digital com Categorias', 'Reserva de Mesa em 4 Passos', 'Galeria de Fotografia', 'História do Chef & Avaliações', 'Localização & Mapa'],
      fr: ['Menu digital par catégories', 'Réservation de table en 4 étapes', 'Galerie photographique', 'Histoire du Chef & Témoignages', 'Localisation & Google Maps'],
      ar: ['قائمة طعام رقمية تفاعلية', 'حجز طاولات في 4 خطوات', 'معرض صور الأطباق', 'قصة الشيف وتقييمات العملاء', 'الموقع وخريطة الوصول'],
    },
    image: '/images/restaurant/restaurant-hero.jpg',
    badge: {
      en: 'High-Converting Concept',
      pt: 'Conceito de Alta Conversão',
      fr: 'Concept Haute Conversion',
      ar: 'نموذج عالي التحويل',
    },
    demoUrl: demoUrls.restaurant,
    accentColor: '#d97706',
  },
  {
    id: 'dentist',
    slug: 'dentist',
    category: {
      en: 'Healthcare & Dentistry',
      pt: 'Saúde & Medicina Dentária',
      fr: 'Santé & Médecine Dentaire',
      ar: 'عيادات وصحة الأسنان',
    },
    title: {
      en: 'NovaSmile Dental Clinic',
      pt: 'NovaSmile Dental Clinic',
      fr: 'NovaSmile Dental Clinic',
      ar: 'عيادة الأسنان NovaSmile',
    },
    tagline: {
      en: 'Evidence-based gentle dentistry, clinical treatments catalog & online patient scheduling',
      pt: 'Medicina dentária de precisão sem dor, catálogo de tratamentos e marcações online',
      fr: 'Soins dentaires d’excellence sans douleur, catalogue de traitements et prise de rdv en ligne',
      ar: 'طب أسنان متطور بدون ألم، دليل علاجات تفصيلي وحجز مواعيد فوري',
    },
    description: {
      en: 'A clean, authoritative healthcare presence featuring 8 medical services, clinical before/after smile preview, sterilization standards, patient education blog, and multi-step appointment booking.',
      pt: 'Uma presença de saúde clínica e moderna com 8 especialidades, antes/depois interativo, normas de esterilização ISO, guia educativo de saúde e agendamento de consultas em 4 passos.',
      fr: 'Une présence médicale rassurante avec 8 spécialités, aperçu avant/après sourire, normes de stérilisation, conseils patients et prise de rendez-vous.',
      ar: 'موقع طبي راقٍ يرسخ الثقة ويشمل 8 تخصصات علاجية، مقارنة تفاعلية للابتسامة قبل وبعد، معايير التعقيم الطبي، مدونة التوعية الصحية، ونظام حجز مواعيد دقيق.',
    },
    features: {
      en: ['Interactive 4-Step Booking', '8 Detailed Clinical Services', 'Aesthetic Before/After Preview', 'Patient Knowledge Base', 'Emergency WhatsApp Trigger'],
      pt: ['Agendamento em 4 Passos', '8 Tratamentos Especializados', 'Antes & Depois Interativo', 'Guia de Saúde do Paciente', 'Linha de Urgência WhatsApp'],
      fr: ['Prise de rdv en 4 étapes', '8 Soins cliniques spécialisés', 'Avant / Après esthétique', 'Guides santé patients', 'Ligne d’urgence WhatsApp'],
      ar: ['حجز موعد كشف في 4 خطوات', '8 علاجات تخصصية دقيقة', 'مقارنة الابتسامة قبل وبعد', 'دليل تثقيفي وتوعوي شامل', 'خط طوارئ مباشر عبر واتساب'],
    },
    image: '/images/dentist/dentist-hero.jpg',
    badge: {
      en: 'Clinical Excellence',
      pt: 'Excelência Médica',
      fr: 'Excellence Médicale',
      ar: 'معايير طبية معتمدة',
    },
    demoUrl: demoUrls.dentist,
    accentColor: '#0891b2',
  },
  {
    id: 'architect',
    slug: 'architect',
    category: {
      en: 'Architecture & Spatial Design',
      pt: 'Arquitetura & Design Espacial',
      fr: 'Architecture & Design d’Espace',
      ar: 'عمارة وتصميم معاصر',
    },
    title: {
      en: 'Atelier Forma Architects',
      pt: 'Atelier Forma Arquitetos',
      fr: 'Atelier Forma Architectes',
      ar: 'استوديو العمارة Atelier Forma',
    },
    tagline: {
      en: 'Luxury minimal editorial portfolio, curated project archives & bespoke commissions',
      pt: 'Portfólio editorial minimalista de luxo, arquivo de obras e comissões personalizadas',
      fr: 'Portfolio éditorial minimaliste haut de gamme, archives de réalisations & projets sur-mesure',
      ar: 'سجل أعمال معماري فاخر بتصميم نقي، أرشيف مشاريع راقٍ واستشارات مخصصة',
    },
    description: {
      en: 'A high-end editorial presence focusing on bespoke residential architecture, physical materiality palettes, dedicated project detail studies, architectural essays, and tailored project inquiry briefings.',
      pt: 'Presença editorial de luxo dedicada à arquitetura de autor, paletas táteis de materiais, estudos monográficos de projetos, caderno de ensaios e formulário avançado de briefing.',
      fr: 'Une présence éditoriale de prestige dédiée à l’architecture résidentielle, palettes de matériaux, études de projets et formulaire de contact qualifié.',
      ar: 'موقع معماري وتحريري فخم يركز على الفلل والمساكن الفاخرة، لوحات الخامات الطبيعية، دراسات تفصيلية لكل مشروع، مقالات معمارية ونموذج تقديم استفسارات المشاريع.',
    },
    features: {
      en: ['7 Curated Project Case Studies', 'Materiality & Concept Palette', 'Detailed Project Pages', 'Architectural Essays Journal', 'Bespoke Project Brief Form'],
      pt: ['7 Projetos Arquitetónicos', 'Paleta de Matérias & Conceito', 'Páginas Dedicadas por Obra', 'Caderno de Ensaios Espaciais', 'Briefing de Novo Projeto'],
      fr: ['7 Études de projets détaillées', 'Palette de matériaux & concepts', 'Pages projets dédiées', 'Essais & journal architectural', 'Formulaire de brief projet'],
      ar: ['7 دراسات معمارية لمشاريع حقيقية', 'لوحات المواد والخامات الطبيعية', 'صفحة مخصصة لكل مشروع', 'مدونة الدراسات والأفكار المعمارية', 'استبيان استكشافي للمشاريع'],
    },
    image: '/images/architect/architect-hero.jpg',
    badge: {
      en: 'Editorial Luxury',
      pt: 'Luxo Editorial',
      fr: 'Luxe Éditorial',
      ar: 'طابع تحريري فاخر',
    },
    demoUrl: demoUrls.architect,
    accentColor: '#78716c',
  },
  {
    id: 'barbershop',
    slug: 'barbershop',
    category: {
      en: 'Men\'s Grooming & Studio',
      pt: 'Barbearia & Barbearia de Luxo',
      fr: 'Barbier & Soins pour Hommes',
      ar: 'صالونات الحلاقة والعناية الرجالية',
    },
    title: {
      en: 'North & Blade Barber Studio',
      pt: 'North & Blade Barber Studio',
      fr: 'North & Blade Barber Studio',
      ar: 'صالون الحلاقة North & Blade',
    },
    tagline: {
      en: 'Modern luxury barber studio with bespoke cuts, hot towel shaves & 6-step chair booking',
      pt: 'Estúdio de barbearia de luxo moderno com cortes de autor, toalha quente e marcação em 6 passos',
      fr: 'Studio barbier moderne de prestige, coupes signature, rasage traditionnel & réservation',
      ar: 'استوديو حلاقة رجالي فاخر يقدم قصات دقيقة، حلاقة بالمنشفة الساخنة وحجز مقعد فوري في 6 خطوات',
    },
    description: {
      en: 'A dark charcoal and brass aesthetic tailored for modern gentlemen. Includes service menu, master barber profiles, haircut gallery, studio philosophy, and a friction-free 6-step appointment booking engine.',
      pt: 'Estética sofisticada em carvão escuro e latão para o cavalheiro moderno. Inclui preçário de serviços, perfis dos mestres barbeiros, galeria de cortes e agendamento de cadeira em 6 passos.',
      fr: 'Une esthétique soignée en nuances charbon et laiton. Carte des prestations, profils des maîtres barbiers, galerie et réservation de fauteuil en 6 étapes.',
      ar: 'تصميم راقٍ بألوان الفحم والبرونز مخصص للرجل العصري. يشمل قائمة الخدمات، ملفات الحلاقين المحترفين، معرض القصات، ونظام حجز مقاعد متطور في 6 خطوات.',
    },
    features: {
      en: ['6-Step Chair Booking Wizard', '8 Signature Barber Services', 'Master Barber Profiles', 'Studio Atmosphere Gallery', 'Direct WhatsApp Line'],
      pt: ['Agendamento de Cadeira em 6 Passos', '8 Serviços de Assinatura', 'Perfis de Barbeiros Mestres', 'Galeria de Ambiente & Cortes', 'Linha Direta de WhatsApp'],
      fr: ['Réservation en 6 étapes', '8 Prestations signature', 'Profils des maîtres barbiers', 'Galerie photo du studio', 'Ligne directe WhatsApp'],
      ar: ['نظام حجز الكرسي في 6 خطوات', '8 خدمات حلاقة وعناية مميزة', 'ملفات تعريف الحلاقين المحترفين', 'معرض أجواء الصالون والقصات', 'تواصل فوري عبر واتساب'],
    },
    image: '/images/barbershop/barbershop-hero.jpg',
    badge: {
      en: 'Masculine Luxury',
      pt: 'Luxo Masculino',
      fr: 'Prestige Masculin',
      ar: 'فخامة رجالية معاصرة',
    },
    demoUrl: demoUrls.barbershop,
    accentColor: '#d4af37',
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    category: {
      en: 'Luxury Fashion & Lifestyle',
      pt: 'Moda de Luxo & E-Commerce',
      fr: 'Mode de Luxe & Lifestyle',
      ar: 'متاجر الأزياء والأناقة الفاخرة',
    },
    title: {
      en: 'VELORA Contemporary Atelier',
      pt: 'VELORA Atelier Contemporâneo',
      fr: 'VELORA Atelier Contemporain',
      ar: 'متجر الأزياء الراقي VELORA',
    },
    tagline: {
      en: 'Minimalist high-fashion e-commerce with interactive catalog, variant picker & checkout simulation',
      pt: 'Loja online de moda minimalista de alta-costura com catálogo tátil, seletores de variantes e checkout',
      fr: 'E-commerce mode minimaliste avec catalogue interactif, choix des variantes et panier dynamique',
      ar: 'متجر إلكتروني فاخر للأزياء المعاصرة يشمل دليلاً تفاعلياً، اختيار المقاس واللون ومحاكاة الدفع السريع',
    },
    description: {
      en: 'Editorial high-end retail experience featuring campaign lookbooks, interactive product drawer, size/color variant selector, dynamic cart drawer, and complete multi-step checkout simulation.',
      pt: 'Experiência de retalho editorial de luxo com lookbooks sazonais, filtros dinâmicos, seletores de cor e tamanho, carrinho interativo e fluxo completo de checkout simulado.',
      fr: 'Expérience d’achat haut de gamme avec lookbooks de campagne, sélecteur de taille et couleur, panier tiroir interactif et simulation de paiement.',
      ar: 'تجربة تسوق إلكتروني تحريرية مستوحاة من كبرى دور الأزياء العالمية، تشمل كتالوج المنتجات، فلاتر ذكية، اختيار الألوان والمقاسات، وسلة تسوق متكاملة مع تجربة إتمام الطلب.',
    },
    features: {
      en: ['Interactive Shopping Bag & Drawer', 'Product Variant & Size Selector', 'Faceted Category Filtering', 'Editorial Campaign Lookbook', 'Complete Checkout Simulation'],
      pt: ['Carrinho de Compras Interativo', 'Seletor de Tamanho & Variantes', 'Filtros Dinâmicos de Loja', 'Lookbook Editorial de Coleção', 'Simulação Completa de Checkout'],
      fr: ['Panier tiroir interactif', 'Choix des tailles & coloris', 'Filtres de catégories précis', 'Lookbook éditorial de collection', 'Simulation de commande complète'],
      ar: ['سلة تسوق حية وحساب تلقائي', 'اختيار ألوان ومقاسات المنتجات', 'فلاتر دقيقة وتصنيفات مرنة', 'كتالوج عروض الأزياء التحريري', 'محاكاة كاملة لإتمام الشراء'],
    },
    image: '/images/ecommerce/hero-campaign.jpg',
    badge: {
      en: 'High-Converting Retail',
      pt: 'Comércio de Alta Conversão',
      fr: 'Boutique Haute Conversion',
      ar: 'متجر عالي المبيعات',
    },
    demoUrl: demoUrls.ecommerce,
    accentColor: '#171717',
  },
  {
    id: 'lawyer',
    slug: 'lawyer',
    category: {
      en: 'Corporate Law & Counsel',
      pt: 'Advocacia & Direito Societário',
      fr: 'Droit des Affaires & Conseil',
      ar: 'محاماة واستشارات قانونية للشركات',
    },
    title: {
      en: 'Meridian Legal Partners',
      pt: 'Meridian Legal Partners',
      fr: 'Meridian Legal Partners',
      ar: 'شركة ميريديان للمحاماة والاستشارات',
    },
    tagline: {
      en: 'Distinguished corporate & commercial legal practice with partner profiles & confidential briefing engine',
      pt: 'Sociedade de advogados corporativa de prestígio com perfis de sócios e solicitação confidencial',
      fr: 'Cabinet d’avocats d’affaires réputé, profils d’associés et demande de consultation confidentielle',
      ar: 'مؤسسة قانونية رائدة للشركات والأعمال مع ملفات الشركاء ونظام استشارات قانونية سري ومحكم',
    },
    description: {
      en: 'Authoritative deep navy and warm ivory corporate presence with zero cliché courthouse imagery. Features 8 dedicated practice area monographs, partner biographies, thought leadership legal essays, and a formal consultation intake engine.',
      pt: 'Presença institucional imponente em azul-marinho e marfim, sem clichés visuais. Conta com 8 áreas de prática especializadas, biografias de advogados sócios, artigos jurídicos de liderança e agendamento formal de consulta.',
      fr: 'Présence institutionnelle bleu marine et ivoire. 8 domaines d’expertise détaillés, biographies des associés, articles d’analyse et demande de consultation.',
      ar: 'حضور مؤسسي رفيع يجمع بين الكحلي الداكن والعاجي الوقور بعيداً عن الصور النمطية للمحاكم. يضم 8 تخصصات قانونية مفصلة، سير الشركاء، مقالات فكرية وقانونية، ونموذج حجز استشارات سرية.',
    },
    features: {
      en: ['8 Dedicated Practice Monographs', 'Senior Attorney Profiles & Bios', 'Legal Thought Leadership Journal', 'Formal Intake Consultation Form', 'Confidential Client Inquiries'],
      pt: ['8 Áreas de Prática Dedicadas', 'Perfis & Biografias de Sócios', 'Caderno de Ensaios Jurídicos', 'Formulário de Consulta Formal', 'Canal Confidencial de Contacto'],
      fr: ['8 Domaines de compétences', 'Profils des associés seniors', 'Analyses & articles juridiques', 'Formulaire de consultation formelle', 'Échanges confidentiels'],
      ar: ['8 صفحات تخصصية للمجالات القانونية', 'سير ذاتية مفصلة للشركاء والمستشارين', 'مدونة الرؤى والأبحاث القانونية', 'نموذج طلب استشارة رسمية محكم', 'قناة تواصل سرية وموثوقة'],
    },
    image: '/images/lawyer/lawyer-hero.jpg',
    badge: {
      en: 'Authoritative Practice',
      pt: 'Prática de Prestígio',
      fr: 'Cabinet d’Autorité',
      ar: 'مكانة قانونية مرموقة',
    },
    demoUrl: demoUrls.lawyer,
    accentColor: '#1e3a8a',
  },
];
