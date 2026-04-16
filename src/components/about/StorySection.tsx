import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getStrapiURL } from "@/utils/get-strapi-url";

export default function StorySection({ data }: { data?: any }) {
  const { tag, title, content, image, cta, card } = data || {};

  const storyImage = image?.data?.attributes?.url || image?.url;
  const fullStoryImage = storyImage
    ? `${getStrapiURL()}${storyImage}`
    : "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop";

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] w-full relative overflow-hidden">
              <img
                src={fullStoryImage}
                alt={title || "Our Team"}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#013228] p-8 rounded-3xl text-[#E3FFCD] shadow-xl hidden md:block">
              <p className="text-4xl font-bold">{card?.title || "10+"}</p>
              <p className="text-xs uppercase tracking-widest font-bold opacity-80">
                {card?.description || "Years of Innovation"}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#013228]" />
              <span className="text-sm font-bold uppercase tracking-widest text-[#013228]">
                {tag || "How we started"}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              {title ? (
                title.split("\\n").map((line: string, i: number) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))
              ) : (
                <>
                  From a spreadsheet to a{" "}
                  <span className="text-[#013228]">global platform.</span>
                </>
              )}
            </h2>

            {content ? (
              <div className="space-y-4">
                {content.split("\\n\\n").map((paragraph: string, idx: number) => (
                  <p key={idx} className="text-lg text-gray-500 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <>
                <p className="text-lg text-gray-500 leading-relaxed">
                  What started as a custom tool for a small team in Berlin has evolved
                  into a comprehensive HR ecosystem trusted by hundreds of
                  organizations worldwide. We noticed that existing HR software was
                  too rigid and disconnected from the actual needs of employees.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Our mission is to provide an all-in-one workspace where HR teams can
                  manage everything from payroll to performance with precision, while
                  employees enjoy a seamless, modern interface.
                </p>
              </>
            )}

            <div className="pt-4">
              <Link href={cta?.href ? `/${cta.href}` : "/contact"}>
                <button className="flex cursor-pointer items-center gap-2 bg-[#013228] rounded-full py-4 px-8 font-bold text-[#E3FFCD] hover:scale-105 transition-transform duration-300">
                  {cta?.text || "Join our Journey"}
                  <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
