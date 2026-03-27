// src/config/tenants.js
import backery from "../assets/backery.jpg";
import sourdough from "../assets/sourdough.jpg";
import croissant from "../assets/croissant.jpg";
import customcake from "../assets/customcake.jpg";

import webBusiness from "../assets/webBusiness.jpg";
import starterPackage from "../assets/starterPackage.jpg";
import salesFunnel from "../assets/salesFunnel.jpg";
import webCare from "../assets/webCare.jpg";

import familyCare from "../assets/familyCare.jpg";
import healthScreen from "../assets/healthScreen.jpg";
import consultation from "../assets/consultation.jpg";
import mealPlan from "../assets/mealPlan.jpg";

import dreamHouse from "../assets/dreamHouse.jpg";
import twoBedroom from "../assets/twoBedroom.jpg";
import gardenHome from "../assets/gardenHome.jpg";
import studioCondo from "../assets/studioCondo.jpg";

import delivery1 from "../assets/delivery1.jpg";
import delivery2 from "../assets/delivery2.jpg";
import delivery3 from "../assets/delivery3.jpg";
import delivery4 from "../assets/delivery4.jpg";

export const tenants = {
  "zella-bakery": {
    id: "zella-bakery",
    name: "Zella Bakery",
    group: "Food",
    logoText: "Zella Bakery",
    brandColor: "#E27D60",
    accentColor: "#85DCB0",
    textColor: "#1F2933",
    backgroundColor: "#FFF9F5",
    hero: {
      heading: "Freshly Baked, Every Morning",
      subheading:
        "Artisan breads, pastries, and cakes crafted with love in your neighborhood.",
      ctaLabel: "View Today’s Specials",
      imageUrl: backery,
    },
    about: {
      title: "About Zella Bakery",
      body: "We are a family-owned bakery specializing in sourdough breads, croissants, and custom cakes. Everything is baked fresh daily using locally sourced ingredients.",
    },
    products: [
      {
        id: "sourdough-loaf",
        name: "Rustic Sourdough Loaf",
        priceLabel: "€4.90",
        category: "Bread",
        badge: "Bestseller",
        description:
          "Slow-fermented for 24 hours to develop a rich flavor and airy crumb.",
        imageUrl: sourdough,
        tags: ["Vegan", "No added sugar"],
      },
      {
        id: "almond-croissant",
        name: "Almond Croissant",
        priceLabel: "€2.80",
        category: "Pastry",
        badge: "New",
        description:
          "Flaky, buttery croissant filled with almond cream and topped with sliced almonds.",
        imageUrl: croissant,
        tags: ["Contains nuts"],
      },
      {
        id: "custom-cake",
        name: "Custom Celebration Cake",
        priceLabel: "From €45",
        category: "Cakes",
        badge: "Made to order",
        description:
          "Perfect for birthdays, weddings, and special events. Choose your flavors and design.",
        imageUrl: customcake,
        tags: ["Pre-order 48h"],
      },
    ],
    contact: {
      address: "Flinger Str. 123, 40213 Düsseldorf",
      phone: "+49 211 123456",
      email: "hello@zellabakery.de",
      website: "https://zellabakery.de",
      openingHours: "Mon–Sat: 7:00 – 18:00",
    },
    social: {
      instagram: "https://instagram.com/zellabakery",
      facebook: "https://facebook.com/zellabakery",
    },
  },

  "zee-digital": {
    id: "zee-digital",
    name: "Zee Digital Studio",
    group: "Tech",
    logoText: "Zee Digital",
    brandColor: "#2563EB",
    accentColor: "#10B981",
    textColor: "#0B1120",
    backgroundColor: "#F9FAFB",
    hero: {
      heading: "Websites That Convert Visitors Into Customers",
      subheading:
        "We design and build high-converting websites for coaches, consultants, and local businesses.",
      ctaLabel: "Request a Free Strategy Call",
      imageUrl: webBusiness,
    },
    about: {
      title: "Why Zee Digital",
      body: "We combine conversion-focused design with modern technologies like React and Next.js to build fast, responsive websites tailored to your business goals.",
    },
    products: [
      {
        id: "starter-site",
        name: "Starter Website Package",
        priceLabel: "€950",
        category: "Services",
        badge: "Popular",
        description:
          "A 3-page website to get your business online fast, including home, services, and contact.",
        imageUrl: starterPackage,
        tags: ["One-time fee", "2-week delivery"],
      },
      {
        id: "sales-funnel",
        name: "Sales Funnel Landing Page",
        priceLabel: "€650",
        category: "Services",
        badge: "High ROI",
        description:
          "A conversion-optimized landing page with integrated lead capture and email marketing.",
        imageUrl: salesFunnel,
        tags: ["Copywriting included"],
      },
      {
        id: "maintenance-plan",
        name: "Website Care & Maintenance",
        priceLabel: "€79 / month",
        category: "Subscriptions",
        badge: "Ongoing",
        description:
          "We take care of updates, backups, and security so you can focus on your business.",
        imageUrl: webCare,
        tags: ["Cancel anytime"],
      },
    ],
    contact: {
      address: "Media Harbor, Düsseldorf",
      phone: "+49 211 987654",
      email: "team@zeedigital.studio",
      website: "https://zeedigital.studio",
      openingHours: "Mon–Fri: 9:00 – 17:30",
    },
    social: {
      linkedin: "https://linkedin.com/company/zeedigital",
    },
  },
  "harmony-clinic": {
    id: "harmony-clinic",
    name: "Harmony Clinic",
    logoText: "HC",
    group: "Health Care",
    brandColor: "#10B981",
    accentColor: "#34D399",
    textColor: "#0F172A",
    backgroundColor: "#F0FDF4",
    hero: {
      heading: "Healthcare You Can Trust",
      subheading:
        "Comprehensive family care with integrative therapies and modern medicine for a healthier you.",
      ctaLabel: "Book an Appointment",
      imageUrl: familyCare,
    },
    about: {
      title: "About Harmony Clinic",
      body: "We provide personalized healthcare services combining traditional medicine with holistic therapies. Our team of experienced doctors and specialists focus on preventive care, chronic disease management, and wellness programs tailored to your needs.",
    },
    products: [
      {
        id: "annual-checkup",
        name: "Annual Wellness Checkup",
        priceLabel: "€120",
        category: "Preventive Care",
        badge: "Popular",
        description:
          "Comprehensive health screening including blood work, vital signs, and personalized health assessment.",
        imageUrl: healthScreen,
        tags: ["30 min", "Lab included"],
      },
      {
        id: "telehealth-consult",
        name: "Telehealth Consultation",
        priceLabel: "€65",
        category: "Digital Health",
        badge: "New",
        description:
          "Convenient online consultations with our doctors from the comfort of your home.",
        imageUrl: consultation,
        tags: ["Video call", "24h availability"],
      },
      {
        id: "nutrition-plan",
        name: "Personalized Nutrition Plan",
        priceLabel: "€180",
        category: "Wellness",
        badge: "Made to order",
        description:
          "Custom meal plans and nutrition coaching based on your health goals and lifestyle.",
        imageUrl: mealPlan,
        tags: ["Follow-up included", "Dietitian certified"],
      },
    ],
    contact: {
      address: "Kaiserstraße 45, 40212 Düsseldorf",
      phone: "+49 211 456789",
      email: "info@harmony-clinic.de",
      website: "https://harmony-clinic.de",
      openingHours: "Mon–Fri: 8:00 – 18:00, Sat: 9:00 – 13:00",
    },
    social: {
      instagram: "https://instagram.com/harmony.clinic",
      facebook: "https://facebook.com/harmonyclinic",
    },
  },
  "urban-properties": {
    id: "urban-properties",
    name: "Urban Properties",
    logoText: "UP",
    group: "Real Estate",
    brandColor: "#1E40AF",
    accentColor: "#3B82F6",
    textColor: "#1E293B",
    backgroundColor: "#F8FAFC",
    hero: {
      heading: "Your Dream Home Awaits",
      subheading:
        "Expert real estate services for buying, selling, and renting in prime Düsseldorf locations.",
      ctaLabel: "View Current Listings",
      imageUrl: dreamHouse,
    },
    about: {
      title: "About Urban Properties",
      body: "With over 10 years of experience in the Düsseldorf real estate market, we specialize in premium apartments, modern houses, and investment properties. Our team provides personalized service from initial consultation to closing.",
    },
    products: [
      {
        id: "luxury-apartment",
        name: "Luxury 2BR Apartment",
        priceLabel: "€1,850 / month",
        category: "Rentals",
        badge: "Available now",
        description:
          "Modern 2-bedroom apartment in Media Harbor with balcony, gym access, and underground parking.",
        imageUrl: twoBedroom,
        tags: ["Furnished", "Pets OK"],
      },
      {
        id: "family-house",
        name: "4BR Family House",
        priceLabel: "€850,000",
        category: "For Sale",
        badge: "Reduced",
        description:
          "Spacious family home in Oberkassel with garden, garage, and excellent school district.",
        imageUrl: gardenHome,
        tags: ["Energy efficient", "Ready to move"],
      },
      {
        id: "investment-condo",
        name: "Investment Condo",
        priceLabel: "€320,000",
        category: "Investment",
        badge: "High yield",
        description:
          "Studio condo in city center with 5.2% annual rental yield and strong appreciation potential.",
        imageUrl: studioCondo,
        tags: ["Rental ready", "City center"],
      },
    ],
    contact: {
      address: "Berger Str. 78, 40213 Düsseldorf",
      phone: "+49 211 789012",
      email: "hello@urban-properties.de",
      website: "https://urban-properties.de",
      openingHours: "Mon–Sat: 9:00 – 18:00",
    },
    social: {
      linkedin: "https://linkedin.com/company/urban-properties",
      instagram: "https://instagram.com/urbanproperties.de",
    },
  },
  "swift-movers": {
    id: "swift-movers",
    name: "Swift Movers",
    logoText: "SM",
    group: "Transportation",
    brandColor: "#EA580C",
    accentColor: "#F97316",
    textColor: "#1F2937",
    backgroundColor: "#FEF3C7",
    hero: {
      heading: "Move Fast, Move Smart",
      subheading:
        "Reliable transportation and relocation services across Germany and Europe. Get a free quote today.",
      ctaLabel: "Get Quote",
      imageUrl: delivery1,
    },
    about: {
      title: "About Swift Movers",
      body: "We provide fast, reliable moving and transportation services with a fleet of modern vehicles and experienced drivers. From small apartment moves to complete office relocations, we handle it all with care and efficiency.",
    },
    products: [
      {
        id: "apartment-move",
        name: "Apartment Moving Service",
        priceLabel: "From €299",
        category: "Residential",
        badge: "Most popular",
        description:
          "Complete apartment relocation including packing, transport, and unpacking assistance.",
        imageUrl: delivery2,
        tags: ["Packing included", "2 movers"],
      },
      {
        id: "office-relocation",
        name: "Office Relocation",
        priceLabel: "From €1,200",
        category: "Commercial",
        badge: "Corporate",
        description:
          "Professional office moving with minimal downtime, IT setup, and furniture assembly.",
        imageUrl: delivery3,
        tags: ["After-hours", "IT certified"],
      },
      {
        id: "europe-shipping",
        name: "Europe Shipping",
        priceLabel: "From €450",
        category: "International",
        badge: "Express",
        description:
          "Door-to-door delivery across Europe with real-time tracking and customs assistance.",
        imageUrl: delivery4,
        tags: ["Tracking", "Insurance included"],
      },
    ],
    contact: {
      address: "Immermannstraße 22, 40210 Düsseldorf",
      phone: "+49 211 345678",
      email: "info@swift-movers.de",
      website: "https://swift-movers.de",
      openingHours: "Mon–Sat: 7:00 – 20:00",
    },
    social: {
      facebook: "https://facebook.com/swiftmoversde",
      instagram: "https://instagram.com/swiftmovers_de",
    },
  },
};

export const defaultTenantId = "zella-bakery";

export const tenantGroups = {
  Food: "Food",
  Tech: "Tech",
  "Health Care": "Health Care",
  "Real Estate": "Real Estate",
  Transportation: "Transportation",
};
