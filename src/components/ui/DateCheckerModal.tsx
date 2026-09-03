"use client";

import React, { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";
import { siteConfig } from "@/config/site";
import { Calendar, MapPin, CheckCircle2, MessageSquare } from "lucide-react";

interface DateCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DateCheckerModal({ isOpen, onClose }: DateCheckerModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    partner_name: "",
    phone: "",
    wedding_date: "",
    location: "Ahmedabad, Gujarat",
    event_type: "Full Wedding Coverage (Photo + Cinema)",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          email: "date-check@playthestory.com",
          estimated_budget: "To be discussed",
          message: `Quick Date Availability Check for ${formData.wedding_date} at ${formData.location}`,
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        // Even if server error, show success and allow WhatsApp direct transfer
        setIsSuccess(true);
      }
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Play The Story! I would like to check availability for our wedding on ${formData.wedding_date || "[Date]"} in ${formData.location || "Ahmedabad"}. Couple names: ${formData.name} & ${formData.partner_name || "Partner"}. Phone: ${formData.phone}.`
    );
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`, "_blank");
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      partner_name: "",
      phone: "",
      wedding_date: "",
      location: "Ahmedabad, Gujarat",
      event_type: "Full Wedding Coverage (Photo + Cinema)",
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isSuccess ? "Inquiry Received" : "Check Your Wedding Date"}
      maxWidth="md"
    >
      {isSuccess ? (
        <div className="text-center py-6">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#c5a880]/15 flex items-center justify-center text-[#c5a880]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-serif text-2xl text-[#fbf9f5] mb-2">
            We are checking our dates!
          </h4>
          <p className="text-sm text-[#a6a095] mb-6 leading-relaxed">
            Thank you, <span className="text-[#fbf9f5]">{formData.name}</span>. We limit our bookings to a selective number of weddings each season to guarantee our signature cinematic craftsmanship.
          </p>
          <div className="flex flex-col gap-3">
            <Button
              variant="primary"
              onClick={handleWhatsAppRedirect}
              className="flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Chat Directly on WhatsApp
            </Button>
            <Button variant="ghost" onClick={handleReset}>
              Close Window
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-xs sm:text-sm text-[#a6a095] -mt-2 mb-4 font-light">
            We accept limited bespoke weddings per calendar year across Ahmedabad, Gujarat, and destination venues to maintain unmatched artistic attention.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="Bride or Groom name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-sm text-[#fbf9f5] placeholder:text-[#555] focus:outline-none focus:border-[#c5a880]"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                Partner&apos;s Name
              </label>
              <input
                type="text"
                placeholder="Partner name"
                value={formData.partner_name}
                onChange={(e) =>
                  setFormData({ ...formData, partner_name: e.target.value })
                }
                className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-sm text-[#fbf9f5] placeholder:text-[#555] focus:outline-none focus:border-[#c5a880]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                Wedding Date *
              </label>
              <div className="relative">
                <input
                  type="date"
                  required
                  value={formData.wedding_date}
                  onChange={(e) =>
                    setFormData({ ...formData, wedding_date: e.target.value })
                  }
                  className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-sm text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
                />
                <Calendar className="w-4 h-4 absolute right-3 top-2.5 text-[#a6a095] pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-sm text-[#fbf9f5] placeholder:text-[#555] focus:outline-none focus:border-[#c5a880]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
              Venue / City *
            </label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="e.g. Ahmedabad, Udaipur, Goa"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-sm text-[#fbf9f5] placeholder:text-[#555] focus:outline-none focus:border-[#c5a880]"
              />
              <MapPin className="w-4 h-4 absolute right-3 top-2.5 text-[#a6a095] pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#c5a880] mb-1 font-medium">
              Coverage Type
            </label>
            <select
              value={formData.event_type}
              onChange={(e) =>
                setFormData({ ...formData, event_type: e.target.value })
              }
              className="w-full bg-[#181818] border border-white/10 px-3 py-2 text-sm text-[#fbf9f5] focus:outline-none focus:border-[#c5a880]"
            >
              <option value="Full Wedding Coverage (Photo + Cinema)">
                Full Wedding (Photo + Cinematic Film)
              </option>
              <option value="Wedding Photography Only">
                Wedding Photography Only
              </option>
              <option value="Cinematic Wedding Films Only">
                Cinematic Wedding Films Only
              </option>
              <option value="Pre-Wedding Story Only">Pre-Wedding Story Only</option>
              <option value="Destination Multi-Day Wedding">
                Destination Multi-Day Wedding
              </option>
            </select>
          </div>

          <div className="pt-3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              isLoading={isSubmitting}
            >
              Check Date Availability
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
