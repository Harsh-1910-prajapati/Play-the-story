"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HomeAboutSnippet() {
  return (
    <section className="py-24 sm:py-32 bg-[#0c0c0c] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 shadow-2xl bg-black">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                alt="Behind Play The Story"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-[#161616] border border-[#c5a880]/30 p-5 hidden sm:block shadow-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] block font-mono">
                STUDIO CRAFT
              </span>
              <span className="font-serif text-sm text-[#fbf9f5] mt-1 block">
                AHMEDABAD · WORLDWIDE
              </span>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE STUDIO</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#fbf9f5] font-light leading-[1.1] uppercase tracking-wide">
              BEHIND<br />PLAY THE STORY
            </h2>

            <div className="w-14 h-[1.5px] bg-[#c5a880]" />

            <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-mono">
              PHOTOGRAPHY + FILMS + EDITING
            </div>

            <p className="text-sm sm:text-base text-[#d5d0c7] font-light leading-relaxed">
              We started Play The Story with one singular conviction: visual memories should not look staged, formulaic, or synthetic. Whether documenting a sacred three-day royal wedding, creating evocative couple portraits, or directing a modern brand film, we approach each frame with editorial discipline and human warmth.
            </p>

            <p className="text-sm sm:text-base text-[#a6a095] font-light leading-relaxed">
              Headquartered in Ahmedabad, Gujarat, our team travels worldwide, providing complete end-to-end cinematography, creative photography, and Hollywood-grade DaVinci color grading under one dedicated roof.
            </p>

            <div className="pt-4">
              <Button href="/about" variant="outline" size="md">
                <span className="flex items-center gap-2 uppercase tracking-widest text-xs">
                  <span>MORE ABOUT US</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
