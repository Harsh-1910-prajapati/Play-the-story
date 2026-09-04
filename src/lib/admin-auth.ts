import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "./supabase/server";

export async function getAdminUser() {
  const supabase = await getSupabaseServerClient();
  if (!supabase) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user || data.user.app_metadata?.role !== "admin") {
    return null;
  }

  return data.user;
}

export async function isAdminAuthenticated() {
  return Boolean(await getAdminUser());
}

export async function requireAdminApi() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function requireAdminPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");
}
