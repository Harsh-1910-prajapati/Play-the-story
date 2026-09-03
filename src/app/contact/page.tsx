import React from "react";
import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";
import { Sparkles, Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact & Book Us — Wedding Photography Ahmedabad",
  description:
    "Check wedding date availability or schedule an in-studio consultation in Ahmedabad. Reach Play The Story via inquiry form, WhatsApp, or direct call.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappPrefilledMessage
  )}`;

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#080808]">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Let&apos;s Connect</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#fbf9f5] font-light leading-[1.1] mb-6">
          Check Date & Book Us
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#a6a095] max-w-2xl mx-auto font-light leading-relaxed">
          We limit our calendar to a selective number of weddings each season. Share your celebration details below or reach out directly.
        </p>
      </section>

      {/* Main Form & Contact Info Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Action Channels Card */}
            <div className="bg-[#111111] border border-white/10 p-8 space-y-6">
              <h2 className="font-serif text-2xl text-[#fbf9f5] font-normal">
                Direct Channels
              </h2>
              <div className="w-10 h-[1px] bg-[#c5a880]" />

              <div className="space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 bg-[#181818] border border-white/5 hover:border-[#25D366]/60 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366] shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#a6a095] block">
                      Instant WhatsApp
                    </span>
                    <span className="text-sm text-[#fbf9f5] group-hover:text-[#25D366] font-medium transition-colors">
                      {siteConfig.contact.whatsappFormatted}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-4 p-3.5 bg-[#181818] border border-white/5 hover:border-[#c5a880]/60 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#c5a880]/15 flex items-center justify-center text-[#c5a880] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#a6a095] block">
                      Direct Phone
                    </span>
                    <span className="text-sm text-[#fbf9f5] group-hover:text-[#dfc8a5] font-medium transition-colors">
                      {siteConfig.contact.phoneFormatted}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-4 p-3.5 bg-[#181818] border border-white/5 hover:border-[#c5a880]/60 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#c5a880]/15 flex items-center justify-center text-[#c5a880] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#a6a095] block">
                      Direct Email
                    </span>
                    <span className="text-sm text-[#fbf9f5] group-hover:text-[#dfc8a5] font-medium transition-colors">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 bg-[#181818] border border-white/5 hover:border-[#c5a880]/60 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#c5a880]/15 flex items-center justify-center text-[#c5a880] shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#a6a095] block">
                      Instagram Direct
                    </span>
                    <span className="text-sm text-[#fbf9f5] group-hover:text-[#dfc8a5] font-medium transition-colors">
                      {siteConfig.contact.instagramHandle}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Studio Address Card */}
            <div className="bg-[#111111] border border-white/10 p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880]">
                <MapPin className="w-4 h-4" />
                <span>Our Studio</span>
              </div>
              <h3 className="font-serif text-xl text-[#fbf9f5]">
                Ahmedabad Flagship Studio
              </h3>
              <p className="text-xs sm:text-sm text-[#a6a095] font-light leading-relaxed">
                {siteConfig.location.address}
              </p>

              <div className="flex items-center gap-2 text-xs text-[#888] pt-2 border-t border-white/5">
                <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Consultations by prior appointment (Mon – Sat)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
