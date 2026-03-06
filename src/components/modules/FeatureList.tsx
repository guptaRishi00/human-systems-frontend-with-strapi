import React from "react";
import { HiOutlineCheck } from "react-icons/hi";
import type { Module } from "@/data/modules";

export default function FeatureList({ module }: { module: Module }) {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-[#013228]" />
                        <span className="text-sm font-bold uppercase tracking-widest text-[#013228]">
                            Complete Feature List
                        </span>
                        <div className="h-px w-8 bg-[#013228]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        What&apos;s Included
                    </h2>
                    <p className="max-w-2xl text-gray-500 text-lg leading-relaxed">
                        Every feature in <strong>{module.shortTitle}</strong> is designed for
                        enterprise-grade reliability with an intuitive interface.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {module.features.map((feature, i) => (
                        <div
                            key={i}
                            className="group flex items-start gap-4 p-6 rounded-[24px] border border-gray-200 bg-[#F9FBF8] hover:bg-[#013228] hover:border-transparent transition-all duration-500 cursor-default"
                        >
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#E3FFCD] group-hover:bg-white/10 flex items-center justify-center transition-colors duration-500">
                                <HiOutlineCheck
                                    size={20}
                                    className="text-[#013228] group-hover:text-[#E3FFCD] transition-colors duration-500"
                                />
                            </div>
                            <div>
                                <p className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors duration-500">
                                    {feature}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
