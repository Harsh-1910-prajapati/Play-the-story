import "server-only";

import { createServerClient } from "@supabase/ssr";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

let serverClientInstance: SupabaseClient | null = null;
let publicClientInstance: SupabaseClient | null = null;

export async function getSupabaseServerClient() {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  const cookieStore = await cookies();

  return createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Server Components cannot always write cookies; Proxy handles refresh.
          }
        },
      },
    }
  );
}

export function getSupabaseAdminClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return null;
  }

  if (!serverClientInstance) {
    serverClientInstance = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }

  return serverClientInstance;
}

export function getSupabasePublicClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) return null;

  if (!publicClientInstance) {
    publicClientInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
  }

  return publicClientInstance;
}
