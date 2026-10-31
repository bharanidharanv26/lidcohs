import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { requireSupabaseConfig } from "./env.js";

let client: SupabaseClient | undefined;

export function getSupabase(): SupabaseClient {
  if (!client) {
    const config = requireSupabaseConfig();
    client = createClient(config.url, config.serviceRoleKey, { auth: { persistSession: false } });
  }
  return client;
}