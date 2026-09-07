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
    <div className="group relative bg-[#ebe5dc] border border-[#25231f]/10 overflow-hidden hover:border-[#b39b7a]/60 transition-all duration-500 flex flex-col justify-between">
      {/* Service Cover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={service.image_url}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#25231f]/70 via-[#25231f]/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#25231f] group-hover:text-[#8a8175] transition-colors font-normal mb-3">
            {service.title === "Commercial" ? "Brands" : service.title === "Couples" ? "Pre-Weddings" : service.title === "Content Creation" ? "Content" : service.title === "Post Production" ? "Films" : service.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#8a8175] font-light leading-relaxed mb-6">
            {service.short_description}
          </p>

          {/* Features Bullets */}
          {service.features && service.features.length > 0 && (
            <ul className="space-y-2.5 mb-6 pt-4 border-t border-[#25231f]/10">
              {service.features.slice(0, 3).map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-[#8a8175] font-light">
                  <span className="w-4 h-4 rounded-full bg-[#b39b7a]/15 text-[#8a8175] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pt-4 border-t border-[#25231f]/10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8a8175] group-hover:text-[#25231f] transition-colors"
          >
            <span>Learn More & Inquire</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
