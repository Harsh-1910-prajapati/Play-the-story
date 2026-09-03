import React from "react";
import { Metadata } from "next";
import { dataRepository } from "@/lib/data/repository";
import { requireAdminPage } from "@/lib/admin-auth";
import { AdminTestimonialsView } from "@/components/admin/AdminTestimonialsView";

export const metadata: Metadata = {
  title: "Testimonials Manager | Studio Admin",
};

export const dynamic = "force-dynamic";

export default async function AdminTestimonialsPage() {
  await requireAdminPage();
  const testimonials = await dataRepository.getTestimonials();
  return <AdminTestimonialsView initialTestimonials={testimonials} />;
}
