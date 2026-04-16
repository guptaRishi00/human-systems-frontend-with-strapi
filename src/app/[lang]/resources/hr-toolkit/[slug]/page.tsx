import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ChevronRight } from "lucide-react";
import { getHRToolkitBySlug } from "@/data/loader";
import ReactMarkdown from "react-markdown";

export default async function ResourceDetailPage({
    params,
}: {
    params: Promise<{ slug: string; lang: string }>;
}) {
    const { slug, lang } = await params;
    const response = await getHRToolkitBySlug(slug, lang);
    const toolkitData = response?.data?.[0] || response?.data;

    if (!toolkitData) notFound();

    const { title, tag, description, date, read, content } = toolkitData;

    return (
        <main className="min-h-screen bg-white">
            <nav className="pt-24 pb-8 px-6 md:px-10 border-b border-gray-100">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link
                        href="/resources/hr-toolkit"
                        className="group flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-[#013228] transition-colors"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Toolkit
                    </Link>
                    <div className="hidden md:flex items-center gap-2 text-xs font-medium text-gray-400">
                        <span>Resources</span>
                        <ChevronRight size={12} />
                        <span className="text-[#013228] font-bold">HR Toolkit</span>
                    </div>
                </div>
            </nav>

            <header className="pt-16 pb-12 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.3em] uppercase border border-[#E3FFCD] bg-[#E3FFCD] text-[#013228] rounded-full">
                        {tag || "HR Toolkit"}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#013228] mb-8 leading-[1.1]">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
                        {description}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 py-6 border-y border-gray-200">
                        <div className="flex items-center gap-6 text-xs font-bold tracking-widest text-[#013228] uppercase">
                            <span className="flex items-center gap-2">
                                <Calendar size={14} className="text-gray-400" />
                                {date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={14} className="text-gray-400" />
                                {read}
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            <article className="max-w-3xl mx-auto px-6 pb-32">
                <div className="prose prose-lg md:prose-xl prose-stone w-full max-w-none 
                    prose-headings:text-[#013228] prose-headings:font-bold prose-headings:tracking-tight prose-headings:mt-12 prose-headings:mb-6
                    prose-p:text-gray-600 prose-p:leading-[1.8] prose-p:mb-8 prose-p:font-medium prose-p:text-lg md:prose-p:text-xl
                    prose-strong:text-[#013228] prose-strong:font-bold
                    prose-blockquote:border-[#85D036] prose-blockquote:bg-[#E3FFCD]/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-10 prose-blockquote:rounded-r-2xl prose-blockquote:text-[#013228] prose-blockquote:font-medium prose-blockquote:italic">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </article>
        </main>
    );
}
