import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getStrapiURL } from "@/utils/get-strapi-url";

export default function SharedCta({ data }: { data?: any }) {
  const { title, image, getStartedNow, contact } = data || {};

  const bgImage = image?.data?.attributes?.url || image?.url;
  const fullBgImage = bgImage
    ? `${getStrapiURL()}${bgImage}`
    : "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80";

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden group">
        {/* --- Background Image & Overlay --- */}
        <div className="absolute inset-0 z-0">
          <Image
            src={fullBgImage}
            alt={title || "Team Collaboration"}
            fill
            className="object-cover opacity-30 grayscale group-hover:scale-105 transition-transform duration-700"
            unoptimized
          />
        </div>

        {/* --- Content --- */}
        <div className="relative z-10">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-[#013228] mb-8 leading-tight">
            {title ? (
              title.split("\\n").map((line: string, i: number) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))
            ) : (
              <>
                Ready to humanize your <br /> HR operations?
              </>
            )}
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={getStartedNow?.href ? `/${getStartedNow.href}` : "/contact"}
              className="w-full sm:w-auto"
            >
              <button className="group/btn w-full cursor-pointer bg-[#013228] text-[#E3FFCD] px-8 py-5 lg:px-10 lg:py-4 rounded-2xl font-bold lg:text-lg text-md hover:shadow-2xl hover:shadow-[#013228]/20 transition-all flex items-center justify-center gap-2">
                {getStartedNow?.text || "Get Started Now"}
                <ArrowRight
                  size={20}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </button>
            </Link>

            <Link
              href={contact?.href ? `/${contact.href}` : "/contact"}
              className="w-full sm:w-auto"
            >
              <button className="w-full cursor-pointer border-2 border-[#013228] text-[#013228] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#013228] hover:text-[#E3FFCD] transition-all bg-white/20 backdrop-blur-sm">
                {contact?.text || "Contact Sales"}
              </button>
            </Link>
          </div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#013228]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#013228]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
    </section>
  );
}
