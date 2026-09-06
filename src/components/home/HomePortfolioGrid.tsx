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
  "BRANDS",
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
          if (activeCategory === "BRANDS") {
            return cat === "BRANDS" || cat === "COMMERCIAL";
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
                  ? "bg-[#B39B7A] text-[#F5F1EA] shadow-[0_0_15px_rgba(179,155,122,0.25)]"
                  : "bg-[#F5F1EA] text-[#8A8175] hover:text-[#25231F] border border-[#25231F]/10 hover:border-[#25231F]/25"
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
          <WeddingStoryCard key={story.id} story={story} compact />
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
