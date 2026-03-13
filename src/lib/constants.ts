import type { Service, Review, FAQItem } from "@/types";

export const BUSINESS = {
  name: "Baker's Barber Shop",
  tagline: "Premium Barbering in Monmouth County, NJ",
  owner: "Jared Baker",
  phone: "(732) 555-0000", // TODO: Replace with real number
  email: "info@bakersbarbershopnj.com",
  address: {
    street: "123 Main Street", // TODO: Replace with real address
    city: "Freehold", // TODO: Replace with real city
    state: "NJ",
    zip: "07728", // TODO: Replace with real zip
    county: "Monmouth County",
  },
  hours: {
    Monday: "9:00 AM – 6:00 PM",
    Tuesday: "9:00 AM – 6:00 PM",
    Wednesday: "9:00 AM – 6:00 PM",
    Thursday: "9:00 AM – 7:00 PM",
    Friday: "9:00 AM – 7:00 PM",
    Saturday: "8:00 AM – 4:00 PM",
    Sunday: "Closed",
  },
  social: {
    instagram: "https://instagram.com/bakersbarbershop",
    facebook: "",
  },
} as const;

export const SERVICES: Service[] = [
  {
    id: "haircut",
    name: "Haircut",
    price: 40,
    duration: "30 min",
    description:
      "Classic precision haircut tailored to your style. Clean lines, sharp details.",
  },
  {
    id: "kids-cut",
    name: "Kid's Cut",
    price: 25,
    duration: "20 min",
    description:
      "Patient, quality cuts for kids 12 and under. A great experience for young gentlemen.",
  },
  {
    id: "teen-haircut",
    name: "Teen Haircut",
    price: 30,
    duration: "25 min",
    description:
      "Fresh styles for teens 13–17. From classic to trending cuts.",
  },
  {
    id: "haircut-beard",
    name: "Haircut + Beard Trim",
    price: 55,
    duration: "45 min",
    description:
      "Complete haircut and beard grooming package. Look sharp from every angle.",
  },
  {
    id: "beard-trim",
    name: "Beard Trim",
    price: 20,
    duration: "15 min",
    description:
      "Shape, line up, and detail your beard to perfection.",
  },
  {
    id: "haircut-shave",
    name: "Haircut & Shave with Hot Towel",
    price: 70,
    duration: "60 min",
    description:
      "The full experience. Precision haircut plus a traditional straight razor shave with hot towel treatment.",
  },
];

export const REVIEWS: Review[] = [
  {
    author: "Mike T.",
    rating: 5,
    text: "Best barber in Monmouth County. Jared takes his time and always nails the cut. Been coming here for over a year now.",
    date: "2025-12-15",
  },
  {
    author: "Chris D.",
    rating: 5,
    text: "Finally found a barber who actually listens. The hot towel shave is incredible — worth every penny.",
    date: "2025-11-20",
  },
  {
    author: "Anthony R.",
    rating: 5,
    text: "Brought my son in for his first real haircut. Jared was patient and made it a great experience. We'll be back every month.",
    date: "2026-01-08",
  },
  {
    author: "Dave M.",
    rating: 5,
    text: "Clean shop, great vibes, perfect fade every time. Jared is the real deal.",
    date: "2026-02-14",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do I need an appointment?",
    answer:
      "Appointments are strongly recommended to guarantee your time slot. Book online anytime — it only takes a minute.",
  },
  {
    question: "Where is Baker's Barber Shop located?",
    answer:
      "We're located in Monmouth County, New Jersey, conveniently serving Freehold, Middletown, Holmdel, Colts Neck, Manalapan, Marlboro, Tinton Falls, Shrewsbury, and surrounding communities.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, all major credit and debit cards, Apple Pay, and Google Pay.",
  },
  {
    question: "Do you cut kids' hair?",
    answer:
      "Absolutely! We offer Kid's Cuts for children 12 and under ($25) and Teen Haircuts for ages 13–17 ($30). Jared is patient and experienced with younger clients.",
  },
  {
    question: "How long does a haircut take?",
    answer:
      "A standard haircut takes about 30 minutes. Our Haircut & Shave with Hot Towel — our most premium service — takes about 60 minutes.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer:
      "We understand things come up. Please give at least 24 hours notice if you need to cancel or reschedule your appointment.",
  },
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const AREA_TOWNS = [
  "Freehold",
  "Middletown",
  "Holmdel",
  "Colts Neck",
  "Manalapan",
  "Marlboro",
  "Tinton Falls",
  "Shrewsbury",
  "Eatontown",
  "Long Branch",
  "Rumson",
  "Fair Haven",
] as const;
