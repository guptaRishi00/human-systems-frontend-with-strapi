import React from "react";
import { Heart, ShieldCheck, Rocket, Lightbulb } from "lucide-react";

export default function ValuesSection({ data }: { data?: any }) {
  const { title, description, cards } = data || {};

  const staticValues = [
    {
      title: "Human First",
      desc: "We design every feature with the end-user in mind, ensuring accessibility and ease of use.",
      icon: <Heart size={32} />,
    },
    {
      title: "Security by Design",
      desc: "Your data is your most valuable asset. We protect it with enterprise-grade encryption.",
      icon: <ShieldCheck size={32} />,
    },
    {
      title: "Constant Innovation",
      desc: "The world of work is changing rapidly. Our platform evolves daily to meet new challenges.",
      icon: <Rocket size={32} />,
    },
    {
      title: "Simplicity Wins",
      desc: "We believe in removing friction. If it's not intuitive, it doesn't belong in Human Systems.",
      icon: <Lightbulb size={32} />,
    },
  ];

  const displayValues = cards && cards.length > 0 ? cards : staticValues;

  return (
    <section className="py-24 bg-[#013228] rounded-[50px] mx-4 my-8 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {title || "Our Core Values"}
          </h2>
          <p className="text-emerald-100/60 max-w-xl mx-auto">
            {description ||
              "The principles that guide every line of code we write and every partnership we build."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayValues.map((v: any, i: number) => {
            const iconIndex = i % staticValues.length;
            return (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors group cursor-default"
              >
                <div className="text-[#E3FFCD] mb-6 group-hover:scale-110 transition-transform origin-left duration-300">
                  {staticValues[iconIndex].icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-sm text-emerald-100/60 leading-relaxed">
                  {v.description || v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
