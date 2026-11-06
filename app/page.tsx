import { CtaBand } from "@/components/cta-band";
import { CommunityCollageSection } from "@/components/sections/community-collage";
import { CurvedGallerySection } from "@/components/sections/curved-gallery";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { LeadershipSection } from "@/components/sections/leadership-section";
import { PentecostClaritySection } from "@/components/sections/pentecost-clarity";
import { RealMovementVideosSection } from "@/components/sections/real-movement-videos";
import { RealTestimoniesSection } from "@/components/sections/real-testimonies";
import {
  CityToCitySection,
  GatherWithUsSection,
  GetInvolvedPreviewSection,
  HomeHeroSection,
  ScrollMandateSection,
  ScriptureStripSection,
  VisionMandateSection,
  YoungBelieversForumSection,
} from "@/components/sections/home-sections";

export default function HomePage() {
  return (
    <>
      {/* 1. Home Hero with right-positioned photography & 3-second instant clarity snapshot */}
      <HomeHeroSection />

      {/* 2. Scripture strip & kinetic typography marquee */}
      <ScriptureStripSection />

      {/* 3. Clarity in Seconds: What is Pentecost? Who is it for? What happens here? */}
      <PentecostClaritySection />

      {/* 4. Movement in Motion: Real video reels with play/pause and sound controls */}
      <RealMovementVideosSection />

      {/* 5. Our Mandate in Focus: Scroll text reveal */}
      <ScrollMandateSection />

      {/* 6. The Vision & Interactive Pillars */}
      <VisionMandateSection />

      {/* 7. 3D Orbital Curved Gallery: 7 real gathering photos reacting to scroll */}
      <CurvedGallerySection />

      {/* 8. Real Stories & Testimonies from Aberdeen, Glasgow & Campuses */}
      <RealTestimoniesSection />

      {/* 9. City to City & Spiritual Rhythm */}
      <CityToCitySection />

      {/* 10. Community Collage Grid */}
      <CommunityCollageSection />

      {/* 11. Gatherings List */}
      <GatherWithUsSection />

      {/* 12. Five Practical Ways to Act: Pray, Mobilise, Serve, Host, Follow Up */}
      <GetInvolvedPreviewSection />

      {/* 13. Leadership & Stewards: Who is behind Pentecost & Credibility */}
      <LeadershipSection isHomeTeaser />

      {/* 14. Young Believers Forum Spotlight */}
      <YoungBelieversForumSection />

      {/* 15. FAQ Accordion */}
      <FaqAccordion />

      {/* 16. Dual Concave Arc-Split CTA Band */}
      <CtaBand />
    </>
  );
}
