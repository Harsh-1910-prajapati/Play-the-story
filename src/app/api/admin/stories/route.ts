import { NextRequest, NextResponse } from "next/server";
import { dataRepository } from "@/lib/data/repository";
import { requireAdminApi } from "@/lib/admin-auth";
import { validateAdminPayload } from "@/lib/admin-validation";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  try {
    const stories = await dataRepository.getStories(undefined, true);
    return NextResponse.json({ success: true, stories });
  } catch (err) {
    console.error("Fetch stories error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  try {
    const body = await req.json();
    const validationError = validateAdminPayload("story", body);
    if (validationError) return NextResponse.json({ success: false, error: validationError }, { status: 400 });
    const saved = await dataRepository.saveStory(body);
    return NextResponse.json({ success: true, story: saved });
  } catch (err) {
    console.error("Save story error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, error: "Missing story id" }, { status: 400 });
    }

    await dataRepository.deleteStory(id);
    return NextResponse.json({ success: true, message: "Story deleted" });
  } catch (err) {
    console.error("Delete story error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
