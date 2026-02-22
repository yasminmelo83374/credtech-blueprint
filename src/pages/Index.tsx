import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WhyArchitectureSection } from "@/components/sections/WhyArchitectureSection";
import { WhatIsSection } from "@/components/sections/WhatIsSection";
import { DeliverablesSection } from "@/components/sections/DeliverablesSection";
import { ForWhoSection } from "@/components/sections/ForWhoSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ProofsSection } from "@/components/sections/ProofsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PreValidationSection } from "@/components/sections/PreValidationSection";
import { InvestmentSection } from "@/components/sections/InvestmentSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ResponsibilitySection } from "@/components/sections/ResponsibilitySection";
import { ApplicationSection } from "@/components/sections/ApplicationSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const Index = () => (
  <main className="bg-background text-foreground overflow-x-hidden">
    <HeroSection />
    <ProblemSection />
    <WhyArchitectureSection />
    <WhatIsSection />
    <DeliverablesSection />
    <ForWhoSection />
    <TimelineSection />
    <ProofsSection />
    <AboutSection />
    <PreValidationSection />
    <InvestmentSection />
    <FAQSection />
    <ResponsibilitySection />
    <ApplicationSection />
    <FinalCTASection />
  </main>
);

export default Index;
