"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const CATEGORIES = [
  { name: "WEDDINGS", href: "/#services" },
  { name: "PRE-WEDDINGS", href: "/#services" },
  { name: "EVENTS", href: "/#services" },
  { name: "PORTRAITS", href: "/#services" },
  { name: "BRANDS", href: "/#services" },
  { name: "FILMS", href: "/#services" },
  { name: "CONTENT", href: "/#services" },
];

export function HomeIntroduction() {
  return (
    <section className="py-24 sm:py-32 bg-[#f5f1ea] border-b border-[#25231f]/10 relative overflow-hidden">
      {/* Editorial Watermark Detail */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.035] text-[#25231f] font-serif text-[18vw] leading-none whitespace-nowrap">
        CREATE
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8a8175] mb-6 font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>What we create</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#25231f] font-light leading-[1.12] tracking-wide mb-8">
          EVERY STORY DESERVES A FRAME.
        </h2>

        <div className="w-16 h-[1.5px] bg-[#b39b7a] mx-auto mb-8" />

        <p className="text-sm sm:text-base md:text-lg text-[#8a8175] font-light leading-relaxed max-w-3xl mx-auto mb-14">
          Weddings · Brands · People · Stories
        </p>

        {/* Visual Category Ribbon */}
        <div className="pt-6 border-t border-[#25231f]/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm uppercase tracking-[0.25em] font-medium text-[#8a8175]">
          {CATEGORIES.map((cat, idx) => (
            <React.Fragment key={cat.name}>
              <Link
                href={cat.href}
                className="hover:text-[#25231f] transition-colors py-1 hover:underline underline-offset-8"
              >
                {cat.name}
              </Link>
              {idx < CATEGORIES.length - 1 && (
                <span className="text-[#25231f]/20 select-none">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
