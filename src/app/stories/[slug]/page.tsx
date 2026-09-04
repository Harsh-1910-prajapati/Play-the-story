import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { dataRepository } from "@/lib/data/repository";
import { StoryDetailView } from "@/components/stories/StoryDetailView";
import { createPageMetadata } from "@/config/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const stories = await dataRepository.getStories();
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = await dataRepository.getStoryBySlug(slug);

  if (!story) {
    return {
      title: "Wedding Story Not Found | Play The Story",
    };
  }

  return createPageMetadata({
    title: `${story.couple_names} — ${story.wedding_type || "Wedding Story"} in ${story.location}`,
    description: story.description,
    path: `/stories/${story.slug}`,
    image: story.cover_image,
    imageAlt: `${story.couple_names} — ${story.title}`,
  });
}

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = await dataRepository.getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return <StoryDetailView story={story} />;
}
