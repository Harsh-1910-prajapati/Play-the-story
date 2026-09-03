"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WeddingStory, StoryCategory } from "@/types";
import { formatDate } from "@/lib/utils";
import { ImageUploader } from "./ImageUploader";
import { Button } from "@/components/ui/Button";
import { Plus, Edit3, Trash2, ExternalLink, X, Check, Star } from "lucide-react";

interface AdminStoriesViewProps {
  initialStories: WeddingStory[];
}

export function AdminStoriesView({ initialStories }: AdminStoriesViewProps) {
  const [stories, setStories] = useState<WeddingStory[]>(initialStories);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [activeStory, setActiveStory] = useState<Partial<WeddingStory>>({
    couple_names: "",
    title: "",
    slug: "",
    wedding_date: new Date().toISOString().split("T")[0],
    location: "Ahmedabad, Gujarat",
    category: "Weddings",
    wedding_type: "Gujarati Royal Wedding",
    cover_image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    description: "",
    featured: false,
    film_url: "",
  });

  const handleOpenNew = () => {
    setActiveStory({
      couple_names: "",
      title: "",
      slug: "",
      wedding_date: new Date().toISOString().split("T")[0],
      location: "Ahmedabad, Gujarat",
      category: "Weddings",
      wedding_type: "Gujarati Wedding",
      cover_image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
      description: "",
      featured: false,
      film_url: "",
    });
    setIsEditing(true);
  };

  const handleOpenEdit = (story: WeddingStory) => {
    setActiveStory({ ...story });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this wedding story?")) return;

    try {
      const res = await fetch(`/api/admin/stories?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setStories((prev) => prev.filter((s) => s.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const autoSlug =
        activeStory.slug ||
        (activeStory.couple_names || activeStory.title || "story")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");

      const payload = { ...activeStory, slug: autoSlug };

      const res = await fetch("/api/admin/stories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success && data.story) {
        setStories((prev) => {
          const idx = prev.findIndex((s) => s.id === data.story.id);
          if (idx !== -1) {
            const next = [...prev];
            next[idx] = data.story;
            return next;
          }
          return [data.story, ...prev];
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
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h1 className="font-serif text-3xl text-[#fbf9f5] font-normal">
            Wedding Stories
          </h1>
          <p className="text-xs text-[#a6a095] mt-1 font-light">
            Manage your visual wedding documentary chapters published on the website.
          </p>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={handleOpenNew}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Wedding Story</span>
        </Button>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-[#121212] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#c5a880]/40 transition-colors"
          >
            <div>
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <Image
                  src={story.cover_image}
                  alt={story.couple_names}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 bg-black/80 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[#c5a880]">
                  {story.category}
                </div>
                {story.featured && (
                  <div className="absolute top-2 right-2 bg-[#c5a880] text-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <Star className="w-3 h-3 fill-black" />
                    Featured
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="text-[11px] text-[#a6a095] mb-1 font-light">
                  {story.location} • {formatDate(story.wedding_date)}
                </div>
                <h3 className="font-serif text-xl text-[#fbf9f5] font-medium">
                  {story.couple_names}
                </h3>
                <p className="text-xs text-[#dfc8a5] italic mt-0.5 line-clamp-1">
                  &ldquo;{story.title}&rdquo;
                </p>
                <p className="text-xs text-[#888] mt-2 line-clamp-2 font-light">
                  {story.description}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 bg-[#161616] border-t border-white/5 flex items-center justify-between">
              <Link
                href={`/stories/${story.slug}`}
                target="_blank"
                className="text-[11px] text-[#c5a880] hover:underline flex items-center gap-1"
              >
                <span>Preview</span>
                <ExternalLink className="w-3 h-3" />
              </Link>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenEdit(story)}
                  className="p-1.5 text-[#a6a095] hover:text-[#fbf9f5] hover:bg-white/5 transition-colors"
                  title="Edit Story"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(story.id)}
                  className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-950/20 transition-colors"
                  title="Delete Story"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit / Add Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#121212] border border-white/10 max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl my-8 relative">
            <button
              onClick={() => setIsEditing(false)}
              className="absolute top-4 right-4 p-2 text-[#888] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-mono">
                {activeStory.id ? "Edit Wedding Story" : "Create New Wedding Story"}
              </span>
              <h3 className="font-serif text-2xl text-[#fbf9f5] mt-1">
                {activeStory.couple_names || "New Story"}
              </h3>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                    Couple Names *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya & Kabir"
                    value={activeStory.couple_names || ""}
                    onChange={(e) =>
                      setActiveStory({ ...activeStory, couple_names: e.target.value })
                    }
                    className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                    Story Title / Headline *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. A Royal Heritage Union"
                    value={activeStory.title || ""}
                    onChange={(e) =>
                      setActiveStory({ ...activeStory, title: e.target.value })
                    }
                    className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                    Wedding Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={activeStory.wedding_date || ""}
                    onChange={(e) =>
                      setActiveStory({ ...activeStory, wedding_date: e.target.value })
                    }
                    className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                    Category *
                  </label>
                  <select
                    value={activeStory.category || "Weddings"}
                    onChange={(e) =>
                      setActiveStory({
                        ...activeStory,
                        category: e.target.value as StoryCategory,
                      })
                    }
                    className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="Weddings">Weddings</option>
                    <option value="Pre-Weddings">Pre-Weddings</option>
                    <option value="Engagements">Engagements</option>
                    <option value="Receptions">Receptions</option>
                    <option value="Events">Events</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. The Ummed, Ahmedabad"
                    value={activeStory.location || ""}
                    onChange={(e) =>
                      setActiveStory({ ...activeStory, location: e.target.value })
                    }
                    className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                    Wedding Type / Style
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Gujarati Royal Wedding"
                    value={activeStory.wedding_type || ""}
                    onChange={(e) =>
                      setActiveStory({ ...activeStory, wedding_type: e.target.value })
                    }
                    className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                    Film URL (Optional YouTube/Vimeo)
                  </label>
                  <input
                    type="url"
                    placeholder="https://www.youtube.com/watch?v=..."
                    value={activeStory.film_url || ""}
                    onChange={(e) =>
                      setActiveStory({ ...activeStory, film_url: e.target.value })
                    }
                    className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
              </div>

              {/* Cover Image Uploader */}
              <ImageUploader
                label="Cover Image *"
                value={activeStory.cover_image || ""}
                onChange={(url) =>
                  setActiveStory({ ...activeStory, cover_image: url })
                }
              />

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                  Story Narrative / Description *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write the narrative description of the wedding celebration..."
                  value={activeStory.description || ""}
                  onChange={(e) =>
                    setActiveStory({ ...activeStory, description: e.target.value })
                  }
                  className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              {/* Featured Checkbox */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="featured-checkbox"
                  checked={Boolean(activeStory.featured)}
                  onChange={(e) =>
                    setActiveStory({ ...activeStory, featured: e.target.checked })
                  }
                  className="rounded border-white/10 bg-black text-[#c5a880] focus:ring-[#c5a880]"
                />
                <label
                  htmlFor="featured-checkbox"
                  className="text-xs text-[#fbf9f5] cursor-pointer"
                >
                  Feature this story prominently on the homepage editorial section
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
                  Save Story
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
