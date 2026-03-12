import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowNarrowRight, HiCheckCircle } from "react-icons/hi";

export default function EmployeeSelfService() {
  return (
    <section className="w-full py-24 bg-[#F9FBF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-[#013228]"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#013228]">
                Self-Service Portal
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.05]">
                Everything your team needs,{" "}
                <span className="text-[#013228]">in one place.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Streamline your HR workflow. Give employees the autonomy to
                manage their documentation, view benefits, and stay connected
                with the entire team—zero admin intervention required.
              </p>
            </div>

            {/* Feature List */}
            <div className="mt-12 space-y-8 relative">
              {/* Corrected vertical line - using left-3 for standard spacing */}
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gray-200"></div>

              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#013228] border-4 border-white shadow-sm flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E3FFCD]"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Unified Profile & Payslips
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  A secure vault for all personal documents. Employees can
                  instantly download tax forms and payslip history.
                </p>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-gray-300 shadow-sm z-10"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Interactive Org Directory
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Visualize your entire team structure. Search by department,
                  role, or name to find exactly who you're looking for.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link href={"/contact"}>
                <button className="group flex items-center gap-3 border border-[#013228] text-gray-900 px-8 py-4 rounded-full hover:bg-[#013228] cursor-pointer hover:text-white font-bold transition-all">
                  Start Empowering Your Team
                  <HiOutlineArrowNarrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Visual Area - FIXED */}
          <div className="relative">
            {/* Soft decorative background glow */}

            <div className="relative rounded-t-4xl border border-gray-200 overflow-hidden bg-white">
              {/* Minimal Browser Header Decoration */}

              {/* Image Container - Using aspect ratio instead of h-screen */}
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full">
                <Image
                  src="/image4.png"
                  alt="Employee Portal UI"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Floating Detail Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-xl border border-gray-100 hidden md:block max-w-[200px] z-20">
              <div className="flex items-center gap-2 text-[#013228] mb-2">
                <HiCheckCircle size={18} />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Automated
                </span>
              </div>
              <p className="text-xs font-semibold text-gray-900 leading-snug">
                Employee details sync across all modules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
