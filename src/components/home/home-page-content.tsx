import { HomeAboutLaura } from "@/components/home/home-about-laura";
import { HomeBelowFold } from "@/components/home/home-below-fold";
import { HomeEntry } from "@/components/home/home-entry";
import { HomeIntroSection } from "@/components/home/home-intro-section";
import { HomeParentologySection } from "@/components/home/home-parentology-section";

export function HomePageContent() {
  return (
    <>
      <HomeEntry />
      <HomeIntroSection />
      <HomeAboutLaura />
      <HomeParentologySection />
      <HomeBelowFold />
    </>
  );
}
