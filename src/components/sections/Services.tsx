import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "/booking";

  return (
    <section
      id="services"
      className="bg-olive-darker px-4 py-20 sm:px-6"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Services & Pricing"
          subtitle="Quality cuts at honest prices. Every service includes a consultation."
          id="services-heading"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              bookingUrl={bookingUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
