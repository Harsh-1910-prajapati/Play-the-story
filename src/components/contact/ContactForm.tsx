"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { CheckCircle2, AlertCircle, MessageCircle, Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    partner_name: "",
    email: "",
    phone: "",
    wedding_date: "",
    event_type: "Full Wedding Coverage (Photo + Cinema)",
    location: "",
    estimated_budget: "₹3,50,000 – ₹5,00,000",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setStatus("success");
    } catch (err: unknown) {
      console.error("Submission Error:", err);
      const msg = err instanceof Error ? err.message : "Submission error occurred";
      setErrorMessage(msg);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Play The Story! I just submitted an enquiry for our wedding on ${formData.wedding_date || "[Date]"} at ${formData.location || "Ahmedabad"}. Couple names: ${formData.name} & ${formData.partner_name || "Partner"}.`
    );
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`, "_blank");
  };

  if (status === "success") {
    return (
      <div className="bg-[#111111] border border-[#c5a880]/40 p-8 sm:p-12 text-center shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#c5a880]/15 flex items-center justify-center text-[#c5a880]">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl text-[#fbf9f5] mb-3">
          Thank You, {formData.name}
        </h3>
        <p className="text-sm sm:text-base text-[#a6a095] max-w-lg mx-auto font-light leading-relaxed mb-8">
          We have safely received your wedding inquiry. Our creative director will review date availability and reach out to you within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="md"
            onClick={handleWhatsAppRedirect}
            className="flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Connect Immediately on WhatsApp
          </Button>
          <Button
            variant="ghost"
            size="md"
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                partner_name: "",
                email: "",
                phone: "",
                wedding_date: "",
                event_type: "Full Wedding Coverage (Photo + Cinema)",
                location: "",
                estimated_budget: "₹3,50,000 – ₹5,00,000",
                message: "",
              });
            }}
          >
            Send Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#111111] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl space-y-6"
    >
      <div className="border-b border-white/10 pb-4 mb-6">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#fbf9f5] font-light">
          Wedding Inquiry Form
        </h3>
        <p className="text-xs text-[#a6a095] mt-1 font-light">
          Please provide as much detail as possible to help us prepare a personalized quote.
        </p>
      </div>

      {status === "error" && (
        <div className="p-4 bg-red-950/40 border border-red-800 text-red-200 text-xs flex items-center gap-3">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Names */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-2 font-medium">
            Your Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. Pooja Shah"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-sm text-[#fbf9f5] placeholder:text-[#555] focus:outline-none focus:border-[#c5a880] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-2 font-medium">
            Partner&apos;s Name
          </label>
          <input
            type="text"
            name="partner_name"
            placeholder="e.g. Ronak Patel"
            value={formData.partner_name}
            onChange={handleChange}
            className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-sm text-[#fbf9f5] placeholder:text-[#555] focus:outline-none focus:border-[#c5a880] transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-2 font-medium">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="pooja@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-sm text-[#fbf9f5] placeholder:text-[#555] focus:outline-none focus:border-[#c5a880] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-2 font-medium">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+91 98251 12345"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-sm text-[#fbf9f5] placeholder:text-[#555] focus:outline-none focus:border-[#c5a880] transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Wedding Date & Event Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-2 font-medium">
            Wedding Date (or month/year) *
          </label>
          <input
            type="date"
            name="wedding_date"
            required
            value={formData.wedding_date}
            onChange={handleChange}
            className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-sm text-[#fbf9f5] focus:outline-none focus:border-[#c5a880] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-2 font-medium">
            Event Coverage Type *
          </label>
          <select
            name="event_type"
            value={formData.event_type}
            onChange={handleChange}
            className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-sm text-[#fbf9f5] focus:outline-none focus:border-[#c5a880] transition-colors"
          >
            <option value="Full Wedding Coverage (Photo + Cinema)">
              Full Wedding Coverage (Photo + Cinema)
            </option>
            <option value="Wedding Photography Only">Wedding Photography Only</option>
            <option value="Cinematic Films Only">Cinematic Films Only</option>
            <option value="Pre-Wedding Shoot & Story">Pre-Wedding Shoot & Story</option>
            <option value="Engagement / Reception Soiree">Engagement / Reception Soiree</option>
            <option value="Destination Multi-Day Celebration">
              Destination Multi-Day Celebration
            </option>
          </select>
        </div>
      </div>

      {/* Row 4: Location & Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-2 font-medium">
            Wedding Venue / City *
          </label>
          <input
            type="text"
            name="location"
            required
            placeholder="e.g. The Ummed, Ahmedabad"
            value={formData.location}
            onChange={handleChange}
            className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-sm text-[#fbf9f5] placeholder:text-[#555] focus:outline-none focus:border-[#c5a880] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-2 font-medium">
            Estimated Photography/Film Budget
          </label>
          <select
            name="estimated_budget"
            value={formData.estimated_budget}
            onChange={handleChange}
            className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-sm text-[#fbf9f5] focus:outline-none focus:border-[#c5a880] transition-colors"
          >
            <option value="₹2,00,000 – ₹3,50,000">₹2,00,000 – ₹3,50,000</option>
            <option value="₹3,50,000 – ₹5,00,000">₹3,50,000 – ₹5,00,000</option>
            <option value="₹5,00,000 – ₹8,00,000">₹5,00,000 – ₹8,00,000</option>
            <option value="₹8,00,000+ (Grand / Destination)">₹8,00,000+ (Grand / Destination)</option>
          </select>
        </div>
      </div>

      {/* Row 5: Message */}
      <div>
        <label className="block text-xs uppercase tracking-wider text-[#c5a880] mb-2 font-medium">
          Tell Us About Your Celebration (Optional)
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your wedding ceremonies, traditions, estimated guest count, or any special moments you care most about..."
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-sm text-[#fbf9f5] placeholder:text-[#555] focus:outline-none focus:border-[#c5a880] transition-colors"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          variant="gold"
          size="lg"
          className="w-full flex items-center justify-center gap-2"
          isLoading={isLoading}
        >
          <Send className="w-4 h-4" />
          Send Enquiry
        </Button>
      </div>
    </form>
  );
}
