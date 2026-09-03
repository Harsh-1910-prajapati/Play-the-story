import React from "react";
import Link from "next/link";
import { dataRepository } from "@/lib/data/repository";
import { HomeHero } from "@/components/home/HomeHero";
import { FeaturedWeddingStory } from "@/components/home/FeaturedWeddingStory";
import { HomePortfolioGrid } from "@/components/home/HomePortfolioGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { InstagramSection } from "@/components/home/InstagramSection";
import { HomeBookingBanner } from "@/components/home/HomeBookingBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { FilmCard } from "@/components/cards/FilmCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export const revalidate = 60; // ISR revalidation

export default async function HomePage() {
  const [stories, films, services, testimonials] = await Promise.all([
    dataRepository.getStories(),
    dataRepository.getFilms(),
    dataRepository.getServices(),
    dataRepository.getTestimonials(),
  ]);

  const featuredStory = stories.find((s) => s.featured) || stories[0];

  return (
    <div className="relative">
      {/* 1. Full-screen Cinematic Hero */}
      <HomeHero />

      {/* 2. Editorial Featured Wedding Story */}
      {featuredStory && <FeaturedWeddingStory story={featuredStory} />}

      {/* 3. Services Section */}
      <section className="py-24 sm:py-32 bg-[#090909]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Services"
            title="Crafted for Timeless Memories"
            description="From candid rituals and fine-art couple portraits to full-length cinematic feature films, we offer bespoke collections tailored to luxury weddings."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {services.slice(3, 5).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/services" variant="outline" size="md">
              <span className="flex items-center gap-2">
                Explore All Services & Deliverables
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Portfolio / Our Stories Masonry Grid */}
      <section id="stories" className="py-24 sm:py-32 bg-[#0c0c0c] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Stories"
            title="Moments That Outlive Time"
            description="Explore our curated visual archives featuring intimate palace weddings, grand Gujarati traditions, and destination celebrations."
          />

          <HomePortfolioGrid initialStories={stories} />
        </div>
      </section>

      {/* 5. Why Choose Us / Our Approach */}
      <WhyChooseUs />

      {/* 6. Cinematic Films Showcase */}
      <section className="py-24 sm:py-32 bg-[#090909]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-3 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Motion Cinema</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#fbf9f5] font-light">
                Cinematic Wedding Films
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#a6a095] max-w-xl font-light">
                We believe wedding films should be genuine movies with real speech audio, emotional orchestral pacing, and breathtaking cinematography.
              </p>
            </div>

            <Button href="/films" variant="outline" size="sm" className="self-start md:self-auto">
              <span className="flex items-center gap-2">
                View All Cinema Films
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {films.slice(0, 4).map((film, index) => (
              <FilmCard key={film.id} film={film} priority={index < 2} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Reviews / Testimonials */}
      <section className="py-24 sm:py-32 bg-[#0c0c0c] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Words of Gratitude"
            title="Loved by Our Couples"
            description="The true reward of our craft is the heartfelt tears and hugs when couples experience their wedding gallery and film for the first time."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.slice(0, 4).map((test) => (
              <TestimonialCard key={test.id} testimonial={test} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880] hover:text-[#fbf9f5] transition-colors border-b border-[#c5a880]/30 pb-1"
            >
              <span>Read More Verified Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Instagram Section */}
      <InstagramSection />

      {/* 9. Final Grand Booking Banner */}
      <HomeBookingBanner />
    </div>
  );
}
