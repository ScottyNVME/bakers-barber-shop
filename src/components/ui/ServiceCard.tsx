import type { Service } from "@/types";
import Button from "./Button";

interface ServiceCardProps {
  service: Service;
  bookingUrl: string;
}

export default function ServiceCard({ service, bookingUrl }: ServiceCardProps) {
  return (
    <div className="group rounded-lg border border-charcoal-border bg-charcoal p-6 transition-colors duration-200 hover:border-gold/40">
      <div className="mb-3 flex items-start justify-between">
        <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-neutral-100">
          {service.name}
        </h3>
        <span className="font-heading text-2xl font-bold text-gold">
          ${service.price}
        </span>
      </div>
      <p className="mb-1 text-sm text-neutral-500">{service.duration}</p>
      <p className="mb-5 text-neutral-400">{service.description}</p>
      <Button href={bookingUrl} variant="outline" size="sm" external>
        Book This Service
      </Button>
    </div>
  );
}
