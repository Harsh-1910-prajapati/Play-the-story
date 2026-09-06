import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { dataRepository } from "@/lib/data/repository";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Check, Sparkles, HelpCircle, Shield, Clock, Film } from "lucide-react";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services & Deliverables — Luxury Wedding Photography & Films",
  description: "Explore photography, films, portraits, commercial campaigns, content creation, and post-production services from Ahmedabad.",
  path: "/services",
});

const FAQS = [
  {
    q: "Where are you based, and do you travel for destination weddings?",
    a: "We are proudly based in Ahmedabad, Gujarat, India. Our team frequently travels across India (Udaipur, Jaipur, Jodhpur, Goa, Mumbai, Delhi) and international destinations for luxury destination weddings.",
  },
  {
    q: "How many weddings do you take per season?",
    a: "To ensure every wedding receives our signature creative energy and meticulous post-production, we strictly limit our bookings to a maximum of 25 bespoke weddings per year.",
  },
  {
    q: "What is your typical delivery timeline?",
    a: "We deliver a curated set of 40–50 social teaser images within 48 to 72 hours of your wedding. Your complete high-resolution photo gallery and cinematic highlight film are delivered within 6 to 8 weeks.",
  },
  {
    q: "Do you offer physical wedding photo albums?",
    a: "Yes. Every signature collection includes our handcrafted heirloom wedding album printed on museum-grade fine art cotton paper bound in bespoke Italian leather or silk fabric.",
  },
  {
    q: "How do we book our wedding date?",
    a: "Dates are reserved on a first-come, first-served basis upon signing our digital wedding agreement and receiving a booking deposit. We encourage contacting us 4 to 9 months in advance.",
  },
];

export default async function ServicesPage() {
  const services = await dataRepository.getServices();

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#25231F]">
      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-20 sm:mb-28">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B39B7A] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bespoke Collections</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#25231F] font-light leading-[1.1] mb-6">
          Our Services & Deliverables
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#8A8175] max-w-2xl mx-auto font-light leading-relaxed">
          Every celebration is unique. We offer comprehensive, tailor-made photography and cinema collections designed to preserve your wedding story with enduring elegance.
        </p>
      </section>

      {/* In-Depth Service Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-32">
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#F5F1EA] border border-[#25231F]/15 p-6 sm:p-10 lg:p-14 ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Col */}
              <div
                className={`relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden border border-[#25231F]/15 shadow-2xl ${
                  isReversed ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"
                }`}
              >
                <Image
                  src={service.image_url}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-10 bg-[#25231F]/80 backdrop-blur-sm border border-[#25231F]/15 text-[10px] uppercase tracking-widest text-[#B39B7A] px-3 py-1 font-mono">
                  Collection 0{index + 1}
                </div>
              </div>

              {/* Text Col */}
              <div
                className={`space-y-6 ${
                  isReversed ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"
                }`}
              >
                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#25231F] font-normal leading-tight">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-xs uppercase tracking-widest text-[#B39B7A] font-medium">
                    Ahmedabad • Destination Venues
                  </p>
                </div>

                <div className="w-12 h-[1px] bg-[#B39B7A]" />

                <p className="text-sm sm:text-base text-[#8A8175] font-light leading-relaxed">
                  {service.full_description}
                </p>

                {/* Features list */}
                {service.features && service.features.length > 0 && (
                  <div className="pt-2">
                    <p className="text-xs uppercase tracking-wider text-[#8A8175] font-medium mb-3">
                      Included Deliverables:
                    </p>
                    <ul className="space-y-2.5">
                      {service.features.map((feat, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#8A8175] font-light"
                        >
                          <span className="w-4 h-4 rounded-full bg-[#B39B7A]/15 text-[#B39B7A] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 flex items-center gap-4">
                  <Button href="/contact" variant="primary" size="md">
                    Inquire For This Service
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* What Every Collection Includes */}
      <section className="py-24 bg-[#25231F] border-y border-[#25231F]/10 mb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="The Standard"
            title="What Accompanies Every Wedding"
            description="Our non-negotiable benchmark of quality for all clients who work with Play The Story."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F5F1EA] border border-[#25231F]/15 p-6">
              <Shield className="w-8 h-8 text-[#B39B7A] mb-4" />
              <h3 className="font-serif text-xl text-[#25231F] mb-2">Dual Lead Crew</h3>
              <p className="text-xs text-[#8A8175] font-light leading-relaxed">
                Every event is covered by seasoned primary photographers and cinematographers with backup equipment on-site.
              </p>
            </div>

            <div className="bg-[#F5F1EA] border border-[#25231F]/15 p-6">
              <Clock className="w-8 h-8 text-[#B39B7A] mb-4" />
              <h3 className="font-serif text-xl text-[#25231F] mb-2">48-Hour Preview</h3>
              <p className="text-xs text-[#8A8175] font-light leading-relaxed">
                Receive high-res edited signature portraits within two days so you can celebrate your wedding with the world immediately.
              </p>
            </div>

            <div className="bg-[#F5F1EA] border border-[#25231F]/15 p-6">
              <Film className="w-8 h-8 text-[#B39B7A] mb-4" />
              <h3 className="font-serif text-xl text-[#25231F] mb-2">4K Cinema Master</h3>
              <p className="text-xs text-[#8A8175] font-light leading-relaxed">
                Shot on top-tier Sony FX and RED cinema lines, delivering razor-sharp 4K footage calibrated for big screens.
              </p>
            </div>

            <div className="bg-[#F5F1EA] border border-[#25231F]/15 p-6">
              <Sparkles className="w-8 h-8 text-[#B39B7A] mb-4" />
              <h3 className="font-serif text-xl text-[#25231F] mb-2">Private Cloud Vault</h3>
              <p className="text-xs text-[#8A8175] font-light leading-relaxed">
                A private, password-protected online gallery active for 5 years with effortless high-speed downloads for family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-28">
        <SectionHeading
          subtitle="Questions Answered"
          title="Frequently Asked Questions"
          description="Everything you need to know about booking and planning your wedding coverage."
        />

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#F5F1EA] border border-[#25231F]/15 p-6 sm:p-7 hover:border-[#B39B7A]/30 transition-colors"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#B39B7A] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#25231F] font-normal mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8A8175] font-light leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-[#F5F1EA] border border-[#25231F]/15 p-10 sm:p-14">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#25231F] mb-4 font-light">
            Ready to Plan Your Wedding Coverage?
          </h3>
          <p className="text-sm text-[#8A8175] max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Reach out to discuss your wedding schedule, guest size, and venue in Ahmedabad or destination locations.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Request a Custom Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
