interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  id,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2
        id={id}
        className="font-heading text-3xl font-bold uppercase tracking-wide text-neutral-100 sm:text-4xl"
      >
        {title}
      </h2>
      <div
        className={`mt-3 h-1 w-16 rounded bg-gold ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-400">{subtitle}</p>
      )}
    </div>
  );
}
