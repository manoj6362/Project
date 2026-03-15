import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Khushi Construction & Land Developers | Premium Home Building Services",
  description:
    "From basement to dream home — complete construction solutions with premium materials and experienced engineers.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsGrid showAll={false} />
      <ProcessTimeline />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
