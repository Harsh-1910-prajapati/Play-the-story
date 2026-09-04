export function requiredText(value: unknown, field: string) {
  if (typeof value !== "string" || !value.trim()) {
    return `${field} is required`;
  }
  return null;
}

export function validateAdminPayload(
  resource: "story" | "film" | "service" | "testimonial",
  body: unknown
) {
  if (!body || typeof body !== "object") return "A JSON object is required";
  const payload = body as Record<string, unknown>;

  const requiredFields: Record<typeof resource, string[]> = {
    story: ["title", "slug", "category", "location", "description", "cover_image"],
    film: ["title", "category", "video_url", "thumbnail_url"],
    service: ["title", "slug"],
    testimonial: ["client_name", "review_text"],
  };

  for (const field of requiredFields[resource]) {
    const error = requiredText(payload[field], field);
    if (error) return error;
  }

  if (resource === "story" && !payload.event_date && !payload.wedding_date) {
    return "event_date is required";
  }
  if (resource === "testimonial" && (!Number.isInteger(payload.rating) || Number(payload.rating) < 1 || Number(payload.rating) > 5)) {
    return "rating must be an integer from 1 to 5";
  }
  if (resource === "story" && typeof payload.published !== "undefined" && typeof payload.published !== "boolean") {
    return "published must be a boolean";
  }

  return null;
}
