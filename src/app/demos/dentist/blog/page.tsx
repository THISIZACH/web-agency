'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  Sparkles,
  Clock,
  Calendar,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  X,
  HeartPulse,
} from 'lucide-react';

export default function DentistBlogPage() {
  const { locale, isRTL } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      title: locale === 'pt' ? 'Como Funciona a Destartarização Profissional: Passo a Passo' : locale === 'ar' ? 'كيف يعمل تنظيف الأسنان الاحترافي: الخطوات الطبية بالتفصيل' : 'How Professional Teeth Cleaning Works: Behind the Ultrasonic Scaler',
      category: locale === 'pt' ? 'Prevenção & Higiene' : locale === 'ar' ? 'الوقاية ونظافة الفم' : 'Preventative Care',
      readTime: '4 min',
      date: '10 Set 2026',
      image: '/images/dentist/blog-01.jpg',
      summary: locale === 'pt'
        ? 'Entenda porque a escovagem diária em casa não consegue remover o tártaro calcificado e como a vibração ultrassónica preserva o esmalte.'
        : locale === 'ar'
        ? 'تعرف على سبب عجز فرشاة الأسنان العادية عن إزالة الجير المتكلس وكيف تحمي الموجات فوق الصوتية طبقة المينا وصحة اللثة.'
        : 'Why regular brushing cannot eliminate hardened calculus and how modern ultrasonic vibrations protect your gums safely.',
      content: [
        locale === 'pt'
          ? 'Mesmo com uma rotina impecável de escovagem e fio dental, os minerais presentes na saliva misturam-se com a placa bacteriana formando o cálculo dentário (tártaro). Uma vez calcificado, apenas instrumentos ultrassónicos profissionais conseguem desprender estas placas sem danificar o esmalte.'
          : locale === 'ar'
          ? 'حتى مع الحرص الشديد على تفريش الأسنان واستخدام الخيط، تتفاعل المعادن الموجودة في اللعاب مع بكتيريا البلاك لتشكل الجير المتصلب. بمجرد تكون هذا الجير، تصبح الأجهزة الميكانيكية الدقيقة بالموجات فوق الصوتية هي الحل الآمن والوحيد لإزالته دون خدش المينا.'
          : 'Even with disciplined brushing and flossing, saliva minerals combine with bacterial plaque to form calculus (tartar). Once hardened, only professional ultrasonic cavitation can gently dislodge these deposits without eroding enamel.',
        locale === 'pt'
          ? 'Durante o procedimento, o higienista remove o tártaro supragengival e subgengival, realiza um polimento com jato de bicarbonato para eliminar manchas superficiais de chá ou café, e aplica flúor para fortalecer as microfissuras do esmalte.'
          : locale === 'ar'
          ? 'أثناء الجلسة، يقوم الطبيب بإزالة الترسبات المحيطة باللثة، ثم صقل الأسنان بجزيئات كربونات الصوديوم لإزالة تصبغات الشاي والقهوة، وتنتهي بوضع الفلورايد المقوي.'
          : 'During treatment, the dental hygienist removes supragingival and subgingival deposits, performs air-polishing to buff away staining, and finishes with a mineralizing fluoride varnish.',
      ],
      keyTakeaway: locale === 'pt' ? 'Recomendação: Efetuar destartarização profissional a cada 6 meses.' : locale === 'ar' ? 'نصيحة طبية: إجراء تنظيف احترافي كل 6 أشهر يحميك من تراجع اللثة.' : 'Takeaway: Schedule professional cleaning every 6 months to prevent bone loss.',
    },
    {
      id: 2,
      title: locale === 'pt' ? 'O Que Acontece Realmente Durante um Check-Up Dentário?' : locale === 'ar' ? 'ماذا يحدث بالفعل خلال الفحص الدوري لأسنانك؟' : 'What Really Happens During a Routine Dental Check-Up?',
      category: locale === 'pt' ? 'Exames & Diagnóstico' : locale === 'ar' ? 'الفحص والتشخيص' : 'Diagnostics',
      readTime: '5 min',
      date: '08 Set 2026',
      image: '/images/dentist/blog-02.jpg',
      summary: locale === 'pt'
        ? 'Um check-up clínico vai muito além de procurar cáries visíveis: envolve rastreio de cancro oral, avaliação da articulação e saúde periodontal.'
        : locale === 'ar'
        ? 'الفحص السريري لا يقتصر على كشف التسوس الظاهر، بل يشمل فحص الأنسجة الرخوة، فحص مفصل الفك والكشف المبكر عن أي أمراض كامنة.'
        : 'A clinical dental exam investigates far more than cavities: soft tissue health, TMJ function, and microscopic periodontal pockets.',
      content: [
        locale === 'pt'
          ? 'A consulta de rotina começa com o exame dos tecidos moles (língua, bochechas e palato) para deteção precoce de lesões. De seguida, o médico dentista examina a oclusão e o estado das restaurações antigas com recurso a iluminação de alta ampliação.'
          : locale === 'ar'
          ? 'يبدأ الفحص بتقييم أنسجة الفم الرخوة (اللسان، بطانة الخد واللثة) للتأكد من سلامتها وخلوها من أي التهابات. تليها معاينة إطباق الأسنان وحالة الحشوات والترميمات القديمة تحت إضاءة مكبرة.'
          : 'A comprehensive check-up begins with mucosal tissue screening (tongue, cheeks, palate) for early lesion detection. The dentist then evaluates your bite occlusion and inspects older fillings for micro-leakage.',
        locale === 'pt'
          ? 'Se necessário, são efetuadas radiografias bitewing de controlo para verificar se existem cáries interproximais escondidas entre os dentes que seriam invisíveis a olho nu.'
          : locale === 'ar'
          ? 'إذا لزم الأمر، يتم إجراء تصوير شعاعي داخلي بسيط لفحص الفراغات الخفية بين الأسنان التي لا يمكن رؤيتها بالعين المجردة.'
          : 'When indicated, low-dose interproximal bitewing radiographs are taken to verify the absence of hidden cavities forming between contacting teeth.',
      ],
      keyTakeaway: locale === 'pt' ? 'Diagnóstico precoce evita tratamentos extensos e despesas desnecessárias.' : locale === 'ar' ? 'الكشف المبكر يجنبك علاج العصب والتكاليف العالية لاحقاً.' : 'Takeaway: Early detection prevents complex root canals and saves substantial costs.',
    },
    {
      id: 3,
      title: locale === 'pt' ? 'Branqueamento Dentário: Como Funciona e Mitos Comuns' : locale === 'ar' ? 'تبييض الأسنان: كيف يعمل علمياً وحقائق هامة حول الحساسية' : 'How Teeth Whitening Works (and Avoiding Post-Op Sensitivity)',
      category: locale === 'pt' ? 'Estética Dentária' : locale === 'ar' ? 'تجميل الأسنان' : 'Smile Aesthetics',
      readTime: '4 min',
      date: '04 Set 2026',
      image: '/images/dentist/blog-03.jpg',
      summary: locale === 'pt'
        ? 'Descubra a ciência da oxidação das moléculas de pigmento no esmalte e saiba porque os kits caseiros sem supervisão médica podem danificar as gengivas.'
        : locale === 'ar'
        ? 'تعرف على التفاعل الكيميائي الآمن لأكسدة جزيئات التصبغ في المينا ولماذا تشكل الخلطات المنزلية العشوائية خطراً على اللثة.'
        : 'The chemistry of enamel chromophore oxidation and why unsupervised over-the-counter kits cause gum burns.',
      content: [
        locale === 'pt'
          ? 'Os géis profissionais de peróxido de hidrogénio penetram nos micro-poros do esmalte e oxidam as cadeias carbónicas responsáveis pelas manchas escuras, quebrando-as em partículas incolores. Não há desgaste abrasivo do dente quando realizado por profissional.'
          : locale === 'ar'
          ? 'تعمل مركبات بيروكسيد الهيدروجين المعتمدة طبياً على اختراق مسام المينا السطحية وتفكيك سلاسل التصبغات اللونية دون أي احتكاك أو تآكل لطبقة السن الخارجية.'
          : 'Professional whitening gels penetrate microscopic enamel tubules to oxidize and break the double bonds of staining chromophores, turning them colorless without stripping natural enamel.',
        locale === 'pt'
          ? 'Na NovaSmile utilizamos géis formulados com nitrato de potássio e flúor desensibilizante, reduzindo a sensibilidade transitória pós-tratamento para níveis praticamente nulos.'
          : locale === 'ar'
          ? 'في عيادتنا نستخدم مركبات تبييض مضافاً إليها نترات البوتاسيوم المرطبة ومواد مضادة للتحسس، مما يجعل الإجراء مريحاً للغاية.'
          : 'At NovaSmile, our medical formulations include potassium nitrate and desensitizing agents, keeping post-operative temperature sensitivity to a minimum.',
      ],
      keyTakeaway: locale === 'pt' ? 'Branqueamento seguro só deve ser feito após limpeza prévia e avaliação clínica.' : locale === 'ar' ? 'يجب دائماً إجراء تنظيف للأسنان قبل التبييض لضمان نتائج متجانسة.' : 'Takeaway: Safe whitening always begins with a clinical prophylaxis to ensure even results.',
    },
    {
      id: 4,
      title: locale === 'pt' ? 'Implante Dentário vs. Ponte: Qual a Solução Mais Duradoura?' : locale === 'ar' ? 'زراعة الأسنان مقابل الجسور: أيهما أفضل على المدى الطويل؟' : 'Dental Implants vs. Bridges: Long-Term Bone Preservation',
      category: locale === 'pt' ? 'Implantologia' : locale === 'ar' ? 'زراعة الأسنان' : 'Implantology',
      readTime: '6 min',
      date: '28 Ago 2026',
      image: '/images/dentist/blog-04.jpg',
      summary: locale === 'pt'
        ? 'Comparação biomecânica entre colocar um implante em titânio e desgastar dois dentes vizinhos saudáveis para colocar uma ponte fixa.'
        : locale === 'ar'
        ? 'مقارنة طبية وعلمية دقيقة بين تثبيت زرعة تيتانيوم مستقلة وبين برد سنين سليمين مجاورين لتركيب جسر ثابت.'
        : 'The biological difference between placing an independent titanium implant and filing down adjacent healthy teeth for a bridge.',
      content: [
        locale === 'pt'
          ? 'Quando um dente é perdido, a raiz ausente deixa de transmitir estímulo mecânico ao osso alveolar circundante, levando à sua reabsorção progressiva. O implante dentário em titânio substitui a raiz, osteointegra-se com o osso e trava a perda óssea.'
          : locale === 'ar'
          ? 'عند فقدان السن، يتوقف وصول المحفزات الميكانيكية إلى عظم الفك، مما يسبب انكماشه وضموره تدريجياً. زراعة السن تعوض الجذر المفقود وتندمج مع العظم وتحميه من التآكل.'
          : 'When a natural tooth is extracted, the missing root ceases to stimulate alveolar bone, triggering progressive bone resorption. A titanium implant replicates root mechanics, osseointegrating to preserve facial bone structure.',
        locale === 'pt'
          ? 'Uma ponte fixa tradicional exige desgastar irreversivelmente os dois dentes adjacentes, mesmo que estejam 100% saudáveis. Por esta razão, a implantologia moderna é hoje o padrão de excelência de conservação.'
          : locale === 'ar'
          ? 'الجسر التقليدي يتطلب نحت السنين المجاورين وإزالة طبقة المينا منهما لتثبيت الجسر، بينما تظل الزرعة مستقلة بذاتها دون الإضرار بأي سن مجاور.'
          : 'A conventional bridge requires cutting down adjacent teeth even if they are completely healthy. Dental implants treat the isolated missing space without compromising neighboring enamel.',
      ],
      keyTakeaway: locale === 'pt' ? 'O implante preserva os dentes vizinhos e o osso maxilar a longo prazo.' : locale === 'ar' ? 'الزراعة هي الخيار الأمثل لحماية الأسنان السليمة وعظام الفك.' : 'Takeaway: Implants preserve neighboring tooth enamel and vital jawbone density.',
    },
    {
      id: 5,
      title: locale === 'pt' ? 'Hábitos Diários Essenciais Para Proteger os Dentes das Cáries' : locale === 'ar' ? 'العادات اليومية الأساسية لحماية أسنانك وعائلتك من التسوس' : 'Daily Habits That Actually Protect Enamel From Acid Erosion',
      category: locale === 'pt' ? 'Cuidados em Casa' : locale === 'ar' ? 'العناية المنزلية' : 'Daily Oral Care',
      readTime: '3 min',
      date: '20 Ago 2026',
      image: '/images/dentist/blog-05.jpg',
      summary: locale === 'pt'
        ? 'Técnica correta de escovagem, o momento ideal para escovar após as refeições e o papel insubstituível do fio dental.'
        : locale === 'ar'
        ? 'الطريقة السليمة لتفريش الأسنان، التوقيت الأنسب بعد الوجبات وأهمية الخيط الطبي للوصول إلى 40% من أسطح الأسنان الخفية.'
        : 'Proper brushing angles, waiting 30 minutes after acidic meals, and why flossing covers the remaining 40% of surfaces.',
      content: [
        locale === 'pt'
          ? 'A escova de dentes limpa apenas cerca de 60% das superfícies dentárias. Os restantes 40% encontram-se nos pontos de contacto entre os dentes, onde as bactérias anaeróbias se instalam e iniciam a cárie interproximal. O uso diário do fio dental é insubstituível.'
          : locale === 'ar'
          ? 'فرشاة الأسنان تنظف فقط 60% من أسطح الأسنان الظاهرة، بينما تبقى 40% بين الأسنان محاطة بالبكتيريا، وهنا يكمن الدور الجوهري للخيط الطبي اليومي.'
          : 'A toothbrush can only reach roughly 60% of tooth surfaces. The remaining 40% resides in interdental contact spaces where anaerobic bacteria thrive, making daily flossing indispensable.',
        locale === 'pt'
          ? 'Importante: Após consumir alimentos ácidos (citrinos, refrigerantes, café), aguarde 30 minutos antes de escovar. O ácido amolece temporariamente o esmalte, e escovar de imediato pode causar abrasão mecânica.'
          : locale === 'ar'
          ? 'تنبيه طبي: بعد تناول الأطعمة أو المشروبات الحمضية (كالليمون والقهوة)، انتظر 30 دقيقة قبل التفريش للسماح للعاب بإعادة توازن حموضة الفم.'
          : 'Crucial advice: Wait 30 minutes after acidic foods (citrus, coffee) before brushing. Acid temporarily softens enamel, and immediate brushing can abrade the softened surface.',
      ],
      keyTakeaway: locale === 'pt' ? 'Fio dental diário e escovagem suave com cerdas macias são o melhor seguro de saúde oral.' : locale === 'ar' ? 'الخيط اليومي والفرشاة الناعمة هما خط الدفاع الأول لأسنان صحية.' : 'Takeaway: Soft-bristle brushes and daily flossing provide the ultimate cavity shield.',
    },
    {
      id: 6,
      title: locale === 'pt' ? 'Dor de Dentes Aguda: O Que Fazer (e o Que Não Fazer) de Imediato' : locale === 'ar' ? 'ألم الأسنان المفاجئ والحاد: ماذا تفعل وما يجب تجنبه فوراً' : 'Acute Toothache Protocol: What to Do (and What NEVER to Do)',
      category: locale === 'pt' ? 'Urgências' : locale === 'ar' ? 'الطوارئ والإسعاف' : 'Emergency Protocol',
      readTime: '4 min',
      date: '15 Ago 2026',
      image: '/images/dentist/blog-06.jpg',
      summary: locale === 'pt'
        ? 'Passos de primeiros socorros para dor de dentes latejante antes de chegar à clínica e erros graves que podem agravar a infeção.'
        : locale === 'ar'
        ? 'خطوات الإسعاف الأولي لتسكين ألم الضرس النابض لحين الوصول للعيادة، وأخطاء شائعة قد تضاعف الالتهاب.'
        : 'First-aid steps for throbbing tooth pain and dangerous home remedies that burn mucous membranes.',
      content: [
        locale === 'pt'
          ? 'Se acordar com dor de dentes aguda latejante, bocheche suavemente com água morna e sal para desinfetar o sulco. Use fio dental com muito cuidado para garantir que não existem restos de comida presos a pressionar a polpa.'
          : locale === 'ar'
          ? 'إذا استيقظت على ألم حاد ونابض في الضرس، قم بالمضمضة بماء دافئ وقليل من الملح لتعقيم المكان، وتأكد بلطف باستخدام الخيط الطبي من عدم وجود بقايا طعام تضغط على اللثة.'
          : 'If struck by acute throbbing pain, rinse gently with warm salt water. Gently floss around the area to confirm no foreign food debris is wedged into the gum pocket.',
        locale === 'pt'
          ? 'NUNCA coloque comprimidos de aspirina diretamente sobre a gengiva ou dente dorido. A aspirina é um ácido acetilsalicílico que provoca queimaduras químicas graves nos tecidos moles da boca. Tome analgesia oral recomendada e procure atendimento de urgência no próprio dia.'
          : locale === 'ar'
          ? 'تحذير طبي هام: لا تضع أبداً أقراص الأسبرين مباشرة على اللثة أو مكان الألم، لأنها تسبب حروقاً كيميائية شديدة للأنسجة. تناول المسكن عن طريق الفم وتوجه للعيادة فوراً.'
          : 'NEVER place an aspirin tablet directly against aching gums or tooth enamel. Acetylsalicylic acid causes severe chemical burns on oral mucosa. Take oral analgesics as indicated on packaging and seek same-day dental care.',
      ],
      keyTakeaway: locale === 'pt' ? 'A dor de dentes é sinal de infeção ativa e não passa sem intervenção médica.' : locale === 'ar' ? 'ألم الأسنان مؤشر على التهاب داخلي يحتاج إلى تدخل طبي فوري.' : 'Takeaway: Persistent toothache indicates pulpitis or infection that requires clinical intervention.',
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{locale === 'pt' ? 'Educação & Saúde Oral' : locale === 'ar' ? 'دليل ومقالات التوعية الصحية' : 'Patient Knowledge Base'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {locale === 'pt' ? 'Guia Clínico Para a Sua Saúde Oral' : locale === 'ar' ? 'دليلك الطبي لابتسامة صحية وجميلة' : 'Evidence-Based Oral Health Guides'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {locale === 'pt'
              ? 'Artigos educativos revistos por médicos dentistas para esclarecer dúvidas comuns, cuidados em casa e procedimentos modernos.'
              : locale === 'ar'
              ? 'مقالات توعوية مكتوبة ومراجعة طبياً للإجابة على تساؤلاتك حول العناية اليومية وأحدث الإجراءات العلاجية.'
              : 'Educational articles clarifying everyday dental care, evidence-based hygiene, and restorative options.'}
          </p>
        </div>

        {/* Blog Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 px-3 py-1 rounded-full bg-cyan-600 text-white text-[11px] font-bold shadow-md">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h2 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                    {art.title}
                  </h2>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(art.id)}
                  className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{locale === 'pt' ? 'Ler Artigo Completo' : locale === 'ar' ? 'قراءة المقال بالكامل' : 'Read Full Article'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
                <Link
                  href="/demos/dentist/contact"
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-cyan-50 dark:hover:bg-cyan-950 text-slate-700 dark:text-slate-300 text-[11px] font-semibold transition-colors"
                >
                  {locale === 'pt' ? 'Agendar' : locale === 'ar' ? 'حجز موعد' : 'Book'}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Educational Disclaimer */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-2">
          <span className="font-bold text-xs text-slate-700 dark:text-slate-300">
            {locale === 'pt' ? 'Nota de Saúde Pública' : locale === 'ar' ? 'تنويه طبي وإرشادي' : 'Clinical Health Disclaimer'}
          </span>
          <p className="text-xs text-slate-500 max-w-2xl mx-auto">
            {locale === 'pt'
              ? 'Os conteúdos deste blog são puramente informativos e educativos, não substituindo a consulta e o diagnóstico presencial de um médico dentista qualificado.'
              : locale === 'ar'
              ? 'المحتويات المنشورة في هذا الدليل هي لأغراض التوعية والتثقيف الصحي فقط، ولا تغني عن استشارة وفحص طبيب الأسنان المختص.'
              : 'Content published on this educational journal is for general informational purposes only and does not replace tailored professional medical diagnosis.'}
          </p>
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (() => {
          const art = articles.find((a) => a.id === selectedArticle);
          if (!art) return null;
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
              <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-2xl text-slate-900 dark:text-slate-100 space-y-6">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-5 right-5 rtl:right-auto rtl:left-5 text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-cyan-600 dark:text-cyan-400 font-bold">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950">{art.category}</span>
                    <span>•</span>
                    <span className="text-slate-400">{art.readTime} read</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
                    {art.title}
                  </h2>
                </div>

                <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image src={art.image} alt={art.title} fill className="object-cover" />
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {art.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 text-xs text-cyan-900 dark:text-cyan-200 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{art.keyTakeaway}</span>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-xs text-slate-400">NovaSmile Dental Clinic • Clinical Education</span>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setSelectedArticle(null)}
                      className="px-5 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 cursor-pointer"
                    >
                      {locale === 'pt' ? 'Fechar' : locale === 'ar' ? 'إغلاق' : 'Close'}
                    </button>
                    <Link
                      href="/demos/dentist/contact"
                      className="px-6 py-2.5 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow-md text-center"
                    >
                      {locale === 'pt' ? 'Marcar Consulta' : locale === 'ar' ? 'حجز موعد' : 'Book Consultation'}
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

