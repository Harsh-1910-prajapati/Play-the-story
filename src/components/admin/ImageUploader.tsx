"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Upload, X, Check } from "lucide-react";
interface ImageUploaderProps {
  label?: string;
  value: string;
  onChange: (url: string) => void;
  onUpload?: (result: { url: string; public_id: string }) => void;
  helperText?: string;
}

export function ImageUploader({
  label = "Cover Photograph",
  value,
  onChange,
  onUpload,
  helperText = "Enter high-resolution image URL (Unsplash or Cloudinary) or upload.",
}: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setUploadError("Image file size must be less than 10MB.");
      return;
    }

    setIsUploading(true);
    setUploadError("");

    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/media/image", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Cloudinary upload failed");
      onChange(data.url);
      onUpload?.({ url: data.url, public_id: data.public_id });
    } catch (err) {
      console.error(err);
      setUploadError("Failed to upload image. Check media storage configuration or provide a direct URL.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-xs uppercase tracking-wider text-[#B39B7A] font-medium">
        {label}
      </label>

      {/* URL Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://images.unsplash.com/... or Cloudinary URL"
          className="flex-1 bg-[#F5F1EA] border border-[#25231F]/15 px-3 py-2 text-xs text-[#25231F] placeholder:text-[#8A8175] focus:outline-none focus:border-[#B39B7A]"
        />
        <label className="cursor-pointer bg-[#D8C9B5] hover:bg-[#8A8175] border border-[#25231F]/15 px-3 py-2 text-xs text-[#25231F] flex items-center gap-1.5 transition-colors shrink-0">
          <Upload className="w-3.5 h-3.5 text-[#B39B7A]" />
          <span>{isUploading ? "Uploading..." : "Upload"}</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            disabled={isUploading}
            className="hidden"
          />
        </label>
      </div>

      {uploadError && (
        <p className="text-[11px] text-red-400">{uploadError}</p>
      )}

      {helperText && !uploadError && (
        <p className="text-[11px] text-[#777] font-light">{helperText}</p>
      )}

      {/* Preview */}
      {value && (
        <div className="relative aspect-video max-w-sm overflow-hidden bg-[#25231F] border border-[#25231F]/15 mt-2">
          <Image
            src={value}
            alt="Uploaded Preview"
            fill
            sizes="300px"
            className="object-cover"
          />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-2 right-2 p-1.5 bg-[#25231F]/80 hover:bg-red-950 text-white rounded-full transition-colors"
            title="Remove image"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="absolute bottom-2 left-2 bg-[#25231F]/80 px-2 py-0.5 text-[10px] text-[#B39B7A] flex items-center gap-1">
            <Check className="w-3 h-3" />
            <span>Image Attached</span>
          </div>
        </div>
      )}
    </div>
  );
}
