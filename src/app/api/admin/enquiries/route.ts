import { NextRequest, NextResponse } from "next/server";
import { dataRepository } from "@/lib/data/repository";
import { requireAdminApi } from "@/lib/admin-auth";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  try {
    const enquiries = await dataRepository.getEnquiries();
    return NextResponse.json({ success: true, enquiries });
  } catch (err) {
    console.error("Fetch enquiries error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  try {
    const { id, status } = await req.json();
    if (!id || !status || !["new", "contacted", "in_progress", "completed", "archived"].includes(status)) {
      return NextResponse.json({ success: false, error: "Missing id or status" }, { status: 400 });
    }

    const updated = await dataRepository.updateEnquiryStatus(id, status);
    return NextResponse.json({ success: true, enquiry: updated });
  } catch (err) {
    console.error("Update enquiry error:", err);
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
      return NextResponse.json({ success: false, error: "Missing enquiry id" }, { status: 400 });
    }

    await dataRepository.deleteEnquiry(id);
    return NextResponse.json({ success: true, message: "Enquiry deleted" });
  } catch (err) {
    console.error("Delete enquiry error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
