import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/floating/ScrollProgress";
import { BackToTop } from "@/components/floating/BackToTop";
import { FloatingContact } from "@/components/floating/FloatingContact";
import { StickyRegisterButton } from "@/components/floating/StickyRegisterButton";
import { BonusPopup } from "@/components/floating/BonusPopup";
import { Hero } from "@/sections/Hero";
import { StatsRow } from "@/sections/StatsRow";
import { TrendingCategories } from "@/sections/TrendingCategories";
import { FeaturedGames } from "@/sections/FeaturedGames";
import { FeatureCards } from "@/sections/FeatureCards";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { VIPProgram } from "@/sections/VIPProgram";
import { Rewards } from "@/sections/Rewards";
import { Testimonials } from "@/sections/Testimonials";
import { Community } from "@/sections/Community";
import { DownloadApp } from "@/sections/DownloadApp";
import { FAQ } from "@/sections/FAQ";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <AnnouncementBar />
      <Header />

      <main className="pb-20 sm:pb-0">
        <Hero />
        <StatsRow />
        <TrendingCategories />
        <FeaturedGames />
        <FeatureCards />
        <WhyChooseUs />
        <VIPProgram />
        <Rewards />
        <Testimonials />
        <Community />
        <DownloadApp />
        <FAQ />
      </main>

      <Footer />

      <BackToTop />
      <FloatingContact />
      <StickyRegisterButton />
      <BonusPopup />
    </>
  );
}
