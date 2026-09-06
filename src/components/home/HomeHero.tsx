"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DateCheckerModal } from "@/components/ui/DateCheckerModal";
import { ChevronDown } from "lucide-react";

export function HomeHero() {
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);

  const scrollToStories = () => {
    const el = document.getElementById("featured-story");
    if (el) {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      el.scrollIntoView({ behavior });
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
          <div className="absolute inset-0 bg-[#25231F]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#25231F]/85 via-transparent to-[#25231F]/35" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#25231F]/10 to-[#25231F]/45" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center mt-12 sm:mt-16">
          {/* Subtle Location & Studio Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#25231F]/60 backdrop-blur-md border border-[#B39B7A]/30 text-[#B39B7A] text-[10px] sm:text-xs uppercase tracking-[0.28em] mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B39B7A] animate-ping" />
            <span>AHMEDABAD · GUJARAT · INDIA · WORLDWIDE</span>
          </div>

          {/* Main Title: EVERY STORY DESERVES A FRAME. */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.08em] uppercase text-[#25231F] font-light leading-[1.05] mb-4 sm:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            EVERY STORY<br className="hidden sm:inline" /> DESERVES A FRAME.
          </h1>

          {/* Supporting Text: Photography • Films • Content */}
          <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.35em] text-[#B39B7A] font-sans font-medium mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            Photography • Films • Content
          </p>

          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#F5F1EA]/80 font-sans font-medium mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-250">
            Weddings · Brands · People · Stories
          </p>

          {/* Studio Narrative Statement */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#D8C9B5] font-serif italic leading-relaxed font-light mb-10 px-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            &ldquo;From intimate moments to grand celebrations, personal portraits to powerful brand films — we create visuals that feel real, cinematic and unmistakably yours.&rdquo;
          </p>

          {/* CTAs: EXPLORE OUR WORK ↓ & LET'S TALK */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-7 duration-700 delay-400">
            <Button
              variant="primary"
              size="lg"
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("work") || document.getElementById("featured-story");
                if (el) {
                  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
                  el.scrollIntoView({ behavior });
                }
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(179,155,122,0.25)] tracking-widest text-xs uppercase"
            >
              <span>EXPLORE OUR WORK</span>
              <span className="text-base font-bold">↓</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 border-[#25231F]/25 hover:border-[#B39B7A] tracking-widest text-xs uppercase"
            >
              <span>LET&apos;S TALK</span>
              <span className="text-[#B39B7A]">→</span>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToStories}
          aria-label="Scroll to featured story"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#8A8175] hover:text-[#B39B7A] flex flex-col items-center gap-2 transition-colors cursor-pointer group"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans group-hover:text-[#B39B7A]">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 animate-pulse text-[#B39B7A]" />
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
