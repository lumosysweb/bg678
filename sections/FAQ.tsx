import { FAQ_ITEMS } from "@/lib/data";
import { faqSchema } from "@/lib/seo";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Support"
          title="Frequently Asked Questions"
          description="Everything you need to know before you get started."
        />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <Accordion items={FAQ_ITEMS} />
        </Reveal>
      </div>
    </section>
  );
}
