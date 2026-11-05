import { CtaBand } from "@/components/cta-band";
import { CommunityCollageSection } from "@/components/sections/community-collage";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import {
  CityToCitySection,
  GatherWithUsSection,
  GetInvolvedPreviewSection,
  HomeHeroSection,
  ScrollMandateSection,
  ScriptureStripSection,
  VisionMandateSection,
  YoungMinistersForumSection,
} from "@/components/sections/home-sections";

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <ScriptureStripSection />
      <ScrollMandateSection />
      <VisionMandateSection />
      <CommunityCollageSection />
      <CityToCitySection />
      <GatherWithUsSection />
      <GetInvolvedPreviewSection />
      <YoungMinistersForumSection />
      <FaqAccordion />
      <CtaBand />
    </>
  );
}
