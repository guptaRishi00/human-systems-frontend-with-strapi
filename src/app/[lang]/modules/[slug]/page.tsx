import { notFound } from "next/navigation";
import { getModuleDataBySlug, getAllModuleSlugs } from "@/data/loader";
import ModuleDetailHero from "@/components/modules/ModuleDetailHero";
import FeatureList from "@/components/modules/FeatureList";
import UserStories from "@/components/modules/UserStories";
import SharedCta from "@/components/shared/SharedCta";
import ModuleNavigation from "@/components/modules/ModuleNavigation";

// 1. Generate static routes from Strapi
export async function generateStaticParams() {
  const strapiData = await getAllModuleSlugs();
  const modules = strapiData?.data || [];
  
  return modules.map((m: any) => ({ 
    slug: m.attributes?.slug || m.slug 
  }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lang: string }>;
}) {
  const { slug, lang } = await params;
  const strapiData = await getModuleDataBySlug(slug, lang);
  const moduleData = strapiData?.data?.[0];
  
  if (!moduleData) return { title: "Module Not Found" };

  const moduleAttributes = moduleData.attributes || moduleData;

  return {
    title: `${moduleAttributes.title} — Socle RH | Human Systems`,
    description: moduleAttributes.objective,
  };
}

export default async function ModuleDetailPage({
  params,
}: {
  params: Promise<{ slug: string; lang: string }>;
}) {
  const { slug, lang } = await params;
  
  // 2. Fetch the specific module data
  const strapiData = await getModuleDataBySlug(slug, lang);
  const moduleData = strapiData?.data?.[0]; 

  if (!moduleData) {
    notFound();
  }

  // 3. Extract attributes
  const moduleAttributes = moduleData.attributes || moduleData;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section: Standardized full-width image with brand overlay */}
      <ModuleDetailHero module={moduleAttributes} />

      {/* 2. Content Container: Uses clean white background with dark green accents */}
      <div className="relative">
        {/* Section Divider: A bold brand line to separate the technical 
                   objective from the feature breakdown.
                */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-px w-full bg-[#013228]/10" />
        </div>

        {/* 3. Feature Breakdown: High-contrast list on white */}
        <FeatureList module={moduleAttributes} />

        {/* Dynamic Transition: A subtle background shift to F9FBF8 (Off-White) 
                   to frame the interactive User Stories section.
                */}
        <div className="bg-[#F9FBF8] border-y border-[#013228]/5">
          <UserStories module={moduleAttributes} />
        </div>

        {/* 4. Sequential Navigation: Standardized "Previous/Next" module flow */}
        <ModuleNavigation module={moduleAttributes} />
      </div>

      {/* 5. Final CTA: Global shared call-to-action component */}
      <SharedCta />
    </main>
  );
}
