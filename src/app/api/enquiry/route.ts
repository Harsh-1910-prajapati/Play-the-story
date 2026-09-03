import { NextRequest, NextResponse } from "next/server";
import { dataRepository } from "@/lib/data/repository";

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

    // Validate required fields
    if (!name || !email || !phone || !wedding_date) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide your name, email, phone, and wedding date.",
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

