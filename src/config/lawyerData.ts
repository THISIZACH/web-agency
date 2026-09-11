export type LocalizedString = {
  en: string;
  pt: string;
  ar: string;
  [key: string]: string;
};

export type LocalizedArray = {
  en: string[];
  pt: string[];
  ar: string[];
  [key: string]: string[];
};

export interface PracticeArea {
  id: string;
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  overview: LocalizedString;
  keyCapabilities: LocalizedArray;
  image: string;
  leadAttorney: string;
}

export interface Attorney {
  id: string;
  slug: string;
  name: string;
  title: LocalizedString;
  practices: string[];
  education: string[];
  languages: string[];
  bio: LocalizedString;
  image: string;
  email: string;
  directPhone: string;
}

export interface LegalInsight {
  slug: string;
  title: LocalizedString;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: LocalizedString;
  content: LocalizedString;
  image: string;
}

export const LAWYER_PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corporate-law',
    slug: 'corporate-law',
    title: {
      en: 'Corporate Law & Governance',
      pt: 'Direito Societário & Governação',
      ar: 'قانون الشركات وحوكمة الأعمال',
    },
    subtitle: {
      en: 'Structuring cross-border mergers, private equity acquisitions, and corporate recapitalizations',
      pt: 'Estruturação de fusões transfronteiriças, capital de risco e reestruturações societárias',
      ar: 'هيكلة عمليات الدمج والاستحواذ العابرة للحدود واستثمارات الملكية الخاصة وحوكمة الشركات',
    },
    overview: {
      en: 'We counsel multinationals, founders, and financial sponsors through high-stakes transactions. Our counsel spans venture formation, strategic joint ventures, capital markets compliance, and board-level risk management.',
      pt: 'Aconselhamos multinacionais, fundadores e fundos de investimento em operações estratégicas de elevado valor. A nossa prática abrange a constituição de joint ventures, mercados de capitais e conformidade regulatória.',
      ar: 'نقدم المشورة للشركات متعددة الجنسيات والمؤسسين وصناديق الاستثمار في الصفقات الكبرى والمشاريع المشتركة والامتثال المالي وحوكمة مجالس الإدارة.',
    },
    keyCapabilities: {
      en: [
        'Mergers & Cross-Border Acquisitions',
        'Private Equity & Growth Capital Advisory',
        'Boardroom Governance & Risk Architecture',
        'Corporate Restructuring & Shareholder Agreements',
      ],
      pt: [
        'Fusões & Aquisições Internacionais (M&A)',
        'Assessoria a Private Equity & Capital de Risco',
        'Governação de Administração & Gestão de Risco',
        'Reestruturações Societárias & Acordos Parassociais',
      ],
      ar: [
        'عمليات الدمج والاستحواذ الدولية',
        'استشارات الملكية الخاصة ورأس المال الجريء',
        'حوكمة مجالس الإدارة وإدارة المخاطر',
        'إعادة الهيكلة واتفاقيات المساهمين والشركاء',
      ],
    },
    image: '/images/lawyer/practice-corporate.jpg',
    leadAttorney: 'Jonathan Sterling',
  },
  {
    id: 'commercial-litigation',
    slug: 'commercial-litigation',
    title: {
      en: 'Commercial Litigation & Dispute Resolution',
      pt: 'Contencioso Comercial & Arbitragem',
      ar: 'النزاعات التجارية والتحكيم الدولي',
    },
    subtitle: {
      en: 'Decisive advocacy in complex multi-jurisdictional commercial disputes and international arbitrations',
      pt: 'Defesa estratégica em litígios comerciais complexos e arbitragens internacionais',
      ar: 'تمثيل قانوني حاسم في النزاعات التجارية متعددة الاختصاصات وقضايا التحكيم الدولي',
    },
    overview: {
      en: 'When commercial interests are contested, our dispute team delivers rigorous trial preparation and creative settlement strategies before civil courts and major international arbitral institutions (ICC, LCIA).',
      pt: 'Em litígios de elevado impacto, a nossa equipa assegura uma preparação processual minuciosa e estratégias eficazes de resolução perante tribunais judiciais e câmaras de arbitragem internacionais.',
      ar: 'عند تصاعد النزاعات التجارية، يقدم فريقنا دفاعاً محكماً واستراتيجيات تسوية حكيمة أمام المحاكم المدنية ومراكز التحكيم الدولية الرائدة.',
    },
    keyCapabilities: {
      en: [
        'International Commercial Arbitration (ICC, LCIA)',
        'Complex Breach of Contract & Warranty Claims',
        'Shareholder Disputes & Derivative Actions',
        'Injunctions & Asset Freezing Orders',
      ],
      pt: [
        'Arbitragem Comercial Internacional',
        'Incumprimento Contratual & Litígios de Garantias',
        'Conflitos entre Sócios & Ações Sociais',
        'Providências Cautelares & Arresto de Bens',
      ],
      ar: [
        'التحكيم التجاري الدولي وغرف التجارة العالمية',
        'نزاعات الإخلال بالعقود والضمانات التجارية',
        'منازعات الشركاء وحصص الملكية',
        'أوامر التحفظ وتجميد الأصول والتدابير الوقتية',
      ],
    },
    image: '/images/lawyer/practice-litigation.jpg',
    leadAttorney: 'Victoria Sinclair',
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    title: {
      en: 'Real Estate & Infrastructure Development',
      pt: 'Direito Imobiliário & Infraestruturas',
      ar: 'العقارات وتطوير البنية التحتية',
    },
    subtitle: {
      en: 'Advising institutional developers, sovereign wealth funds, and private offices on prime acquisitions',
      pt: 'Assessoria a promotores imobiliários, fundos institucionais e private offices em ativos de prestígio',
      ar: 'تقديم المشورة للمطورين العقاريين والصناديق السيادية والمكاتب العائلية في الصفقات الكبرى',
    },
    overview: {
      en: 'From trophy residential developments to commercial logistics parks, we guide clients through land title diligence, municipal zoning approvals, construction contracts, and institutional lease negotiation.',
      pt: 'De empreendimentos residenciais de luxo a parques logísticos, acompanhamos clientes na auditoria fundiária, licenciamento urbanístico, empreitadas e negociação de arrendamentos comerciais.',
      ar: 'من المشاريع السكنية الفاخرة إلى المناطق اللوجستية، نوجه عملاءنا عبر الفحص النافي للجهالة، التراخيص البلدية، عقود المقاولات وعقود التأجير المؤسسية.',
    },
    keyCapabilities: {
      en: [
        'Commercial Property Acquisitions & Disposals',
        'Planning, Zoning & Environmental Permitting',
        'FIDIC Construction Contracts & EPC Structuring',
        'Institutional Landlord & Tenant Leases',
      ],
      pt: [
        'Aquisição & Alienação de Ativos Imobiliários',
        'Urbanismo, Ordenamento & Licenciamento Ambiental',
        'Contratos de Empreitada FIDIC & EPC',
        'Arrendamentos Comerciais Estruturados',
      ],
      ar: [
        'صفقات بيع وشراء العقارات التجارية الكبرى',
        'التخطيط العمراني والتراخيص البيئية',
        'عقود البناء والتشييد الدولية فيديك',
        'عقود الإيجار التجارية للمؤسسات والمراكز',
      ],
    },
    image: '/images/lawyer/practice-realestate.jpg',
    leadAttorney: 'David Alverstone',
  },
  {
    id: 'employment-law',
    slug: 'employment-law',
    title: {
      en: 'Executive Employment & Labor Strategy',
      pt: 'Direito do Trabalho & Contratação Executiva',
      ar: 'قانون العمل واستراتيجيات التوظيف التنفيذي',
    },
    subtitle: {
      en: 'Structuring C-suite service agreements, restrictive covenants, and corporate workforce restructuring',
      pt: 'Estruturação de contratos de quadros superiores, cláusulas de não-concorrência e reestruturações laborais',
      ar: 'صياغة عقود الإدارة العليا وشروط عدم المنافسة وإعادة هيكلة القوى العاملة للشركات',
    },
    overview: {
      en: 'We counsel multinational employers and senior executive boards on employment contracts, sensitive severance negotiations, whistleblowing compliance, and cross-border employee mobility.',
      pt: 'Apoiamos empresas multinacionais e administrações executivas em matérias laborais estratégicas, cessação negociada de funções, planos de remuneração e mobilidade internacional de quadros.',
      ar: 'نقدم استشارات قانونية لأرباب العمل والقيادات التنفيذية في عقود العمل، التفاوض حول إنهاء الخدمات، وحزم المكافآت وحركة الكوادر الدولية.',
    },
    keyCapabilities: {
      en: [
        'C-Suite Compensation & Restrictive Covenants',
        'Workforce Downsizing & Redundancy Programs',
        'Cross-Border Executive Transfers & Secondments',
        'Discrimination & Whistleblower Investigations',
      ],
      pt: [
        'Pacotes Salariais C-Suite & Não-Concorrência',
        'Reestruturações Laborais & Despedimentos Coletivos',
        'Mobilidade Internacional de Quadros',
        'Investigações Internas & Denúncias Confidenciais',
      ],
      ar: [
        'حزم تعويضات الإدارة العليا وشروط عدم المنافسة',
        'برامج إعادة هيكلة الموظفين وتقليص العمالة',
        'نقل وانتداب المديرين التنفيذيين دولياً',
        'التحقيقات الداخلية وقضايا الإبلاغ عن المخالفات',
      ],
    },
    image: '/images/lawyer/practice-employment.jpg',
    leadAttorney: 'Amira Benali',
  },
  {
    id: 'family-law',
    slug: 'family-law',
    title: {
      en: 'Private Wealth & Family Governance',
      pt: 'Património Familiar & Planeamento Sucessório',
      ar: 'إدارة الثروات العائلية والتخطيط المالي الخاص',
    },
    subtitle: {
      en: 'Discreet wealth preservation, cross-border family trust structures, and prenuptial agreements',
      pt: 'Preservação patrimonial discreta, estruturas fiduciárias internacionais e acordos pré-nupciais',
      ar: 'حماية الثروات بسرية تامة، تأسيس الصناديق الاستئمانية العائلية، وتنظيم التركات العابرة للحدود',
    },
    overview: {
      en: 'We assist high-net-worth families, international dynasties, and single-family offices in passing down wealth across generations with utmost discretion, bespoke trust deeds, and tax efficiency.',
      pt: 'Apoiamos famílias com património elevado e family offices na transmissão intergeracional de bens, estruturas fiduciárias internacionais e acordos patrimoniais discretos.',
      ar: 'نوفر الدعم للعائلات ذات الملاءة المالية العالية والمكاتب العائلية لنقل الثروة بين الأجيال بأعلى درجات السرية والفعالية الضريبية.',
    },
    keyCapabilities: {
      en: [
        'International Family Trusts & Foundations',
        'Cross-Border Succession & Estate Diligence',
        'Bespoke Prenuptial & Matrimonial Asset Deeds',
        'Philanthropic Endowment Governance',
      ],
      pt: [
        'Trusts Familiares Internacionais & Fundações',
        'Planeamento Sucessório Transfronteiriço',
        'Pactos Antenupciais & Regimes de Bens',
        'Estruturas Filantrópicas & Mecenato',
      ],
      ar: [
        'الصناديق الاستئمانية والمؤسسات العائلية الدولية',
        'التخطيط لتوريث التركات وتوزيع الأصول بين الدول',
        'تنظيم الذمم المالية واتفاقيات ما قبل الزواج',
        'حوكمة الأوقاف والمؤسسات الخيرية الخاصة',
      ],
    },
    image: '/images/lawyer/practice-family.jpg',
    leadAttorney: 'Victoria Sinclair',
  },
  {
    id: 'immigration',
    slug: 'immigration',
    title: {
      en: 'Global Mobility & Corporate Immigration',
      pt: 'Mobilidade Global & Imigração Corporativa',
      ar: 'التنقل الدولي والهجرة الاستثمارية والشركات',
    },
    subtitle: {
      en: 'Executive residency visas, golden residency investor programs, and corporate relocation compliance',
      pt: 'Vistos de residência para executivos, programas de investimento e deslocalização corporativa',
      ar: 'تأشيرات الإقامة للمديرين، برامج الإقامة الاستثمارية، والامتثال القانوني لنقل مقرات الأعمال',
    },
    overview: {
      en: 'We deliver seamless corporate mobility pathways for executives, founders, and specialized engineering talent entering the UK, EU, and UAE markets, managing visa compliance with precision.',
      pt: 'Asseguramos soluções ágeis de mobilidade corporativa para quadros executivos, fundadores de tecnologia e investidores que pretendem residir e operar no Reino Unido, UE e EAU.',
      ar: 'نوفر مسارات انتقال سلسة للشركات والمديرين والمستثمرين للدخول إلى أسواق بريطانيا والاتحاد الأوروبي والإمارات مع استيفاء كافة المتطلبات القانونية.',
    },
    keyCapabilities: {
      en: [
        'Investor & High-Value Capital Visas',
        'Corporate Sponsor License & Audit Readiness',
        'Intra-Company Executive Transfers',
        'Dual Nationality & Citizenship Diligence',
      ],
      pt: [
        'Vistos de Investimento & Autorizações de Residência',
        'Licenciamento de Entidades Empregadoras',
        'Transferências de Quadros Intra-Grupo',
        'Processos de Nacionalidade & Cidadania',
      ],
      ar: [
        'تأشيرات المستثمرين وأصحاب رؤوس الأموال',
        'تراخيص رعاية الكفاءات الأجنبية للشركات',
        'نقل الموظفين والمديرين داخل مجموعات الشركات',
        'معاملات الجنسية المزدوجة والإقامة الدائمة',
      ],
    },
    image: '/images/lawyer/practice-immigration.jpg',
    leadAttorney: 'Marcus Chen',
  },
  {
    id: 'intellectual-property',
    slug: 'intellectual-property',
    title: {
      en: 'Intellectual Property & Technology Assets',
      pt: 'Propriedade Intelectual & Tecnologia',
      ar: 'الملكية الفكرية والأصول التقنية وبراءات الاختراع',
    },
    subtitle: {
      en: 'Protecting proprietary algorithms, patent portfolios, trademark registries, and licensing deals',
      pt: 'Proteção de patentes, algoritmos proprietários, registo de marcas e acordos de licenciamento',
      ar: 'حماية براءات الاختراع، الخوارزميات البرمجية، العلامات التجارية وعقود التراخيص التقنية',
    },
    overview: {
      en: 'In a knowledge-driven economy, intangible assets constitute a firm’s greatest balance-sheet value. We secure international trademark portfolios, defend against patent infringement, and structure IP transfer deeds.',
      pt: 'Numa economia orientada para o conhecimento, os ativos intangíveis representam o maior valor das empresas. Asseguramos o registo internacional de marcas, defesa de patentes e contratos de royalties.',
      ar: 'في الاقتصاد الرقمي الحديث، تمثل الأصول غير الملموسة القيمة الأكبر للشركات. نتولى تسجيل العلامات الدولية وحماية براءات الاختراع وصياغة عقود نقل التكنولوجيا.',
    },
    keyCapabilities: {
      en: [
        'Global Trademark Portfolio Architecture',
        'Patent Protection & Infringement Defense',
        'Software Licensing & SaaS Master Service Agreements',
        'Trade Secret & Proprietary Data Safeguards',
      ],
      pt: [
        'Registo Internacional de Marcas & Patentes',
        'Defesa Contenciosa de Propriedade Industrial',
        'Contratos de Licenciamento SaaS & Software',
        'Proteção de Segredos Comerciais & Dados',
      ],
      ar: [
        'إدارة وحماية محافظ العلامات التجارية عالمياً',
        'حماية براءات الاختراع والدفاع ضد التعدي عليها',
        'عقود تراخيص البرمجيات والخدمات السحابية',
        'حماية الأسرار التجارية والبيانات الحصرية',
      ],
    },
    image: '/images/lawyer/practice-ip.jpg',
    leadAttorney: 'Marcus Chen',
  },
  {
    id: 'business-advisory',
    slug: 'business-advisory',
    title: {
      en: 'Strategic Business Advisory & Regulatory Risk',
      pt: 'Consultoria Estratégica & Risco Regulatório',
      ar: 'الاستشارات الاستراتيجية والامتثال للمخاطر التنظيمية',
    },
    subtitle: {
      en: 'Guiding corporate boards through antitrust scrutiny, ESG compliance, and data governance frameworks',
      pt: 'Orientação a conselhos de administração em concorrência, critérios ESG e proteção de dados',
      ar: 'توجيه مجالس الإدارة في قضايا مكافحة الاحتكار، معايير الاستدامة ESG، وأطر حوكمة البيانات',
    },
    overview: {
      en: 'We provide pragmatic board-level advice on navigating emerging regulations, anti-bribery standards, cross-border privacy requirements (GDPR), and institutional supply chain investigations.',
      pt: 'Prestamos aconselhamento estratégico prático sobre novas regulamentações setoriais, combate à corrupção, privacidade de dados (RGPD) e auditorias de cadeias de abastecimento.',
      ar: 'نقدم استشارات عملية لأعضاء مجالس الإدارة للتعامل مع اللوائح المتطورة، مكافحة غسيل الأموال، خصوصية البيانات العالمية، وتدقيق سلاسل الإمداد.',
    },
    keyCapabilities: {
      en: [
        'Antitrust & Foreign Investment Screening Diligence',
        'ESG Compliance & Sustainability Disclosures',
        'Cross-Border Data Governance & GDPR Audits',
        'Internal Anti-Corruption & Sanctions Defense',
      ],
      pt: [
        'Conformidade com Direito da Concorrência',
        'Relatórios ESG & Sustentabilidade Corporativa',
        'Governação de Dados & Auditorias RGPD',
        'Conformidade Anti-Corrupção & Regime de Sanções',
      ],
      ar: [
        'فحص الاستثمارات الأجنبية والامتثال لقوانين المنافسة',
        'حوكمة معايير الاستدامة البيئية والاجتماعية ESG',
        'أطر حوكمة البيانات الدولية والامتثال للائحة الأوروبية',
        'مكافحة الفساد وتدقيق الامتثال للعقوبات الدولية',
      ],
    },
    image: '/images/lawyer/practice-advisory.jpg',
    leadAttorney: 'Jonathan Sterling',
  },
];

export const LAWYER_ATTORNEYS: Attorney[] = [
  {
    id: 'jonathan-sterling',
    slug: 'jonathan-sterling',
    name: 'Jonathan Sterling',
    title: {
      en: 'Senior Partner • Head of Corporate Practice',
      pt: 'Sócio Principal • Diretor de Direito Societário',
      ar: 'شريك أول • رئيس قطاع قانون الشركات',
    },
    practices: ['Corporate Law', 'Business Advisory', 'Cross-Border M&A'],
    education: ['LL.M. Harvard Law School', 'M.A. Oxford University (Magdalen College)'],
    languages: ['English (Native)', 'French (Fluent)'],
    bio: {
      en: 'Jonathan leads the firm’s Corporate and Private Equity practice with over 22 years of experience orchestrating high-value acquisitions across the City of London, Frankfurt, and New York.',
      pt: 'Com mais de 22 anos de experiência, Jonathan lidera a prática societária e de Private Equity, tendo assessorado algumas das operações de M&A mais expressivas em Londres e Frankfurt.',
      ar: 'يقود جوناثان قطاع الشركات والملكية الخاصة بخبرة تتجاوز 22 عاماً في إدارة صفقات الاستحواذ الكبرى بين لندن وفرانكفورت ونيويورك.',
    },
    image: '/images/lawyer/attorney-01.jpg',
    email: 'j.sterling@meridianlegal.co.uk',
    directPhone: '+44 20 7946 0701',
  },
  {
    id: 'victoria-sinclair',
    slug: 'victoria-sinclair',
    name: 'Victoria Sinclair',
    title: {
      en: 'Senior Partner • Commercial Disputes & Family Wealth',
      pt: 'Sócia Principal • Contencioso Comercial & Património',
      ar: 'شريكة أولى • رئيسة النزاعات التجارية والثروات الخاصة',
    },
    practices: ['Commercial Litigation', 'Family Law', 'International Arbitration'],
    education: ['LL.B. King’s College London (First Class Honors)', 'Inns of Court School of Law'],
    languages: ['English (Native)', 'German (Professional)'],
    bio: {
      en: 'Victoria is a seasoned trial advocate and accredited international arbitrator renowned for her formidable courtroom poise and discreet counsel to ultra-high-net-worth families.',
      pt: 'Victoria é uma advogada de contencioso de grande prestígio e árbitra internacional reconhecida pela postura firme em tribunal e aconselhamento discreto a famílias empresárias.',
      ar: 'تعد فيكتوريا من أبرز محامي المرافعات في بريطانيا ومحكمة دولية معتمدة تتميز بحنكة تفاوضية عالية في النزاعات المعقدة وإدارة ثروات العائلات.',
    },
    image: '/images/lawyer/attorney-02.jpg',
    email: 'v.sinclair@meridianlegal.co.uk',
    directPhone: '+44 20 7946 0702',
  },
  {
    id: 'david-alverstone',
    slug: 'david-alverstone',
    name: 'David Alverstone',
    title: {
      en: 'Partner • Real Estate & Infrastructure',
      pt: 'Sócio • Direito Imobiliário & Infraestruturas',
      ar: 'شريك • قطاع العقارات والمشاريع الكبرى',
    },
    practices: ['Real Estate', 'Commercial Leasing', 'FIDIC Contracts'],
    education: ['LL.B. University of Edinburgh', 'Diploma in Legal Practice'],
    languages: ['English (Native)', 'Italian (Conversational)'],
    bio: {
      en: 'David counsels sovereign wealth funds, institutional pension groups, and urban master developers on large-scale development schemes and prime portfolio acquisitions.',
      pt: 'David assessora fundos soberanos e promotores institucionais em grandes projetos urbanísticos e aquisição de carteiras imobiliárias de primeira linha.',
      ar: 'يقدم ديفيد المشورة لصناديق الثروة السيادية وصناديق التقاعد والمطورين العقاريين في المشاريع الحضرية الضخمة وصفقات العقارات التجارية الفاخرة.',
    },
    image: '/images/lawyer/attorney-03.jpg',
    email: 'd.alverstone@meridianlegal.co.uk',
    directPhone: '+44 20 7946 0703',
  },
  {
    id: 'amira-benali',
    slug: 'amira-benali',
    name: 'Amira Benali',
    title: {
      en: 'Partner • Executive Employment & Workforce Strategy',
      pt: 'Sócia • Direito do Trabalho & Contratação Executiva',
      ar: 'شريكة • قانون العمل واستراتيجيات التوظيف التنفيذي',
    },
    practices: ['Employment Law', 'Corporate Whistleblowing', 'Executive Mobility'],
    education: ['Master of Laws (LL.M.) Sorbonne University', 'University College London (UCL)'],
    languages: ['English (Fluent)', 'Arabic (Native)', 'French (Fluent)'],
    bio: {
      en: 'Amira counsels multinational boards on executive appointments, severance packages, collective labor negotiations, and workplace investigations across the EMEA region.',
      pt: 'Amira presta assessoria a administrações corporativas em contratações estratégicas de topo, investigações internas e relações coletivas de trabalho na região EMEA.',
      ar: 'تختص أميرة في تقديم المشورة للشركات الدولية في تعيينات المديرين، باقات إنهاء الخدمة، والتحقيقات العمالية الحساسة في منطقة أوروبا والشرق الأوسط.',
    },
    image: '/images/lawyer/attorney-04.jpg',
    email: 'a.benali@meridianlegal.co.uk',
    directPhone: '+44 20 7946 0704',
  },
  {
    id: 'marcus-chen',
    slug: 'marcus-chen',
    name: 'Marcus Chen',
    title: {
      en: 'Partner • Intellectual Property & Tech Advisory',
      pt: 'Sócio • Propriedade Intelectual & Ativos Tecnológicos',
      ar: 'شريك • الملكية الفكرية والتقنيات المتقدمة',
    },
    practices: ['Intellectual Property', 'Immigration', 'Technology Licensing'],
    education: ['B.Sc. Computer Science Cambridge', 'LL.M. London School of Economics (LSE)'],
    languages: ['English (Native)', 'Mandarin (Fluent)'],
    bio: {
      en: 'Dual-qualified in computer science and law, Marcus is a trusted strategist for artificial intelligence ventures, biotech patentees, and global talent visa programs.',
      pt: 'Com dupla formação em ciências da computação e direito, Marcus é o consultor de confiança de empresas de inteligência artificial e programas de atração de talento global.',
      ar: 'يجمع ماركوس بين علوم الحاسوب والقانون، ويعد مستشاراً موثوقاً لشركات الذكاء الاصطناعي والتكنولوجيا الحيوية وبرامج هجرة الكفاءات الاستثنائية.',
    },
    image: '/images/lawyer/attorney-05.jpg',
    email: 'm.chen@meridianlegal.co.uk',
    directPhone: '+44 20 7946 0705',
  },
  {
    id: 'sophia-rhodes',
    slug: 'sophia-rhodes',
    name: 'Sophia Rhodes',
    title: {
      en: 'Senior Counsel • Regulatory Risk & Compliance',
      pt: 'Advogada Consultora • Risco Regulatório & Compliance',
      ar: 'مستشارة قانونية أولى • الامتثال والمخاطر التنظيمية',
    },
    practices: ['Business Advisory', 'Corporate Law', 'Cross-Border Sanctions'],
    education: ['B.A. Jurisprudence Oxford (Balliol College)', 'Solicitor of the Senior Courts'],
    languages: ['English (Native)', 'Spanish (Fluent)'],
    bio: {
      en: 'Sophia previously served in national financial regulatory authorities before joining Meridian Legal to advise global banks and corporations on anti-money laundering and compliance.',
      pt: 'Sophia colaborou com autoridades regulatórias financeiras antes de ingressar na Meridian Legal, assessorando instituições financeiras em combate ao branqueamento de capitais.',
      ar: 'عملت صوفيا سابقاً في الهيئات الرقابية المالية الحكومية قبل انضمامها للشركة، حيث تقدم المشورة للبنوك والمؤسسات في مكافحة غسيل الأموال والامتثال الدولي.',
    },
    image: '/images/lawyer/attorney-06.jpg',
    email: 's.rhodes@meridianlegal.co.uk',
    directPhone: '+44 20 7946 0706',
  },
];

export const LAWYER_INSIGHTS: LegalInsight[] = [
  {
    slug: 'cross-border-mergers-navigating-antitrust',
    title: {
      en: 'Cross-Border M&A in 2026: Navigating the New Multilateral Regulatory Framework',
      pt: 'M&A Transfronteiriço em 2026: A Nova Arquitetura Regulatória Multilateral',
      ar: 'صفقات الاندماج والاستحواذ الدولية في 2026: التعامل مع الأطر التنظيمية الحديثة',
    },
    category: 'Corporate & M&A',
    date: 'August 2026',
    readTime: '6 min read',
    author: 'Jonathan Sterling',
    excerpt: {
      en: 'An analytical examination of foreign investment screening mechanisms and their implications for private equity timeline structures.',
      pt: 'Uma análise detalhada dos mecanismos de controlo ao investimento estrangeiro e o seu impacto nos calendários de Private Equity.',
      ar: 'دراسة تحليلية دقيقة لآليات فحص الاستثمار الأجنبي وتأثيراتها المباشرة على الجداول الزمنية لصفقات الملكية الخاصة.',
    },
    content: {
      en: 'Across Europe, the United Kingdom, and the Americas, merger control filings increasingly intersect with sovereign security scrutiny. Dealmakers must integrate multi-agency regulatory strategies prior to heads of terms.',
      pt: 'Em toda a Europa e no Reino Unido, as notificações de fusões cruzam-se cada vez mais com critérios de segurança soberana. As partes devem antecipar a estratégia regulatória antes de fechar termos de acordo.',
      ar: 'في مختلف الأسواق الأوروبية والدولية، أصبحت صفقات الاندماج تخضع لتدقيق أمني واقتصادي مشدد، مما يفرض على المستثمرين تبني استراتيجيات استباقية متكاملة.',
    },
    image: '/images/lawyer/insight-01.jpg',
  },
  {
    slug: 'arbitration-enforcement-foreign-jurisdictions',
    title: {
      en: 'Enforcing Commercial Arbitral Awards under the New York Convention: Practical Defense',
      pt: 'Execução de Sentenças Arbitrais Estrangeiras ao Abrigo da Convenção de Nova Iorque',
      ar: 'تنفيذ أحكام التحكيم التجاري الدولي بموجب اتفاقية نيويورك: استراتيجيات عملية',
    },
    category: 'Commercial Disputes',
    date: 'July 2026',
    readTime: '8 min read',
    author: 'Victoria Sinclair',
    excerpt: {
      en: 'Key tactical considerations for preserving asset mobility when seeking multi-jurisdictional enforcement against sovereign-linked entities.',
      pt: 'Considerações táticas nucleares para salvaguarda de ativos em processos de execução transfronteiriça contra entidades ligadas a estados.',
      ar: 'اعتبارات تكتيكية جوهرية لتأمين الأصول ومنع تهريبها أثناء ملاحقة تنفيذ الأحكام القضائية والتحكيمية ضد الكيانات الدولية.',
    },
    content: {
      en: 'Securing an arbitral victory is merely the preliminary phase of a dispute; monetizing the award requires rigorous pre-judgment freezing orders and coordinated forensic accounting.',
      pt: 'Obter uma decisão arbitral favorável é apenas a primeira etapa do litígio; monetizar a decisão exige providências cautelares prévias e auditoria forense articulada.',
      ar: 'الحصول على حكم تحكيمي لصالحك ليس سوى الخطوة الأولى؛ إذ يتطلب تحصيل الحقوق المالية إصدار أوامر تجميد تحفظية وتدقيقاً محاسبياً جنائياً للأصول.',
    },
    image: '/images/lawyer/insight-02.jpg',
  },
  {
    slug: 'artificial-intelligence-trade-secrets-governance',
    title: {
      en: 'Proprietary AI Models and Trade Secret Protection: Boardroom Governance Guidelines',
      pt: 'Modelos Proprietários de Inteligência Artificial & Segredos Comerciais: Guia de Governação',
      ar: 'نماذج الذكاء الاصطناعي الحصرية وحماية الأسرار التجارية: دليل مجالس الإدارة',
    },
    category: 'Intellectual Property',
    date: 'June 2026',
    readTime: '5 min read',
    author: 'Marcus Chen',
    excerpt: {
      en: 'How enterprise tech leaders can safeguard proprietary machine learning training datasets against unauthorized extraction and employee poaching.',
      pt: 'Como as empresas tecnológicas devem blindar conjuntos de dados proprietários contra extração indevida e captação hostil de quadros.',
      ar: 'كيفية حماية مجموعات البيانات التدريبية ونماذج التعلم الآلي الحصرية من الاستيلاء غير المشروع واستقطاب الكفاءات.',
    },
    content: {
      en: 'As standard copyright jurisprudence struggles to accommodate algorithmic weights, forward-thinking legal departments are anchoring enterprise AI value in fortified trade secrecy infrastructure.',
      pt: 'Enquanto a jurisprudência tradicional de direitos de autor se adapta à IA, os departamentos jurídicos de vanguarda ancoram a proteção de valor em estruturas de segredo comercial.',
      ar: 'مع تأخر قوانين الملكية الفكرية التقليدية في مواكبة تطورات الذكاء الاصطناعي، تتوجه الإدارات القانونية الرائدة نحو تحصين الأسرار التجارية والبيانات الحصرية كركيزة أساسية.',
    },
    image: '/images/lawyer/insight-03.jpg',
  },
];

