interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">{description}</p>
      )}
    </div>
  );
}
