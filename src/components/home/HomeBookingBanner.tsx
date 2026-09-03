"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DateCheckerModal } from "@/components/ui/DateCheckerModal";
import { Calendar, MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function HomeBookingBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-28 sm:py-36 overflow-hidden bg-[#0d0d0d] border-t border-white/10">
        {/* Background Atmosphere Image */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
            alt="Atmospheric wedding celebration"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-[#0d0d0d]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-4">
            <span>Reservations Open For 2026 – 2027</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#fbf9f5] font-light leading-tight mb-6">
            Let&apos;s Create Something Timeless Together
          </h2>

          <p className="text-sm sm:text-base text-[#a6a095] max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Because we dedicate extensive time to pre-production and bespoke post-production, we accept a selective number of weddings each year. Inquire early to reserve your dates.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-black" />
              Check Your Wedding Date
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#c5a880]" />
              Schedule a Consultation
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-6 text-xs text-[#666]">
            <span>Ahmedabad Studio</span>
            <span>•</span>
            <span>All-India & Global Travel</span>
            <span>•</span>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5a880] hover:underline inline-flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Direct WhatsApp
            </a>
          </div>
        </div>
      </section>

      <DateCheckerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
