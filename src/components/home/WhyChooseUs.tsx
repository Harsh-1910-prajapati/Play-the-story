import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Camera, Film, Sparkles } from "lucide-react";

const PILLARS = [
  {
    number: "01",
    label: "REAL.",
    icon: Camera,
    tagline: "Natural moments. Genuine emotions.",
  },
  {
    number: "02",
    label: "CINEMATIC.",
    icon: Film,
    tagline: "A visual style that feels timeless.",
  },
  {
    number: "03",
    label: "PERSONAL.",
    icon: Sparkles,
    tagline: "Your people, your pace, your point of view.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F1EA] relative overflow-hidden border-y border-[#25231F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Why Us"
          title="WHY PLAY THE STORY?"
          description="Three things guide every frame we make."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PILLARS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative bg-[#F5F1EA] border border-[#25231F]/15 p-8 hover:border-[#B39B7A]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-[#B39B7A] tracking-widest font-semibold">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-[#25231F]/15 group-hover:border-[#B39B7A]/50 flex items-center justify-center text-[#B39B7A] transition-colors group-hover:bg-[#B39B7A]/10">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#25231F] group-hover:text-[#B39B7A] transition-colors mb-2 font-normal tracking-wide">
                    {item.label}
                  </h3>

                  <p className="text-xs text-[#B39B7A] font-mono tracking-wider mb-4 leading-snug">
                    {item.tagline}
                  </p>

                </div>

                <div className="mt-8 pt-4 border-t border-[#25231F]/10 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#8A8175]">
                  <span>Play The Story</span>
                  <span className="w-6 h-[1px] bg-white/10 group-hover:bg-[#B39B7A]/60 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
