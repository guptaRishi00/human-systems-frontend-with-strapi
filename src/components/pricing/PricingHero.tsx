import React from "react";

const PricingHero = () => (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#F9FBF8] rounded-b-[50px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <div className="w-fit mx-auto px-4 py-1 border border-gray-900 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <p className="text-sm font-semibold uppercase tracking-widest">
                    Pricing Plans
                </p>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                Simple, Transparent <br />
                <span className="text-[#013228]">Pricing.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
                Flexible plans tailored for businesses of all sizes — from startups to
                enterprise. All plans include multi-tenant security and GDPR compliance.
            </p>
        </div>

        {/* Decorative blurs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E3FFCD]/30 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E3FFCD]/20 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
    </section>
);

export default PricingHero;
