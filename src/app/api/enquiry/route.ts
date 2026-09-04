import { NextRequest, NextResponse } from "next/server";
import { dataRepository } from "@/lib/data/repository";

const recentSubmissions = new Map<string, number>();
const DUPLICATE_WINDOW_MS = 60 * 1000;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      partner_name,
      email,
      phone,
      wedding_date,
      event_type,
      location,
      estimated_budget,
      message,
    } = body;

    // Honeypot spam protection: if bot filled hidden field, return fake success
    if (body.website_url || body.honeypot) {
      return NextResponse.json(
        { success: true, message: "Enquiry submitted successfully." },
        { status: 200 }
      );
    }

    const clientKey = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const now = Date.now();
    const previousSubmission = recentSubmissions.get(clientKey);
    if (previousSubmission && now - previousSubmission < DUPLICATE_WINDOW_MS) {
      return NextResponse.json(
        { success: false, error: "Please wait a moment before sending another enquiry." },
        { status: 429 }
      );
    }

    // Validate required fields
    if (!name || !email || !phone || !wedding_date || !location) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide your name, email, phone, and shoot/event date.",
        },
        { status: 400 }
      );
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Phone validation (minimum 6 digits)
    const digitsOnly = String(phone).replace(/\D/g, "");
    if (digitsOnly.length < 6) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid phone/WhatsApp number." },
        { status: 400 }
      );
    }

    if (String(name).trim().length > 120 || String(message || "").trim().length > 4000) {
      return NextResponse.json({ success: false, error: "Please shorten the submitted details." }, { status: 400 });
    }

    const enquiry = await dataRepository.createEnquiry({
      name: String(name).trim(),
      partner_name: partner_name ? String(partner_name).trim() : undefined,
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      wedding_date: String(wedding_date).trim(),
      event_type: String(event_type || "Wedding Photography & Film").trim(),
      location: String(location || "Ahmedabad, Gujarat").trim(),
      estimated_budget: String(estimated_budget || "Standard").trim(),
      message: message ? String(message).trim() : undefined,
    });
    recentSubmissions.set(clientKey, now);

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully. Our team will contact you shortly.",
        enquiry,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enquiry API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please reach out to us directly on WhatsApp.",
      },
      { status: 500 }
    );
  }
}

