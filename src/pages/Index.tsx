import CVNavigation from "@/components/CVNavigation";
import CVHero from "@/components/CVHero";
import CVExperience from "@/components/CVExperience";
import CVEducation from "@/components/CVEducation";
import CVCertifications from "@/components/CVCertifications";
import CVSkills from "@/components/CVSkills";
import CVContact from "@/components/CVContact";
import CVFooter from "@/components/CVFooter";
import { Toaster } from "@/components/ui/toaster";
import AnimatedSection from "@/components/ui/animated-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CVNavigation />
      <CVHero />
      
      <AnimatedSection animationType="fadeInUp" delay={200}>
        <CVExperience />
      </AnimatedSection>
      
      <AnimatedSection animationType="fadeInUp" delay={400}>
        <CVEducation />
      </AnimatedSection>
      
      <AnimatedSection animationType="fadeInUp" delay={600}>
        <CVCertifications />
      </AnimatedSection>
      
      <AnimatedSection animationType="fadeInUp" delay={800}>
        <CVSkills />
      </AnimatedSection>
      
      <AnimatedSection animationType="fadeInUp" delay={1000}>
        <CVContact />
      </AnimatedSection>
      
      <AnimatedSection animationType="fadeInUp" delay={1200}>
        <CVFooter />
      </AnimatedSection>
      
      <Toaster />
    </div>
  );
};

export default Index;
