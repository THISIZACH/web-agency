'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  HeartPulse,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  ArrowRight,
} from 'lucide-react';

export function DentistFooter() {
  const { locale, isRTL } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Col 1: Clinic Identity */}
          <div className="space-y-4">
            <Link href="/demos/dentist" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-cyan-500/20">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-lg text-white">NovaSmile</span>
                <span className="text-cyan-400 text-xs ms-1 font-semibold uppercase">Clinic</span>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              {locale === 'pt'
                ? 'Clínica de medicina dentária de vanguarda. Tratamentos preventivos, estética do sorriso, implantologia e ortodontia invisível com tecnologia indolor.'
                : locale === 'ar'
                ? 'عيادة أسنان متطورة تقدم أحدث علاجات طب الأسنان، تجميل الابتسامة، زراعة الأسنان والتقويم الشفاف بأحدث التقنيات وبدون ألم.'
                : 'Advanced dental practice dedicated to comfortable, evidence-based oral care, smile aesthetics, implantology, and gentle family dentistry.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>{locale === 'pt' ? 'Certificação Médica & Protocolo ISO' : locale === 'ar' ? 'معايير تعقيم وجودة طبية معتمدة' : 'ISO Certified Sterilization Protocol'}</span>
            </div>
          </div>

          {/* Col 2: Treatments */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {locale === 'pt' ? 'Tratamentos Principais' : locale === 'ar' ? 'العلاجات والخدمات' : 'Core Treatments'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/demos/dentist/services" className="hover:text-cyan-400 transition-colors">
                  {locale === 'pt' ? 'Higiene & Destartarização' : locale === 'ar' ? 'تنظيف الأسنان وإزالة الجير' : 'Dental Cleaning & Prophylaxis'}
                </Link>
              </li>
              <li>
                <Link href="/demos/dentist/services" className="hover:text-cyan-400 transition-colors">
                  {locale === 'pt' ? 'Branqueamento Dentário Laser' : locale === 'ar' ? 'تبييض الأسنان بالليزر' : 'In-Clinic Laser Teeth Whitening'}
                </Link>
              </li>
              <li>
                <Link href="/demos/dentist/services" className="hover:text-cyan-400 transition-colors">
                  {locale === 'pt' ? 'Implantes Dentários em Titânio' : locale === 'ar' ? 'زراعة الأسنان بالكمبيوتر' : 'Computer-Guided Dental Implants'}
                </Link>
              </li>
              <li>
                <Link href="/demos/dentist/services" className="hover:text-cyan-400 transition-colors">
                  {locale === 'pt' ? 'Facetas Dentárias de Porcelana' : locale === 'ar' ? 'عدسات وتيجان البورسلين' : 'Porcelain Smile Veneers'}
                </Link>
              </li>
              <li>
                <Link href="/demos/dentist/services" className="hover:text-cyan-400 transition-colors">
                  {locale === 'pt' ? 'Alinhadores Invisíveis (Invisalign)' : locale === 'ar' ? 'تقويم الأسنان الشفاف' : 'Clear Invisible Orthodontics'}
                </Link>
              </li>
              <li>
                <Link href="/demos/dentist/services" className="hover:text-cyan-400 transition-colors">
                  {locale === 'pt' ? 'Odontopediatria (Crianças)' : locale === 'ar' ? 'طب أسنان الأطفال والأسرة' : 'Gentle Pediatric Dentistry'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Clinic Hours & Emergency */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {locale === 'pt' ? 'Horário de Atendimento' : locale === 'ar' ? 'أوقات العمل والطوارئ' : 'Opening Hours'}
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">{locale === 'pt' ? 'Segunda - Sexta' : locale === 'ar' ? 'الإثنين - الجمعة' : 'Monday - Friday'}</span>
                <span className="font-semibold text-white">8:30 - 19:30</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">{locale === 'pt' ? 'Sábado' : locale === 'ar' ? 'السبت' : 'Saturday'}</span>
                <span className="font-semibold text-white">9:00 - 14:00</span>
              </div>
              <div className="flex justify-between pb-1.5">
                <span className="text-slate-400">{locale === 'pt' ? 'Domingo / Feriados' : locale === 'ar' ? 'الأحد والعطل' : 'Sunday'}</span>
                <span className="font-semibold text-amber-400">{locale === 'pt' ? 'Apenas Urgências' : locale === 'ar' ? 'طوارئ فقط' : 'Emergency Only'}</span>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-[11px] text-cyan-200">
              ⚡ {locale === 'pt' ? 'Linha de Urgência Dentária Same-Day: +351 912 345 678' : locale === 'ar' ? 'خط طوارئ الأسنان في نفس اليوم: +351 912 345 678' : 'Same-Day Emergency Dental Line: +351 912 345 678'}
            </div>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {locale === 'pt' ? 'Localização da Clínica' : locale === 'ar' ? 'موقع العيادة والتواصل' : 'Location & Inquiries'}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  {locale === 'pt'
                    ? 'Avenida da Liberdade 182, 3º Andar, 1250-142 Lisboa'
                    : locale === 'ar'
                    ? 'شارع الحرية 182، الطابق الثالث، لشبونة'
                    : 'Avenida da Liberdade 182, 3rd Floor, Lisbon'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+351 912 345 678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>clinic@novasmiledental.example</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/demos/dentist/contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300"
              >
                <span>{locale === 'pt' ? 'Ver Mapa & Como Chegar' : locale === 'ar' ? 'خريطة الوصول ومواقف السيارات' : 'View Map & Parking Info'}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Disclaimer & Agency Link */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} NovaSmile Dental Clinic. {locale === 'pt' ? 'Demonstração comercial interativa concebida por' : locale === 'ar' ? 'نموذج عرض تجاري تم تطويره بواسطة' : 'Interactive commercial demo developed by'}{' '}
            <Link href="/" className="text-cyan-400 hover:underline font-semibold">
              NexaWeb Studio
            </Link>
            .
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>{locale === 'pt' ? 'Exemplo de Demonstração Frontend' : locale === 'ar' ? 'موقع تجريبي للعرض فقط' : 'Frontend Demonstration Concept'}</span>
            <span>•</span>
            <Link href="/demos/dentist/about" className="hover:text-slate-400">
              {locale === 'pt' ? 'Normas Clínicas' : locale === 'ar' ? 'المعايير الطبية' : 'Clinical Standards'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

