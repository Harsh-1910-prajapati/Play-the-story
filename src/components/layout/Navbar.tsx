"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "../ui/Button";
import { DateCheckerModal } from "../ui/DateCheckerModal";
import { Menu, X, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't show public navbar on admin pages
  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-500",
          isScrolled
            ? "bg-[#080808]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] uppercase text-[#fbf9f5] group-hover:text-[#dfc8a5] transition-colors font-medium">
              Play The Story
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#c5a880] font-sans -mt-0.5">
              Wedding Photography & Films
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {siteConfig.navLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-xs uppercase tracking-[0.2em] font-medium transition-colors relative py-1",
                    isActive
                      ? "text-[#c5a880]"
                      : "text-[#d5d0c7] hover:text-[#fbf9f5]"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c5a880]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsDateModalOpen(true)}
              className="border-[#c5a880]/60 text-[#fbf9f5] hover:border-[#c5a880] flex items-center gap-1.5 text-[11px]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Check Your Wedding Date</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsDateModalOpen(true)}
              className="p-2 text-[#c5a880] hover:text-white"
              aria-label="Check wedding date"
            >
              <Calendar className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#fbf9f5] hover:text-[#c5a880] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-full bg-[#0d0d0d] border-b border-white/10 px-6 py-8 shadow-2xl animate-in slide-in-from-top-5 duration-300">
            <nav className="flex flex-col space-y-5">
              {siteConfig.navLinks.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-sm uppercase tracking-[0.25em] font-medium py-1 transition-colors flex items-center justify-between",
                      isActive ? "text-[#c5a880]" : "text-[#d5d0c7]"
                    )}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsDateModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Check Your Wedding Date
                </Button>
                <p className="text-[11px] text-center text-[#a6a095] mt-2 font-light">
                  Ahmedabad, Gujarat • Destination Weddings
                </p>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Global Date Checker Modal */}
      <DateCheckerModal
        isOpen={isDateModalOpen}
        onClose={() => setIsDateModalOpen(false)}
      />
    </>
  );
}
