// src/app/page.tsx
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { DashboardPreviewSection } from '@/components/sections/DashboardPreviewSection';
import { TestimonialsSection } from '@/components/sections/TestimonialSection';
import { CTASection } from '@/components/sections/CTASection'


export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DashboardPreviewSection />
      <TestimonialsSection />
      <CTASection />
      
    </>
  );
}