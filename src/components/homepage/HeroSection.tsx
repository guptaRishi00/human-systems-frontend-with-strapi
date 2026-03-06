import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function HeroSection() {
  const bgImage = "/hero-bg-3.svg";

  return (
    <div
      // 1. Added "relative" and "overflow-hidden" to contain the absolute image
      className="relative w-full h-screen rounded-t-[50px] flex items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-[85rem] mx-auto px-8">
        {/* Left Content - Reduced width to ensure it doesn't overlap image */}
        <div className="flex items-start flex-col gap-8 max-w-lg lg:max-w-xl relative z-10">
          <div className="w-fit px-4 py-1 border border-gray-900 rounded-full">
            <p className="text-lg">Streamline Your HR Operations</p>
          </div>

          <h1 className="text-5xl lg:text-6xl leading-tight font-bold text-gray-900">
            The All-in-One HR SaaS Platform
          </h1>

          <p className="text-lg text-gray-400">
            Human Systems empowers businesses with a scalable, secure, and
            modular HR platform from employee management and leave tracking to
            payroll, performance reviews, and beyond.
          </p>

          <div className="flex items-center gap-5">
            <button className="flex items-center gap-2 bg-[#013228] rounded-full py-3 px-5 text-sm uppercase tracking-wide font-semibold text-[#E3FFCD]">
              Request a Demo
              <IoIosArrowRoundForward size={30} />
            </button>

            <button className="flex items-center gap-2 border border-gray-900 rounded-full py-3 px-5 text-sm uppercase tracking-wide font-semibold text-gray-900 hover:bg-gray-900 hover:text-white hover:border-white transition-all">
              Learn More
              <IoIosArrowRoundForward size={30} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Right Image - Positioned absolutely to the right edge */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <Image
          src="/dashboard-1.png"
          alt="Hero Illustration"
          width={500} // Increased size to let it "bleed"
          height={500}
          className="w-180 h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
