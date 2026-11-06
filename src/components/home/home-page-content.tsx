import { HomeAboutLaura } from "@/components/home/home-about-laura";
import { HomeBelowFold } from "@/components/home/home-below-fold";
import { HomeEntry } from "@/components/home/home-entry";
import { HomeIntroSection } from "@/components/home/home-intro-section";
import { HomeRecentBlogs } from "@/components/home/home-recent-blogs";

export function HomePageContent() {
  return (
    <>
      <HomeEntry />
      <HomeIntroSection />
      <HomeAboutLaura />
      <HomeRecentBlogs />
      <HomeBelowFold />
    </>
  );
}
