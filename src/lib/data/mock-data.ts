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
  {
    id: "story-7",
    title: "Sculpted in Light — Editorial Studio Series",
    slug: "maya-sen-editorial-portraits",
    couple_names: "Maya Sen",
    wedding_date: "2025-06-15",
    location: "Play The Story Studio, Ahmedabad",
    category: "Portraits",
    wedding_type: "Editorial Fashion Portraiture",
    featured: false,
    cover_image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1920&auto=format&fit=crop",
    description:
      "An exploration of minimalist silhouettes, natural chiaroscuro contrast, and high-fashion editorial styling. Captured using custom continuous tungsten lights in our studio space.",
    gallery: [
      {
        id: "img-7-1",
        story_id: "story-7",
        image_url:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop",
        caption: "Deliberate framing and organic shadow play",
        display_order: 1,
      },
    ],
  },
  {
    id: "story-8",
    title: "Heritage Craft & Contemporary Luxury",
    slug: "atelier-ahmedabad-commercial-campaign",
    couple_names: "Atelier Vayu Brand Film",
    wedding_date: "2025-05-10",
    location: "Heritage Precinct, Ahmedabad",
    category: "Commercial",
    wedding_type: "Luxury Brand Campaign",
    featured: false,
    cover_image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1920&auto=format&fit=crop",
    description:
      "A cinematic visual narrative for a bespoke textile atelier. We followed the artisans from handloom silk weaving at dawn to the final high-fashion runway showcase.",
    film_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    gallery: [
      {
        id: "img-8-1",
        story_id: "story-8",
        image_url:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
        caption: "Craftsmanship in tactile slow motion",
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
    title: "Weddings",
    slug: "weddings",
    short_description:
      "Candid photography, traditional ceremonial documentation, and bespoke cinematic wedding feature films.",
    full_description:
      "We believe that wedding photography is an heirloom art. Our team blends non-intrusive photojournalism with refined editorial portraiture. We document every authentic tear, sudden burst of laughter, tender touch, and the majestic scale of your wedding ceremonies across Gujarat and destination venues worldwide.",
    image_url:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Candid Photography",
      "Traditional Photography",
      "Cinematic Wedding Films",
      "Signature fine-art color grading and skin-tone perfection",
      "Bespoke handcrafted Italian leather wedding album",
    ],
    items: [
      "Candid Photography",
      "Traditional Photography",
      "Cinematic Wedding Films",
    ],
    sort_order: 1,
    display_order: 1,
    published: true,
  },
  {
    id: "service-2",
    title: "Couples",
    slug: "couples",
    short_description:
      "Pre-wedding stories, intimate engagement shoots, and stylized couple portraits before the big day.",
    full_description:
      "Before the whirlwind of wedding festivities begins, we create a relaxed, intimate sanctuary for you both. Whether against the architectural stepwells of Gujarat, the golden desert dunes of Rajasthan, or an urban cafe where you first met, we craft stylized, deeply personal photographs.",
    image_url:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Pre-Wedding Shoots",
      "Engagement Soirees",
      "Couple Portraits",
      "Moodboard direction and wardrobe styling consultation",
      "Drone aerial cinematography & teaser cuts",
    ],
    items: [
      "Pre-Wedding",
      "Engagement",
      "Couple Portraits",
    ],
    sort_order: 2,
    display_order: 2,
    published: true,
  },
  {
    id: "service-3",
    title: "Events",
    slug: "events",
    short_description:
      "High-caliber coverage for corporate summits, cultural galas, social milestones, and brand launches.",
    full_description:
      "Every milestone gathering has its own rhythm and energy. We deploy nimble, discreet multi-camera teams to capture both high-profile keynote stages and spontaneous networking interactions with crisp, modern polish.",
    image_url:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Corporate Conferences & Summits",
      "Social Events & Private Galas",
      "Launches & Celebrations",
      "Rapid turnaround for PR and press releases",
      "Multi-camera live streaming and recap edits",
    ],
    items: [
      "Corporate",
      "Social Events",
      "Launches & Celebrations",
    ],
    sort_order: 3,
    display_order: 3,
    published: true,
  },
  {
    id: "service-4",
    title: "Portraits",
    slug: "portraits",
    short_description:
      "Personal editorial portraits, family legacy sessions, fashion lookbooks, and authentic lifestyle imagery.",
    full_description:
      "A great portrait reveals who you are when nobody is looking. We craft individual, executive, and family portraits with deliberate lighting, natural poses, and magazine-editorial aesthetics.",
    image_url:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Personal & Executive Portraits",
      "Family Legacy Sessions",
      "Fashion Lookbooks & Editorials",
      "Lifestyle & Environmental Portraits",
      "Studio and on-location lighting setups",
    ],
    items: [
      "Personal",
      "Family",
      "Fashion",
      "Lifestyle",
    ],
    sort_order: 4,
    display_order: 4,
    published: true,
  },
  {
    id: "service-5",
    title: "Commercial",
    slug: "commercial",
    short_description:
      "High-impact brand photography, product imagery, visual advertising campaigns, and cinematic business films.",
    full_description:
      "Elevate your brand presence with visuals engineered to convert and captivate. We partner with design-forward brands, hospitality groups, and luxury architecture studios to create striking visual assets.",
    image_url:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Brand & Campaign Photography",
      "Product & E-Commerce Imagery",
      "Architectural & Hospitality Spaces",
      "Cinematic Business & Brand Films",
      "Commercial licensing & multi-format delivery",
    ],
    items: [
      "Brand Photography",
      "Product Photography",
      "Campaigns",
      "Business Films",
    ],
    sort_order: 5,
    display_order: 5,
    published: true,
  },
  {
    id: "service-6",
    title: "Content Creation",
    slug: "content-creation",
    short_description:
      "Scroll-stopping Instagram Reels, high-engagement social media content, and evocative short-form films.",
    full_description:
      "In the modern digital landscape, visual speed matters as much as quality. Our content creators deliver crisp 9:16 vertical video narratives designed for viral engagement without sacrificing aesthetic prestige.",
    image_url:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Dynamic Vertical Instagram Reels & TikToks",
      "Social Media Content Retainers",
      "Cinematic Short Films & Teasers",
      "Trending audio integration and dynamic typography",
      "24–48 hour rapid delivery turnarounds",
    ],
    items: [
      "Reels",
      "Social Media Content",
      "Short Films",
    ],
    sort_order: 6,
    display_order: 6,
    published: true,
  },
  {
    id: "service-7",
    title: "Post Production",
    slug: "post-production",
    short_description:
      "Hollywood-grade DaVinci Resolve color grading, narrative film editing, wedding films, and audio sound design.",
    full_description:
      "The magic of cinema is born in the edit suite. Our post-production team specializes in meticulous pacing, DaVinci Resolve color grading tailored to vibrant Indian silks and skin tones, and rich spatial audio design.",
    image_url:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Video Editing & Master Cuts",
      "Full-Length Wedding Films & Documentaries",
      "Hollywood-Standard DaVinci Resolve Color Grading",
      "Reels & Vertical Micro-Edits",
      "Sound design, dialogue leveling, and noise restoration",
    ],
    items: [
      "Video Editing",
      "Wedding Films",
      "Color Grading",
      "Reels",
    ],
    sort_order: 7,
    display_order: 7,
    published: true,
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
    status: "new",
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
    status: "contacted",
    created_at: "2026-02-28T15:45:00Z",
  },
];
