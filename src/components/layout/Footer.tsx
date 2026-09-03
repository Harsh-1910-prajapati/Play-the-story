"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { InstagramIcon, YouTubeIcon } from "@/components/ui/Icons";

export function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-[#050505] border-t border-white/10 text-[#fbf9f5] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] uppercase text-[#fbf9f5] font-medium">
                Play The Story
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] mt-0.5">
                Luxury Wedding Photography & Films
              </p>
            </Link>

            <p className="text-sm text-[#a6a095] font-light leading-relaxed max-w-md">
              &ldquo;We don&apos;t just capture weddings. We preserve the emotions, people and moments that make your story yours.&rdquo;
            </p>

            <div className="pt-2 flex items-center space-x-4 text-[#d5d0c7]">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#c5a880] hover:text-white hover:border-[#c5a880] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#c5a880] hover:text-white hover:border-[#c5a880] transition-colors"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#c5a880] hover:text-white hover:border-[#c5a880] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs uppercase tracking-wider text-[#a6a095] hover:text-[#fbf9f5] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#a6a095] font-light">
              <li>
                <Link href="/services" className="hover:text-[#fbf9f5] transition-colors">
                  Wedding Photography
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#fbf9f5] transition-colors">
                  Cinematic Films
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#fbf9f5] transition-colors">
                  Pre-Wedding Shoots
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#fbf9f5] transition-colors">
                  Event Coverage
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#fbf9f5] transition-colors">
                  Video Post-Production
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Location & Contact */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
              Studio & Contact
            </h4>
            <div className="space-y-3 text-xs text-[#a6a095] font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>{siteConfig.location.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-[#fbf9f5] transition-colors"
                >
                  {siteConfig.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#fbf9f5] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs text-[#c5a880] hover:text-white uppercase tracking-wider"
              >
                <span>Book a Studio Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#666] font-light gap-4">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved. Crafted for Timeless Memories.
          </p>
          <div className="flex items-center space-x-6">
            <span>Ahmedabad, Gujarat, India</span>
            <Link
              href="/admin/login"
              className="text-[#444] hover:text-[#888] transition-colors"
            >
              Studio Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
