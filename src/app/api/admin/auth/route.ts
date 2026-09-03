import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  adminSessionCookieOptions,
  createAdminSessionToken,
  isAdminAuthenticated,
  SESSION_COOKIE_NAME,
} from "@/lib/admin-auth";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export async function POST(req: NextRequest) {
  try {
    const { email, password, action } = await req.json();

    if (action === "logout") {
      const cookieStore = await cookies();
      cookieStore.delete(SESSION_COOKIE_NAME);
      return NextResponse.json({ success: true, message: "Logged out successfully" });
    }

    if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !process.env.ADMIN_SESSION_SECRET) {
      return NextResponse.json(
        { success: false, error: "Admin authentication is not configured" },
        { status: 500 }
      );
    }

    // Authentication check
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const cookieStore = await cookies();
      cookieStore.set(SESSION_COOKIE_NAME, createAdminSessionToken(), adminSessionCookieOptions);

      return NextResponse.json({
        success: true,
        message: "Authentication successful",
        user: { email: ADMIN_EMAIL, role: "admin" },
      });
    }

    return NextResponse.json(
      { success: false, error: "Invalid admin email or password" },
      { status: 401 }
    );
  } catch (err) {
    console.error("Auth API Error:", err);
    return NextResponse.json(
      { success: false, error: "Authentication server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const isAuthenticated = await isAdminAuthenticated();
  return NextResponse.json({
    isAuthenticated,
    user: isAuthenticated ? { email: ADMIN_EMAIL, role: "admin" } : null,
  });
}
