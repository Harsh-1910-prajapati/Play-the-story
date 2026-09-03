import React from "react";
import Image from "next/image";
import { Testimonial } from "@/types";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative bg-[#121212] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#c5a880]/40 transition-colors">
      <div>
        {/* Rating Stars & Quote Icon */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1 text-[#c5a880]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < testimonial.rating
                    ? "fill-[#c5a880] text-[#c5a880]"
                    : "text-white/20"
                }`}
              />
            ))}
          </div>
          <Quote className="w-6 h-6 text-[#c5a880]/30" />
        </div>

        {/* Review Text */}
        <p className="font-serif text-base sm:text-lg text-[#fbf9f5] italic leading-relaxed mb-6 font-light">
          &ldquo;{testimonial.review_text}&rdquo;
        </p>
      </div>

      {/* Client info */}
      <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
        {testimonial.photo_url ? (
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#c5a880]/40 shrink-0">
            <Image
              src={testimonial.photo_url}
              alt={testimonial.client_name}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#1e1e1e] border border-white/10 flex items-center justify-center text-xs text-[#c5a880] font-serif font-bold shrink-0">
            {testimonial.client_name.substring(0, 2).toUpperCase()}
          </div>
        )}

        <div>
          <h4 className="font-sans text-sm font-medium text-[#fbf9f5]">
            {testimonial.client_name}
          </h4>
          <p className="text-[11px] text-[#a6a095] font-light">
            {testimonial.wedding_event}
          </p>
        </div>
      </div>
    </div>
  );
}
