"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { id: string; image_url: string; caption?: string }[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [prevInitialIndex, setPrevInitialIndex] = useState(initialIndex);

  if (prevInitialIndex !== initialIndex) {
    setPrevInitialIndex(initialIndex);
    setCurrentIndex(initialIndex);
  }

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
    >
      <div
        className="fixed inset-0 bg-[#25231F]/95 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full h-full max-w-6xl flex flex-col justify-between py-4">
        {/* Top bar */}
        <div className="flex items-center justify-between text-[#25231F] px-4">
          <div className="text-xs uppercase tracking-widest text-[#B39B7A]">
            Photo {currentIndex + 1} of {images.length}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#8A8175] hover:text-[#25231F] hover:bg-white/10 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main image container */}
        <div className="relative flex-1 my-3 flex items-center justify-center min-h-[50vh]">
          {/* Navigation Prev */}
          <button
            onClick={handlePrev}
            aria-label="Previous photograph"
            className="absolute left-2 sm:left-4 z-20 p-3 bg-[#25231F]/60 hover:bg-[#25231F] text-white hover:text-[#B39B7A] border border-[#25231F]/15 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Current Image */}
          <div className="relative w-full h-full max-h-[78vh]">
            <Image
              src={current.image_url}
              alt={current.caption || "Wedding photograph"}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>

          {/* Navigation Next */}
          <button
            onClick={handleNext}
            aria-label="Next photograph"
            className="absolute right-2 sm:right-4 z-20 p-3 bg-[#25231F]/60 hover:bg-[#25231F] text-white hover:text-[#B39B7A] border border-[#25231F]/15 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom caption */}
        {current.caption && (
          <div className="text-center text-xs sm:text-sm text-[#8A8175] font-serif italic py-2 max-w-xl mx-auto">
            &ldquo;{current.caption}&rdquo;
          </div>
        )}
      </div>
    </div>
  );
}
