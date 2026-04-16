import React from "react";
import Link from "next/link";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { modules, type Module } from "@/data/modules";

export default function ModuleNavigation({ module }: { module: any }) {
    const currentIndex = modules.findIndex((m) => m.slug === module.slug);
    const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
    const nextModule =
        currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

    return (
        <section className="py-12 px-6 bg-white">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
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
        </section>
    );
}
