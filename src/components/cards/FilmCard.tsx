"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Film } from "@/types";
import { Play, Clock, MapPin } from "lucide-react";
import { VideoPlayerModal } from "../ui/VideoPlayerModal";

interface FilmCardProps {
  film: Film;
  priority?: boolean;
}

export function FilmCard({ film, priority = false }: FilmCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div className="group relative bg-[#F5F1EA] border border-[#25231F]/15 overflow-hidden hover:border-[#B39B7A]/50 transition-all duration-500 flex flex-col justify-between">
        {/* Video Thumbnail with Play Button */}
        <div
          onClick={() => setIsPlaying(true)}
          className="relative aspect-video w-full overflow-hidden cursor-pointer"
        >
          <Image
            src={film.thumbnail_url}
            alt={`${film.title} - ${film.couple_names}`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-[#25231F]/40 group-hover:bg-[#25231F]/20 transition-colors" />

          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 bg-[#25231F]/75 backdrop-blur-sm border border-[#25231F]/15 px-2 py-1 text-[11px] text-[#25231F] font-mono">
            <Clock className="w-3 h-3 text-[#B39B7A]" />
            <span>{film.duration}</span>
          </div>

          {/* Category Tag */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block bg-[#25231F]/75 backdrop-blur-sm border border-[#25231F]/15 text-[10px] uppercase tracking-[0.2em] text-[#B39B7A] px-2 py-0.5">
              {film.category}
            </span>
          </div>

          {/* Center Cinematic Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#B39B7A]/90 text-[#F5F1EA] flex items-center justify-center pl-1 shadow-[0_0_25px_rgba(179,155,122,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#B39B7A]">
              <Play className="w-6 h-6 fill-black" />
            </div>
          </div>
        </div>

        {/* Film Details */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1 text-xs text-[#8A8175] mb-2 font-light">
              <MapPin className="w-3.5 h-3.5 text-[#B39B7A]" />
              <span>{film.location}</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#25231F] font-normal leading-snug group-hover:text-[#B39B7A] transition-colors">
              {film.title}
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#B39B7A] mt-1 font-medium">
              {film.couple_names}
            </p>
            {film.description && (
              <p className="text-xs text-[#8A8175] mt-3 line-clamp-2 font-light leading-relaxed">
                {film.description}
              </p>
            )}
          </div>

          <div className="mt-5 pt-4 border-t border-[#25231F]/15 flex items-center justify-between">
            <button
              onClick={() => setIsPlaying(true)}
              className="text-[11px] uppercase tracking-widest text-[#8A8175] group-hover:text-[#25231F] transition-colors flex items-center gap-2"
            >
              <span>Watch Film</span>
              <span className="text-[#B39B7A]">▶</span>
            </button>
          </div>
        </div>
      </div>

      <VideoPlayerModal
        isOpen={isPlaying}
        onClose={() => setIsPlaying(false)}
        videoUrl={film.video_url}
        title={`${film.title} — ${film.couple_names}`}
      />
    </>
  );
}
