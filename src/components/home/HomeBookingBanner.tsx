"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DateCheckerModal } from "@/components/ui/DateCheckerModal";
import { MessageSquare } from "lucide-react";
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
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#c5a880] mb-4 font-mono">
            <span>START YOUR CHAPTER</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#fbf9f5] font-light leading-[1.08] uppercase tracking-wide mb-6">
            HAVE A STORY<br />TO TELL?
          </h2>

          <p className="text-base sm:text-xl text-[#dfc8a5] font-serif italic max-w-xl mx-auto font-light leading-relaxed mb-10">
            Let&apos;s make something worth remembering.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-3 tracking-widest text-xs uppercase shadow-[0_0_25px_rgba(197,168,128,0.25)]"
            >
              <span>START A CONVERSATION</span>
              <span>→</span>
            </Button>
          </div>

          {/* Direct channels: WhatsApp • Instagram • Email */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest text-[#a6a095]">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5a880] hover:text-[#fbf9f5] transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <span className="text-white/20">•</span>
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fbf9f5] transition-colors"
            >
              Instagram
            </a>
            <span className="text-white/20">•</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hover:text-[#fbf9f5] transition-colors"
            >
              Email
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
