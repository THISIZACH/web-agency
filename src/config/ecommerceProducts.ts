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

export interface ProductVariant {
  colorName: LocalizedString;
  colorHex: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: LocalizedString;
  subtitle: LocalizedString;
  category: 'outerwear' | 'tailoring' | 'knitwear' | 'leather-goods' | 'accessories' | 'footwear';
  price: number;
  currency: string;
  badge?: LocalizedString;
  image: string;
  gallery: string[];
  description: LocalizedString;
  details: LocalizedArray;
  materials: LocalizedString;
  sizes: string[];
  colors: ProductVariant[];
  inStock: boolean;
}

export const ECOMMERCE_PRODUCTS: ProductItem[] = [
  {
    id: 'vel-01',
    slug: 'atelier-cashmere-overcoat',
    name: {
      en: 'The Atelier Cashmere Double-Breasted Overcoat',
      pt: 'Sobretudo Atelier em Caxemira Cruzado',
      ar: 'معطف الكشمير الفاخر بقصة مزدوجة الصدر',
    },
    subtitle: {
      en: 'Hand-tailored in northern Italy from 100% recycled Mongolian cashmere',
      pt: 'Confecionado à mão no norte de Itália em 100% caxemira reciclada da Mongólia',
      ar: 'حياكة يدوية في شمال إيطاليا من الكشمير المنغولي الطبيعي 100%',
    },
    category: 'outerwear',
    price: 890,
    currency: '€',
    badge: { en: 'Iconic Piece', pt: 'Peça Ícone', ar: 'قطعة أيقونية' },
    image: '/images/ecommerce/product-01.jpg',
    gallery: ['/images/ecommerce/product-01.jpg', '/images/ecommerce/hero-campaign.jpg'],
    description: {
      en: 'A timeless silhouette engineered with structured shoulders, wide peaked lapels, horn buttons, and an unlined fluid drape for effortless layering.',
      pt: 'Silhueta intemporal com ombros estruturados, lapela de bico ampla, botões de chifre genuíno e corte fluído sem forro para vestir sobre camadas.',
      ar: 'تصميم كلاسيكي خالد مع أكتاف مصقولة وياقة عريضة مدببة وأزرار عاجية طبيعية لراحة وانسيابية مطلقة.',
    },
    details: {
      en: ['100% Virgin Mongolian Cashmere', 'Natural buffalo horn buttons', 'Dual interior welt pockets', 'Dry clean only'],
      pt: ['100% Caxemira Virgem da Mongólia', 'Botões de chifre de búfalo natural', 'Bolsos interiores embutidos', 'Limpeza a seco especializada'],
      ar: ['كشمير منغولي بكر 100%', 'أزرار طبيعية فاخرة', 'جيوب داخلية مخفية', 'تنظيف جاف متخصص'],
    },
    materials: {
      en: '100% Grade-A Mongolian Cashmere. Sourced from certified ethical pastoralists.',
      pt: '100% Caxemira da Mongólia de Grau A. Proveniente de criadores certificados.',
      ar: 'كشمير منغولي نقي فئة أ. مستورد من مراعٍ طبيعية مستدامة معتمدة.',
    },
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { colorName: { en: 'Camel Heather', pt: 'Camel Mesclado', ar: 'بيج جملي' }, colorHex: '#c2a688' },
      { colorName: { en: 'Obsidian Black', pt: 'Preto Obsidiana', ar: 'أسود فحمي' }, colorHex: '#121212' },
      { colorName: { en: 'Warm Stone', pt: 'Pedra Quente', ar: 'رمادي حجري' }, colorHex: '#8c857b' },
    ],
    inStock: true,
  },
  {
    id: 'vel-02',
    slug: 'sculptural-wool-trouser',
    name: {
      en: 'Sculptural High-Rise Pleated Trouser',
      pt: 'Calça de Cintura Subida com Pregas',
      ar: 'بنطال صوف بكسرات وخصر مرتفع',
    },
    subtitle: {
      en: 'Spun from high-twist tropical wool with sharp front pressed creases',
      pt: 'Tecida em lã tropical com vincos frontais nítidos e caimento elegante',
      ar: 'منسوج من الصوف الخفيف بكسرات أمامية حادة وأناقة متناهية',
    },
    category: 'tailoring',
    price: 380,
    currency: '€',
    badge: { en: 'New Season', pt: 'Nova Estação', ar: 'الموسم الجديد' },
    image: '/images/ecommerce/product-02.jpg',
    gallery: ['/images/ecommerce/product-02.jpg', '/images/ecommerce/campaign-editorial.jpg'],
    description: {
      en: 'Cut with an extended waistband tab, double inward front pleats, and a wide-leg profile that breaks cleanly over tailored footwear.',
      pt: 'Corte com carcela de cintura prolongada, pregas duplas interiores e perna ampla que assenta com perfeição sobre o calçado.',
      ar: 'قصة خصر ممتدة بكسرات مزدوجة داخلية وساق واسعة تمنحك إطلالة راقية مع الأحذية الجلدية.',
    },
    details: {
      en: ['100% Super 130s Merino Wool', 'Concealed hook-and-bar closure', 'Adjustable side waist tabs', 'Made in Portugal'],
      pt: ['100% Lã Merino Super 130s', 'Fecho invisível de gancho e barra', 'Fivelas de ajuste lateral', 'Fabricado em Portugal'],
      ar: ['صوف ميرينو سوبر 130 نقي 100%', 'إغلاق خطافي غير مرئي', 'مشابك خصر جانبية للتعديل', 'صنع في البرتغال'],
    },
    materials: {
      en: 'Super 130s Merino wool woven in Biella, Italy.',
      pt: 'Lã Merino Super 130s tecida em Biella, Itália.',
      ar: 'صوف ميرينو فائق الجودة منسوج في بييلا، إيطاليا.',
    },
    sizes: ['46', '48', '50', '52', '54'],
    colors: [
      { colorName: { en: 'Charcoal Chalk', pt: 'Carvão Risca de Giz', ar: 'فحم مقلم' }, colorHex: '#2a2a2a' },
      { colorName: { en: 'Ecru Ivory', pt: 'Marfim Cru', ar: 'عاجي طبيعي' }, colorHex: '#f4efe6' },
    ],
    inStock: true,
  },
  {
    id: 'vel-03',
    slug: 'palermo-leather-weekender',
    name: {
      en: 'The Palermo Full-Grain Leather Weekender',
      pt: 'Mala de Viagem Palermo em Pele Plena Flor',
      ar: 'حقيبة سفر باليرمو من الجلد الطبيعي الكامل',
    },
    subtitle: {
      en: 'Vegetable-tanned calfskin with solid brushed palladium hardware',
      pt: 'Pele de novilho curtida vegetalmente com ferragens em paládio escovado',
      ar: 'جلد عجل مدبوغ نباتياً مع إكسسوارات معدنية من البلاديوم المصقول',
    },
    category: 'leather-goods',
    price: 740,
    currency: '€',
    badge: { en: 'Craft Edition', pt: 'Edição Artesanal', ar: 'إصدار يدوي' },
    image: '/images/ecommerce/product-03.jpg',
    gallery: ['/images/ecommerce/product-03.jpg', '/images/ecommerce/about-atelier.jpg'],
    description: {
      en: 'Constructed to endure a lifetime of travel. Features hand-painted raw edges, a suede-lined interior compartment, and an ergonomic detachable shoulder strap.',
      pt: 'Concebida para durar uma vida de viagens. Conta com rebordos pintados à mão, interior forrado a camurça e alça ergonómica removível.',
      ar: 'صممت لتدوم مدى الحياة في رحلاتك. حواف مصبوغة يدوياً، بطانة داخلية من الشمواه وحزام كتف مريح قابل للفصل.',
    },
    details: {
      en: ['Tuscan vegetable-tanned leather', 'Swiss Riri double-slider zip', 'Interior zip pocket + key fob', 'Cabin size certified'],
      pt: ['Pele toscana de curtimento vegetal', 'Fecho suíço Riri de duplo cursor', 'Bolso interior com fecho e porta-chaves', 'Certificada para cabine'],
      ar: ['جلد توسكاني مدبوغ طبيعياً', 'سحاب سويسري ريري مزدوج', 'جيب داخلي مع حامل مفاتيح', 'متوافقة مع أبعاد كابينة الطائرة'],
    },
    materials: {
      en: '100% Full-grain calfskin leather, organic cotton canvas lining.',
      pt: '100% Pele de novilho plena flor, forro em lona de algodão biológico.',
      ar: 'جلد عجل طبيعي كامل 100% مع بطانة قماشية من القطن العضوي.',
    },
    sizes: ['One Size (45L)'],
    colors: [
      { colorName: { en: 'Cognac Saddle', pt: 'Conhaque Selaria', ar: 'هافان كلاسيكي' }, colorHex: '#6d3c1a' },
      { colorName: { en: 'Nero Black', pt: 'Preto Nero', ar: 'أسود داكن' }, colorHex: '#111111' },
    ],
    inStock: true,
  },
  {
    id: 'vel-04',
    slug: 'ribbed-silk-knit-polo',
    name: {
      en: 'Fine-Gauge Mulberry Silk Knit Polo',
      pt: 'Polo em Malha de Seda Mulberry Fina',
      ar: 'قميص بولو تريكو من حرير التوت الطبيعي',
    },
    subtitle: {
      en: 'Ultra-soft 18-gauge knit with a seamless collar and mother-of-pearl buttons',
      pt: 'Malha ultrafina de galga 18 com gola sem costuras e botões em madrepérola',
      ar: 'نسيج حريري فائق النعومة بياقة ملساء وأزرار من عرق اللؤلؤ الطبيعي',
    },
    category: 'knitwear',
    price: 260,
    currency: '€',
    image: '/images/ecommerce/product-04.jpg',
    gallery: ['/images/ecommerce/product-04.jpg'],
    description: {
      en: 'Breathable and featherlight. Designed to feel cool against the skin during warm evenings or seamlessly layer under an unconstructed blazer.',
      pt: 'Respirável e incrivelmente leve. Proporciona frescura tátil nas noites amenas e veste perfeitamente sob blazers desestruturados.',
      ar: 'قماش يتنفس وخفيف كالريشة يمنح إحساساً منعشاً على البشرة ومثالي للارتداء أسفل البليزر العصري.',
    },
    details: {
      en: ['70% Mulberry Silk, 30% Extra-fine Merino', 'Genuine Australian mother-of-pearl buttons', 'Ribbed cuffs and hem'],
      pt: ['70% Seda Mulberry, 30% Lã Merino Extrafina', 'Botões de madrepérola australiana', 'Punhos e bainha canelados'],
      ar: ['70% حرير التوت، 30% صوف ميرينو فاخر', 'أزرار عرق اللؤلؤ الأسترالي الأصلي', 'أساور وأطراف مطاطية منسوجة'],
    },
    materials: {
      en: 'Mulberry silk and superfine merino spun in Como, Italy.',
      pt: 'Seda Mulberry e merino superfino fiados em Como, Itália.',
      ar: 'حرير التوت وصوف الميرينو المنسوج في كومو، إيطاليا.',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { colorName: { en: 'Warm Chalk', pt: 'Giz Quente', ar: 'طباشيري دافئ' }, colorHex: '#ebe7df' },
      { colorName: { en: 'Deep Navy', pt: 'Azul-Marinho', ar: 'كحلي داكن' }, colorHex: '#131b2e' },
      { colorName: { en: 'Olive Earth', pt: 'Verde Terra', ar: 'زيتي ترابي' }, colorHex: '#484b3b' },
    ],
    inStock: true,
  },
  {
    id: 'vel-05',
    slug: 'venetian-suede-loafer',
    name: {
      en: 'The Venetian Unlined Suede Loafer',
      pt: 'Mocassim Veneziano em Camurça Suave',
      ar: 'حذاء لوفر فينيسي من الشمواه غير المبطن',
    },
    subtitle: {
      en: 'Hand-sewn apron stitch with flexible Goodyear welted leather sole',
      pt: 'Costura manual à vista com sola em couro flexível de construção Goodyear',
      ar: 'خياطة يدوية بارزة مع نعل جلدي فائق المرونة بنظام غوديير المتين',
    },
    category: 'footwear',
    price: 490,
    currency: '€',
    badge: { en: 'Best Seller', pt: 'Mais Vendido', ar: 'الأكثر مبيعاً' },
    image: '/images/ecommerce/product-05.jpg',
    gallery: ['/images/ecommerce/product-05.jpg'],
    description: {
      en: 'Crafted from butter-soft French calf suede. The unlined structure molds naturally to your foot from the very first wear.',
      pt: 'Confecionado em camurça de bezerro francesa sedosa. A estrutura sem forro adapta-se naturalmente ao formato do pé logo na primeira utilização.',
      ar: 'مصنوع من جلد الشمواه الفرنسي الحريري. يتشكل هيكله غير المبطن على القدم بنعومة تامة من أول ارتداء.',
    },
    details: {
      en: ['French calf suede upper', 'Flexible oiled leather sole', 'Stacked leather heel with rubber tap', 'Made in Marche, Italy'],
      pt: ['Pele de bezerro camurça francesa', 'Sola flexível de couro lubrificado', 'Salto em couro laminado com reforço de borracha', 'Fabricado em Marche, Itália'],
      ar: ['وجه خارجي من الشمواه الفرنسي الفاخر', 'نعل جلدي معالج بالزيت لمرونة عالية', 'كعب جلدي بطبقة حماية من المطاط', 'صنع في ماركي، إيطاليا'],
    },
    materials: {
      en: 'Premium water-repellent calf suede.',
      pt: 'Camurça de bezerro de qualidade superior com tratamento repelente de água.',
      ar: 'شمواه عجل فاخر معالج لمقاومة رذاذ الماء.',
    },
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: [
      { colorName: { en: 'Espresso Brown', pt: 'Castanho Espresso', ar: 'بني إسبريسو' }, colorHex: '#3b281c' },
      { colorName: { en: 'Sand Neutral', pt: 'Areia Neutro', ar: 'رملي محايد' }, colorHex: '#c7b299' },
    ],
    inStock: true,
  },
  {
    id: 'vel-06',
    slug: 'chronograph-minimal-watch',
    name: {
      en: 'Atelier Ceramic Minimal Chronograph',
      pt: 'Cronógrafo Minimalista em Cerâmica Atelier',
      ar: 'ساعة كرونوغراف سيراميك بلمسة مينيمالية',
    },
    subtitle: {
      en: 'Matte black ceramic case with Swiss automatic caliber movement',
      pt: 'Caixa em cerâmica preta mate com movimento de calibre automático suíço',
      ar: 'هيكل سيراميك أسود غير لامع مع محرك أوتوماتيكي سويسري عالي الدقة',
    },
    category: 'accessories',
    price: 1150,
    currency: '€',
    badge: { en: 'Numbered Edition', pt: 'Edição Numerada', ar: 'إصدار مرقم' },
    image: '/images/ecommerce/product-06.jpg',
    gallery: ['/images/ecommerce/product-06.jpg'],
    description: {
      en: 'A study in architectural reduction. Featuring a sapphire crystal exhibition back, matte sandblasted dial, and quick-release Milanese mesh strap.',
      pt: 'Um estudo de redução geométrica. Conta com fundo em cristal de safira, mostrador com acabamento a jateamento de areia e bracelete de malha milanesa.',
      ar: 'تحفة في النقاء المعماري والتصميم الهادئ. غطاء خلفي من زجاج الياقوت الشفاف ومينا ساند بلاست مع سوار شبكي ميلانيزي قابل للتبديل.',
    },
    details: {
      en: ['40mm High-tech ceramic case', 'Swiss Sellita SW510 Automatic Chronograph', '50m Water resistance', 'Anti-reflective sapphire crystal'],
      pt: ['Caixa de 40mm em cerâmica de alta tecnologia', 'Cronógrafo Automático Suíço Sellita SW510', 'Resistência à água 50m', 'Cristal de safira antirreflexo'],
      ar: ['هيكل 40 مم من السيراميك فائق التقنية', 'محرك سويسري سيليتا SW510 كرونوغراف أوتوماتيك', 'مقاومة الماء حتى 50 متراً', 'زجاج ياقوتي مقاوم للانعكاس'],
    },
    materials: {
      en: 'Zirconia high-tech ceramic, sapphire crystal, hypoallergenic titanium caseback.',
      pt: 'Cerâmica de zircónia de alta tecnologia, cristal de safira, fundo em titânio hipoalergénico.',
      ar: 'سيراميك الزركونيا المتقدم، زجاج الياقوت وغطاء خلفي من التيتانيوم الطبي.',
    },
    sizes: ['40mm Case'],
    colors: [
      { colorName: { en: 'Matte Stealth Black', pt: 'Preto Furtivo Mate', ar: 'أسود غير لامع' }, colorHex: '#141414' },
      { colorName: { en: 'Titanium Grey', pt: 'Cinzento Titânio', ar: 'تيتانيوم رمادي' }, colorHex: '#737373' },
    ],
    inStock: true,
  },
  {
    id: 'vel-07',
    slug: 'oversized-wool-trench',
    name: {
      en: 'Relaxed Belted Wool Gabardine Trench',
      pt: 'Trench Coat em Gabardine de Lã com Cinto',
      ar: 'معطف ترنش صوف غاباردين فضفاض بحزام',
    },
    subtitle: {
      en: 'Weather-resistant structured drape tailored with raglan sleeves',
      pt: 'Estrutura resistente às intempéries com mangas raglan e cinto envolvente',
      ar: 'مقاوم للتقلبات الجوية بأكمام راجلان مريحة وحزام خصر متناسق',
    },
    category: 'outerwear',
    price: 760,
    currency: '€',
    image: '/images/ecommerce/product-07.jpg',
    gallery: ['/images/ecommerce/product-07.jpg'],
    description: {
      en: 'An expansive modern reinterpretation of the iconic military coat. Features deep storm flaps, gunmetal D-rings, and an exaggerated collar that stands upright against wind.',
      pt: 'Reinterpretação contemporânea do clássico militar. Inclui aba de tempestade profunda, anéis em D em metal fumado e gola expressiva com fecho de proteção.',
      ar: 'إعادة صياغة عصرية مبتكرة للمعطف الكلاسيكي. طبقة حماية من الرياح، حلقات معدنية أنيقة وياقة مميزة تحمي من الهواء.',
    },
    details: {
      en: ['Water-repellent 100% worsted wool gabardine', 'Unlined body with taped internal seams', 'Full belt with covered leather buckle'],
      pt: ['100% Gabardine de lã penteada repelente de água', 'Corpo sem forro com costuras seladas interiores', 'Cinto completo com fivela forrada em pele'],
      ar: ['غاباردين صوف نقي 100% مقاوم للماء', 'هيكل غير مبطن مع درزات داخلية مغطاة', 'حزام متكامل بمشبك جلدي مغطى'],
    },
    materials: {
      en: 'Heavyweight worsted wool woven in Yorkshire, England.',
      pt: 'Gabardine de lã penteada tecida em Yorkshire, Inglaterra.',
      ar: 'صوف غاباردين ثقيل الوزن منسوج في يوركشاير، إنجلترا.',
    },
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { colorName: { en: 'Desert Dune', pt: 'Duna do Deserto', ar: 'رمال الصحراء' }, colorHex: '#d8cbb7' },
      { colorName: { en: 'Deep Charcoal', pt: 'Carvão Profundo', ar: 'فحم داكن' }, colorHex: '#262626' },
    ],
    inStock: true,
  },
  {
    id: 'vel-08',
    slug: 'japanese-selvedge-denim',
    name: {
      en: 'Kuroki Mill 14oz Selvedge Denim Trouser',
      pt: 'Calça em Denim Selvedge Kuroki 14oz',
      ar: 'بنطال جينز سيلفدج ياباني 14 أونصة',
    },
    subtitle: {
      en: 'Slow-woven in Okayama on vintage shuttle looms from Zimbabwe organic cotton',
      pt: 'Tecido lentamente em Okayama em teares mecânicos antigos com algodão do Zimbabué',
      ar: 'منسوج ببطء في أوكاياما اليابانية على أنوال قديمة من قطن زيمبابوي العضوي',
    },
    category: 'tailoring',
    price: 320,
    currency: '€',
    image: '/images/ecommerce/product-08.jpg',
    gallery: ['/images/ecommerce/product-08.jpg'],
    description: {
      en: 'A straight, architectural silhouette featuring a high waist, custom solid copper rivets, and a raw redline selvedge hem meant to be cuffed.',
      pt: 'Silhueta reta e escultural com cintura alta, rebites de cobre maciço personalizados e remate de orla selvedge com linha vermelha para dobrar a bainha.',
      ar: 'قصة مستقيمة ذات مظهر هندسي، خصر مرتفع، مسامير نحاسية مخصصة وحافة سيلفدج ذات خط أحمر أيقوني عند طي البنطال.',
    },
    details: {
      en: ['14oz Japanese raw unwashed selvedge', 'Solid copper burr rivets', 'Hand-stamped vegetable tan leather patch', 'Button fly with donut buttons'],
      pt: ['Denim selvedge cru de 14oz não lavado', 'Rebites de cobre maciço rebatidos à mão', 'Etiqueta em pele de curtimento vegetal', 'Carcela de botões metálicos vintage'],
      ar: ['جينز خام 14 أونصة غير مغسول', 'مسامير نحاسية مطروقة يدوياً', 'رقعة جلدية خلفية مختومة يدوياً', 'إغلاق أمامي بأزرار معدنية كلاسيكية'],
    },
    materials: {
      en: '100% Long-staple organic cotton from Kuroki Mills, Okayama.',
      pt: '100% Algodão biológico de fibra longa da Kuroki Mills, Okayama.',
      ar: 'قطن عضوي طويل التيلة 100% من مصانع كوروكي، أوكاياما.',
    },
    sizes: ['30', '31', '32', '33', '34', '36'],
    colors: [
      { colorName: { en: 'Raw Indigo', pt: 'Índigo Cru', ar: 'نيلي خام' }, colorHex: '#1b233d' },
      { colorName: { en: 'Washed Grey', pt: 'Cinzento Lavado', ar: 'رمادي مغسول' }, colorHex: '#52525b' },
    ],
    inStock: true,
  },
  {
    id: 'vel-09',
    slug: 'oversized-silk-crepe-blouse',
    name: {
      en: 'Fluid Silk Crepe de Chine Statement Blouse',
      pt: 'Blusa Statement em Seda Crepe de Chine Fluída',
      ar: 'بلوزة حرير كريب دي شين انسيابية راقية',
    },
    subtitle: {
      en: 'Draped with an elongated necktie collar and concealed mother-of-pearl placket',
      pt: 'Caimento fluido com laço longo na gola e carcela de botões em madrepérola oculta',
      ar: 'انسياب ناعم مع ربطة عنق ممتدة وصف أزرار لؤلؤي خفي',
    },
    category: 'outerwear',
    price: 340,
    currency: '€',
    image: '/images/ecommerce/product-09.jpg',
    gallery: ['/images/ecommerce/product-09.jpg'],
    description: {
      en: 'An embodiment of fluid grace. Wear the neck scarf draped casually or tied into an architectural knot for formal occasions.',
      pt: 'A expressão máxima de elegância descontraída. Use a fita de gola solta ou atada com um nó estruturado para ocasiões formais.',
      ar: 'تجسيد حقيقي للأنوثة المعاصرة. يمكن ترك الوشاح منسدلاً بحرية أو عقده بأسلوب راقٍ للمناسبات الرسمية.',
    },
    details: {
      en: ['100% Silk Crepe de Chine (16mm weight)', 'Seamless clean French seams', 'Extended French cuffs with cufflink option'],
      pt: ['100% Seda Crepe de Chine (peso 16 mommes)', 'Costuras francesas invisíveis', 'Punhos duplos com opção de botões de punho'],
      ar: ['حرير كريب دي شين طبيعي 100%', 'خياطة فرنسية ملساء ومخفية', 'أساور مزدوجة قابلة لتركيب أزرار الأكمام'],
    },
    materials: {
      en: 'Heavyweight pure silk crepe from Lyon, France.',
      pt: 'Seda pura de alta densidade de Lyon, França.',
      ar: 'حرير كريب نقي عالي الكثافة من ليون، فرنسا.',
    },
    sizes: ['34', '36', '38', '40', '42'],
    colors: [
      { colorName: { en: 'Pristine Snow', pt: 'Branco Puro', ar: 'أبيض ناصع' }, colorHex: '#ffffff' },
      { colorName: { en: 'Midnight Black', pt: 'Preto Meia-Noite', ar: 'أسود منتصف الليل' }, colorHex: '#0a0a0a' },
    ],
    inStock: true,
  },
  {
    id: 'vel-10',
    slug: 'structured-leather-tote',
    name: {
      en: 'The Forma Minimalist Architectural Tote',
      pt: 'Tote Bag Arquitetónico Forma em Pele',
      ar: 'حقيبة توت فورم الجلدية بتصميم معماري',
    },
    subtitle: {
      en: 'Rigid vegetable-tanned box leather with magnetic fold closures',
      pt: 'Pele rígida box de curtimento vegetal com fecho magnético dobrável',
      ar: 'جلد صلب مدبوغ نباتياً بنظام إغلاق مغناطيسي خفي',
    },
    category: 'leather-goods',
    price: 580,
    currency: '€',
    image: '/images/ecommerce/product-10.jpg',
    gallery: ['/images/ecommerce/product-10.jpg'],
    description: {
      en: 'Spacious enough for a 15-inch laptop, portfolio notebooks, and daily essentials. Reinforced base stands upright without sagging.',
      pt: 'Espaçosa o suficiente para computador de 15 polegadas, cadernos e essenciais diários. Base reforçada que se mantém direita sem deformar.',
      ar: 'تتسع بسهولة لحاسوب محمول قياس 15 بوصة والدفاتر والمقتنيات اليومية مع قاعدة مدعمة تحافظ على استقامة الحقيبة.',
    },
    details: {
      en: ['Italian box calf leather', 'Hidden dual magnetic locks', 'Removable interior zipper pouch', 'Protective metallic bottom studs'],
      pt: ['Pele box calf italiana', 'Fechos magnéticos duplos ocultos', 'Bolsa interior removível com fecho', 'Pés metálicos de proteção na base'],
      ar: ['جلد عجل إيطالي نخب أول', 'أقفال مغناطيسية مزدوجة غير مرئية', 'محفظة داخلية بسحاب قابلة للفصل', 'أرجل معدنية لحماية القاعدة'],
    },
    materials: {
      en: '100% Box calf leather with natural wax edge stain.',
      pt: '100% Pele box calf com acabamento de ceras naturais nas bordas.',
      ar: 'جلد عجل طبيعي 100% مصقول بشمع الحواف الطبيعي.',
    },
    sizes: ['One Size (38x32x14cm)'],
    colors: [
      { colorName: { en: 'Saddle Tan', pt: 'Tan Natural', ar: 'هافان طبيعي' }, colorHex: '#9e623d' },
      { colorName: { en: 'Deep Espresso', pt: 'Espresso Profundo', ar: 'بني داكن' }, colorHex: '#2e1c14' },
    ],
    inStock: true,
  },
  {
    id: 'vel-11',
    slug: 'cashmere-chunky-knit-sweater',
    name: {
      en: 'Chunky 7-Gauge Ribbed Cashmere Crewneck',
      pt: 'Camisola de Malha Grossa Canelada em Caxemira',
      ar: 'كنزة صوف كشمير محبوكة بياقة دائرية',
    },
    subtitle: {
      en: 'Substantial 4-ply Mongolian cashmere offering cocoon warmth and supreme softness',
      pt: 'Caxemira espessa de 4 fios da Mongólia que oferece conforto envolvente e máxima suavidade',
      ar: 'كشمير منغولي فاخر رباعي الخيوط يمنحك دفئاً غامراً ونعومة لا تضاهى',
    },
    category: 'knitwear',
    price: 520,
    currency: '€',
    image: '/images/ecommerce/product-11.jpg',
    gallery: ['/images/ecommerce/product-11.jpg'],
    description: {
      en: 'A winter anchor piece with drop shoulders, chunky ribbed neck collar, and a relaxed boxy cut that layers effortlessly over cotton tees.',
      pt: 'A peça nuclear de inverno com ombros descaídos, gola canelada encorpada e corte quadrado descontraído.',
      ar: 'القطعة الأساسية لإطلالة الشتاء الدافئة بأكتاف متهدلة وياقة سميكة منسوجة وقصة مريحة وأنيقة.',
    },
    details: {
      en: ['100% 4-Ply Mongolian Cashmere', 'Seamless 7-gauge knitting', 'Non-shrink natural wash treatment'],
      pt: ['100% Caxemira da Mongólia de 4 fios', 'Tricotagem sem costuras em galga 7', 'Tratamento de lavagem natural anti-encolhimento'],
      ar: ['كشمير منغولي نقي 100% رباعي الخيوط', 'حياكة ملساء بدون درزات', 'معالجة طبيعية ضد الانكماش'],
    },
    materials: {
      en: 'Grade-A organic white cashmere fibers.',
      pt: 'Fibras de caxemira branca biológica de Grau A.',
      ar: 'ألياف كشمير أبيض طبيعي فئة أ.',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { colorName: { en: 'Oatmeal Heather', pt: 'Aveia Mesclada', ar: 'شوفان طبيعي' }, colorHex: '#d8cfc4' },
      { colorName: { en: 'Slate Charcoal', pt: 'Ardósia Carvão', ar: 'رمادي فحمي' }, colorHex: '#3a3a3c' },
    ],
    inStock: true,
  },
  {
    id: 'vel-12',
    slug: 'titanium-aviator-sunglasses',
    name: {
      en: 'The Solstice Japanese Titanium Eyewear',
      pt: 'Óculos de Sol Solstice em Titânio Japonês',
      ar: 'نظارات شمسية سولستيس من التيتانيوم الياباني',
    },
    subtitle: {
      en: 'Precision cut from aerospace-grade beta-titanium with Zeiss polarized mineral lenses',
      pt: 'Corte de precisão em beta-titânio aeroespacial com lentes minerais polarizadas Zeiss',
      ar: 'مصنوعة بدقة من بيتا تيتانيوم المستخدم في الطيران مع عدسات زايس المستقطبة',
    },
    category: 'accessories',
    price: 420,
    currency: '€',
    image: '/images/ecommerce/product-12.jpg',
    gallery: ['/images/ecommerce/product-12.jpg'],
    description: {
      en: 'Weighing under 18 grams. Features custom knurled temple cores, titanium nose pads, and 100% UVA/UVB optical protection.',
      pt: 'Pesam menos de 18 gramas. Contam com hastes gravadas à mão, almofadas nasais de titânio e proteção ótica total UVA/UVB.',
      ar: 'تزن أقل من 18 غراماً فقط مع وسادات أنف من التيتانيوم الطبي وحماية كاملة 100% من الأشعة فوق البنفسجية.',
    },
    details: {
      en: ['Japanese Beta-Titanium construction', 'Zeiss Polarized Mineral Glass Lenses', 'Hard luxury leather carrying case included', 'Made in Sabae, Japan'],
      pt: ['Construção em Beta-Titânio japonês', 'Lentes minerais polarizadas Carl Zeiss', 'Estojo rígido em pele de luxo incluído', 'Fabricado em Sabae, Japão'],
      ar: ['تصنيع ياباني فائق من بيتا تيتانيوم', 'عدسات زجاجية مستقطبة من كارل زايس', 'حافظة جلدية فاخرة مرفقة', 'صنع في ساباي، اليابان'],
    },
    materials: {
      en: '100% Japanese Beta-Titanium and optical mineral glass.',
      pt: '100% Beta-Titânio japonês e vidro mineral ótico.',
      ar: 'بيتا تيتانيوم ياباني نقي 100% وزجاج بصري فائق.',
    },
    sizes: ['52-20-145 (Standard)'],
    colors: [
      { colorName: { en: 'Antique Gold / Green Lens', pt: 'Ouro Antigo / Lente Verde', ar: 'ذهبي معتق / عدسة خضراء' }, colorHex: '#bda56b' },
      { colorName: { en: 'Matte Gunmetal / Grey Lens', pt: 'Metal Escuro / Lente Cinzenta', ar: 'رمادي داكن / عدسة رمادية' }, colorHex: '#4a4a4a' },
    ],
    inStock: true,
  },
];

export interface EcommerceCollection {
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  image: string;
  itemCount: string;
}

export interface EcommerceJournalArticle {
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  date: string;
  author: string;
  image: string;
}

export const ECOMMERCE_COLLECTIONS: EcommerceCollection[] = [
  {
    slug: 'autumn-winter-26',
    title: { en: 'Autumn / Winter 2026', pt: 'Outono / Inverno 2026', ar: 'مجموعة خريف / شتاء 2026' },
    subtitle: { en: 'Heavyweight textures, cocoon silhouettes and alpine cashmeres', pt: 'Texturas encorpadas, silhuetas envolventes e caxemiras alpinas', ar: 'أقمشة شتوية ثقيلة وقصات دافئة وكشمير نقي' },
    image: '/images/ecommerce/collection-autumn.jpg',
    itemCount: '24 Pieces',
  },
  {
    slug: 'the-perpetual-essentials',
    title: { en: 'The Perpetual Essentials', pt: 'Os Essenciais Perpétuos', ar: 'القطع الأساسية الدائمة' },
    subtitle: { en: 'Architectural foundation pieces designed never to be phased out', pt: 'Peças fundamentais desenhadas para transcender estações', ar: 'قطع أساسية خالدة صممت لتبقى معك على مر المواسم' },
    image: '/images/ecommerce/collection-essentials.jpg',
    itemCount: '16 Pieces',
  },
  {
    slug: 'leather-atelier-archive',
    title: { en: 'Leather Goods & Objet', pt: 'Maroquinaria & Objetos de Pele', ar: 'المصنوعات الجلدية والأكسسوارات' },
    subtitle: { en: 'Hand-burnished Tuscan hides and titanium precision luggage', pt: 'Peles toscanas polidas à mão e bagagem de precisão em titânio', ar: 'جلود توسكانية مصقولة يدوياً وحقائب سفر متطورة' },
    image: '/images/ecommerce/collection-accessories.jpg',
    itemCount: '12 Pieces',
  },
  {
    slug: 'footwear-sculpture',
    title: { en: 'Handcrafted Footwear', pt: 'Calçado de Autor', ar: 'الأحذية الجلدية الفاخرة' },
    subtitle: { en: 'Goodyear welted unlined loafers and sculpted boots', pt: 'Mocassins desestruturados e botas esculpidas Goodyear', ar: 'أحذية لوفر ناعمة وبوت جلدي بخياطة غوديير اليدوية' },
    image: '/images/ecommerce/collection-footwear.jpg',
    itemCount: '8 Pieces',
  },
];

export const ECOMMERCE_JOURNAL: EcommerceJournalArticle[] = [
  {
    slug: 'the-weight-of-cashmere',
    title: {
      en: 'The Weight of Purity: Inside Our Mongolian Cashmere Harvest',
      pt: 'O Peso da Pureza: Por Dentro da Colheita da Caxemira na Mongólia',
      ar: 'أصالة المنسوجات: في قلب حصاد الكشمير الطبيعي في منغوليا',
    },
    excerpt: {
      en: 'How ethical pastoralists comb rather than shear fiber, yielding our distinctive 14-micron cloud texture.',
      pt: 'Como criadores éticos penteiam a fibra em vez de tosquiar, preservando a suavidade ímpar de 14 mícrons.',
      ar: 'كيف يحافظ الرعاة التقليديون على تمشيط الألياف برفق لإنتاج نسيج الكشمير النادر بنعومة 14 ميكرون.',
    },
    date: 'Autumn 2026',
    author: 'Elena Rostova, Textile Curator',
    image: '/images/ecommerce/journal-01.jpg',
  },
  {
    slug: 'architecture-of-the-overcoat',
    title: {
      en: 'Architectural Restraint: The Making of the Atelier Overcoat',
      pt: 'Contenção Arquitetónica: A Confeção do Sobretudo Atelier',
      ar: 'النقاء المعماري: كيف نصنع معطف الأتيليه الكلاسيكي',
    },
    excerpt: {
      en: 'Dissecting thirty hours of hand-canvasing, hand-set collar rolling, and raw horn buttons.',
      pt: 'Trinta horas de entretelamento manual, modelação de gola e aplicação de botões de chifre genuíno.',
      ar: 'ثلاثون ساعة من الحياكة اليدوية الدقيقة وتشكيل الياقة وتركيب الأزرار الطبيعية الفاخرة.',
    },
    date: 'Winter 2026',
    author: 'Matteo Vane, Head of Tailoring',
    image: '/images/ecommerce/journal-02.jpg',
  },
  {
    slug: 'slow-luxury-manifesto',
    title: {
      en: 'Beyond the Season: Our Manifesto for Timeless Wardrobes',
      pt: 'Para Além das Estações: O Nosso Manifesto para um Guarda-Roupa Intemporal',
      ar: 'ما وراء المواسم: بياننا نحو خزانة ملابس خالدة وعابرة للزمن',
    },
    excerpt: {
      en: 'Why we produce only two cohesive drops each year, rejecting synthetic obsolescence.',
      pt: 'Porque produzimos apenas dois lançamentos coesos por ano, rejeitando a obsolescência de tecidos sintéticos.',
      ar: 'لماذا نطلق مجموعتين فقط في العام رافضين موضة الاستهلاك السريع والمنسوجات الاصطناعية.',
    },
    date: 'Permanent',
    author: 'Clara Delacroix, Creative Director',
    image: '/images/ecommerce/journal-03.jpg',
  },
];

