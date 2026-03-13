import { BUSINESS, SERVICES, FAQ_ITEMS, AREA_TOWNS } from "./constants";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.bakersbarbershopnj.com";

export function generateBarberShopSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["BarberShop", "LocalBusiness"],
    name: BUSINESS.name,
    description: `${BUSINESS.name} — ${BUSINESS.tagline}. Expert haircuts, fades, beard trims, and hot towel shaves by ${BUSINESS.owner}.`,
    url: siteUrl,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    areaServed: AREA_TOWNS.map((town) => ({
      "@type": "Place",
      name: `${town}, NJ`,
    })),
    openingHoursSpecification: Object.entries(BUSINESS.hours)
      .filter(([, value]) => value !== "Closed")
      .map(([day, hours]) => {
        const [open, close] = hours.replace(/\s/g, "").split("–");
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: day,
          opens: convertTo24Hour(open),
          closes: convertTo24Hour(close),
        };
      }),
    priceRange: "$20–$70",
    image: `${siteUrl}/og-image.jpg`,
    sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook].filter(
      Boolean
    ),
    founder: {
      "@type": "Person",
      name: BUSINESS.owner,
      jobTitle: "Master Barber",
    },
  };
}

export function generateServicesSchema() {
  return SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "BarberShop",
      name: BUSINESS.name,
    },
    offers: {
      "@type": "Offer",
      price: service.price.toString(),
      priceCurrency: "USD",
    },
  }));
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function convertTo24Hour(time: string): string {
  const match = time.match(/^(\d{1,2}):(\d{2})(AM|PM)$/i);
  if (!match) return time;
  let hours = parseInt(match[1], 10);
  const minutes = match[2];
  const period = match[3].toUpperCase();
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}
