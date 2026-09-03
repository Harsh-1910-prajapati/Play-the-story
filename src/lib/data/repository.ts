import { WeddingStory, Film, ServiceItem, Testimonial, Enquiry, AdminStats, StoryCategory } from "@/types";
import { initialStories, initialFilms, initialServices, initialTestimonials, initialEnquiries } from "./mock-data";
import { getSupabaseClient, isSupabaseConfigured } from "../supabase/client";

// In-memory fallback stores for local testing and zero-crash operation
let storiesStore: WeddingStory[] = [...initialStories];
let filmsStore: Film[] = [...initialFilms];
let servicesStore: ServiceItem[] = [...initialServices];
let testimonialsStore: Testimonial[] = [...initialTestimonials];
let enquiriesStore: Enquiry[] = [...initialEnquiries];

export const dataRepository = {
  // --- Stories ---
  async getStories(category?: string): Promise<WeddingStory[]> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          let query = client.from("wedding_stories").select("*, gallery:wedding_images(*)");
          if (category && category.toLowerCase() !== "all") {
            query = query.ilike("category", category);
          }
          const { data, error } = await query.order("wedding_date", { ascending: false });
          if (!error && data && data.length > 0) {
            return data as WeddingStory[];
          }
        }
      } catch (err) {
        console.warn("Supabase getStories fallback:", err);
      }
    }

    if (!category || category.toLowerCase() === "all") {
      return [...storiesStore];
    }
    return storiesStore.filter(
      (s) => s.category.toLowerCase() === category.toLowerCase()
    );
  },

  async getFeaturedStories(): Promise<WeddingStory[]> {
    const stories = await this.getStories();
    const featured = stories.filter((s) => s.featured);
    return featured.length > 0 ? featured : stories.slice(0, 3);
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
            .single();
          if (!error && data) {
            return data as WeddingStory;
          }
        }
      } catch (err) {
        console.warn("Supabase getStoryBySlug fallback:", err);
      }
    }

    const found = storiesStore.find((s) => s.slug === slug);
    return found || null;
  },

  async saveStory(story: Partial<WeddingStory>): Promise<WeddingStory> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          if (story.id && storiesStore.some(s => s.id === story.id)) {
            const { data } = await client.from("wedding_stories").update(story).eq("id", story.id).select().single();
            if (data) return data as WeddingStory;
          } else {
            const { data } = await client.from("wedding_stories").insert(story).select().single();
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
  async getFilms(): Promise<Film[]> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          const { data, error } = await client
            .from("films")
            .select("*")
            .order("display_order", { ascending: true });
          if (!error && data && data.length > 0) {
            return data as Film[];
          }
        }
      } catch (err) {
        console.warn("Supabase getFilms fallback:", err);
      }
    }
    return [...filmsStore];
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
  async getServices(): Promise<ServiceItem[]> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          const { data, error } = await client
            .from("services")
            .select("*")
            .order("display_order", { ascending: true });
          if (!error && data && data.length > 0) {
            return data as ServiceItem[];
          }
        }
      } catch (err) {
        console.warn("Supabase getServices fallback:", err);
      }
    }
    return [...servicesStore];
  },

  async saveService(service: Partial<ServiceItem>): Promise<ServiceItem> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          if (service.id) {
            const { data } = await client.from("services").update(service).eq("id", service.id).select().single();
            if (data) return data as ServiceItem;
          } else {
            const { data } = await client.from("services").insert(service).select().single();
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
      display_order: servicesStore.length + 1,
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
  async getTestimonials(): Promise<Testimonial[]> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          const { data, error } = await client.from("testimonials").select("*").order("created_at", { ascending: false });
          if (!error && data && data.length > 0) {
            return data as Testimonial[];
          }
        }
      } catch (err) {
        console.warn("Supabase getTestimonials fallback:", err);
      }
    }
    return [...testimonialsStore];
  },

  async saveTestimonial(testimonial: Partial<Testimonial>): Promise<Testimonial> {
    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          if (testimonial.id) {
            const { data } = await client.from("testimonials").update(testimonial).eq("id", testimonial.id).select().single();
            if (data) return data as Testimonial;
          } else {
            const { data } = await client.from("testimonials").insert(testimonial).select().single();
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
          if (!error && data && data.length > 0) {
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
      status: "New",
      created_at: new Date().toISOString(),
    };

    if (isSupabaseConfigured) {
      try {
        const client = getSupabaseClient();
        if (client) {
          const { data, error } = await client.from("enquiries").insert(newEnquiry).select().single();
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
    status: "New" | "Contacted" | "Completed"
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
      this.getStories(),
      this.getFilms(),
      this.getTestimonials(),
    ]);

    return {
      totalEnquiries: enquiries.length,
      newEnquiries: enquiries.filter((e) => e.status === "New").length,
      totalStories: stories.length,
      totalFilms: films.length,
      totalTestimonials: testimonials.length,
    };
  },
};
