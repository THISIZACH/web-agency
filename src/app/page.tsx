import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { Services } from '@/components/sections/Services';
import { LiveDemos } from '@/components/sections/LiveDemos';
import { BuiltToSell } from '@/components/sections/BuiltToSell';
import { Pricing } from '@/components/sections/Pricing';
import { FirstMonthSupport } from '@/components/sections/FirstMonthSupport';
import { HowItWorks } from '@/components/sections/HowItWorks';

// Dynamic imports for heavy below-the-fold sections
const InsideDemos = dynamic(() => import('@/components/sections/InsideDemos').then((mod) => mod.InsideDemos));
const BeforeAfter = dynamic(() => import('@/components/sections/BeforeAfter').then((mod) => mod.BeforeAfter));
const Maintenance = dynamic(() => import('@/components/sections/Maintenance').then((mod) => mod.Maintenance));
const ClientOwnership = dynamic(() => import('@/components/sections/ClientOwnership').then((mod) => mod.ClientOwnership));
const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs').then((mod) => mod.WhyChooseUs));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then((mod) => mod.Testimonials));
const FAQSection = dynamic(() => import('@/components/sections/FAQSection').then((mod) => mod.FAQSection));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection').then((mod) => mod.ContactSection));

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustStrip />
      <Services />
      <LiveDemos />
      <InsideDemos />
      <BeforeAfter />
      <BuiltToSell />
      <Pricing />
      <FirstMonthSupport />
      <Maintenance />
      <ClientOwnership />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
