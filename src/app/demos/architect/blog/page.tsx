'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { BookOpen, Calendar, Clock, ArrowRight, X, ArrowUpRight } from 'lucide-react';

export default function ArchitectBlogPage() {
  const { locale, isRTL } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const essays = [
    {
      id: 1,
      title: locale === 'pt' ? 'Como Começa um Projeto de Arquitetura: Do Esboço ao Masterplan' : locale === 'ar' ? 'كيف يبدأ المشروع المعماري: من الفكرة الأولية إلى المخطط التنفيذي' : 'How an Architectural Project Starts: From Site Sketch to Masterplan',
      category: locale === 'pt' ? 'Metodologia' : locale === 'ar' ? 'منهجية التصميم' : 'Methodology',
      readTime: '6 min',
      date: '02 Set 2026',
      image: '/images/architect/blog-01.jpg',
      summary: locale === 'pt'
        ? 'Os primeiros passos antes de erguer qualquer linha: escutar o terreno, decifrar os ventos e compreender a rotina íntima de quem vai habitar o espaço.'
        : locale === 'ar'
        ? 'الخطوات الأولى قبل رسم أي خط: الإصغاء لخصائص الأرض، فهم اتجاه الرياح وتحديد نمط حياة أصحاب المسكن.'
        : 'The foundational steps before drawing a single wall: topographical listening, micro-climates, and familial daily rituals.',
      content: [
        locale === 'pt'
          ? 'Muitos clientes assumem que a arquitetura começa no computador. No Atelier Forma, o projeto começa no próprio terreno, em diferentes horas do dia. Sentamos no solo para observar onde o sol nasce, de onde sopram as brisas dominantes no verão e que elementos da paisagem merecem ser enquadrados ou resguardados.'
          : locale === 'ar'
          ? 'يعتقد الكثيرون أن العمارة تبدأ من برامج الحاسوب، لكنها في الواقع تبدأ بالوقوف على أرض المشروع في أوقات مختلفة من اليوم، لملاحظة حركة الشمس، مسارات النسيم وتحديد المشاهد الطبيعية التي تستحق التأطير.'
          : 'Clients often assume architecture begins on a digital drafting canvas. At Atelier Forma, design begins on the physical site across different times of day. We study where the sun crests the horizon, how seasonal breezes move, and which vistas demand framing or acoustic shielding.',
        locale === 'pt'
          ? 'Só após este diagnóstico sensorial produzimos os primeiros esboços manuais e maquetes de estudo em cartão e gesso, testando volumes sólidos e vazios antes de avançar para plantas dimensionadas.'
          : locale === 'ar'
          ? 'بعد هذا الفحص الحسي، نبدأ برسم الاسكتشات اليدوية وبناء مجسمات من الجبس والكرتون لاختبار النسب الفراغية قبل الانتقال للمخططات التنفيذية.'
          : 'Only after this tactile immersion do we sculpt physical study models in plaster and cardboard, interrogating mass and voids long before technical dimensions are committed to paper.',
      ],
      takeaway: locale === 'pt' ? 'Um bom projeto não se impõe ao terreno; emerge organicamente das suas características.' : locale === 'ar' ? 'العمارة الحقيقية لا تفرض نفسها على الموقع، بل تنبثق بتناغم من تضاريسه.' : 'Takeaway: Enduring architecture never dominates the land; it grows organically from its topography.',
    },
    {
      id: 2,
      title: locale === 'pt' ? 'Desenhar Casas em Torno da Luz Natural: Geometria Solar e Sombras' : locale === 'ar' ? 'تصميم المنازل حول الضوء الطبيعي: هندسة الظلال والسكينة' : 'Designing Homes Around Natural Light: Solar Geometry & Shadows',
      category: locale === 'pt' ? 'Luz & Espaço' : locale === 'ar' ? 'الضوء والفراغ' : 'Light & Space',
      readTime: '5 min',
      date: '26 Ago 2026',
      image: '/images/architect/blog-02.jpg',
      summary: locale === 'pt'
        ? 'A luz direta pode ser agressiva; a luz filtrada cria poesia. Como aberturas zenitais e pátios interiores trazem serenidade ao lar.'
        : locale === 'ar'
        ? 'الضوء المباشر قد يكون مزعجاً، بينما الضوء غير المباشر يمنح المكان شاعريته. كيف تجلب الأفنية الداخلية الهدوء.'
        : 'Direct glare can be punitive; diffused illumination creates poetry. How clerestories and courtyards invite tranquil stillness.',
      content: [
        locale === 'pt'
          ? 'Em climas mediterrânicos como o de Portugal, abrir grandes panos de vidro sem proteção solar resulta em sobreaquecimento e encandeamento. O segredo da arquitetura intemporal reside no controlo da luz indireta: palas em betão em consola, aberturas zenitais voltadas a norte e pátios interiores com água.'
          : locale === 'ar'
          ? 'في المناخات الدافئة، وضع واجهات زجاجية واسعة بدون كاسرات شمس يسبب حرارة مرتفعة وسطوعاً مزعجاً. سر العمارة الخالدة يكمن في التحكم بالضوء غير المباشر والأسقف المعلقة التي تسمح بدخول الضوء الناعم.'
          : 'In warm climates, oversized glass walls without solar protection create greenhouse overheating. The art lies in indirect diffusion: cantilevered overhangs, north-facing clerestory skylights, and internal courtyards with shallow reflecting pools.',
        locale === 'pt'
          ? 'A luz em movimento atua como uma pintura viva nas paredes de estuque e pedra, dispensando decorações efémeras.'
          : locale === 'ar'
          ? 'يتحول الضوء المتحرك إلى لوحة حية على جدران الحجر والخرسانة، مما يغنيك عن أي إكسسوارات أو ديكورات مؤقتة.'
          : 'Moving daylight becomes a living canvas across lime-washed render and rough-sawn stone, rendering superficial ornamentation unnecessary.',
      ],
      takeaway: locale === 'pt' ? 'A luz natural é o material de construção mais poderoso e económico.' : locale === 'ar' ? 'الضوء الطبيعي هو أثمن وأجمل مادة بناء في يد المعماري.' : 'Takeaway: Natural daylight is the most evocative and cost-efficient building material.',
    },
    {
      id: 3,
      title: locale === 'pt' ? 'Escolher Materiais Para uma Casa Moderna: Betão, Pedra e Madeira' : locale === 'ar' ? 'اختيار المواد للمسكن المعاصر: الخرسانة، الحجر الطبيعي والخشب' : 'Choosing Materials for a Modern House: Stone, Concrete & Timber',
      category: locale === 'pt' ? 'Materialidade' : locale === 'ar' ? 'المواد والتشطيبات' : 'Materiality',
      readTime: '7 min',
      date: '18 Ago 2026',
      image: '/images/architect/blog-03.jpg',
      summary: locale === 'pt'
        ? 'Por que privilegiamos materiais com textura tátil genuína que envelhecem com beleza e dignidade ao longo das décadas.'
        : locale === 'ar'
        ? 'لماذا نفضل المواد الطبيعية ذات الملمس الصادق التي تزداد جمالاً وقيمة مع مرور السنوات.'
        : 'Why authentic tactile textures that acquire noble patina outlive synthetic imitation finishes.',
      content: [
        locale === 'pt'
          ? 'Os materiais sintéticos e os revestimentos que imitam madeira ou pedra têm um aspeto perfeito no dia da entrega da obra, mas degradam-se irreversivelmente com o tempo. Já o calcário natural, a madeira maciça de carvalho e o betão aparente envelhecem com pátina, ganhando personalidade e história.'
          : locale === 'ar'
          ? 'المواد الصناعية البديلة التي تحاكي الخشب أو الرخام تبدو جديدة يوم التسليم لكنها تفقد بريقها سريعاً، بينما يكتسب الحجر الجيري الطبيعي والخشب الصلب عمقاً وجمالاً حقيقياً مع الزمن.'
          : 'Synthetic laminates and faux-wood coatings look pristine on handover day but deteriorate irreversibly. Authentic limestone, European oak, and board-formed concrete gain patina, aging like fine wine and telling the building’s story.',
        locale === 'pt'
          ? 'Ao limitar a paleta a três matérias primárias por projeto, criamos uma unidade visual coerente que acalma os sentidos.'
          : locale === 'ar'
          ? 'عند حصر لوحة الخامات في 3 مواد أساسية لكل مشروع، نخلق توازناً بصرياً يمنح ساكني المنزل راحة نفسية عميقة.'
          : 'By disciplining the palette to three primary materials per residence, we achieve visual cohesion that soothes sensory overload.',
      ],
      takeaway: locale === 'pt' ? 'A nobreza da arquitetura reside na autenticidade tátil dos seus elementos.' : locale === 'ar' ? 'أصالة المبنى تنبع من نقاء وملمس مواده الإنشائية.' : 'Takeaway: Architectural dignity stems from the tactile honesty of natural elements.',
    },
    {
      id: 4,
      title: locale === 'pt' ? 'O Que Faz uma Planta de Arquitetura Intemporal? Hierarquia Espacial' : locale === 'ar' ? 'ما الذي يجعل المخطط المعماري خالداً؟ فلسفة التوزيع الفراغي' : 'What Makes a Timeless Floor Plan? Spatial Hierarchy Explained',
      category: locale === 'pt' ? 'Espaço & Fluxo' : locale === 'ar' ? 'التوزيع الفراغي' : 'Spatial Flow',
      readTime: '5 min',
      date: '10 Ago 2026',
      image: '/images/architect/blog-04.jpg',
      summary: locale === 'pt'
        ? 'O equilíbrio entre espaços de convívio generosos e recantos íntimos de recolhimento, sem metros quadrados desperdiçados.'
        : locale === 'ar'
        ? 'التوازن الدقيق بين صالات الاستقبال الفسيحة وغرف النوم الهادئة، بدون إهدار أي مساحات للممرات.'
        : 'Balancing expansive celebratory gathering zones with intimate, acoustically shielded private alcoves.',
      content: [
        locale === 'pt'
          ? 'A tendência dos últimos anos para o open space total muitas vezes sacrificou a acústica, a privacidade e a intimidade. Uma boa planta arquitetónica cria uma gradação de espaços: da transição de entrada à área social aberta, culminando em refúgios protegidos para leitura e descanso.'
          : locale === 'ar'
          ? 'المساحات المفتوحة بالكامل أحياناً تضحي بالهدوء والخصوصية. المخطط الناجح يصنع تدرجاً ذكياً من المدخل الواسع، إلى صالة المعيشة العائلية، ثم غرف النوم المنعزلة بعناية.'
          : 'The trend toward total open-plan living often compromised acoustic sanctuary and psychological boundaries. A timeless floor plan orchestrates a sequence of compression and release: transitioning from compressed thresholds to generous double-height entertaining pavilions, followed by deeply private reading alcoves.',
      ],
      takeaway: locale === 'pt' ? 'Circulações limpas e proporções rigorosas eliminam a sensação de claustrofobia.' : locale === 'ar' ? 'الممرات الانسيابية والنسب المتناسقة تمنح المنزل رحابة وشعوراً دائماً بالراحة.' : 'Takeaway: Fluid circulation and proportional rigor eliminate dead space and sensory fatigue.',
    },
    {
      id: 5,
      title: locale === 'pt' ? 'Arquitetura Sustentável & Engenharia Passiva em Climas Quentes' : locale === 'ar' ? 'العمارة المستدامة والتصميم البيئي في المناخات الدافئة' : 'Passive Architecture: Sustainability Without Mechanical Complexity',
      category: locale === 'pt' ? 'Sustentabilidade' : locale === 'ar' ? 'الاستدامة والبيئة' : 'Sustainability',
      readTime: '6 min',
      date: '02 Ago 2026',
      image: '/images/architect/blog-05.jpg',
      summary: locale === 'pt'
        ? 'Como paredes espessas de alta inércia térmica e ventilação cruzada reduzem em até 80% o consumo de energia em climatização.'
        : locale === 'ar'
        ? 'كيف تساهم الجدران السميكة ذات العزل الحراري العالي والتهوية الطبيعية في خفض استهلاك الطاقة بنسبة 80%.'
        : 'How thick thermal mass walls and engineered night-purge ventilation cut cooling loads by up to 80%.',
      content: [
        locale === 'pt'
          ? 'Antes da invenção do ar condicionado, a arquitetura vernacular sabia manter os interiores frescos durante os meses quentes. Reinterpretamos esses princípios com engenharia contemporânea: paredes com isolamento contínuo exterior (sistema ETICS respirável), caixilharia de corte térmico duplo e coberturas ajardinadas que reduzem o ganho térmico por radiação.'
          : locale === 'ar'
          ? 'قبل اختراع أجهزة التكييف، كانت العمارة التقليدية تنجح في تبريد المنازل ذاتياً. نعيد توظيف هذه المبادئ اليوم بهندسة حديثة: جدران معزولة حرارياً، زجاج عاكس للأشعة، وأسقف خضراء تمنع تسرب الحرارة للداخل.'
          : 'Before mechanical refrigeration, vernacular building traditions kept interiors cool through mass and shading. We advance these principles using modern passive-house engineering: continuous envelope insulation, triple-sealed glazing cavities, and intensive green living roofs that absorb solar radiation.',
      ],
      takeaway: locale === 'pt' ? 'O edifício mais sustentável é aquele que necessita do mínimo de tecnologia mecânica para ser confortável.' : locale === 'ar' ? 'المبنى الأكثر استدامة هو الذي يحقق الراحة الحرارية بأقل استهلاك ممكن للطاقة.' : 'Takeaway: True sustainability lies in passive geometric intelligence, not gadgetry.',
    },
    {
      id: 6,
      title: locale === 'pt' ? 'Reabilitar ou Construir de Raiz? Decisões Estruturais e Económicas' : locale === 'ar' ? 'الترميم أم البناء من الصفر؟ قرارات هندسية واقتصادية حاسمة' : 'Restoration vs. Ground-Up Build: The Architectural Crossroads',
      category: locale === 'pt' ? 'Reabilitação' : locale === 'ar' ? 'الترميم وإعادة البناء' : 'Renovation Strategy',
      readTime: '5 min',
      date: '20 Jul 2026',
      image: '/images/architect/blog-06.jpg',
      summary: locale === 'pt'
        ? 'Avaliação de custos, valor patrimonial e alma construtiva ao ponderar entre recuperar uma ruína histórica ou erguer uma nova estrutura.'
        : locale === 'ar'
        ? 'مقارنة دقيقة للتكاليف والقيمة التاريخية والجمالية بين إعادة ترميم عقار قديم أو تشييد مبنى جديد كلياً.'
        : 'Evaluating structural integrity, embodied carbon, and historic charm when deciding between adaptive reuse and fresh construction.',
      content: [
        locale === 'pt'
          ? 'Uma propriedade histórica com muros de cantaria de 60 cm e traves centenárias possui um encanto que nenhuma construção nova consegue replicar de imediato. Contudo, reabilitar exige perícia cirúrgica para reforço sísmico, impermeabilizações e compatibilização com as exigências contemporâneas de conforto.'
          : locale === 'ar'
          ? 'المباني التاريخية ذات الجدران الحجرية الضخمة والأسقف الخشبية تمتلك سحراً وروحاً يصعب تكرارها في البناء الجديد، لكنها تتطلب خبرة متخصصة لتدعيم الأساسات وعزل الرطوبة بذكاء.'
          : 'An existing structure with 60cm stone masonry and hand-hewn ceiling timbers possesses soulful gravity that new construction cannot instantly mimic. However, sensitive restoration requires forensic structural assessments, seismic underpinning, and innovative insulation methodologies.',
      ],
      takeaway: locale === 'pt' ? 'A decisão certa depende do diagnóstico inicial e do respeito pela identidade da pré-existência.' : locale === 'ar' ? 'القرار السليم يعتمد على الفحص الإنشائي المبدئي واحترام هوية المكان.' : 'Takeaway: The optimal choice hinges on structural diagnostics and site identity.',
    },
  ];

  return (
    <div className="bg-[#0f0f0f] text-stone-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-stone-400 block">
            {locale === 'pt' ? 'Caderno de Projeto & Ensaios' : locale === 'ar' ? 'مدونة الأفكار والدراسات المعمارية' : 'Architectural Journal'}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-white tracking-tight">
            {locale === 'pt' ? 'Ensaios Sobre Espaço, Luz e Matéria' : locale === 'ar' ? 'دراسات في الفراغ، الضوء والمادة' : 'Essays on Space, Light & Matter'}
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
            {locale === 'pt'
              ? 'Textos críticos e notas de atelier explorando a construção moderna, decisões de projeto e o diálogo entre homem e arquitetura.'
              : locale === 'ar'
              ? 'مقالات نقدية ودراسات تطبيقية من داخل الاستوديو تستكشف فن البناء، قرارات التصميم والتناغم بين الإنسان والمكان.'
              : 'Critical essays and studio reflections examining spatial hierarchy, raw materials, and the timeless built environment.'}
          </p>
        </div>

        {/* Blog Grid: Desktop 3 cols, Tablet 2 cols, Mobile 1 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {essays.map((art) => (
            <article
              key={art.id}
              className="rounded-2xl border border-stone-800 bg-[#0c0c0c] hover:border-stone-600 overflow-hidden transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-stone-900">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-stone-300 border border-white/10">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-stone-400 font-mono">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime} read</span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl font-light text-white group-hover:text-stone-300 transition-colors leading-snug">
                    {art.title}
                  </h2>

                  <p className="text-xs text-stone-400 font-light leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-900 mt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(art.id)}
                  className="text-xs uppercase font-mono tracking-widest text-stone-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{locale === 'pt' ? 'Ler Ensaio' : locale === 'ar' ? 'قراءة المقال' : 'Read Essay'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] font-mono text-stone-400">Atelier Forma</span>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Reader */}
        {selectedArticle && (() => {
          const essay = essays.find((e) => e.id === selectedArticle);
          if (!essay) return null;
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
              <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0c0c0c] border border-stone-800 p-6 sm:p-10 shadow-2xl text-stone-200 space-y-6">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-5 right-5 rtl:right-auto rtl:left-5 text-stone-400 hover:text-white p-1 rounded-full hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-stone-400">
                    <span className="px-3 py-0.5 rounded-full bg-stone-800 text-stone-200">{essay.category}</span>
                    <span>•</span>
                    <span>{essay.readTime} read</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-light text-white leading-tight">
                    {essay.title}
                  </h2>
                </div>

                <div className="relative h-72 w-full rounded-2xl overflow-hidden bg-stone-900">
                  <Image src={essay.image} alt={essay.title} fill className="object-cover" />
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                  {essay.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 text-xs text-stone-200 font-light italic">
                  💡 {essay.takeaway}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-800">
                  <span className="text-xs font-mono text-stone-400">Atelier Forma Architects</span>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setSelectedArticle(null)}
                      className="px-6 py-2.5 rounded-full bg-stone-800 text-xs font-mono text-stone-300 hover:text-white cursor-pointer"
                    >
                      {locale === 'pt' ? 'Fechar' : locale === 'ar' ? 'إغلاق' : 'Close'}
                    </button>
                    <Link
                      href="/demos/architect/contact"
                      className="px-6 py-2.5 rounded-full bg-stone-100 text-stone-950 font-bold text-xs uppercase tracking-wider hover:bg-white text-center"
                    >
                      {locale === 'pt' ? 'Iniciar Projeto' : locale === 'ar' ? 'بدء مشروع' : 'Start Project'}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}

