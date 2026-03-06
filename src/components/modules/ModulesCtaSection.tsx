import React from "react";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ModulesCtaSection = () => (
    <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#013228] rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-[#E3FFCD] mb-4 relative z-10">
                Ready to get started?
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 relative z-10">
                See how Socle RH can transform your HR operations with our
                comprehensive suite of modules.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <Link href="/contact">
                    <button className="w-full sm:w-auto bg-[#E3FFCD] text-[#013228] px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-black/10">
                        Request a Demo
                        <HiOutlineArrowNarrowRight size={20} />
                    </button>
                </Link>
                <Link href="/about">
                    <button className="w-full sm:w-auto border-2 border-[#E3FFCD] text-[#E3FFCD] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#E3FFCD] hover:text-[#013228] transition-all">
                        Learn About Us
                    </button>
                </Link>
            </div>

            {/* Decorative shapes */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-[#E3FFCD]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#E3FFCD]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/2 right-10 w-24 h-24 bg-[#E3FFCD]/5 rounded-full"></div>
        </div>
    </section>
);

export default ModulesCtaSection;
