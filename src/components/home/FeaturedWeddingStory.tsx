import React from "react";
import Image from "next/image";
import { WeddingStory } from "@/types";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

interface FeaturedWeddingStoryProps {
  story: WeddingStory;
}

export function FeaturedWeddingStory({ story }: FeaturedWeddingStoryProps) {
  return (
    <section id="featured-story" className="relative min-h-[82vh] flex items-end bg-[#25231f] overflow-hidden">
      {/* Editorial Decorative Background Details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

      <Image
        src={story.cover_image}
        alt={`${story.couple_names} featured story`}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#25231f]/90 via-[#25231f]/25 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* Section Pre-title */}
        <div className="text-left mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#c5a880] mb-3 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED STORY</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-8xl text-[#f5f1ea] font-light tracking-wide uppercase">
            FEATURED STORY
          </h2>
        </div>

        {/* Magazine Spread Layout */}
        <div className="max-w-xl">
          {/* Magazine Image Column */}
          <div className="hidden">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] w-full overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={story.cover_image}
                alt={`${story.couple_names} — Featured Story`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm border border-white/10 text-[10px] uppercase tracking-widest text-[#c5a880] px-3 py-1 font-mono">
                {story.category.toUpperCase()} / {story.location.toUpperCase()}
              </div>
            </div>

            {/* Floating Stamp / Monogram */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 w-24 h-24 bg-[#080808] border border-[#c5a880]/40 rounded-full items-center justify-center p-2 text-center shadow-xl">
              <div className="w-full h-full rounded-full border border-dashed border-[#c5a880]/40 flex flex-col items-center justify-center">
                <span className="text-[8px] uppercase tracking-widest text-[#a6a095]">Edition</span>
                <span className="font-serif text-sm font-bold text-[#c5a880]">2026</span>
              </div>
            </div>
          </div>

          {/* Magazine Text Column */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-[#a6a095] font-mono">
                <span>The Ummed · Ahmedabad</span>
              </div>

              <h3 className="font-serif text-4xl sm:text-6xl text-[#f5f1ea] font-normal leading-[1.12]">
                ANANYA × KABIR
              </h3>

              <div className="w-12 h-[1.5px] bg-[#c5a880]" />

              <p className="font-serif text-lg text-[#d8c9b5] italic leading-snug">
                The Ummed · Ahmedabad
              </p>

            </div>

            <div className="pt-4">
              <Button href={`/stories/${story.slug}`} variant="gold" size="md">
                <span className="flex items-center gap-2 uppercase tracking-widest text-xs">
                  <span>VIEW STORY</span>
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
