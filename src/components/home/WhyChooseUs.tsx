import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Camera, Film, Sparkles, Layers } from "lucide-react";

const PILLARS = [
  {
    number: "01",
    label: "REAL",
    icon: Camera,
    tagline: "Natural moments. Genuine emotions.",
    description:
      "We prioritize unscripted honesty over forced poses. From discreet family tears to authentic celebration laughter, we capture emotions as they actually happened.",
  },
  {
    number: "02",
    label: "CINEMATIC",
    icon: Film,
    tagline: "A visual style that feels timeless.",
    description:
      "Engineered with deliberate composition, refined contrast, natural skin tones, and rich audio design that retains its emotional power decades from today.",
  },
  {
    number: "03",
    label: "CREATIVE",
    icon: Sparkles,
    tagline: "Every shoot gets its own approach.",
    description:
      "No generic templates or rigid formulas. Whether it is an intimate haveli wedding or a modern fashion commercial, each project receives its own unique visual language.",
  },
  {
    number: "04",
    label: "COMPLETE",
    icon: Layers,
    tagline: "Photography, films, reels and editing under one roof.",
    description:
      "A seamless full-service creative workflow: photography, high-definition motion cinema, vertical viral reels, and Hollywood-grade DaVinci post-production.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-[#171717] relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Why Us"
          title="WHY PLAY THE STORY?"
          description="One creative studio designed for different kinds of visual stories. Crafted with relentless care from pre-production to master delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PILLARS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative bg-[#121212] border border-white/10 p-8 hover:border-[#c5a880]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-[#c5a880] tracking-widest font-semibold">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-white/10 group-hover:border-[#c5a880]/50 flex items-center justify-center text-[#c5a880] transition-colors group-hover:bg-[#c5a880]/10">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#fbf9f5] group-hover:text-[#dfc8a5] transition-colors mb-2 font-normal tracking-wide">
                    {item.label}
                  </h3>

                  <p className="text-xs text-[#c5a880] font-mono tracking-wider mb-4 leading-snug">
                    {item.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#a6a095] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#555]">
                  <span>Pillar {item.number}</span>
                  <span className="w-6 h-[1px] bg-white/10 group-hover:bg-[#c5a880]/60 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

