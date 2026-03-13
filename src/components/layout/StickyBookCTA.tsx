"use client";

import { useState, useEffect } from "react";

export default function StickyBookCTA() {
  const [visible, setVisible] = useState(false);
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "/booking";

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-leather-dark bg-gold p-3 text-center md:hidden"
      role="complementary"
      aria-label="Book appointment"
    >
      <a
        href={bookingUrl}
        className="inline-flex min-h-[44px] w-full items-center justify-center font-heading text-lg font-bold uppercase tracking-wider text-olive-darker"
      >
        Book Your Appointment
      </a>
    </div>
  );
}
