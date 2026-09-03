import React from "react";
import { Metadata } from "next";
import { dataRepository } from "@/lib/data/repository";
import { requireAdminPage } from "@/lib/admin-auth";
import { AdminEnquiriesView } from "@/components/admin/AdminEnquiriesView";

export const metadata: Metadata = {
  title: "Booking Enquiries | Studio Admin",
};

export const dynamic = "force-dynamic";

export default async function AdminEnquiriesPage() {
  await requireAdminPage();
  const enquiries = await dataRepository.getEnquiries();
  return <AdminEnquiriesView initialEnquiries={enquiries} />;
}
