import { NextRequest, NextResponse } from "next/server";
import { dataRepository } from "@/lib/data/repository";
import { requireAdminApi } from "@/lib/admin-auth";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  try {
    const services = await dataRepository.getServices();
    return NextResponse.json({ success: true, services });
  } catch (err) {
    console.error("Fetch services error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  try {
    const body = await req.json();
    const saved = await dataRepository.saveService(body);
    return NextResponse.json({ success: true, service: saved });
  } catch (err) {
    console.error("Save service error:", err);
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
      return NextResponse.json({ success: false, error: "Missing service id" }, { status: 400 });
    }

    await dataRepository.deleteService(id);
    return NextResponse.json({ success: true, message: "Service deleted" });
  } catch (err) {
    console.error("Delete service error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
