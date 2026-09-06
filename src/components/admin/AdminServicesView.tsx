"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ServiceItem } from "@/types";
import { ImageUploader } from "./ImageUploader";
import { Button } from "@/components/ui/Button";
import { Plus, Edit3, Trash2, X, Check } from "lucide-react";

interface AdminServicesViewProps {
  initialServices: ServiceItem[];
}

export function AdminServicesView({ initialServices }: AdminServicesViewProps) {
  const [services, setServices] = useState<ServiceItem[]>(initialServices);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [featureInput, setFeatureInput] = useState("");
  const [activeService, setActiveService] = useState<Partial<ServiceItem>>({
    title: "",
    slug: "",
    short_description: "",
    full_description: "",
    image_url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    features: [],
    published: false,
  });

  const handleOpenNew = () => {
    setActiveService({
      title: "",
      slug: "",
      short_description: "",
      full_description: "",
      image_url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Dedicated lead candid and editorial photographers",
        "Fine-art signature color grading",
        "Private high-resolution online gallery",
      ],
      published: false,
    });
    setIsEditing(true);
  };

  const handleOpenEdit = (service: ServiceItem) => {
    setActiveService({ ...service });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;

    try {
      const res = await fetch(`/api/admin/services?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setServices((prev) => prev.filter((s) => s.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddFeature = () => {
    if (!featureInput.trim()) return;
    const current = activeService.features || [];
    setActiveService({ ...activeService, features: [...current, featureInput.trim()] });
    setFeatureInput("");
  };

  const handleRemoveFeature = (index: number) => {
    const current = activeService.features || [];
    setActiveService({
      ...activeService,
      features: current.filter((_, i) => i !== index),
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const autoSlug =
        activeService.slug ||
        (activeService.title || "service").toLowerCase().replace(/[^a-z0-9]+/g, "-");

      const payload = { ...activeService, slug: autoSlug };

      const res = await fetch("/api/admin/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success && data.service) {
        setServices((prev) => {
          const idx = prev.findIndex((s) => s.id === data.service.id);
          if (idx !== -1) {
            const next = [...prev];
            next[idx] = data.service;
            return next;
          }
          return [...prev, data.service];
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#25231F]/15">
        <div>
          <h1 className="font-serif text-3xl text-[#25231F] font-normal">
            Services & Deliverables
          </h1>
          <p className="text-xs text-[#8A8175] mt-1 font-light">
            Manage packages, offerings, and deliverables shown across the website.
          </p>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={handleOpenNew}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Service</span>
        </Button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[#F5F1EA] border border-[#25231F]/15 overflow-hidden flex flex-col justify-between hover:border-[#B39B7A]/40 transition-colors"
          >
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#25231F]">
                <Image
                  src={service.image_url}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="font-serif text-xl text-[#25231F] font-medium mb-1">
                  {service.title}
                </h3>
                <p className="text-xs text-[#888] line-clamp-2 font-light mb-4">
                  {service.short_description}
                </p>

                {service.features && service.features.length > 0 && (
                  <div className="text-[11px] text-[#B39B7A] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    <span>{service.features.length} Deliverables Configured</span>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 bg-[#F5F1EA] border-t border-[#25231F]/10 flex items-center justify-end gap-2">
              <button
                onClick={() => handleOpenEdit(service)}
                className="p-1.5 text-[#8A8175] hover:text-[#25231F] hover:bg-[#D8C9B5] transition-colors"
                title="Edit Service"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(service.id)}
                className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-950/20 transition-colors"
                title="Delete Service"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit / Add Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#25231F]/85 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#F5F1EA] border border-[#25231F]/15 max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl my-8 relative">
            <button
              onClick={() => setIsEditing(false)}
              className="absolute top-4 right-4 p-2 text-[#888] hover:text-[#25231F]"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#B39B7A] font-mono">
                {activeService.id ? "Edit Service" : "Add Service"}
              </span>
              <h3 className="font-serif text-2xl text-[#25231F] mt-1">
                {activeService.title || "New Service"}
              </h3>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B39B7A] mb-1 font-medium">
                  Service Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Wedding Photography"
                  value={activeService.title || ""}
                  onChange={(e) =>
                    setActiveService({ ...activeService, title: e.target.value })
                  }
                  className="w-full bg-[#F5F1EA] border border-[#25231F]/15 px-3 py-2 text-xs text-[#25231F] focus:outline-none focus:border-[#B39B7A]"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="published-service-checkbox"
                  checked={Boolean(activeService.published)}
                  onChange={(e) => setActiveService({ ...activeService, published: e.target.checked })}
                  className="rounded border-[#25231F]/15 bg-[#25231F] text-[#B39B7A] focus:ring-[#B39B7A]"
                />
                <label htmlFor="published-service-checkbox" className="text-xs text-[#25231F] cursor-pointer">
                  Publish this service on the live website
                </label>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B39B7A] mb-1 font-medium">
                  Short Description (Homepage preview) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="One sentence summary..."
                  value={activeService.short_description || ""}
                  onChange={(e) =>
                    setActiveService({
                      ...activeService,
                      short_description: e.target.value,
                    })
                  }
                  className="w-full bg-[#F5F1EA] border border-[#25231F]/15 px-3 py-2 text-xs text-[#25231F] focus:outline-none focus:border-[#B39B7A]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B39B7A] mb-1 font-medium">
                  Full Description *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Detailed explanation of this service..."
                  value={activeService.full_description || ""}
                  onChange={(e) =>
                    setActiveService({
                      ...activeService,
                      full_description: e.target.value,
                    })
                  }
                  className="w-full bg-[#F5F1EA] border border-[#25231F]/15 px-3 py-2 text-xs text-[#25231F] focus:outline-none focus:border-[#B39B7A]"
                />
              </div>

              <ImageUploader
                label="Cover Image *"
                value={activeService.image_url || ""}
                onChange={(url) =>
                  setActiveService({ ...activeService, image_url: url })
                }
              />

              {/* Features List */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B39B7A] mb-1 font-medium">
                  Included Features / Deliverables
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Add deliverable..."
                    value={featureInput}
                    onChange={(e) => setFeatureInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddFeature();
                      }
                    }}
                    className="flex-1 bg-[#F5F1EA] border border-[#25231F]/15 px-3 py-1.5 text-xs text-[#25231F] focus:outline-none focus:border-[#B39B7A]"
                  />
                  <button
                    type="button"
                    onClick={handleAddFeature}
                    className="px-3 py-1.5 bg-[#D8C9B5] hover:bg-[#8A8175] text-xs text-[#25231F] border border-[#25231F]/15"
                  >
                    Add
                  </button>
                </div>

                <div className="space-y-1.5 max-h-32 overflow-y-auto">
                  {(activeService.features || []).map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between bg-[#F5F1EA] p-2 text-xs text-[#8A8175] border border-[#25231F]/10"
                    >
                      <span className="truncate">{feat}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveFeature(idx)}
                        className="text-red-400 hover:text-red-300 p-0.5"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#25231F]/15 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-xs uppercase tracking-wider text-[#8A8175] hover:text-[#25231F]"
                >
                  Cancel
                </button>
                <Button
                  type="submit"
                  variant="gold"
                  size="md"
                  isLoading={isSaving}
                >
                  Save Service
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
