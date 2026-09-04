import React from "react";
import { Metadata } from "next";
import { dataRepository } from "@/lib/data/repository";
import { StoriesFilterView } from "@/components/stories/StoriesFilterView";
import { Sparkles } from "lucide-react";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Stories — Luxury Wedding Photography Archives",
  description: "Explore published wedding, couple, pre-wedding, and event stories from Play The Story.",
  path: "/stories",
});

export const revalidate = 60;

export default async function StoriesPage() {
  const stories = await dataRepository.getStories();

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#080808]">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Archives</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#fbf9f5] font-light leading-[1.1] mb-6">
          Our Stories
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#a6a095] max-w-2xl mx-auto font-light leading-relaxed">
          A timeless collection of weddings, pre-weddings, and celebrations captured with emotional intimacy and editorial beauty.
        </p>
      </section>

      {/* Main Filterable Stories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StoriesFilterView stories={stories} />
      </section>
    </div>
  );
}
