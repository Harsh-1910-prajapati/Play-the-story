import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      {subtitle && (
        <div
          className={cn(
            "flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#c5a880] mb-3 font-medium",
            align === "center" ? "justify-center" : "justify-start"
          )}
        >
          <span className="w-6 h-[1px] bg-[#c5a880]/60 inline-block" />
          <span>{subtitle}</span>
          {align === "center" && (
            <span className="w-6 h-[1px] bg-[#c5a880]/60 inline-block" />
          )}
        </div>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#fbf9f5] font-normal leading-[1.15] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm md:text-base text-[#a6a095] leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
}
