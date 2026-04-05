export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Iron Nation Gym",
    legalName: "IRON NATION GYM",
    tagline: "Forge Your Strongest Self.",
    description:
      "Iron Nation Gym is a hardcore training facility in Harare built for serious lifters and dedicated athletes. Raw iron, heavy plates, and a no-excuses culture that produces real results.",
    phone: "+263 71 381 5329",
    phoneRaw: "+263713815329",
    whatsappNumber: "263713815329",
    email: "train@ironnationgym.co.zw",
    address: "6137 Mango Dr, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.9,
    ratingRounded: 5,
    reviewCount: 8,
    established: "2018",
    yearsExperience: "6+",
    projectsCompleted: "1,500+",
    employees: "8+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "iron-nation-gym-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Iron",
    logoLine2: "Nation Gym",
  },

  hero: {
    badge: "Harare's Hardcore Training Facility",
    titleParts: [
      { text: "FORGE YOUR " },
      { text: "STRONGEST", highlight: true },
      { text: " SELF." },
    ],
    subtitle:
      "Heavy iron, serious lifters, and a no-excuses culture. Iron Nation Gym is where Harare's strongest are built.",
    ctaPrimary: "Join the Nation",
    ctaSecondary: "Tour the Gym",
    trustBadge: "1,500+ Athletes Forged",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85", alt: "Iron Nation Gym professional image 1" },
      { url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=85", alt: "Iron Nation Gym professional image 2" },
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85", alt: "Iron Nation Gym showcase" },
    ],
  },

  stats: [
    { number: "1500+", label: "Members Strong" },
    { number: "6+", label: "Years of Iron" },
    { number: "10+", label: "Competition Wins" },
    { number: "4.9", label: "Google Rating" },
  ],

  servicesPreview: [
    {
      title: "Powerlifting Zone",
      desc: "Competition-spec squat racks, bench press stations, deadlift platforms, and calibrated plates for serious strength.",
      icon: "Trophy",
    },
    {
      title: "Bodybuilding Area",
      desc: "Extensive machine selection, cable stations, and a dumbbell rack from 2kg to 60kg for sculpting every muscle.",
      icon: "Heart",
    },
    {
      title: "Functional Training",
      desc: "Battle ropes, sleds, kettlebells, and plyometric boxes for explosive athletic performance training.",
      icon: "Star",
    },
    {
      title: "Personal Coaching",
      desc: "Competition-experienced coaches who have stood on stage and walked the walk. Real knowledge, real results.",
      icon: "UsersThree",
    },
    {
      title: "Competition Prep",
      desc: "Dedicated contest preparation programming covering training, posing, nutrition, and stage presentation.",
      icon: "Lightbulb",
    },
    {
      title: "Supplement Shop",
      desc: "On-site supplement store with proteins, pre-workouts, creatine, and recovery products from trusted brands.",
      icon: "Buildings",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "Powerlifting Zone",
        slug: "powerlifting-zone",
        desc: "Competition-spec squat racks, bench press stations, deadlift platforms, and calibrated plates for serious strength.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      },
      {
        title: "Bodybuilding Area",
        slug: "bodybuilding-area",
        desc: "Extensive machine selection, cable stations, and a dumbbell rack from 2kg to 60kg for sculpting every muscle.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      },
      {
        title: "Functional Training",
        slug: "functional-training",
        desc: "Battle ropes, sleds, kettlebells, and plyometric boxes for explosive athletic performance training.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      },
      {
        title: "Personal Coaching",
        slug: "personal-coaching",
        desc: "Competition-experienced coaches who have stood on stage and walked the walk. Real knowledge, real results.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      },
      {
        title: "Competition Prep",
        slug: "competition-prep",
        desc: "Dedicated contest preparation programming covering training, posing, nutrition, and stage presentation.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      },
      {
        title: "Supplement Shop",
        slug: "supplement-shop",
        desc: "On-site supplement store with proteins, pre-workouts, creatine, and recovery products from trusted brands.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial Iron",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in powerlifting zone.",
        client: "Commercial Client",
        services: ["Powerlifting Zone", "Bodybuilding Area"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential Iron",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in bodybuilding area.",
        client: "Residential Client",
        services: ["Bodybuilding Area", "Functional Training"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial Iron",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in functional training.",
        client: "Industrial Client",
        services: ["Functional Training", "Personal Coaching"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional Iron",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in personal coaching.",
        client: "Institutional Client",
        services: ["Personal Coaching", "Competition Prep"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial Iron",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in competition prep.",
        client: "Commercial Client",
        services: ["Competition Prep", "Supplement Shop"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential Iron",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in supplement shop.",
        client: "Residential Client",
        services: ["Supplement Shop", "Powerlifting Zone"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "Iron Nation is the only gym in Harare where I can train properly. Competition-grade equipment, knowledgeable members, and no nonsense. Pure iron.",
      name: "Tendai Gumbo",
      role: "National Powerlifting Champion",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "I joined Iron Nation as a beginner and the community welcomed me from day one. Three years later I competed in my first bodybuilding show.",
      name: "Farai Mukwashi",
      role: "First-Time Competitor",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "The coaching here is different. My coach competed nationally and the programming reflects that experience. My strength has doubled.",
      name: "Nyasha Chirengwa",
      role: "Powerlifter, 93kg Class",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "Iron Nation has everything a serious lifter needs. Heavy dumbbells, proper platforms, and a culture that respects hard work.",
      name: "Rumbidzai Dube",
      role: "Fitness Competitor",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "Iron Nation Gym was founded by lifters, for lifters. Frustrated with commercial gyms that prioritize aesthetics over equipment, we built a facility where heavy weights, chalk, and dedication are not just tolerated -- they are celebrated.",
      "Our Mango Drive facility has produced multiple national-level competitors and transformed over 1,500 members. The Iron Nation community is tight-knit, supportive, and relentlessly driven.",
    ],
    values: [
      { title: "Serious Equipment", desc: "Competition-spec bars, calibrated plates, and machines built for heavy use. No flimsy commercial gear." },
      { title: "Lifter Culture", desc: "Chalk is welcome, deadlifts are encouraged, and personal records are celebrated. This is a gym, not a spa." },
      { title: "Expert Coaches", desc: "Coaches who have competed and won. They understand the journey because they have lived it." },
      { title: "Community Bond", desc: "A brotherhood and sisterhood of iron. Members who spot each other, motivate each other, and grow together." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "Iron Nation is the only gym in Harare where I can train properly. Competition-grade equipment, knowledgeable members, and no nonsense. Pure iron.", name: "Tendai Gumbo", role: "National Powerlifting Champion", rating: 5 },
      { text: "I joined Iron Nation as a beginner and the community welcomed me from day one. Three years later I competed in my first bodybuilding show.", name: "Farai Mukwashi", role: "First-Time Competitor", rating: 5 },
      { text: "The coaching here is different. My coach competed nationally and the programming reflects that experience. My strength has doubled.", name: "Nyasha Chirengwa", role: "Powerlifter, 93kg Class", rating: 5 },
      { text: "Iron Nation has everything a serious lifter needs. Heavy dumbbells, proper platforms, and a culture that respects hard work.", name: "Rumbidzai Dube", role: "Fitness Competitor", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "Iron Nation Gym",
        address: "6137 Mango Dr, Harare, Zimbabwe",
        phone: "+263 71 381 5329",
        email: "train@ironnationgym.co.zw",
      },
    ],
  },

  homeCta: {
    title: "JOIN THE NATION",
    subtitle: "Heavy iron, serious coaching, and a community of dedicated athletes. Iron Nation Gym is where strength is forged.",
    ctaPrimary: "Join the Nation",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Iron Nation! I want to join the gym.",
    backgroundImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85",
  },

  footer: {
    description: "Iron Nation Gym is a hardcore training facility in Harare built for serious lifters and dedicated athletes. Raw iron, heavy plates, and a no-excuses c...",
    copyright: "Iron Nation Gym",
  },
};

export default siteData;
