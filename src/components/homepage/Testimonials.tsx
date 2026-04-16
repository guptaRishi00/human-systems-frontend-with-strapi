"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { getStrapiURL } from "@/utils/get-strapi-url";

interface Testimonial {
  img: string;
  role: string;
  name: string;
  company: string;
  content: string;
}

export default function InfiniteTestimonials({ data }: any) {
  const { title, description, cards } = data || {};


  const testimonials = (cards && cards.length > 0)
    ? cards.map((c: any) => ({
      img: c.image?.url ? `${getStrapiURL()}${c.image.url}` : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600",
      role: c.designation || c.role || "Role",
      name: c.name || "Name",
      company: c.company || "Company",
      content: c.content || c.description,
    }))
    : []

  const isCarousel = testimonials.length > 3;

  // Triple the array to ensure we always have content to show during the jump if it's a carousel
  const extendedTestimonials = isCarousel ? [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ] : testimonials;

  const [currentIndex, setCurrentIndex] = useState(isCarousel ? testimonials.length : 0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [isRTL, setIsRTL] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const checkRTL = () => {
      setIsRTL(document.documentElement.dir === "rtl");
    };
    checkRTL();
    const observer = new MutationObserver(checkRTL);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    });
    return () => observer.disconnect();
  }, []);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 640) setVisibleCards(2);
      else setVisibleCards(1);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const nextStep = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev: number) => prev + 1);
  };

  const prevStep = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev: number) => prev - 1);
  };

  useEffect(() => {
    if (isCarousel && !isPaused) {
      intervalRef.current = setInterval(nextStep, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isCarousel, isPaused, isTransitioning]);

  // The Magic: Seamless Teleport Logic
  const handleUpdate = () => {
    // If we've slid past the end of the middle set
    if (currentIndex >= testimonials.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(testimonials.length);
    }
    // If we've slid before the start of the middle set
    else if (currentIndex < testimonials.length) {
      setIsTransitioning(false);
      setCurrentIndex(testimonials.length * 2 - 1);
    }
  };

  // Re-enable transitions after the "jump" has happened in state
  useEffect(() => {
    if (!isTransitioning) {
      // Smallest possible delay to let the jump happen before re-enabling animation
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  return (
    <section className="py-24 px-6 bg-[#F9FBF8] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold text-[#013228]">
              {title || "What our clients say"}
            </h2>
            <p className="text-gray-500 mt-2">
              {description || "Trusted by leading HR teams worldwide."}
            </p>
          </div>

          {isCarousel && (
            <div className="flex items-center bg-white rounded-full p-1 border border-gray-100 shadow-sm">
              <button
                onClick={prevStep}
                className="p-3 rounded-full hover:bg-gray-50 text-gray-500 transition-all active:scale-90"
              >
                {isRTL ? (
                  <HiOutlineArrowRight size={20} />
                ) : (
                  <HiOutlineArrowLeft size={20} />
                )}
              </button>
              <button
                onClick={nextStep}
                className="p-3 rounded-full hover:bg-gray-50 text-gray-500 transition-all active:scale-90"
              >
                {isRTL ? (
                  <HiOutlineArrowLeft size={20} />
                ) : (
                  <HiOutlineArrowRight size={20} />
                )}
              </button>
            </div>
          )}
        </div>

        <div
          className="relative -mx-3"
          onMouseEnter={() => isCarousel && setIsPaused(true)}
          onMouseLeave={() => isCarousel && setIsPaused(false)}
        >
          <motion.div
            className={`flex ${!isCarousel ? "flex-wrap md:flex-nowrap justify-start lg:justify-start" : ""}`}
            initial={false}
            animate={{
              x: isCarousel ? `${isRTL ? "" : "-"}${currentIndex * (100 / visibleCards)}%` : 0,
            }}
            onAnimationComplete={isCarousel ? handleUpdate : undefined}
            transition={
              isCarousel && isTransitioning
                ? { duration: 0.7, ease: [0.32, 0.72, 0, 1] }
                : { duration: 0 } // This makes the jump invisible
            }
          >
            {extendedTestimonials.map((item: Testimonial, index: number) => (
              <div
                key={index}
                style={{ flex: `0 0 ${100 / visibleCards}%` }}
                className={`px-3 ${!isCarousel ? "w-full md:w-auto mb-6 md:mb-0" : ""}`}
              >
                <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm h-full flex flex-col group hover:border-[#013228]/20 transition-all duration-300">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      unoptimized
                    />
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8 grow">
                    "{item.content}"
                  </p>

                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="font-bold text-[#013228]">{item.name}</h4>
                    <p className="text-sm text-gray-500 font-medium">
                      {item.role} <span className="text-gray-300 mx-1">|</span>{" "}
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
