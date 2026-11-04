import { useState } from "react";
import PageLayout from "../PageLayout";
import FadeInText from "../../components/FadeIn";
import SectionSubtitle from "../../components/SectionSubtitle";
import journeyData from "../../data/journey";
import type { Journey } from "../../data/journey";

function JobCard({ item }: { item: Journey }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const current = item.date.includes("Present");

  return (
    <article className="relative pl-8 pb-10">
      <span
        className={`absolute left-0 top-2.5 h-2 w-2 -translate-x-1/2 rounded-full ${
          current ? "bg-sage" : "bg-clay"
        }`}
      />
      <div className="flex justify-between gap-6">
        <h3>
          {current && (
            <span className="mb-1 block text-[10px] uppercase tracking-[0.22em] text-sage">
              Current
            </span>
          )}
          <span className="font-display text-2xl text-ink leading-tight block">
            {item.title}
          </span>
          <span className="text-sm text-clay block mt-1">{item.subtitle}</span>
        </h3>
        <p className="text-right shrink-0">
          <span className="text-[11px] tracking-[0.14em] uppercase text-ink block">
            {item.date}
          </span>
          <span className="text-xs text-mist block mt-1">{item.location}</span>
        </p>
      </div>
      <div className="pt-3 max-w-2xl">
        {isExpanded ? (
          <ul className="text-sm space-y-2 text-mist leading-relaxed">
            {item.description.map((d) => (
              <li key={d} dangerouslySetInnerHTML={{ __html: d }} />
            ))}
          </ul>
        ) : (
          <p className="text-sm text-mist">{item.blurb}</p>
        )}
        <button
          type="button"
          onClick={() => setIsExpanded((open) => !open)}
          className="mt-3 text-[11px] tracking-[0.18em] uppercase text-ink hover:text-clay transition-colors"
        >
          {isExpanded ? "Close" : "Details"}
        </button>
      </div>
    </article>
  );
}

export default function Journey() {
  return (
    <PageLayout
      label="Experience"
      title="Professional experience"
      divId="journey-div"
      icon={null}
    >
      <SectionSubtitle>
        Roles and the work inside them, from radio software at Dell to an
        internship on Amazon’s Ordering Accounting team.
      </SectionSubtitle>
      <div className="w-full max-w-3xl text-left mt-12 border-l border-line">
        {journeyData.map((item, i) => (
          <FadeInText key={item.id} delay={i * 0.04}>
            <JobCard item={item} />
          </FadeInText>
        ))}
      </div>
    </PageLayout>
  );
}
