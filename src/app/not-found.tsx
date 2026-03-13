import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-olive-darker px-4">
      <div className="text-center">
        <p className="font-heading text-6xl font-bold text-gold">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold uppercase tracking-wider text-neutral-100">
          Page Not Found
        </h1>
        <p className="mt-2 text-neutral-400">
          Looks like this page got a close shave. Let&apos;s get you back on
          track.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/">Back to Home</Button>
          <Button href="/booking" variant="outline">
            Book an Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}
