import React from "react";
import { Metadata } from "next";
import { dataRepository } from "@/lib/data/repository";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Button } from "@/components/ui/Button";
import { Heart } from "lucide-react";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Client Reviews & Love Notes — Play The Story",
  description: "Read genuine reviews from couples and families across Gujarat and India who entrusted their memories to Play The Story.",
  path: "/reviews",
});

export const revalidate = 60;

export default async function ReviewsPage() {
  const testimonials = await dataRepository.getTestimonials();

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#25231F]">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B39B7A] mb-4">
          <Heart className="w-3.5 h-3.5" />
          <span>Verified Love Notes</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#25231F] font-light leading-[1.1] mb-6">
          Words From Our Couples
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#8A8175] max-w-2xl mx-auto font-light leading-relaxed">
          The quiet glances, the happy tears, and the timeless memories. Here is what couples and their families say about their experience with Play The Story.
        </p>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test) => (
            <TestimonialCard key={test.id} testimonial={test} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-[#F5F1EA] border border-[#25231F]/15 p-10 sm:p-14">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#25231F] mb-4 font-light">
            Ready to Begin Your Own Story?
          </h3>
          <p className="text-sm text-[#8A8175] max-w-xl mx-auto mb-8 font-light leading-relaxed">
            We would be honored to be part of your celebrations and capture the emotions that define your story.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Check Your Wedding Date
          </Button>
        </div>
      </section>
    </div>
  );
}
