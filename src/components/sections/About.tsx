import { BUSINESS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function About() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "/booking";

  return (
    <section
      id="about"
      className="bg-charcoal-darker px-4 py-20 sm:px-6"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Photo placeholder */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gradient-to-br from-charcoal-lighter to-charcoal">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/30">
                  <svg
                    className="h-10 w-10 text-gold/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0"
                    />
                  </svg>
                </div>
                <p className="text-sm text-neutral-500">
                  Photo of {BUSINESS.owner}
                </p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <SectionHeading
              title={`Meet ${BUSINESS.owner}`}
              subtitle="Your barber. Your neighbor."
              id="about-heading"
              align="left"
            />
            <div className="space-y-4 text-neutral-300">
              <p>
                With years of experience behind the chair, Jared Baker has honed
                his craft to deliver precise, personalized cuts for every
                client. From classic styles to modern fades, every service is
                tailored to you.
              </p>
              <p>
                Born and raised in {BUSINESS.address.county}, Jared opened{" "}
                {BUSINESS.name} with one goal: to give every man and boy in the
                community a barbershop experience they actually look forward to.
                No rushed cuts, no cookie-cutter styles — just quality
                craftsmanship and genuine attention to detail.
              </p>
              <p>
                Whether you&apos;re here for a quick trim or the full hot towel
                shave experience, you&apos;ll leave looking sharp and feeling
                confident.
              </p>
            </div>
            <div className="mt-8">
              <Button href={bookingUrl}>Book with Jared</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
