-- PLAY THE STORY production schema
-- Run this in the Supabase SQL editor for a new project.
-- Existing installations should review the compatibility columns before applying it.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.wedding_stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  location TEXT NOT NULL,
  event_date DATE,
  description TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  featured BOOLEAN NOT NULL DEFAULT false,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  couple_names TEXT,
  wedding_date DATE,
  wedding_type TEXT,
  film_url TEXT
);

CREATE TABLE IF NOT EXISTS public.wedding_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  story_id UUID NOT NULL REFERENCES public.wedding_stories(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  public_id TEXT,
  alt_text TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.films (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT NOT NULL,
  public_id TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  couple_names TEXT,
  location TEXT,
  duration TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  display_order INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  image TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  short_description TEXT,
  full_description TEXT,
  image_url TEXT,
  features JSONB NOT NULL DEFAULT '[]'::jsonb,
  display_order INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  review TEXT NOT NULL,
  shoot_type TEXT,
  location TEXT,
  rating INTEGER NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  published BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  wedding_event TEXT,
  review_text TEXT,
  photo_url TEXT,
  featured BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE IF NOT EXISTS public.enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  partner_name TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  wedding_date TEXT NOT NULL,
  event_type TEXT NOT NULL,
  location TEXT NOT NULL,
  estimated_budget TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK (
    status IN ('new', 'contacted', 'in_progress', 'completed', 'archived')
  ),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS wedding_stories_set_updated_at ON public.wedding_stories;
CREATE TRIGGER wedding_stories_set_updated_at BEFORE UPDATE ON public.wedding_stories
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
DROP TRIGGER IF EXISTS films_set_updated_at ON public.films;
CREATE TRIGGER films_set_updated_at BEFORE UPDATE ON public.films
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
DROP TRIGGER IF EXISTS services_set_updated_at ON public.services;
CREATE TRIGGER services_set_updated_at BEFORE UPDATE ON public.services
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX IF NOT EXISTS idx_wedding_stories_published_category
  ON public.wedding_stories (published, category);
CREATE INDEX IF NOT EXISTS idx_wedding_stories_featured
  ON public.wedding_stories (featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_wedding_images_story_sort
  ON public.wedding_images (story_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_films_published_category
  ON public.films (published, category);
CREATE INDEX IF NOT EXISTS idx_services_published_sort
  ON public.services (published, sort_order);
CREATE INDEX IF NOT EXISTS idx_testimonials_published_sort
  ON public.testimonials (published, sort_order);
CREATE INDEX IF NOT EXISTS idx_enquiries_status_created
  ON public.enquiries (status, created_at DESC);

ALTER TABLE public.wedding_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wedding_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.films ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
AS $$
  SELECT COALESCE((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false);
$$;

DROP POLICY IF EXISTS wedding_stories_public_read ON public.wedding_stories;
CREATE POLICY wedding_stories_public_read ON public.wedding_stories
  FOR SELECT TO anon, authenticated USING (published = true OR public.is_admin());
DROP POLICY IF EXISTS wedding_images_public_read ON public.wedding_images;
CREATE POLICY wedding_images_public_read ON public.wedding_images
  FOR SELECT TO anon, authenticated USING (
    EXISTS (SELECT 1 FROM public.wedding_stories story WHERE story.id = wedding_images.story_id
      AND (story.published = true OR public.is_admin()))
  );
DROP POLICY IF EXISTS films_public_read ON public.films;
CREATE POLICY films_public_read ON public.films
  FOR SELECT TO anon, authenticated USING (published = true OR public.is_admin());
DROP POLICY IF EXISTS services_public_read ON public.services;
CREATE POLICY services_public_read ON public.services
  FOR SELECT TO anon, authenticated USING (published = true OR public.is_admin());
DROP POLICY IF EXISTS testimonials_public_read ON public.testimonials;
CREATE POLICY testimonials_public_read ON public.testimonials
  FOR SELECT TO anon, authenticated USING (published = true OR public.is_admin());
DROP POLICY IF EXISTS enquiries_public_insert ON public.enquiries;
CREATE POLICY enquiries_public_insert ON public.enquiries
  FOR INSERT TO anon, authenticated WITH CHECK (status = 'new');

DROP POLICY IF EXISTS wedding_stories_admin_all ON public.wedding_stories;
CREATE POLICY wedding_stories_admin_all ON public.wedding_stories
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
DROP POLICY IF EXISTS wedding_images_admin_all ON public.wedding_images;
CREATE POLICY wedding_images_admin_all ON public.wedding_images
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
DROP POLICY IF EXISTS films_admin_all ON public.films;
CREATE POLICY films_admin_all ON public.films
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
DROP POLICY IF EXISTS services_admin_all ON public.services;
CREATE POLICY services_admin_all ON public.services
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
DROP POLICY IF EXISTS testimonials_admin_all ON public.testimonials;
CREATE POLICY testimonials_admin_all ON public.testimonials
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
DROP POLICY IF EXISTS enquiries_admin_all ON public.enquiries;
CREATE POLICY enquiries_admin_all ON public.enquiries
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
