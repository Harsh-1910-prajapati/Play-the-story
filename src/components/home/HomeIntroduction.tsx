"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const CATEGORIES = [
  { name: "WEDDINGS", href: "/#work" },
  { name: "EVENTS", href: "/#work" },
  { name: "PORTRAITS", href: "/#work" },
  { name: "COMMERCIAL", href: "/#work" },
  { name: "CONTENT", href: "/services#content" },
  { name: "FILMS", href: "/films" },
];

export function HomeIntroduction() {
  return (
    <section className="py-24 sm:py-32 bg-[#25231F] border-b border-[#25231F]/10 relative overflow-hidden">
      {/* Editorial Watermark Detail */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] text-white font-serif text-[18vw] leading-none whitespace-nowrap">
        STORIES
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B39B7A] mb-6 font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Philosophy</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F5F1EA] font-light leading-[1.12] tracking-wide mb-8">
          WE DON&apos;T JUST TAKE PICTURES.<br />
          WE TELL STORIES.
        </h2>

        <div className="w-16 h-[1.5px] bg-[#B39B7A] mx-auto mb-8" />

        <p className="text-sm sm:text-base md:text-lg text-[#D8C9B5] font-light leading-relaxed max-w-3xl mx-auto mb-14">
          From intimate moments to grand celebrations, personal portraits to powerful brand films — we create visuals that feel real, cinematic and unmistakably yours.
        </p>

        {/* Visual Category Ribbon */}
        <div className="pt-6 border-t border-[#D8C9B5]/20 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm uppercase tracking-[0.25em] font-medium text-[#D8C9B5]">
          {CATEGORIES.map((cat, idx) => (
            <React.Fragment key={cat.name}>
              <Link
                href={cat.href}
                className="hover:text-[#B39B7A] transition-colors py-1 hover:underline underline-offset-8"
              >
                {cat.name}
              </Link>
              {idx < CATEGORIES.length - 1 && (
                <span className="text-white/20 select-none">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
