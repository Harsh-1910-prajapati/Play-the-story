"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HomeAboutSnippet() {
  return (
    <section className="py-24 sm:py-32 bg-[#25231F] border-t border-[#25231F]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#25231F]/15 shadow-2xl bg-[#25231F]">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                alt="Behind Play The Story"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#25231F]/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-[#F5F1EA] border border-[#B39B7A]/30 p-5 hidden sm:block shadow-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B39B7A] block font-mono">
                STUDIO CRAFT
              </span>
              <span className="font-serif text-sm text-[#25231F] mt-1 block">
                AHMEDABAD · WORLDWIDE
              </span>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B39B7A] font-medium font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE STUDIO</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F5F1EA] font-light leading-[1.1] uppercase tracking-wide">
              BEHIND<br />PLAY THE STORY
            </h2>

            <div className="w-14 h-[1.5px] bg-[#B39B7A]" />

            <div className="text-xs uppercase tracking-[0.25em] text-[#B39B7A] font-mono">
              PHOTOGRAPHY + FILMS + EDITING
            </div>

            <p className="text-sm sm:text-base text-[#D8C9B5] font-light leading-relaxed">
              Play The Story began with a simple belief: the best images come from trust. We work quietly, listen closely, and make space for people to be themselves — from a wedding day to a brand film.
            </p>

            <p className="text-sm sm:text-base text-[#D8C9B5] font-light leading-relaxed">
              Based in Ahmedabad and working worldwide, we bring an editorial eye and a deeply human process to every frame.
            </p>

            <div className="pt-4">
              <Button href="/about" variant="outline" size="md" className="text-[#F5F1EA] border-[#B39B7A]/60 hover:bg-[#D8C9B5] hover:text-[#25231F]">
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
