"use client";
import { useState } from "react";
import { Check } from "lucide-react";

const pricingData = [
  {
    title: "Starter",
    description: "For small teams getting started with modern HR management",
    monthly: "9",
    yearly: "7",
    features: [
      "Core HR & Employee Profiles",
      "Leave & Absence Management",
      "Employee Self-Service Portal",
      "Document Management (HR Vault)",
      "Up to 25 Employees",
    ],
  },
  {
    title: "Professional",
    badge: "Most Popular",
    description:
      "For growing businesses needing full HR automation and payroll",
    monthly: "19",
    yearly: "15",
    features: [
      "All Starter Features",
      "Performance Management & OKRs",
      "Expense Management",
      "Payroll Automation & Payslips",
      "Up to 100 Employees",
    ],
  },
  {
    title: "Enterprise",
    description:
      "For large organizations requiring custom workflows and integrations",
    monthly: "39",
    yearly: "29",
    features: [
      "All Professional Features",
      "Custom Workflows & Templates",
      "Advanced Analytics & Reporting",
      "API Access & Integrations",
      "Unlimited Employees",
    ],
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="w-full min-h-screen bg-white">
      <section
        style={{ backgroundImage: `url("/pricing-bg-1.svg")` }}
        className="w-full bg-[#04231d] bg-cover bg-center rounded-t-[50px] min-h-screen py-20 px-6 text-white overflow-hidden"
      >
        {/* --- Header Section --- */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold border border-emerald-500/20 rounded-full bg-emerald-950/40 text-emerald-400 uppercase tracking-widest">
            Pricing Plans
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your Ideal HR Plan
          </h2>
          <p className="text-emerald-100/60 text-lg max-w-2xl mx-auto">
            Flexible pricing tailored for businesses of all sizes — from
            startups to enterprise. All plans include multi-tenant security and
            GDPR compliance.
          </p>

          {/* --- Toggle Switch --- */}
          <div className="flex items-center justify-center mt-12 gap-6">
            <span className="text-xs font-bold text-emerald-400 tracking-wider">
              SAVE 20%
            </span>
            <div className="bg-[#062d26] p-1 rounded-full flex items-center border border-emerald-800/50 shadow-inner">
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  isAnnual
                    ? "bg-[#d1e5c4] text-[#04231d]"
                    : "text-emerald-100/50 hover:text-white"
                }`}
              >
                BILL ANNUALLY
              </button>
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  !isAnnual
                    ? "bg-[#d1e5c4] text-[#04231d]"
                    : "text-emerald-100/50 hover:text-white"
                }`}
              >
                BILL MONTHLY
              </button>
            </div>
          </div>
        </div>

        {/* --- Pricing Cards Grid --- */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <div
              key={plan.title}
              className="relative bg-[#0a2e26]/80 backdrop-blur-sm rounded-[32px] p-8 border border-emerald-800/30 flex flex-col transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500/30"
            >
              {/* Badge Ribbon */}
              {plan.badge && (
                <div className="absolute top-6 right-0 bg-[#d1e5c4] text-[#04231d] text-[10px] font-black px-4 py-1.5 rounded-l-md shadow-lg">
                  {plan.badge.toUpperCase()}
                  <div className="absolute right-0 top-full w-0 h-0 border-t-[4px] border-t-[#a7bc9b] border-r-[4px] border-r-transparent"></div>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-bold tracking-tighter">
                  ${isAnnual ? plan.yearly : plan.monthly}
                </span>
                <span className="text-emerald-100/60 text-sm font-medium">
                  Per Employee/Month
                </span>
              </div>

              <p className="text-emerald-100/70 text-sm mb-8 leading-relaxed">
                {plan.description}
              </p>

              <div className="h-px bg-emerald-800/40 mb-8" />

              <div className="flex-grow">
                <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-6 text-emerald-50">
                  Core Features
                </h4>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-emerald-100/50 text-sm leading-snug"
                    >
                      <Check
                        size={16}
                        className="text-emerald-500 mt-0.5 shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-4 rounded-full font-bold text-xs tracking-widest transition-all duration-300 bg-[#163b34] text-white border border-emerald-700/50 hover:bg-[#c1d5b4] hover:text-[#04231d] hover:border-transparent cursor-pointer `}
              >
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
