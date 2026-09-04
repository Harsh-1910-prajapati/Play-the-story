import React from "react";
import { Metadata } from "next";
import { dataRepository } from "@/lib/data/repository";
import { requireAdminPage } from "@/lib/admin-auth";
import { AdminFilmsView } from "@/components/admin/AdminFilmsView";

export const metadata: Metadata = {
  title: "Films Manager | Studio Admin",
};

export const dynamic = "force-dynamic";

export default async function AdminFilmsPage() {
  await requireAdminPage();
  const films = await dataRepository.getFilms(true);
  return <AdminFilmsView initialFilms={films} />;
}
