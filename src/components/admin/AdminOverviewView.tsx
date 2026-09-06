"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AdminStats, Enquiry, EnquiryStatus } from "@/types";
import { formatDate } from "@/lib/utils";
import {
  Inbox,
  Camera,
  Film,
  MessageSquareQuote,
  Plus,
  ArrowRight,
  Clock,
  Phone,
  MapPin,
} from "lucide-react";

interface AdminOverviewViewProps {
  stats: AdminStats;
  initialEnquiries: Enquiry[];
}

export function AdminOverviewView({
  stats,
  initialEnquiries,
}: AdminOverviewViewProps) {
  const [enquiries, setEnquiries] = useState<Enquiry[]>(initialEnquiries);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const handleStatusChange = async (id: string, newStatus: EnquiryStatus) => {
    setUpdatingId(id);
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="space-y-10">
      {/* Top Welcome & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#25231F]/15">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#25231F] font-normal">
            Studio Overview
          </h1>
          <p className="text-xs text-[#8A8175] mt-1 font-light">
            Welcome to the Play The Story control suite. Manage wedding stories, films, services, and enquiries.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/stories/new"
            className="px-4 py-2 bg-[#B39B7A] text-[#F5F1EA] text-xs font-semibold uppercase tracking-wider hover:bg-[#B39B7A] transition-colors flex items-center gap-1.5 shadow-md"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Story</span>
          </Link>
          <Link
            href="/admin/films"
            className="px-4 py-2 bg-[#F5F1EA] border border-[#25231F]/15 text-[#25231F] text-xs font-medium uppercase tracking-wider hover:bg-[#D8C9B5] transition-colors flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Film</span>
          </Link>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Enquiries */}
        <div className="bg-[#F5F1EA] border border-[#25231F]/15 p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-wider text-[#8A8175]">
              Total Enquiries
            </span>
            <Inbox className="w-5 h-5 text-[#B39B7A]" />
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-3xl sm:text-4xl text-[#25231F]">
              {stats.totalEnquiries}
            </span>
            {stats.newEnquiries > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-[#B39B7A]/20 text-[#B39B7A] text-[11px] font-mono">
                {stats.newEnquiries} New
              </span>
            )}
          </div>
          <Link
            href="/admin/enquiries"
            className="mt-4 pt-3 border-t border-[#25231F]/10 text-[11px] text-[#B39B7A] flex items-center justify-between hover:underline"
          >
            <span>View all submissions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Total Stories */}
        <div className="bg-[#F5F1EA] border border-[#25231F]/15 p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-wider text-[#8A8175]">
              Wedding Stories
            </span>
            <Camera className="w-5 h-5 text-[#B39B7A]" />
          </div>
          <span className="font-serif text-3xl sm:text-4xl text-[#25231F]">
            {stats.totalStories}
          </span>
          <Link
            href="/admin/stories"
            className="mt-4 pt-3 border-t border-[#25231F]/10 text-[11px] text-[#B39B7A] flex items-center justify-between hover:underline"
          >
            <span>Manage stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Total Films */}
        <div className="bg-[#F5F1EA] border border-[#25231F]/15 p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-wider text-[#8A8175]">
              Cinematic Films
            </span>
            <Film className="w-5 h-5 text-[#B39B7A]" />
          </div>
          <span className="font-serif text-3xl sm:text-4xl text-[#25231F]">
            {stats.totalFilms}
          </span>
          <Link
            href="/admin/films"
            className="mt-4 pt-3 border-t border-[#25231F]/10 text-[11px] text-[#B39B7A] flex items-center justify-between hover:underline"
          >
            <span>Manage films</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Total Testimonials */}
        <div className="bg-[#F5F1EA] border border-[#25231F]/15 p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-wider text-[#8A8175]">
              Client Reviews
            </span>
            <MessageSquareQuote className="w-5 h-5 text-[#B39B7A]" />
          </div>
          <span className="font-serif text-3xl sm:text-4xl text-[#25231F]">
            {stats.totalTestimonials}
          </span>
          <Link
            href="/admin/testimonials"
            className="mt-4 pt-3 border-t border-[#25231F]/10 text-[11px] text-[#B39B7A] flex items-center justify-between hover:underline"
          >
            <span>Manage reviews</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Recent Enquiries Table */}
      <div className="bg-[#F5F1EA] border border-[#25231F]/15 p-6">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#25231F]/15">
          <div>
            <h2 className="font-serif text-2xl text-[#25231F]">Recent Booking Enquiries</h2>
            <p className="text-xs text-[#8A8175] mt-0.5">
              Couples who requested date availability or custom quotes
            </p>
          </div>
          <Link
            href="/admin/enquiries"
            className="text-xs text-[#B39B7A] hover:underline uppercase tracking-wider font-medium"
          >
            View All ({enquiries.length})
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#8A8175]">
            <thead className="bg-[#F5F1EA] text-[10px] uppercase tracking-wider text-[#8A8175] border-b border-[#25231F]/15">
              <tr>
                <th className="p-3">Client & Partner</th>
                <th className="p-3">Wedding Date</th>
                <th className="p-3">Venue / City</th>
                <th className="p-3">Budget</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {enquiries.slice(0, 5).map((enq) => (
                <tr key={enq.id} className="hover:bg-[#D8C9B5] transition-colors">
                  <td className="p-3">
                    <div className="font-medium text-[#25231F]">
                      {enq.name} {enq.partner_name && `& ${enq.partner_name}`}
                    </div>
                    <div className="text-[11px] text-[#888] flex items-center gap-2 mt-0.5">
                      <span>{enq.phone}</span>
                      <span>•</span>
                      <span>{enq.email}</span>
                    </div>
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <div className="flex items-center gap-1.5 text-[#25231F]">
                      <Clock className="w-3.5 h-3.5 text-[#B39B7A]" />
                      <span>{formatDate(enq.wedding_date)}</span>
                    </div>
                    <span className="text-[10px] text-[#888]">{enq.event_type}</span>
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <div className="flex items-center gap-1 text-[#25231F]">
                      <MapPin className="w-3.5 h-3.5 text-[#B39B7A]" />
                      <span>{enq.location}</span>
                    </div>
                  </td>
                  <td className="p-3 whitespace-nowrap font-mono text-[#B39B7A]">
                    {enq.estimated_budget}
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <select
                      value={enq.status}
                      disabled={updatingId === enq.id}
                      onChange={(e) =>
                        handleStatusChange(
                          enq.id,
                          e.target.value as EnquiryStatus
                        )
                      }
                      className={`text-[10px] uppercase tracking-wider px-2 py-1 bg-[#25231F] border rounded focus:outline-none ${
                        enq.status === "new"
                          ? "border-[#B39B7A] text-[#B39B7A]"
                          : enq.status === "contacted"
                          ? "border-blue-400 text-blue-300"
                          : "border-green-400 text-green-300"
                      }`}
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td className="p-3 text-right whitespace-nowrap">
                    <a
                      href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#25D366] hover:underline mr-3 text-[11px]"
                    >
                      <Phone className="w-3 h-3" />
                      WhatsApp
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
