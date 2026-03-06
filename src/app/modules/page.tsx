import ModulesHero from "@/components/modules/ModulesHero";
import ModuleGrid from "@/components/modules/ModuleGrid";
import SharedCta from "@/components/shared/SharedCta";

export const metadata = {
    title: "Modules — Socle RH | Human Systems",
    description:
        "Explore all 9 modules of the Socle RH SaaS platform — from Core HR and Leave Management to Payroll, Performance, and Platform Administration.",
};

export default function ModulesPage() {
    return (
        <main className="min-h-screen bg-white">
            <ModulesHero />
            <ModuleGrid />
            <SharedCta />
        </main>
    );
}
