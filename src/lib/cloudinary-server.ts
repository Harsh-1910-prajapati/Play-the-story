import "server-only";

import { createHash } from "crypto";

const cloudName = process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "";
const apiKey = process.env.CLOUDINARY_API_KEY || "";
const apiSecret = process.env.CLOUDINARY_API_SECRET || "";

function signParams(params: Record<string, string>) {
  const serialized = Object.entries(params)
    .filter(([, value]) => value)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return createHash("sha1").update(`${serialized}${apiSecret}`).digest("hex");
}

export function isCloudinaryServerConfigured() {
  return Boolean(cloudName && apiKey && apiSecret);
}

export async function uploadImage(file: File) {
  if (!isCloudinaryServerConfigured()) throw new Error("Cloudinary is not configured");

  const timestamp = Math.floor(Date.now() / 1000).toString();
  const params = { folder: "play-the-story/gallery", timestamp };
  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", apiKey);
  formData.append("timestamp", timestamp);
  formData.append("folder", params.folder);
  formData.append("signature", signParams(params));

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) throw new Error("Cloudinary upload failed");
  return response.json() as Promise<{ secure_url: string; public_id: string }>;
}

export async function deleteImage(publicId: string) {
  if (!isCloudinaryServerConfigured()) return;

  const timestamp = Math.floor(Date.now() / 1000).toString();
  const params = { invalidate: "true", public_id: publicId, timestamp, type: "upload" };
  const formData = new FormData();
  Object.entries(params).forEach(([key, value]) => formData.append(key, value));
  formData.append("api_key", apiKey);
  formData.append("signature", signParams(params));

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) throw new Error("Cloudinary delete failed");
}