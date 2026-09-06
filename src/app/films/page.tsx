import React from "react";
import { Metadata } from "next";
import { dataRepository } from "@/lib/data/repository";
import { FilmCard } from "@/components/cards/FilmCard";
import { Sparkles, Film as FilmIcon, Music, Video } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Cinematic Wedding Films — 4K Documentaries & Teasers",
  description: "Experience emotional wedding, commercial, and event films created by Play The Story in Ahmedabad and worldwide.",
  path: "/films",
});

export const revalidate = 60;

export default async function FilmsPage() {
  const films = await dataRepository.getFilms();

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#25231F]">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B39B7A] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Motion Cinema</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#25231F] font-light leading-[1.1] mb-6">
          Cinematic Wedding Films
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#8A8175] max-w-2xl mx-auto font-light leading-relaxed">
          Not just music video montages, but living, breathing documentaries that preserve your vows, original speeches, and intimate emotional energy.
        </p>
      </section>

      {/* Film Philosophy Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#F5F1EA] border border-[#25231F]/15 p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <Video className="w-8 h-8 text-[#B39B7A] shrink-0" />
            <div>
              <h3 className="font-serif text-xl text-[#25231F] mb-1">4K Cinema Color</h3>
              <p className="text-xs text-[#8A8175] font-light leading-relaxed">
                Shot using ultra-wide dynamic range cinema sensors with bespoke DaVinci Resolve color grading.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Music className="w-8 h-8 text-[#B39B7A] shrink-0" />
            <div>
              <h3 className="font-serif text-xl text-[#25231F] mb-1">Live Audio Recording</h3>
              <p className="text-xs text-[#8A8175] font-light leading-relaxed">
                We mic key family members and the couple during pheras and toasts for crystal-clear original dialogue.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FilmIcon className="w-8 h-8 text-[#B39B7A] shrink-0" />
            <div>
              <h3 className="font-serif text-xl text-[#25231F] mb-1">Narrative Pacing</h3>
              <p className="text-xs text-[#8A8175] font-light leading-relaxed">
                Every film is custom-scored and edited rhythmically to build genuine emotional resonance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Films Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {films.map((film, index) => (
            <FilmCard key={film.id} film={film} priority={index < 2} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-[#F5F1EA] border border-[#25231F]/15 p-10 sm:p-14">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#25231F] mb-4 font-light">
            Want Your Wedding Captured in 4K Cinema?
          </h3>
          <p className="text-sm text-[#8A8175] max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Inquire about our dedicated cinema crews for upcoming weddings in Ahmedabad, Gujarat, or destination venues.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Check Film Team Availability
          </Button>
        </div>
      </section>
    </div>
  );
}
