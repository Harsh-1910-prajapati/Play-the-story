import { WeddingStory, Film, ServiceItem, Testimonial, Enquiry, AdminStats, StoryCategory, EnquiryStatus } from "@/types";
import { initialStories, initialFilms, initialServices, initialTestimonials, initialEnquiries } from "./mock-data";
import { getSupabaseAdminClient, getSupabasePublicClient } from "../supabase/server";

const isSupabaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY)
);

function getSupabaseClient() {
  return getSupabaseAdminClient() || getSupabasePublicClient();
}

// In-memory fallback stores for local testing and zero-crash operation
let storiesStore: WeddingStory[] = [...initialStories];
let filmsStore: Film[] = [...initialFilms];
let servicesStore: ServiceItem[] = [...initialServices];
let testimonialsStore: Testimonial[] = [...initialTestimonials];
let enquiriesStore: Enquiry[] = [...initialEnquiries];

function normalizeService(service: ServiceItem): ServiceItem {
  const row = service as ServiceItem & { description?: string; image?: string; items?: unknown };
  return {
    ...service,
    short_description: service.short_description || row.description || "",
    full_description: service.full_description || row.description || "",
    image_url: service.image_url || row.image || "",
    features: service.features?.length ? service.features : Array.isArray(row.items) ? row.items as string[] : [],
  };
}

function normalizeStory(story: WeddingStory): WeddingStory {
  const row = story as WeddingStory & { event_date?: string };
  return { ...story, wedding_date: story.wedding_date || row.event_date || "" };
}

function normalizeTestimonial(testimonial: Testimonial): Testimonial {
  const row = testimonial as Testimonial & { review?: string };
  return { ...testimonial, review_text: testimonial.review_text || row.review || "" };
}

export const dataRepository = {
  // --- Stories ---
  async getStories(category?: string, includeUnpublished = false): Promise<WeddingStory[]> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          let query = client.from("wedding_stories").select("*, gallery:wedding_images(*)");
          if (category && category.toLowerCase() !== "all") {
            if (category.toLowerCase() === "couples") {
              query = query.or("category.ilike.Couples,category.ilike.Pre-Weddings,category.ilike.Engagements");
            } else {
              query = query.ilike("category", category);
            }
          }
          if (!includeUnpublished) query = query.eq("published", true);
          const { data, error } = await query.order("wedding_date", { ascending: false });
          if (!error && data) {
            return (data as WeddingStory[]).map(normalizeStory);
          }
        }
      } catch (err) {
        console.warn("Supabase getStories fallback:", err);
      }
    }

    const baseStories = includeUnpublished
      ? [...storiesStore]
      : storiesStore.filter((s) => s.published !== false);
    if (!category || category.toLowerCase() === "all") {
      return [...baseStories];
    }
    const catLower = category.toLowerCase();
    return baseStories.filter((s) => {
      const sCat = s.category.toLowerCase();
      if (catLower === "couples") {
        return sCat === "couples" || sCat === "pre-weddings" || sCat === "engagements";
      }
      return sCat === catLower;
    });
  },

  async getFeaturedStories(): Promise<WeddingStory[]> {
    const stories = await this.getStories();
    const featured = stories.filter((s) => s.featured);
    return featured;
  },

  async getStoryBySlug(slug: string): Promise<WeddingStory | null> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          const { data, error } = await client
            .from("wedding_stories")
            .select("*, gallery:wedding_images(*)")
            .eq("slug", slug)
            .eq("published", true)
            .single();
          if (!error && data) {
            return normalizeStory(data as WeddingStory);
          }
        }
      } catch (err) {
        console.warn("Supabase getStoryBySlug fallback:", err);
      }
    }

    const found = storiesStore.find((s) => s.slug === slug && s.published !== false);
    return found || null;
  },

  async saveStory(story: Partial<WeddingStory>): Promise<WeddingStory> {
    const storyPayload = {
      ...story,
      event_date: story.event_date || story.wedding_date || null,
    };
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          if (story.id) {
            const { data } = await client.from("wedding_stories").update(storyPayload).eq("id", story.id).select().single();
            if (data) return data as WeddingStory;
          } else {
            const { data } = await client.from("wedding_stories").insert(storyPayload).select().single();
            if (data) return data as WeddingStory;
          }
        }
      } catch (err) {
        console.warn("Supabase saveStory fallback:", err);
      }
    }

    if (story.id) {
      const idx = storiesStore.findIndex((s) => s.id === story.id);
      if (idx !== -1) {
        storiesStore[idx] = { ...storiesStore[idx], ...story } as WeddingStory;
        return storiesStore[idx];
      }
    }

    const newStory: WeddingStory = {
      id: story.id || `story-${Date.now()}`,
      title: story.title || "Untitled Wedding Story",
      slug:
        story.slug ||
        (story.title || "story")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, ""),
      couple_names: story.couple_names || "Couple",
      wedding_date: story.wedding_date || new Date().toISOString().split("T")[0],
      location: story.location || "Ahmedabad, Gujarat",
      category: (story.category as StoryCategory) || "Weddings",
      cover_image:
        story.cover_image ||
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
      description: story.description || "",
      featured: Boolean(story.featured),
      published: story.published ?? false,
      film_url: story.film_url,
      gallery: story.gallery || [],
      created_at: new Date().toISOString(),
    };
    storiesStore.unshift(newStory);
    return newStory;
  },

  async deleteStory(id: string): Promise<boolean> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          await client.from("wedding_stories").delete().eq("id", id);
        }
      } catch (err) {
        console.warn("Supabase deleteStory fallback:", err);
      }
    }
    storiesStore = storiesStore.filter((s) => s.id !== id);
    return true;
  },

  // --- Films ---
  async getFilms(includeUnpublished = false): Promise<Film[]> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          let query = client.from("films").select("*");
          if (!includeUnpublished) query = query.eq("published", true);
          const { data, error } = await query
            .order("sort_order", { ascending: true })
            .order("display_order", { ascending: true });
          if (!error && data) {
            return data as Film[];
          }
        }
      } catch (err) {
        console.warn("Supabase getFilms fallback:", err);
      }
    }
    return includeUnpublished ? [...filmsStore] : filmsStore.filter((f) => f.published !== false);
  },

  async saveFilm(film: Partial<Film>): Promise<Film> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          if (film.id) {
            const { data } = await client.from("films").update(film).eq("id", film.id).select().single();
            if (data) return data as Film;
          } else {
            const { data } = await client.from("films").insert(film).select().single();
            if (data) return data as Film;
          }
        }
      } catch (err) {
        console.warn("Supabase saveFilm fallback:", err);
      }
    }

    if (film.id) {
      const idx = filmsStore.findIndex((f) => f.id === film.id);
      if (idx !== -1) {
        filmsStore[idx] = { ...filmsStore[idx], ...film } as Film;
        return filmsStore[idx];
      }
    }

    const newFilm: Film = {
      id: film.id || `film-${Date.now()}`,
      title: film.title || "Cinematic Wedding Film",
      couple_names: film.couple_names || "Couple",
      location: film.location || "Ahmedabad, Gujarat",
      duration: film.duration || "04:00",
      thumbnail_url:
        film.thumbnail_url ||
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
      video_url: film.video_url || "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: film.category || "Wedding Teaser",
      featured: Boolean(film.featured),
      display_order: filmsStore.length + 1,
      created_at: new Date().toISOString(),
    };
    filmsStore.unshift(newFilm);
    return newFilm;
  },

  async deleteFilm(id: string): Promise<boolean> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          await client.from("films").delete().eq("id", id);
        }
      } catch (err) {
        console.warn("Supabase deleteFilm fallback:", err);
      }
    }
    filmsStore = filmsStore.filter((f) => f.id !== id);
    return true;
  },

  // --- Services ---
  async getServices(includeUnpublished = false): Promise<ServiceItem[]> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          let query = client.from("services").select("*");
          if (!includeUnpublished) query = query.eq("published", true);
          const { data, error } = await query
            .order("sort_order", { ascending: true })
            .order("display_order", { ascending: true });
          if (!error && data) {
            return (data as ServiceItem[]).map(normalizeService);
          }
        }
      } catch (err) {
        console.warn("Supabase getServices fallback:", err);
      }
    }
    const services = includeUnpublished ? [...servicesStore] : servicesStore.filter((s) => s.published !== false);
    return services.map(normalizeService);
  },

  async saveService(service: Partial<ServiceItem>): Promise<ServiceItem> {
    const servicePayload = {
      ...service,
      description: service.full_description || service.short_description || "",
      items: service.items || service.features || [],
      image: service.image || service.image_url || null,
    };
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          if (service.id) {
            const { data } = await client.from("services").update(servicePayload).eq("id", service.id).select().single();
            if (data) return data as ServiceItem;
          } else {
            const { data } = await client.from("services").insert(servicePayload).select().single();
            if (data) return data as ServiceItem;
          }
        }
      } catch (err) {
        console.warn("Supabase saveService fallback:", err);
      }
    }

    if (service.id) {
      const idx = servicesStore.findIndex((s) => s.id === service.id);
      if (idx !== -1) {
        servicesStore[idx] = { ...servicesStore[idx], ...service } as ServiceItem;
        return servicesStore[idx];
      }
    }

    const newService: ServiceItem = {
      id: service.id || `service-${Date.now()}`,
      title: service.title || "Custom Service",
      slug:
        service.slug ||
        (service.title || "service").toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      short_description: service.short_description || "",
      full_description: service.full_description || "",
      image_url:
        service.image_url ||
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
      features: service.features || [],
      items: service.items || service.features || [],
      sort_order: service.sort_order || servicesStore.length + 1,
      display_order: servicesStore.length + 1,
      published: service.published ?? true,
      created_at: new Date().toISOString(),
    };
    servicesStore.push(newService);
    return newService;
  },

  async deleteService(id: string): Promise<boolean> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          await client.from("services").delete().eq("id", id);
        }
      } catch (err) {
        console.warn("Supabase deleteService fallback:", err);
      }
    }
    servicesStore = servicesStore.filter((s) => s.id !== id);
    return true;
  },

  // --- Testimonials ---
  async getTestimonials(includeUnpublished = false): Promise<Testimonial[]> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          let query = client.from("testimonials").select("*");
          if (!includeUnpublished) query = query.eq("published", true);
          const { data, error } = await query
            .order("sort_order", { ascending: true })
            .order("created_at", { ascending: false });
          if (!error && data) {
            return (data as Testimonial[]).map(normalizeTestimonial);
          }
        }
      } catch (err) {
        console.warn("Supabase getTestimonials fallback:", err);
      }
    }
    const testimonials = includeUnpublished
      ? [...testimonialsStore]
      : testimonialsStore.filter((t) => t.published !== false);
    return testimonials.map(normalizeTestimonial);
  },

  async saveTestimonial(testimonial: Partial<Testimonial>): Promise<Testimonial> {
    const testimonialPayload = {
      ...testimonial,
      review: testimonial.review || testimonial.review_text || "",
    };
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          if (testimonial.id) {
            const { data } = await client.from("testimonials").update(testimonialPayload).eq("id", testimonial.id).select().single();
            if (data) return data as Testimonial;
          } else {
            const { data } = await client.from("testimonials").insert(testimonialPayload).select().single();
            if (data) return data as Testimonial;
          }
        }
      } catch (err) {
        console.warn("Supabase saveTestimonial fallback:", err);
      }
    }

    if (testimonial.id) {
      const idx = testimonialsStore.findIndex((t) => t.id === testimonial.id);
      if (idx !== -1) {
        testimonialsStore[idx] = { ...testimonialsStore[idx], ...testimonial } as Testimonial;
        return testimonialsStore[idx];
      }
    }

    const newTestimonial: Testimonial = {
      id: testimonial.id || `test-${Date.now()}`,
      client_name: testimonial.client_name || "Anonymous Couple",
      wedding_event: testimonial.wedding_event || "Wedding, Ahmedabad",
      location: testimonial.location || "Ahmedabad, Gujarat",
      rating: testimonial.rating || 5,
      review_text: testimonial.review_text || "",
      photo_url: testimonial.photo_url,
      featured: testimonial.featured ?? true,
      created_at: new Date().toISOString(),
    };
    testimonialsStore.unshift(newTestimonial);
    return newTestimonial;
  },

  async deleteTestimonial(id: string): Promise<boolean> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          await client.from("testimonials").delete().eq("id", id);
        }
      } catch (err) {
        console.warn("Supabase deleteTestimonial fallback:", err);
      }
    }
    testimonialsStore = testimonialsStore.filter((t) => t.id !== id);
    return true;
  },

  // --- Enquiries ---
  async getEnquiries(): Promise<Enquiry[]> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          const { data, error } = await client
            .from("enquiries")
            .select("*")
            .order("created_at", { ascending: false });
          if (!error && data) {
            return data as Enquiry[];
          }
        }
      } catch (err) {
        console.warn("Supabase getEnquiries fallback:", err);
      }
    }
    return [...enquiriesStore];
  },

  async createEnquiry(
    enquiryData: Omit<Enquiry, "id" | "status" | "created_at">
  ): Promise<Enquiry> {
    const newEnquiry: Enquiry = {
      ...enquiryData,
      id: `enq-${Date.now()}`,
      status: "new",
      created_at: new Date().toISOString(),
    };

    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          const { data, error } = await client.from("enquiries").insert(enquiryData).select().single();
          if (!error && data) {
            enquiriesStore.unshift(data as Enquiry);
            return data as Enquiry;
          }
        }
      } catch (err) {
        console.warn("Supabase createEnquiry fallback:", err);
      }
    }

    enquiriesStore.unshift(newEnquiry);
    return newEnquiry;
  },

  async updateEnquiryStatus(
    id: string,
    status: EnquiryStatus
  ): Promise<Enquiry | null> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          const { data } = await client
            .from("enquiries")
            .update({ status })
            .eq("id", id)
            .select()
            .single();
          if (data) return data as Enquiry;
        }
      } catch (err) {
        console.warn("Supabase updateEnquiryStatus fallback:", err);
      }
    }

    const idx = enquiriesStore.findIndex((e) => e.id === id);
    if (idx !== -1) {
      enquiriesStore[idx].status = status;
      return enquiriesStore[idx];
    }
    return null;
  },

  async deleteEnquiry(id: string): Promise<boolean> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          await client.from("enquiries").delete().eq("id", id);
        }
      } catch (err) {
        console.warn("Supabase deleteEnquiry fallback:", err);
      }
    }
    enquiriesStore = enquiriesStore.filter((e) => e.id !== id);
    return true;
  },

  // --- Admin Overview Stats ---
  async getAdminStats(): Promise<AdminStats> {
    const [enquiries, stories, films, testimonials] = await Promise.all([
      this.getEnquiries(),
      this.getStories(undefined, true),
      this.getFilms(true),
      this.getTestimonials(true),
    ]);

    return {
      totalEnquiries: enquiries.length,
      newEnquiries: enquiries.filter((e) => e.status === "new").length,
      totalStories: stories.length,
      totalFilms: films.length,
      totalTestimonials: testimonials.length,
    };
  },
};
