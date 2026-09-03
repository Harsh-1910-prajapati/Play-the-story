"use client";

import React, { useState } from "react";
import Link from "next/link";
import { WeddingStory } from "@/types";
import { WeddingStoryCard } from "@/components/cards/WeddingStoryCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

interface HomePortfolioGridProps {
  initialStories: WeddingStory[];
}

const CATEGORIES = [
  "All",
  "Weddings",
  "Pre-Weddings",
  "Engagements",
  "Receptions",
  "Events",
];

export function HomePortfolioGrid({ initialStories }: HomePortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStories =
    activeCategory === "All"
      ? initialStories
      : initialStories.filter(
          (s) => s.category.toLowerCase() === activeCategory.toLowerCase()
        );

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
              className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-[0.18em] transition-all duration-300 font-medium ${
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
        {filteredStories.slice(0, 6).map((story, index) => (
          <WeddingStoryCard key={story.id} story={story} priority={index < 2} />
        ))}
      </div>

      {/* View All Stories CTA */}
      <div className="mt-12 text-center">
        <Button href="/stories" variant="outline" size="md">
          <span className="flex items-center gap-2">
            Explore All Wedding Stories
            <ArrowRight className="w-4 h-4" />
          </span>
        </Button>
      </div>
    </div>
  );
}
