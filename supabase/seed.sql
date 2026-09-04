BEGIN;

-- ============================================================
-- PLAY THE STORY — PRODUCTION SEED
-- 8 Stories + 16 Gallery Images
-- 4 Films + 7 Services + 4 Testimonials
-- ============================================================


-- ============================================================
-- 1. WEDDING STORIES
-- ============================================================

INSERT INTO public.wedding_stories (
  id,
  title,
  slug,
  couple_names,
  event_date,
  wedding_date,
  location,
  category,
  wedding_type,
  cover_image,
  description,
  featured,
  published,
  film_url
)
VALUES

(
  '00000000-0000-0000-0000-000000000001',
  'A Royal Heritage Union in the Heart of Gujarat',
  'ananya-and-kabir-ahmedabad',
  'Ananya & Kabir',
  '2025-12-14',
  '2025-12-14',
  'The Ummed, Ahmedabad',
  'Weddings',
  'Gujarati Royal Wedding',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1920&auto=format&fit=crop',
  'Set against the majestic heritage courtyards of Ahmedabad, Ananya and Kabir''s wedding was a harmonious celebration of timeless Gujarati traditions, intimate familial glances, and vibrant dusk-lit phere. From the emotional Vidaai under candlelit lanterns to the high-energy Sangeet reverberating with Garba beats, every moment unfolded like poetry.',
  true,
  true,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
),

(
  '00000000-0000-0000-0000-000000000002',
  'Lakeside Romance & Whispering Palaces',
  'radhika-and-dev-udaipur',
  'Radhika & Dev',
  '2025-11-20',
  '2025-11-20',
  'Jagmandir Island Palace, Udaipur',
  'Weddings',
  'Destination Palace Wedding',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop',
  'Surrounded by the serene waters of Lake Pichola, Radhika and Dev''s destination wedding was pure grandeur. We captured the silent morning anticipation, the gentle ripples of boats ferrying loved ones, and the firelit palace glowing under a velvet starry sky.',
  true,
  true,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
),

(
  '00000000-0000-0000-0000-000000000003',
  'Golden Hour Whispers at the Salt Deserts',
  'meera-and-arjun-kutch',
  'Meera & Arjun',
  '2025-10-18',
  '2025-10-18',
  'White Desert, Kutch, Gujarat',
  'Pre-Weddings',
  'Editorial Pre-Wedding',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1920&auto=format&fit=crop',
  'A cinematic exploration of love across the vast, pristine white horizons of the Great Rann of Kutch. Dressed in flowing couture against the stark, minimalist landscape, Meera and Arjun created visual magic as dusk painted the sky in shades of lilac and gold.',
  true,
  true,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
),

(
  '00000000-0000-0000-0000-000000000004',
  'Under a Canopy of Lights & Jasmine',
  'tanvi-and-siddharth-ahmedabad',
  'Tanvi & Siddharth',
  '2025-09-25',
  '2025-09-25',
  'Gulmohar Greens, Ahmedabad',
  'Engagements',
  'Lawn Engagement Soiree',
  'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1920&auto=format&fit=crop',
  'An open-air evening soiree surrounded by towering emerald palms and thousands of warm fairy lights. Tanvi and Siddharth celebrated their engagement with acoustic music, champagne toasts, and unscripted laughter with their closest childhood companions.',
  false,
  true,
  NULL
),

(
  '00000000-0000-0000-0000-000000000005',
  'Symphony of Glitz, Velvet & Jazz',
  'ishani-and-varun-belvedere',
  'Ishani & Varun',
  '2025-08-12',
  '2025-08-12',
  'Belvedere Golf & Country Club, Ahmedabad',
  'Receptions',
  'Grand Black-Tie Reception',
  'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1920&auto=format&fit=crop',
  'A night of unmatched elegance. Contemporary black-tie meets traditional grandeur, framed by custom architectural light installations and timeless candid portraits that celebrate pure joy.',
  false,
  true,
  NULL
),

(
  '00000000-0000-0000-0000-000000000006',
  'The Colors of Sangeet & Folk Celebrations',
  'priya-and-harsh-vadodara',
  'Priya & Harsh',
  '2025-07-04',
  '2025-07-04',
  'Laxmi Vilas Palace Grounds, Vadodara',
  'Events',
  'Grand Sangeet & Mehendi',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1920&auto=format&fit=crop',
  'Marigold blooms, intricate mehendi motifs, and non-stop traditional music. Our lens caught the unfiltered energy of family members dancing together, genuine tears of joy, and every fleeting glance.',
  false,
  true,
  NULL
),

(
  '00000000-0000-0000-0000-000000000007',
  'Sculpted in Light — Editorial Studio Series',
  'maya-sen-editorial-portraits',
  'Maya Sen',
  '2025-06-15',
  '2025-06-15',
  'Play The Story Studio, Ahmedabad',
  'Portraits',
  'Editorial Fashion Portraiture',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1920&auto=format&fit=crop',
  'An exploration of minimalist silhouettes, natural chiaroscuro contrast, and high-fashion editorial styling. Captured using custom continuous tungsten lights in our studio space.',
  false,
  true,
  NULL
),

(
  '00000000-0000-0000-0000-000000000008',
  'Heritage Craft & Contemporary Luxury',
  'atelier-ahmedabad-commercial-campaign',
  'Atelier Vayu Brand Film',
  '2025-05-10',
  '2025-05-10',
  'Heritage Precinct, Ahmedabad',
  'Commercial',
  'Luxury Brand Campaign',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1920&auto=format&fit=crop',
  'A cinematic visual narrative for a bespoke textile atelier. We followed the artisans from handloom silk weaving at dawn to the final high-fashion runway showcase.',
  false,
  true,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
)

ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  slug = EXCLUDED.slug,
  couple_names = EXCLUDED.couple_names,
  event_date = EXCLUDED.event_date,
  wedding_date = EXCLUDED.wedding_date,
  location = EXCLUDED.location,
  category = EXCLUDED.category,
  wedding_type = EXCLUDED.wedding_type,
  cover_image = EXCLUDED.cover_image,
  description = EXCLUDED.description,
  featured = EXCLUDED.featured,
  published = EXCLUDED.published,
  film_url = EXCLUDED.film_url,
  updated_at = NOW();


-- ============================================================
-- 2. WEDDING GALLERY IMAGES
-- ============================================================

INSERT INTO public.wedding_images (
  id,
  story_id,
  image_url,
  public_id,
  alt_text,
  sort_order
)
VALUES

-- Story 1
(
  '10000000-0000-0000-0000-000000000001',
  '00000000-0000-0000-0000-000000000001',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop',
  NULL,
  'The radiant bride bathed in golden hour sunshine',
  1
),
(
  '10000000-0000-0000-0000-000000000002',
  '00000000-0000-0000-0000-000000000001',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
  NULL,
  'The royal entrance beneath floral canopies',
  2
),
(
  '10000000-0000-0000-0000-000000000003',
  '00000000-0000-0000-0000-000000000001',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop',
  NULL,
  'An intimate promise shared before the holy fire',
  3
),
(
  '10000000-0000-0000-0000-000000000004',
  '00000000-0000-0000-0000-000000000001',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1600&auto=format&fit=crop',
  NULL,
  'Delicate bridal jewelry and handcrafted silk details',
  4
),
(
  '10000000-0000-0000-0000-000000000005',
  '00000000-0000-0000-0000-000000000001',
  'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1600&auto=format&fit=crop',
  NULL,
  'Euphoric celebration during the evening pheras',
  5
),
(
  '10000000-0000-0000-0000-000000000006',
  '00000000-0000-0000-0000-000000000001',
  'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1600&auto=format&fit=crop',
  NULL,
  'The joyous couple stepping into their new beginning',
  6
),

-- Story 2
(
  '10000000-0000-0000-0000-000000000007',
  '00000000-0000-0000-0000-000000000002',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
  NULL,
  'The majestic lakefront mandap',
  1
),
(
  '10000000-0000-0000-0000-000000000008',
  '00000000-0000-0000-0000-000000000002',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1600&auto=format&fit=crop',
  NULL,
  'Subtle emotion captured in black & white',
  2
),
(
  '10000000-0000-0000-0000-000000000009',
  '00000000-0000-0000-0000-000000000002',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop',
  NULL,
  'Sunset portraits on the marble balcony',
  3
),

-- Story 3
(
  '10000000-0000-0000-0000-000000000010',
  '00000000-0000-0000-0000-000000000003',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop',
  NULL,
  'Endless horizons and timeless connection',
  1
),
(
  '10000000-0000-0000-0000-000000000011',
  '00000000-0000-0000-0000-000000000003',
  'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1600&auto=format&fit=crop',
  NULL,
  'Sunset silhouette against the salt flats',
  2
),

-- Story 4
(
  '10000000-0000-0000-0000-000000000012',
  '00000000-0000-0000-0000-000000000004',
  'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1600&auto=format&fit=crop',
  NULL,
  'Ring exchange under the floral arch',
  1
),

-- Story 5
(
  '10000000-0000-0000-0000-000000000013',
  '00000000-0000-0000-0000-000000000005',
  'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1600&auto=format&fit=crop',
  NULL,
  'First dance under the starlit ceiling',
  1
),

-- Story 6
(
  '10000000-0000-0000-0000-000000000014',
  '00000000-0000-0000-0000-000000000006',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1600&auto=format&fit=crop',
  NULL,
  'Dynamic rhythm of the Sangeet stage',
  1
),

-- Story 7
(
  '10000000-0000-0000-0000-000000000015',
  '00000000-0000-0000-0000-000000000007',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop',
  NULL,
  'Deliberate framing and organic shadow play',
  1
),

-- Story 8
(
  '10000000-0000-0000-0000-000000000016',
  '00000000-0000-0000-0000-000000000008',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop',
  NULL,
  'Craftsmanship in tactile slow motion',
  1
)

ON CONFLICT (id) DO UPDATE SET
  story_id = EXCLUDED.story_id,
  image_url = EXCLUDED.image_url,
  public_id = EXCLUDED.public_id,
  alt_text = EXCLUDED.alt_text,
  sort_order = EXCLUDED.sort_order;


-- ============================================================
-- 3. FILMS
-- ============================================================

INSERT INTO public.films (
  id,
  title,
  couple_names,
  location,
  duration,
  thumbnail_url,
  video_url,
  category,
  featured,
  display_order,
  published
)
VALUES

(
  '20000000-0000-0000-0000-000000000001',
  'Eternal Echoes — The Royal Celebration',
  'Ananya & Kabir',
  'Ahmedabad, Gujarat',
  '04:45',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Wedding Teaser',
  true,
  1,
  true
),

(
  '20000000-0000-0000-0000-000000000002',
  'Waters of Pichola — A Love Poem',
  'Radhika & Dev',
  'Udaipur, Rajasthan',
  '06:12',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Feature Film',
  true,
  2,
  true
),

(
  '20000000-0000-0000-0000-000000000003',
  'Whispers of the White Dunes',
  'Meera & Arjun',
  'Rann of Kutch, Gujarat',
  '03:30',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Pre-Wedding Film',
  true,
  3,
  true
),

(
  '20000000-0000-0000-0000-000000000004',
  'Starlight & Promises',
  'Tanvi & Siddharth',
  'Gulmohar Greens, Ahmedabad',
  '04:10',
  'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Engagement Highlight',
  false,
  4,
  true
)

ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  couple_names = EXCLUDED.couple_names,
  location = EXCLUDED.location,
  duration = EXCLUDED.duration,
  thumbnail_url = EXCLUDED.thumbnail_url,
  video_url = EXCLUDED.video_url,
  category = EXCLUDED.category,
  featured = EXCLUDED.featured,
  display_order = EXCLUDED.display_order,
  published = EXCLUDED.published;


-- ============================================================
-- 4. SERVICES
-- ============================================================

INSERT INTO public.services (
  id,
  title,
  slug,
  description,
  short_description,
  full_description,
  image,
  image_url,
  features,
  items,
  sort_order,
  display_order,
  published
)
VALUES

(
  '30000000-0000-0000-0000-000000000001',
  'Weddings',
  'weddings',
  'Candid photography, traditional ceremonial documentation, and bespoke cinematic wedding feature films.',
  'Candid photography, traditional ceremonial documentation, and bespoke cinematic wedding feature films.',
  'We believe that wedding photography is an heirloom art. Our team blends non-intrusive photojournalism with refined editorial portraiture. We document every authentic tear, sudden burst of laughter, tender touch, and the majestic scale of your wedding ceremonies across Gujarat and destination venues worldwide.',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
  '["Candid Photography","Traditional Photography","Cinematic Wedding Films","Signature fine-art color grading and skin-tone perfection","Bespoke handcrafted Italian leather wedding album"]'::jsonb,
  '["Candid Photography","Traditional Photography","Cinematic Wedding Films"]'::jsonb,
  1,
  1,
  true
),

(
  '30000000-0000-0000-0000-000000000002',
  'Couples',
  'couples',
  'Pre-wedding stories, intimate engagement shoots, and stylized couple portraits before the big day.',
  'Pre-wedding stories, intimate engagement shoots, and stylized couple portraits before the big day.',
  'Before the whirlwind of wedding festivities begins, we create a relaxed, intimate sanctuary for you both. Whether against the architectural stepwells of Gujarat, the golden desert dunes of Rajasthan, or an urban cafe where you first met, we craft stylized, deeply personal photographs.',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
  '["Pre-Wedding Shoots","Engagement Soirees","Couple Portraits","Moodboard direction and wardrobe styling consultation","Drone aerial cinematography & teaser cuts"]'::jsonb,
  '["Pre-Wedding","Engagement","Couple Portraits"]'::jsonb,
  2,
  2,
  true
),

(
  '30000000-0000-0000-0000-000000000003',
  'Events',
  'events',
  'High-caliber coverage for corporate summits, cultural galas, social milestones, and brand launches.',
  'High-caliber coverage for corporate summits, cultural galas, social milestones, and brand launches.',
  'Every milestone gathering has its own rhythm and energy. We deploy nimble, discreet multi-camera teams to capture both high-profile keynote stages and spontaneous networking interactions with crisp, modern polish.',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
  '["Corporate Conferences & Summits","Social Events & Private Galas","Launches & Celebrations","Rapid turnaround for PR and press releases","Multi-camera live streaming and recap edits"]'::jsonb,
  '["Corporate","Social Events","Launches & Celebrations"]'::jsonb,
  3,
  3,
  true
),

(
  '30000000-0000-0000-0000-000000000004',
  'Portraits',
  'portraits',
  'Personal editorial portraits, family legacy sessions, fashion lookbooks, and authentic lifestyle imagery.',
  'Personal editorial portraits, family legacy sessions, fashion lookbooks, and authentic lifestyle imagery.',
  'A great portrait reveals who you are when nobody is looking. We craft individual, executive, and family portraits with deliberate lighting, natural poses, and magazine-editorial aesthetics.',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
  '["Personal & Executive Portraits","Family Legacy Sessions","Fashion Lookbooks & Editorials","Lifestyle & Environmental Portraits","Studio and on-location lighting setups"]'::jsonb,
  '["Personal","Family","Fashion","Lifestyle"]'::jsonb,
  4,
  4,
  true
),

(
  '30000000-0000-0000-0000-000000000005',
  'Commercial',
  'commercial',
  'High-impact brand photography, product imagery, visual advertising campaigns, and cinematic business films.',
  'High-impact brand photography, product imagery, visual advertising campaigns, and cinematic business films.',
  'Elevate your brand presence with visuals engineered to convert and captivate. We partner with design-forward brands, hospitality groups, and luxury architecture studios to create striking visual assets.',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
  '["Brand & Campaign Photography","Product & E-Commerce Imagery","Architectural & Hospitality Spaces","Cinematic Business & Brand Films","Commercial licensing & multi-format delivery"]'::jsonb,
  '["Brand Photography","Product Photography","Campaigns","Business Films"]'::jsonb,
  5,
  5,
  true
),

(
  '30000000-0000-0000-0000-000000000006',
  'Content Creation',
  'content-creation',
  'Scroll-stopping Instagram Reels, high-engagement social media content, and evocative short-form films.',
  'Scroll-stopping Instagram Reels, high-engagement social media content, and evocative short-form films.',
  'In the modern digital landscape, visual speed matters as much as quality. Our content creators deliver crisp 9:16 vertical video narratives designed for viral engagement without sacrificing aesthetic prestige.',
  'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop',
  '["Dynamic Vertical Instagram Reels & TikToks","Social Media Content Retainers","Cinematic Short Films & Teasers","Trending audio integration and dynamic typography","24–48 hour rapid delivery turnarounds"]'::jsonb,
  '["Reels","Social Media Content","Short Films"]'::jsonb,
  6,
  6,
  true
),

(
  '30000000-0000-0000-0000-000000000007',
  'Post Production',
  'post-production',
  'Hollywood-grade DaVinci Resolve color grading, narrative film editing, wedding films, and audio sound design.',
  'Hollywood-grade DaVinci Resolve color grading, narrative film editing, wedding films, and audio sound design.',
  'The magic of cinema is born in the edit suite. Our post-production team specializes in meticulous pacing, DaVinci Resolve color grading tailored to vibrant Indian silks and skin tones, and rich spatial audio design.',
  'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop',
  '["Video Editing & Master Cuts","Full-Length Wedding Films & Documentaries","Hollywood-Standard DaVinci Resolve Color Grading","Reels & Vertical Micro-Edits","Sound design, dialogue leveling, and noise restoration"]'::jsonb,
  '["Video Editing","Wedding Films","Color Grading","Reels"]'::jsonb,
  7,
  7,
  true
)

ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  slug = EXCLUDED.slug,
  description = EXCLUDED.description,
  short_description = EXCLUDED.short_description,
  full_description = EXCLUDED.full_description,
  image = EXCLUDED.image,
  image_url = EXCLUDED.image_url,
  features = EXCLUDED.features,
  items = EXCLUDED.items,
  sort_order = EXCLUDED.sort_order,
  display_order = EXCLUDED.display_order,
  published = EXCLUDED.published;


-- ============================================================
-- 5. TESTIMONIALS
-- ============================================================

INSERT INTO public.testimonials (
  id,
  client_name,
  wedding_event,
  location,
  rating,
  review,
  review_text,
  photo_url,
  featured,
  published
)
VALUES

(
  '40000000-0000-0000-0000-000000000001',
  'Ananya & Kabir',
  'Gujarati Royal Wedding, The Ummed Ahmedabad',
  'Ahmedabad, Gujarat',
  5,
  'Play The Story was the single best decision we made for our wedding. They were never intrusive, yet they caught every unspoken tear, my grandfather’s proud smile, and our candid madness on the dance floor. When we received our wedding film, the entire family cried all over again. Pure artistic mastery!',
  'Play The Story was the single best decision we made for our wedding. They were never intrusive, yet they caught every unspoken tear, my grandfather’s proud smile, and our candid madness on the dance floor. When we received our wedding film, the entire family cried all over again. Pure artistic mastery!',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400&auto=format&fit=crop',
  true,
  true
),

(
  '40000000-0000-0000-0000-000000000002',
  'Radhika & Dev',
  'Destination Wedding, Jagmandir Island Udaipur',
  'Udaipur, Rajasthan',
  5,
  'The cinematic quality of their work is unparalleled. They don’t give you typical robotic wedding footage; they created a true movie where we were the stars. The colors, music, and emotional pacing felt like high-end cinema. Highly recommended for couples seeking timeless elegance.',
  'The cinematic quality of their work is unparalleled. They don’t give you typical robotic wedding footage; they created a true movie where we were the stars. The colors, music, and emotional pacing felt like high-end cinema. Highly recommended for couples seeking timeless elegance.',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop',
  true,
  true
),

(
  '40000000-0000-0000-0000-000000000003',
  'Meera & Arjun',
  'Pre-Wedding & Wedding, Ahmedabad',
  'Ahmedabad, Gujarat',
  5,
  'From the initial consultation to receiving our heirloom photo album, the Play The Story team exhibited supreme professionalism and warmth. They made us feel so comfortable in front of the camera, and the results are breathtaking. Every photograph looks like a magazine cover!',
  'From the initial consultation to receiving our heirloom photo album, the Play The Story team exhibited supreme professionalism and warmth. They made us feel so comfortable in front of the camera, and the results are breathtaking. Every photograph looks like a magazine cover!',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400&auto=format&fit=crop',
  true,
  true
),

(
  '40000000-0000-0000-0000-000000000004',
  'Tanvi & Siddharth',
  'Engagement Soiree, Gulmohar Greens',
  'Ahmedabad, Gujarat',
  5,
  'What stood out most was their attention to detail. They noticed little moments between our parents that we had missed in the chaos. Looking through the gallery transported us right back into the magic of that night. Thank you for preserving our story so lovingly!',
  'What stood out most was their attention to detail. They noticed little moments between our parents that we had missed in the chaos. Looking through the gallery transported us right back into the magic of that night. Thank you for preserving our story so lovingly!',
  'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=400&auto=format&fit=crop',
  true,
  true
)

ON CONFLICT (id) DO UPDATE SET
  client_name = EXCLUDED.client_name,
  wedding_event = EXCLUDED.wedding_event,
  location = EXCLUDED.location,
  rating = EXCLUDED.rating,
  review = EXCLUDED.review,
  review_text = EXCLUDED.review_text,
  photo_url = EXCLUDED.photo_url,
  featured = EXCLUDED.featured,
  published = EXCLUDED.published;


-- ============================================================
-- COMMIT
-- ============================================================

COMMIT;


-- ============================================================
-- VERIFICATION
-- ============================================================

SELECT
  COUNT(*) AS total_stories,
  COUNT(*) FILTER (WHERE published = true) AS published_stories
FROM public.wedding_stories;

SELECT COUNT(*) AS total_gallery_images
FROM public.wedding_images;

SELECT
  COUNT(*) AS total_films,
  COUNT(*) FILTER (WHERE published = true) AS published_films
FROM public.films;

SELECT
  COUNT(*) AS total_services,
  COUNT(*) FILTER (WHERE published = true) AS published_services
FROM public.services;

SELECT
  COUNT(*) AS total_testimonials,
  COUNT(*) FILTER (WHERE published = true) AS published_testimonials
FROM public.testimonials;