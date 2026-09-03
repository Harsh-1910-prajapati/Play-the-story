"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Film } from "@/types";
import { ImageUploader } from "./ImageUploader";
import { Button } from "@/components/ui/Button";
import { Plus, Edit3, Trash2, Play, X, Star } from "lucide-react";
import { VideoPlayerModal } from "@/components/ui/VideoPlayerModal";

interface AdminFilmsViewProps {
  initialFilms: Film[];
}

export function AdminFilmsView({ initialFilms }: AdminFilmsViewProps) {
  const [films, setFilms] = useState<Film[]>(initialFilms);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [previewVideoUrl, setPreviewVideoUrl] = useState<string | null>(null);
  const [activeFilm, setActiveFilm] = useState<Partial<Film>>({
    title: "",
    couple_names: "",
    location: "Ahmedabad, Gujarat",
    duration: "04:30",
    category: "Wedding Teaser",
    video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail_url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  });

  const handleOpenNew = () => {
    setActiveFilm({
      title: "",
      couple_names: "",
      location: "Ahmedabad, Gujarat",
      duration: "04:30",
      category: "Wedding Teaser",
      video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail_url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
      featured: false,
    });
    setIsEditing(true);
  };

  const handleOpenEdit = (film: Film) => {
    setActiveFilm({ ...film });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this film?")) return;

    try {
      const res = await fetch(`/api/admin/films?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setFilms((prev) => prev.filter((f) => f.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const res = await fetch("/api/admin/films", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(activeFilm),
      });

      const data = await res.json();
      if (data.success && data.film) {
        setFilms((prev) => {
          const idx = prev.findIndex((f) => f.id === data.film.id);
          if (idx !== -1) {
            const next = [...prev];
            next[idx] = data.film;
            return next;
          }
          return [data.film, ...prev];
        });
        setIsEditing(false);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h1 className="font-serif text-3xl text-[#fbf9f5] font-normal">
            Cinematic Films Manager
          </h1>
          <p className="text-xs text-[#a6a095] mt-1 font-light">
            Add and manage 4K wedding films, highlights, teasers, and pre-wedding movies.
          </p>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={handleOpenNew}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Film</span>
        </Button>
      </div>

      {/* Films Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {films.map((film) => (
          <div
            key={film.id}
            className="bg-[#121212] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#c5a880]/40 transition-colors"
          >
            <div>
              {/* Thumbnail */}
              <div
                onClick={() => setPreviewVideoUrl(film.video_url)}
                className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer group"
              >
                <Image
                  src={film.thumbnail_url}
                  alt={film.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#c5a880] text-black flex items-center justify-center pl-0.5 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-black" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-[10px] text-white font-mono">
                  {film.duration}
                </div>
                {film.featured && (
                  <div className="absolute top-2 right-2 bg-[#c5a880] text-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <Star className="w-3 h-3 fill-black" />
                    Featured
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-wider text-[#c5a880] mb-1 font-mono">
                  {film.category} • {film.location}
                </div>
                <h3 className="font-serif text-xl text-[#fbf9f5] font-medium">
                  {film.title}
                </h3>
                <p className="text-xs text-[#dfc8a5] mt-0.5 font-medium">
                  {film.couple_names}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 bg-[#161616] border-t border-white/5 flex items-center justify-between">
              <button
                onClick={() => setPreviewVideoUrl(film.video_url)}
                className="text-[11px] text-[#c5a880] hover:underline flex items-center gap-1"
              >
                <span>Preview Cinema</span>
                <Play className="w-3 h-3" />
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenEdit(film)}
                  className="p-1.5 text-[#a6a095] hover:text-[#fbf9f5] hover:bg-white/5 transition-colors"
                  title="Edit Film"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(film.id)}
                  className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-950/20 transition-colors"
                  title="Delete Film"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Film Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#121212] border border-white/10 max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl my-8 relative">
            <button
              onClick={() => setIsEditing(false)}
              className="absolute top-4 right-4 p-2 text-[#888] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-mono">
                {activeFilm.id ? "Edit Film" : "Add New Film"}
              </span>
              <h3 className="font-serif text-2xl text-[#fbf9f5] mt-1">
                {activeFilm.title || "New Film"}
              </h3>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                    Film Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eternal Echoes"
                    value={activeFilm.title || ""}
                    onChange={(e) =>
                      setActiveFilm({ ...activeFilm, title: e.target.value })
                    }
                    className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                    Couple Names *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya & Kabir"
                    value={activeFilm.couple_names || ""}
                    onChange={(e) =>
                      setActiveFilm({ ...activeFilm, couple_names: e.target.value })
                    }
                    className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ahmedabad, Gujarat"
                    value={activeFilm.location || ""}
                    onChange={(e) =>
                      setActiveFilm({ ...activeFilm, location: e.target.value })
                    }
                    className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                    Duration *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="04:30"
                    value={activeFilm.duration || ""}
                    onChange={(e) =>
                      setActiveFilm({ ...activeFilm, duration: e.target.value })
                    }
                    className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                    Category *
                  </label>
                  <select
                    value={activeFilm.category || "Wedding Teaser"}
                    onChange={(e) =>
                      setActiveFilm({ ...activeFilm, category: e.target.value })
                    }
                    className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="Wedding Teaser">Wedding Teaser</option>
                    <option value="Feature Film">Feature Film</option>
                    <option value="Pre-Wedding Film">Pre-Wedding Film</option>
                    <option value="Engagement Highlight">Engagement Highlight</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                  Video URL (YouTube or Vimeo) *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={activeFilm.video_url || ""}
                  onChange={(e) =>
                    setActiveFilm({ ...activeFilm, video_url: e.target.value })
                  }
                  className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <ImageUploader
                label="Film Thumbnail Poster *"
                value={activeFilm.thumbnail_url || ""}
                onChange={(url) =>
                  setActiveFilm({ ...activeFilm, thumbnail_url: url })
                }
              />

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="featured-film-checkbox"
                  checked={Boolean(activeFilm.featured)}
                  onChange={(e) =>
                    setActiveFilm({ ...activeFilm, featured: e.target.checked })
                  }
                  className="rounded border-white/10 bg-black text-[#c5a880] focus:ring-[#c5a880]"
                />
                <label
                  htmlFor="featured-film-checkbox"
                  className="text-xs text-[#fbf9f5] cursor-pointer"
                >
                  Feature this film prominently on the homepage
                </label>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-xs uppercase tracking-wider text-[#a6a095] hover:text-white"
                >
                  Cancel
                </button>
                <Button
                  type="submit"
                  variant="gold"
                  size="md"
                  isLoading={isSaving}
                >
                  Save Film
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Video Preview Modal */}
      {previewVideoUrl && (
        <VideoPlayerModal
          isOpen={Boolean(previewVideoUrl)}
          onClose={() => setPreviewVideoUrl(null)}
          videoUrl={previewVideoUrl}
          title="Film Preview"
        />
      )}
    </div>
  );
}
