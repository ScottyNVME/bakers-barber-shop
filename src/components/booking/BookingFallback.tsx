import { BUSINESS, SERVICES } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function BookingFallback() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

  return (
    <div className="mx-auto max-w-lg rounded-lg border border-olive-border bg-olive p-8 text-center">
      <h2 className="mb-2 font-heading text-2xl font-bold uppercase tracking-wider text-neutral-100">
        Book Your Appointment
      </h2>
      <p className="mb-6 text-neutral-400">
        Choose your service and book a time that works for you.
      </p>

      {/* Service summary */}
      <div className="mb-6 space-y-2 text-left">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="flex justify-between border-b border-olive-border py-2 text-sm"
          >
            <span className="text-neutral-300">{service.name}</span>
            <span className="font-semibold text-gold">${service.price}</span>
          </div>
        ))}
      </div>

      {bookingUrl ? (
        <Button href={bookingUrl} size="lg" external className="w-full">
          Book Online
        </Button>
      ) : (
        <div className="space-y-3">
          <p className="text-sm text-neutral-500">
            Online booking coming soon!
          </p>
          <p className="text-neutral-300">
            Call to book:{" "}
            <a
              href={`tel:${BUSINESS.phone.replace(/[^\d+]/g, "")}`}
              className="font-semibold text-gold hover:underline"
            >
              {BUSINESS.phone}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
