"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Testimonial } from "@/types";
import { ImageUploader } from "./ImageUploader";
import { Button } from "@/components/ui/Button";
import { Plus, Edit3, Trash2, X, Star } from "lucide-react";

interface AdminTestimonialsViewProps {
  initialTestimonials: Testimonial[];
}

export function AdminTestimonialsView({
  initialTestimonials,
}: AdminTestimonialsViewProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState<Partial<Testimonial>>({
    client_name: "",
    wedding_event: "",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    review_text: "",
    photo_url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400&auto=format&fit=crop",
    featured: true,
    published: false,
  });

  const handleOpenNew = () => {
    setActiveTestimonial({
      client_name: "",
      wedding_event: "Wedding, Ahmedabad",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      review_text: "",
      photo_url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400&auto=format&fit=crop",
      featured: true,
      published: false,
    });
    setIsEditing(true);
  };

  const handleOpenEdit = (test: Testimonial) => {
    setActiveTestimonial({ ...test });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?")) return;

    try {
      const res = await fetch(`/api/admin/testimonials?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setTestimonials((prev) => prev.filter((t) => t.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const res = await fetch("/api/admin/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(activeTestimonial),
      });

      const data = await res.json();
      if (data.success && data.testimonial) {
        setTestimonials((prev) => {
          const idx = prev.findIndex((t) => t.id === data.testimonial.id);
          if (idx !== -1) {
            const next = [...prev];
            next[idx] = data.testimonial;
            return next;
          }
          return [data.testimonial, ...prev];
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
            Client Testimonials & Reviews
          </h1>
          <p className="text-xs text-[#a6a095] mt-1 font-light">
            Manage heartfelt love notes and wedding reviews from couples.
          </p>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={handleOpenNew}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Testimonial</span>
        </Button>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((test) => (
          <div
            key={test.id}
            className="bg-[#121212] border border-white/10 p-6 flex flex-col justify-between hover:border-[#c5a880]/40 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-[#c5a880]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < test.rating
                          ? "fill-[#c5a880] text-[#c5a880]"
                          : "text-white/20"
                      }`}
                    />
                  ))}
                </div>
                {test.featured && (
                  <span className="text-[10px] uppercase tracking-wider text-[#c5a880] bg-[#c5a880]/10 px-2 py-0.5 border border-[#c5a880]/30 font-mono">
                    Featured
                  </span>
                )}
              </div>

              <p className="font-serif text-sm text-[#fbf9f5] italic leading-relaxed mb-6 font-light">
                &ldquo;{test.review_text}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {test.photo_url ? (
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#c5a880]/40 shrink-0">
                    <Image
                      src={test.photo_url}
                      alt={test.client_name}
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center text-[10px] text-[#c5a880] font-serif font-bold shrink-0">
                    {test.client_name.substring(0, 2).toUpperCase()}
                  </div>
                )}
                <div>
                  <h4 className="text-xs font-medium text-[#fbf9f5]">
                    {test.client_name}
                  </h4>
                  <p className="text-[10px] text-[#888]">{test.wedding_event}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleOpenEdit(test)}
                  className="p-1.5 text-[#a6a095] hover:text-[#fbf9f5] hover:bg-white/5 transition-colors"
                  title="Edit Review"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(test.id)}
                  className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-950/20 transition-colors"
                  title="Delete Review"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#121212] border border-white/10 max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl my-8 relative">
            <button
              onClick={() => setIsEditing(false)}
              className="absolute top-4 right-4 p-2 text-[#888] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-mono">
                {activeTestimonial.id ? "Edit Testimonial" : "Add Testimonial"}
              </span>
              <h3 className="font-serif text-2xl text-[#fbf9f5] mt-1">
                {activeTestimonial.client_name || "New Review"}
              </h3>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                  Client / Couple Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya & Kabir"
                  value={activeTestimonial.client_name || ""}
                  onChange={(e) =>
                    setActiveTestimonial({
                      ...activeTestimonial,
                      client_name: e.target.value,
                    })
                  }
                  className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                    Wedding Event / Venue *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. The Ummed, Ahmedabad"
                    value={activeTestimonial.wedding_event || ""}
                    onChange={(e) =>
                      setActiveTestimonial({
                        ...activeTestimonial,
                        wedding_event: e.target.value,
                      })
                    }
                    className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                    Rating (Stars)
                  </label>
                  <select
                    value={activeTestimonial.rating || 5}
                    onChange={(e) =>
                      setActiveTestimonial({
                        ...activeTestimonial,
                        rating: Number(e.target.value),
                      })
                    }
                    className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value={5}>5 Stars (Exceptional)</option>
                    <option value={4}>4 Stars</option>
                    <option value={3}>3 Stars</option>
                  </select>
                </div>
              </div>

              <ImageUploader
                label="Couple Photo (Optional)"
                value={activeTestimonial.photo_url || ""}
                onChange={(url) =>
                  setActiveTestimonial({ ...activeTestimonial, photo_url: url })
                }
              />

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                  Review Text *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Client's review or love note..."
                  value={activeTestimonial.review_text || ""}
                  onChange={(e) =>
                    setActiveTestimonial({
                      ...activeTestimonial,
                      review_text: e.target.value,
                    })
                  }
                  className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-xs text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="featured-review-checkbox"
                  checked={Boolean(activeTestimonial.featured)}
                  onChange={(e) =>
                    setActiveTestimonial({
                      ...activeTestimonial,
                      featured: e.target.checked,
                    })
                  }
                  className="rounded border-white/10 bg-black text-[#c5a880] focus:ring-[#c5a880]"
                />
                <label
                  htmlFor="featured-review-checkbox"
                  className="text-xs text-[#fbf9f5] cursor-pointer"
                >
                  Feature this review on the homepage testimonials section
                </label>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="published-review-checkbox"
                  checked={Boolean(activeTestimonial.published)}
                  onChange={(e) => setActiveTestimonial({ ...activeTestimonial, published: e.target.checked })}
                  className="rounded border-white/10 bg-black text-[#c5a880] focus:ring-[#c5a880]"
                />
                <label htmlFor="published-review-checkbox" className="text-xs text-[#fbf9f5] cursor-pointer">
                  Publish this review on the live website
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
                  Save Review
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
