import { NextRequest, NextResponse } from "next/server";
import { getAdminUser } from "@/lib/admin-auth";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password, action } = await req.json();

    const supabase = await getSupabaseServerClient();
    if (!supabase) {
      return NextResponse.json({ success: false, error: "Authentication is not configured" }, { status: 500 });
    }

    if (action === "logout") {
      await supabase.auth.signOut();
      return NextResponse.json({ success: true, message: "Logged out successfully" });
    }

    if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
      return NextResponse.json({ success: false, error: "Email and password are required" }, { status: 400 });
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.user || data.user.app_metadata?.role !== "admin") {
      await supabase.auth.signOut();
      return NextResponse.json({ success: false, error: "Invalid admin credentials" }, { status: 401 });
    }

    return NextResponse.json({
      success: true,
      message: "Authentication successful",
      user: { email: data.user.email, role: "admin" },
    });
  } catch (err) {
    console.error("Auth API Error:", err);
    return NextResponse.json(
      { success: false, error: "Authentication server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const user = await getAdminUser();
  return NextResponse.json({
    isAuthenticated: Boolean(user),
    user: user ? { email: user.email, role: "admin" } : null,
  });
}
