import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ResourceCard from "@/components/resources/ResourceCard";
import { getAllCompliances } from "@/data/loader";

export const metadata = {
  title: "Compliance | Human Systems",
  description: "Stay up to date with HR compliance and labor laws.",
};

export default async function CompliancePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const response = await getAllCompliances(lang);
  const complainces = response?.data || [];

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] selection:bg-emerald-100 pb-24">
      <header className="pt-24 pb-16 px-6 md:px-10 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#013228] transition-colors mb-12 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold border border-gray-200 rounded-full text-[#013228] uppercase tracking-widest bg-gray-50">
              Legal & Regulartory
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#013228]">
              HR <span className="text-gray-900">Compliance</span>
            </h1>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Guides and tools to ensure your business stays compliant in a
              changing world.
            </p>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {complainces.length > 0 ? (
            complainces.map((item: any) => {
              const formattedResource = {
                id: item.id.toString(),
                category: item.tag || "Compliance",
                title: item.title,
                slug: item.slug,
                excerpt: item.description,
                date: item.date,
                readTime: item.read,
                content: item.content || "",
              };

              return (
                <div key={item.id} className="h-full">
                  <ResourceCard resource={formattedResource as any} basePath="/resources/compliance" />
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 font-medium">No compliances available currently.</p>
          )}
        </div>
      </section>
    </main>
  );
}
