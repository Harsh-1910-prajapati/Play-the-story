import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Camera, Film, Heart, Sparkles, Users, Award } from "lucide-react";

const PILLARS = [
  {
    icon: Heart,
    title: "Emotion-First Philosophy",
    description:
      "We prioritize genuine moments over stiff choreography. The secret glance of the groom, the silent tears of a mother, and the unrestrained laughter of friends are the heartbeat of our frames.",
  },
  {
    icon: Film,
    title: "Cinematic Filmmaking",
    description:
      "Our wedding films are conceived as genuine cinematic documentaries with 4K cinema cameras, anamorphic lensing, and bespoke narrative audio scoring.",
  },
  {
    icon: Camera,
    title: "Authentic Storytelling",
    description:
      "Every love story has its own rhythm. We take time to understand your personal journey, cultural traditions, and family dynamics before the camera ever rolls.",
  },
  {
    icon: Sparkles,
    title: "Meticulous Attention to Detail",
    description:
      "From the delicate weave of hand-embroidered silks and family jewelry to the atmospheric lighting of your mandap, every artistic detail is captured with museum-grade care.",
  },
  {
    icon: Users,
    title: "Discreet & Professional Crew",
    description:
      "Our team moves with seamless etiquette. We believe in being present everywhere without turning your sacred wedding into an overwhelming film set.",
  },
  {
    icon: Award,
    title: "Bespoke Post-Production",
    description:
      "Each photograph is individually edited and custom color graded. We do not use batch filters; every frame is crafted to look timeless twenty years from now.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-[#0d0d0d] relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Craft & Promise"
          title="Why Couples Entrust Us With Their Lifetime Memories"
          description="We blend the quiet intimacy of fine-art photojournalism with the emotional grandeur of cinema, rooted in the heritage of Gujarat and destinations across the globe."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {PILLARS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#141414] border border-white/10 p-8 hover:border-[#c5a880]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#1e1e1e] border border-white/10 group-hover:border-[#c5a880]/60 flex items-center justify-center text-[#c5a880] mb-6 transition-colors group-hover:bg-[#c5a880]/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#fbf9f5] group-hover:text-[#dfc8a5] transition-colors mb-3 font-normal">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#a6a095] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#666]">
                  <span>Pillar {String(index + 1).padStart(2, "0")}</span>
                  <span className="w-8 h-[1px] bg-white/10 group-hover:bg-[#c5a880]/60 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
