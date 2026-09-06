"use client";

import React, { useState } from "react";
import { Enquiry, EnquiryStatus } from "@/types";
import { formatDate } from "@/lib/utils";
import {
  Inbox,
  Trash2,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Eye,
  X,
  MessageSquare,
} from "lucide-react";

interface AdminEnquiriesViewProps {
  initialEnquiries: Enquiry[];
}

export function AdminEnquiriesView({ initialEnquiries }: AdminEnquiriesViewProps) {
  const [enquiries, setEnquiries] = useState<Enquiry[]>(initialEnquiries);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const filtered =
    filterStatus === "all"
      ? enquiries
      : enquiries.filter((e) => e.status === filterStatus);

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
        if (selectedEnquiry && selectedEnquiry.id === id) {
          setSelectedEnquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this enquiry?")) return;

    try {
      const res = await fetch(`/api/admin/enquiries?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setEnquiries((prev) => prev.filter((e) => e.id !== id));
        if (selectedEnquiry?.id === id) setSelectedEnquiry(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#25231F]/15">
        <div>
          <h1 className="font-serif text-3xl text-[#25231F] font-normal">
            Client Booking Enquiries
          </h1>
          <p className="text-xs text-[#8A8175] mt-1 font-light">
            Review wedding date availability requests and manage follow-ups.
          </p>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-2 bg-[#F5F1EA] p-1 border border-[#25231F]/15">
          {["all", "new", "contacted", "in_progress", "completed", "archived"].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors ${
                filterStatus === status
                  ? "bg-[#B39B7A] text-[#F5F1EA] font-semibold shadow"
                  : "text-[#8A8175] hover:text-[#25231F]"
              }`}
            >
              {status.replace("_", " ")}
              {status === "new" && (
                <span className="ml-1.5 px-1.5 py-0.2 bg-[#25231F]/40 rounded-full text-[10px]">
                  {enquiries.filter((e) => e.status === "new").length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Enquiries Table */}
      <div className="bg-[#F5F1EA] border border-[#25231F]/15 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#8A8175]">
            <thead className="bg-[#F5F1EA] text-[10px] uppercase tracking-wider text-[#8A8175] border-b border-[#25231F]/15">
              <tr>
                <th className="p-4">Client & Partner</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Date & Venue</th>
                <th className="p-4">Budget</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.length > 0 ? (
                filtered.map((enq) => (
                  <tr key={enq.id} className="hover:bg-[#D8C9B5] transition-colors">
                    <td className="p-4">
                      <div className="font-medium text-[#25231F] text-sm">
                        {enq.name}
                      </div>
                      {enq.partner_name && (
                        <div className="text-xs text-[#B39B7A]">
                          & {enq.partner_name}
                        </div>
                      )}
                      <span className="text-[10px] text-[#8A8175] block mt-1">
                        Submitted {new Date(enq.created_at).toLocaleDateString()}
                      </span>
                    </td>

                    <td className="p-4 whitespace-nowrap">
                      <div className="space-y-1">
                        <a
                          href={`tel:${enq.phone}`}
                          className="flex items-center gap-1.5 text-[#25231F] hover:text-[#B39B7A]"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#B39B7A]" />
                          <span>{enq.phone}</span>
                        </a>
                        <a
                          href={`mailto:${enq.email}`}
                          className="flex items-center gap-1.5 text-[#888] hover:text-[#25231F] text-[11px]"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span className="truncate max-w-[150px]">{enq.email}</span>
                        </a>
                      </div>
                    </td>

                    <td className="p-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-[#25231F]">
                        <Calendar className="w-3.5 h-3.5 text-[#B39B7A]" />
                        <span>{formatDate(enq.wedding_date)}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-[#888] mt-1">
                        <MapPin className="w-3 h-3 text-[#B39B7A]" />
                        <span>{enq.location}</span>
                      </div>
                      <span className="text-[10px] text-[#8A8175] block">{enq.event_type}</span>
                    </td>

                    <td className="p-4 whitespace-nowrap font-mono text-[#B39B7A]">
                      {enq.estimated_budget}
                    </td>

                    <td className="p-4 whitespace-nowrap">
                      <select
                        value={enq.status}
                        disabled={updatingId === enq.id}
                        onChange={(e) =>
                          handleStatusChange(
                            enq.id,
                            e.target.value as EnquiryStatus
                          )
                        }
                        className={`text-[11px] uppercase tracking-wider px-2.5 py-1 bg-[#25231F] border rounded focus:outline-none ${
                          enq.status === "new"
                            ? "border-[#B39B7A] text-[#B39B7A]"
                            : enq.status === "contacted"
                            ? "border-blue-400 text-blue-300"
                            : "border-green-400 text-green-300"
                        }`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="archived">Archived</option>
                      </select>
                    </td>

                    <td className="p-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedEnquiry(enq)}
                          className="p-1.5 text-[#8A8175] hover:text-[#B39B7A] hover:bg-[#D8C9B5] transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <a
                          href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-[#25D366] hover:bg-[#D8C9B5] transition-colors"
                          title="Chat on WhatsApp"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => handleDelete(enq.id)}
                          className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-950/20 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-[#777]">
                    <Inbox className="w-8 h-8 mx-auto mb-2 text-[#8A8175]" />
                    <span>No enquiries found for the selected filter.</span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Modal Drawer */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#25231F]/85 backdrop-blur-sm">
          <div className="bg-[#F5F1EA] border border-[#25231F]/15 max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedEnquiry(null)}
              className="absolute top-4 right-4 p-2 text-[#888] hover:text-[#25231F]"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#B39B7A] font-mono">
                Enquiry Details
              </span>
              <h3 className="font-serif text-2xl text-[#25231F] mt-1">
                {selectedEnquiry.name}{" "}
                {selectedEnquiry.partner_name && `& ${selectedEnquiry.partner_name}`}
              </h3>
              <p className="text-xs text-[#888]">
                Submitted: {new Date(selectedEnquiry.created_at).toLocaleString()}
              </p>
            </div>

            <div className="space-y-3 text-xs text-[#8A8175] bg-[#F5F1EA] p-4 border border-[#25231F]/10">
              <div className="flex justify-between">
                <span className="text-[#888]">Wedding Date:</span>
                <span className="font-medium text-[#25231F]">
                  {formatDate(selectedEnquiry.wedding_date)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Location:</span>
                <span className="font-medium text-[#25231F]">
                  {selectedEnquiry.location}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Event Coverage:</span>
                <span className="font-medium text-[#25231F]">
                  {selectedEnquiry.event_type}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Budget:</span>
                <span className="font-medium text-[#B39B7A]">
                  {selectedEnquiry.estimated_budget}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Phone:</span>
                <span className="font-medium text-[#25231F]">
                  {selectedEnquiry.phone}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Email:</span>
                <span className="font-medium text-[#25231F]">
                  {selectedEnquiry.email}
                </span>
              </div>
            </div>

            {selectedEnquiry.message && (
              <div>
                <p className="text-xs uppercase tracking-wider text-[#B39B7A] mb-2 font-medium">
                  Client Message
                </p>
                <div className="bg-[#F5F1EA] p-4 text-xs text-[#8A8175] leading-relaxed border border-[#25231F]/10 italic">
                  &ldquo;{selectedEnquiry.message}&rdquo;
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-[#25231F]/15">
              <a
                href={`https://wa.me/${selectedEnquiry.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#25D366] text-[#F5F1EA] text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Open WhatsApp
              </a>

              <button
                onClick={() => setSelectedEnquiry(null)}
                className="px-4 py-2 text-xs uppercase tracking-wider text-[#8A8175] hover:text-[#25231F]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
