"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WeddingStory } from "@/types";
import { formatDate } from "@/lib/utils";
import { Lightbox } from "@/components/ui/Lightbox";
import { VideoPlayerModal } from "@/components/ui/VideoPlayerModal";
import { Button } from "@/components/ui/Button";
import { MapPin, Calendar, Play, ArrowLeft, Sparkles, ZoomIn } from "lucide-react";

interface StoryDetailViewProps {
  story: WeddingStory;
}

export function StoryDetailView({ story }: StoryDetailViewProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const galleryImages = story.gallery && story.gallery.length > 0 ? story.gallery : [
    { id: "1", story_id: story.id, image_url: story.cover_image, caption: story.couple_names, display_order: 1 }
  ];

  const handleOpenPhoto = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <article className="min-h-screen bg-[#25231F]">
        {/* Fullscreen Hero Cover */}
        <div className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden flex items-end">
          <Image
            src={story.cover_image}
            alt={story.couple_names}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#25231F] via-[#25231F]/40 to-[#25231F]/60" />

          {/* Top back navigation */}
          <div className="absolute top-28 left-4 sm:left-8 z-20">
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A8175] hover:text-[#B39B7A] bg-[#25231F]/60 backdrop-blur-sm border border-[#25231F]/15 px-4 py-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Stories</span>
            </Link>
          </div>

          {/* Hero Story Details */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 text-center w-full">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B39B7A] mb-3 font-mono">
              <span>{story.category}</span>
              {story.wedding_type && (
                <>
                  <span>•</span>
                  <span>{story.wedding_type}</span>
                </>
              )}
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#25231F] font-light leading-[1.08] mb-4">
              {story.couple_names}
            </h1>

            <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-[#8A8175] font-light">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#B39B7A]" />
                {story.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#B39B7A]" />
                {formatDate(story.wedding_date)}
              </span>
            </div>
          </div>
        </div>

        {/* Story Narrative & Film Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B39B7A] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Chapter</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#25231F] font-light mb-8">
            &ldquo;{story.title}&rdquo;
          </h2>

          <div className="w-16 h-[1.5px] bg-[#B39B7A] mx-auto mb-8" />

          <p className="font-serif text-lg sm:text-xl text-[#B39B7A] italic leading-relaxed mb-8 max-w-2xl mx-auto">
            {story.description}
          </p>

          {/* Optional Cinematic Teaser Film Play Trigger */}
          {story.film_url && (
            <div className="mt-12 p-8 bg-[#F5F1EA] border border-[#25231F]/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#B39B7A] mb-1 font-mono">
                  Cinematic Wedding Film
                </p>
                <h3 className="font-serif text-2xl text-[#25231F]">
                  Watch {story.couple_names}&apos;s Highlight Film
                </h3>
                <p className="text-xs text-[#8A8175] font-light mt-1">
                  Recorded in 4K with original ceremony vows and narrative sound design.
                </p>
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={() => setVideoModalOpen(true)}
                className="shrink-0 flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-black" />
                Play Film
              </Button>
            </div>
          )}
        </section>

        {/* Photo Gallery Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B39B7A]">
              Visual Archives
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#25231F] font-light mt-2">
              The Photo Gallery
            </h2>
            <p className="text-xs text-[#8A8175] mt-2">
              Click any photograph to view in full resolution
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={img.id}
                onClick={() => handleOpenPhoto(idx)}
                className="group relative aspect-[3/4] overflow-hidden bg-[#F5F1EA] border border-[#25231F]/10 cursor-pointer"
              >
                <Image
                  src={img.image_url}
                  alt={img.caption || `${story.couple_names} Wedding photograph`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#25231F]/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between text-[#25231F]">
                    <span className="text-xs font-serif italic line-clamp-1">
                      {img.caption || story.couple_names}
                    </span>
                    <ZoomIn className="w-5 h-5 text-[#B39B7A]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA: Let's Tell Your Story */}
        <section className="py-24 bg-[#25231F] border-t border-[#25231F]/15 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B39B7A]">
              Your Chapter Awaits
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#25231F] font-light mt-3 mb-6">
              Let&apos;s Tell Your Story
            </h2>
            <p className="text-sm text-[#8A8175] font-light leading-relaxed mb-8 max-w-xl mx-auto">
              We would be honored to document your wedding with our signature blend of fine-art photography and cinematic documentary film.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Check Your Wedding Date
              </Button>
              <Button href="/stories" variant="outline" size="lg">
                Explore More Stories
              </Button>
            </div>
          </div>
        </section>
      </article>

      {/* Lightbox for high-res photo viewing */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryImages}
        initialIndex={lightboxIndex}
      />

      {/* Video Modal if film exists */}
      {story.film_url && (
        <VideoPlayerModal
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
          videoUrl={story.film_url}
          title={`${story.couple_names} — Cinematic Film`}
        />
      )}
    </>
  );
}
