"use client";

import { useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  bookingUrl: string;
}

export default function MobileNav({ open, onClose, bookingUrl }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      id="mobile-nav"
      className="fixed inset-0 z-50 bg-charcoal-darker/98 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
        {/* Close button */}
        <button
          type="button"
          className="absolute top-4 right-4 flex min-h-[44px] min-w-[44px] items-center justify-center"
          onClick={onClose}
          aria-label="Close menu"
        >
          <svg
            className="h-7 w-7 text-neutral-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Nav links */}
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-heading text-2xl font-semibold uppercase tracking-wider text-neutral-100 transition-colors hover:text-gold"
            onClick={onClose}
          >
            {link.label}
          </a>
        ))}

        <div className="mt-4">
          <Button href={bookingUrl} size="lg" onClick={onClose}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
