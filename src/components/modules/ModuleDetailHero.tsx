"use client";

import React from "react";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import type { Module } from "@/data/modules";

export default function ModuleDetailHero({ module }: { module: Module }) {
  return (
    <section className="pt-32 pb-16 bg-[#013228] text-white">
      <div className="max-w-300 mx-auto px-6">
        <Link
          href="/modules"
          className="inline-flex items-center gap-2 text-[#E3FFCD]/60 hover:text-[#E3FFCD] transition-colors mb-8 group text-xs font-bold uppercase tracking-widest"
        >
          <HiOutlineArrowNarrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Modules
        </Link>

        <div className="max-w-3xl">
          <span className="text-[#E3FFCD] text-xs font-bold uppercase tracking-[0.2em]">
            Module {String(module.moduleNumber).padStart(2, "0")}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 tracking-tight">
            {module.title}
          </h1>
          <p className="text-lg text-emerald-100/60 leading-relaxed font-medium">
            {module.objective}
          </p>
        </div>
      </div>
    </section>
  );
}
