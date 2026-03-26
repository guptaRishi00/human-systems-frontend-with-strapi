import React from "react";

const TeamSection = () => {
  const team = [
    {
      name: "Parfait MOUTSINGA",
      role: "Founder & CEO",
      img: "/six.jpeg",
    },
    {
      name: "Mathilde ZOBA",
      role: "Business Developer",
      img: "two.png",
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

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#013228]" />
              <span className="text-sm font-bold uppercase tracking-widest text-[#013228]">
                The Leadership
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
              Meet our <span className="text-[#013228]">experts.</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm">
            A diverse group of thinkers and makers dedicated to building the
            future of HR.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group cursor-pointer ">
              <div className="relative aspect-square rounded-[32px] overflow-hidden mb-6 bg-gray-100">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover lg:h-90 grayscale-0 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
              <p className="text-gray-500 text-sm font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
