import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeBuild from "@/components/WhatWeBuild";
import CoreCapabilities from "@/components/CoreCapabilities";
import SolutionsOverview from "@/components/SolutionsOverview";
import FlagshipUseCase from "@/components/FlagshipUseCase";
import WhyThreeB from "@/components/WhyThreeB";
import IndustriesEcosystem from "@/components/IndustriesEcosystem";
import PartnershipCTA from "@/components/PartnershipCTA";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <WhatWeBuild />
      <CoreCapabilities />
      <SolutionsOverview />
      <FlagshipUseCase />
      <WhyThreeB />
      <IndustriesEcosystem />
      <PartnershipCTA />
      <SiteFooter />
    </div>
  );
};

export default Index;
