import React from "react";

const TeamSection = () => {
    const team = [
        {
            name: "Marcus Thorne",
            role: "Founder & CEO",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        },
        {
            name: "Elena Rodriguez",
            role: "Head of Product",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        },
        {
            name: "Sarah Jenkins",
            role: "CTO",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
        },
        {
            name: "David Chen",
            role: "Customer Success",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
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
                        <div key={i} className="group cursor-pointer">
                            <div className="relative aspect-square rounded-[32px] overflow-hidden mb-6 bg-gray-100">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
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
