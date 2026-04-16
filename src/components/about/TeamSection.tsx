import React from "react";
import { getStrapiURL } from "@/utils/get-strapi-url";

export default function TeamSection({ data }: { data?: any }) {
  const { tag, title, description, cards } = data || {};

  const staticTeam = [
    {
      name: "Parfait MOUTSINGA",
      role: "Founder & CEO",
      img: "/six.jpeg",
    },
    {
      name: "Mathilde ZOBA",
      role: "Business Developer",
      img: "/two.png",
    },
    {
      name: "Pascal Aumont",
      role: "Global Account Manager",
      img: "/seven.jpeg",
    },
    {
      name: "Morane MANUBIN",
      role: "Customer Success",
      img: "/four.png",
    },
  ];

  const displayTeam = cards && cards.length > 0 ? cards : staticTeam;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#013228]" />
              <span className="text-sm font-bold uppercase tracking-widest text-[#013228]">
                {tag || "The Leadership"}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
              {title ? (
                title.split("\\n").map((line: string, i: number) => (
                  <span key={i}>
                    {line}
                    <br className="hidden lg:block" />
                  </span>
                ))
              ) : (
                <>
                  Meet our <span className="text-[#013228]">experts.</span>
                </>
              )}
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm">
            {description ||
              "A diverse group of thinkers and makers dedicated to building the future of HR."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayTeam.map((member: any, i: number) => {
            // Check if dynamically uploaded from Strapi or statically provided
            const hasStrapiMedia = member.image?.data?.attributes?.url || member.image?.url;
            const fullImageSrc = hasStrapiMedia
              ? `${getStrapiURL()}${hasStrapiMedia}`
              : member.img || "/fallback-avatar.png";

            return (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-square rounded-[32px] overflow-hidden mb-6 bg-gray-100">
                  <img
                    src={fullImageSrc}
                    alt={member.title || member.name}
                    className="w-full h-full object-cover lg:h-90 grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  {member.title || member.name}
                </h4>
                <p className="text-gray-500 text-sm font-medium">
                  {member.description || member.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
