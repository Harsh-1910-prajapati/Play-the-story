"use client";

import React, { useState } from "react";
import { WeddingStory } from "@/types";
import { WeddingStoryCard } from "@/components/cards/WeddingStoryCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

interface HomePortfolioGridProps {
  initialStories: WeddingStory[];
}

const CATEGORIES = [
  "ALL",
  "WEDDINGS",
  "COUPLES",
  "EVENTS",
  "PORTRAITS",
  "COMMERCIAL",
  "FILMS",
];

export function HomePortfolioGrid({ initialStories }: HomePortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredStories =
    activeCategory === "ALL"
      ? initialStories
      : initialStories.filter((s) => {
          const cat = s.category.toUpperCase();
          if (activeCategory === "COUPLES") {
            return cat === "COUPLES" || cat === "PRE-WEDDINGS" || cat === "ENGAGEMENTS";
          }
          if (activeCategory === "EVENTS") {
            return cat === "EVENTS" || cat === "RECEPTIONS";
          }
          if (activeCategory === "FILMS") {
            return Boolean(s.film_url);
          }
          return cat === activeCategory;
        });

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-300 font-medium cursor-pointer ${
                isActive
                  ? "bg-[#c5a880] text-black shadow-[0_0_15px_rgba(197,168,128,0.25)]"
                  : "bg-[#141414] text-[#a6a095] hover:text-[#fbf9f5] border border-white/5 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredStories.slice(0, 6).map((story) => (
          <WeddingStoryCard key={story.id} story={story} />
        ))}
      </div>

      {/* View All Stories CTA */}
      <div className="mt-12 text-center">
        <Button href="/portfolio" variant="outline" size="md">
          <span className="flex items-center gap-2 tracking-widest text-xs uppercase">
            <span>EXPLORE ALL WORK</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </Button>
      </div>
    </div>
  );
}
