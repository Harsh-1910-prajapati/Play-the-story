import { NextRequest, NextResponse } from "next/server";
import { dataRepository } from "@/lib/data/repository";
import { requireAdminApi } from "@/lib/admin-auth";
import { validateAdminPayload } from "@/lib/admin-validation";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  try {
    const films = await dataRepository.getFilms(true);
    return NextResponse.json({ success: true, films });
  } catch (err) {
    console.error("Fetch films error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  try {
    const body = await req.json();
    const validationError = validateAdminPayload("film", body);
    if (validationError) return NextResponse.json({ success: false, error: validationError }, { status: 400 });
    const saved = await dataRepository.saveFilm(body);
    return NextResponse.json({ success: true, film: saved });
  } catch (err) {
    console.error("Save film error:", err);
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
      return NextResponse.json({ success: false, error: "Missing film id" }, { status: 400 });
    }

    await dataRepository.deleteFilm(id);
    return NextResponse.json({ success: true, message: "Film deleted" });
  } catch (err) {
    console.error("Delete film error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
