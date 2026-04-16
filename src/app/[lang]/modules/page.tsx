import ModulesHero from "@/components/modules/ModulesHero";
import ModuleGrid from "@/components/modules/ModuleGrid";
import SharedCta from "@/components/shared/SharedCta";
import { getPageData } from "@/data/loader";

export const metadata = {
    title: "Modules — Socle RH | Human Systems",
    description:
        "Explore all 9 modules of the Socle RH SaaS platform — from Core HR and Leave Management to Payroll, Performance, and Platform Administration.",
};

export default async function ModulesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    
    // Fetch universal page content
    const response = await getPageData("modules", lang);
    const blocks = response?.data?.[0]?.blocks || [];

    const heroData = blocks.find((b: any) => b.__component === "shared.hero-section");
    const gridBlockData = blocks.find((b: any) => b.__component === "modules.all-modules");
    const ctaData = blocks.find((b: any) => b.__component === "shared.common-cta");

    return (
        <main className="min-h-screen bg-white">
            <ModulesHero data={heroData} />
            <ModuleGrid lang={lang} data={gridBlockData} />
            <SharedCta data={ctaData} />
        </main>
    );
}
