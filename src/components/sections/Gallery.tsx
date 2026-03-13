import SectionHeading from "@/components/ui/SectionHeading";

const placeholders = [
  "Precision Fade",
  "Classic Taper",
  "Beard Detail",
  "Hot Towel Shave",
  "Fresh Lineup",
  "Modern Crop",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-olive px-4 py-20 sm:px-6"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Our Work"
          subtitle="Quality craftsmanship, every single cut."
          id="gallery-heading"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {placeholders.map((label) => (
            <div
              key={label}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-olive-lighter to-olive-darker"
            >
              {/* Replace with next/image when real photos are available */}
              <div className="flex h-full items-center justify-center p-4">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30">
                    <svg
                      className="h-6 w-6 text-gold/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-neutral-500">
                    {label}
                  </p>
                  <p className="mt-1 text-xs text-neutral-600">
                    Photo coming soon
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
