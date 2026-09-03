"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Camera,
  Film,
  Sparkles,
  MessageSquareQuote,
  Inbox,
  LogOut,
  Globe,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Wedding Stories", href: "/admin/stories", icon: Camera },
  { name: "Films", href: "/admin/films", icon: Film },
  { name: "Services", href: "/admin/services", icon: Sparkles },
  { name: "Testimonials", href: "/admin/testimonials", icon: MessageSquareQuote },
  { name: "Enquiries", href: "/admin/enquiries", icon: Inbox },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // If on login page, don't show admin chrome
  if (pathname === "/admin/login") {
    return <div className="min-h-screen bg-[#080808] text-[#fbf9f5]">{children}</div>;
  }

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "logout" }),
      });
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error(err);
      router.push("/admin/login");
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fbf9f5] flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-[#0d0d0d] border-r border-white/10 shrink-0 min-h-screen">
        {/* Brand Header */}
        <div className="p-6 border-b border-white/10">
          <Link href="/admin" className="block">
            <span className="font-serif text-lg tracking-widest uppercase text-[#fbf9f5] font-medium block">
              Play The Story
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#c5a880] block mt-0.5 font-mono">
              Studio Admin Portal
            </span>
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3.5 py-2.5 text-xs font-medium uppercase tracking-wider transition-colors",
                  isActive
                    ? "bg-[#c5a880] text-black shadow-md font-semibold"
                    : "text-[#a6a095] hover:text-[#fbf9f5] hover:bg-white/5"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-black" : "text-[#c5a880]")} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2.5 px-3 py-2 text-xs text-[#a6a095] hover:text-white hover:bg-white/5 transition-colors"
          >
            <Globe className="w-4 h-4 text-[#c5a880]" />
            <span>View Live Site</span>
          </Link>

          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-red-400 hover:text-red-300 hover:bg-red-950/20 transition-colors text-left"
          >
            <LogOut className="w-4 h-4 text-red-400" />
            <span>{isLoggingOut ? "Logging out..." : "Log Out"}</span>
          </button>
        </div>
      </aside>

      {/* Mobile Top Header */}
      <div className="md:hidden bg-[#0d0d0d] border-b border-white/10 p-4 flex items-center justify-between sticky top-0 z-30">
        <Link href="/admin">
          <span className="font-serif text-base tracking-wider uppercase text-[#fbf9f5]">
            Play The Story
          </span>
          <span className="text-[9px] uppercase tracking-wider text-[#c5a880] block font-mono">
            Admin
          </span>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#fbf9f5]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111] border-b border-white/10 p-4 space-y-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3.5 py-2.5 text-xs font-medium uppercase tracking-wider",
                  isActive
                    ? "bg-[#c5a880] text-black font-semibold"
                    : "text-[#a6a095] hover:text-[#fbf9f5]"
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
          <div className="pt-2 border-t border-white/10 flex justify-between">
            <Link
              href="/"
              target="_blank"
              className="text-xs text-[#c5a880] flex items-center gap-1 py-2"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Live Site</span>
            </Link>
            <button
              onClick={handleLogout}
              className="text-xs text-red-400 flex items-center gap-1 py-2"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-8 lg:p-10 overflow-y-auto max-w-7xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
