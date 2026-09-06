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
    <footer className="bg-[#25231F] border-t border-[#D8C9B5]/20 text-[#F5F1EA] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#25231F]/15">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block leading-none">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.22em] uppercase text-[#25231F] font-medium block">
                PLAY THE STORY
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#B39B7A] mt-1.5 font-sans">
                Creative Photography & Films
              </p>
            </Link>

            <p className="text-sm text-[#8A8175] font-light leading-relaxed max-w-md">
              &ldquo;{siteConfig.tagline}&rdquo; — One creative studio for different kinds of visual stories. From intimate weddings and couple stories to brand campaigns and motion films.
            </p>

            <div className="pt-2 flex items-center space-x-4 text-[#8A8175]">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#25231F]/15 flex items-center justify-center text-[#B39B7A] hover:text-[#25231F] hover:border-[#B39B7A] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-[#25231F]/15 flex items-center justify-center text-[#B39B7A] hover:text-[#25231F] hover:border-[#B39B7A] transition-colors"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-full border border-[#25231F]/15 flex items-center justify-center text-[#B39B7A] hover:text-[#25231F] hover:border-[#B39B7A] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#B39B7A] font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs uppercase tracking-wider text-[#8A8175] hover:text-[#25231F] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-xs uppercase tracking-wider text-[#B39B7A] hover:text-[#25231F] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#B39B7A] font-medium">
              What We Do
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8A8175] font-light">
              <li>
                <Link href="/services#weddings" className="hover:text-[#25231F] transition-colors">
                  Weddings & Films
                </Link>
              </li>
              <li>
                <Link href="/services#couples" className="hover:text-[#25231F] transition-colors">
                  Couples & Pre-Weddings
                </Link>
              </li>
              <li>
                <Link href="/services#events" className="hover:text-[#25231F] transition-colors">
                  Events & Celebrations
                </Link>
              </li>
              <li>
                <Link href="/services#portraits" className="hover:text-[#25231F] transition-colors">
                  Portraits & Fashion
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="hover:text-[#25231F] transition-colors">
                  Commercial & Brand
                </Link>
              </li>
              <li>
                <Link href="/services#content" className="hover:text-[#25231F] transition-colors">
                  Reels & Short Films
                </Link>
              </li>
              <li>
                <Link href="/services#post-production" className="hover:text-[#25231F] transition-colors">
                  Post-Production & Grading
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Location & Contact */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#B39B7A] font-medium">
              Studio & Contact
            </h4>
            <div className="space-y-3 text-xs text-[#8A8175] font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B39B7A] shrink-0 mt-0.5" />
                <span>{siteConfig.location.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B39B7A] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-[#25231F] transition-colors"
                >
                  {siteConfig.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B39B7A] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#25231F] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs text-[#B39B7A] hover:text-[#25231F] uppercase tracking-wider"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8175] font-light gap-4">
          <p>
            &copy; {siteConfig.copyrightYear} {siteConfig.name}. Creative Photography & Films. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span>Ahmedabad · Gujarat · India · Worldwide</span>
            <Link
              href="/admin/login"
              className="text-[#8A8175] hover:text-[#888] transition-colors"
            >
              Studio Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
