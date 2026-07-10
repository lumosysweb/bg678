import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";

interface LegalSection {
  heading: string;
  body: string[];
}

export function LegalContent({ sections, updatedAt }: { sections: LegalSection[]; updatedAt: string }) {
  return (
    <Reveal className="mx-auto max-w-3xl">
      <GlassCard className="space-y-8 p-7 sm:p-10">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">Last updated: {updatedAt}</p>
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-heading text-lg font-semibold text-white">{section.heading}</h2>
            <div className="mt-3 space-y-3">
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </GlassCard>
    </Reveal>
  );
}
