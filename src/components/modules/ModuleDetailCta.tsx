"use client";

import React from "react";
import Link from "next/link";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { modules, type Module } from "@/data/modules";

export default function ModuleDetailCta({ module }: { module: Module }) {
    const currentIndex = modules.findIndex((m) => m.slug === module.slug);
    const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
    const nextModule =
        currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                {/* Navigation between modules */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 mb-16">
                    {prevModule ? (
                        <Link
                            href={`/modules/${prevModule.slug}`}
                            className="group flex items-center gap-4 p-6 rounded-[24px] border border-gray-200 hover:border-[#013228] transition-all flex-1"
                        >
                            <HiOutlineArrowNarrowLeft
                                size={20}
                                className="text-gray-400 group-hover:text-[#013228] group-hover:-translate-x-1 transition-all"
                            />
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                                    Previous
                                </p>
                                <p className="text-lg font-bold text-gray-900 group-hover:text-[#013228] transition-colors">
                                    {prevModule.shortTitle}
                                </p>
                            </div>
                        </Link>
                    ) : (
                        <div className="flex-1" />
                    )}

                    {nextModule ? (
                        <Link
                            href={`/modules/${nextModule.slug}`}
                            className="group flex items-center justify-end gap-4 p-6 rounded-[24px] border border-gray-200 hover:border-[#013228] transition-all flex-1 text-right"
                        >
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                                    Next
                                </p>
                                <p className="text-lg font-bold text-gray-900 group-hover:text-[#013228] transition-colors">
                                    {nextModule.shortTitle}
                                </p>
                            </div>
                            <HiOutlineArrowNarrowRight
                                size={20}
                                className="text-gray-400 group-hover:text-[#013228] group-hover:translate-x-1 transition-all"
                            />
                        </Link>
                    ) : (
                        <div className="flex-1" />
                    )}
                </div>

                {/* CTA */}
                <div className="bg-[#E3FFCD] rounded-[40px] p-12 lg:p-16 text-center relative overflow-hidden">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-[#013228] mb-6 relative z-10">
                        Interested in {module.shortTitle}?
                    </h2>
                    <p className="text-[#013228]/60 text-lg max-w-lg mx-auto mb-8 relative z-10">
                        Get a personalized demo and see how this module integrates with the
                        rest of the Socle RH platform.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                        <Link href="/contact">
                            <button className="w-full sm:w-auto bg-[#013228] text-[#E3FFCD] px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-[#013228]/10">
                                Request a Demo
                                <HiOutlineArrowNarrowRight size={20} />
                            </button>
                        </Link>
                        <Link href="/modules">
                            <button className="w-full sm:w-auto border-2 border-[#013228] text-[#013228] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#013228] hover:text-[#E3FFCD] transition-all">
                                View All Modules
                            </button>
                        </Link>
                    </div>

                    {/* Decorative shapes */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-[#013228]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#013228]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
                </div>
            </div>
        </section>
    );
}
