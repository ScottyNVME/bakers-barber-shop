import { BUSINESS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function Contact() {
  const mapsEmbedUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL;
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "/booking";

  return (
    <section
      id="contact"
      className="bg-olive px-4 py-20 sm:px-6"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Find Us"
          subtitle="Stop in or book online — we'd love to see you."
          id="contact-heading"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-8">
            {/* Address */}
            <div>
              <h3 className="mb-2 font-heading text-lg font-semibold uppercase tracking-wider text-gold">
                Location
              </h3>
              <address className="not-italic text-neutral-300">
                <p>{BUSINESS.address.street}</p>
                <p>
                  {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
                  {BUSINESS.address.zip}
                </p>
              </address>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-gold underline-offset-4 hover:underline"
              >
                Get Directions
              </a>
            </div>

            {/* Phone & Email */}
            <div>
              <h3 className="mb-2 font-heading text-lg font-semibold uppercase tracking-wider text-gold">
                Contact
              </h3>
              <p>
                <a
                  href={`tel:${BUSINESS.phone.replace(/[^\d+]/g, "")}`}
                  className="text-lg text-neutral-300 transition-colors hover:text-gold"
                >
                  {BUSINESS.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-neutral-300 transition-colors hover:text-gold"
                >
                  {BUSINESS.email}
                </a>
              </p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="mb-2 font-heading text-lg font-semibold uppercase tracking-wider text-gold">
                Hours
              </h3>
              <dl className="space-y-1 text-neutral-300">
                {Object.entries(BUSINESS.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <dt className="font-medium">{day}</dt>
                    <dd className={hours === "Closed" ? "text-neutral-500" : ""}>
                      {hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <Button href={bookingUrl} size="lg">
              Book Your Appointment
            </Button>
          </div>

          {/* Map */}
          <div className="aspect-square overflow-hidden rounded-lg bg-olive-darker lg:aspect-auto lg:min-h-[400px]">
            {mapsEmbedUrl ? (
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing location of ${BUSINESS.name}`}
              />
            ) : (
              <div className="flex h-full min-h-[400px] items-center justify-center">
                <div className="text-center">
                  <svg
                    className="mx-auto mb-3 h-12 w-12 text-gold/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <p className="text-sm text-neutral-500">Map coming soon</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-gold underline-offset-4 hover:underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
