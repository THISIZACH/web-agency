import { Locale } from './pricing';

export interface BarberService {
  id: string;
  name: { en: string; pt: string; ar: string };
  category: string;
  duration: string;
  price: { en: string; pt: string; ar: string };
  desc: { en: string; pt: string; ar: string };
  image: string;
  badge?: { en: string; pt: string; ar: string };
}

export interface MasterBarber {
  id: string;
  name: string;
  role: { en: string; pt: string; ar: string };
  experience: string;
  specialty: { en: string; pt: string; ar: string };
  bio: { en: string; pt: string; ar: string };
  image: string;
  instagram: string;
}

export const BARBER_SERVICES: BarberService[] = [
  {
    id: 'signature-cut',
    name: {
      en: 'The Signature Precision Cut',
      pt: 'Corte de Precisão Signature',
      ar: 'قصة الشعر المميزة بريسيجن كَت',
    },
    category: 'Hair',
    duration: '45 min',
    price: { en: '£42', pt: '38€', ar: '$45' },
    desc: {
      en: 'Comprehensive scalp consultation, shear sculpting, tapered neckline razor clean, wash with eucalyptus shampoo, and bespoke finish styling.',
      pt: 'Consulta de visagismo, corte escultural à tesoura, limpeza de nuca à navalha clássica, lavagem com champô de eucalipto e styling personalizado.',
      ar: 'استشارة متخصصة، نحت الشعر بالمقص بدقة فائقة، تحديد الرقبة بالموس التقليدي، غسيل بشامبو الكينا المنعش وتصفيف نهائي أنيق.',
    },
    image: '/images/barbershop/service-haircut.jpg',
    badge: { en: 'Most Requested', pt: 'Mais Procurado', ar: 'الأكثر طلباً' },
  },
  {
    id: 'royal-shave',
    name: {
      en: 'Traditional Hot Towel Royal Shave',
      pt: 'Barba Real com Toalha Quente',
      ar: 'حلاقة الذقن الملكية بالمنشفة الساخنة',
    },
    category: 'Shave',
    duration: '40 min',
    price: { en: '£36', pt: '32€', ar: '$38' },
    desc: {
      en: 'Pre-shave sandalwood essential oil prep, twin steaming herbal towel infusions, warm lather brush massage, straight-razor close glide, and chilled alum block tone.',
      pt: 'Óleos essenciais pré-barba de sândalo, dupla toalha de vapor com ervas botânicas, espuma quente com pincel de texugo e navalha clássica.',
      ar: 'تحضير البشرة بزيوت الصندل العطرية، منشفتان بخار بالأعشاب الطبيعية، رغوة حلاقة دافئة بالفرشاة وموس الحلاقة التقليدي مع تبريد البشرة.',
    },
    image: '/images/barbershop/service-shave.jpg',
    badge: { en: 'Ritual Experience', pt: 'Ritual Clássico', ar: 'طقس كلاسيكي' },
  },
  {
    id: 'beard-sculpt',
    name: {
      en: 'Beard Architecture & Oil Treatment',
      pt: 'Arquitetura de Barba & Tratamento',
      ar: 'نحت وتحديد اللحية مع علاج الزيوت',
    },
    category: 'Beard',
    duration: '35 min',
    price: { en: '£30', pt: '26€', ar: '$32' },
    desc: {
      en: 'Precise shape contouring according to facial geometry, razor edge cleanup, organic cedarwood deep conditioning balm, and high-shine boar bristle brush finish.',
      pt: 'Contorno milimétrico adaptado à geometria facial, linhas nítidas à navalha, bálsamo nutritivo de cedro biológico e escovagem.',
      ar: 'تحديد دقيق متوافق مع هندسة الوجه، تنظيف الحواف بالموس، ترطيب عميق ببلسم خشب الأرز العضوي وتمشيط بفرشاة الشعر الطبيعي.',
    },
    image: '/images/barbershop/service-beard.jpg',
  },
  {
    id: 'full-experience',
    name: {
      en: 'The Executive Combo (Cut & Shave)',
      pt: 'Experiência Executiva (Corte & Barba)',
      ar: 'الباقة التنفيذية الشاملة (شعر ولحية)',
    },
    category: 'Package',
    duration: '75 min',
    price: { en: '£72', pt: '64€', ar: '$75' },
    desc: {
      en: 'The ultimate gentleman service. Combines the Signature Precision Cut and the Traditional Hot Towel Royal Shave with complimentary single-malt whisky or espresso.',
      pt: 'A experiência suprema do cavalheiro. Une o Corte Signature e o Ritual de Barba Real com prova de whisky de malte escocês ou café de especialidade.',
      ar: 'التجربة الأرقى للرجل الأنيق. تجمع بين قصة الشعر المتقنة وحلاقة الذقن الملكية بالمنشفة الساخنة مع ضيافة القهوة المختصة الفاخرة.',
    },
    image: '/images/barbershop/service-combo.jpg',
    badge: { en: 'Signature Package', pt: 'Pacote de Autor', ar: 'باقة التوقيع' },
  },
  {
    id: 'scalp-therapy',
    name: {
      en: 'Invigorating Scalp Detox & Massage',
      pt: 'Detox Capilar & Massagem Craniana',
      ar: 'علاج ديتوكس لفروة الرأس والتدليك',
    },
    category: 'Therapy',
    duration: '30 min',
    price: { en: '£32', pt: '28€', ar: '$34' },
    desc: {
      en: 'Sea-salt exfoliating scrub, tea tree revitalizing scalp stimulation, 15-minute acupressure head massage, and cold water tonic rinse.',
      pt: 'Esfoliação com cristais de sal marinho, tónico estimulante de tea tree, massagem craniana de acupressão durante 15 minutos e enxaguamento revigorante.',
      ar: 'تقشير بحبيبات ملح البحر الطبيعية، تنشيط فروة الرأس بزيت شجرة الشاي، تدليك مهدئ للرأس لمدة 15 دقيقة ومستحلب منشط.',
    },
    image: '/images/barbershop/service-treatment.jpg',
  },
  {
    id: 'grey-blending',
    name: {
      en: 'Grey Camouflage & Natural Tone',
      pt: 'Camuflagem Natural de Cabelos Brancos',
      ar: 'تمويه الشيب وتوحيد اللون الطبيعي',
    },
    category: 'Color',
    duration: '30 min',
    price: { en: '£38', pt: '34€', ar: '$40' },
    desc: {
      en: 'Discreet demi-permanent toning formulation that naturally softens grey strands without unnatural block color or harsh regrowth lines.',
      pt: 'Coloração demi-permanente discreta que esbate os fios grisalhos de forma suave e orgânica, sem efeito artificial nem demarcações de raiz.',
      ar: 'صبغة شبه دائمة فائقة النقاء تدمج الشعر الأبيض بشكل طبيعي وناعم دون أي أثر مصطنع أو خطوط إعادة نمو حادة.',
    },
    image: '/images/barbershop/service-color.jpg',
  },
  {
    id: 'junior-grooming',
    name: {
      en: 'Young Gentleman Haircut (Under 16)',
      pt: 'Corte Jovem Cavalheiro (< 16 anos)',
      ar: 'قصة شعر الشاب الصغير (أقل من 16)',
    },
    category: 'Hair',
    duration: '35 min',
    price: { en: '£28', pt: '24€', ar: '$30' },
    desc: {
      en: 'Tailored haircut designed for boys and young men, styled with gentle water-based matte pomade, delivered in a relaxed lounge atmosphere.',
      pt: 'Corte adaptado a rapazes e adolescentes, finalizado com cera mate de base aquosa suave num ambiente acolhedor e descontraído.',
      ar: 'قصة شعر عصرية مخصصة للفتيان، تصفيف بمرهم مائي خفيف وغير دهني في أجواء مريحة وهادئة داخل الاستوديو.',
    },
    image: '/images/barbershop/service-kids.jpg',
  },
  {
    id: 'styling-finish',
    name: {
      en: 'Event Wash, Blowout & Matte Finish',
      pt: 'Lavagem Especial, Brushing & Styling',
      ar: 'غسيل خاص وتجفيف وتصفيف للمناسبات',
    },
    category: 'Styling',
    duration: '25 min',
    price: { en: '£24', pt: '20€', ar: '$25' },
    desc: {
      en: 'Invigorating double wash, texture volume blow-dry, styling product application suited to hair density, and collar lint brush-off.',
      pt: 'Lavagem dupla relaxante, secagem com escova para criar volume natural e aplicação de pomada mate texturizante para eventos.',
      ar: 'غسيل مزدوج منعش، تجفيف بفرشاة مفرغة لإضفاء حجم طبيعي، واستخدام منتجات التصفيف الملائمة لجاذبية فورية قبل المناسبات.',
    },
    image: '/images/barbershop/service-styling.jpg',
  },
];

export const MASTER_BARBERS: MasterBarber[] = [
  {
    id: 'marcus',
    name: 'Marcus Vance',
    role: { en: 'Founding Head Barber', pt: 'Barbeiro Fundador & Diretor', ar: 'كبير الحلاقين والمؤسس' },
    experience: '14 Years',
    specialty: { en: 'Shear Sculpting & Classic Tapers', pt: 'Cortes à Tesoura & Tapers Clássicos', ar: 'النحت بالمقص والتدرجات الكلاسيكية' },
    bio: {
      en: 'Trained in Savile Row London and Milan. Marcus established North & Blade to revive meticulous British gentleman grooming with modern ergonomic razor craftsmanship.',
      pt: 'Formado em Savile Row (Londres) e Milão. Marcus fundou a North & Blade para resgatar a elegância britânica aliada a técnicas contemporâneas de precisão.',
      ar: 'تدرب في شارع سافيل رو العريق بلندن وميلانو. أسس نورث آند بليد لإحياء تقاليد العناية البريطانية الراقية بأسلوب عصري متقن.',
    },
    image: '/images/barbershop/barber-01.jpg',
    instagram: '@marcus.northblade',
  },
  {
    id: 'julian',
    name: 'Julian Croft',
    role: { en: 'Master Shave Specialist', pt: 'Mestre Especialista em Barba', ar: 'خبير الحلاقة الملكية المعتمد' },
    experience: '10 Years',
    specialty: { en: 'Straight Razor Rituals & Skin Health', pt: 'Navalha Tradicional & Saúde Dérmica', ar: 'طقوس الموس التقليدي وصحة البشرة' },
    bio: {
      en: 'Passionate about traditional Turkish and Japanese blade sharpening. Julian elevates every wet shave into a therapeutic, stress-relieving ritual.',
      pt: 'Especialista em rituais de navalha japonesa e turca. Julian transforma cada barbear num momento terapêutico de puro relaxamento e bem-estar.',
      ar: 'شغوف بتقاليد الحلاقة التركية واليابانية الحادة. يحول كل جلسة حلاقة إلى تجربة استرخاء علاجية تعيد النضارة للبشرة.',
    },
    image: '/images/barbershop/barber-02.jpg',
    instagram: '@julian.craftcut',
  },
  {
    id: 'liam',
    name: "Liam O'Connor",
    role: { en: 'Senior Texture Stylist', pt: 'Estilista Sénior de Texturas', ar: 'مصفف أول متخصص بالتكنيك الحديث' },
    experience: '8 Years',
    specialty: { en: 'Modern Crop, Mid Fades & Beard Linework', pt: 'Fades Contemporâneos & Linhas de Barba', ar: 'التدرج العصري ونحت حدود اللحية' },
    bio: {
      en: 'Specializing in textured crops, seamless low-to-high skin fades, and clean angular beard profiles that complement strong facial bone structure.',
      pt: 'Mestre em cortes com textura, degradês sem marcas e contornos de barba arrojados que valorizam as linhas maxilares.',
      ar: 'متخصص في تدرجات الفيد الناعمة بدقة النانومتر والتصفيف المتشابك وتحديد اللحية بطريقة تبرز ملامح الوجه القوية.',
    },
    image: '/images/barbershop/barber-03.jpg',
    instagram: '@liam.blade.cuts',
  },
  {
    id: 'alexander',
    name: 'Alexander Hayes',
    role: { en: 'Grooming & Color Technician', pt: 'Técnico de Grooming & Coloração', ar: 'خبير التلوين الطبيعي والعناية' },
    experience: '7 Years',
    specialty: { en: 'Grey Blending & Scalp Rejuvenation', pt: 'Disfarce de Grisalhos & Detox Capilar', ar: 'دمج الشعر الأبيض وعلاج فروة الرأس' },
    bio: {
      en: 'Known for discreet, natural hair tone blending and restorative scalp therapies designed for executives seeking undetectable refinement.',
      pt: 'Reconhecido pela subtileza na harmonização de tons capilares e terapias de rejuvenescimento do couro cabeludo para homens de negócios.',
      ar: 'معروف بمهارته في توحيد لون الشعر الأبيض بأسلوب طبيعي تماماً وجلسات الديتوكس الحصرية للمديرين ورجال الأعمال.',
    },
    image: '/images/barbershop/barber-04.jpg',
    instagram: '@alex.hayes.barber',
  },
];

export const BARBER_GALLERY = [
  { image: '/images/barbershop/gallery-01.jpg', title: 'Precision Scissor Silhouette', category: 'Cuts' },
  { image: '/images/barbershop/gallery-02.jpg', title: 'Sculpted Beard Architecture', category: 'Beard' },
  { image: '/images/barbershop/gallery-03.jpg', title: 'Low Taper Matte Finish', category: 'Fades' },
  { image: '/images/barbershop/gallery-04.jpg', title: 'Hot Towel Steaming Infusion', category: 'Rituals' },
  { image: '/images/barbershop/gallery-05.jpg', title: 'Mid Fade Textured Crop', category: 'Cuts' },
  { image: '/images/barbershop/gallery-06.jpg', title: 'Vintage Leather Belmont Chair', category: 'Atmosphere' },
];

export const BARBER_TESTIMONIALS = [
  {
    quote: {
      en: 'The level of craftsmanship at North & Blade is on par with Mayfair London. Marcus understood my hair density immediately. Flawless taper every single time.',
      pt: 'O nível de detalhe na North & Blade rivaliza com as melhores barbearias de Londres. O Marcus percebeu de imediato o meu estilo. Taper impecável.',
      ar: 'مستوى الاحترافية والدقة هنا يضاهي أرقى صالونات لندن وباريس. فهم ماركوس نوع شعري فوراً وحصلت على أدق تدرج ممكن.',
    },
    author: 'Edward Thornton',
    role: { en: 'Architectural Director', pt: 'Diretor de Arquitetura', ar: 'مدير مكتب معماري' },
  },
  {
    quote: {
      en: 'The Royal Shave is the best 40 minutes of my week. Hot towels, straight razor, zero irritation. An essential self-care ritual for any busy professional.',
      pt: 'A Barba Real são os melhores 40 minutos da minha semana. Toalhas quentes, navalha afiada e irritação zero. Um ritual obrigatório.',
      ar: 'جلسة الحلاقة الملكية هي أروع 40 دقيقة في أسبوعي بالكامل. مناشف ساخنة، موس ناعم وصفر تحسس للبشرة. قمة الاسترخاء.',
    },
    author: 'Carlos Mendes',
    role: { en: 'Venture Capitalist', pt: 'Investidor de Capital de Risco', ar: 'مستثمر في رأس المال الجريء' },
  },
  {
    quote: {
      en: 'Clean aesthetic, no cheesy gimmicks, great music, and master barbers who take pride in every stroke. Worth every penny.',
      pt: 'Estética irrepreensível, música ambiente de excelência e barbeiros de topo que amam o que fazem. Vale cada euro.',
      ar: 'صالون نظيف وفاخر، لا بهرجة مصطنعة، موسيقى راقية وحلاقون يعشقون مهنتهم ويتقنون كل لمسة. يستحق كل تقدير.',
    },
    author: 'Tariq Al-Mansoor',
    role: { en: 'Private Equity Partner', pt: 'Sócio de Private Equity', ar: 'شريك في صندوق استثماري' },
  },
];

