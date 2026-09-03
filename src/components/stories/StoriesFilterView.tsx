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
                  ? "bg-[#c5a880] text-black shadow-[0_0_20px_rgba(197,168,128,0.25)]"
                  : "bg-[#141414] text-[#a6a095] hover:text-[#fbf9f5] border border-white/5 hover:border-white/20"
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
        <div className="text-center py-20 bg-[#111111] border border-white/5">
          <p className="font-serif text-2xl text-[#fbf9f5] mb-2">No Stories Found</p>
          <p className="text-sm text-[#a6a095]">
            No stories currently found under the {activeCategory} category.
          </p>
        </div>
      )}
    </div>
  );
}
