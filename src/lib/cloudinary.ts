/**
 * Cloudinary & Image URL Optimization Utilities
 */

export function getOptimizedImageUrl(
  url: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number | "auto";
    format?: "auto" | "webp" | "avif";
    crop?: "fill" | "fit" | "limit" | "thumb";
  }
): string {
  if (!url) return "";

  // Cloudinary image URL transformation
  if (url.includes("res.cloudinary.com")) {
    const parts = url.split("/upload/");
    if (parts.length === 2) {
      const transforms: string[] = [
        options?.format ? `f_${options.format}` : "f_auto",
        options?.quality ? `q_${options.quality}` : "q_auto",
      ];

      if (options?.width) transforms.push(`w_${options.width}`);
      if (options?.height) transforms.push(`h_${options.height}`);
      if (options?.crop) transforms.push(`c_${options.crop}`);

      return `${parts[0]}/upload/${transforms.join(",")}/${parts[1]}`;
    }
  }

  // Unsplash image optimization
  if (url.includes("images.unsplash.com")) {
    const parsed = new URL(url);
    if (options?.width) parsed.searchParams.set("w", options.width.toString());
    parsed.searchParams.set("auto", "format");
    parsed.searchParams.set("fit", "crop");
    parsed.searchParams.set("q", options?.quality ? options.quality.toString() : "80");
    return parsed.toString();
  }

  return url;
}

export const CLOUDINARY_CONFIG = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
  uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "",
};
