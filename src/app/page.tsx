import { SiteHeader } from "@/components/landing/header";
import {
  HeroSection,
  PartnersSection,
  StatsBar,
} from "@/components/landing/hero";
import { OpportunityDiscovery } from "@/components/landing/opportunity";
import { ResumeUploadSection } from "@/components/landing/resume-upload";
import {
  ForCollegesSection,
  ForEmployersSection,
} from "@/components/landing/audiences";
import {
  AppShowcaseSection,
  DownloadAppSection,
  ReadyNextSection,
  SiteFooter,
  SupportSection,
} from "@/components/landing/showcase-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <StatsBar />
        <PartnersSection />
        <OpportunityDiscovery />
        <ResumeUploadSection />
        <ForCollegesSection />
        <ForEmployersSection />
        <AppShowcaseSection />
        <DownloadAppSection />
        <SupportSection />
        <ReadyNextSection />
      </main>
      <SiteFooter />
    </>
  );
}
