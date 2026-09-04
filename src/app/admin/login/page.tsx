"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Lock, Mail, AlertCircle, ArrowLeft, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Invalid credentials");
      }

      router.push("/admin");
      router.refresh();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Authentication error";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-[#080808]">
      <div className="w-full max-w-md">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#a6a095] hover:text-[#c5a880] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Live Website</span>
          </Link>
        </div>

        {/* Login Card */}
        <div className="bg-[#111111] border border-white/10 p-8 sm:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-full bg-[#c5a880]/15 text-[#c5a880] flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl text-[#fbf9f5] font-normal">
              Studio Admin Login
            </h1>
            <p className="text-xs uppercase tracking-widest text-[#c5a880] mt-1 font-mono">
              Play The Story
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3.5 bg-red-950/40 border border-red-800 text-red-200 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#c5a880] mb-1.5 font-medium">
                Admin Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@playthestory.com"
                  className="w-full bg-[#181818] border border-white/10 px-3.5 py-2.5 pl-10 text-sm text-[#fbf9f5] placeholder:text-[#555] focus:outline-none focus:border-[#c5a880]"
                />
                <Mail className="w-4 h-4 text-[#777] absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#c5a880] mb-1.5 font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#181818] border border-white/10 px-3.5 py-2.5 pl-10 text-sm text-[#fbf9f5] placeholder:text-[#555] focus:outline-none focus:border-[#c5a880]"
                />
                <Lock className="w-4 h-4 text-[#777] absolute left-3.5 top-3" />
              </div>
            </div>

            <div className="pt-3">
              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                isLoading={isLoading}
              >
                Sign In to Dashboard
              </Button>
            </div>
          </form>

          {/* Credentials Info Helper */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-2.5 text-[11px] text-[#777]">
            <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
            <span>
              Sign in with the Supabase Auth user assigned the admin role.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
