"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { MessageCircle, X } from "lucide-react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenWhatsApp = () => {
    const encoded = encodeURIComponent(siteConfig.contact.whatsappPrefilledMessage);
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${encoded}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end print:hidden">
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
            Namaste! Connect directly with our lead team to check wedding date availability or discuss custom cinema packages.
          </p>
          <button
            onClick={handleOpenWhatsApp}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-medium text-xs uppercase tracking-wider py-2.5 px-4 flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            Chat on WhatsApp
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with Play The Story on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#161616] border border-[#c5a880]/50 hover:border-[#c5a880] text-[#c5a880] hover:text-[#fbf9f5] shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(197,168,128,0.35)] transition-all duration-300 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#25D366] rounded-full border-2 border-[#080808]" />
        <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
      </button>
    </div>
  );
}
