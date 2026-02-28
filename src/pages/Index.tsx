import { S1_HeadlineSection } from "@/components/sections/S1_HeadlineSection";
import { S2_ConsciousnessSection } from "@/components/sections/S2_ConsciousnessSection";
import { S3_ProblemSection } from "@/components/sections/S3_ProblemSection";
import { S4_OpportunitySection } from "@/components/sections/S4_OpportunitySection";
import { S5_MethodSection } from "@/components/sections/S5_MethodSection";
import { S6_PhasesSection } from "@/components/sections/S6_PhasesSection";
import { S7_ResultSection } from "@/components/sections/S7_ResultSection";
import { S8_ForWhoSection } from "@/components/sections/S8_ForWhoSection";
import { S9_FinalCTASection } from "@/components/sections/S9_FinalCTASection";
import { SalesFooter } from "@/components/sections/SalesFooter";

const Index = () => (
  <main className="bg-background text-foreground overflow-x-hidden">
    <S1_HeadlineSection />
    <S2_ConsciousnessSection />
    <S3_ProblemSection />
    <S4_OpportunitySection />
    <S5_MethodSection />
    <S6_PhasesSection />
    <S7_ResultSection />
    <S8_ForWhoSection />
    <S9_FinalCTASection />
    <SalesFooter />
  </main>
);

export default Index;
