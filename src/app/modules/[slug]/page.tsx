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
export function generateMetadata({ params }: { params: { slug: string } }) {
    const module = getModuleBySlug(params.slug);
    if (!module) return { title: "Module Not Found" };

    return {
        title: `${module.title} — Socle RH | Human Systems`,
        description: module.objective,
    };
}

export default function ModuleDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const module = getModuleBySlug(params.slug);

    if (!module) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <ModuleDetailHero module={module} />
            <FeatureList module={module} />
            <UserStories module={module} />
            <ModuleNavigation module={module} />
            <SharedCta />
        </main>
    );
}
