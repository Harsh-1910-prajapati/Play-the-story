import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceItem } from "@/types";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative bg-[#F5F1EA] border border-[#25231F]/15 overflow-hidden hover:border-[#B39B7A]/50 transition-all duration-500 flex flex-col justify-between">
      {/* Service Cover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={service.image_url}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F1EA] via-[#F5F1EA]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#25231F] group-hover:text-[#B39B7A] transition-colors font-normal mb-3">
            {service.title}
          </h3>
        </div>

        <div className="pt-4 border-t border-[#25231F]/15">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B39B7A] group-hover:text-[#25231F] transition-colors"
          >
            <span>Explore & Inquire</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
