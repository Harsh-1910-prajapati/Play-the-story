import React from "react";
import { Metadata } from "next";
import { dataRepository } from "@/lib/data/repository";
import { requireAdminPage } from "@/lib/admin-auth";
import { AdminServicesView } from "@/components/admin/AdminServicesView";

export const metadata: Metadata = {
  title: "Services Manager | Studio Admin",
};

export const dynamic = "force-dynamic";

export default async function AdminServicesPage() {
  await requireAdminPage();
  const services = await dataRepository.getServices();
  return <AdminServicesView initialServices={services} />;
}
