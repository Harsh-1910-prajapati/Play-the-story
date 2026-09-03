import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Camera, Film, Heart, Sparkles, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Preserving Love Stories in Ahmedabad & Worldwide",
  description:
    "Learn about Play The Story, an editorial luxury wedding photography and cinematic film studio based in Ahmedabad, Gujarat. Founded on emotion-first storytelling.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#080808]">
      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-20 sm:mb-28">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Story & Philosophy</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#fbf9f5] font-light leading-[1.1] mb-6">
          The Art of Preserving What Outlives Time
        </h1>
        <p className="font-serif text-xl sm:text-2xl text-[#dfc8a5] italic max-w-3xl mx-auto font-light leading-relaxed">
          &ldquo;We don&apos;t just photograph weddings. We preserve the quiet sighs, the electric glances, and the legacy of families coming together.&rdquo;
        </p>
      </section>

      {/* Editorial Spread (Image + Narrative) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                alt="Play The Story Team at work"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#141414] border border-[#c5a880]/40 p-6 hidden sm:block max-w-xs shadow-2xl">
              <p className="text-[10px] uppercase tracking-widest text-[#c5a880] mb-1">
                Studio Location
              </p>
              <p className="font-serif text-lg text-[#fbf9f5]">
                Sindhu Bhavan Marg, Ahmedabad
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium">
              Roots & Vision
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#fbf9f5] font-normal leading-tight">
              Rooted in Ahmedabad, Capturing Timeless Unions Across the Globe
            </h2>
            <div className="w-12 h-[1px] bg-[#c5a880]" />
            <div className="space-y-4 text-sm sm:text-base text-[#a6a095] font-light leading-relaxed">
              <p>
                <strong className="text-[#fbf9f5] font-normal">Play The Story</strong> was born from a deep conviction: wedding memories should not feel like rehearsed fashion catalog shoots or formulaic video collages. An Indian wedding is an orchestral whirlwind of heritage, intense emotion, familial bonds, and sacred ceremonies.
              </p>
              <p>
                Headquartered along Sindhu Bhavan Marg in Ahmedabad, Gujarat, our boutique studio works with discerning couples who value discretion, fine-art aesthetics, and genuine photojournalism.
              </p>
              <p>
                Whether photographing a multi-day royal wedding at a heritage haveli in Rajasthan, a vibrant beachfront celebration in Goa, or an intimate mandap in Gujarat, our team approaches every couple with reverence, artistry, and tireless dedication.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-6 text-xs text-[#c5a880] uppercase tracking-wider font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#c5a880]" />
                Limited Weddings Per Year
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#c5a880]" />
                Bespoke DaVinci Color Grade
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Pillars of Our Craft */}
      <section className="py-24 bg-[#0d0d0d] border-y border-white/5 mb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="The Craft"
            title="How We Approach Your Story"
            description="Our methodology combines technical cinema mastery with non-intrusive human connection."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#141414] border border-white/10 p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#1e1e1e] flex items-center justify-center text-[#c5a880] mb-6">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-[#fbf9f5] mb-3">
                  Unobtrusive Presence
                </h3>
                <p className="text-sm text-[#a6a095] font-light leading-relaxed">
                  We blend quietly into your wedding crowd. We do not stop ceremonies for fake retakes. The sweetest frames happen when people forget that a camera is even in the room.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] uppercase tracking-widest text-[#c5a880]">
                Candid Honesty
              </div>
            </div>

            <div className="bg-[#141414] border border-white/10 p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#1e1e1e] flex items-center justify-center text-[#c5a880] mb-6">
                  <Film className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-[#fbf9f5] mb-3">
                  Cinema Documentary Style
                </h3>
                <p className="text-sm text-[#a6a095] font-light leading-relaxed">
                  Our films are built around real dialogue—the quiet vows whispered to one another, the emotional toast by a sibling, the sound of the wedding shehnai echoing in the courtyard.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] uppercase tracking-widest text-[#c5a880]">
                Narrative Sound & 4K
              </div>
            </div>

            <div className="bg-[#141414] border border-white/10 p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#1e1e1e] flex items-center justify-center text-[#c5a880] mb-6">
                  <Camera className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-[#fbf9f5] mb-3">
                  Heirloom Fine-Art Delivery
                </h3>
                <p className="text-sm text-[#a6a095] font-light leading-relaxed">
                  Your wedding gallery is delivered in a private digital vault alongside custom handcrafted Italian leather heirloom photo albums meant to be held by grandchildren fifty years from now.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] uppercase tracking-widest text-[#c5a880]">
                Generational Legacy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Couple Experience Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-28">
        <SectionHeading
          subtitle="Your Journey"
          title="The Play The Story Experience"
          description="From the first warm cup of coffee at our studio to the delivery of your master films."
        />

        <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 sm:before:left-1/2 before:-translate-x-1/2 before:w-[1px] before:bg-white/10">
          {[
            {
              step: "01",
              title: "Creative Consultation",
              desc: "We meet at our studio in Ahmedabad or over video call to discover your vision, wedding traditions, event scale, and aesthetic preferences.",
            },
            {
              step: "02",
              title: "Bespoke Moodboard & Curation",
              desc: "Our team crafts a dedicated moodboard covering lighting palettes, ceremony schedules, and family portrait timing to ensure zero stress on the wedding days.",
            },
            {
              step: "03",
              title: "The Celebration Days",
              desc: "Our dedicated leads and cinematography crews execute seamless, unobtrusive coverage, capturing both grand spectacle and tender whispers.",
            },
            {
              step: "04",
              title: "Fine Art Post-Production & Delivery",
              desc: "Within 48 hours, you receive a teaser selection. Within 6–8 weeks, your complete color-graded gallery and narrative films are presented.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 ${
                idx % 2 === 0 ? "sm:flex-row-reverse text-left sm:text-right" : "text-left"
              }`}
            >
              <div className="sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                <div className="text-xs uppercase tracking-widest text-[#c5a880] mb-1 font-mono">
                  Phase {item.step}
                </div>
                <h4 className="font-serif text-2xl text-[#fbf9f5] mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-[#a6a095] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Node Marker */}
              <div className="absolute left-0 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 w-8 h-8 rounded-full bg-[#161616] border border-[#c5a880] flex items-center justify-center text-[10px] text-[#c5a880] font-mono z-10">
                {item.step}
              </div>

              <div className="hidden sm:block sm:w-1/2" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center pt-8">
        <div className="bg-[#111111] border border-white/10 p-10 sm:p-14 shadow-2xl">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#fbf9f5] mb-4 font-light">
            We Would Love to Hear Your Story
          </h3>
          <p className="text-sm text-[#a6a095] max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Inquire about our availability for your wedding dates in Ahmedabad, Gujarat, or anywhere across the globe.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Book a Consultation
            </Button>
            <Button href="/stories" variant="outline" size="lg">
              Explore Our Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
