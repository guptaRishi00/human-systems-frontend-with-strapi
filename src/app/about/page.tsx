"use client";

import React, { useState, useEffect } from "react";
import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import StatsSection from "@/components/about/StatsSection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import SharedCta from "@/components/shared/SharedCta";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main
      className={`min-h-screen bg-white transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <AboutHero />
      <StorySection />
      <StatsSection />
      <ValuesSection />
      <TeamSection />
      <SharedCta />
    </main>
  );
}
