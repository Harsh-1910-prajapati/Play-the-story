export interface SiteConfig {
  name: string;
  positioning: string;
  tagline: string;
  copyrightYear: number;
  description: string;
  location: {
    city: string;
    state: string;
    country: string;
    address: string;
    googleMapsUrl: string;
    coverageText: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsapp: string;
    whatsappFormatted: string;
    whatsappPrefilledMessage: string;
    email: string;
    instagram: string;
    instagramHandle: string;
    youtube: string;
    vimeo: string;
  };
  navLinks: {
    name: string;
    href: string;
  }[];
  categories: {
    name: string;
    slug: string;
  }[];
}

const WHATSAPP_NUMBER = "919104027413";

export const siteConfig: SiteConfig = {
  name: "PLAY THE STORY",
  positioning: "Creative Photography & Films",
  tagline: "Every Story Deserves a Frame.",
  copyrightYear: new Date().getFullYear(),
  description:
    "One creative studio for different kinds of visual stories. We craft bespoke visual narratives spanning weddings, couples, commercial campaigns, personal portraits, brand films, and creative post-production.",
  location: {
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    address: "Panache, Besides, Tragad UNDER PASS, nr. Vaishnodevi Circle, Khoraj, Ahmedabad, Gujarat 382421",
    googleMapsUrl: "https://maps.google.com/?q=Panache+Tragad+Under+Pass+Khoraj+Ahmedabad",
    coverageText: "AHMEDABAD · GUJARAT · INDIA · WORLDWIDE",
  },
  contact: {
    phone: "9104027413",
    phoneFormatted: "9104027413",
    whatsapp: WHATSAPP_NUMBER,
    whatsappFormatted: "9104027413",
    whatsappPrefilledMessage:
      "Hello Play The Story! I would like to inquire about a project and check availability.",
    email: "hello@playthestory.com",
    instagram: "https://www.instagram.com/playthe_story",
    instagramHandle: "@playthe_story",
    youtube: "https://youtube.com/@playthestory",
    vimeo: "https://vimeo.com/playthestory",
  },
  navLinks: [
    { name: "Work", href: "/#work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Reviews", href: "/reviews" },
  ],
  categories: [
    { name: "All", slug: "all" },
    { name: "Weddings", slug: "weddings" },
    { name: "Couples", slug: "couples" },
    { name: "Events", slug: "events" },
    { name: "Portraits", slug: "portraits" },
    { name: "Commercial", slug: "commercial" },
    { name: "Films", slug: "films" },
  ],
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(
    customMessage || siteConfig.contact.whatsappPrefilledMessage
  );
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`;
}

