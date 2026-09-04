import type { Metadata } from "next";
import { siteConfig } from "./site";

export const DEFAULT_SOCIAL_IMAGE =
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop";

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_SOCIAL_IMAGE,
  imageAlt = siteConfig.name,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  const url = new URL(path, process.env.NEXT_PUBLIC_SITE_URL || "https://playthestory.com");

  return {
    title,
    description,
    alternates: { canonical: url.pathname },
    openGraph: {
      type: "website",
      url: url.toString(),
      title: `${title} | ${siteConfig.name}`,
      description,
      siteName: siteConfig.name,
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image],
    },
  };
}