import React from "react";
import Link from "next/link";
import Image from "next/image";
import { WeddingStory } from "@/types";
import { formatDate } from "@/lib/utils";
import { MapPin, ArrowUpRight } from "lucide-react";

interface WeddingStoryCardProps {
  story: WeddingStory;
  priority?: boolean;
  compact?: boolean;
}

export function WeddingStoryCard({ story, priority = false, compact = false }: WeddingStoryCardProps) {
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="group block relative overflow-hidden bg-[#F5F1EA] border border-[#25231F]/15 hover:border-[#B39B7A]/50 transition-all duration-500"
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden">
        <Image
          src={story.cover_image}
          alt={`${story.couple_names} Wedding Photography`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#25231F] via-[#25231F]/20 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

        {/* Category Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block bg-[#25231F]/80 backdrop-blur-sm border border-[#25231F]/15 text-[10px] uppercase tracking-[0.2em] text-[#B39B7A] px-2.5 py-1">
            {story.category}
          </span>
        </div>

        {/* Bottom Details */}
        <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 flex flex-col justify-end">
          <div className="flex items-center gap-1.5 text-xs text-[#8A8175] mb-2 font-light">
            <MapPin className="w-3.5 h-3.5 text-[#B39B7A]" />
            <span className="truncate">{story.location}</span>
            <span className="text-white/20">•</span>
            <span>{formatDate(story.wedding_date)}</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#25231F] group-hover:text-[#B39B7A] transition-colors font-normal leading-snug">
            {story.couple_names}
          </h3>

          {!compact && (
            <p className="text-xs text-[#8A8175] line-clamp-2 mt-2 font-light opacity-90">
              {story.description}
            </p>
          )}

          <div className="mt-4 pt-3 border-t border-[#25231F]/15 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#B39B7A] group-hover:text-[#25231F] transition-colors">
            <span>View Story</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
