import React from "react";
import { Metadata } from "next";
import { dataRepository } from "@/lib/data/repository";
import { requireAdminPage } from "@/lib/admin-auth";
import { AdminStoriesView } from "@/components/admin/AdminStoriesView";

export const metadata: Metadata = {
  title: "Wedding Stories Manager | Studio Admin",
};

export const dynamic = "force-dynamic";

export default async function AdminStoriesPage() {
  await requireAdminPage();
  const stories = await dataRepository.getStories(undefined, true);
  return <AdminStoriesView initialStories={stories} />;
}
