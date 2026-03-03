import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const WhatWeBuild = lazy(() => import("@/components/WhatWeBuild"));
const CoreCapabilities = lazy(() => import("@/components/CoreCapabilities"));
const SolutionsOverview = lazy(() => import("@/components/SolutionsOverview"));
const FlagshipUseCase = lazy(() => import("@/components/FlagshipUseCase"));
const WhyThreeB = lazy(() => import("@/components/WhyThreeB"));
const IndustriesEcosystem = lazy(() => import("@/components/IndustriesEcosystem"));
const PartnershipCTA = lazy(() => import("@/components/PartnershipCTA"));
const SiteFooter = lazy(() => import("@/components/SiteFooter"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <Suspense fallback={<div className="min-h-[50vh]" />}>
        <WhatWeBuild />
        <CoreCapabilities />
        <SolutionsOverview />
        <FlagshipUseCase />
        <WhyThreeB />
        <IndustriesEcosystem />
        <PartnershipCTA />
        <SiteFooter />
      </Suspense>
    </div>
  );
};

export default Index;
