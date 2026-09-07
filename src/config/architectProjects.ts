export interface ArchitectProject {
  slug: string;
  title: {
    en: string;
    pt: string;
    ar: string;
  };
  typology: {
    en: string;
    pt: string;
    ar: string;
  };
  category: 'residential' | 'hospitality' | 'commercial' | 'interior';
  location: string;
  year: string;
  area: string;
  heroImage: string;
  galleryImages: string[];
  excerpt: {
    en: string;
    pt: string;
    ar: string;
  };
  concept: {
    en: string;
    pt: string;
    ar: string;
  };
  materials: {
    en: string[];
    pt: string[];
    ar: string[];
  };
  details: {
    scope: { en: string; pt: string; ar: string };
    energyRating: string;
    duration: string;
  };
}

export const ARCHITECT_PROJECTS: ArchitectProject[] = [
  {
    slug: 'modern-villa',
    title: {
      en: 'Villa Solstice',
      pt: 'Villa Solstice',
      ar: 'فيلا سولستيس',
    },
    typology: {
      en: 'Modern Minimalist Villa',
      pt: 'Moradia Minimalista Contemporânea',
      ar: 'فيلا عصرية بتصميم بسيط',
    },
    category: 'residential',
    location: 'Algarve, Portugal',
    year: '2024',
    area: '620 m²',
    heroImage: '/images/architect/project-villa.jpg',
    galleryImages: [
      '/images/architect/project-villa.jpg',
      '/images/architect/service-residential.jpg',
      '/images/architect/service-interior.jpg',
    ],
    excerpt: {
      en: 'A monolithic white limestone residence sculpted into coastal topography with panoramic infinity horizons.',
      pt: 'Uma residência monolítica em pedra calcária clara esculpida na topografia costeira com vistas panorâmicas.',
      ar: 'مسكن متجانس منحوت من الحجر الجيري الأبيض يندمج مع تضاريس الساحل بإطلالات أفقية مفتوحة.',
    },
    concept: {
      en: 'Villa Solstice is organized around dual cantilevered concrete planes that shade floor-to-ceiling sliding glazing. The living spaces dissolve into reflection pools, maximizing passive cross-ventilation and natural daylighting throughout all seasons.',
      pt: 'A Villa Solstice organiza-se em torno de dois planos de betão em consola que sombreiam vãos envidraçados do chão ao teto. Os espaços sociais dissolvem-se em espelhos de água, maximizando a ventilação passiva cruzada.',
      ar: 'تم تنظيم فيلا سولستيس حول مستويين خرسانيين معلقين يظلان واجهات زجاجية ممتدة من الأرض إلى السقف. تندمج المساحات المعيشية مع أحواض مائية عاكسة تعزز التهوية الطبيعية والإضاءة طوال العام.',
    },
    materials: {
      en: ['Moleanos Limestone', 'Board-formed White Concrete', 'Thermal Fluted Glass', 'Brushed Bronze Hardware'],
      pt: ['Calcário Moleanos', 'Betão Branco Aparente', 'Vidro Térmico Estriado', 'Ferragens em Bronze Escovado'],
      ar: ['حجر موليانوس الجيري', 'خرسانة بيضاء مسبقة الصب', 'زجاج عازل مزدوج', 'تفاصيل من البرونز المطفي'],
    },
    details: {
      scope: {
        en: 'Full Architectural & Interior Architecture Execution',
        pt: 'Projeto Geral de Arquitetura & Design de Interiores',
        ar: 'تصميم معماري وتصميم داخلي متكامل مع الإشراف على التنفيذ',
      },
      energyRating: 'A+ Nearly Zero Energy (nZEB)',
      duration: '18 Months Construction',
    },
  },
  {
    slug: 'minimalist-residence',
    title: {
      en: 'Casa Monólito',
      pt: 'Casa Monólito',
      ar: 'منزل مونوليتو',
    },
    typology: {
      en: 'Minimalist Stone Residence',
      pt: 'Residência Minimalista em Pedra',
      ar: 'مسكن حجري بتصميم معاصر نقي',
    },
    category: 'residential',
    location: 'Sintra, Portugal',
    year: '2023',
    area: '480 m²',
    heroImage: '/images/architect/project-residence.jpg',
    galleryImages: [
      '/images/architect/project-residence.jpg',
      '/images/architect/architect-hero.jpg',
      '/images/architect/service-renovation.jpg',
    ],
    excerpt: {
      en: 'A quiet dialogue between exposed warm concrete, indigenous stone walls, and sheltered forest light.',
      pt: 'Um diálogo sereno entre betão aparente, muros de pedra autóctone e luz filtrada da floresta.',
      ar: 'حوار هادئ بين الخرسانة الدافئة المكشوفة، الجدران الحجرية الطبيعية والضوء المنساب بين الأشجار.',
    },
    concept: {
      en: 'Conceived as a grounded sanctuary amidst mature pines. The private sleeping quarters are excavated slightly into the grade for thermal mass, while the open pavilion pavilion rises into the canopy with raw timber rafters.',
      pt: 'Concebida como um santuário entre pinheiros mansos. Os quartos privativos são ligeiramente semi-enterrados para inércia térmica, enquanto a zona social se eleva em direção à copa das árvores.',
      ar: 'صُمم المسكن ليكون ملاذاً هادئاً بين أشجار الصنوبر المعمرة. خُصصت غرف النوم في مستوى منخفض للاستفادة من العزل الحراري الطبيعي للأرض.',
    },
    materials: {
      en: ['Local Granite Ashlar', 'Earth-Pigmented Concrete', 'Smoked European Oak', 'Blackened Steel Trusses'],
      pt: ['Granito da Região', 'Betão Pigmentado a Terracota', 'Carvalho Europeu Fumado', 'Estrutura em Aço Negro'],
      ar: ['جرانيت محلي طبيعي', 'خرسانة ذات صبغة ترابية', 'خشب البلوط الأوروبي المعتق', 'هيكل فولاذي أسود'],
    },
    details: {
      scope: {
        en: 'Bespoke Residential Design & Site Landscaping',
        pt: 'Projeto de Habitação Unifamiliar & Paisagismo',
        ar: 'تصميم مسكن خاص وتنسيق حدائق طبيعي',
      },
      energyRating: 'A+ Passive House Standard',
      duration: '14 Months Construction',
    },
  },
  {
    slug: 'luxury-apartment',
    title: {
      en: 'The Penthouse at Chiado',
      pt: 'Penthouse Chiado',
      ar: 'بنتهاوس شيادو الفاخر',
    },
    typology: {
      en: 'Heritage Luxury Penthouse',
      pt: 'Penthouse de Luxo Reabilitada',
      ar: 'بنتهاوس تراثي فاخر بسقوف عالية',
    },
    category: 'interior',
    location: 'Lisbon, Portugal',
    year: '2024',
    area: '340 m²',
    heroImage: '/images/architect/project-apartment.jpg',
    galleryImages: [
      '/images/architect/project-apartment.jpg',
      '/images/architect/service-interior.jpg',
      '/images/architect/blog-04.jpg',
    ],
    excerpt: {
      en: 'Restoration of an 18th-century pombalino attic into an ethereal double-height residence above the Tagus River.',
      pt: 'Reabilitação de sótão pombalino do séc. XVIII numa residência etérea de pé-direito duplo sobre o Tejo.',
      ar: 'إعادة تأهيل علية تاريخية من القرن الثامن عشر وتحويلها إلى شقة علوية فسيحة تطل على نهر التاجة.',
    },
    concept: {
      en: 'Revealing the historic timber gaiola pombalina structural cage while introducing sleek floating travertine kitchen monoliths and concealed acoustic pocket doors.',
      pt: 'Exposição da estrutura original de madeira pombalina combinada com monólitos de travertino flutuantes na cozinha e portas acústicas embutidas.',
      ar: 'إبراز الهيكل الخشبي التراثي الأصلي للمبنى ودمجه مع مطبخ من حجر الترافرتين الإيطالي الفاخر وأبواب مخفية عازلة للصوت.',
    },
    materials: {
      en: ['Restored Pine Timbers', 'Navona Travertine', 'Chalk-washed Lime Plaster', 'Cast Brass Accents'],
      pt: ['Casquinha Branca Original', 'Travertino Navona', 'Estuque de Cal Tradicional', 'Pormenores em Latão'],
      ar: ['أخشاب صنوبر أصلية مجددة', 'حجر ترافرتين نافونا', 'طلاء جيري طبيعي أبيض', 'لمسات نحاسية راقية'],
    },
    details: {
      scope: {
        en: 'Heritage Interior Architecture & Structural Restoration',
        pt: 'Reabilitação de Interiores Históricos & Estrutura',
        ar: 'إعادة ترميم معماري وتصميم داخلي تاريخي فاخر',
      },
      energyRating: 'A Verified Restoration',
      duration: '11 Months',
    },
  },
  {
    slug: 'coastal-house',
    title: {
      en: 'Cliff Horizon House',
      pt: 'Casa Falésia do Guincho',
      ar: 'منزل حافة الجرف الساحلي',
    },
    typology: {
      en: 'Coastal Cliff Residence',
      pt: 'Habitação Costeira de Falésia',
      ar: 'مسكن ساحلي على جرف صخري',
    },
    category: 'residential',
    location: 'Cascais, Portugal',
    year: '2023',
    area: '540 m²',
    heroImage: '/images/architect/project-coastal.jpg',
    galleryImages: [
      '/images/architect/project-coastal.jpg',
      '/images/architect/project-villa.jpg',
      '/images/architect/service-residential.jpg',
    ],
    excerpt: {
      en: 'Defying ocean winds through an aerodynamic concrete shell framing untamed Atlantic swells.',
      pt: 'Desafiando a maresia e ventos marítimos através de uma concha aerodinâmica em betão voltada ao Atlântico.',
      ar: 'تصميم انسيابي مبتكر يقاوم الرياح البحرية ويؤطر مشهد المحيط الأطلسي المفتوح.',
    },
    concept: {
      en: 'Engineered with marine-grade post-tensioned concrete, creating a 12-meter column-free living room floating above the ocean surf. Deep recessed loggias provide wind-sheltered outdoor dining.',
      pt: 'Engenharia com betão pós-tensionado marítimo, criando uma sala de 12 metros sem pilares suspensa sobre a arriba. Pátios recuados protegem as refeições ao ar livre do vento.',
      ar: 'تم استخدام خرسانة مسلحة مقاومة للأملاح البحرية لإنشاء صالة معيشية بطول 12 متراً بدون أي أعمدة داخلية، مع شرفات محمية من الرياح.',
    },
    materials: {
      en: ['Marine-Grade Fair-Face Concrete', 'Anodized Marine Aluminum', 'Natural Teak Decking', 'Low-Iron Glass'],
      pt: ['Betão Aparente Hidrófugo', 'Alumínio Marítimo Anodizado', 'Deck em Teca Natural', 'Vidro Extra-Claro'],
      ar: ['خرسانة بحرية مقاومة للعوامل الجوية', 'ألمنيوم مؤكسد عالي التحمل', 'أرضيات خشب الساج الطبيعي', 'زجاج شفاف نقي'],
    },
    details: {
      scope: {
        en: 'Complete Architecture, Structural Engineering Coordination & Permits',
        pt: 'Projeto de Arquitetura, Engenharia & Licenciamento',
        ar: 'تصميم معماري وهندسي متكامل واستخراج التراخيص',
      },
      energyRating: 'A+ Maritime Energy Performance',
      duration: '20 Months',
    },
  },
  {
    slug: 'contemporary-office',
    title: {
      en: 'Forma Creative Pavilion',
      pt: 'Pavilhão Criativo Forma',
      ar: 'جناح فورما للمكاتب المعاصرة',
    },
    typology: {
      en: 'Contemporary Timber Office',
      pt: 'Edifício de Escritórios em Madeira',
      ar: 'مقر إداري ومكتبي من الخشب والزجاج',
    },
    category: 'commercial',
    location: 'Porto, Portugal',
    year: '2022',
    area: '1,200 m²',
    heroImage: '/images/architect/project-office.jpg',
    galleryImages: [
      '/images/architect/project-office.jpg',
      '/images/architect/service-commercial.jpg',
      '/images/architect/architect-studio.jpg',
    ],
    excerpt: {
      en: 'A mass-timber workplace pavilion prioritizing employee well-being, biophilic courtyards, and natural acoustics.',
      pt: 'Espaço de trabalho corporativo em madeira lamelada colada focado no bem-estar, pátios verdes e luz zenital.',
      ar: 'مبنى مكتبي يعتمد على الخشب الهندسي والساحات الخضراء المفتوحة لتعزيز بيئة العمل والإنتاجية.',
    },
    concept: {
      en: 'Constructed entirely from sustainably harvested cross-laminated timber (CLT). The visible wood grain provides biophilic tactile calm, reducing workplace stress while sequestering over 400 tons of carbon.',
      pt: 'Construído inteiramente em madeira lamelada cruzada (CLT) certificada. A textura natural da madeira oferece conforto acústico e térmico excecional.',
      ar: 'شُيد بالكامل من ألواح الخشب المصفح المستدام (CLT)، مما يمنح مساحات العمل دفئاً صوتياً وبصرياً فريداً ويقلل البصمة الكربونية.',
    },
    materials: {
      en: ['Cross-Laminated Timber (CLT)', 'Zinc Standing-Seam Roof', 'Polished Terrazzo Floors', 'Solar Shading Louvers'],
      pt: ['Madeira CLT Certificada', 'Cobertura em Zinco Camisola', 'Pavimento em Terrazzo Polido', 'Brise-Soleil Térmico'],
      ar: ['خشب هندسي متقاطع الألياف', 'سقف من الزنك المعماري', 'أرضيات تيرازو مصقولة', 'كاسرات شمسية ذكية'],
    },
    details: {
      scope: {
        en: 'Commercial Masterplan & Interior Workspace Planning',
        pt: 'Projeto de Edifício Corporativo & Espaços de Trabalho',
        ar: 'تصميم تجاري شامل وتخطيط مساحات العمل المشتركة',
      },
      energyRating: 'LEED Platinum Verified Simulation',
      duration: '16 Months',
    },
  },
  {
    slug: 'boutique-hotel',
    title: {
      en: 'Quinta das Oliveiras Retreat',
      pt: 'Retiro Quinta das Oliveiras',
      ar: 'منتجع كينتا داس أوليفيراس',
    },
    typology: {
      en: 'Boutique Vineyard Retreat',
      pt: 'Hotel de Charme em Quinta Vinhateira',
      ar: 'فندق ونادي استجمام في ريف الكروم',
    },
    category: 'hospitality',
    location: 'Douro Valley, Portugal',
    year: '2023',
    area: '2,400 m²',
    heroImage: '/images/architect/project-hotel.jpg',
    galleryImages: [
      '/images/architect/project-hotel.jpg',
      '/images/architect/project-villa.jpg',
      '/images/architect/service-renovation.jpg',
    ],
    excerpt: {
      en: 'Cascading terraced suites camouflaged into UNESCO wine slopes, built with dry-stack regional schist.',
      pt: 'Suítes em socalcos camufladas nas encostas vinhateiras do Douro, erguidas em xisto tradicional da região.',
      ar: 'أجنحة فندقية متدرجة تنسجم مع منحدرات مزارع العنب التراثية، مبنية بحجر الشست الطبيعي.',
    },
    concept: {
      en: 'Rather than introducing an imposing mass, the guest suites are embedded into existing vineyard terraces. Green living roofs planted with native wild herbs mirror the surrounding contours.',
      pt: 'Em vez de erguer um volume maciço, os quartos foram enterrados nos socalcos existentes, com coberturas verdes povoadas por ervas aromáticas autóctones.',
      ar: 'بدلاً من تشييد كتلة خرسانية ضخمة، تم دمج الأجنحة داخل مدرجات التلال الطبيعية مع أسقف خضراء مزروعة بنباتات برية أصيلة.',
    },
    materials: {
      en: ['Douro Schist Dry-Stone', 'Corten Weathering Steel', 'Rough-Sawn Chestnut', 'Natural Clay Plaster'],
      pt: ['Muros de Xisto da Região', 'Aço Corten Oxidado', 'Castanho Bruto Serrado', 'Reboco de Argila Natural'],
      ar: ['أحجار الشست الجافة', 'فولاذ الكورتن المعتق', 'أخشاب الكستناء الطبيعية', 'طلاء طيني تقليدي'],
    },
    details: {
      scope: {
        en: 'Hospitality Masterplanning, Architecture & Landscape Integration',
        pt: 'Masterplan Hoteleiro, Arquitetura & Paisagismo',
        ar: 'مخطط فندقي وتصميم معماري واندماج بيئي متكامل',
      },
      energyRating: 'A+ Eco-Tourism Benchmark',
      duration: '24 Months',
    },
  },
  {
    slug: 'urban-residence',
    title: {
      en: 'Courtyard House VII',
      pt: 'Casa Pátio VII',
      ar: 'منزل الفناء الحضري السابع',
    },
    typology: {
      en: 'Contemporary Courtyard Residence',
      pt: 'Habitação Urbana com Pátio Central',
      ar: 'مسكن عصري بفناء داخلي وحديقة خاصة',
    },
    category: 'residential',
    location: 'Lisbon, Portugal',
    year: '2024',
    area: '390 m²',
    heroImage: '/images/architect/project-urban.jpg',
    galleryImages: [
      '/images/architect/project-urban.jpg',
      '/images/architect/project-residence.jpg',
      '/images/architect/service-interior.jpg',
    ],
    excerpt: {
      en: 'An inward-facing serene home sheltering its occupants from city density behind private Japanese maples.',
      pt: 'Uma residência introvertida e luminosa que resguarda a família do ruído citadino em torno de um pátio contemplativo.',
      ar: 'مسكن عائلي هادئ منفتح على فناء داخلي يوفر الخصوصية التامة والعزل عن صخب وضوضاء المدينة.',
    },
    concept: {
      en: 'Addressing a narrow urban plot by organizing all family life around an internal sunken stone garden. Floor-to-ceiling glass corridors link living, cooking, and reading galleries.',
      pt: 'Aproveitamento de um lote estreito na cidade através da articulação dos espaços em torno de um jardim rebaixado. Galerias envidraçadas unem a sala à biblioteca.',
      ar: 'تم استغلال قطعة أرض حضرية ضيقة عبر تنظيم كافة أروقة المنزل حول حديقة حجرية منخفضة تربط الصالات بالمكتبة.',
    },
    materials: {
      en: ['Textured Off-White Render', 'Brushed Travertine Pavers', 'Blackened Aluminum Frames', 'Solid Walnut Joinery'],
      pt: ['Reboco Branco Areiado', 'Lajes de Travertino Escovado', 'Caixilharia Preta Minimalista', 'Mobiliário Fixo em Nogueira'],
      ar: ['طلاء أبيض ناعم الملمس', 'بلاط ترافرتين مطفي', 'إطارات ألمنيوم سوداء نحيفة', 'أعمال خشبية من الجوز'],
    },
    details: {
      scope: {
        en: 'Urban Architecture & Custom Interior Joinery',
        pt: 'Projeto de Arquitetura & Carpintarias Personalizadas',
        ar: 'تصميم معماري حضري وتفصيل داخلي مخصص',
      },
      energyRating: 'A+ High Efficiency Urban',
      duration: '15 Months',
    },
  },
];

