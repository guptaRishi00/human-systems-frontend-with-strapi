"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const testimonialContent = [
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60",
    role: "HR Director",
    name: "Sophie Laurent",
    company: "TechFlow Systems",
    content:
      "Human Systems has completely transformed how we manage our HR operations. The leave management and payroll automation alone have saved us countless hours each month.",
  },
  {
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60",
    role: "Operations Manager",
    name: "Marc Dubois",
    company: "Global Logistics",
    content:
      "The employee self-service portal has dramatically reduced our HR team's workload. Employees can now access their payslips and update profiles without any manual intervention.",
  },
];

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => setMounted(true), []);

  const nextStep = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonialContent.length);
  }, []);

  const prevStep = useCallback(() => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonialContent.length) % testimonialContent.length,
    );
  }, []);

  if (!mounted) return <section className="py-24 bg-[#F9FBF8] h-[550px]" />;

  return (
    <section className="py-24 px-6 bg-[#F9FBF8]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[32px] p-8 lg:p-16 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left: Image (4 columns) */}
            <div className="lg:col-span-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#013228]/5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={testimonialContent[currentIndex].img}
                      alt={testimonialContent[currentIndex].name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Content (8 columns) */}
            <div className="lg:col-span-8 flex flex-col h-full">
              {/* Top: The Quote */}
              <div className="flex-grow">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-3xl md:text-4xl font-bold text-gray-900 leading-[1.2] mb-12">
                      "{testimonialContent[currentIndex].content}"
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom: Attribution & Navigation Controls Combined */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-gray-100">
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-[#013228]">
                    {testimonialContent[currentIndex].name}
                  </h4>
                  <p className="text-gray-500 font-medium">
                    {testimonialContent[currentIndex].role} —{" "}
                    {testimonialContent[currentIndex].company}
                  </p>
                </div>

                {/* Navigation Unit */}
                <div className="flex items-center gap-6">
                  {/* Pagination Dots */}
                  <div className="flex gap-2">
                    {testimonialContent.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === currentIndex
                            ? "w-8 bg-[#013228]"
                            : "w-2 bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Arrow Buttons */}
                  <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-100">
                    <button
                      onClick={prevStep}
                      className="p-3 rounded-full hover:bg-white hover:shadow-sm text-gray-500 hover:text-[#013228] transition-all"
                    >
                      <HiOutlineArrowLeft size={20} />
                    </button>
                    <button
                      onClick={nextStep}
                      className="p-3 rounded-full hover:bg-white hover:shadow-sm text-gray-500 hover:text-[#013228] transition-all"
                    >
                      <HiOutlineArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
