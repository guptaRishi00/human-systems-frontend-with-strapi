import React from "react";
import { ArrowRight } from "lucide-react";

const CtaSection = () => (
    <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#E3FFCD] rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-[#013228] mb-8 relative z-10">
                Ready to humanize your <br /> HR operations?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <button className="w-full sm:w-auto bg-[#013228] text-[#E3FFCD] px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-[#013228]/10">
                    Get Started Now
                    <ArrowRight size={20} />
                </button>
                <button className="w-full sm:w-auto border-2 border-[#013228] text-[#013228] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#013228] hover:text-[#E3FFCD] transition-all">
                    Contact Sales
                </button>
            </div>

            {/* Decorative shapes */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#013228]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#013228]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
    </section>
);

export default CtaSection;
