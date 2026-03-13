import type { Metadata } from "next";
import Link from "next/link";
import BookingWidget from "@/components/booking/BookingWidget";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your haircut, fade, beard trim, or hot towel shave with Jared Baker at Baker's Barber Shop in Monmouth County, NJ.",
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-charcoal-darker px-4 pt-28 pb-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-gold"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        <BookingWidget />
      </div>
    </div>
  );
}
