"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

export function VideoPlayerModal({
  isOpen,
  onClose,
  videoUrl,
  title,
}: VideoPlayerModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoUrl) return null;

  // Format video URL for embedding
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      let id = "";
      if (url.includes("youtu.be/")) {
        id = url.split("youtu.be/")[1]?.split("?")[0];
      } else if (url.includes("v=")) {
        id = url.split("v=")[1]?.split("&")[0];
      }
      return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
    }
    if (url.includes("vimeo.com")) {
      const id = url.split("/").pop();
      return `https://player.vimeo.com/video/${id}?autoplay=1&color=c5a880`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);
  const isDirectVideo =
    embedUrl.endsWith(".mp4") || embedUrl.endsWith(".webm") || embedUrl.endsWith(".mov");

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
    >
      <div
        className="fixed inset-0 bg-black/95 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-5xl z-10">
        <div className="flex items-center justify-between pb-3 text-[#fbf9f5]">
          <h3 className="font-serif text-lg sm:text-xl text-[#fbf9f5] truncate pr-4">
            {title || "Cinematic Wedding Film"}
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-[#a6a095] hover:text-[#fbf9f5] hover:bg-white/10 transition-colors"
            aria-label="Close cinema player"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="relative w-full aspect-video bg-black border border-white/15 overflow-hidden shadow-2xl">
          {isDirectVideo ? (
            <video
              src={embedUrl}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          ) : (
            <iframe
              src={embedUrl}
              title={title || "Wedding Film"}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
}
