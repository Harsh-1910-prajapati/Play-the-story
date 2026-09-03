import { WeddingStory, Film, ServiceItem, Testimonial, Enquiry } from "@/types";

export const initialStories: WeddingStory[] = [
  {
    id: "story-1",
    title: "A Royal Heritage Union in the Heart of Gujarat",
    slug: "ananya-and-kabir-ahmedabad",
    couple_names: "Ananya & Kabir",
    wedding_date: "2025-12-14",
    location: "The Ummed, Ahmedabad",
    category: "Weddings",
    wedding_type: "Gujarati Royal Wedding",
    featured: true,
    cover_image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1920&auto=format&fit=crop",
    description:
      "Set against the majestic heritage courtyards of Ahmedabad, Ananya and Kabir's wedding was a harmonious celebration of timeless Gujarati traditions, intimate familial glances, and vibrant dusk-lit phere. From the emotional Vidaai under candlelit lanterns to the high-energy Sangeet reverberating with Garba beats, every moment unfolded like poetry.",
    film_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    gallery: [
      {
        id: "img-1-1",
        story_id: "story-1",
        image_url:
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop",
        caption: "The radiant bride bathed in golden hour sunshine",
        display_order: 1,
      },
      {
        id: "img-1-2",
        story_id: "story-1",
        image_url:
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
        caption: "The royal entrance beneath floral canopies",
        display_order: 2,
      },
      {
        id: "img-1-3",
        story_id: "story-1",
        image_url:
          "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop",
        caption: "An intimate promise shared before the holy fire",
        display_order: 3,
      },
      {
        id: "img-1-4",
        story_id: "story-1",
        image_url:
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1600&auto=format&fit=crop",
        caption: "Delicate bridal jewelry and handcrafted silk details",
        display_order: 4,
      },
      {
        id: "img-1-5",
        story_id: "story-1",
        image_url:
          "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1600&auto=format&fit=crop",
        caption: "Euphoric celebration during the evening pheras",
        display_order: 5,
      },
      {
        id: "img-1-6",
        story_id: "story-1",
        image_url:
          "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1600&auto=format&fit=crop",
        caption: "The joyous couple stepping into their new beginning",
        display_order: 6,
      },
    ],
  },
  {
    id: "story-2",
    title: "Lakeside Romance & Whispering Palaces",
    slug: "radhika-and-dev-udaipur",
    couple_names: "Radhika & Dev",
    wedding_date: "2025-11-20",
    location: "Jagmandir Island Palace, Udaipur",
    category: "Weddings",
    wedding_type: "Destination Palace Wedding",
    featured: true,
    cover_image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop",
    description:
      "Surrounded by the serene waters of Lake Pichola, Radhika and Dev's destination wedding was pure grandeur. We captured the silent morning anticipation, the gentle ripples of boats ferrying loved ones, and the firelit palace glowing under a velvet starry sky.",
    film_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    gallery: [
      {
        id: "img-2-1",
        story_id: "story-2",
        image_url:
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
        caption: "The majestic lakefront mandap",
        display_order: 1,
      },
      {
        id: "img-2-2",
        story_id: "story-2",
        image_url:
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1600&auto=format&fit=crop",
        caption: "Subtle emotion captured in black & white",
        display_order: 2,
      },
      {
        id: "img-2-3",
        story_id: "story-2",
        image_url:
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop",
        caption: "Sunset portraits on the marble balcony",
        display_order: 3,
      },
    ],
  },
  {
    id: "story-3",
    title: "Golden Hour Whispers at the Salt Deserts",
    slug: "meera-and-arjun-kutch",
    couple_names: "Meera & Arjun",
    wedding_date: "2025-10-18",
    location: "White Desert, Kutch, Gujarat",
    category: "Pre-Weddings",
    wedding_type: "Editorial Pre-Wedding",
    featured: true,
    cover_image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1920&auto=format&fit=crop",
    description:
      "A cinematic exploration of love across the vast, pristine white horizons of the Great Rann of Kutch. Dressed in flowing couture against the stark, minimalist landscape, Meera and Arjun created visual magic as dusk painted the sky in shades of lilac and gold.",
    film_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    gallery: [
      {
        id: "img-3-1",
        story_id: "story-3",
        image_url:
          "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop",
        caption: "Endless horizons and timeless connection",
        display_order: 1,
      },
      {
        id: "img-3-2",
        story_id: "story-3",
        image_url:
          "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1600&auto=format&fit=crop",
        caption: "Sunset silhouette against the salt flats",
        display_order: 2,
      },
    ],
  },
  {
    id: "story-4",
    title: "Under a Canopy of Lights & Jasmine",
    slug: "tanvi-and-siddharth-ahmedabad",
    couple_names: "Tanvi & Siddharth",
    wedding_date: "2025-09-25",
    location: "Gulmohar Greens, Ahmedabad",
    category: "Engagements",
    wedding_type: "Lawn Engagement Soiree",
    featured: false,
    cover_image:
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1920&auto=format&fit=crop",
    description:
      "An open-air evening soiree surrounded by towering emerald palms and thousands of warm fairy lights. Tanvi and Siddharth celebrated their engagement with acoustic music, champagne toasts, and unscripted laughter with their closest childhood companions.",
    gallery: [
      {
        id: "img-4-1",
        story_id: "story-4",
        image_url:
          "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1600&auto=format&fit=crop",
        caption: "Ring exchange under the floral arch",
        display_order: 1,
      },
    ],
  },
  {
    id: "story-5",
    title: "Symphony of Glitz, Velvet & Jazz",
    slug: "ishani-and-varun-belvedere",
    couple_names: "Ishani & Varun",
    wedding_date: "2025-08-12",
    location: "Belvedere Golf & Country Club, Ahmedabad",
    category: "Receptions",
    wedding_type: "Grand Black-Tie Reception",
    featured: false,
    cover_image:
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1920&auto=format&fit=crop",
    description:
      "A night of unmatched elegance. Contemporary black-tie meets traditional grandeur, framed by custom architectural light installations and timeless candid portraits that celebrate pure joy.",
    gallery: [
      {
        id: "img-5-1",
        story_id: "story-5",
        image_url:
          "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1600&auto=format&fit=crop",
        caption: "First dance under the starlit ceiling",
        display_order: 1,
      },
    ],
  },
  {
    id: "story-6",
    title: "The Colors of Sangeet & Folk Celebrations",
    slug: "priya-and-harsh-vadodara",
    couple_names: "Priya & Harsh",
    wedding_date: "2025-07-04",
    location: "Laxmi Vilas Palace Grounds, Vadodara",
    category: "Events",
    wedding_type: "Grand Sangeet & Mehendi",
    featured: false,
    cover_image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1920&auto=format&fit=crop",
    description:
      "Marigold blooms, intricate mehendi motifs, and non-stop traditional music. Our lens caught the unfiltered energy of family members dancing together, genuine tears of joy, and every fleeting glance.",
    gallery: [
      {
        id: "img-6-1",
        story_id: "story-6",
        image_url:
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1600&auto=format&fit=crop",
        caption: "Dynamic rhythm of the Sangeet stage",
        display_order: 1,
      },
    ],
  },
];

export const initialFilms: Film[] = [
  {
    id: "film-1",
    title: "Eternal Echoes — The Royal Celebration",
    couple_names: "Ananya & Kabir",
    location: "Ahmedabad, Gujarat",
    duration: "04:45",
    thumbnail_url:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Wedding Teaser",
    featured: true,
    display_order: 1,
  },
  {
    id: "film-2",
    title: "Waters of Pichola — A Love Poem",
    couple_names: "Radhika & Dev",
    location: "Udaipur, Rajasthan",
    duration: "06:12",
    thumbnail_url:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Feature Film",
    featured: true,
    display_order: 2,
  },
  {
    id: "film-3",
    title: "Whispers of the White Dunes",
    couple_names: "Meera & Arjun",
    location: "Rann of Kutch, Gujarat",
    duration: "03:30",
    thumbnail_url:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Pre-Wedding Film",
    featured: true,
    display_order: 3,
  },
  {
    id: "film-4",
    title: "Starlight & Promises",
    couple_names: "Tanvi & Siddharth",
    location: "Gulmohar Greens, Ahmedabad",
    duration: "04:10",
    thumbnail_url:
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop",
    video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Engagement Highlight",
    featured: false,
    display_order: 4,
  },
];

export const initialServices: ServiceItem[] = [
  {
    id: "service-1",
    title: "Wedding Photography",
    slug: "wedding-photography",
    short_description:
      "Candid, traditional and editorial wedding photography that captures raw emotion, intimate rituals, and timeless grandeur.",
    full_description:
      "We believe that wedding photography is an heirloom art. Our team blends non-intrusive photojournalism with refined editorial portraiture. We document every authentic tear, sudden burst of laughter, tender touch, and the majestic scale of your wedding ceremonies across Gujarat and destination venues worldwide.",
    image_url:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Dedicated lead candid and editorial photographers",
      "Traditional family and ceremony documentation",
      "Signature fine-art color grading and skin-tone perfection",
      "Private high-resolution online gallery with download access",
      "Bespoke handcrafted Italian leather wedding album",
    ],
    display_order: 1,
  },
  {
    id: "service-2",
    title: "Cinematic Wedding Films",
    slug: "cinematic-wedding-films",
    short_description:
      "Emotion-driven cinematic wedding films crafted with 4K cinema cameras, authentic sound design, and narrative storytelling.",
    full_description:
      "Our wedding films are conceived as genuine cinematic documentaries. We record original vows, parents' heartfelt speeches, ambient festival acoustics, and score each film with customized orchestral and contemporary sound design that evokes goosebumps every time you watch it.",
    image_url:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Ultra HD 4K cinema cameras with prime cinema lenses",
      "Cinematic Teaser (60–90 seconds) for social sharing",
      "Signature Highlight Film (4–7 minutes) with custom narrative score",
      "Full documentary multi-camera cut of key rituals and performances",
      "Professional audio recording of vows and speeches",
    ],
    display_order: 2,
  },
  {
    id: "service-3",
    title: "Pre-Wedding Photography",
    slug: "pre-wedding-photography",
    short_description:
      "Creative and personalized pre-wedding stories that reflect your unique personalities and personal romance.",
    full_description:
      "Before the whirlwind of wedding festivities begins, we create a relaxed, intimate sanctuary for you both. Whether against the architectural stepwells of Gujarat, the golden desert dunes of Rajasthan, or an urban cafe where you first met, we craft stylized, deeply personal photographs.",
    image_url:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Concept development, wardrobe styling, and moodboard direction",
      "Full-day destination or multi-location shoot experience",
      "Drone aerial perspective photography and mini-film clips",
      "Curated set of 40+ retouched signature portraits",
      "Save-the-date digital invite design included",
    ],
    display_order: 3,
  },
  {
    id: "service-4",
    title: "Event Coverage",
    slug: "event-coverage",
    short_description:
      "Professional coverage for engagement, reception, Haldi, Sangeet, Mehendi and cultural celebrations.",
    full_description:
      "Every single ritual has its own heartbeat. Our comprehensive event coverage ensures that no family celebration is treated as secondary. We deploy specialized teams to cover multiple events with tireless energy, capturing the zest of Haldi, the rhythm of Sangeet, and the sophistication of Receptions.",
    image_url:
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Multi-crew setup tailored to event scale and guest count",
      "Live slideshow displays for reception guests",
      "Fast 48-hour preview delivery for immediate social sharing",
      "Unrestricted coverage hours for cultural ceremonies",
      "Comprehensive archival storage backup for 5 years",
    ],
    display_order: 4,
  },
  {
    id: "service-5",
    title: "Professional Video Editing",
    slug: "professional-video-editing",
    short_description:
      "High-quality cinematic editing, bespoke color grading, and narrative storytelling for modern cinema standards.",
    full_description:
      "The magic of cinema is born in the edit suite. Our post-production team specializes in meticulous pacing, Hollywood-grade DaVinci Resolve color grading tailored to vibrant Indian silks and skin tones, and rich audio design that breathes living rhythm into your wedding footage.",
    image_url:
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Hollywood-standard DaVinci Resolve color grading",
      "Bespoke sound mastering, noise suppression, and spatial audio",
      "Re-edits and customizable music selection options",
      "Optimized vertical cuts for Instagram Reels & 4K master deliverables",
      "Cloud-hosted high-speed streaming link for seamless family viewing",
    ],
    display_order: 5,
  },
];

export const initialTestimonials: Testimonial[] = [
  {
    id: "test-1",
    client_name: "Ananya & Kabir",
    wedding_event: "Gujarati Royal Wedding, The Ummed Ahmedabad",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    review_text:
      "Play The Story was the single best decision we made for our wedding. They were never intrusive, yet they caught every unspoken tear, my grandfather’s proud smile, and our candid madness on the dance floor. When we received our wedding film, the entire family cried all over again. Pure artistic mastery!",
    photo_url:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "test-2",
    client_name: "Radhika & Dev",
    wedding_event: "Destination Wedding, Jagmandir Island Udaipur",
    location: "Udaipur, Rajasthan",
    rating: 5,
    review_text:
      "The cinematic quality of their work is unparalleled. They don't give you typical robotic wedding footage; they created a true movie where we were the stars. The colors, music, and emotional pacing felt like high-end cinema. Highly recommended for couples seeking timeless elegance.",
    photo_url:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "test-3",
    client_name: "Meera & Arjun",
    wedding_event: "Pre-Wedding & Wedding, Ahmedabad",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    review_text:
      "From the initial consultation to receiving our heirloom photo album, the Play The Story team exhibited supreme professionalism and warmth. They made us feel so comfortable in front of the camera, and the results are breathtaking. Every photograph looks like a magazine cover!",
    photo_url:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "test-4",
    client_name: "Tanvi & Siddharth",
    wedding_event: "Engagement Soiree, Gulmohar Greens",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    review_text:
      "What stood out most was their attention to detail. They noticed little moments between our parents that we had missed in the chaos. Looking through the gallery transported us right back into the magic of that night. Thank you for preserving our story so lovingly!",
    photo_url:
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=400&auto=format&fit=crop",
    featured: true,
  },
];

export const initialEnquiries: Enquiry[] = [
  {
    id: "enq-1",
    name: "Pooja Shah",
    partner_name: "Ronak Patel",
    email: "pooja.shah@example.com",
    phone: "+91 98251 12345",
    wedding_date: "2026-11-28",
    event_type: "Full Wedding & Reception (3 Days)",
    location: "Gulmohar Greens, Ahmedabad",
    estimated_budget: "₹3,50,000 – ₹5,000,000",
    message:
      "Hello team, we are planning our 3-day wedding in Ahmedabad and loved your cinematic films. Looking for both photography and 4K film coverage for around 600 guests.",
    status: "New",
    created_at: "2026-03-01T10:30:00Z",
  },
  {
    id: "enq-2",
    name: "Karan Mehta",
    partner_name: "Ishita Desai",
    email: "karan.mehta@example.com",
    phone: "+91 98980 67890",
    wedding_date: "2026-12-15",
    event_type: "Destination Wedding (2 Days)",
    location: "Udaipur, Rajasthan",
    estimated_budget: "₹5,00,000+",
    message:
      "We want an editorial-style photographer and cinematographer team to travel with us to Udaipur. Please share your availability and quote.",
    status: "Contacted",
    created_at: "2026-02-28T15:45:00Z",
  },
];
