export interface TranslationSchema {
  common: {
    getYourWebsite: string;
    viewLiveDemos: string;
    contactUs: string;
    startingAt: string;
    orderOnWhatsApp: string;
    learnMore: string;
    exploreDemo: string;
    previewNotice: string;
    backToHome: string;
  };
  nav: {
    home: string;
    services: string;
    demos: string;
    pricing: string;
    process: string;
    faq: string;
    blog: string;
    contact: string;
    cta: string;
    themeLight: string;
    themeDark: string;
    selectLanguage: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    priceTagLabel: string;
    priceSubtext: string;
    bulletPoints: string[];
    mockupAlt: string;
  };
  trustStrip: {
    items: {
      icon: string;
      title: string;
      desc: string;
    }[];
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      description: string;
      badge?: string;
    }[];
  };
  demos: {
    badge: string;
    title: string;
    subtitle: string;
    allFilter: string;
    viewDemo: string;
    orderThisStyle: string;
    readyToCustomize: string;
  };
  pricing: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    cardBadge: string;
    cardTitle: string;
    cardDescription: string;
    priceStartingFrom: string;
    featuresTitle: string;
    features: string[];
    ctaButton: string;
    footnote: string;
    domainNoticeTitle: string;
    domainNoticeText: string;
  };
  firstMonthSupport: {
    badge: string;
    title: string;
    subtitle: string;
    includedBadge: string;
    cardTitle: string;
    cardDescription: string;
    examplesTitle: string;
    examples: string[];
  };
  maintenance: {
    badge: string;
    title: string;
    subtitle: string;
    perRequestBadge: string;
    perRequestTitle: string;
    perRequestPriceLabel: string;
    perRequestDescription: string;
    examplesTitle: string;
    examples: string[];
    ctaButton: string;
    customQuoteNote: string;
  };
  clientOwnership: {
    badge: string;
    title: string;
    subtitle: string;
    pillars: {
      title: string;
      desc: string;
    }[];
    credentialsHandover: {
      title: string;
      desc: string;
      items: string[];
    };
    disclaimer: string;
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  whyChooseUs: {
    badge: string;
    title: string;
    subtitle: string;
    reasons: {
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    items: {
      quote: string;
      author: string;
      role: string;
      business: string;
      rating: number;
    }[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    whatsappCardTitle: string;
    whatsappCardDesc: string;
    whatsappCardBtn: string;
    emailCardTitle: string;
    emailCardDesc: string;
    form: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      businessNameLabel: string;
      businessNamePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      businessTypeLabel: string;
      businessTypePlaceholder: string;
      businessTypeOptions: string[];
      needsLabel: string;
      needsOptions: string[];
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submitting: string;
      successMessage: string;
      errorMessage: string;
    };
  };
  blog: {
    badge: string;
    title: string;
    subtitle: string;
    readMore: string;
    publishedOn: string;
    readingTime: string;
    backToList: string;
    tableOfContents: string;
    ctaArticleTitle: string;
    ctaArticleDesc: string;
    ctaArticleBtn: string;
    relatedPosts: string;
  };
  footer: {
    tagline: string;
    navigationTitle: string;
    servicesTitle: string;
    contactTitle: string;
    legalTitle: string;
    copyright: string;
    privacy: string;
    terms: string;
    allRightsReserved: string;
  };
  floatingWhatsApp: {
    tooltip: string;
  };
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
}

