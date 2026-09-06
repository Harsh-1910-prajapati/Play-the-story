"use client";

import React, { useState } from "react";
import { WeddingStory } from "@/types";
import { WeddingStoryCard } from "@/components/cards/WeddingStoryCard";

interface StoriesFilterViewProps {
  stories: WeddingStory[];
}

const CATEGORIES = [
  "All",
  "Weddings",
  "Pre-Weddings",
  "Engagements",
  "Receptions",
  "Events",
];

export function StoriesFilterView({ stories }: StoriesFilterViewProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? stories
      : stories.filter(
          (s) => s.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3 mb-12 sm:mb-16">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                isActive
                  ? "bg-[#B39B7A] text-[#F5F1EA] shadow-[0_0_20px_rgba(179,155,122,0.25)]"
                  : "bg-[#F5F1EA] text-[#8A8175] hover:text-[#25231F] border border-[#25231F]/10 hover:border-[#25231F]/25"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((story, idx) => (
            <WeddingStoryCard key={story.id} story={story} priority={idx < 3} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#F5F1EA] border border-[#25231F]/10">
          <p className="font-serif text-2xl text-[#25231F] mb-2">No Stories Found</p>
          <p className="text-sm text-[#8A8175]">
            No stories currently found under the {activeCategory} category.
          </p>
        </div>
      )}
    </div>
  );
}
