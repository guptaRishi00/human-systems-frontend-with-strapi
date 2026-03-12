import { notFound } from "next/navigation";
import { modules, getModuleBySlug } from "@/data/modules";
import ModuleDetailHero from "@/components/modules/ModuleDetailHero";
import FeatureList from "@/components/modules/FeatureList";
import UserStories from "@/components/modules/UserStories";
import SharedCta from "@/components/shared/SharedCta";
import ModuleNavigation from "@/components/modules/ModuleNavigation";

// Generate static params for all modules
export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const module = getModuleBySlug(slug);
  if (!module) return { title: "Module Not Found" };

  return {
    title: `${module.title} — Socle RH | Human Systems`,
    description: module.objective,
  };
}

export default async function ModuleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const module = getModuleBySlug(slug);

  if (!module) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section: Standardized full-width image with brand overlay */}
      <ModuleDetailHero module={module} />

      {/* 2. Content Container: Uses clean white background with dark green accents */}
      <div className="relative">
        {/* Section Divider: A bold brand line to separate the technical 
                   objective from the feature breakdown.
                */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-px w-full bg-[#013228]/10" />
        </div>

        {/* 3. Feature Breakdown: High-contrast list on white */}
        <FeatureList module={module} />

        {/* Dynamic Transition: A subtle background shift to F9FBF8 (Off-White) 
                   to frame the interactive User Stories section.
                */}
        <div className="bg-[#F9FBF8] border-y border-[#013228]/5">
          <UserStories module={module} />
        </div>

        {/* 4. Sequential Navigation: Standardized "Previous/Next" module flow */}
        <ModuleNavigation module={module} />
      </div>

      {/* 5. Final CTA: Global shared call-to-action component */}
      <SharedCta />
    </main>
  );
}
