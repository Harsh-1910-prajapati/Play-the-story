
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "../ui/Button";
import { DateCheckerModal } from "../ui/DateCheckerModal";
import { Menu, X } from "lucide-react";
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
            ? "bg-[#25231F]/90 backdrop-blur-md border-b border-[#25231F]/15 py-3 shadow-2xl"
            : "bg-gradient-to-b from-[#25231F]/80 via-[#25231F]/40 to-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <Image
              src="/Logo 2.PNG"
              alt="Play The Story"
              width={40}
              height={40}
              priority
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg sm:text-xl tracking-[0.22em] uppercase text-[#F5F1EA] group-hover:text-[#B39B7A] transition-colors font-medium">
                PLAY
              </span>

              <span className="font-serif text-xs sm:text-sm tracking-[0.3em] uppercase text-[#B39B7A] group-hover:text-[#F5F1EA] transition-colors font-light -mt-0.5">
                THE STORY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {siteConfig.navLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" &&
                  !item.href.startsWith("/#") &&
                  pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-xs uppercase tracking-[0.22em] font-medium transition-colors relative py-1",
                    isActive
                      ? "text-[#B39B7A]"
                      : "text-[#F5F1EA] hover:text-[#D8C9B5]"
                  )}
                >
                  {item.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B39B7A]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA: LET'S TALK → */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              href="/contact"
              className="border-[#B39B7A]/60 text-[#F5F1EA] hover:border-[#B39B7A] hover:bg-[#B39B7A]/10 flex items-center gap-2 text-xs uppercase tracking-widest px-5 py-2.5 transition-all"
            >
              <span>LET&apos;S TALK</span>
              <span className="text-[#B39B7A]">→</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="/contact"
              className="text-[11px] uppercase tracking-wider text-[#B39B7A] border border-[#B39B7A]/50 px-2.5 py-1"
            >
              LET&apos;S TALK →
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#F5F1EA] hover:text-[#B39B7A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B39B7A]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
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
          <div
            id="mobile-navigation"
            className="md:hidden fixed inset-x-0 top-full bg-[#25231F] border-b border-[#25231F]/15 px-6 py-8 shadow-2xl animate-in slide-in-from-top-5 duration-300"
          >
            <nav className="flex flex-col space-y-5">
              {siteConfig.navLinks.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" &&
                    !item.href.startsWith("/#") &&
                    pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-sm uppercase tracking-[0.25em] font-medium py-1 transition-colors flex items-center justify-between",
                      isActive
                        ? "text-[#B39B7A]"
                        : "text-[#8A8175]"
                    )}
                  >
                    <span>{item.name}</span>

                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B39B7A]" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-[#25231F]/15 flex flex-col gap-3">
                <Button
                  variant="primary"
                  size="md"
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 uppercase tracking-widest text-xs"
                >
                  <span>LET&apos;S TALK</span>
                  <span>→</span>
                </Button>

                <p className="text-[10px] text-center uppercase tracking-widest text-[#8A8175] mt-2 font-light">
                  {siteConfig.location.coverageText}
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
