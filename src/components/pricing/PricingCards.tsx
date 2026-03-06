"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const pricingData = [
    {
        title: "Starter",
        description: "For small teams getting started with modern HR management.",
        monthly: "9",
        yearly: "7",
        features: [
            "Core HR & Employee Profiles",
            "Leave & Absence Management",
            "Employee Self-Service Portal",
            "Document Management (HR Vault)",
            "Up to 25 Employees",
            "Email Support",
        ],
        cta: "Get Started",
    },
    {
        title: "Professional",
        badge: "Most Popular",
        description:
            "For growing businesses needing full HR automation and payroll.",
        monthly: "19",
        yearly: "15",
        features: [
            "All Starter Features",
            "Performance Management & OKRs",
            "Expense Management",
            "Payroll Automation & Payslips",
            "Custom Workflows & Templates",
            "Up to 100 Employees",
            "Priority Support",
        ],
        cta: "Get Started",
        highlighted: true,
    },
    {
        title: "Enterprise",
        description:
            "For large organizations requiring custom workflows, integrations, and dedicated support.",
        monthly: "39",
        yearly: "29",
        features: [
            "All Professional Features",
            "Advanced Analytics & Reporting",
            "API Access & Integrations",
            "Custom Branding & White-Label",
            "Dedicated Account Manager",
            "Unlimited Employees",
            "24/7 Support & SLA",
        ],
        cta: "Contact Sales",
    },
];

export default function PricingCards() {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Toggle */}
                <div className="flex items-center justify-center mb-16 gap-6">
                    <span
                        className={`text-xs font-bold tracking-wider transition-colors ${isAnnual ? "text-[#013228]" : "text-gray-400"
                            }`}
                    >
                        SAVE 20%
                    </span>
                    <div className="bg-gray-100 p-1 rounded-full flex items-center border border-gray-200">
                        <button
                            onClick={() => setIsAnnual(true)}
                            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${isAnnual
                                    ? "bg-[#013228] text-[#E3FFCD] shadow-lg"
                                    : "text-gray-500 hover:text-gray-800"
                                }`}
                        >
                            BILL ANNUALLY
                        </button>
                        <button
                            onClick={() => setIsAnnual(false)}
                            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${!isAnnual
                                    ? "bg-[#013228] text-[#E3FFCD] shadow-lg"
                                    : "text-gray-500 hover:text-gray-800"
                                }`}
                        >
                            BILL MONTHLY
                        </button>
                    </div>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingData.map((plan) => (
                        <div
                            key={plan.title}
                            className={`relative rounded-[40px] p-10 flex flex-col transition-all duration-500 hover:-translate-y-2 ${plan.highlighted
                                    ? "bg-[#013228] text-white shadow-[0_30px_60px_-15px_rgba(1,50,40,0.4)] scale-[1.02]"
                                    : "bg-[#F9FBF8] border border-gray-200 hover:shadow-xl"
                                }`}
                        >
                            {/* Badge */}
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E3FFCD] text-[#013228] text-[10px] font-black px-5 py-2 rounded-full shadow-lg uppercase tracking-widest">
                                    {plan.badge}
                                </div>
                            )}

                            <h3
                                className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900"
                                    }`}
                            >
                                {plan.title}
                            </h3>

                            <p
                                className={`text-sm mb-8 leading-relaxed ${plan.highlighted ? "text-white/60" : "text-gray-500"
                                    }`}
                            >
                                {plan.description}
                            </p>

                            {/* Price */}
                            <div className="flex items-baseline gap-2 mb-8">
                                <span
                                    className={`text-6xl font-extrabold tracking-tighter ${plan.highlighted ? "text-[#E3FFCD]" : "text-[#013228]"
                                        }`}
                                >
                                    ${isAnnual ? plan.yearly : plan.monthly}
                                </span>
                                <span
                                    className={`text-sm font-medium ${plan.highlighted ? "text-white/50" : "text-gray-400"
                                        }`}
                                >
                                    / employee / month
                                </span>
                            </div>

                            <div
                                className={`h-px mb-8 ${plan.highlighted ? "bg-white/10" : "bg-gray-200"
                                    }`}
                            />

                            {/* Features */}
                            <div className="flex-grow">
                                <h4
                                    className={`font-bold text-xs uppercase tracking-[0.2em] mb-6 ${plan.highlighted ? "text-[#E3FFCD]" : "text-[#013228]"
                                        }`}
                                >
                                    What&apos;s Included
                                </h4>
                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className={`flex items-start gap-3 text-sm leading-snug ${plan.highlighted ? "text-white/70" : "text-gray-600"
                                                }`}
                                        >
                                            <Check
                                                size={16}
                                                className={`mt-0.5 shrink-0 ${plan.highlighted
                                                        ? "text-[#E3FFCD]"
                                                        : "text-[#013228]"
                                                    }`}
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Button */}
                            <button
                                className={`w-full py-4 rounded-2xl font-bold text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${plan.highlighted
                                        ? "bg-[#E3FFCD] text-[#013228] hover:scale-105 shadow-xl"
                                        : "bg-[#013228] text-[#E3FFCD] hover:scale-105 shadow-lg shadow-[#013228]/10"
                                    }`}
                            >
                                {plan.cta}
                                <HiOutlineArrowNarrowRight size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
