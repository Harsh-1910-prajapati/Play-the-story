import { NextRequest, NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin-auth";
import { isCloudinaryServerConfigured, uploadImage } from "@/lib/cloudinary-server";

export async function POST(request: NextRequest) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  if (!isCloudinaryServerConfigured()) {
    return NextResponse.json({ success: false, error: "Media storage is not configured" }, { status: 503 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/avif"]);
  if (!(file instanceof File) || !allowedTypes.has(file.type)) {
    return NextResponse.json({ success: false, error: "A valid image file is required" }, { status: 400 });
  }
  if (file.size > 10 * 1024 * 1024) {
    return NextResponse.json({ success: false, error: "Image must be smaller than 10MB" }, { status: 400 });
  }

  try {
    const result = await uploadImage(file);
    return NextResponse.json({ success: true, url: result.secure_url, public_id: result.public_id });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return NextResponse.json({ success: false, error: "Unable to upload image" }, { status: 502 });
  }
}