"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { getWhatsAppUrl } from "@/config/site";
import { MessageCircle, X, ArrowRight } from "lucide-react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Hide on admin routes
  if (pathname.startsWith("/admin")) {
    return null;
  }

  const handleOpenWhatsApp = () => {
    window.open(getWhatsAppUrl(), "_blank");
  };

  return (
    <>
      {/* Mobile Sticky Bottom CTA */}
      <aside aria-label="Quick contact" className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#0d0d0d]/95 backdrop-blur-md border-t border-[#c5a880]/30 px-4 py-3 flex items-center justify-between gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.8)] print:hidden">
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-mono leading-none">
            Direct Studio Line
          </span>
          <span className="font-serif text-xs text-[#fbf9f5] mt-0.5">
            Availability & Inquiries
          </span>
        </div>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs uppercase tracking-widest px-4 py-2.5 flex items-center gap-2 rounded-none transition-colors active:scale-95"
        >
          <span>WHATSAPP</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </aside>

      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end print:hidden">
        {isOpen && (
          <div className="mb-3 w-72 bg-[#141414] border border-[#c5a880]/30 shadow-2xl p-4 text-[#fbf9f5] animate-in slide-in-from-bottom-5 duration-200">
            <div className="flex items-start justify-between pb-3 border-b border-white/10 mb-3">
              <div>
                <p className="font-serif text-base text-[#fbf9f5]">Play The Story</p>
                <p className="text-[10px] uppercase tracking-wider text-[#c5a880]">
                  Ahmedabad Studio • Active Now
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#888] hover:text-[#fbf9f5] p-1"
                aria-label="Close message popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-[#a6a095] mb-4 leading-relaxed font-light">
              Namaste! Connect directly with our creative team to check shoot availability or discuss wedding films, portraits & campaigns.
            </p>
            <button
              onClick={handleOpenWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-medium text-xs uppercase tracking-wider py-2.5 px-4 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              Chat on WhatsApp
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Chat with Play The Story on WhatsApp"
          className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#161616] border border-[#c5a880]/50 hover:border-[#c5a880] text-[#c5a880] hover:text-[#fbf9f5] shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(197,168,128,0.35)] transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#25D366] rounded-full border-2 border-[#080808]" />
          <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
        </button>
      </div>
    </>
  );
}

