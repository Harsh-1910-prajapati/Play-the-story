import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceItem } from "@/types";
import { Check, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative bg-[#121212] border border-white/10 overflow-hidden hover:border-[#c5a880]/50 transition-all duration-500 flex flex-col justify-between">
      {/* Service Cover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={service.image_url}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#fbf9f5] group-hover:text-[#dfc8a5] transition-colors font-normal mb-3">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#a6a095] font-light leading-relaxed mb-6">
            {service.short_description}
          </p>

          {/* Features Bullets */}
          {service.features && service.features.length > 0 && (
            <ul className="space-y-2.5 mb-6 pt-4 border-t border-white/10">
              {service.features.slice(0, 3).map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-[#d5d0c7] font-light">
                  <span className="w-4 h-4 rounded-full bg-[#c5a880]/15 text-[#c5a880] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pt-4 border-t border-white/10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880] group-hover:text-[#fbf9f5] transition-colors"
          >
            <span>Learn More & Inquire</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
