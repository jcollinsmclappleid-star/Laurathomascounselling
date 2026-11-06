import { HomeAboutLaura } from "@/components/home/home-about-laura";
import { HomeBelowFold } from "@/components/home/home-below-fold";
import { HomeEntry } from "@/components/home/home-entry";

export function HomePageContent() {
  return (
    <>
      <HomeEntry />
      <HomeAboutLaura />
      <HomeBelowFold />
    </>
  );
}
