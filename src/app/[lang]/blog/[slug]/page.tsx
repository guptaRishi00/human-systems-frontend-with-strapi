import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ChevronRight } from "lucide-react";
import ReactMarkdown from "react-markdown"; 
import { getBlogDataBySlug, getAllBlogSlugs } from "@/data/loader";
import { getStrapiURL } from "@/utils/get-strapi-url";

// 1. Tell Next.js which slugs to generate pages for
export async function generateStaticParams() {
  const strapiData = await getAllBlogSlugs();
  const blogs = strapiData?.data || [];
  return blogs.map((b: any) => ({
    slug: b.attributes?.slug || b.slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string; lang: string }>;
}) {
  const { slug, lang } = await params;
  
  // 2. Fetch data from Strapi
  const strapiData = await getBlogDataBySlug(slug, lang);
  const blogData = strapiData?.data?.[0]; // Get the first item from array

  if (!blogData) notFound();

  // 3. Extract attributes
  const blog = blogData.attributes || blogData;

  const imageUrl = blog.image?.data?.attributes?.url || blog.image?.url;
  const fullImageUrl = imageUrl ? `${getStrapiURL()}${imageUrl}` : null;

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric"
  });

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Refined, Minimal Top Nav */}
      <nav className="pt-8 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href={`/${lang}/blog`}
            className="group flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-[#013228] transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </Link>
          <div className="hidden md:flex items-center gap-2 text-xs font-medium text-gray-400">
            <span>Blog</span>
            <ChevronRight size={12} />
            <span className="text-[#013228] font-bold">{blog.tag}</span>
          </div>
        </div>
      </nav>

      {/* 2. Impactful Header Section */}
      <header className="pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.3em] uppercase border border-[#E3FFCD] bg-[#E3FFCD] text-[#013228] rounded-full">
            {blog.tag}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#013228] mb-8 leading-[1.1]">
            {blog.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
            {blog.content_title}
          </p>

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 py-6 border-y border-gray-200">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-[#013228]">
                By {blog.author}
              </span>
            </div>

            <div className="flex items-center gap-6 text-xs font-bold tracking-widest text-[#013228] uppercase">
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-gray-400" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-gray-400" />
                {blog.read}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Hero Image */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="relative aspect-21/10 md:aspect-21/9 rounded-[32px] overflow-hidden bg-gray-100 shadow-xl shadow-gray-200">
          {fullImageUrl && (
            <Image
              src={fullImageUrl}
              alt={blog.title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          )}
        </div>
      </section>

      {/* 4. Markdown Content Renderer */}
      <article className="max-w-3xl mx-auto px-6 pb-32">
        {/* We use prose classes from Tailwind Typography to style the markdown output automatically */}
        <div className="prose prose-lg md:prose-xl prose-stone w-full max-w-none 
                    prose-headings:text-[#013228] prose-headings:font-bold 
                    prose-p:text-gray-600 prose-p:leading-[1.8]
                    prose-a:text-[#013228]">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
