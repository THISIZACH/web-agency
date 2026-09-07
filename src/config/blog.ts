import { Locale } from './pricing';

export interface BlogPost {
  slug: string;
  category: {
    en: string;
    pt: string;
    ar: string;
  };
  date: string;
  readTimeMinutes: number;
  author: {
    name: string;
    role: {
      en: string;
      pt: string;
      ar: string;
    };
    avatar: string;
  };
  coverImage: string;
  title: {
    en: string;
    pt: string;
    ar: string;
  };
  excerpt: {
    en: string;
    pt: string;
    ar: string;
  };
  content: {
    en: string[];
    pt: string[];
    ar: string[];
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'why-every-business-needs-a-professional-website',
    category: {
      en: 'Business Strategy',
      pt: 'Estratégia Empresarial',
      ar: 'استراتيجية الأعمال',
    },
    date: '2026-08-15',
    readTimeMinutes: 5,
    author: {
      name: 'Alex Vance',
      role: {
        en: 'Digital Strategy Lead',
        pt: 'Diretor de Estratégia Digital',
        ar: 'مدير الاستراتيجيات الرقمية',
      },
      avatar: '/images/agency/author-sarah.jpg',
    },
    coverImage: '/images/agency/blog-01.jpg',
    title: {
      en: 'Why Every Business Needs a Professional Website in 2026',
      pt: 'Por Que Todas as Empresas Precisam de um Website Profissional em 2026',
      ar: 'لماذا يحتاج كل نشاط تجاري إلى موقع إلكتروني احترافي في 2026؟',
    },
    excerpt: {
      en: 'In an era where customers search online before making any purchase, not having a professional website means leaving credibility and revenue on the table.',
      pt: 'Numa era em que os clientes pesquisam online antes de qualquer compra, não ter um website profissional significa perder credibilidade e vendas todos os dias.',
      ar: 'في عصر يبحث فيه الزبائن عبر الإنترنت قبل اتخاذ أي قرار شراء، فإن عدم امتلاك موقع احترافي يعني خسارة المصداقية والعملاء يومياً.',
    },
    content: {
      en: [
        '### The First Impression Is Almost Always Digital',
        'Over 84% of modern consumers verify a company online before calling, booking, or walking through the door. If a prospective customer searches for your brand or service and finds nothing, or only an outdated Facebook page, doubts immediately arise regarding your legitimacy.',
        '### 24/7 Availability That Works While You Sleep',
        'Your physical storefront or office has opening hours, but your website never clocks out. A clean, modern agency-designed website answers client questions, showcases your portfolio or menu, displays opening hours, and collects inquiries via WhatsApp or forms even at 2 AM.',
        '### Building Irreplaceable Digital Equity',
        'When you build your brand solely on social platforms like Instagram or TikTok, you are building on rented land. Algorithms change, accounts get restricted, and your reach can vanish overnight. A dedicated website with your custom domain is an asset you own 100%.',
        '### The Bottom Line',
        'Investing in a professional website starting at €299 is not an expense—it is your highest-leverage sales tool. In just a few days, you can establish an authoritative digital presence that converts visitors into loyal clients.',
      ],
      pt: [
        '### A Primeira Impressão É Quase Sempre Digital',
        'Mais de 84% dos consumidores modernos pesquisam uma empresa na internet antes de telefonar, fazer uma reserva ou visitar o espaço físico. Se um potencial cliente pesquisar pelo seu negócio e não encontrar nada—ou apenas uma página desatualizada—a dúvida sobre a sua seriedade surge de imediato.',
        '### Disponibilidade 24 Horas Que Trabalha Enquanto Dorme',
        'O seu espaço físico tem horários de abertura e encerramento, mas o seu website nunca fecha portas. Um site moderno e bem estruturado responde a dúvidas comuns, exibe a sua ementa ou portfólio, indica a localização e recebe pedidos por WhatsApp mesmo a meio da noite.',
        '### Construir Património Digital Que É Realmente Seu',
        'Depender apenas de redes sociais como o Instagram ou o Facebook é construir em terreno alugado. Os algoritmos mudam sem aviso e o seu alcance orgânico pode desaparecer de um dia para o outro. Um website com domínio próprio é um ativo 100% seu.',
        '### Conclusão',
        'Investir num website profissional a partir de 299€ não é um custo—é o seu melhor vendedor digital. Em poucos dias úteis, o seu negócio passa a contar com uma imagem de topo que converte visitantes em clientes fiéis.',
      ],
      ar: [
        '### الانطباع الأول للعميل يبدأ دائماً عبر الإنترنت',
        'أكثر من 84% من المستهلكين يقومون بالبحث عن الشركة أو النشاط التجاري عبر الإنترنت قبل الاتصال أو زيارة المقر. عندما يبحث العميل المحتمل عن خدماتك ولا يجد موقعاً رسمياً، فإن ذلك يولد شكوكاً فورية حول مدى موثوقية وجودة عملك.',
        '### واجهة تعمل على مدار 24 ساعة يومياً',
        'مقر عملك أو متجرك له ساعات دوام محددة، ولكن موقعك الإلكتروني لا يغلق أبوابه أبداً. الموقع الاحترافي يشرح خدماتك، يعرض صور أعمالك أو قائمة أطباقك، ويستقبل طلبات الحجز والاستفسارات عبر واتساب طوال اليوم.',
        '### امتلاك أصول رقمية حقيقية لنشاطك',
        'الاعتماد الحصري على منصات التواصل الاجتماعي مثل إنستغرام أو تيك توك يشبه البناء على أرض مستأجرة؛ فالخوارزميات تتغير وقد يفقد حسابك الوصول لعملائك فجأة. أما موقعك الإلكتروني بنطاقه الخاص فهو أصل تجاري تملكه بالكامل بنسبة 100%.',
        '### الخلاصة',
        'الاستثمار في موقع إلكتروني احترافي يبدأ من $299 ليس مجرد تكلفة، بل هو أقوى أداة تسويق تدر أرباحاً لنشاطك التجاري. خلال أيام معدودة، يمكنك نقل عملك إلى مستوى احترافي يبني الثقة ويجلب لك عملاء جدد باستمرار.',
      ],
    },
  },
  {
    slug: 'how-much-does-a-business-website-cost',
    category: {
      en: 'Pricing Guide',
      pt: 'Guia de Preços',
      ar: 'دليل التكاليف والأسعار',
    },
    date: '2026-08-22',
    readTimeMinutes: 6,
    author: {
      name: 'Sofia Ramos',
      role: {
        en: 'Senior Technical Lead',
        pt: 'Líder Técnica Sénior',
        ar: 'كبير مسؤولي التطوير التقني',
      },
      avatar: '/images/agency/author-miguel.jpg',
    },
    coverImage: '/images/agency/blog-02.jpg',
    title: {
      en: 'How Much Does a Business Website Cost in 2026? Complete Guide',
      pt: 'Quanto Custa Criar um Website para Empresas em 2026? Guia Completo',
      ar: 'كم تبلغ تكلفة إنشاء موقع إلكتروني للشركات في 2026؟ دليل شامل',
    },
    excerpt: {
      en: 'Understand what factors determine website pricing, why traditional agencies charge thousands, and how modern agencies deliver high-converting sites from €299.',
      pt: 'Compreenda os fatores que determinam o preço de um website, porque as agências tradicionais cobram milhares e como soluções modernas entregam excelência a partir de 299€.',
      ar: 'تعرف على العوامل التي تحدد أسعار المواقع الإلكترونية، ولماذا تطلب الوكالات التقليدية آلاف الدولارات، وكيف يمكنك الحصول على موقع متفوق بدءاً من $299.',
    },
    content: {
      en: [
        '### The Big Price Discrepancy Explained',
        'Ask five different designers how much a website costs and you will get five vastly different numbers ranging from €150 on freelance boards to €5,000+ at traditional boutique agencies. Why is there such a massive gap?',
        '### 1. The DIY Trap (€15–€40/month forever)',
        'Platforms like Wix or Squarespace advertise ease of use, but once you factor in premium templates, custom domain fees, mandatory apps, and hundreds of hours of your own unbilled labor, you end up with a clunky, slow site that you never truly own.',
        '### 2. Traditional Creative Agencies (€3,000–€10,000+)',
        'Traditional design agencies have heavy overhead: account managers, downtown offices, copywriters, and multi-month discovery phases. For large enterprises, this makes sense. For a local restaurant, salon, or accounting firm, it is massive overkill.',
        '### 3. The Modern Agency Approach (€299 fixed)',
        'By utilizing pre-engineered conversion-tested architectures, clean modern design frameworks (like Next.js and Tailwind), and direct client communication, we deliver the exact same visual quality and performance as a €3,000 agency site—at a transparent starting price of €299 with zero lock-in.',
      ],
      pt: [
        '### A Grande Diferença de Preços no Mercado',
        'Se pedir orçamentos a cinco profissionais diferentes, receberá propostas que variam entre 150€ em plataformas de freelancers e mais de 5.000€ em agências de comunicação tradicionais. Porque existe uma diferença tão gritante?',
        '### 1. A Ilusão das Plataformas "Faça Você Mesmo" (15€–40€/mês)',
        'Ferramentas como o Wix ou Squarespace prometem facilidade, mas somando as mensalidades obrigatórias, taxas de domínio, extensões pagas e dezenas de horas do seu próprio tempo, o resultado costuma ser um site lento e do qual nunca é verdadeiramente proprietário.',
        '### 2. As Agências Criativas Tradicionais (3.000€–10.000€+)',
        'As agências clássicas têm custos de estrutura muito elevados: gestores de conta, escritórios caros e processos burocráticos que demoram meses. Para multinacionais faz sentido, mas para um restaurante local ou escritório de contabilidade é um gasto desproporcionado.',
        '### 3. A Abordagem de Agência Moderna (Desde 299€)',
        'Utilizando estruturas otimizadas para conversão e tecnologias modernas (como Next.js e Tailwind), entregamos a mesma qualidade estética e velocidade de um projeto de 3.000€—a um preço justo a partir de 299€, com entrega rápida e sem mensalidades ocultas.',
      ],
      ar: [
        '### تفسير الفروقات الكبيرة في أسعار المواقع',
        'إذا طلبت تسعيراً لإنشاء موقع إلكتروني من عدة جهات، ستجد أرقاماً متباينة للغاية تبدأ من $150 في مواقع العمل الحر وتصل إلى أكثر من $5,000 في الوكالات التقليدية. ما هو سبب هذا التباين الشاسع؟',
        '### 1. فخ منصات البناء الذاتي ($15 إلى $40 شهرياً للأبد)',
        'منصات مثل ويكس أو سكويرسبيس تعد بالسهولة، ولكن بإضافة رسوم الاشتراكات المستمرة، الدومين، والتطبيقات الإضافية، فضلاً عن عشرات الساعات من وقتك الثمين، تكون النتيجة موقعاً بطيئاً لا تملك كوده الفعلي ولا يمكنك نقله أبداً.',
        '### 2. الوكالات الإعلانية التقليدية ($3,000 إلى $10,000+)',
        'الوكالات الكلاسيكية تتحمل تكاليف تشغيلية ضخمة: مقرات فارهة، فرق عمل متعددة، ومراحل اجتماعات تمتد لعدة أشهر. هذا النمط قد يناسب الشركات الكبرى، لكنه مكلف وغير مبرر للأنشطة التجارية المحلية وأصحاب المهن.',
        '### 3. الحل العصري من وكالتنا (يبدأ من $299 فقط)',
        'من خلال الاعتماد على هياكل برمجية عصرية فائقة السرعة ومجربة لزيادة المبيعات (مثل Next.js و Tailwind)، نقدم لك نفس الفخامة والأداء العالي لمواقع الـ $3,000 بسعر شفاف يبدأ من $299 لمرة واحدة مع تملك كامل لكافة الملفات.',
      ],
    },
  },
  {
    slug: 'website-vs-social-media-for-your-business',
    category: {
      en: 'Digital Marketing',
      pt: 'Marketing Digital',
      ar: 'التسويق الرقمي',
    },
    date: '2026-08-29',
    readTimeMinutes: 4,
    author: {
      name: 'Alex Vance',
      role: {
        en: 'Digital Strategy Lead',
        pt: 'Diretor de Estratégia Digital',
        ar: 'مدير الاستراتيجيات الرقمية',
      },
      avatar: '/images/agency/author-sarah.jpg',
    },
    coverImage: '/images/agency/blog-03.jpg',
    title: {
      en: 'Website vs Social Media: Why Relying Only on Instagram Is Risky',
      pt: 'Website vs Redes Sociais: Porque Depender Apenas do Instagram É Perigoso',
      ar: 'الموقع الإلكتروني مقابل وسائل التواصل: لماذا يُعد الاعتماد على إنستغرام وحده خطراً؟',
    },
    excerpt: {
      en: 'Social media is fantastic for attention, but a website is essential for closing sales. Discover why the most successful businesses use both in harmony.',
      pt: 'As redes sociais são ótimas para atrair atenção, mas um website é indispensável para fechar vendas. Descubra como os negócios de sucesso combinam ambos.',
      ar: 'وسائل التواصل ممتازة لجذب الانتباه، ولكن الموقع الإلكتروني هو الأساس لإتمام الصفقات وبناء الثقة. اكتشف كيف تجمع الشركات الناجحة بين الاثنين.',
    },
    content: {
      en: [
        '### The Myth of the "Instagram-Only" Business',
        'Many new business owners believe setting up an Instagram profile is sufficient to represent their company. While social media is a powerful discovery channel, it lacks the structure needed to close high-value clients consistently.',
        '### Distraction vs Focused Attention',
        'When a prospect views your profile on Instagram, they are one swipe away from competitor ads, funny reels, or friend messages. On your dedicated agency-designed website, there are zero ads and zero distractions—just your brand story, your compelling offers, and a direct WhatsApp CTA.',
        '### High-Intent Search Traffic',
        'People on social media are browsing for entertainment. People on Google searching for "emergency plumber near me" or "best Italian restaurant in Lisbon" have immediate purchasing intent. A website captures these ready-to-buy customers through SEO.',
        '### The Winning Formula',
        'Use social media as the megaphone to attract eyes, and send that traffic to your fast, high-converting €299 website to turn visitors into confirmed bookings and sales.',
      ],
      pt: [
        '### O Mito do Negócio que Só Precisa do Instagram',
        'Muitos empresários assumem que uma página no Instagram é suficiente para promover o seu negócio. Embora as redes sociais sejam fantásticas para divulgação inicial, não oferecem a estrutura nem a credibilidade necessárias para fechar vendas com consistência.',
        '### Distração Constante vs Foco Absoluto',
        'Quando um potencial cliente está no Instagram, está a um toque de distância de anúncios de concorrentes ou vídeos de entretenimento. No seu próprio website, não existem distrações: apenas a sua proposta de valor, as suas fotografias profissionais e um botão direto de WhatsApp.',
        '### A Importância das Pesquisas com Intenção de Compra',
        'Quem navega no Instagram procura lazer. Quem pesquisa no Google por "restaurante com esplanada" ou "gabinete de contabilidade" tem uma intenção imediata de compra. Só um website com bom SEO consegue captar esse cliente no momento exato da decisão.',
        '### A Estratégia Vencedora',
        'Utilize as redes sociais para gerar visibilidade e encaminhe esse público para um website rápido e focado em conversão a partir de 299€ para transformar visitas em faturação real.',
      ],
      ar: [
        '### وهم الاكتفاء بصفحة إنستغرام فقط',
        'يعتقد بعض أصحاب الأنشطة التجارية أن إنشاء صفحة على إنستغرام كافٍ لتمثيل شركاتهم. ورغم أن وسائل التواصل ممتازة لجذب المتابعين، إلا أنها تفتقر إلى الهيكل الاحترافي اللازم لإتمام الصفقات الكبرى وبناء المصداقية.',
        '### التشتت مقابل التركيز الكامل للعميل',
        'عندما يتصفح العميل حسابك على وسائل التواصل، فهو على بُعد لمسة واحدة من إعلانات المنافسين ومقاطع الفيديو الترفيهية. أما داخل موقعك الإلكتروني الخاص، فلا توجد أي مشتتات؛ بل تظهر علامتك التجارية وعروضك وزر التواصل المباشر عبر واتساب بوضوح تام.',
        '### استهداف العملاء الجاهزين للشراء عبر محركات البحث',
        'مستخدم منصات التواصل يتصفح للتسلية غالباً، بينما الباحث في جوجل عن "أفضل مطعم إيطالي" أو "مكتب محاسبة معتمد" لديه نية شراء واضحة وعاجلة. الموقع الإلكتروني المهيأ للـ SEO هو الأداة الوحيدة التي تصطاد هؤلاء العملاء في اللحظة المناسبة.',
        '### المعادلة التسويقية الناجحة',
        'استخدم وسائل التواصل لجذب الاهتمام وتوجيه الزوار إلى موقعك الإلكتروني السريع المصمم باحترافية بدءاً من $299 لتحويلهم إلى عملاء فعليين.',
      ],
    },
  },
  {
    slug: 'how-website-helps-local-businesses-get-more-customers',
    category: {
      en: 'Local SEO & Growth',
      pt: 'SEO Local & Vendas',
      ar: 'النمو والتسويق المحلي',
    },
    date: '2026-09-01',
    readTimeMinutes: 5,
    author: {
      name: 'Sofia Ramos',
      role: {
        en: 'Senior Technical Lead',
        pt: 'Líder Técnica Sénior',
        ar: 'كبير مسؤولي التطوير التقني',
      },
      avatar: '/images/agency/author-miguel.jpg',
    },
    coverImage: '/images/agency/blog-04.jpg',
    title: {
      en: 'How a Website Helps Local Businesses Dominate Their Local Market',
      pt: 'Como um Website Ajuda os Negócios Locais a Conquistarem Mais Clientes',
      ar: 'كيف يساعد الموقع الإلكتروني الأنشطة المحلية على مضاعفة زبائنها؟',
    },
    excerpt: {
      en: 'Local customers are searching for services in your neighborhood right now. Here is how a fast, mobile-friendly website puts your business at the top.',
      pt: 'Clientes locais estão a pesquisar por serviços na sua zona neste exato momento. Descubra como um website rápido e responsivo coloca o seu negócio no topo.',
      ar: 'يبحث الزبائن القريبون منك عن خدماتك في منطقتك طوال الوقت. تعرف على كيف يضعك الموقع السريع والمتجاوب في صدارة اختياراتهم.',
    },
    content: {
      en: [
        '### "Near Me" Searches Have Exploded',
        'Google reports that local searches containing "near me" or "open now" have skyrocketed by over 300% in recent years. If your business does not have a properly indexed website with schema markup, location coordinates, and opening hours, Google will simply rank your competitors instead.',
        '### Frictionless Conversion via WhatsApp',
        'Local customers do not want to download apps or fill out 10-field contact forms. They want to see your prices, view your work, and click a single button to chat on WhatsApp. Integrating direct WhatsApp triggers throughout your website cuts friction and dramatically increases lead volume.',
        '### Instant Proof of Quality',
        'Whether you are running a dental clinic, an artisan bakery, or a specialized barbershop, visitors judge your craftsmanship based on the quality of your website. A fast, sleek, mobile-optimized site immediately tells prospective clients: "These people care about quality."',
        '### Ready to Get Started?',
        'With our complete agency package starting at €299, launching a dominant local business website has never been easier or more accessible.',
      ],
      pt: [
        '### O Crescimento das Pesquisas Locais "Perto de Mim"',
        'O Google confirma que as pesquisas por negócios locais contendo termos como "aberto agora" ou "perto de mim" cresceram mais de 300%. Sem um website estruturado com dados de localização e horários, o Google recomendará os seus concorrentes diretos.',
        '### Contacto Imediato por WhatsApp',
        'O consumidor local não quer preencher formulários infindáveis. Quer ver os serviços, confirmar a qualidade através de fotos e clicar num botão para falar diretamente por WhatsApp. Esta fluidez multiplica o número de contactos recebidos.',
        '### Confirmação Imediata de Qualidade',
        'Quer tenha um consultório, uma barbearia ou um restaurante, o público julga o seu profissionalismo pela qualidade visual do seu site. Uma página moderna e veloz transmite imediatamente rigor, confiança e prestígio.',
        '### Pronto para Dar o Passo?',
        'Com o nosso pacote completo a partir de 299€, ter um website de referência no seu mercado local é rápido, simples e altamente rentável.',
      ],
      ar: [
        '### الانفجار الهائل في عمليات البحث المحلية "بالقرب مني"',
        'تؤكد إحصائيات جوجل أن عمليات البحث التي تتضمن "بالقرب مني" أو "مفتوح الآن" قد تضاعفت بأكثر من 300%. إذا لم يكن لنشاطك موقع إلكتروني مهيأ بالبيانات الجغرافية وساعات العمل، ستقوم محركات البحث بترشيح منافسيك مباشرة.',
        '### تحويل فوري للزوار عبر محادثة واتساب',
        'الزبون المحلي لا يفضل ملء نماذج طويلة ومعقدة؛ بل يريد الاطلاع على الأسعار ومشاهدة الصور ثم الضغط على زر واحد للتواصل مباشرة عبر واتساب. توفير أزرار المحادثة المباشرة يضاعف نسبة العملاء المتواصلين معك.',
        '### برهان فوري على الجودة والاحترافية',
        'سواء كنت تدير عيادة، صالون حلاقة راقٍ، أو مطعماً مميزاً، فإن الزائر يحكم على جودة خدماتك من خلال المظهر الرقمي لموقعك. الموقع العصري والسريع يبعث رسالة واضحة للعميل بأنك تهتم بأدق تفاصيل الجودة.',
        '### جاهز للانطلاق؟',
        'مع باقتنا الاحترافية المتكاملة التي تبدأ من $299، أصبح امتلاك موقع منافس وقوي في منطقتك أمراً سهلاً ومضموناً.',
      ],
    },
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

