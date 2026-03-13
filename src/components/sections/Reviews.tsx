import { REVIEWS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewCard from "@/components/ui/ReviewCard";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-charcoal px-4 py-20 sm:px-6"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real reviews from real clients."
          id="reviews-heading"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </div>
        {/* TODO: Replace with a link to your Google Business Profile reviews */}
        <p className="mt-8 text-center text-sm text-neutral-500">
          See more reviews on{" "}
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline-offset-4 hover:underline"
          >
            Google
          </a>
        </p>
      </div>
    </section>
  );
}
