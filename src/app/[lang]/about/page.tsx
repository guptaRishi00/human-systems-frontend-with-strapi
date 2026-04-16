import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import StatsSection from "@/components/about/StatsSection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import SharedCta from "@/components/shared/SharedCta";
import { getPageData } from "@/data/loader";

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  const response = await getPageData("about", lang);
  const blocks = response?.data?.[0]?.blocks || [];

  const heroData = blocks.find((b: any) => b.__component === "shared.hero-section");
  const storyData = blocks.find((b: any) => b.__component === "about.how-we-started");
  const statsData = blocks.find((b: any) => b.__component === "about.stats");
  const valuesData = blocks.find((b: any) => b.__component === "about.our-core-values");
  const teamData = blocks.find((b: any) => b.__component === "about.the-leadership");
  const ctaData = blocks.find((b: any) => b.__component === "shared.common-cta");

  return (
    <main className="min-h-screen bg-white">
      <AboutHero data={heroData} />
      <StorySection data={storyData} />
      <StatsSection data={statsData} />
      <ValuesSection data={valuesData} />
      <TeamSection data={teamData} />
      <SharedCta data={ctaData} />
    </main>
  );
}
