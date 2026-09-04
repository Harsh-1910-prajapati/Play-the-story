import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What kind of shoots do you cover?",
    a: "We are a full-service creative studio covering Weddings, Pre-Weddings, Couple sessions, Events & Milestones, Personal & Fashion Portraits, Commercial Campaigns, Brand Films, Social Media Content Creation, and Video Editing.",
  },
  {
    q: "Do you travel outside Ahmedabad?",
    a: "Yes, absolutely. While our primary studio is based along Sindhu Bhavan Marg in Ahmedabad, Gujarat, our team regularly travels for destination weddings, commercial shoots, and fashion campaigns across India (Rajasthan, Goa, Mumbai, Delhi) and internationally.",
  },
  {
    q: "Can we customize a package?",
    a: "Every celebration and commercial campaign is unique. We offer customizable bespoke collections tailored to your timeline, crew requirements, deliverable formats (albums, 4K films, Instagram reels), and creative vision.",
  },
  {
    q: "Do you provide both photography and films?",
    a: "Yes. Having photography and cinematography handled by a single coordinated team ensures unified aesthetics, consistent color grading, and zero friction between camera operators during your shoot.",
  },
  {
    q: "Do you also handle editing?",
    a: "Yes. Post-production is one of our core pillars. We handle high-resolution image retouching, Hollywood-grade DaVinci Resolve color grading, narrative film assembly, audio restoration, and fast-turnaround vertical social reels entirely in-house.",
  },
  {
    q: "How do we book?",
    a: "Simply reach out via our contact form or chat with us directly on WhatsApp. We will check availability for your dates, schedule an initial consultation (in studio or over video call), and guide you through reserving your spot.",
  },
];

export function HomeFAQ() {
  return (
    <section className="py-24 sm:py-32 bg-[#0d0d0d] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Frequently Asked Questions"
          title="LET'S CLEAR A FEW THINGS"
          description="Everything you need to know about working with Play The Story, our coverage, travel, and booking process."
        />

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
              <details
                key={idx}
                open={idx === 0}
                className="group border border-white/10 transition-colors duration-300 bg-[#121212] open:border-[#c5a880]/50 hover:border-white/20"
              >
                <summary
                  className="list-none w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#c5a880]"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#fbf9f5] font-normal tracking-wide">
                    {faq.q}
                  </span>
                  <span
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-[#c5a880] transition-transform duration-300 group-open:rotate-180 group-open:bg-[#c5a880]/10 group-open:border-[#c5a880]/40"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </summary>

                <div id={`faq-answer-${idx}`} className="px-6 pb-6 pt-1 text-sm text-[#a6a095] font-light leading-relaxed border-t border-white/5">
                  <p>{faq.a}</p>
                </div>
              </details>
          ))}
        </div>
      </div>
    </section>
  );
}
