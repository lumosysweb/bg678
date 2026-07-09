"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import type { FAQItem } from "@/types";

export function Accordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="glass overflow-hidden rounded-2xl transition-colors duration-300 hover:border-primary/30"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <h3 className="font-heading text-base font-semibold text-white sm:text-lg">
                {item.question}
              </h3>
              <Icon
                name="chevron-down"
                className={`shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
