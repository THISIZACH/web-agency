'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Layers, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ArchitectServicesPage() {
  const { locale, isRTL } = useLanguage();

  const services = [
    {
      id: 'residential',
      title: locale === 'pt' ? 'Arquitetura Residencial de Autor' : locale === 'ar' ? 'العمارة السكنية الفاخرة المخصصة' : 'Bespoke Residential Architecture',
      subtitle: locale === 'pt' ? 'Moradias unifamiliares e quintas contemporâneas' : locale === 'ar' ? 'فلل وقصور ومساكن عائلية راقية' : 'Private villas, retreats, and custom family homes',
      image: '/images/architect/service-residential.jpg',
      desc: locale === 'pt'
        ? 'Desenvolvimento integral desde a análise bioclimática do terreno até ao projeto de execução e coordenação de obra. Espaços esculpidos em torno do modo de vida da família.'
        : locale === 'ar'
        ? 'تطوير معماري متكامل يبدأ من دراسة التضاريس والمناخ وحتى أدق تفاصيل البناء والإشراف الكامل، لتوفير مسكن مخصص لأسلوب حياتك.'
        : 'Holistic design from initial site topography through technical documentation and on-site build coordination.',
      deliverables: [
        locale === 'pt' ? 'Estudo Prévio e Modelação 3D' : locale === 'ar' ? 'مخططات أولية ومجسمات ثلاثية الأبعاد' : 'Schematic Design & 3D Spatial Study',
        locale === 'pt' ? 'Licenciamento Municipal e Aprovações' : locale === 'ar' ? 'استخراج التراخيص والموافقات البلدية' : 'Permits, Zoning & Municipal Approvals',
        locale === 'pt' ? 'Caderno de Encargos e Seleção de Empreiteiro' : locale === 'ar' ? 'كراسة المواصفات واختيار المقاولين' : 'Tender Documentation & Contractor Procurement',
      ],
    },
    {
      id: 'interior',
      title: locale === 'pt' ? 'Design de Interiores Arquitetónico' : locale === 'ar' ? 'التصميم الداخلي المعماري الفاخر' : 'Architectural Interior Architecture',
      subtitle: locale === 'pt' ? 'Mobiliário embutido e paleta tátil de matérias' : locale === 'ar' ? 'تصميم داخلي متناغم مع الكتل المعمارية' : 'Custom joinery, lighting choreography & materiality',
      image: '/images/architect/service-interior.jpg',
      desc: locale === 'pt'
        ? 'O interior não é decoração superficial, mas o prolongamento da estrutura: cozinhas esculpidas em pedra, portas acústicas embutidas e iluminação cenográfica indireta.'
        : locale === 'ar'
        ? 'التصميم الداخلي ليس مجرد ديكورات، بل هو امتداد للكتلة المعمارية: مطابخ حجرية منحوتة، إضاءة غير مباشرة وأثاث مدمج.'
        : 'Interior space treated as structural continuation: bespoke stone monoliths, concealed pocket joinery, and shadow-gap details.',
      deliverables: [
        locale === 'pt' ? 'Desenho de Carpintarias e Cozinhas' : locale === 'ar' ? 'تفصيل المطابخ والخزائن الحائطية' : 'Custom Joinery & Millwork Drafting',
        locale === 'pt' ? 'Projeto Luminotécnico Cénico' : locale === 'ar' ? 'مخطط الإضاءة الهندسية وتوزيع الظلال' : 'Lighting Design & Control Plans',
        locale === 'pt' ? 'Seleção e Curadoria de Matérias Nobres' : locale === 'ar' ? 'انتقاء الخامات الطبيعية والأحجار النادرة' : 'Finishes, Stone Slabs & Hardware Curation',
      ],
    },
    {
      id: 'commercial',
      title: locale === 'pt' ? 'Projetos Comerciais & Espaços Culturais' : locale === 'ar' ? 'المشاريع التجارية والفراغات الثقافية' : 'Commercial & Cultural Architecture',
      subtitle: locale === 'pt' ? 'Sedes corporativas, pavilhões e galerias' : locale === 'ar' ? 'مقرات الشركات والمباني العامة والمعارض' : 'Corporate headquarters, pavilions & gallery spaces',
      image: '/images/architect/service-commercial.jpg',
      desc: locale === 'pt'
        ? 'Espaços de trabalho e intervenções públicas que comunicam a identidade da instituição com elegância sóbria, acústica irrepreensível e sustentabilidade certificada.'
        : locale === 'ar'
        ? 'بيئات عمل ومبانٍ عامة تعكس هوية المؤسسة برقي وهدوء، مع عزل صوتي متطور وكفاءة طاقة معتمدة.'
        : 'Workplaces and institutional pavilions that embody identity through architectural poise, acoustic clarity, and environmental performance.',
      deliverables: [
        locale === 'pt' ? 'Planeamento de Espaços de Trabalho Flexíveis' : locale === 'ar' ? 'تخطيط الفراغات المكتبية المرنة' : 'Workplace Spatial Strategy',
        locale === 'pt' ? 'Certificação Energética e Conforto Acústico' : locale === 'ar' ? 'شهادات كفاءة الطاقة والراحة الصوتية' : 'Acoustic Engineering & Carbon Metrics',
        locale === 'pt' ? 'Supervisão de Especialidades Construtivas' : locale === 'ar' ? 'إشراف هندسي وتنفيذي كامل' : 'Multidisciplinary Engineering Oversight',
      ],
    },
    {
      id: 'renovation',
      title: locale === 'pt' ? 'Reabilitação Patrimonial & Regeneração' : locale === 'ar' ? 'إعادة تأهيل وترميم المباني التراثية' : 'Heritage Renovation & Adaptive Reuse',
      subtitle: locale === 'pt' ? 'Diálogo respeitoso entre memória e modernidade' : locale === 'ar' ? 'حوار متناغم بين التاريخ والراحة المعاصرة' : 'Balancing historical memory with contemporary life',
      image: '/images/architect/service-renovation.jpg',
      desc: locale === 'pt'
        ? 'Recuperação de palacetes, solares e edifícios históricos pombalinos. Resgate de cantarias e traves de madeira conjugadas com infraestruturas modernas invisíveis.'
        : locale === 'ar'
        ? 'إحياء وترميم المباني التاريخية والقصور العريقة، مع الحفاظ على الأحجار والأسقف الخشبية الأصلية وإضافة أحدث أنظمة العزل الذكية.'
        : 'Sensitive restoration of historic palacetes, farmsteads, and urban townhouses, seamlessly integrating concealed contemporary climate systems.',
      deliverables: [
        locale === 'pt' ? 'Levantamento Histórico e Patológico' : locale === 'ar' ? 'فحص إنشائي وتاريخي شامل للمبنى' : 'Structural & Historic Condition Survey',
        locale === 'pt' ? 'Consolidação Sísmica e Estrutural' : locale === 'ar' ? 'تدعيم الزلازل والأساسات الإنشائية' : 'Seismic Reinforcement & Stone Conservation',
        locale === 'pt' ? 'Aprovação junto do Património Cultural' : locale === 'ar' ? 'موافقات هيئات الآثار والتراث الوطني' : 'Heritage Authority Permitting & Compliance',
      ],
    },
    {
      id: 'visualization',
      title: locale === 'pt' ? 'Visualização 3D Fotorrealista & VR' : locale === 'ar' ? 'التجسيم الرقمي الواقعي ثلاثي الأبعاد' : '3D Photorealistic Visualization',
      subtitle: locale === 'pt' ? 'Experiência sensorial antes do início das obras' : locale === 'ar' ? 'معاينة واقعية فائقة الدقة قبل بدء البناء' : 'Sensory spatial preview before site excavation',
      image: '/images/architect/service-visualization.jpg',
      desc: locale === 'pt'
        ? 'Imagens e animações arquitetónicas de alta fidelidade cinematográfica que reproduzem a luz solar exata, texturas materiais e reflexos de água do projeto.'
        : locale === 'ar'
        ? 'رندرة معمارية سينمائية فائقة الواقعية تحاكي حركة الشمس، ملمس الخامات الحجرية وانعكاسات المسطحات المائية في مشروعك.'
        : 'Cinema-grade architectural renderings and immersive animations capturing exact geographic solar angles, material grain, and water reflections.',
      deliverables: [
        locale === 'pt' ? 'Renders Exteriores e Interiores em Alta Definição' : locale === 'ar' ? 'لقطات داخلية وخارجية فائقة الدقة' : 'High-Resolution Exterior & Interior Frames',
        locale === 'pt' ? 'Estudos Solares e Noturnos Dinâmicos' : locale === 'ar' ? 'دراسات الإضاءة النهارية والليلية' : 'Diurnal Lighting & Nocturnal Studies',
        locale === 'pt' ? 'Modelos Digitais BIM para Compatibilização' : locale === 'ar' ? 'نماذج نمذجة معلومات المباني (BIM)' : 'BIM Coordinate Models for Structural Sync',
      ],
    },
  ];

  return (
    <div className="bg-[#0f0f0f] text-stone-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-stone-400 block">
            {locale === 'pt' ? 'Disciplinas do Atelier' : locale === 'ar' ? 'خدمات الاستوديو المعماري' : 'Studio Capabilities'}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-white tracking-tight">
            {locale === 'pt' ? 'Serviços de Arquitetura & Gestão' : locale === 'ar' ? 'خدمات التصميم المعماري والإشراف' : 'Architectural Services'}
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
            {locale === 'pt'
              ? 'Uma prática integrada que acompanha o cliente desde a análise do terreno até à conclusão final de obra com coordenação técnica total.'
              : locale === 'ar'
              ? 'ممارسة معمارية شاملة ترافق العميل من فحص قطعة الأرض وحتى اللمسات النهائية للمشروع بإشراف هندسي دقيق.'
              : 'An integrated practice guiding clients through site feasibility, schematic concepts, technical drafting, and craft oversight.'}
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {services.map((svc, idx) => (
            <div
              key={svc.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center border-b border-stone-800/80 pb-16"
            >
              <div className="lg:col-span-5">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-stone-900 shadow-2xl">
                  <Image src={svc.image} alt={svc.title} fill className="object-cover" />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 text-start font-light">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-stone-500 block">
                    {svc.subtitle}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-white">
                    {svc.title}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                  {svc.desc}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block">
                    {locale === 'pt' ? 'Entregáveis Principais:' : locale === 'ar' ? 'مخرجات العمل الرئيسية:' : 'Primary Deliverables:'}
                  </span>
                  <ul className="space-y-1.5 text-xs text-stone-400">
                    {svc.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-stone-400" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href="/demos/architect/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-100 hover:bg-white text-stone-950 font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <span>{locale === 'pt' ? 'Consultar Sobre Este Serviço' : locale === 'ar' ? 'استفسار حول هذه الخدمة' : 'Inquire for Your Site'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0c0c] border border-stone-800 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
            {locale === 'pt' ? 'Pronto Para Conversar Sobre a Sua Propriedade?' : locale === 'ar' ? 'هل تود مناقشة تفاصيل أرضك أو مشروعك؟' : 'Ready to Discuss Your Property?'}
          </h3>
          <p className="text-xs text-stone-400 max-w-lg mx-auto font-light leading-relaxed">
            {locale === 'pt'
              ? 'Organizamos reuniões exploratórias com os arquitetos titulares para avaliar viabilidades de lote e potencial construtivo.'
              : locale === 'ar'
              ? 'نعقد جلسات استكشافية مع الشركاء المؤسسين لتقييم إمكانيات الموقع والجدوى المعمارية لمشروعك.'
              : 'We conduct exploratory design consultations with studio partners to assess site potential and aesthetic scope.'}
          </p>
          <div className="pt-2">
            <Link
              href="/demos/architect/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-stone-100 text-stone-950 font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md"
            >
              <span>{locale === 'pt' ? 'Marcar Reunião Exploratória' : locale === 'ar' ? 'حجز جلسة استكشافية' : 'Request Consultation'}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

