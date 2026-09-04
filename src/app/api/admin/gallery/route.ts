import { NextRequest, NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin-auth";
import { getSupabaseAdminClient } from "@/lib/supabase/server";
import { deleteImage } from "@/lib/cloudinary-server";

function badRequest(error: string) {
  return NextResponse.json({ success: false, error }, { status: 400 });
}

export async function GET(req: NextRequest) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const storyId = new URL(req.url).searchParams.get("story_id");
  if (!storyId) return badRequest("Missing story_id");

  const client = getSupabaseAdminClient();
  if (!client) return NextResponse.json({ success: false, error: "Database is not configured" }, { status: 503 });

  const { data, error } = await client
    .from("wedding_images")
    .select("*")
    .eq("story_id", storyId)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Fetch gallery error:", error);
    return NextResponse.json({ success: false, error: "Unable to load gallery" }, { status: 500 });
  }

  return NextResponse.json({ success: true, images: data || [] });
}

export async function POST(req: NextRequest) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const body = await req.json().catch(() => null);
  const storyId = typeof body?.story_id === "string" ? body.story_id.trim() : "";
  const imageUrl = typeof body?.image_url === "string" ? body.image_url.trim() : "";
  const altText = typeof body?.alt_text === "string" ? body.alt_text.trim() : "";
  if (!storyId || !imageUrl || !altText) return badRequest("story_id, image_url, and alt_text are required");

  const client = getSupabaseAdminClient();
  if (!client) return NextResponse.json({ success: false, error: "Database is not configured" }, { status: 503 });

  const { data, error } = await client
    .from("wedding_images")
    .insert({ story_id: storyId, image_url: imageUrl, alt_text: altText, public_id: body.public_id || null, sort_order: Number(body.sort_order) || 0 })
    .select()
    .single();

  if (error) {
    console.error("Create gallery image error:", error);
    return NextResponse.json({ success: false, error: "Unable to add gallery image" }, { status: 500 });
  }

  return NextResponse.json({ success: true, image: data }, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const body = await req.json().catch(() => null);
  if (typeof body?.id !== "string" || !body.id) return badRequest("Missing image id");
  const updates: { alt_text?: string; sort_order?: number } = {};
  if (typeof body.alt_text === "string") updates.alt_text = body.alt_text.trim();
  if (Number.isInteger(body.sort_order)) updates.sort_order = body.sort_order;
  if (!Object.keys(updates).length) return badRequest("No gallery changes supplied");

  const client = getSupabaseAdminClient();
  if (!client) return NextResponse.json({ success: false, error: "Database is not configured" }, { status: 503 });
  const { data, error } = await client.from("wedding_images").update(updates).eq("id", body.id).select().single();
  if (error) return NextResponse.json({ success: false, error: "Unable to update gallery image" }, { status: 500 });
  return NextResponse.json({ success: true, image: data });
}

export async function DELETE(req: NextRequest) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const id = new URL(req.url).searchParams.get("id");
  if (!id) return badRequest("Missing image id");
  const client = getSupabaseAdminClient();
  if (!client) return NextResponse.json({ success: false, error: "Database is not configured" }, { status: 503 });
  const { data: image } = await client.from("wedding_images").select("public_id").eq("id", id).single();
  const { error } = await client.from("wedding_images").delete().eq("id", id);
  if (error) return NextResponse.json({ success: false, error: "Unable to delete gallery image" }, { status: 500 });
  if (image?.public_id) {
    try {
      await deleteImage(image.public_id);
    } catch (cloudinaryError) {
      console.error("Cloudinary gallery delete error:", cloudinaryError);
    }
  }
  return NextResponse.json({ success: true });
}