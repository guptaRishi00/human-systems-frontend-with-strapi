"use client";

import React from "react";
import Link from "next/link";
import {
    HiOutlineUserGroup,
    HiOutlineCalendar,
    HiOutlineShieldCheck,
    HiOutlineChartBar,
    HiOutlineCurrencyDollar,
    HiOutlineClipboardList,
    HiOutlineViewGrid,
    HiOutlineCog,
    HiOutlineServer,
    HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import type { Module } from "@/data/modules";

const iconMap: Record<string, React.ReactElement> = {
    users: <HiOutlineUserGroup size={40} />,
    shield: <HiOutlineShieldCheck size={40} />,
    calendar: <HiOutlineCalendar size={40} />,
    layout: <HiOutlineViewGrid size={40} />,
    chart: <HiOutlineChartBar size={40} />,
    receipt: <HiOutlineClipboardList size={40} />,
    dollar: <HiOutlineCurrencyDollar size={40} />,
    settings: <HiOutlineCog size={40} />,
    server: <HiOutlineServer size={40} />,
};

export default function ModuleDetailHero({ module }: { module: Module }) {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#013228]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Back link */}
                <Link
                    href="/modules"
                    className="inline-flex items-center gap-2 text-[#E3FFCD]/70 hover:text-[#E3FFCD] transition-colors mb-10 group"
                >
                    <HiOutlineArrowNarrowLeft
                        size={20}
                        className="group-hover:-translate-x-1 transition-transform"
                    />
                    <span className="text-sm font-bold uppercase tracking-widest">
                        All Modules
                    </span>
                </Link>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="flex-1">
                        {/* Module badge */}
                        <div className="w-fit px-4 py-1 border border-[#E3FFCD]/30 rounded-full mb-6">
                            <p className="text-sm font-semibold uppercase tracking-widest text-[#E3FFCD]/80">
                                Module {String(module.moduleNumber).padStart(2, "0")} —{" "}
                                {module.category === "functional"
                                    ? "Functional"
                                    : "Platform Admin"}
                            </p>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
                            {module.title}
                        </h1>

                        <p className="max-w-2xl text-lg text-white/60 leading-relaxed mb-8">
                            {module.objective}
                        </p>

                        {/* Quick stats */}
                        <div className="flex gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-center">
                                <p className="text-2xl font-extrabold text-[#E3FFCD]">
                                    {module.features.length}
                                </p>
                                <p className="text-xs uppercase tracking-[0.15em] font-bold text-white/40 mt-1">
                                    Features
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-center">
                                <p className="text-2xl font-extrabold text-[#E3FFCD]">
                                    {module.featureGroups.reduce(
                                        (acc, g) => acc + g.stories.length,
                                        0
                                    )}
                                </p>
                                <p className="text-xs uppercase tracking-[0.15em] font-bold text-white/40 mt-1">
                                    User Stories
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-center">
                                <p className="text-2xl font-extrabold text-[#E3FFCD]">
                                    {module.featureGroups.length}
                                </p>
                                <p className="text-xs uppercase tracking-[0.15em] font-bold text-white/40 mt-1">
                                    Categories
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Icon */}
                    <div className="hidden lg:flex items-center justify-center w-40 h-40 bg-white/5 border border-white/10 rounded-[40px] text-[#E3FFCD] shrink-0">
                        {iconMap[module.icon]}
                    </div>
                </div>
            </div>

            {/* Decorative */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E3FFCD]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E3FFCD]/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/3"></div>
        </section>
    );
}
