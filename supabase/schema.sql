-- Supabase SQL Schema for "Play The Story" Luxury Wedding Photography & Films
-- Execute in Supabase SQL Editor

-- 1. Create Tables
CREATE TABLE IF NOT EXISTS wedding_stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  couple_names TEXT NOT NULL,
  wedding_date DATE NOT NULL,
  location TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Weddings', 'Pre-Weddings', 'Engagements', 'Receptions', 'Events')),
  wedding_type TEXT,
  cover_image TEXT NOT NULL,
  description TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  film_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS wedding_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  story_id UUID REFERENCES wedding_stories(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  caption TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS films (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  couple_names TEXT NOT NULL,
  location TEXT NOT NULL,
  duration TEXT NOT NULL,
  thumbnail_url TEXT NOT NULL,
  video_url TEXT NOT NULL,
  category TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  features TEXT[] DEFAULT '{}',
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  wedding_event TEXT NOT NULL,
  location TEXT,
  rating INT DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  photo_url TEXT,
  featured BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS enquiries (
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
  status TEXT DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Completed')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create Indexes for Performance
CREATE INDEX IF NOT EXISTS idx_stories_slug ON wedding_stories(slug);
CREATE INDEX IF NOT EXISTS idx_stories_category ON wedding_stories(category);
CREATE INDEX IF NOT EXISTS idx_stories_featured ON wedding_stories(featured);
CREATE INDEX IF NOT EXISTS idx_wedding_images_story ON wedding_images(story_id);
CREATE INDEX IF NOT EXISTS idx_films_featured ON films(featured);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created ON enquiries(created_at DESC);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE wedding_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE wedding_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE films ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies
-- Public read policies for active content
CREATE POLICY "Allow public read access for wedding_stories" ON wedding_stories FOR SELECT USING (true);
CREATE POLICY "Allow public read access for wedding_images" ON wedding_images FOR SELECT USING (true);
CREATE POLICY "Allow public read access for films" ON films FOR SELECT USING (true);
CREATE POLICY "Allow public read access for services" ON services FOR SELECT USING (true);
CREATE POLICY "Allow public read access for testimonials" ON testimonials FOR SELECT USING (true);

-- Public can insert new enquiries
CREATE POLICY "Allow public insert for enquiries" ON enquiries FOR INSERT WITH CHECK (true);

-- Admin authenticated users full access
CREATE POLICY "Allow authenticated admin full access wedding_stories" ON wedding_stories FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated admin full access wedding_images" ON wedding_images FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated admin full access films" ON films FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated admin full access services" ON services FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated admin full access testimonials" ON testimonials FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated admin full access enquiries" ON enquiries FOR ALL TO authenticated USING (true) WITH CHECK (true);
