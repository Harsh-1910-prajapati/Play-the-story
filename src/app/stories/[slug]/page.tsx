import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { dataRepository } from "@/lib/data/repository";
import { StoryDetailView } from "@/components/stories/StoryDetailView";

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

  return {
    title: `${story.couple_names} — ${story.wedding_type || "Wedding Story"} in ${story.location}`,
    description: story.description,
    openGraph: {
      title: `${story.couple_names} — Play The Story Luxury Weddings`,
      description: story.description,
      images: [{ url: story.cover_image }],
    },
  };
}

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = await dataRepository.getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return <StoryDetailView story={story} />;
}
