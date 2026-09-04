import React from "react";
import Image from "next/image";
import { WeddingStory } from "@/types";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

interface FeaturedWeddingStoryProps {
  story: WeddingStory;
}

export function FeaturedWeddingStory({ story }: FeaturedWeddingStoryProps) {
  return (
    <section id="featured-story" className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Editorial Decorative Background Details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pre-title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#c5a880] mb-3 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED STORY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#fbf9f5] font-light tracking-wide uppercase">
            A MOMENT WORTH REMEMBERING
          </h2>
        </div>

        {/* Magazine Spread Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#111111] border border-white/10 p-6 sm:p-10 lg:p-14 shadow-2xl">
          {/* Magazine Image Column */}
          <div className="lg:col-span-7 relative">
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
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:pl-4">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-[#a6a095] font-mono">
                <span>{story.category}</span>
                <span>/</span>
                <span>{story.location}</span>
                <span>•</span>
                <span>{formatDate(story.wedding_date)}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#fbf9f5] font-normal leading-[1.12]">
                {story.couple_names}
              </h3>

              <div className="w-12 h-[1.5px] bg-[#c5a880]" />

              <p className="font-serif text-lg text-[#dfc8a5] italic leading-snug">
                &ldquo;{story.title}&rdquo;
              </p>

              <p className="text-sm text-[#a6a095] font-light leading-relaxed">
                {story.description}
              </p>
            </div>

            <div className="pt-4">
              <Button href={`/stories/${story.slug}`} variant="gold" size="md">
                <span className="flex items-center gap-2 uppercase tracking-widest text-xs">
                  <span>VIEW FULL STORY</span>
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
