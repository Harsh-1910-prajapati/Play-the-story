import React from "react";
import { Metadata } from "next";
import { dataRepository } from "@/lib/data/repository";
import { StoriesFilterView } from "@/components/stories/StoriesFilterView";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio / Our Stories — Play The Story",
  description:
    "Explore our complete portfolio of luxury wedding photography and films across Ahmedabad and destination venues worldwide.",
};

export const revalidate = 60;

export default async function PortfolioPage() {
  const stories = await dataRepository.getStories();

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#080808]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Portfolio</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#fbf9f5] font-light leading-[1.1] mb-6">
          Portfolio & Stories
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#a6a095] max-w-2xl mx-auto font-light leading-relaxed">
          Explore our visual documentary collection of Indian luxury weddings, pre-weddings, and celebrations.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StoriesFilterView stories={stories} />
      </section>
    </div>
  );
}
