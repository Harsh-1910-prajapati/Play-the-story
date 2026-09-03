import React from "react";
import { Metadata } from "next";
import { dataRepository } from "@/lib/data/repository";
import { requireAdminPage } from "@/lib/admin-auth";
import { AdminOverviewView } from "@/components/admin/AdminOverviewView";

export const metadata: Metadata = {
  title: "Studio Admin Overview | Play The Story",
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  await requireAdminPage();
  const [stats, enquiries] = await Promise.all([
    dataRepository.getAdminStats(),
    dataRepository.getEnquiries(),
  ]);

  return <AdminOverviewView stats={stats} initialEnquiries={enquiries} />;
}
