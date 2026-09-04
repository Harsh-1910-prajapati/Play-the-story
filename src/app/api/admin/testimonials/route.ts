import { NextRequest, NextResponse } from "next/server";
import { dataRepository } from "@/lib/data/repository";
import { requireAdminApi } from "@/lib/admin-auth";
import { validateAdminPayload } from "@/lib/admin-validation";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  try {
    const testimonials = await dataRepository.getTestimonials(true);
    return NextResponse.json({ success: true, testimonials });
  } catch (err) {
    console.error("Fetch testimonials error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  try {
    const body = await req.json();
    const validationError = validateAdminPayload("testimonial", body);
    if (validationError) return NextResponse.json({ success: false, error: validationError }, { status: 400 });
    const saved = await dataRepository.saveTestimonial(body);
    return NextResponse.json({ success: true, testimonial: saved });
  } catch (err) {
    console.error("Save testimonial error:", err);
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
      return NextResponse.json({ success: false, error: "Missing testimonial id" }, { status: 400 });
    }

    await dataRepository.deleteTestimonial(id);
    return NextResponse.json({ success: true, message: "Testimonial deleted" });
  } catch (err) {
    console.error("Delete testimonial error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
