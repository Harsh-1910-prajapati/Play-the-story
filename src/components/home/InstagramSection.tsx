import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

const INSTAGRAM_PREVIEWS = [
  {
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
    caption: "Golden hour pheras in Ahmedabad",
  },
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
    caption: "Destination lakefront mandap",
  },
  {
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop",
    caption: "White desert pre-wedding whispers",
  },
  {
    url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=600&auto=format&fit=crop",
    caption: "Candlelit engagement evening",
  },
  {
    url: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=600&auto=format&fit=crop",
    caption: "First dance under starlight",
  },
  {
    url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600&auto=format&fit=crop",
    caption: "Intricate bridal details & jewelry",
  },
];

export function InstagramSection() {
  return (
    <section className="py-20 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-2 font-medium">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>{siteConfig.contact.instagramHandle}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#fbf9f5] font-light">
              Follow Our Stories on Instagram
            </h2>
          </div>

          <a
            href={siteConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880] hover:text-[#fbf9f5] transition-colors border-b border-[#c5a880]/40 pb-1"
          >
            <span>Visit @playthestory</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6-column Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_PREVIEWS.map((item, index) => (
            <a
              key={index}
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-[#141414] border border-white/5 block"
              aria-label={item.caption}
            >
              <Image
                src={item.url}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                <InstagramIcon className="w-6 h-6 text-[#c5a880]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
