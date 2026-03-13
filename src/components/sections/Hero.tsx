import { BUSINESS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Hero() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "/booking";

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Welcome"
    >
      {/* Background gradient placeholder — replace with real image */}
      <div className="absolute inset-0 bg-gradient-to-br from-olive-darker via-olive to-olive-darker" />
      {/* Dark overlay for text readability when using a real photo */}
      <div className="absolute inset-0 bg-olive-darker/50" />

      {/* Decorative gold line accents */}
      <div className="absolute top-0 left-0 h-1 w-1/3 bg-gradient-to-r from-gold to-transparent" />
      <div className="absolute bottom-0 right-0 h-1 w-1/3 bg-gradient-to-l from-leather to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-6">
        {/* Tagline */}
        <p className="mb-4 font-accent text-lg italic tracking-wide text-gold sm:text-xl">
          {BUSINESS.address.county}, New Jersey
        </p>

        {/* Main heading */}
        <h1 className="mb-6 font-heading text-4xl font-bold uppercase leading-tight tracking-wider text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-gold">Baker&apos;s</span>
          <br />
          Barber Shop
        </h1>

        {/* Subheading */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-neutral-300 sm:text-xl">
          Premium haircuts, fades, beard trims, and hot towel shaves by{" "}
          <strong className="text-gold">{BUSINESS.owner}</strong> —{" "}
          {BUSINESS.tagline.toLowerCase()}.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href={bookingUrl} size="lg">
            Book Your Cut
          </Button>
          <Button href="#services" variant="outline" size="lg">
            View Services &amp; Pricing
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-gold/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
