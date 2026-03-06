"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";

const comparisonData = [
    {
        category: "Core HR",
        features: [
            { name: "Employee Profiles", starter: true, pro: true, enterprise: true },
            { name: "Custom Profile Fields", starter: false, pro: true, enterprise: true },
            { name: "Contract Management", starter: true, pro: true, enterprise: true },
            { name: "Onboarding Checklists", starter: true, pro: true, enterprise: true },
            { name: "Offboarding Checklists", starter: false, pro: true, enterprise: true },
        ],
    },
    {
        category: "Leave & Documents",
        features: [
            { name: "Leave Request & Approval", starter: true, pro: true, enterprise: true },
            { name: "Shared Team Calendar", starter: true, pro: true, enterprise: true },
            { name: "Document Vault (HR Vault)", starter: true, pro: true, enterprise: true },
            { name: "Document Expiration Alerts", starter: false, pro: true, enterprise: true },
        ],
    },
    {
        category: "Performance & Payroll",
        features: [
            { name: "Goal Setting (OKRs/KPIs)", starter: false, pro: true, enterprise: true },
            { name: "Performance Reviews", starter: false, pro: true, enterprise: true },
            { name: "360-Degree Feedback", starter: false, pro: false, enterprise: true },
            { name: "Payroll Automation", starter: false, pro: true, enterprise: true },
            { name: "Expense Management", starter: false, pro: true, enterprise: true },
        ],
    },
    {
        category: "Administration",
        features: [
            { name: "Role-Based Access (RBAC)", starter: true, pro: true, enterprise: true },
            { name: "Custom Workflows", starter: false, pro: false, enterprise: true },
            { name: "API Access", starter: false, pro: false, enterprise: true },
            { name: "Audit Logs", starter: false, pro: true, enterprise: true },
            { name: "White-Label Branding", starter: false, pro: false, enterprise: true },
        ],
    },
    {
        category: "Support",
        features: [
            { name: "Email Support", starter: true, pro: true, enterprise: true },
            { name: "Priority Support", starter: false, pro: true, enterprise: true },
            { name: "Dedicated Account Manager", starter: false, pro: false, enterprise: true },
            { name: "SLA Guarantee", starter: false, pro: false, enterprise: true },
        ],
    },
];

const CheckIcon = () => (
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E3FFCD]">
        <Check size={14} className="text-[#013228]" />
    </div>
);

const XIcon = () => (
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
        <X size={14} className="text-gray-300" />
    </div>
);

export default function PricingComparison() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-20 px-6 bg-[#F9FBF8]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Compare Plans
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
                        A detailed breakdown of features across all plans.
                    </p>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#013228] text-[#013228] font-bold text-sm hover:bg-[#013228] hover:text-[#E3FFCD] transition-all"
                    >
                        {isOpen ? "Hide Comparison" : "Show Full Comparison"}
                    </button>
                </div>

                {isOpen && (
                    <div className="overflow-x-auto rounded-[32px] border border-gray-200 bg-white animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <table className="w-full min-w-[640px]">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="text-left p-6 text-sm font-bold text-gray-400 uppercase tracking-widest w-[40%]">
                                        Feature
                                    </th>
                                    <th className="p-6 text-center text-sm font-bold text-gray-900 uppercase tracking-widest">
                                        Starter
                                    </th>
                                    <th className="p-6 text-center text-sm font-bold text-[#013228] uppercase tracking-widest bg-[#E3FFCD]/20">
                                        Professional
                                    </th>
                                    <th className="p-6 text-center text-sm font-bold text-gray-900 uppercase tracking-widest">
                                        Enterprise
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((group) => (
                                    <React.Fragment key={group.category}>
                                        <tr className="bg-gray-50/50">
                                            <td
                                                colSpan={4}
                                                className="px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#013228]"
                                            >
                                                {group.category}
                                            </td>
                                        </tr>
                                        {group.features.map((feature, fi) => (
                                            <tr
                                                key={fi}
                                                className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                                            >
                                                <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                                                    {feature.name}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <div className="flex justify-center">
                                                        {feature.starter ? <CheckIcon /> : <XIcon />}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-center bg-[#E3FFCD]/10">
                                                    <div className="flex justify-center">
                                                        {feature.pro ? <CheckIcon /> : <XIcon />}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <div className="flex justify-center">
                                                        {feature.enterprise ? <CheckIcon /> : <XIcon />}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    );
}
