"use client";

import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const faqs = [
    {
        q: "Can I switch plans at any time?",
        a: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, changes take effect immediately. When downgrading, changes apply at the start of your next billing cycle.",
    },
    {
        q: "Is there a free trial available?",
        a: "Yes! All plans come with a 14-day free trial — no credit card required. You'll have full access to all features during the trial period.",
    },
    {
        q: "What happens after my contract ends?",
        a: "After your contract ends, you can choose to renew or your account will transition to a read-only mode. Your data is securely retained for 90 days, giving you time to export.",
    },
    {
        q: "How does per-employee pricing work?",
        a: "You're billed based on the number of active employees in your system. Deactivated employees are not counted. Billing is calculated at the start of each month.",
    },
    {
        q: "Is my data secure and GDPR compliant?",
        a: "Absolutely. All data is encrypted at rest and in transit. We are fully GDPR compliant with data processing agreements, regular backups, and the ability to export or delete data on request.",
    },
    {
        q: "Do you offer post-delivery support?",
        a: "Yes, we provide 30 days of free bug-fix and adjustment support after MVP delivery. We also offer an Annual Maintenance Contract (AMC) at 20% of the project cost.",
    },
];

export default function PricingFaq({ data }: { data?: any }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const { tag, title, description, cards } = data || {};
    const displayFaqs = cards && cards.length > 0 ? cards : faqs;

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-8 bg-[#013228]" />
                        <span className="text-sm font-bold uppercase tracking-widest text-[#013228]">
                            {tag || "FAQ"}
                        </span>
                        <div className="h-px w-8 bg-[#013228]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {title || "Common Questions"}
                    </h2>
                    <p className="text-gray-500 text-lg">
                        {description || "Everything you need to know about plans, billing, and support."}
                    </p>
                </div>

                <div className="space-y-4">
                    {displayFaqs.map((faq: any, index: number) => (
                        <div
                            key={index}
                            className={`rounded-[20px] border transition-all duration-300 overflow-hidden ${openIndex === index
                                    ? "border-[#013228] bg-[#F9FBF8] shadow-lg"
                                    : "border-gray-200 bg-white hover:border-gray-300"
                                }`}
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span
                                    className={`text-lg font-bold transition-colors ${openIndex === index ? "text-[#013228]" : "text-gray-900"
                                        }`}
                                >
                                    {faq.question || faq.q}
                                </span>
                                <HiOutlineChevronDown
                                    size={20}
                                    className={`shrink-0 ml-4 transition-transform duration-300 ${openIndex === index
                                            ? "rotate-180 text-[#013228]"
                                            : "text-gray-400"
                                        }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <p className="text-gray-600 leading-relaxed">{faq.answer || faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
