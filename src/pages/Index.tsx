import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WhyArchitectureSection } from "@/components/sections/WhyArchitectureSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhatIsSection } from "@/components/sections/WhatIsSection";
import { ForWhoSection } from "@/components/sections/ForWhoSection";
import { ProofsSection } from "@/components/sections/ProofsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PreValidationSection } from "@/components/sections/PreValidationSection";
import { InvestmentSection } from "@/components/sections/InvestmentSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ResponsibilitySection } from "@/components/sections/ResponsibilitySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => (
  <main className="bg-background text-foreground overflow-x-hidden">
    <HeroSection />
    <ProblemSection />
    <WhyArchitectureSection />
    <HowItWorksSection />
    <WhatIsSection />
    <ForWhoSection />
    <ProofsSection />
    <AboutSection />
    <PreValidationSection />
    <InvestmentSection />
    <FAQSection />
    <ResponsibilitySection />
    <FinalCTASection />
    <FooterSection />
  </main>
);

export default Index;
