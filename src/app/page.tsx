import React from "react";
import Link from "next/link";
import { dataRepository } from "@/lib/data/repository";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeIntroduction } from "@/components/home/HomeIntroduction";
import { FeaturedWeddingStory } from "@/components/home/FeaturedWeddingStory";
import { HomePortfolioGrid } from "@/components/home/HomePortfolioGrid";
import { HomeAboutSnippet } from "@/components/home/HomeAboutSnippet";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { InstagramSection } from "@/components/home/InstagramSection";
import { HomeBookingBanner } from "@/components/home/HomeBookingBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { FilmCard } from "@/components/cards/FilmCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata({
  title: "Creative Photography & Films in Ahmedabad",
  description: "Play The Story creates emotional photography, films, brand campaigns, and visual stories in Ahmedabad and worldwide.",
  path: "/",
});

export const revalidate = 60; // ISR revalidation

export default async function HomePage() {
  const [stories, films, services, testimonials] = await Promise.all([
    dataRepository.getStories(),
    dataRepository.getFilms(),
    dataRepository.getServices(),
    dataRepository.getTestimonials(),
  ]);

  const featuredStory = stories.find((s) => s.featured);

  return (
    <div className="relative">
      {/* 1 & 2. Full-screen Cinematic Hero */}
      <HomeHero />

      {/* 3. Introduction: WE DON'T JUST TAKE PICTURES. WE TELL STORIES. */}
      <HomeIntroduction />

      {/* 4. Services Section: WHAT WE DO */}
      <section id="services" className="py-24 sm:py-32 bg-[#090909]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Studio Capabilities"
            title="WHAT WE DO"
            description="From candid rituals and fine-art couple portraits to commercial campaigns and Hollywood-grade color grading, explore our full spectrum of creative visual storytelling."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8">
            {services.slice(3, 7).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/services" variant="outline" size="md">
              <span className="flex items-center gap-2 uppercase tracking-widest text-xs">
                <span>Explore All 7 Services & Deliverables</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Work / Portfolio: OUR WORK */}
      <section id="work" className="py-24 sm:py-32 bg-[#171717] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Visual Archives"
            title="OUR WORK"
            description="Explore our curated visual archives featuring intimate weddings, stylized couples, commercial campaigns, personal portraits, and motion films."
          />

          <HomePortfolioGrid initialStories={stories} />
        </div>
      </section>

      {/* 6. Editorial Featured Story */}
      {featuredStory && <FeaturedWeddingStory story={featuredStory} />}

      {/* 7. Cinematic Films: STORIES IN MOTION */}
      <section id="films" className="py-24 sm:py-32 bg-[#090909]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-3 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Motion Cinema</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#fbf9f5] font-light uppercase tracking-wide">
                STORIES IN MOTION
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#a6a095] max-w-xl font-light">
                Some stories are better heard in laughter, felt in movement and remembered in motion.
              </p>
            </div>

            <Button href="/films" variant="outline" size="sm" className="self-start md:self-auto">
              <span className="flex items-center gap-2 uppercase tracking-widest text-xs">
                <span>View All Cinema Films</span>
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

      {/* 8. About: BEHIND PLAY THE STORY */}
      <HomeAboutSnippet />

      {/* 9. Why Play The Story / Our Approach */}
      <WhyChooseUs />

      {/* 10. Reviews / Testimonials: PEOPLE WHO TRUSTED US */}
      <section id="reviews" className="py-24 sm:py-32 bg-[#0c0c0c] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Client Words"
            title="PEOPLE WHO TRUSTED US"
            description="Genuine words from couples and brands who trusted us to capture their milestones."
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

      {/* 11. Instagram / Social Gallery: MORE FROM PLAY THE STORY */}
      <InstagramSection />

      {/* 12. FAQ Section: LET'S CLEAR A FEW THINGS */}
      <HomeFAQ />

      {/* 13. Final Grand Booking CTA: HAVE A STORY TO TELL? */}
      <HomeBookingBanner />
    </div>
  );
}

