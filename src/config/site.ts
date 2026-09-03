export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  location: {
    city: string;
    state: string;
    country: string;
    address: string;
    googleMapsUrl: string;
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

export const siteConfig: SiteConfig = {
  name: "Play The Story",
  tagline: "Luxury Wedding Photography & Cinematic Films",
  description:
    "We don't just capture weddings. We preserve the emotions, people and moments that make your story yours. Premier luxury wedding photography and cinematic film studio based in Ahmedabad, Gujarat, India.",
  location: {
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    address: "B-504, Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat 380054",
    googleMapsUrl: "https://maps.google.com/?q=Sindhu+Bhavan+Marg+Ahmedabad",
  },
  contact: {
    phone: "+919825000000",
    phoneFormatted: "+91 98250 00000",
    whatsapp: "919825000000",
    whatsappFormatted: "+91 98250 00000",
    whatsappPrefilledMessage:
      "Hello Play The Story! I would like to check availability and inquire for our upcoming wedding photography & films.",
    email: "hello@playthestory.com",
    instagram: "https://instagram.com/playthestory",
    instagramHandle: "@playthestory",
    youtube: "https://youtube.com/@playthestory",
    vimeo: "https://vimeo.com/playthestory",
  },
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Stories", href: "/stories" },
    { name: "Services", href: "/services" },
    { name: "Films", href: "/films" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ],
  categories: [
    { name: "All", slug: "all" },
    { name: "Weddings", slug: "weddings" },
    { name: "Pre-Weddings", slug: "pre-weddings" },
    { name: "Engagements", slug: "engagements" },
    { name: "Receptions", slug: "receptions" },
    { name: "Events", slug: "events" },
  ],
};
