'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Compass, Layers, Sun, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ArchitectAboutPage() {
  const { locale, isRTL } = useLanguage();

  const stages = [
    {
      num: '01',
      title: locale === 'pt' ? 'Diagnóstico & Leitura do Lugar' : locale === 'ar' ? 'دراسة الموقع وتحليل التضاريس' : 'Site Discovery & Feasibility',
      desc: locale === 'pt'
        ? 'Estudo topográfico detalhado, orientação dos ventos e incidência solar. Mapeamento das condicionantes legais municipais e diálogo profundo com os clientes.'
        : locale === 'ar'
        ? 'تحليل طوبوغرافي شامل، اتجاهات الرياح ومسار الشمس، مع دراسة اللوائح والاشتراطات البلدية قبل رسم الخطوط الأولى.'
        : 'Micro-climatic analysis, topographic mapping, solar orientation, and comprehensive municipal zoning evaluation.',
    },
    {
      num: '02',
      title: locale === 'pt' ? 'Conceito Espacial & Maquete de Estudo' : locale === 'ar' ? 'الرؤية المعمارية والمجسمات الأولية' : 'Spatial Concept & Physical Modeling',
      desc: locale === 'pt'
        ? 'Desenvolvimento de maquetes físicas de gesso e madeira e modelos tridimensionais digitais para testar proporções, vazios e entradas de luz zenital.'
        : locale === 'ar'
        ? 'بناء مجسمات ملموسة ونماذج رقمية ثلاثية الأبعاد لاختبار النسب الفراغية، تدفق الإضاءة والتناغم الكتلي.'
        : 'Hands-on timber and plaster study models coupled with photorealistic 3D simulations to interrogate spatial proportions.',
    },
    {
      num: '03',
      title: locale === 'pt' ? 'Projeto de Execução & Pormenorização' : locale === 'ar' ? 'المخططات التنفيذية وتفاصيل المواد' : 'Technical Detailing & Licensing',
      desc: locale === 'pt'
        ? 'Desenho rigoroso de cada nó construtivo, juntas de dilatação, caixilharias embutidas e especificação exata de cantarias e ferragens.'
        : locale === 'ar'
        ? 'رسم تفصيلي دقيق لكل زاوية، فواصل التمدد، الأبواب المخفية وتحديد مواصفات الخامات الحجرية والمعدنية.'
        : 'Exhaustive construction documentation detailing concealed transitions, custom joinery, and structural engineering coordination.',
    },
    {
      num: '04',
      title: locale === 'pt' ? 'Acompanhamento Técnico em Obra' : locale === 'ar' ? 'الإشراف الهندسي الميداني على التنفيذ' : 'Site Oversight & Craftsmanship',
      desc: locale === 'pt'
        ? 'Visitas semanais e controlo minucioso da moldagem do betão, assentamento de pedras e afinação acústica com os melhores artífices.'
        : locale === 'ar'
        ? 'زيارات ميدانية دورية لموقع البناء لضمان جودة صب الخرسانة وتركيب الأحجار وفق أعلى المعايير الهندسية.'
        : 'Rigorous on-site supervision ensuring concrete pours, stonework alignment, and finish tolerances honor the architectural intent.',
    },
  ];

  return (
    <div className="bg-[#0f0f0f] text-stone-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-stone-400 block">
            {locale === 'pt' ? 'O Atelier & Prática' : locale === 'ar' ? 'عن الاستوديو ورؤيتنا' : 'Studio Profile'}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-white tracking-tight">
            {locale === 'pt' ? 'Arquitetura Como Arte de Permanência' : locale === 'ar' ? 'العمارة كفن لصناعة الفراغ والخلود' : 'Architecture as the Art of Permanence'}
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
            {locale === 'pt'
              ? 'Fundado em Lisboa, o Atelier Forma dedica-se à conceção de habitações unifamiliares e espaços contemporâneos que recusam artifícios superficiais.'
              : locale === 'ar'
              ? 'تأسس استوديو أتيليه فورما لتصميم مساكن وفراغات معمارية معاصرة تتجاوز الزخارف المؤقتة وتبحث عن الجمال الخالص.'
              : 'Founded in Lisbon, Atelier Forma is a boutique architecture practice specializing in quiet, tactile residences and sensitive structural adaptations.'}
          </p>
        </div>

        {/* Studio Image & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden bg-stone-900 shadow-2xl">
              <Image
                src="/images/architect/architect-studio.jpg"
                alt="Atelier Forma Design Workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-start font-light">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-stone-500 block">
              {locale === 'pt' ? 'O Processo Criativo' : locale === 'ar' ? 'النهج التصميمي' : 'Design Philosophy'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-white">
              {locale === 'pt'
                ? 'Construir menos, mas com verdade construtiva indelével.'
                : locale === 'ar'
                ? 'البناء بصدق هندسي واحتفاء بالمادة الطبيعية.'
                : 'Constructing with honesty, restraint, and tactile presence.'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              {locale === 'pt'
                ? 'Acreditamos que a arquitetura deve proporcionar serenidade física e mental. Os nossos edifícios caracterizam-se por volumes rigorosos, caixilharias invisíveis e transições fluidas entre interior e natureza exterior.'
                : locale === 'ar'
                ? 'نؤمن بأن المسكن يجب أن يوفر السكينة والهدوء. تتميز تصاميمنا بكتل هندسية نقية، فواصل زجاجية مخفية واندماج سلس مع الطبيعة المحيطة.'
                : 'We believe architecture should cultivate psychological stillness. Our work is distinguished by rigorous volumetric proportion, concealed thresholds, and unbroken dialogue between interior spaces and sky.'}
            </p>

            <div className="p-4 rounded-xl bg-[#0c0c0c] border border-stone-800 space-y-2 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-stone-400" />
                <span>{locale === 'pt' ? 'Coordenação integral de especialidades de engenharia' : locale === 'ar' ? 'تنسيق هندسي ومعماري شامل لكافة التخصصات' : 'Complete coordination of civil & structural engineering'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-stone-400" />
                <span>{locale === 'pt' ? 'Acompanhamento rigoroso de licenciamento camarário' : locale === 'ar' ? 'متابعة التراخيص والموافقات البلدية بدقة' : 'Strict municipal licensing and regulatory management'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Stage Methodology */}
        <div className="space-y-12 pt-8 border-t border-stone-800">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-stone-500 block">
              {locale === 'pt' ? 'Metodologia de Trabalho' : locale === 'ar' ? 'مراحل العمل والتنفيذ' : 'The 4-Stage Method'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
              {locale === 'pt' ? 'Do Primeiro Esboço à Chave na Mão' : locale === 'ar' ? 'من الفكرة الأولى إلى تسليم المفتاح' : 'From Concept to Materialization'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stages.map((st) => (
              <div
                key={st.num}
                className="p-8 rounded-2xl bg-[#0c0c0c] border border-stone-800 space-y-4 text-start"
              >
                <div className="flex items-center justify-between border-b border-stone-800/80 pb-3">
                  <span className="font-mono text-xl font-bold text-stone-400">{st.num}</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">Phase</span>
                </div>
                <h3 className="font-serif text-xl font-normal text-white">{st.title}</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Snapshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-stone-800">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-stone-500 block">
              {locale === 'pt' ? 'Os Arquitetos Fundadores' : locale === 'ar' ? 'الشركاء المؤسسون' : 'Principal Partners'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-white">
              {locale === 'pt' ? 'Liderança Projetual de Proximidade' : locale === 'ar' ? 'إشراف مباشر من كبار المعماريين' : 'Principal-Led Studio Focus'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
              {locale === 'pt'
                ? 'Todos os projetos do atelier são liderados diretamente pelos sócios fundadores, garantindo continuidade entre o primeiro esboço conceitual e a receção final da obra.'
                : locale === 'ar'
                ? 'يتم الإشراف على كل مشروع بشكل مباشر وشخصي من قِبل الشركاء المؤسسين لضمان تحقيق الرؤية التصميمية بأعلى درجات الدقة.'
                : 'Every commission is directed personally by our founding partners, ensuring continuity from initial hand-sketches to the final handover of keys.'}
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-stone-900 shadow-xl">
              <Image src="/images/architect/architect-team.jpg" alt="Atelier Forma Team" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <Link
            href="/demos/architect/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-stone-100 hover:bg-white text-stone-950 font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105"
          >
            <span>{locale === 'pt' ? 'Iniciar Consulta com o Atelier' : locale === 'ar' ? 'استشارة معمارية لمشروعك' : 'Inquire About Your Project'}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </div>
    </div>
  );
}

