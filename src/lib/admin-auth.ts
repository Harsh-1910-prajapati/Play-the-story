import { createHmac, randomBytes, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const SESSION_COOKIE_NAME = "pts_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || "";
}

function sign(value: string) {
  return createHmac("sha256", getSessionSecret()).update(value).digest("hex");
}

export function createAdminSessionToken() {
  const timestamp = Date.now().toString();
  const nonce = randomBytes(32).toString("hex");
  const payload = `${timestamp}.${nonce}`;
  return `${payload}.${sign(payload)}`;
}

export function isValidAdminSession(token: string | undefined) {
  if (!token || !getSessionSecret()) return false;

  const [timestamp, nonce, signature] = token.split(".");
  if (!timestamp || !nonce || !signature || !/^\d+$/.test(timestamp)) return false;

  const age = Date.now() - Number(timestamp);
  if (age < 0 || age > SESSION_MAX_AGE * 1000) return false;

  const expected = sign(`${timestamp}.${nonce}`);
  const actualBuffer = Buffer.from(signature, "utf8");
  const expectedBuffer = Buffer.from(expected, "utf8");
  return (
    actualBuffer.length === expectedBuffer.length &&
    timingSafeEqual(actualBuffer, expectedBuffer)
  );
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return isValidAdminSession(cookieStore.get(SESSION_COOKIE_NAME)?.value);
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

export const adminSessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: SESSION_MAX_AGE,
};