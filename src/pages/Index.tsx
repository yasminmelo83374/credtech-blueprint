import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WhatIsSection } from "@/components/sections/WhatIsSection";
import { ForWhoSection } from "@/components/sections/ForWhoSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ProofsSection } from "@/components/sections/ProofsSection";
import { InvestmentSection } from "@/components/sections/InvestmentSection";
import { ResponsibilitySection } from "@/components/sections/ResponsibilitySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const Index = () => (
  <main className="bg-background text-foreground overflow-x-hidden">
    <HeroSection />
    <ProblemSection />
    <WhatIsSection />
    <ForWhoSection />
    <TimelineSection />
    <ProofsSection />
    <InvestmentSection />
    <ResponsibilitySection />
    <FinalCTASection />
  </main>
);

export default Index;
