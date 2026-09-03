"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DateCheckerModal } from "@/components/ui/DateCheckerModal";
import { Calendar, Compass, ChevronDown } from "lucide-react";

export function HomeHero() {
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);

  const scrollToStories = () => {
    const el = document.getElementById("featured-story");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative h-screen min-h-[680px] w-full flex items-center justify-center overflow-hidden">
        {/* Cinematic Background Image with LCP Optimization */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=85&w=2160&auto=format&fit=crop"
            alt="Play The Story Luxury Wedding Couple"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] motion-reduce:animate-none"
          />

          {/* Luxury Editorial Dark Gradient Overlays */}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/70" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/30 to-black/80" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center mt-12 sm:mt-16">
          {/* Subtle Location & Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#c5a880]/30 text-[#c5a880] text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-ping" />
            <span>Ahmedabad • Gujarat • Worldwide Destination Weddings</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.14em] uppercase text-[#fbf9f5] font-light leading-[1.08] mb-3 sm:mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Play The Story
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.35em] text-[#c5a880] font-sans font-medium mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            Wedding Photography & Films
          </p>

          {/* Emotional Narrative Statement */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#e7e2d7] font-serif italic leading-relaxed font-light mb-10 px-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            &ldquo;We don&apos;t just capture weddings. We preserve the emotions, people and moments that make your story yours.&rdquo;
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-7 duration-700 delay-400">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsDateModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(197,168,128,0.25)]"
            >
              <Calendar className="w-4 h-4 text-black" />
              Check Your Wedding Date
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#featured-story"
              onClick={(e) => {
                e.preventDefault();
                scrollToStories();
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 border-white/20 hover:border-[#c5a880]"
            >
              <Compass className="w-4 h-4 text-[#c5a880]" />
              Explore Our Stories
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToStories}
          aria-label="Scroll to featured story"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#a6a095] hover:text-[#c5a880] flex flex-col items-center gap-2 transition-colors cursor-pointer group"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans group-hover:text-[#c5a880]">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#c5a880]" />
        </button>
      </section>

      {/* Hero Date Checker Modal */}
      <DateCheckerModal
        isOpen={isDateModalOpen}
        onClose={() => setIsDateModalOpen(false)}
      />
    </>
  );
}
