"use client";

import { useEffect, useRef, useState } from "react";
import BookingFallback from "./BookingFallback";

export default function BookingWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const widgetCode = process.env.NEXT_PUBLIC_BOOKING_WIDGET_CODE;

  useEffect(() => {
    if (!widgetCode || !containerRef.current) return;

    // Dynamically inject the booking platform's embed script
    const range = document.createRange();
    const fragment = range.createContextualFragment(widgetCode);
    containerRef.current.appendChild(fragment);
    setLoaded(true);
  }, [widgetCode]);

  // No widget code configured — show fallback
  if (!widgetCode) {
    return <BookingFallback />;
  }

  return (
    <div ref={containerRef} className="min-h-[600px]">
      {!loaded && <BookingFallback />}
    </div>
  );
}
